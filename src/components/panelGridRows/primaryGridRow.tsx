import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { useMenuStore } from "../../stores/menuStore";
import styled from "styled-components";

interface Props {
  itemData: any;
  indexKey: number;
}

const Hexagon = styled(Box)`
  width: 0.3rem;
  height: 0.3rem;
  background-color: #c47c5a;
  transform: rotate(45deg);
  margin-bottom: 5px;
`;
const ItemGrid = styled(Grid)`
  flex: 0 -1 2rem;
`;
const ItemTypography = styled(Typography)`
  font-weight: 500;
`;
const PriceTypography = styled(Typography)`
  font-weight: 100;
  font-size: 1.2vmax;
`;
const STypography = styled(Typography)`
  font-style: italic;
  margin-bottom: 2px;
  font-weight: 600;
`;
const Description = styled(Typography)`
  margin-left: 0.1rem;
  font-size: 0.45rem;
`;
const PrimaryGridRow: React.FC<Props> = ({ itemData = {}, indexKey = 0 }) => {
  const { localeLanguage } = useMenuStore();
  return (
    <>
      <Grid container key={indexKey}>
        <ItemGrid container item xs={9}>
          <ItemTypography variant="h4">
            {itemData.name.toUpperCase()}
          </ItemTypography>
        </ItemGrid>

        <Grid container item xs direction="row" justifyContent="flex-end">
          <Grid
            item
            container
            xs={2}
            alignContent="center"
            justifyContent="flex-start"
          >
            <Grid item xs={2}>
              <Hexagon />
            </Grid>
          </Grid>
          {itemData.lot_price && itemData.description ? (
            <>
              <Grid container item xs={4}>
                <STypography variant="h6">
                  {localeLanguage === "en" ? "BOTTLE" : "ՇԻՇ"}
                </STypography>
              </Grid>
              <Grid container item xs={6} justifyContent="flex-end">
                <PriceTypography variant="h5">
                  {itemData.lot_price}
                </PriceTypography>
              </Grid>
            </>
          ) : (
            <Grid container item xs={6} justifyContent="flex-end">
              <PriceTypography variant="h5">
                {itemData.unit_price}
              </PriceTypography>
            </Grid>
          )}
        </Grid>
      </Grid>
      {itemData.description && (
        <Grid container item xs justifyContent="flex-start">
          <ItemGrid item xs={9}>
            <Description variant="h6">
              {itemData.description ? itemData.description.toUpperCase() : ""}
            </Description>
          </ItemGrid>
          {itemData.lot_price ? (
            <ItemGrid
              container
              item
              xs={3}
              direction="row"
              justifyContent="space-between"
              alignContent="center"
            >
              <Grid item xs={2}>
                <Hexagon />
              </Grid>
              <Grid item xs={4} container>
                <STypography variant="h6">
                  {localeLanguage === "en" ? "50ML" : "50ՄԼ"}
                </STypography>
              </Grid>
              <Grid container item xs={6} justifyContent="flex-end">
                <PriceTypography variant="h5">
                  {itemData.unit_price}
                </PriceTypography>
              </Grid>
            </ItemGrid>
          ) : (
            ""
          )}
        </Grid>
      )}
    </>
  );
};
export default PrimaryGridRow;
