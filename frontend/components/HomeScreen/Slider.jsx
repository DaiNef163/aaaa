import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";

export default function Slider() {
  const [SliderList, setSliderList] = useState([]);
  useEffect(() => {
    GetSliderList();
  }, []);
  const GetSliderList = async () => {
    setSliderList([]);
    const q = query(collection(db, "Slider"));
    const luotImage = await getDocs(q);

    luotImage.forEach((doc) => {
      console.log(doc.data());
      setSliderList((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <View>
      <Text style={{fontFamily:'outfit-bold',fontSize:20, padding:10}}>Dành cho bạn </Text>
      <FlatList
      style={{paddingLeft:10}}
        data={SliderList}
        horizontal={true}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item.imageUrl }}
            style={{ width: 300, height: 180, borderRadius: 20, margin:10}}
          ></Image>
        )}
      ></FlatList>
    </View>
  );
}
