import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum TransportationModes {
  DRIVING = "DRIVING",
  BICYCLING = "BICYCLING"
}

export enum OrderStatus {
  NEW = "NEW",
  COOKING = "COOKING",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED",
  ACCEPTED = "ACCEPTED"
}



type TransporterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RestaurantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DishMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BasketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BasketDishMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderDishMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Transporter {
  readonly id: string;
  readonly name: string;
  readonly sub: string;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly transportationMode: TransportationModes | keyof typeof TransportationModes;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Transporter, TransporterMetaData>);
  static copyOf(source: Transporter, mutator: (draft: MutableModel<Transporter, TransporterMetaData>) => MutableModel<Transporter, TransporterMetaData> | void): Transporter;
}

export declare class User {
  readonly id: string;
  readonly sub: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Orders?: (Order | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Order {
  readonly id: string;
  readonly userID: string;
  readonly total: number;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly Restaurant?: Restaurant | null;
  readonly OrderDishes?: (OrderDish | null)[] | null;
  readonly Transporter?: Transporter | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderRestaurantId?: string | null;
  readonly orderTransporterId?: string | null;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class Restaurant {
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating?: number | null;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Dishes?: (Dish | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Restaurant, RestaurantMetaData>);
  static copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant, RestaurantMetaData>) => MutableModel<Restaurant, RestaurantMetaData> | void): Restaurant;
}

export declare class Dish {
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price: number;
  readonly restaurantID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Dish, DishMetaData>);
  static copyOf(source: Dish, mutator: (draft: MutableModel<Dish, DishMetaData>) => MutableModel<Dish, DishMetaData> | void): Dish;
}

export declare class Basket {
  readonly id: string;
  readonly userID: string;
  readonly restaurantID: string;
  readonly BasketDishes?: (BasketDish | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Basket, BasketMetaData>);
  static copyOf(source: Basket, mutator: (draft: MutableModel<Basket, BasketMetaData>) => MutableModel<Basket, BasketMetaData> | void): Basket;
}

export declare class BasketDish {
  readonly id: string;
  readonly basketID: string;
  readonly quantity: number;
  readonly Dish?: Dish | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly basketDishDishId?: string | null;
  constructor(init: ModelInit<BasketDish, BasketDishMetaData>);
  static copyOf(source: BasketDish, mutator: (draft: MutableModel<BasketDish, BasketDishMetaData>) => MutableModel<BasketDish, BasketDishMetaData> | void): BasketDish;
}

export declare class OrderDish {
  readonly id: string;
  readonly quantity: number;
  readonly orderID: string;
  readonly Dish?: Dish | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderDishDishId?: string | null;
  constructor(init: ModelInit<OrderDish, OrderDishMetaData>);
  static copyOf(source: OrderDish, mutator: (draft: MutableModel<OrderDish, OrderDishMetaData>) => MutableModel<OrderDish, OrderDishMetaData> | void): OrderDish;
}