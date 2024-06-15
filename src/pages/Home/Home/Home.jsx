import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import NewsLetter from "../NewsLetter/NewsLetter";
import PopularMenu from "../PopularMenu/PopularMenu";
import ShouldTry from "../ShouldTry/ShouldTry";
import Testimonial from "../Testimonial/Testimonial";
// import Home from "/Home/Banner/Banner.jsx";

const Home = () => {
    return (

        <div>
            <Helmet>
                <title>BISTRO BOSS || HOME</title>
            </Helmet>
            {/* <h1 className="text-3xl font-bold underline">
                This is home
            </h1> */}
            <Banner />
            <Category />
            <NewsLetter />
            <PopularMenu />
            <Contact />
            <ShouldTry />
            <Featured />
            <Testimonial />
        </div>
    );
};

export default Home;