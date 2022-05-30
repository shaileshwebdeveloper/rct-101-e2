import React from "react";
import AddProduct from "../components/AddProduct"
import Product from "../components/Product"

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;

  return (
    <Flex>
      <AddProduct/>
      {/*  AddProduct */}
      <Grid>{/* List of Products */}
      <Product/>
      </Grid>
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
