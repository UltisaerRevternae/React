import { Layout } from "../../components/Layout";
import { OrdersCard } from "../../components/OrdersCard";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import left from "../../assets/left.svg";
import { useNavigate } from "react-router-dom";

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext);
  const currectPath = window.location.pathname.split('/')[3]
  const navigate = useNavigate();
  const idPath = currectPath === 'last' ? order?.slice(-1)[0].id : currectPath
  const orderData = order.find(({id}) => idPath === id)

  return (
    <>
      <Layout>
      <div className="flex w-80 items-center relative justify-center">
          <img
            className="w-6 h-6 left-0"
            src={left}
            alt="left"
            onClick={() => navigate("/Shopi/my_orders")}
          />
          <h1>My Order</h1>
        </div>
        <div className="grid p-4 gap-2 overflow-x-hidden overflow-y-auto scrollbar-custom flex-1">
          {orderData.products.map(({ title, images, price, id }, index) => (
              <OrdersCard
                key={index}
                title={title}
                imageSrc={images[0]}
                price={price}
                id={id}
              />
            ))}
        </div>
      </Layout>
    </>
  ); 
};

export { MyOrder };
