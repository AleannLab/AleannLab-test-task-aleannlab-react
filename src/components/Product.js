import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../state/cart/slice";
import styled from "styled-components";

const ProductWrapper = styled.div`
  padding: 24px;
  position: relative;
`;

const ImageWrapper = styled.img`
  width: 100%;
  margin-bottom: 16px;
`;

const Button = styled.button`
  width: 100%;
  background: #eaf5fe;
  color: #2b99f2;
  padding: 12px 0px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

const Badge = styled.span`
  background-color: #36b37e;
  color: white;
  padding: 4px 16px;
  border-radius: 16px;
  position: absolute;
  left: 36px;
  top: 36px;
`;

const Product = (product) => {
  const dispatch = useDispatch();
  const handleAdd = (product) => dispatch(addItem({ product }));
  return (
    <ProductWrapper>
      <Badge>In Stock</Badge>
      <ImageWrapper src={product.imgUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h4>${product.price}</h4>
      <Button onClick={() => handleAdd(product)}>Add to cart</Button>
    </ProductWrapper>
  );
};

export default Product;
