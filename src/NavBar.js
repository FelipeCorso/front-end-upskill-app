import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListStyled = styled.nav`
  height: 30px;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 20px;
  background-color: #ffffe0;
`;

export default function NavBar() {
  return (
    <nav>
      <ListStyled>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products/cats">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ListStyled>
    </nav>
  );
}
