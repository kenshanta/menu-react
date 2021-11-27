import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { useMenuStore } from "../../stores/menuStore";
// import { PanelSkeleton } from "../panelBody";

const NavBar: React.FC = () => {
  const { currentCategoriesList, setSelectedCategoryId, selectedCategoryId } =
    useMenuStore();

  const handleChange = async (
    event: React.ChangeEvent<{}>,
    newValue: number
  ) => {
    setSelectedCategoryId(newValue);
  };
  return (
    <AppBar position="sticky" color="default" scr>
      {currentCategoriesList.length > 0 && (
        <Tabs
          value={selectedCategoryId}
          onChange={handleChange}
          textColor="secondary"
          // variant="standard"
          aria-label="categories tabs"
          indicatorColor="secondary"
          // centered
          scrollButtons="on"
        >
          {currentCategoriesList.map((category) => (
            <Tab label={<h4>{category.name}</h4>} />
          ))}
        </Tabs>
      )}
    </AppBar>
  );
};
export default NavBar;
