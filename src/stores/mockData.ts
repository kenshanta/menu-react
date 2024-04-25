import { ICategory, IProduct, ISubCategory } from "../utils/interfaces";

const mockEnShishaProducts: IProduct[] = [
  {
    id: 1,
    name: "Watermelon 🍉",
    created_at: "2024-01-21T12:00:00Z",
    description: "for the summer taste",
    category: {
      id: 101,
      created_at: "2024-01-21T12:00:00Z",
      name: "Shisha",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 129.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 202,
    updated_at: "2024-01-23T15:45:00Z",
  },

  {
    id: 2,
    name: "Pineapple",
    created_at: "2024-01-21T12:00:00Z",
    description: "A testing product",
    category: {
      id: 101,
      created_at: "2024-01-21T12:00:00Z",
      name: "Shisha",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 100.9,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 203,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 6,
    name: "Watermelon",
    created_at: "2024-01-21T12:00:00Z",
    description: "It doesn't get any better than this",
    category: {
      id: 101,
      created_at: "2024-01-21T12:00:00Z",
      name: "Shisha",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 120.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 203,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 6,
    name: "GrapeFruit",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 101,
      created_at: "2024-01-21T12:00:00Z",
      name: "Shisha",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 110.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 203,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 3,
    name: "Apple 🍎",
    created_at: "2024-01-21T12:00:00Z",
    description: "simply apple",
    category: {
      id: 101,
      created_at: "2024-01-21T12:00:00Z",
      name: "Category X",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 100,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 202,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 4,
    name: "Lady Killer",
    created_at: "2024-01-21T12:00:00Z",
    description: "Sweet and sour",
    category: {
      id: 101,
      created_at: "2024-01-21T12:00:00Z",
      name: "Category X",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 300,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 201,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 5,
    name: "Love 66",
    created_at: "2024-01-21T12:00:00Z",
    description: "Show me what love tastes like",
    category: {
      id: 101,
      created_at: "2024-01-21T12:00:00Z",
      name: "Category X",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 100,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 201,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 7,
    name: "Grape 🍇",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Category X",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 100,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 202,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 8,
    name: "Mango 🥭",
    created_at: "2024-01-21T12:00:00Z",
    description: "for the summer ",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Shisha",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 129.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 202,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 9,
    name: "Orange",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Shisha",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 90.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 203,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 10,
    name: "Red Lips",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Shisha",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 90.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 201,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 11,
    name: "Blue Forest",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Shisha",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 90.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 201,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 12,
    name: "French Kiss",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Shisha",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 90.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 201,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 13,
    name: "Sexy Girl",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Shisha",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 90.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 201,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 14,
    name: "Hot day",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Shisha",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 90.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 201,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 15,
    name: "Boom Boom",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Shisha",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 90.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 201,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 16,
    name: "Mint 🍃",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Shisha",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 100,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 202,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 17,
    name: "Strawberry 🍓",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Shisha",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 100,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 202,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 18,
    name: "Lemon 🍋",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Shisha",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 100,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 202,
    updated_at: "2024-01-23T15:45:00Z",
  },
];
const mockEnNonAlcoholicProducts: IProduct[] = [
  {
    id: 9,
    name: "Pepsi/7UP/mirinda",
    created_at: "2024-01-21T12:00:00Z",
    description: "basic refreshered",
    category: {
      id: 103,
      created_at: "2024-01-21T12:00:00Z",
      name: "Non-Alcoholic",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 10.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 301,
    updated_at: "2024-01-23T15:45:00Z",
  },

  {
    id: 10,
    name: "Tonic",
    created_at: "2024-01-21T12:00:00Z",
    description: "A testing product",
    category: {
      id: 103,
      created_at: "2024-01-21T12:00:00Z",
      name: "Non-Alcoholic",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 20.9,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 301,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 11,
    name: "Water",
    created_at: "2024-01-21T12:00:00Z",
    description: "Still/Sparkling",
    category: {
      id: 103,
      created_at: "2024-01-21T12:00:00Z",
      name: "Category X",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 9.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 301,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 12,
    name: "RedBull",
    created_at: "2024-01-21T12:00:00Z",
    description: "simply apple",
    category: {
      id: 103,
      created_at: "2024-01-21T12:00:00Z",
      name: "Non-Alcoholic",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 20,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 301,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 13,
    name: "Lemonade",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 103,
      created_at: "2024-01-21T12:00:00Z",
      name: "Non-Alcoholic",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 15,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 301,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 14,
    name: "Ice Coffee",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 103,
      created_at: "2024-01-21T12:00:00Z",
      name: "Non-Alcoholic",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 19,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 301,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 15,
    name: "Juice",
    created_at: "2024-01-21T12:00:00Z",
    description: "Orange/Pineapple/Lemonade",
    category: {
      id: 103,
      created_at: "2024-01-21T12:00:00Z",
      name: "Category X",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 17,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 301,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 16,
    name: "Turkish Coffee",
    created_at: "2024-01-21T12:00:00Z",
    description: "for the orienal taste",
    category: {
      id: 103,
      created_at: "2024-01-21T12:00:00Z",
      name: "Non-Alcoholic",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 24.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 302,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 17,
    name: "Espresso",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 103,
      created_at: "2024-01-21T12:00:00Z",
      name: "Non-Alcoholic",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 24.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 302,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 18,
    name: "Cappuccino",
    created_at: "2024-01-21T12:00:00Z",
    description: "for the Italian taste",
    category: {
      id: 103,
      created_at: "2024-01-21T12:00:00Z",
      name: "Non-Alcoholic",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 20.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 302,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 19,
    name: "Americano",
    created_at: "2024-01-21T12:00:00Z",
    description: "for the orienal taste",
    category: {
      id: 103,
      created_at: "2024-01-21T12:00:00Z",
      name: "Non-Alcoholic",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 24.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 302,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 20,
    name: "Arabic Tea",
    created_at: "2024-01-21T12:00:00Z",
    description: "POT",
    category: {
      id: 103,
      created_at: "2024-01-21T12:00:00Z",
      name: "Non-Alcoholic",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 24.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 302,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 21,
    name: "Moroccan Tea",
    created_at: "2024-01-21T12:00:00Z",
    description: "POT",
    category: {
      id: 103,
      created_at: "2024-01-21T12:00:00Z",
      name: "Non-Alcoholic",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 24.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 302,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 20,
    name: "Fruits Tea",
    created_at: "2024-01-21T12:00:00Z",
    description: "POT",
    category: {
      id: 103,
      created_at: "2024-01-21T12:00:00Z",
      name: "Non-Alcoholic",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 24.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 302,
    updated_at: "2024-01-23T15:45:00Z",
  },
];
const mockEnAlcoholicProducts: any = [
  {
    id: 1,
    name: "Zombie",
    created_at: "2024-01-21T12:00:00Z",
    description: "An example product",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 129.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 202,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 2,
    name: "Screaming Orgasm",
    created_at: "2024-01-21T12:00:00Z",
    description: "A testing product",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 200.9,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 202,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 6,
    name: "Mojito",
    created_at: "2024-01-21T12:00:00Z",
    description: "A test product",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 99.99,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 203,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 3,
    name: "Long Island",
    created_at: "2024-01-21T12:00:00Z",
    description: "simply apple",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 100,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 202,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 4,
    name: "JagerBomb",
    created_at: "2024-01-21T12:00:00Z",
    description: "Sweet and sour",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 28,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 202,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 5,
    name: "Grimbergen",
    created_at: "2024-01-21T12:00:00Z",
    description: " ",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 22,
    lot_price: 40,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 201,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 6,
    name: "Carlsberg",
    created_at: "2024-01-21T12:00:00Z",
    description: " ",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 18,
    lot_price: 30,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 201,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 7,
    name: "Alcohol-Free",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 20,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 203,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 8,
    name: "Corona",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 20,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 203,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 9,
    name: "GARAGE",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 25,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 203,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 10,
    name: "Desperados",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 25,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 203,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 11,
    name: "Kozel Dark",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 20,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 203,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 12,
    name: "Somersby",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 29,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 203,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 13,
    name: "Wild Girl",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 30,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 204,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 14,
    name: "Electric Shock",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 30,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 204,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 15,
    name: "Pink Clouds",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 30,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 204,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 16,
    name: "Summer Lovers",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 30,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 204,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 17,
    name: "Good Girl",
    created_at: "2024-01-21T12:00:00Z",
    description: "Sweet and sour",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 28,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 202,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 18,
    name: "Blue Hawaii",
    created_at: "2024-01-21T12:00:00Z",
    description: "",
    category: {
      id: 102,
      created_at: "2024-01-21T12:00:00Z",
      name: "Alcoholic drinks",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "en",
    },
    unit_price: 28,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 202,
    updated_at: "2024-01-23T15:45:00Z",
  },
];

const mockAmProducts: IProduct[] = [
  {
    id: 7,
    name: "Ապրանք Ա",
    created_at: "2024-01-21T12:00:00Z",
    description: "Արտադրանքի օրինակ 0",
    category: {
      id: 106,
      created_at: "2024-01-21T12:00:00Z",
      name: "Կատեգորիա Ա",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "hy-AM",
    },
    unit_price: 29.99,
    lot_price: 149.95,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 206,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 8,
    name: "Ապրանք Ս",
    created_at: "2024-01-21T12:00:00Z",
    description: "Արտադրանքի օրինակ 1",
    category: {
      id: 105,
      created_at: "2024-01-21T12:00:00Z",
      name: "Կատեգորիա Ա",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "hy-AM",
    },
    unit_price: 29.99,
    lot_price: 149.95,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 206,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 9,
    name: "Ապրանք Լ",
    created_at: "2024-01-21T12:00:00Z",
    description: "Արտադրանքի օրինակ 2",
    category: {
      id: 104,
      created_at: "2024-01-21T12:00:00Z",
      name: "Կատեգորիա Ա",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "hy-AM",
    },
    unit_price: 9.99,
    lot_price: 19.95,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 205,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 10,
    name: "Ապրանք Մ",
    created_at: "2024-01-21T12:00:00Z",
    description: "Արտադրանքի օրինակ 3",
    category: {
      id: 106,
      created_at: "2024-01-21T12:00:00Z",
      name: "Կատեգորիա Ա",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "hy-AM",
    },
    unit_price: 100,
    lot_price: 100.95,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 205,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 11,
    name: "Ապրանք Ա",
    created_at: "2024-01-21T12:00:00Z",
    description: "Արտադրանքի օրինակ",
    category: {
      id: 104,
      created_at: "2024-01-21T12:00:00Z",
      name: "Կատեգորիա Ա",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "hy-AM",
    },
    unit_price: 30,
    lot_price: 300,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 204,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 12,
    name: "Ապրանք Ո",
    created_at: "2024-01-21T12:00:00Z",
    description: "Արտադրանքի նկարագրության օրինակ",
    category: {
      id: 105,
      created_at: "2024-01-21T12:00:00Z",
      name: "Կատեգորիա Ա",
      published_at: "2024-01-22T08:30:00Z",
      products: [],
      updated_at: "2024-01-23T15:45:00Z",
      sub_categories: [],
      locale: "hy-AM",
    },
    unit_price: 10.99,
    lot_price: 49,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 204,
    updated_at: "2024-01-23T15:45:00Z",
  },
];
// const generateMockData = (id: number): IProduct => {
//   return {
//     id,
//     name: `Product ${String.fromCharCode(65 + (id % 26))}`,
//     created_at: "2024-01-21T12:00:00Z",
//     description: `Description for Product ${String.fromCharCode(
//       65 + (id % 26)
//     )}`,
//     category: {
//       id: 101,
//       created_at: "2024-01-21T12:00:00Z",
//       name: "Category X",
//       published_at: "2024-01-22T08:30:00Z",
//       products: [],
//       updated_at: "2024-01-23T15:45:00Z",
//       sub_categories: [],
//       locale: "en",
//     },
//     unit_price: 29.99,
//     lot_price: 149.95,
//     published_at: "2024-01-22T08:30:00Z",
//     sub_category: 200,
//     updated_at: "2024-01-23T15:45:00Z",
//   };
// };

// const generateMockDataSet = (count: number): IProduct[] => {
//   const mockDataSet: IProduct[] = [];
//   for (let i = 1; i <= count; i++) {
//     mockDataSet.push(generateMockData(i));
//   }
//   return mockDataSet;
// };

const mockEnShishaSubCategories: ISubCategory[] = [
  {
    id: 201,
    created_at: "2024-01-21T12:00:00Z",
    name: "Mix",
    published_at: "2024-01-22T08:30:00Z",
    updated_at: "2024-01-23T15:45:00Z",
    category: 101,
    products: mockEnShishaProducts,
  },
  {
    id: 202,
    created_at: "2024-01-21T12:00:00Z",
    name: "Standard",
    published_at: "2024-01-22T08:30:00Z",
    updated_at: "2024-01-23T15:45:00Z",
    category: 102,
    products: mockEnShishaProducts,
  },
  {
    id: 203,
    created_at: "2024-01-21T12:00:00Z",
    name: "Special",
    published_at: "2024-01-22T08:30:00Z",
    updated_at: "2024-01-23T15:45:00Z",
    category: 103,
    products: mockEnShishaProducts,
  },
];

const mockEnAlcoholSubCategories: ISubCategory[] = [
  {
    id: 201,
    created_at: "2024-01-21T12:00:00Z",
    name: "Draft Beers",
    published_at: "2024-01-22T08:30:00Z",
    updated_at: "2024-01-23T15:45:00Z",
    category: 101,
    products: mockEnAlcoholicProducts,
  },
  {
    id: 202,
    created_at: "2024-01-21T12:00:00Z",
    name: "Cocktails",
    published_at: "2024-01-22T08:30:00Z",
    updated_at: "2024-01-23T15:45:00Z",
    category: 102,
    products: mockEnAlcoholicProducts,
  },
  {
    id: 203,
    created_at: "2024-01-21T12:00:00Z",
    name: "Bottled Beers",
    published_at: "2024-01-22T08:30:00Z",
    updated_at: "2024-01-23T15:45:00Z",
    category: 101,
    products: mockEnAlcoholicProducts,
  },
  {
    id: 204,
    created_at: "2024-01-21T12:00:00Z",
    name: "Shots",
    published_at: "2024-01-22T08:30:00Z",
    updated_at: "2024-01-23T15:45:00Z",
    category: 101,
    products: mockEnAlcoholicProducts,
  },
];

const mockEnNonAlcoholSubCategories: ISubCategory[] = [
  {
    id: 301,
    created_at: "2024-01-21T12:00:00Z",
    name: "Cold Drinks",
    published_at: "2024-01-22T08:30:00Z",
    updated_at: "2024-01-23T15:45:00Z",
    category: 101,
    products: mockEnNonAlcoholicProducts,
  },
  {
    id: 302,
    created_at: "2024-01-21T12:00:00Z",
    name: "Hot Drinks",
    published_at: "2024-01-22T08:30:00Z",
    updated_at: "2024-01-23T15:45:00Z",
    category: 102,
    products: mockEnNonAlcoholicProducts,
  },
];

const mockAmSubCategories: ISubCategory[] = [
  {
    id: 204,
    created_at: "2024-01-21T12:00:00Z",
    name: "Ենթակարգեր Ե",
    published_at: "2024-01-22T08:30:00Z",
    updated_at: "2024-01-23T15:45:00Z",
    category: 104,
    products: mockAmProducts,
  },
  {
    id: 205,
    created_at: "2024-01-21T12:00:00Z",
    name: "Ենթակարգեր Լ",
    published_at: "2024-01-22T08:30:00Z",
    updated_at: "2024-01-23T15:45:00Z",
    category: 105,
    products: mockAmProducts,
  },
  {
    id: 206,
    created_at: "2024-01-21T12:00:00Z",
    name: "Ենթակարգեր Ա",
    published_at: "2024-01-22T08:30:00Z",
    updated_at: "2024-01-23T15:45:00Z",
    category: 106,
    products: mockAmProducts,
  },
];

export const mockCategory: ICategory[] = [
  {
    id: 101,
    created_at: "2024-01-21T12:00:00Z",
    name: "Shisha 🥑",
    published_at: "2024-01-22T08:30:00Z",
    products: mockEnShishaProducts,
    updated_at: "2024-01-23T15:45:00Z",
    sub_categories: mockEnShishaSubCategories,
    locale: "en",
  },
  {
    id: 102,
    created_at: "2024-01-15T12:00:00Z",
    name: "Alcoholic Drinks 🍸",
    published_at: "2024-01-15T08:30:00Z",
    products: mockEnAlcoholicProducts,
    updated_at: "2024-01-23T15:45:00Z",
    sub_categories: mockEnAlcoholSubCategories,
    locale: "en",
  },
  {
    id: 103,
    created_at: "2024-01-15T12:00:00Z",
    name: "Non-Alcoholic Drinks 🥤",
    published_at: "2024-01-15T08:30:00Z",
    products: mockEnNonAlcoholicProducts,
    updated_at: "2024-01-23T15:45:00Z",
    sub_categories: mockEnNonAlcoholSubCategories,
    locale: "en",
  },
  {
    id: 104,
    created_at: "2024-01-21T12:00:00Z",
    name: "Կատեգորիա Ա",
    published_at: "2024-01-22T08:30:00Z",
    products: mockAmProducts,
    updated_at: "2024-01-23T15:45:00Z",
    sub_categories: mockAmSubCategories,
    locale: "hy-AM",
  },
  {
    id: 105,
    created_at: "2024-01-15T12:00:00Z",
    name: "Կատեգորիա Բ",
    published_at: "2024-01-15T08:30:00Z",
    products: mockAmProducts,
    updated_at: "2024-01-23T15:45:00Z",
    sub_categories: mockAmSubCategories,
    locale: "hy-AM",
  },
  {
    id: 106,
    created_at: "2024-01-15T12:00:00Z",
    name: "Կատեգորիա Գ",
    published_at: "2024-01-15T08:30:00Z",
    products: mockAmProducts,
    updated_at: "2024-01-23T15:45:00Z",
    sub_categories: mockAmSubCategories,
    locale: "hy-AM",
  },
];
