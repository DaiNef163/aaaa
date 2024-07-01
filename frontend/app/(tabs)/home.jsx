import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Header from "@/components/HomeScreen/Header";
import Slider from "@/components/HomeScreen/Slider";
import Cagetory from "@/components/HomeScreen/Cagetory";
import PopularBussiness from "@/components/HomeScreen/PopularBussiness";
export default function home() {
  return (
    <View>
      <ScrollView>
        <Header></Header>
        <Slider></Slider>
        <Cagetory></Cagetory>
        <PopularBussiness></PopularBussiness>
      </ScrollView>
    </View>
  );
}
