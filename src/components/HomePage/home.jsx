import Navbar from "../Header/navbar";
import Slide from "../Slider/Slider";
import Feature from "../ProductSection/feature";
import Post from "../ProductSection/post";
import Testimonial from "../ProductSection/testimonial";
import CartBackground from "../ProductSection/productBackground";
import Footer from "../FooterSection/footer";
import ProductContainer from "../ProductSection/productContainer";

function Main() {
  return (
    <>
      <Navbar />
      <Slide />
      <ProductContainer />
      <Feature />
      <Post />
      <Testimonial />
      <CartBackground />
      <Footer />
    </>
  );
}

export default Main;
