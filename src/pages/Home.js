import Hero from '../components/Hero';
import About from '../components/About';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import CateringComponent from '../components/CateringComponent';
import transition from '../transition';


const Home = () => {
    return (
    <>
    <Hero />
    <About />
    <Team />
    <CateringComponent />
    <Testimonial />
    </>
    );
};

export default transition(Home);