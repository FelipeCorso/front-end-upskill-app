import React from "react";
import styled from "styled-components";
import { products as productsDB } from "../db/products";
import { useParams } from "react-router";
import Product from "../components/product/product";

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const getKey = (productType, productTitle, productPrice) =>
  `${productType}-${productTitle}-${productPrice}`;

const Products = () => {
  const { productType } = useParams();

  const products = productsDB[productType] ?? [];

  return (
    <>
      <h1>Products</h1>
      <ProductsContainer>
        {products.map((product) => (
          <Product
            key={getKey(productType, product.title, product.price)}
            {...product}
          />
        ))}
      </ProductsContainer>
    </>
  );
};
export default Products;
