import { useContext } from "react";
import { Layout } from "../../components/Layout";
import { OrderCard } from "../../components/OrderCard";
import { ShoppingCartContext } from "../../context";
import { Link } from "react-router-dom";
const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext);
  return (
    <>
      <Layout>
        <p className="font-medium mb-6 text-lg">My Orders</p>

        <div className="grid gap-2">
        {order.map(({ totalPrice, totalProducts, id, date }, index) => (
          <Link key={index} to={`/Shopi/my_order/${id}`}>
            <OrderCard totalProducts={totalProducts} totalPrice={totalPrice} datePurcharse={date} />
          </Link>
        ))}
        </div>
      </Layout>
    </>
  );
};

export { MyOrders };
