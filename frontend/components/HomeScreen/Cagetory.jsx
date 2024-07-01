import { View, Text, FlatList, Image, FlatListComponent } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import CagetoryItem from "@/components/HomeScreen/CategoryItem";
export default function Cagetory() {
  const [CagetoryList, setCagetoryList] = useState([]);
  useEffect(() => {
    getCagetoryList();
  }, []);
  const getCagetoryList = async () => {
    setCagetoryList([]);
    const q = query(collection(db, "Cagetory"));
    const querySnapShoot = await getDocs(q);

    querySnapShoot.forEach((doc) => {
      //   console.log(doc.data());
      setCagetoryList((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          padding: 20,
        }}
      >
        <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
          Cagetory
        </Text>
        <Text style={{ fontFamily: "outfit", fontSize: 15 }}>View all</Text>
      </View>
      <View>
        <FlatList
          style={{ marginLeft: 20 }}
          horizontal={true}
          data={CagetoryList}
          renderItem={({ item, index }) => (
            <CagetoryItem
              category={item}
              key={index}
              onCategoryPress={(category) => console.log(category)}
            ></CagetoryItem>
          )}
        ></FlatList>
      </View>
    </View>
  );
}
