import { observable, action, computed, runInAction, autorun } from 'mobx';
// import { AuthService } from '../services';
// import { stationStore } from './stationStore';

import {IProduct} from '../utils/interfaces'
import { createContext, useContext } from 'react';
import { AxiosError } from 'axios';
import Axious from '../services/api';

export class MenuStore {
//   @observable userLocale: Locales = Locales.English; // an employee can select his preffered locale
  @observable errorMessage = '';
  @observable loading = false;
  @observable productsList: IProduct[] | null = []


  @action.bound
  setProductsList(products: IProduct[] | null) {
    this.productsList = products;
  }
}

export const menuStore = new MenuStore();

const MenuStoreContext = createContext(menuStore);

export const useMenuStore = () => useContext(MenuStoreContext);
