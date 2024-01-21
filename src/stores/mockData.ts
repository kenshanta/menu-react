import { ICategory, IProduct, ISubCategory } from "../utils/interfaces";

const mockProducts: IProduct[] = [
  {
    id: 1,
    name: "Product A",
    created_at: "2024-01-21T12:00:00Z",
    description: "A sample product",
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
    unit_price: 29.99,
    lot_price: 149.95,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 201,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 2,
    name: "Product B",
    created_at: "2024-01-21T12:00:00Z",
    description: "A sample product",
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
    unit_price: 29.99,
    lot_price: 149.95,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 201,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 6,
    name: "Product F",
    created_at: "2024-01-21T12:00:00Z",
    description: "A sample product",
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
    unit_price: 9.99,
    lot_price: 19.95,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 201,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 3,
    name: "Product C",
    created_at: "2024-01-21T12:00:00Z",
    description: "A sample product",
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
    lot_price: 1000.95,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 201,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 4,
    name: "Product D",
    created_at: "2024-01-21T12:00:00Z",
    description: "A sample product",
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
    unit_price: 30.99,
    lot_price: 303.95,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 201,
    updated_at: "2024-01-23T15:45:00Z",
  },
  {
    id: 5,
    name: "Product E",
    created_at: "2024-01-21T12:00:00Z",
    description: "A sample product",
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
    unit_price: 10.99,
    lot_price: 49,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 201,
    updated_at: "2024-01-23T15:45:00Z",
  },
];

const generateMockData = (id: number): IProduct => {
  return {
    id,
    name: `Product ${String.fromCharCode(65 + (id % 26))}`,
    created_at: "2024-01-21T12:00:00Z",
    description: `Description for Product ${String.fromCharCode(
      65 + (id % 26)
    )}`,
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
    unit_price: 29.99 + id,
    lot_price: 149.95 + id,
    published_at: "2024-01-22T08:30:00Z",
    sub_category: 200 + id,
    updated_at: "2024-01-23T15:45:00Z",
  };
};

const generateMockDataSet = (count: number): IProduct[] => {
  const mockDataSet: IProduct[] = [];
  for (let i = 1; i <= count; i++) {
    mockDataSet.push(generateMockData(i));
  }
  return mockDataSet;
};

const mockData: IProduct[] = generateMockDataSet(50);

const mockSubCategory: ISubCategory[] = [
  {
    id: 201,
    created_at: "2024-01-21T12:00:00Z",
    name: "Subcategory Y",
    published_at: "2024-01-22T08:30:00Z",
    updated_at: "2024-01-23T15:45:00Z",
    category: 101,
    products: generateMockDataSet(50),
  },
  {
    id: 202,
    created_at: "2024-01-21T12:00:00Z",
    name: "Subcategory Z",
    published_at: "2024-01-22T08:30:00Z",
    updated_at: "2024-01-23T15:45:00Z",
    category: 101,
    products: generateMockDataSet(50),
  },
];

export const mockCategory: ICategory[] = [
  {
    id: 101,
    created_at: "2024-01-21T12:00:00Z",
    name: "Category X",
    published_at: "2024-01-22T08:30:00Z",
    products: mockProducts,
    updated_at: "2024-01-23T15:45:00Z",
    sub_categories: mockSubCategory,
    locale: "en",
  },
  {
    id: 102,
    created_at: "2024-01-15T12:00:00Z",
    name: "Category Y",
    published_at: "2024-01-15T08:30:00Z",
    products: mockProducts,
    updated_at: "2024-01-23T15:45:00Z",
    sub_categories: mockSubCategory,
    locale: "en",
  },
  {
    id: 103,
    created_at: "2024-01-15T12:00:00Z",
    name: "Category Z",
    published_at: "2024-01-15T08:30:00Z",
    products: generateMockDataSet(50),
    updated_at: "2024-01-23T15:45:00Z",
    sub_categories: mockSubCategory,
    locale: "en",
  },
];
