import { useContext } from "react";
import close from "../../assets/close.svg";
import { ShoppingCartContext } from "../../context";
import { OrdersCard } from "../../components/OrdersCard";
import { totalPrice } from "../../utils/index";
import { useNavigate  } from "react-router-dom";
import { randomDate } from "../../utils/index";
const CheckoutSideMenu = () => {
  const navigate = useNavigate();
  const {
    isCheckoutSideMenuOpen,
    setIsCheckoutSideMenuOpen,
    cartProducts,
    setCartProducts,
    setOrder,
    order,
  } = useContext(ShoppingCartContext);

  const existingProducts = cartProducts.length > 0 ? true : false

  const handleDelete = (id) => {
    const newProducts = cartProducts.filter((product) => product.id !== id);
    setCartProducts(newProducts);
  };

  const totalPriceProducts = totalPrice(cartProducts);
  const handleCheckout = () => {
    if (existingProducts) {
      const orderToAdd = {
        date: JSON.stringify(randomDate(new Date(2020, 0, 1), new Date())),
        products: cartProducts,
        totalProducts: cartProducts.length,
        totalPrice: totalPriceProducts,
        id: crypto.randomUUID()
      };
      setOrder([...order, orderToAdd]);
      localStorage.setItem('order', JSON.stringify([...order, orderToAdd]))
      setCartProducts([]);
      navigate('/Shopi/my_order/last');
      setIsCheckoutSideMenuOpen(false)
    }
  };
  return (
    <aside
      className={` ${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } shadow-strong-inset w-[340px]  flex-col fixed bg-white right-0 top-[56px]   h-[calc(100vh-56px)]`}
    >
      <div className="flex justify-between items-center py-4 px-6 mt-4">
        <h2 className="font-medium text-xl">My Order</h2>
        <img
          className="w-6 h-6 cursor-pointer"
          src={close}
          onClick={() => setIsCheckoutSideMenuOpen(false)}
        />
      </div>
      <div className="flex flex-col p-4 gap-2 overflow-x-hidden overflow-y-auto scrollbar-custom flex-1">
        {cartProducts.map(({ title, images, price, id }, index) => (
          <OrdersCard
            key={index}
            title={title}
            imageSrc={images[0]}
            price={price}
            id={id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="flex justify-end px-6 mb-4">
        <div className="flex items-center justify-end gap-2 bg-zinc-200  px-3 py-2 rounded w-auto">
          <h2 className=" text-xl font-light">Total : </h2>
          <p className="font-medium text-xl">${totalPriceProducts}</p>
        </div>
      </div>
      <div className="px-6 mb-8" to={"/Shopi/my_order/last"}>
        <button
          className="w-full bg-gray-950 py-3 text-white rounded shadow-md"
          onClick={() => handleCheckout()}
        >
          Checkout
        </button>
      </div>
    </aside>
  );
};

export { CheckoutSideMenu };
