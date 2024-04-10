import close from "../../assets/close.svg";

const OrdersCard = ({ title, imageSrc, price, id, handleDelete }) => {

  return (
    <div className="flex gap-1 relative justify-between items-center p-3 rounded-lg shadow-lg h-auto">
      <div className="grid grid-cols-[80px_auto] items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-20 h-20 bg-gray-400 rounded-lg object-cover"
            src={imageSrc}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light ">{title}</p>
      </div>
      <div className="flex items-center w-28 justify-end">
        <p className="text-lg font-medium">${price}</p>
        {handleDelete && (
          <img
            className="w-6 h-6 cursor-pointer "
            src={close}
            onClick={() => handleDelete(id)}
          />
        )}
      </div>
    </div>
  );
};

export { OrdersCard };
