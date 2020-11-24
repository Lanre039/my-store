import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalogue } from "../redux/actions/shopCatalogueActions";
import CardCollection from "../components/CardCollection";
import SideNavigation from "../components/SideNavigation";

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
    <div className="container bg-light">
      <div className="p-5 text-center">
        <h4
          style={{ cursor: "pointer" }}
          className="font-italic text-nowrap"
          onClick={() => setIsOpen(!isOpen)}
        >
          Click here to view cart
        </h4>
        <p>{cartItems.length > 0 ? "Item available in cart" : ""}</p>
      </div>
      <SideNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
      {!isFetching && collections && collections.length > 0 && (
        <CardCollection collections={collections} />
      )}
    </div>
  );
}

export default HomePage;
