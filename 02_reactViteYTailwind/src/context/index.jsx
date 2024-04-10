import { createContext } from "react";
import { ProductsShopping} from "./ProductsShopping";
import { ShoppingCard } from "./ShoppingCard";
import { UserStorage } from "./UserStorage"; 

const ShoppingCartContext = createContext();
const ProductsShoppingContext = createContext();
const UserStorageContext = createContext()

const ContextGlobal = ({ children }) => {
  
  const PSD = {...ProductsShopping()}   // ProductsShoppingData
  const SCD = {...ShoppingCard()}       // ShoppingCardData
  const USD = {...UserStorage()}        // UserStorageData
  
  return (
    <ShoppingCartContext.Provider
      value={{
        order : SCD.order,
        setOrder : SCD.setOrder,
        isProductDetailOpen : SCD.isProductDetailOpen,
        setIsProductDetailOpen : SCD.setIsProductDetailOpen,
        productToShow : SCD.productToShow,
        setProductToShow : SCD.setProductToShow,
        cartProducts : SCD.cartProducts,
        setCartProducts : SCD.setCartProducts,
        isCheckoutSideMenuOpen : SCD.isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen : SCD.setIsCheckoutSideMenuOpen,
      }}
    >
      <ProductsShoppingContext.Provider
        value={{
          loading: PSD.loading,
          setLoading: PSD.setLoading,
          itemsProductsHome : PSD.itemsProductsHome,
          itemsProductsElectronics : PSD.itemsProductsElectronics,
          itemsProductsShoes : PSD.itemsProductsShoes,
          itemsProductsFurniture : PSD.itemsProductsFurniture,
          itemsProductsToys : PSD.itemsProductsToys,
          itemsProductsOthers : PSD.itemsProductsOthers,
        }}
      >
        <UserStorageContext.Provider
          value={{
            isNewUser: USD.isNewUser,
            setNewUser: USD.setNewUser,
            isSignInUser: USD.isSignInUser,
            setSignInUser : USD.setSignInUser,
            setAccountUser : USD.setAccountUser,
            accountUser: USD.accountUser,
          }}
        >
          {children}
        </UserStorageContext.Provider>
      </ProductsShoppingContext.Provider>
    </ShoppingCartContext.Provider>
  );
};
export { ContextGlobal, ShoppingCartContext, ProductsShoppingContext , UserStorageContext };
