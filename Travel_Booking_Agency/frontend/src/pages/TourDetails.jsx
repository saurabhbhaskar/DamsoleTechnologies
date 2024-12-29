import React, { useState, useRef, useEffect, useContext } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';
import { AuthContext } from '../context/AuthContext';
import tours from '../assets/data/tours'; // Import local data

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  // Find the specific tour using the `id` from the local `tours` data
  const tour = tours.find((tour) => tour.id === id);

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    address,
    distance,
    maxGroupSize,
  } = tour || {};

  const { totalRating, avgRating } = calculateAvgRating(reviews || []);

  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user) {
        alert('Please sign in');
        return;
      }
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      // Push new review to local reviews array (no actual server interaction)
      reviews.push(reviewObj);
      alert('Review submitted successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  if (!tour) {
    return (
      <Container>
        <h4 className="text-center pt-5">Tour not found</h4>
      </Container>
    );
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour__content">
              <img src={photo} alt={title} />

              <div className="tour__info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i
                      className="ri-star-fill"
                      style={{ color: 'var(--secondary-color)' }}
                    ></i>
                    {avgRating === 0 ? null : avgRating}
                    {avgRating === 0 ? (
                      'Not rated'
                    ) : (
                      <span>({reviews?.length})</span>
                    )}
                  </span>

                  <span>
                    <i className="ri-map-pin-fill"></i> {address}
                  </span>
                </div>

                <div className="tour__extra-details">
                  <span>
                    <i className="ri-map-pin-2-line"></i> {city}
                  </span>
                  <span>
                    <i className="ri-money-dollar-circle-line"></i> ₹{price} /
                    per person
                  </span>
                  <span>
                    <i className="ri-map-pin-time-line"></i> {distance} km
                  </span>
                  <span>
                    <i className="ri-group-line"></i> {maxGroupSize} people
                  </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              {/* ============ TOUR REVIEWS SECTION START ============ */}
              <div className="tour__reviews mt-4">
                <h4>Reviews ({reviews?.length} reviews)</h4>

                <Form onSubmit={submitHandler}>
                  <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <span
                        key={rating}
                        onClick={() => setTourRating(rating)}
                      >
                        {rating} <i className="ri-star-s-fill"></i>
                      </span>
                    ))}
                  </div>

                  <div className="review__input">
                    <input
                      type="text"
                      ref={reviewMsgRef}
                      placeholder="Share your thoughts"
                      required
                    />
                    <button
                      className="btn primary__btn text-white"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>

                <ListGroup className="user__reviews">
                  {reviews?.map((review, index) => (
                    <div className="review__item" key={index}>
                      <img src={avatar} alt="Avatar" />

                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>{review.name}</h5>
                            <p>{review.comment}</p>
                            <h5>
                              {new Date().toLocaleDateString('en-US', options)}
                            </h5>
                          </div>

                          <span className="d-flex align-items-center">
                            {review.rating}
                            <i className="ri-star-s-fill"></i>
                          </span>
                        </div>

                        <h6>{review.reviewText}</h6>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </div>
              {/* ============ TOUR REVIEWS SECTION END ============== */}
            </div>
          </Col>

          <Col lg="4">
            <Booking tour={tour} avgRating={avgRating} />
          </Col>
        </Row>
      </Container>
      <Newsletter />
    </section>
  );
};

export default TourDetails;
