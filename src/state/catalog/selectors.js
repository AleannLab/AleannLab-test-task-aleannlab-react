import { createSelector } from "@reduxjs/toolkit";

export const selectCatalog = (state) => state.catalog;

export const selectProducts = createSelector(
  selectCatalog,
  (catalog) => catalog.products
);
