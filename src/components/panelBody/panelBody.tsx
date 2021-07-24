import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { useMenuStore } from "../../stores/menuStore";
import styled from "styled-components";

interface Props {
  indexValue: number;
  products: any;
}
const SButton = styled(Box)`
  width: 0.3rem;
  height: 0.3rem;
  background-color: #c47c5a;
  margin-bottom: 3px;
  transform: rotate(45deg);
`;
const SGrid = styled(Grid)`
  margin-bottom: 5px;
`;
const PGrid = styled(Grid)`
  display: flex;
`;
const CGrid = styled(Grid)`
  flex: 0 -1 2rem;
`;
const STypography = styled(Typography)`
  font-style: italic;
  flex-shrink: 1;
`;

const PanelBody: React.FC<Props> = ({ products, indexValue }) => {
  const { localeCategoriesList } = useMenuStore();

  return (
    <>
      <Grid container direction="row">
        {localeCategoriesList[indexValue].sub_categories.map((subCategory) => {
          const productsList = localeCategoriesList[indexValue].products.filter(
            (product) => product.sub_category === subCategory.id
          );
          return (
            <>
              <Typography variant="h5">
                {capitalize(subCategory.name)}
              </Typography>
              {productsList.map((item) => (
                <SGrid container direction="row">
                  <PGrid container item>
                    <CGrid item xs={9}>
                      <Typography variant="h6">
                        {item.name.toUpperCase()}
                      </Typography>
                    </CGrid>
                    <Grid container xs direction="row" justify="flex-end">
                      <Grid
                        container
                        item
                        xs={2}
                        direction="column"
                        justify="center"
                      >
                        <SButton />
                      </Grid>
                      {item.prices.lot && (
                        <STypography variant="h6">50ML</STypography>
                      )}
                      <Grid container item xs={5} justify="flex-end">
                        <Typography variant="h6">{item.prices.unit}</Typography>
                      </Grid>
                    </Grid>
                  </PGrid>
                  {item.description !== "N/A" && (
                    <Grid container xs direction="row" justify="flex-end">
                      <CGrid item xs={9}>
                        <Typography variant="h6">{item.description}</Typography>
                      </CGrid>
                      {item.prices.lot && (
                        <Grid container xs direction="row" justify="flex-end">
                          <Grid
                            container
                            item
                            xs={2}
                            direction="column"
                            justify="center"
                          >
                            <SButton />
                          </Grid>
                          <STypography variant="h6">Bottle</STypography>
                          <Grid container item xs={5} justify="flex-end">
                            <Typography variant="h6">
                              {item.prices.lot}
                            </Typography>
                          </Grid>
                        </Grid>
                      )}
                    </Grid>
                  )}
                </SGrid>
              ))}
            </>
          );
        })}
      </Grid>
    </>
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
