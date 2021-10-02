import { API } from "./api";
import { AxiosRequestConfig } from "axios";

/**
 *  Api service used to manage & handle orders
 */
export class MenuService {
  /**
   * Get Categories details
   *
   * @async
   * @function getMenuProductsByCategoryAndi18
   *
   * @return {array} CategoriesList
   */
  async getCategoriesByLocale(locale: string = "en") {
    //request config
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/categories?_locale=${locale}`,
    };

    const response = await API.request<any>(config);
    return response.data;
  }

  async getSubCategoriesByLocale(locale: string = "en") {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/sub-categories?_locale=${locale}`,
    };
    const response = await API.request<any>(config);
    return response.data;
  }
}

const menuService = new MenuService();

export default menuService;
