import {
  View,
  Text,
  FlatList,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function CategoryItem({ category,onCategoryPress }) {
  return (
    <TouchableNativeFeedback onPress={()=>onCategoryPress(category)}>
      <View style={{  alignItems: 'center', marginRight: 15 }}>
        <View
          style={{
            borderRadius: 99,
            backgroundColor: "#ccc",
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            source={{ uri: category.icon }}
            style={{ width: 40, height: 40 }}
          ></Image>
        </View>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "outfit-medium",
            textAlign: "center",
            marginTop: 5,
          }}
        >
          {category.name}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
}
