import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext, UserStorageContext } from "../../context";
import cart from "../../assets/cart.svg";

const Navbar = () => {
  const { cartProducts } = useContext(ShoppingCartContext);
  const { accountUser, isNewUser } = useContext(UserStorageContext);
  const style = "underline underline-offset-4";
  return (
    <>
      <div className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light h-14 bg-white shadow-lg backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <NavLink className="font-semibold text-lg" to={"/Shopi/"}>
            Shopi
          </NavLink>
          {!isNewUser && (
            <>
              <NavLink
                to={"/Shopi/"}
                className={({ isActive }) => (isActive ? style : "")}
              >
                All
              </NavLink>
              <NavLink
                to={"/Shopi/shoes"}
                className={({ isActive }) => (isActive ? style : "")}
              >
                Shoes
              </NavLink>
              <NavLink
                to={"/Shopi/electronics"}
                className={({ isActive }) => (isActive ? style : "")}
              >
                Electronics
              </NavLink>
              <NavLink
                to={"/Shopi/furnitures"}
                className={({ isActive }) => (isActive ? style : "")}
              >
                Furnitures
              </NavLink>
              <NavLink
                to={"/Shopi/toys"}
                className={({ isActive }) => (isActive ? style : "")}
              >
                Toys
              </NavLink>
              <NavLink
                to={"/Shopi/others"}
                className={({ isActive }) => (isActive ? style : "")}
              >
                Others
              </NavLink>
            </>
          )}
        </div>
        <div className="flex items-center gap-3">
          {!isNewUser && (
            <>
              <NavLink className="text-black/60" to={"/Shopi/sign_in"}>
                {accountUser.user}
              </NavLink>
              <NavLink
                to={"/Shopi/my_orders"}
                className={({ isActive }) => (isActive ? style : "")}
              >
                My Orders
              </NavLink>
            </>
          )}

          {isNewUser && (
            <NavLink
              to={"/Shopi/sign_in"}
              className={({ isActive }) => (isActive ? style : "")}
            >
              Sign In
            </NavLink>
          )}

          <div className="flex items-center">
            <img className="w-6 h-6" src={cart} alt="" />
            <p>{cartProducts.length}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Navbar };
