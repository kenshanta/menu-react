import React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { useMenuStore } from "../../../stores/menuStore";
import { PanelBody } from "../../../components/panelBody";
import { NavBar } from "../../../components/navBar";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { TabPanel } from "../../../components/tabPanel";
import styled from "styled-components";

const CGrid = styled(Box)``;

const MenuBody: React.FC = observer(() => {
  const theme = useTheme();

  const { currentCategoriesList, selectedCategoryId, setSelectedCategoryId } =
    useMenuStore();

  const handleChangeIndex = (index: number) => {
    setSelectedCategoryId(index);
  };
  const styles = {
    slideContainer: {
      height: "100",
      // WebkitOverflowScrolling: "touch", // iOS momentum scrolling
    },
    slide: {
      // padding: 15,
      minHeight: 100,
      color: "#fff",
    },
  };
  return (
    <CGrid>
      <NavBar />
      <SwipeableViews
        containerStyle={styles.slideContainer}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={selectedCategoryId}
        onChangeIndex={handleChangeIndex}
        // animateHeight
      >
        {currentCategoriesList.map((category, i) => {
          return (
            <TabPanel
              value={selectedCategoryId}
              index={selectedCategoryId}
              dir={theme.direction}
              key={category.id}
            >
              <PanelBody
                indexValue={i}
                products={toJS(currentCategoriesList[category.id])}
              />
            </TabPanel>
          );
        })}
      </SwipeableViews>
    </CGrid>
  );
});
export default MenuBody;
