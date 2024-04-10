import money from "../../assets/money.svg";
import cart_light from "../../assets/cart_light.svg";
import calendar from "../../assets/calendar.svg";
import right from "../../assets/right.svg";

const OrderCard = ({ totalPrice, totalProducts, datePurcharse }) => {
  const date = datePurcharse.substring(1).split("-");
  const datePurcharseView = `${date[2].substring(0, 2)}/${date[1]}/${date[0]}`;

  return (
    <div className="grid sm:grid-cols-[120px_80px_120px_16px] sm:w-auto sm:max-w-max max-w-80 min-w-72 grid-cols-[1fr_1fr_20px] sm:h-12 h-auto sm:gap-4 max-sm:px-6 shadow-lg  rounded p-2 items-center font-light">
      <span className="flex gap-2">
        <img className="w-6 h-6" src={cart_light} alt="" />
        {totalProducts} {totalProducts === 1 ? "product" : "products"}
      </span>
      <span className="flex gap-2 max-sm:col-start-2  max-sm:col-end-3 max-sm:row-start-1  max-sm:row-span-3 max-sm:ml-9">
        <img className="w-6 h-6" src={money} /> ${totalPrice}
      </span>
      <span className="flex gap-2  ">
        <img className="w-6 h-6" src={calendar} />
        {datePurcharseView}
      </span>
      <span className="flex max-sm:col-start-3  max-sm:col-end-4  max-sm:row-start-1  max-sm:row-span-3 ">< img className="w-4 h-4 " src={right} alt="" /></span>
    </div>
  );
};

export { OrderCard };
