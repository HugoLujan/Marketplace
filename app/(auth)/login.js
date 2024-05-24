import {
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { styled } from "nativewind";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const StyledText = styled(Text);
const StyledView = styled(View);
const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledTextInput = styled(TextInput);
const StyledPressable = styled(Pressable);

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <StyledSafeAreaView className="flex-1 bg-white items-center">
      <StyledView className="mt-[100px]">
        <StyledText className="text-lg text-blue-600">Test</StyledText>
      </StyledView>
      <StyledKeyboardAvoidingView>
        <StyledView>
          <StyledText className="text-md mt-2 text-center">
            Login into your account!
          </StyledText>
        </StyledView>

        <StyledView className="mt-20">
          <StyledView className="flex flex-row items-center gap-1 bg-gray-300 py-1 rounded-md mt-4">
            <Entypo className="ml-2" name="mail" size={24} color="black" />
            <StyledTextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              type="text"
              className="input-gray my-2.5 text-lg w-400 placeholder-gray-400"
              placeholder="Enter your email"
            />
          </StyledView>
          <StyledView className="flex flex-row items-center gap-1 bg-gray-300 py-1 rounded-md mt-4">
            <AntDesign name="lock1" size={24} color="black" />{" "}
            <StyledTextInput
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              type="text"
              className="input-gray my-2.5 text-lg w-400 placeholder-gray-400"
              placeholder="Enter your password"
            />
          </StyledView>

          <StyledView className="flex-row items-center mt-3 justify-between">
            <StyledText>Keep me logged in</StyledText>
            <StyledText className="text-blue-500 font-semibold">
              Forgot password
            </StyledText>
          </StyledView>

          <StyledView className="mt-20">
            <StyledPressable className="w-[200px] bg-blue-400 p-3 rounded-xl ml-auto mr-auto">
              <StyledText className="text-center text-white font-bold font-medium">
                Login
              </StyledText>
            </StyledPressable>

            <StyledPressable
              onPress={() => router.replace("/register")}
              className="mt-3"
            >
              <StyledText className="text-center text-gray-500">
                Don't have an account? Sign up
              </StyledText>
            </StyledPressable>
          </StyledView>
        </StyledView>
      </StyledKeyboardAvoidingView>
    </StyledSafeAreaView>
  );
};

export default login;
