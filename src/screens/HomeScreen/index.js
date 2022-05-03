import { StyleSheet, FlatList, View } from "react-native";
import { useState, useEffect } from "react";
import RestaurantItem from "../../components/RestaurantItem";
import { DataStore } from "aws-amplify";
// import restaurants from "../../../assets/data/restaurants.json";
import { Restaurant } from "../../models";

export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]);

  // const fetchRestaurants = async () => {
  //   const results = await DataStore.query(Restaurant);
  //   // console.log(results);
  //   setRestaurants(results);
  // };

  useEffect(() => {
    // fetchRestaurants();
    DataStore.query(Restaurant).then(setRestaurants);
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
