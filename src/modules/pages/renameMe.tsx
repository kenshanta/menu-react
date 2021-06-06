import React, { Suspense } from 'react';
import { observer } from 'mobx-react-lite';
import { Switch, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';

// import { useStationStore } from 'stores';
// import { OrderCompletedDialog } from 'components/dialogs';
// import StationRoute from './stationRoute';
// import { StationTypes } from 'utils/enums/stationEnums';
// import { IOrderItem } from 'utils/interfaces';

// lazy import stations
// const SorterStation = React.lazy(() => import('./sorterStation/sorterStation'));
//  ========== ADD STATION ROUTES HERE ==============

const Pages: React.FC<{} & RouteComponentProps<{}>> = observer(({ match: { path }, history }) => {
//   const { stationType, currentStation, setOrderItem } = useStationStore();

//   const onOrderCompleteDialogCloseHandler = () => {
//     if (currentStation === 'washer') {
//       setOrderItem({} as IOrderItem);
//       history.push(`../../`, path);
//     }
//   };

  return (
    <>
      <Suspense fallback={<div>Loading station...</div>}>
        <Switch>
          {/* <StationRoute path={`${path}/${StationTypes.Folding}`} component={FoldingStation} />
          <StationRoute path={`${path}/${StationTypes.FoldingLinen}`} component={FoldingStation} />
          <StationRoute path={`${path}/${StationTypes.Tagger}`} component={TaggerStation} />
          <Redirect to={`${path}/${stationType}`} /> */}
        </Switch>
      </Suspense>
    </>
  );
});

export default withRouter(Pages);
