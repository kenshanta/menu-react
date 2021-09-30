import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { useMenuStore } from "../../stores/menuStore";
import styled from "styled-components";
import { PrimaryGridRow } from "../panelGridRows";

interface Props {
  indexValue: number;
  products: any;
}

const ProductGrid = styled(Grid)`
  margin-bottom: 2rem;
`;
const ItemGrid = styled(Grid)`
  margin-bottom: 5px;
`;
const SubCategoyTypography = styled(Typography)`
  margin: 0.7rem 0 1rem;
`;
const PanelBody: React.FC<Props> = ({ products, indexValue }) => {
  const { localeCategoriesList } = useMenuStore();

  return (
    <Box>
      <Grid container direction="row">
        {localeCategoriesList[indexValue].sub_categories.map(
          (subCategory, indexz) => {
            const productsList = localeCategoriesList[
              indexValue
            ].products.filter(
              (product) => product.sub_category === subCategory.id
            );
            return (
              <ProductGrid container key={indexz}>
                <SubCategoyTypography variant="h3">
                  {capitalize(subCategory.name)}
                </SubCategoyTypography>
                {productsList.map((item, i) => (
                  <ItemGrid container direction="row" key={i}>
                    <PrimaryGridRow itemData={item} indexKey={i} />
                  </ItemGrid>
                ))}
              </ProductGrid>
            );
          }
        )}
      </Grid>
    </Box>
  );
};
export default PanelBody;

const capitalize = (string) => {
  const arr = string.split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  const str2 = arr.join(" ");
  return str2;
};
