import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductTitle = styled.div`
  margin-top: 8px;
`;

const ProductPrice = styled.div`
  margin-top: 8px;
`;

const BuyButton = styled.button`
  margin-top: 8px;
`;

const formatPrice = (productPrice) =>
  productPrice.toLocaleString("pt-PT", {
    style: "currency",
    currency: "EUR",
  });

const Product = ({ title, price, image }) => {
  const handlerOnClick = () => {
    const event = new CustomEvent("PRODUCT_ADD", {
      detail: {
        title: "Product added!",
        message: "A product was added to the basket.",
        product: { title, price, image },
      },
    });

    window.dispatchEvent(event);
  };

  return (
    <Container>
      <img src={image} width="200" height="150" />
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>{formatPrice(price)}</ProductPrice>
      <BuyButton onClick={handlerOnClick}>Buy</BuyButton>
    </Container>
  );
};

export default Product;
