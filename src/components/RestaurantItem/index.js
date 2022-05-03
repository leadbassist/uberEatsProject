import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DEFAULT_IMAGE =
  "https://media-cdn.tripadvisor.com/media/photo-s/16/e8/ee/30/1.jpg";

const RestaurantItem = ({ restaurant }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Restaurant Details", { id: restaurant.id });
  };

  return (
    <Pressable onPress={onPress} style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image.startsWith("http")
            ? restaurant.image
            : DEFAULT_IMAGE,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            ${restaurant.deliveryFee.toFixed(1)} &#8226;{" "}
            {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{restaurant.rating.toFixed(1)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: "auto", // moves rating to the far right and maximizes the margin on the left
    backgroundColor: "lightgrey",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default RestaurantItem;
