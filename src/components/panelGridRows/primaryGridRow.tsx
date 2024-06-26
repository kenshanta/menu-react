import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useMenuStore } from "../../stores/menuStore";
import styled from "styled-components";

interface Props {
  itemData: any;
  indexKey: number;
}

const Hexagon = styled(Box)`
  width: 0.3rem;
  height: 0.3rem;
  background-color: #8d6a9f;
  transform: rotate(45deg);
  margin-top: 0.1rem;
`;
const ItemGrid = styled(Grid)`
  flex: 0 -1 2rem;
`;
const ItemTypography = styled(Typography)`
  font-weight: 500;
`;
const PriceTypography = styled(Typography)`
  font-weight: 900;
  font-size: 1.4vmax;
  align-items: center;
`;
const STypography = styled(Typography)`
  font-style: italic;
  margin-bottom: 1px;
  font-weight: 600;
  font-size: 0.5rem;
`;
const Description = styled(Typography)`
  margin-left: 0.1rem;
  display: flex;
  align-item: flex-start;
`;
const PrimaryGridRow: React.FC<Props> = ({ itemData = {}, indexKey = 0 }) => {
  const { localeLanguage } = useMenuStore();
  return (
    <>
      <Grid container key={indexKey}>
        <ItemGrid container item xs={9}>
          <ItemTypography variant="h4">{itemData.name}</ItemTypography>
        </ItemGrid>

        <Grid
          container
          item
          xs
          direction="row"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Grid item xs={1}>
            <Hexagon />
          </Grid>
          {itemData.lot_price && itemData.description ? (
            <>
              <Grid container item xs={6} justifyContent="center">
                <STypography variant="h6">
                  {localeLanguage === "en" && itemData.sub_category === 201
                    ? " 1L"
                    : " 1L"}
                </STypography>
              </Grid>
              <Grid container item xs={2} justifyContent="flex-end">
                <PriceTypography variant="h5">
                  {itemData.lot_price}
                </PriceTypography>
              </Grid>
            </>
          ) : (
            <Grid container item xs={4} justifyContent="flex-end">
              <PriceTypography variant="h5">
                {itemData.unit_price}
              </PriceTypography>
            </Grid>
          )}
        </Grid>
      </Grid>
      {itemData.description && (
        <Grid container item xs justifyContent="flex-start">
          {itemData.description.length > 0 ? (
            <ItemGrid item xs={9}>
              <Description variant="h6">
                {itemData.description ? itemData.description : ""}
              </Description>
            </ItemGrid>
          ) : (
            ""
          )}

          {itemData.lot_price ? (
            <ItemGrid
              container
              item
              xs={3}
              direction="row"
              justifyContent="space-between"
              alignContent="center"
            >
              <Grid item xs={1}>
                <Hexagon />
              </Grid>
              <Grid item xs={3} container justifyContent="flex-end">
                <STypography variant="h6">
                  {localeLanguage === "en" && itemData.sub_category === 201
                    ? "0.5 L"
                    : "0.5 L"}
                </STypography>
              </Grid>
              <Grid container item xs={2} justifyContent="flex-end">
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
