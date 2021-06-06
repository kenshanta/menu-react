import React, { useState } from "react";
// import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import { Tabs, Grid, Tab, AppBar, Typography, Box } from "@material-ui/core";
import axios from "axios";
import { useMenuStore } from "../../../stores/menuStore";
import { PanelBody } from "../../../components/panelBody";
import { IProduct } from "../../../utils/interfaces/product";
// import { clearObserving } from 'mobx/dist/internal';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

interface NavigationBarProps {
  products: any;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#F9F2EF",
    // width: "100%",
  },
}));

const NavigationBar: React.FC<NavigationBarProps> = ({ products }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [selectedCategoryProducts, setSelectedCategoryProducts] =
    React.useState<IProduct | null>(null);
  const { productsList } = useMenuStore();

  const handleChange = async (
    event: React.ChangeEvent<{}>,
    newValue: number
  ) => {
    setValue(newValue);

    // const landingPageProductsResponse = await axios.get(`http://localhost:1337/categories/${newValue}`);
    // setSelectedCategoryProducts(landingPageProductsResponse.data.products)
  };

  // const handleChangeIndex = (index: number) => {
  //   setValue(index);
  // };style={{ width: '50%', height: 'auto' }}

  return (
    <Grid container className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Cigars" {...a11yProps(0)} />
          <Tab label="Food" {...a11yProps(1)} />
          <Tab label="Drinks" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      {/* <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        > */}

      <TabPanel value={value} index={0} dir={theme.direction}>
        <PanelBody indexValue={value} products={productsList} />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <PanelBody indexValue={value} products={productsList} />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <PanelBody indexValue={value} products={productsList} />
      </TabPanel>
      {/* </SwipeableViews> */}
    </Grid>
  );
};
export default NavigationBar;
