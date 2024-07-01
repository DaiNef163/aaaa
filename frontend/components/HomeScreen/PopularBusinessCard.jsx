import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function PopularBusinessCard({ business }) {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 15,
      }}
    >
      <Image
        source={{ uri: business?.imageUrl }}
        style={{ width: 200, height: 130, borderRadius: 15 }}
      ></Image>
      <View style={{ marginTop: 7 }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 17 }}>
          {business.name}
        </Text>
        <Text
          style={{ fontFamily: "outfit", fontSize: 13, color: Colors.GRAY }}
        >
          {business.adress}
        </Text>
        <View style={{ display: "flex", flexDirection: "row",justifyContent:'space-between' }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image
              style={{ width: 15, height: 15 }}
              source={require("@/assets/images/star.png")}
            ></Image>
            <Text style={{ fontFamily: "outfit", marginLeft: 5 }}>4.5</Text>
          </View>
          <Text
            style={{
              padding: 3,
              backgroundColor: Colors.PRIMARY,
              color: "#fff",
              fontFamily: "outfit",
              fontSize: 10,
              borderRadius: 5,
            }}
          >
            {business.category}
          </Text>
        </View>
      </View>
    </View>
  );
}
