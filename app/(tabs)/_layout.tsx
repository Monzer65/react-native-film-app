import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const TabIcon = ({ icon, title, focused }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden bg-[#141414]"
      >
        <Image source={icon} tintColor="#0F0F1D" className="size-5" />
        <Text className="text-[#0F0F1D] text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  } else {
    return (
      <View className="size-full bg-[#1F1F1F] justify-center items-center mt-4 rounded-full">
        <Image source={icon} tintColor="#fff" className="size-5" />
      </View>
    );
  }
};
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        },
        tabBarStyle: {
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 52,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          backgroundColor: "#141414", // main background
          borderColor: "#141414", // gold shimmer border
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "خانه",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.home} title="خانه" />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "جستجو",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.search} title="جستجو" />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "ذخیره‌شده‌ها",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon
                focused={focused}
                icon={icons.save}
                title="ذخیره‌شده‌ها"
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "پروفایل",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.person} title="پروفایل" />
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
