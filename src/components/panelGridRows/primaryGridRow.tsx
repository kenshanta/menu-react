import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
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
const STypography = styled(Typography)`
  font-style: italic;
  margin-bottom: 2px;
  font-size: 0.42rem;
`;
const Description = styled(Typography)`
  margin-left: 0.1rem;
  font-size: 0.44rem;
`;
const PrimaryGridRow: React.FC<Props> = ({ itemData = {}, indexKey = 0 }) => {
  return (
    <>
      <Grid container key={indexKey}>
        <ItemGrid container item xs={9} alignContent="center">
          <Typography variant="h4">{itemData.name.toUpperCase()}</Typography>
        </ItemGrid>

        <Grid container item xs direction="row" justifyContent="flex-end">
          <Grid
            item
            container
            xs={2}
            direction="row"
            alignContent="center"
            justifyContent="flex-start"
          >
            <Hexagon />
          </Grid>
          {itemData.lot_price && itemData.description ? (
            <>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignContent="flex-end"
                item
                xs={4}
              >
                <STypography variant="h6">{"BOTTLE"}</STypography>
              </Grid>
              <Grid container item xs={6} justifyContent="flex-end">
                <Typography variant="h5">{itemData.lot_price}</Typography>
              </Grid>
            </>
          ) : (
            <Grid container item xs={6} justifyContent="flex-end">
              <Typography variant="h5">{itemData.unit_price}</Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
      {itemData.description && (
        <Grid container item xs direction="row" justifyContent="flex-start">
          <ItemGrid item xs={9}>
            <Description variant="h6">
              {itemData.description ? itemData.description.toUpperCase() : ""}
            </Description>
          </ItemGrid>
          {itemData.lot_price ? (
            <Grid
              container
              item
              xs={3}
              direction="row"
              justifyContent="space-between"
              alignContent="center"
            >
              <Grid container alignContent="center" item xs={1}>
                <Hexagon />
              </Grid>
              <Grid item xs={4} container alignContent="center">
                <STypography variant="h6">50ML</STypography>
              </Grid>
              <Grid item xs={"auto"}>
                <Typography variant="h5">{itemData.unit_price}</Typography>
              </Grid>
            </Grid>
          ) : (
            ""
          )}
        </Grid>
      )}
    </>
  );
};
export default PrimaryGridRow;
