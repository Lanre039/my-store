import React from "react";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItem,
} from "../redux/actions/cartActions";

function SideNavItem({ item }) {
  const { description, title, quantity, price } = item;
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-truncate text-capitalize">{title}</h5>
          <p className="card-text text-truncate">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-capitalize">
            <div className="d-flex justify-content-between">
              <span>Quantity: {quantity}</span>
              <span>Price: {price}</span>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-info"
                onClick={() => dispatch(addItemToCart(item))}
              >
                Increase item
              </button>
              <button
                className="btn btn-info"
                onClick={() => dispatch(removeItem(item))}
              >
                Reduce item
              </button>
            </div>
          </li>
          <li className="list-group-item">
            <button
              className="btn btn-danger"
              onClick={() => dispatch(clearItemFromCart(item))}
            >
              Remove item
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavItem;
