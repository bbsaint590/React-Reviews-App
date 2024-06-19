import './App.css';
import profilePic from '/src/Components/Testimonial/profilePic.png';
import Heading from './Components/Heading/Index';
import Stars from './Components/Stars';
import Testimonial from './Components/Testimonial'; 

function App() {
  const testimonials = [
    { image: profilePic, name: "Colton Smith", verified: true, rating: <Stars starSym={5} category='reviews' />, testimony: "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!" },
    { image: profilePic, name: "Irene Roberts", verified: true, rating: <Stars starSym={2} category='Report Guru' />, testimony: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery." },
    { image: profilePic, name: "Anne Wallace", verified: true, rating: <Stars starSym={3} category='BestTech' />, testimony: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!" }
  ];

  return (
    <>
      <div>
        <Heading title="10,000+ of our users love our products." subtitle="We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services." />
      </div>

      <div className='test'>
        {testimonials.map((item, index) => (
          <div key={index} className='testimonial'>
            <Testimonial
              image={item.image}
              name={item.name}
              verified={item.verified}
              rating={item.rating}
              testimony={item.testimony}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;


