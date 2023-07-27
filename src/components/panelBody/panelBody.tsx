import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { useMenuStore } from "../../stores/menuStore";
import styled from "styled-components";
import { PrimaryGridRow } from "../panelGridRows";

interface Props {
  indexValue: number;
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
const PanelBody: React.FC<Props> = ({ indexValue }) => {
  const { currentCategoriesList } = useMenuStore();

  return (
    <Box minHeight={'70vh'}>
      <Grid container direction="row">
        {currentCategoriesList[indexValue].sub_categories.map(
          (subCategory, index) => {
            const productsList = currentCategoriesList[
              indexValue
            ].products.filter(
              (product) => product.sub_category === subCategory.id
            );
            const alphabeticallySortedList = productsList.sort((a, b) =>
              a.name.localeCompare(b.name)
            );
            return (
              <ProductGrid container key={index}>
                <SubCategoyTypography variant="h3">
                  {capitalize(subCategory.name)}
                </SubCategoyTypography>
                {alphabeticallySortedList.map((item, i) => (
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
