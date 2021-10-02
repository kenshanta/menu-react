import React, { Suspense } from "react";
import {
  Switch,
  Redirect,
  withRouter,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import { observer } from "mobx-react-lite";
import PanelSkeleton from "../../components/panelBody/panelSkeleton";

interface Props extends RouteComponentProps {}

// lazy import stations
const MenuBody = React.lazy(() => import("./components/menuBody"));

const Menu: React.FC<Props> = observer(({ match: { path } }) => {
  return (
    <Suspense fallback={<PanelSkeleton />}>
      <Switch>
        <Route path={`${path}`} children={<MenuBody />} />
        <Redirect to={`${path}`} />
      </Switch>
    </Suspense>
  );
});

export default withRouter(Menu);
