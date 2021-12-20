import React, { useRef, useState } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { useMenuStore } from "../../stores/menuStore";
import { PanelSkeleton } from "../panelBody";

const NavBar: React.FC = () => {
  const { currentCategoriesList, setSelectedCategoryId, selectedCategoryId } =
    useMenuStore();

  const [componentVariables, setComponentVariables] = useState<any>({
    variant: "",
    centered: true,
  });
  const handleChange = async (
    event: React.ChangeEvent<{}>,
    newValue: number
  ) => {
    setSelectedCategoryId(newValue);
  };
  const ref = useRef<any>();

  React.useLayoutEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 500 && ref.current) {
        setComponentVariables({ variant: "scrollable", centered: false });
      } else if (window.innerWidth > 500) {
        setComponentVariables({ variant: "standard", centered: true });
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [
    currentCategoriesList,
    componentVariables.variant,
    componentVariables.centered,
  ]);

  return (
    <AppBar
      position="sticky"
      color="default"
      style={{
        borderBottom: `1px solid #C47C5A`,
        overflow: "hidden !important",
        top: 0,
      }}
    >
      {currentCategoriesList.length > 0 ? (
        <Tabs
          value={selectedCategoryId}
          onChange={handleChange}
          textColor="secondary"
          variant={componentVariables.variant}
          aria-label="categories tabs"
          indicatorColor="secondary"
          ref={ref}
          centered={componentVariables.centered}
          style={{ width: "100%" }}
        >
          {currentCategoriesList.map((category: any, i: number) => {
            return (
              <Tab
                key={i}
                label={<h4>{category.name}</h4>}
                style={{ margin: "0" }}
              />
            );
          })}
        </Tabs>
      ) : (
        <PanelSkeleton />
      )}
    </AppBar>
  );
};
export default NavBar;
