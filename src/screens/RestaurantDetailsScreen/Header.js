import { View, Text, Image } from "react-native";
import styles from "./styles";

const DEFAULT_IMAGE =
  "https://media-cdn.tripadvisor.com/media/photo-s/16/e8/ee/30/1.jpg";

const RestaurantHeader = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      <Image
        source={{
          uri: restaurant.image.startsWith("http")
            ? restaurant.image
            : DEFAULT_IMAGE,
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          ${restaurant.deliveryFee.toFixed(1)} &#8226;{" "}
          {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
        </Text>

        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

export default RestaurantHeader;
