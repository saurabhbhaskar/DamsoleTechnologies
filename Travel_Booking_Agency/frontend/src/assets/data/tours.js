import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpeg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Ajanta Caves",
    city: "Maharashtra",
    distance: 300,
    address: "Aurangabad, Maharashtra",
    price: 10000,
    maxGroupSize: 10,
    desc: "The Ajanta Caves are 30 caves carved into a giant cliff face. These marvelous caves are in fantastic condition due to being 'forgotten' until 1819, when a British tiger hunting party stumbled upon them.",
    reviews: [
      {
        name: "Rajesh Sharma",
        rating: 4.7,
        comment: "An amazing experience of ancient Indian art and architecture. A must-visit place!"
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "The Golden Temple",
    city: "Amritsar, Punjab",
    distance: 400,
    address: "Golden Temple Road, Amritsar, Punjab",
    price: 5000,
    maxGroupSize: 8,
    desc: "This majestic temple is a must-visit attraction, featuring stunning architecture and a grandiose atmosphere. Built in 1604, the Golden Temple symbolizes equality and spirituality.",
    reviews: [
      {
        name: "Simran Kaur",
        rating: 5,
        comment: "A spiritual and peaceful experience like no other. The food at the langar was incredible!"
      },
    ],
    avgRating: 4.8,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Mehrangarh Fort",
    city: "Jodhpur, Rajasthan",
    distance: 500,
    address: "Mehrangarh Fort, Jodhpur, Rajasthan",
    price: 1500,
    maxGroupSize: 8,
    desc: "Mehrangarh Fort is a tremendous sight, towering above the city. With seven gates bearing battle scars and a rich history, it’s a must-see for history buffs.",
    reviews: [
      {
        name: "Ankit Verma",
        rating: 4.6,
        comment: "The fort offers stunning views of Jodhpur and has a rich history. The museum is well-maintained."
      },
    ],
    avgRating: 4.7,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "05",
    title: "Agra Fort",
    city: "Agra, Uttar Pradesh",
    distance: 500,
    address: "Agra Fort, Agra, Uttar Pradesh",
    price: 9000,
    maxGroupSize: 8,
    desc: "Located near the Taj Mahal, Agra Fort is a red sandstone fortress with marvelous architecture. It is still partially used by the Indian Army today.",
    reviews: [
      {
        name: "Nidhi Gupta",
        rating: 4.6,
        comment: "A wonderful blend of history and architecture. A must-visit after the Taj Mahal!"
      },
    ],
    avgRating: 4.6,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Mysore Palace",
    city: "Mysore, Karnataka",
    distance: 500,
    address: "Mysore Palace, Mysore, Karnataka",
    price: 8000,
    maxGroupSize: 8,
    desc: "Mysore Palace is a regal icon built in 1912. It is surrounded by lush gardens and features 18 beautifully adorned temples.",
    reviews: [
      {
        name: "Suresh Nair",
        rating: 4.7,
        comment: "The palace is stunning, especially when lit up in the evening. A great glimpse into royal history."
      },
    ],
    avgRating: 4.7,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Darjeeling Himalayan Railway",
    city: "Darjeeling, West Bengal",
    distance: 500,
    address: "Darjeeling, West Bengal",
    price: 4500,
    maxGroupSize: 8,
    desc: "The Darjeeling Himalayan Railway offers a scenic journey with a historic steam locomotive. It has UNESCO World Heritage Site status.",
    reviews: [
      {
        name: "Priya Das",
        rating: 4.8,
        comment: "The toy train ride is magical, with breathtaking views of the hills. A memorable experience!"
      },
    ],
    avgRating: 4.8,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Taj Mahal",
    city: "Agra, Uttar Pradesh",
    distance: 500,
    address: "Taj Mahal, Agra, Uttar Pradesh",
    price: 6500,
    maxGroupSize: 8,
    desc: "The Taj Mahal, an iconic symbol of love, is one of the world's most recognizable landmarks and a masterpiece of Indo-Islamic architecture.",
    reviews: [
      {
        name: "Ayesha Khan",
        rating: 5,
        comment: "Absolutely mesmerizing! Pictures don't do justice to the beauty of the Taj Mahal."
      },
    ],
    avgRating: 4.9,
    photo: tourImg04,
    featured: false,
  },
  {
    id: "09",
    title: "Ranthambore National Park",
    city: "Rajasthan",
    distance: 400,
    address: "Ranthambore, Rajasthan",
    price: 12000,
    maxGroupSize: 12,
    desc: "Ranthambore National Park, famous for its population of Bengal tigers, is a perfect destination for wildlife lovers. This park also offers beautiful views of the ancient Ranthambore Fort and the surrounding lakes, making it a must-visit spot for nature enthusiasts and photographers alike.",
    reviews: [
      {
        name: "Amit Sharma",
        rating: 4.8,
        comment: "A wonderful wildlife experience! We saw a tiger up close, and the guide was knowledgeable and friendly."
      },
      {
        name: "Priya Gupta",
        rating: 4.5,
        comment: "Amazing experience. The park is beautiful, and the safari tour was very exciting. Highly recommend it."
      }
    ],
    avgRating: 4.6,
    photo: tourImg08,
    featured: true,
  }
];

export default tours;
