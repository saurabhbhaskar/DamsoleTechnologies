import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
   const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         }
      ]
   }

   return <Slider {...settings}>
      <div className="testimonial py-4 px-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
         <p>"Destiny Travel made my trip to Rajasthan truly unforgettable. From the desert safaris to the majestic forts, the experience was seamless. The team’s attention to detail ensured that I had the best time, and I didn’t have to worry about a thing!"</p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Ravi Kumar</h6>
               <p>Customer from Delhi</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
         <p>"I took a spiritual journey to Varanasi through Destiny Travel and it was an enriching experience. The guides were well-versed with the culture and rituals of the place, making the visit even more meaningful. Highly recommend it for anyone looking to explore India’s rich heritage!"</p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Priya Singh</h6>
               <p>Customer from Mumbai</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
         <p>"The Goa beach tour organized by Destiny Travel was nothing short of perfect. From the sandy beaches to the vibrant nightlife, everything was arranged flawlessly. We even got local insights and tips, making the trip even more enjoyable!"</p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Amit Sharma</h6>
               <p>Customer from Bangalore</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
         <p>"I booked a honeymoon package with Destiny Travel for our trip to Kerala. It was magical – from the houseboat ride to the serene beaches, it was everything we dreamed of. The team made sure every detail was perfect. Thank you for making our honeymoon special!"</p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Neha & Arvind</h6>
               <p>Customers from Chennai</p>
            </div>
         </div> 
      </div>
   </Slider>
}

export default Testimonials
