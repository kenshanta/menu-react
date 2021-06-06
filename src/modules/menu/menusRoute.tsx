import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router';
import { observer } from 'mobx-react-lite';
// import { useStationStore } from 'stores';

interface Props {
  component: any;
  [x: string]: any;
}

const MenusRoute: React.FC<Props> = observer(({ component: Component, ...rest }) => {
//   const { productCategory } = useStationStore();

  const handleRoute = (props: RouteComponentProps) => {
    const {
      match: { url },
    } = props;

    if (url.includes('productCategory')) {
      return <Component {...props} />;
    }
    return <Redirect to={`/${'productCategory'}`} />;
  };

  return <Route {...rest} render={handleRoute} />;
});

export default MenusRoute;
