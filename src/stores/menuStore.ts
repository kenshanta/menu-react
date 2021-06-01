import { observable, action, computed, runInAction, autorun } from 'mobx';
// import { AuthService } from '../services';
// import { stationStore } from './stationStore';
// import { Locales } from '../utils/enums/stationEnums';
import { createContext, useContext } from 'react';
import { AxiosError } from 'axios';
import Axious from '../services/api';

export class AuthStore {
//   @observable userLocale: Locales = Locales.English; // an employee can select his preffered locale
  @observable errorMessage = '';
  @observable loading = false;


  /**
   * @description logs out from the system completly back to the manager RFID page
   */
  @action.bound
  resetSystem() {
    // stationStore.clearUserStations();
    // clear local storage
    localStorage.clear();
    // stationStore.clearData();
  }

//   @action.bound
//   changeSystemLanguage(lang: Locales) {
//     this.userLocale = lang;
//   }
}

export const authStore = new AuthStore();

// autorun reacts to just everything that is used in its function
autorun(() => {
//   if (authStore.isLoggedIn) {
    // add auth token to headers
    // Axious.defaults.headers.common['Authorization'] = `Bearer ${authStore.authToken}`;
//   } else {
    // remove axios auth token headre
//   }
});

const AuthStoreContext = createContext(authStore);

export const useAuthStore = () => useContext(AuthStoreContext);
