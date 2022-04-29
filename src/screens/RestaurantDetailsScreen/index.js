import { View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import RestaurantHeader from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

import restaurants from "../../../assets/data/restaurants.json";

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params.id;
  console.warn(id);

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
        data={restaurant.dishes}
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
    </View>
  );
};

export default RestaurantDetailsScreen;
