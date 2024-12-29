import React from 'react';
import TourCard from '../../shared/TourCard';
import { Col } from 'reactstrap';
import tours from '../../assets/data/tours'; // Import the tours array

const FeaturedTourList = () => {
  // Filter the featured tours from the local data
  const featuredTours = tours.filter(tour => tour.featured);

  return (
    <>
      {
        featuredTours.map(tour => (
          <Col lg="3" md="4" sm="6" className="mb-4" key={tour.id}>
            <TourCard tour={tour} />
          </Col>
        ))
      }
    </>
  );
};

export default FeaturedTourList;
