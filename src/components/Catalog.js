import React from "react";
import { useSelector } from "react-redux";
import Flex, { FlexItem } from "styled-flex-component";
import Product from "./Product";
import Container from "./Container";
import { selectProducts } from "../state/catalog/selectors";

const Catalog = () => {
  const products = useSelector(selectProducts);
  return (
    <Container>
      <Flex full wrap={"true"}>
        {products.map((product) => (
          <FlexItem key={product.id} grow={1} shrink={1} basis="50%">
            <Product {...product} />
          </FlexItem>
        ))}
      </Flex>
    </Container>
  );
};

export default Catalog;
