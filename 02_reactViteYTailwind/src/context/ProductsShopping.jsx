import { useEffect, useMemo, useState } from "react";

const ProductsShopping = () => {

  const [itemsProductsShoppingContext, setItemsProductsShoppingContext] =
    useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItemsProductsShoppingContext(data))
      .then(() => setLoading(false))
  }, [setItemsProductsShoppingContext]);

  const itemsProductsHome = useMemo(
    () => itemsProductsShoppingContext || [],
    [itemsProductsShoppingContext]
  );

  const itemsProductsElectronics = useMemo(
    () =>
      itemsProductsHome.filter(
        ({ category }) => category.name === "Electronics"
      ),
    [itemsProductsHome]
  );

  const itemsProductsShoes = useMemo(
    () => itemsProductsHome.filter(({ category }) => category.name === "Shoes"),
    [itemsProductsHome]
  );

  const itemsProductsFurniture = useMemo(
    () =>
      itemsProductsHome.filter(({ category }) => category.name === "Furniture"),
    [itemsProductsHome]
  );

  const itemsProductsToys = useMemo(
    () => itemsProductsHome.filter(({ category }) => category.name === "Toys"),
    [itemsProductsHome]
  );

  const itemsProductsOthers = useMemo(
    () =>
      itemsProductsHome.filter(
        ({ category }) =>
          category.name !== "Electronics" &&
          category.name !== "Shoes" &&
          category.name !== "Furniture" &&
          category.name !== "Toys"
      ),
    [itemsProductsHome]
  );

  return {
    loading,
    setLoading,
    itemsProductsHome,
    itemsProductsElectronics,
    itemsProductsShoes,
    itemsProductsFurniture,
    itemsProductsToys,
    itemsProductsOthers,
  };
};

export { ProductsShopping };
