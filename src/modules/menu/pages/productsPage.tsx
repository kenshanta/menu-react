import React, { useState, useEffect } from "react";
import axios from "axios";
import { IProduct, ICategories } from "../../../utils/interfaces";
import { useMenuStore } from "../../../stores/menuStore";
import Box from "@material-ui/core/Box";
import { NavigationBar } from "../components";
import { TabPanel } from "../components";

const ProductsPage: React.FC = () => {
  const [productsList, setProductsList] = useState<IProduct[] | null>(null);
  const [categoriesList, setCategoriesList] =
    useState<ICategories[] | null>(null);
  // const {setProductsList} = useMenuStore();
  // useEffect (() => {
  //   // try {
  //     async function fetchApi(){

  //       // const productsResponse = await axios.get('http://localhost:1337/products');
  //       const landingPageProductsResponse = await axios.get('http://localhost:1337/categories/1');

  //       setProductsList(landingPageProductsResponse.data.products)

  //     }
  //     fetchApi()
  //     // }
  //   }, []);
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className="control-buttons"
      >
        <NavigationBar products={mockProductsList} />
        {/* <TabPanel productsList= {mockProductsList} /> */}
      </Box>
    </>
  );
};

export default ProductsPage;

const mockProductsList = [
  {
    id: 1,
    name: "Cohiba",
    description: "Fine cigar",
    prices: {
      primary: 1000,
    },
    subcategory: null,
    published_at: "2021-06-01T22:58:08.882Z",
    created_at: "2021-06-01T22:58:05.899Z",
    updated_at: "2021-06-02T00:20:06.450Z",
    categories: [
      {
        id: 1,
        name: "Cigars",
        published_at: "2021-04-25T02:11:42.995Z",
        created_at: "2021-04-25T01:18:16.157Z",
        updated_at: "2021-04-25T02:11:43.013Z",
      },
    ],
  },
  {
    id: 2,
    name: "Jack Daniels",
    description: "12 yo blended Scotch",
    prices: {
      primary: 5000,
      secondary: 25000,
    },
    subcategory: "American",
    published_at: "2021-06-01T22:59:44.598Z",
    created_at: "2021-06-01T22:59:42.365Z",
    updated_at: "2021-06-02T00:24:30.187Z",
    categories: [
      {
        id: 2,
        name: "Drinks",
        published_at: "2021-04-25T02:11:50.272Z",
        created_at: "2021-04-25T01:18:39.580Z",
        updated_at: "2021-04-25T02:11:50.288Z",
      },
    ],
  },
  {
    id: 3,
    name: "Ceasar Salad",
    description: "",
    prices: {
      primary: 2000,
      secondary: 25000,
    },
    subcategory: null,
    published_at: "2021-06-01T23:00:54.157Z",
    created_at: "2021-06-01T23:00:52.007Z",
    updated_at: "2021-06-02T00:24:24.436Z",
    categories: [
      {
        id: 3,
        name: "Food",
        published_at: "2021-04-25T02:11:54.627Z",
        created_at: "2021-04-25T01:18:48.794Z",
        updated_at: "2021-04-25T02:11:54.643Z",
      },
    ],
  },
  {
    id: 4,
    name: "The Cigar ",
    description: "",
    prices: {
      primary: 8000,
    },
    subcategory: "Cuban",
    published_at: "2021-06-02T19:55:48.545Z",
    created_at: "2021-06-02T19:55:38.395Z",
    updated_at: "2021-06-02T19:55:48.563Z",
    categories: [
      {
        id: 1,
        name: "Cigars",
        published_at: "2021-04-25T02:11:42.995Z",
        created_at: "2021-04-25T01:18:16.157Z",
        updated_at: "2021-04-25T02:11:43.013Z",
      },
    ],
  },
];
