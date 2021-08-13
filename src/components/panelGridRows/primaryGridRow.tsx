import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import styled from "styled-components";

interface Props {
  itemData: any;
  indexKey: number;
}

const SButton = styled(Box)`
  width: 0.3rem;
  height: 0.3rem;
  background-color: #c47c5a;
  transform: rotate(45deg);
  margin-bottom: 5px;
`;
const CGrid = styled(Grid)`
  flex: 0 -1 2rem;
`;
const STypography = styled(Typography)`
  font-style: italic;
  margin-bottom: 2px;
`;

const PrimaryGridRow: React.FC<Props> = ({ itemData = {}, indexKey = 0 }) => {
  return (
    <>
      <Grid container key={indexKey}>
        <CGrid container item xs={9} alignContent="center">
          <Typography variant="h4">{itemData.name.toUpperCase()}</Typography>
        </CGrid>

        <Grid container item xs direction="row" justifyContent="flex-end">
          <Grid
            item
            container
            xs={2}
            direction="row"
            alignContent="center"
            justifyContent="flex-start"
          >
            <SButton />
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
          <CGrid item xs={9}>
            <Typography variant="h6">
              {itemData.description ? itemData.description.toUpperCase() : ""}
            </Typography>
          </CGrid>
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
                <SButton />
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
