import React, { useEffect } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { useMenuStore } from "../../stores/menuStore";
import { PanelSkeleton } from "../panelBody";

const NavBar: React.FC = () => {
  const {
    localeCategoriesList,
    setSelectedCategoryId,
    selectedCategoryId,
    localeLanguage,
  } = useMenuStore();

  const handleChange = async (
    event: React.ChangeEvent<{}>,
    newValue: number
  ) => {
    setSelectedCategoryId(newValue);
  };
  return (
    <AppBar position="static" color="default">
      {localeCategoriesList[0] ? (
        <Tabs
          value={selectedCategoryId}
          onChange={handleChange}
          textColor="secondary"
          variant="standard"
          aria-label="categories tabs"
          indicatorColor="secondary"
          centered
        >
          <Tab label={<h4>{localeCategoriesList[0].name}</h4>} />
          <Tab label={<h4>{localeCategoriesList[1].name}</h4>} />
          <Tab label={<h4>{localeCategoriesList[2].name}</h4>} />
        </Tabs>
      ) : (
        <PanelSkeleton />
      )}
    </AppBar>
  );
};
export default NavBar;
