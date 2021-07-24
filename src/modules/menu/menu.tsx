import React, { Suspense } from "react";
import {
  Switch,
  Redirect,
  withRouter,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import { toJS } from "mobx";
import { useMenuStore } from "../../stores/menuStore";
import { MenuService } from "../../services";
import { observer } from "mobx-react-lite";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const SBox = styled(Box)`
  height: calc(100%);
`;
interface Props extends RouteComponentProps {}

// lazy import stations
const ProductsPage = React.lazy(() => import("./pages/productsPage"));

const Menu: React.FC<Props> = observer(({ match: { path } }) => {
  const {
    localeLanguage,
    setLocaleLanguage,
    setLocaleCategoriesList,
    setLocaleSubCategories,
  } = useMenuStore();
  const [isLoadingMode, setIsLoadingMode] = React.useState(true);

  React.useEffect(() => {
    const fetchCategoriesList = async () => {
      const productItemsList = await MenuService.getCategoriesByLocale(
        localeLanguage
      );
      setLocaleCategoriesList(toJS(productItemsList));
    };
    const fetchSubCategoriesList = async () => {
      const subCategoriesList = await MenuService.getSubCategoriesByLocale(
        localeLanguage
      );
      setLocaleSubCategories(toJS(subCategoriesList));
      setIsLoadingMode(false);
      setLocaleLanguage(localeLanguage);
    };
    fetchCategoriesList();
    fetchSubCategoriesList();
  }, [
    localeLanguage,
    setLocaleCategoriesList,
    setLocaleLanguage,
    isLoadingMode,
    setLocaleSubCategories,
  ]);

  return (
    <Box id="content-wrap">
      <Suspense fallback={<div>Loading your menu</div>}>
        <Switch>
          {!isLoadingMode && (
            <Route path={`${path}`} children={<ProductsPage />} />
          )}
          <Redirect to={`${path}`} />
        </Switch>
      </Suspense>
    </Box>
  );
});

export default withRouter(Menu);
