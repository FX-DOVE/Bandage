import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseCart,
  getTotals,
} from "../../features/cartSlice";
import { fetchProducts } from "../../features/productsSlice";
import styles from "../../styles/addcart.module.css";
import star from "../../assets/stars.svg";
import { MdDeleteOutline } from "react-icons/md";
import { FaAngleRight, FaMinus, FaPlus } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import card from "../../assets/Mastercard - png.svg"
import visa from "../../assets/Visa Inc. - png.svg"
import paystack from "../../assets/Paystack - png.svg"

const CartSection = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const products = useSelector((state) => state.products.products);
  const { cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseCart(item));
  };

  const handleIncreaseQuantity = (item) => {
    const product = products.find((product) => product.id === item.id);
    if (product) {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className={styles.cartMainContainer}>
    <div className={styles.shopLinks}>
      <nav>
        <a href="#" className={styles.home}>Home</a>
        <FaAngleRight />
        <a href="#" className={styles.home}>Shop</a>
        <FaAngleRight className={styles.disabledLink} />
        <a href="#" className={styles.shop}>Shopping Cart</a>
      </nav>
    </div>
    <div className={styles.cartContainer}>
      <div className={styles.cartContent}>
        <h3>Shopping Cart</h3>
        <div className={styles.itemHeader}>
          <p>Item Details</p>
          <div className={styles.quantityPrice}>
            <p>Quantity</p>
            <p>Price</p>
          </div>
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.itemContainer}>
            <div className={styles.heroCartSection}>
              <div className={styles.heroItem}>
                <img src={item.thumbnail} alt={item.title} />
                <div className={styles.cartText}>
                  <h4>{item.title}</h4>
                  <p>{item.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                  <div className={styles.iconText}>
                    <img src={starIcon} alt="Star" />
                    <span>{item.reviews?.rating || 0} Reviews</span>
                  </div>
                </div>
              </div>
              <div className={styles.addQuantity}>
                <FaMinus onClick={() => handleDecrease(item)} />
                <input type="number" value={item.cartQuantity} readOnly />
                <FaPlus onClick={() => handleIncrease(item)} />
              </div>
              <div className={styles.priceQuantity}>
                <h4>${item.price}</h4>
                <p>${item.price} <LiaTimesSolid /> {item.cartQuantity} Item</p>
              </div>
            </div>
            <div className={styles.deleteContainer}>
              <MdDeleteOutline onClick={() => handleRemove(item)} />
              <h4>REMOVE</h4>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cartSummary}>
        <h3>Order Summary</h3>
        <p>{cartTotalQuantity} Items</p>
        <div className={styles.summaryContent}>
          <h4>Delivery Charges</h4>
          <small>Add your delivery address to checkout to see delivery charges.</small>
        </div>
        <div className={styles.line}></div>
        <div className={styles.summaryContent}>
          <h4 className={styles.subtotal}>Subtotal</h4>
          <p className={styles.subtotalAmount}>${cartTotalAmount}</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.summaryContent}>
          <h4>Total Amount</h4>
          <p>${cartTotalAmount}</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.summaryContent}>
          <small>Excluding Delivery Charges</small>
        </div>
        <button className={styles.checkoutButton}>Proceed to Checkout</button>
        <div className={styles.paymentImages}>
          <img src={paystackIcon} alt="Paystack" />
          <img src={mastercardIcon} alt="Mastercard" />
          <img src={visaIcon} alt="Visa" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default CartSection;
