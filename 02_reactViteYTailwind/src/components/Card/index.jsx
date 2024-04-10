import add from "../../assets/add.svg";
import check from "../../assets/check.svg"
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

const Card = ({ categoryName, id, imageSrc, title, price, data } ) => {
  const {
    setIsProductDetailOpen,
    setProductToShow,
    cartProducts,
    setCartProducts,
    setIsCheckoutSideMenuOpen,
  } = useContext(ShoppingCartContext);

  const showProduct = () => {
    setIsProductDetailOpen(true);
    setIsCheckoutSideMenuOpen(false);
    setProductToShow(data);
  };

  const addProductsToCart = (e) => {
    e.stopPropagation();
    setCartProducts([...cartProducts, data]);
    setIsCheckoutSideMenuOpen(true);
    setIsProductDetailOpen(false);
  };

  const removeProductsToCart = (e) => {
    e.stopPropagation()
    const newData = cartProducts.filter(({id}) => id !== data.id)
    setCartProducts(newData)
  }
  const renderIcon = () => {
    const isInCart = cartProducts.some((data) => data.id === id)
    if (isInCart) {
      return (
        <img
          className="absolute top-2 right-2 bg-zinc-600 w-6 h-6 rounded-full grid place-content-center"
          onClick={(e) => {
            removeProductsToCart(e);
          }}
          src={check}
        ></img>
      );
    } else {
      return (
        <img
          className="absolute top-2 right-2 bg-zinc-50 w-6 h-6 rounded-full grid place-content-center"
          onClick={(e) => {
            addProductsToCart(e);
          }}
          src={add}
        ></img>
      );
    }
  };

  return (
    <div
      className="bg-zinc-200 cursor-pointer w-56 h-auto rounded-lg shadow-md"
      onClick={() => showProduct()}
    >
      <figure className="relative w-full h-4/5 ">
        <span className="absolute bg-zinc-50 bottom-2 left-2 px-3 py-0.5 rounded-lg h-5 w-auto text-xs font-bold grid place-content-center">
          {categoryName}
        </span>
        <img
          className="w-full min-h-56 bg-gray-400 object-cover rounded-t-lg"
          src={imageSrc}
          alt={title}
        />
        {renderIcon()}
      </figure>
      <div className="grid items-center ">
        <p className="flex justify-between items-center h-auto px-2 py-4">
          <span className="text-sm font-light">{title}</span>
          <span className="font-medium">${price}</span>
        </p>
      </div>
    </div>
  );
};

export { Card };
