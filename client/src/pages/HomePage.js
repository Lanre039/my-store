import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalogue } from "../redux/actions/shopCatalogueActions";
import CardCollection from "../components/CardCollection";
import SideNavigation from "../components/SideNavigation";
import img from "../images/shopping-cart.png";

function HomePage(props) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const { isFetching, collections } = useSelector((state) => state.catalogue);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!collections) {
      dispatch(fetchCatalogue());
    }
  }, [collections, dispatch]);

  return (
    <div className="bg-light">
      <nav className="bg-info p-3 px-5 d-flex justify-content-end">
        <div
          style={{ width: "fit-content", cursor: "pointer" }}
          className="bg-light d-flex justify-content-between align-items-center px-3 shadow"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={img} alt="" width="25px" height="25px" />
          <span className="text-white h5 p-2 ml-2 bg-dark">
            {cartItems.length}
          </span>
        </div>
      </nav>
      <div className="mx-5 py-5">
        <SideNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
        {!isFetching && collections && collections.length > 0 && (
          <CardCollection collections={collections} />
        )}
      </div>
    </div>
  );
}

export default HomePage;
