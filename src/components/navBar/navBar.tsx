import React, { useEffect } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { useMenuStore } from "../../stores/menuStore";

const NavBar: React.FC = () => {
  const {
    localeCategoriesList,
    setSelectedCategoryId,
    selectedCategoryId,
    localeLanguage,
  } = useMenuStore();

  useEffect(() => {}, [localeLanguage, localeCategoriesList]);
  const handleChange = async (
    event: React.ChangeEvent<{}>,
    newValue: number
  ) => {
    setSelectedCategoryId(newValue);
  };
  console.log(selectedCategoryId, "localecategories");
  return (
    <AppBar position="static" color="default">
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
    </AppBar>
  );
};
export default NavBar;
