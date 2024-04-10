import { useContext, useState } from "react";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { ProductDetail } from "../../components/ProductDetail";
import { ProductsShoppingContext, UserStorageContext } from "../../context";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const {
    loading,
    itemsProductsHome,
    itemsProductsElectronics,
    itemsProductsShoes,
    itemsProductsFurniture,
    itemsProductsToys,
    itemsProductsOthers,
  } = useContext(ProductsShoppingContext);
  const { isNewUser } = useContext(UserStorageContext);
  const location = window.location.pathname;
  const dataItemsProducts = {
    "/Shopi/": itemsProductsHome,
    "/Shopi/shoes": itemsProductsShoes,
    "/Shopi/electronics": itemsProductsElectronics,
    "/Shopi/furnitures": itemsProductsFurniture,
    "/Shopi/itemsProductsToys": itemsProductsToys,
    "/Shopi/others": itemsProductsOthers,
  };
  const navigate = useNavigate();

  const dataItem = dataItemsProducts[location] || [];
  const [searchByTitle, setSearchByTitle] = useState("");
  const dataItemFilter = dataItem.filter(({ title }) =>
    title.toLowerCase().includes(searchByTitle.toLowerCase())
  );

  const renderCardItems = () => {
    if (loading) {
      return <p className="font-light text-lg">Loading Data</p>;
    }
    if (dataItemFilter.length > 0) {
      return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {dataItemFilter?.map((data) => (
            <Card
              key={data.id}
              id={data.id}
              data={data}
              categoryName={data.category.name}
              imageSrc={data.images[0]}
              title={data.title.substring(0, 22).trim() + "..."}
              price={data.price}
            />
          ))}
        </div>
      );
    }
    if (dataItemFilter.length === 0) {
      return <p className="font-light text-lg">There are no matches!</p>;
    }
  };
  return (
    <Layout>
      <h1 className="font-medium text-lg mt-2">
        {location === "/Shopi/"
          ? "Home"
          : location.substring(7, 8).toUpperCase() + location.substring(8)}
      </h1>
<button onClick={() => navigate("/")}></button>
      {isNewUser && (
        <div
          onClick={() => navigate("/Shopi/sign_in")}
          className="absolute bg-gray-50/40 w-full bottom-0 -top-6 z-10 "
        >
          {" "}
        </div>
      )}

      <input
        className="rounded-lg shadow-lg border-none w-96 py-1 px-4 bg-gray-200 mt-4 mb-8 focus:border-none focus:outline-none"
        type="text"
        placeholder="Search a product"
        onChange={(e) => {
          setSearchByTitle(e.target.value);
        }}
      />
      {renderCardItems()}
      <ProductDetail />
    </Layout>
  );
};

export { Home };
