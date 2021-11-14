import React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useMenuStore } from "../../../stores/menuStore";
import { PanelBody } from "../../../components/panelBody";
import { NavBar } from "../../../components/navBar";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { TabPanel } from "../../../components/tabPanel";
import styled from "styled-components";

const CGrid = styled(Grid)`
  height: 100;
`;

const MenuBody: React.FC = observer(() => {
  const theme = useTheme();

  const { currentCategoriesList, selectedCategoryId, setSelectedCategoryId } =
    useMenuStore();

  const handleChangeIndex = (index: number) => {
    setSelectedCategoryId(index);
  };
  return (
    <CGrid>
      <NavBar />
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={selectedCategoryId}
        onChangeIndex={handleChangeIndex}
        containerStyle={{ height: "100vh", WebkitOverflowScrolling: "touch" }}
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
