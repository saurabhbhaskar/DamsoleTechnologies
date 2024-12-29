import React, { useState, useEffect } from 'react';
import CommonSection from '../shared/CommonSection';
import '../styles/tour.css';
import TourCard from './../shared/TourCard';
import SearchBar from './../shared/SearchBar';
import Newsletter from './../shared/Newsletter';
import { Col, Container, Row } from 'reactstrap';

// Import tours data directly
import toursData from '../assets/data/tours'; // Ensure the file path is correct

const Tours = () => {
   const [pageCount, setPageCount] = useState(0);
   const [page, setPage] = useState(0);
   const itemsPerPage = 8;

   // Paginate tours data
   const [paginatedTours, setPaginatedTours] = useState([]);

   useEffect(() => {
      // Calculate page count and paginate data
      const pages = Math.ceil(toursData.length / itemsPerPage);
      setPageCount(pages);

      const startIndex = page * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setPaginatedTours(toursData.slice(startIndex, endIndex));

      window.scrollTo(0, 0);
   }, [page]);

   return (
      <>
         <CommonSection title={'All Tours'} />
         <section>
            <Container>
               <Row>
                  <SearchBar />
               </Row>
            </Container>
         </section>

         <section className="pt-0">
            <Container>
               <Row>
                  {paginatedTours.map((tour) => (
                     <Col lg="3" md="6" sm="6" className="mb-4" key={tour.id}>
                        <TourCard tour={tour} />
                     </Col>
                  ))}

                  <Col lg="12">
                     <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                        {[...Array(pageCount).keys()].map((number) => (
                           <span
                              key={number}
                              onClick={() => setPage(number)}
                              className={page === number ? 'active__page' : ''}
                           >
                              {number + 1}
                           </span>
                        ))}
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
         <Newsletter />
      </>
   );
};

export default Tours;
