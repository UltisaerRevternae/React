import { useState } from "react";

const defaultInfoProductToShow = {
  title: "",
  price: "",
  description: "",
  images: [],
};

const ShoppingCard = () => {
  
  // ShoppingCard
  const [cartProducts, setCartProducts] = useState([]);
  const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order')) || []);
  // Product Detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState(defaultInfoProductToShow);
  // Checkout side menu
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  return {
    order,
    setOrder,
    isProductDetailOpen,
    setIsProductDetailOpen,
    productToShow,
    setProductToShow,
    cartProducts,
    setCartProducts,
    isCheckoutSideMenuOpen,
    setIsCheckoutSideMenuOpen,
  };
};
export { ShoppingCard };
