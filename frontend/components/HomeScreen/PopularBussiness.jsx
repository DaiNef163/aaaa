import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import PopularBussinessCard from "@/components/HomeScreen/PopularBusinessCard";

export default function PopularBussiness() {
  const [BusinessList, setBusinessList] = useState([]);
  useEffect(() => {
    getBusinessList();
  }, []);
  const getBusinessList = async () => {
    setBusinessList([]);
    const q = query(collection(db, "BusinessList"));
    const querySnapShoot = await getDocs(q);

    querySnapShoot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingLeft: 20,
          marginBottomL: 10,
          marginTop: 20,
        }}
      >
        <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
          Cagetory
        </Text>
        <Text style={{ fontFamily: "outfit", fontSize: 15 }}>View all</Text>
      </View>
      <View>
        <FlatList
          style={{ paddingLeft: 10 }}
          data={BusinessList}
          horizontal={true}
          renderItem={({ item, index }) => (
            <PopularBussinessCard
              business={item}
              key={index}
            ></PopularBussinessCard>
          )}
        ></FlatList>
      </View>
    </View>
  );
}
