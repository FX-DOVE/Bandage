import Footer from "../FooterSection/footer";
import Navbar from "../Header/navbar";
import CartItems from "./cartItems";
import CartSection from "./addcart";



function Cart() {
  return (
    <>
      <Navbar />
      <CartSection />
      <CartItems />
      <Footer />
    </>
  )
}

export default Cart;