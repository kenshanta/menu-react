import React, { Suspense } from 'react';
import { Switch, Redirect, withRouter, Route, RouteComponentProps } from 'react-router-dom';
import {ProductsPage} from './pages'

interface Props extends RouteComponentProps {}

// lazy import stations
// const ProductsPage = React.lazy(() => import('./pages/productsPage'));
//  ========== ADD STATION ROUTES HERE ==============

const Menu: React.FC<Props> = ({ match: { path } }) => {
//   const { stationType, currentStation, setOrderItem } = useStationStore();


  return (
    <>
      <Suspense fallback={<div>Loading your menu</div>}>
        <Switch>
        <Route path={`${path}`} children={<ProductsPage />} />
          <Redirect to={`${path}`} />
        </Switch>
      </Suspense>
    </>
  );
};

export default withRouter(Menu);
