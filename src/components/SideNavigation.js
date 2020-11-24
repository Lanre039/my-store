import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideNav from "react-simple-sidenav";
import calcTotalPrice from "../utils/calcTotalPrice";
import SideNavItem from "./SideNavItem";
import { clearCart } from "../redux/actions/cartActions";

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
    <div className="d-flex justify-content-between align-items-center">
      <h5>TotalPrice: {calcTotalPrice(cartItems)}</h5>
      <button className="btn btn-danger" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
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
        backgroundColor: "grey",
        width: "100%",
        padding: "2rem",
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
