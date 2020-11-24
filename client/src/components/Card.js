import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/actions/cartActions";

function Card({ collection }) {
  const { image, title, description, price } = collection;

  const dispatch = useDispatch();

  const handleAddItemToCart = (itemToAdd) => {
    dispatch(addItemToCart(itemToAdd));
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-12 card mt-3 mb-3 p-3 shadow">
      <img
        src={image}
        className="card-img-top"
        alt="..."
        height="200px"
        width="200px"
        style={{ borderRadius: "100%" }}
      />
      <div className="card-body">
        <h5 className="card-title text-truncate text-capitalize">{title}</h5>
        <p className="card-text text-truncate text-capitalize">{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item h5 text-capitalize">
          Price: &nbsp; ₦{price}
        </li>
        <li className="list-group-item">
          <button
            className="btn btn-info"
            onClick={() => handleAddItemToCart(collection)}
          >
            Add to Cart
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Card;
