import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router';
import { observer } from 'mobx-react-lite';
// import { useStationStore } from 'stores';

interface Props {
  component: any;
  [x: string]: any;
}

const StationRoute: React.FC<Props> = observer(({ component: Component, ...rest }) => {
//   const { stationType } = useStationStore();

  const handleRoute = (props: RouteComponentProps) => {
    const {
      match: { url },
    } = props;

    if (url.includes('stationType')) {
      return <Component {...props} />;
    }
    return <Redirect to={`/${'stationType'}`} />;
  };

  return <Route {...rest} render={handleRoute} />;
});

export default StationRoute;
