import React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import { Tabs, Tab, AppBar, Typography, Box } from "@material-ui/core";
import { useMenuStore } from "../../../stores/menuStore";
// import { MenuService } from "../../../services";
import { PanelBody } from "../../../components/panelBody";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import styled from "styled-components";

const CGrid = styled(Box)`
  height: calc(100% - 60px);
`;
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
  categories?: any;
}
interface NavigationBarProps {
  categories?: any;
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
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// function a11yProps(index: any) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     backgroundColor: "#F9F2EF",
//   },
// }));

const NavigationBar: React.FC<NavigationBarProps> = observer(
  ({ categories }) => {
    // const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    // console.log(categories, "empty");
    const { localeCategoriesList } = useMenuStore();

    const handleChange = async (
      event: React.ChangeEvent<{}>,
      newValue: number
    ) => {
      setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
      setValue(index);
    };

    return (
      <CGrid>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            variant="fullWidth"
            aria-label="categories tabs"
          >
            <Tab label={<h5>{localeCategoriesList[0].name}</h5>} />
            <Tab label={<h5>{localeCategoriesList[2].name}</h5>} />
            <Tab label={<h5>{localeCategoriesList[1].name}</h5>} />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <PanelBody
              indexValue={0}
              products={toJS(localeCategoriesList[value])}
            />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <PanelBody
              indexValue={2}
              products={toJS(localeCategoriesList[value])}
            />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <PanelBody
              indexValue={1}
              products={toJS(localeCategoriesList[value])}
            />
          </TabPanel>
        </SwipeableViews>
      </CGrid>
    );
  }
);
export default NavigationBar;
