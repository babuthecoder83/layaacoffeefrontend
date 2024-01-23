import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import {
  About,
  Home,
  SearchResult,
  PageNotFount,
  Cart,
  Contact,
  SignUp,
} from "../pages/index";
import CategoriesList from "../pages/CategoriesList";
import SubCategoryList from "../pages/SubCategoryList";
import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";
import GalleryList from "../pages/GalleryList";

import FactoryGalleryDetails from "../pages/FactoryGalleryDetails";
import CustomerGalleryDetails from "../pages/CustomerGalleryDetails";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/category" element={<CategoriesList />} />
      <Route path="/category/:id" element={<SubCategoryList />} />
      <Route path="/subcategory/:id" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/category/search" element={<SearchResult />} />
      <Route path="/gallery" element={<GalleryList />} />
      <Route path="/gallery/factory" element={<FactoryGalleryDetails />} />
      <Route path="/gallery/customer" element={<CustomerGalleryDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/layaacoffeefrontend" element={<Navigate to="/home" />} />
      <Route path="/404" element={<PageNotFount />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
}

export default Routers;
