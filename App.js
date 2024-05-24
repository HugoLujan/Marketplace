import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Switch, SafeAreaView } from "react-native";
import { NativeWindStyleSheet, styled, useColorScheme } from "nativewind";

import { products } from "./src/productos";
import ProductsList from "./src/ProductsList";

const StyledView = styled(View);
const StyledSafeArea = styled(SafeAreaView);
const StyledText = styled(Text);

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <StyledSafeArea className="flex-1 items-center justify-center bg-gray dark:bg-black">
      <StyledView className="flex-row w-full gap-5">
        <StyledText className="text-2xl font-bold dark:text-white">
          New collection
        </StyledText>
        <Switch
          value={colorScheme === "dark"}
          onChange={toggleColorScheme}
        ></Switch>
      </StyledView>
      <ProductsList />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </StyledSafeArea>
  );
}
