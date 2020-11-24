import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideNav from "react-simple-sidenav";
import calcTotalPrice from "../utils/calcTotalPrice";
import SideNavItem from "./SideNavItem";
import { clearCart } from "../redux/actions/cartActions";
import StripePayButton from "../components/StripePayButton";

function SideNavigation({ isOpen, setIsOpen }) {
  const [data, setData] = useState([]);

  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const items = cartItems.map((cartItem) => (
      <div className="w-100">
        <SideNavItem item={cartItem} />
      </div>
    ));
    setData([...items]);
  }, [cartItems]);

  const cartHead = (
    <div className="text-left">
      <h5 className="mt-0">Shoping Summary</h5>
      <h5 className="mb-2">TotalPrice: ₦{calcTotalPrice(cartItems)}</h5>
      <div className="d-flex justify-content-between mt-2">
        <StripePayButton price={calcTotalPrice(cartItems)} />
        <div>
          <button
            className="btn btn-danger shadow"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <SideNav
      openFromRight={true}
      showNav={isOpen}
      onHideNav={() => setIsOpen(false)}
      navStyle={{ overflow: "scroll" }}
      title={cartHead}
      titleStyle={{
        backgroundColor: "#17a2b8",
        width: "100%",
        padding: "1rem 2rem",
      }}
      items={data.length > 0 ? data : [<h4>Empty Cart</h4>]}
      itemStyle={{
        padding: ".5rem",
        paddingLeft: 0,
      }}
      chidren={data}
    />
  );
}

export default SideNavigation;
