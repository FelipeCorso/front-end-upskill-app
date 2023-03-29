import styled from "styled-components";

const Container = styled.div``;
const ProductTitle = styled.div``;
const ProductPrice = styled.div``;

const Product = ({ title, price, image }) => (
  <Container>
    <img />
    <ProductTitle>{title}</ProductTitle>
    <ProductPrice>{price}</ProductPrice>
  </Container>
);

export default Product;
