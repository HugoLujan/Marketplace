import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { styled } from "nativewind";
import { AntDesign } from "@expo/vector-icons";

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);
const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);
const index = () => {
  const todos = [];
  return (
    <SafeAreaView>
      <StyledView className="mx-4 my-3 flex-row items-center gap-3 mt-0.5 ml-[1px]">
        <StyledPressable className="bg-[#07C5EB] px-2.5 py-1.5 rounded-full items-center justify-center">
          <StyledText className="text-white text-center">All</StyledText>
        </StyledPressable>
        <StyledPressable className="bg-[#07C5EB] px-2.5 py-1.5 rounded-full items-center justify-center">
          <StyledText className="text-white text-center">Work</StyledText>
        </StyledPressable>
        <StyledPressable className="mr-auto bg-[#07C5EB] px-2.5 py-1.5 rounded-full items-center justify-center">
          <StyledText className="text-white text-center">Personal</StyledText>
        </StyledPressable>
        <StyledPressable>
          <AntDesign name="pluscircle" size={24} color="#087FFF" />
        </StyledPressable>
      </StyledView>
      <StyledScrollView className="flex-1 bg-white">
        <StyledView className="p-2.5">
          {todos?.length > 0 ? (
            <StyledView></StyledView>
          ) : (
            <StyledView className=" flex-1 justify-center items-center m-20">
              <StyledImage
                source={{
                  uri: "https://static.vecteezy.com/system/resources/thumbnails/002/283/122/small/to-do-list-young-woman-puts-check-marks-in-front-of-completed-tasks-vector.jpg",
                }}
                className="w-52 h-52 resize"
              />
              <StyledText className="mt-4 text-lg text-center">
                No Task for today! add a task.
              </StyledText>
              <StyledPressable className="mt-5">
                <AntDesign name="pluscircle" size={24} color="#087FFF" />
              </StyledPressable>
            </StyledView>
          )}
        </StyledView>
      </StyledScrollView>
    </SafeAreaView>
  );
};

export default index;
