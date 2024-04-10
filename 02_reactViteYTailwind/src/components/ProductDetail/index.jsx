import { useContext } from "react";
import close from "../../assets/close.svg";
import { ShoppingCartContext } from "../../context";

const ProductDetail = () => {
  const { isProductDetailOpen, setIsProductDetailOpen, productToShow } = useContext(ShoppingCartContext);

  return (
    <aside className={` ${ isProductDetailOpen ? "flex" : "hidden"} shadow-strong-inset p-6 w-[340px]  flex-col fixed bg-white right-0 top-[56px]   h-[calc(100vh-56px)]`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-xl">Detail</h2>
        <img 
        className="w-6 h-6 cursor-pointer" 
        src={close} 
        onClick={() => setIsProductDetailOpen(false)}/>
      </div>
      <figure>
        <img 
          className="w-full min-h-[292px] h-full rounded-lg bg-gray-400" 
          src={productToShow.images[0]} 
          alt={productToShow.title} />
      </figure>
      <p className="flex flex-col py-6 gap-1">
        <span className="font-medium text-2xl mb-1">${productToShow.price}</span>
        <span className="font-medium text-md">{productToShow.title}</span>
        <span className="font-light text-sm">{productToShow.description}</span>
      </p>
    </aside>
  );
};

export { ProductDetail };
