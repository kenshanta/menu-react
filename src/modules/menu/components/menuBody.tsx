import React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { useMenuStore } from "../../../stores/menuStore";
import { PanelBody } from "../../../components/panelBody";
import { NavBar } from "../../../components/navBar";
import { observer } from "mobx-react-lite";
import { TabPanel } from "../../../components/tabPanel";
import styled from "styled-components";

const CGrid = styled(Grid)`
  height: 100;
  width: 100;
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
        // hotfix fix until issue #599 is resolved
        containerStyle={{
          transition: "transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s",
        }}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={selectedCategoryId}
        onChangeIndex={handleChangeIndex}
        animateHeight
      >
        {currentCategoriesList.map((category, i) => {
          return (
            <TabPanel
              value={selectedCategoryId}
              index={selectedCategoryId}
              dir={theme.direction}
              key={category.id}
            >
              <PanelBody indexValue={i} />
            </TabPanel>
          );
        })}
      </SwipeableViews>
    </CGrid>
  );
});
export default MenuBody;
