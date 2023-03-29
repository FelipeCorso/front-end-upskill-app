import styled from "styled-components";
import { products as productsDB } from "../../db/products";

const ProductsContainer = styled.div``;

const getPruductType = () => {
  const pathName = window.location.pathname;

  return pathName.split("/").pop();
};

const Products = () => {
  const productType = getPruductType();

  const products = productsDB[productType] ?? [];

  return (
    <>
      <h1>Products</h1>
      <ProductsContainer>
        {products.map((product) => (
          <Product {...product} />
        ))}
      </ProductsContainer>
    </>
  );
};
export default Products;
