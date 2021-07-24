import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index?: any;
  value?: any;
  category?: any;
  productsList?: any;
}
const TabPanel: React.FC<TabPanelProps> = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  const theme = useTheme();
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
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}

      {/* <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        > */}
      <TabPanel value={value} index={0} dir={theme.direction}>
        <ul>
          {props.productsList &&
            props.productsList.map((product: any) => (
              <li key={product.id}>
                {product.name} --- {product.prices.primary}
              </li>
            ))}
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        ...FoodsList
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        DrinksList need one
      </TabPanel>
      {/* </SwipeableViews> */}
    </div>
  );
};
export default TabPanel;
