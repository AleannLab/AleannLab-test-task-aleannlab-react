import { createSelector } from "@reduxjs/toolkit";

export const selectCart = (state) => state.cart;

export const selectItems = createSelector(selectCart, (cart) => cart.items);
