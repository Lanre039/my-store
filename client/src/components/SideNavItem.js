import React from "react";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItem,
} from "../redux/actions/cartActions";

function SideNavItem({ item }) {
  const { title, quantity, price, image } = item;
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="card">
        <div className="d-flex align-items-center">
          <div
            style={{
              width: "25%",
              height: "25%",
              borderRadius: "50%",
              padding: "1rem",
            }}
          >
            <img src={image} width="100%" height="100%" alt=""></img>
          </div>
          <h5 className="card-title text-truncate text-capitalize mt-1">
            {title}
          </h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-capitalize">
            <div className="d-flex justify-content-between">
              <span>Quantity: {quantity}</span>
              <span>Price: ₦{price}</span>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-info text-center px-3"
                style={{ fontSize: "1.2rem" }}
                onClick={() => dispatch(addItemToCart(item))}
              >
                &#43;
              </button>
              <button
                className="btn btn-info text-center px-3"
                style={{ fontSize: "1.2rem" }}
                onClick={() => dispatch(removeItem(item))}
              >
                &#8722;
              </button>
              <button
                className="btn btn-danger text-center px-3"
                style={{ fontSize: "1.2rem" }}
                onClick={() => dispatch(clearItemFromCart(item))}
              >
                &#10799;
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavItem;
