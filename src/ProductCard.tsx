import { styled, useColorScheme } from "nativewind";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledImage = styled(Image);

function ProductCard({ image, category, title, price, description }) {
  const [count, setCount] = React.useState(1);
  const { colorScheme } = useColorScheme;
  return (
    <StyledView>
      <StyledText className="text-white">{title}</StyledText>
      <StyledText className="text-white">{description}</StyledText>
      <StyledText className="text-white">{price}</StyledText>
    </StyledView>
  );
}

export default ProductCard;
