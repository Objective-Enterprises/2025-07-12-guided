import { FoodItem } from "./types";

export const items: FoodItem[] = [
  {
    id: '1',
    name: 'Burger',
    description: 'Beef patty between potato buns',
    image: '/images/burger.jpg',
    ingredients: ['beef', 'potato bun', 'lettuce'],
    price: 10
  },
  {
    id: '2',
    name: 'Pasta',
    description: 'Noodles in sauce',
    image: '/images/pasta.jpg',
    ingredients: ['noodles', 'sauce'],
    price: 15
  },
  {
    id: '3',
    name: 'Pizza',
    description: 'With pepperoni',
    image: '/images/pizza.jpg',
    ingredients: ['crust', 'sauce', 'cheese', 'pepperoni'],
    price: 20
  }
]