import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import RestaurantHeader from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Restaurant, Dish } from "../../models";
import { useBasketContext } from "../../contexts/BasketContext";

const RestaurantDetailsScreen = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params.id;

  const {
    setRestaurant: setBasketRestaurant,
    basket,
    basketDishes,
  } = useBasketContext();

  useEffect(() => {
    if (!id) {
      return;
    }

    setBasketRestaurant(null);

    // fetch the restaurant with the id
    DataStore.query(Restaurant, id).then(setRestaurant);

    DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(
      setDishes
    );
  }, [id]);

  useEffect(() => {
    setBasketRestaurant(restaurant);
  }, [restaurant]);

  if (!restaurant) {
    return <ActivityIndicator size={"large"} color="gray" />;
  }

  // console.log(restaurant);

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
        data={dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="md-arrow-back-circle"
        size={35}
        color="black"
        style={styles.iconContainer}
      />
      {basket && (
        <Pressable
          onPress={() => navigation.navigate("Basket")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            View Basket &#8226; ({basketDishes.length})
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default RestaurantDetailsScreen;
