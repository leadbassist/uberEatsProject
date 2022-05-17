import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailsScreen from "../../src/screens/RestaurantDetailsScreen";
import DishDetailsScreen from "../../src/screens/DishDetailsScreen";
import BasketScreen from "../../src/screens/BasketScreen";
import OrderScreen from "../../src/screens/OrdersScreen";
// import OrderDetailsScreen from "../../src/screens/OrderDetailsScreen";
import ProfileScreen from "../../src/screens/ProfileScreen";
import { useAuthContext } from "../contexts/AuthContext";

import { FontAwesome5, Octicons } from "@expo/vector-icons";
import OrderDetailsNavigator from "./OrderDetailsNavigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { dbUser } = useAuthContext();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {dbUser ? (
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      ) : (
        <Stack.Screen name="Profile" component={ProfileScreen} />
      )}
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="OrdersTab"
        component={OrdersStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="list-unordered" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen
        name="Restaurant Details"
        component={RestaurantDetailsScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
      <HomeStack.Screen name="Basket" component={BasketScreen} />
    </HomeStack.Navigator>
  );
};

const OrdersStack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Orders" component={OrderScreen} />
      <OrdersStack.Screen
        name="Order"
        component={OrderDetailsNavigator}
        screenOptions={{ headerShown: false }}
      />
    </OrdersStack.Navigator>
  );
};

export default RootNavigator;
// export default HomeTabs;
