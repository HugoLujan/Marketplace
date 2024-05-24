import React from "react";
import { FlatList, View, Image, Text } from "react-native";
import { products } from "./productos";
import { styled } from "nativewind";
import ProductCard from "./ProductCard";

const StyledView = styled(View);
const StyledText = styled(Text);

function ProductsList() {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard image={undefined} title={undefined} {...item} />
      )}
    />
  );
}

export default ProductsList;
