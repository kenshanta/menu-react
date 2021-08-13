import { observable, action, makeObservable, toJS } from "mobx";
import { ICategory, IProduct, ISubCategory } from "../utils/interfaces";
import { createContext, useContext } from "react";
import { MenuService } from "../services";
export class MenuStore {
  //   @observable userLocale: Locales = Locales.English; // an employee can select his preffered locale
  @observable errorMessage = "";
  @observable loading = true;
  @observable productsList: IProduct[] | null = [];
  @observable localeLanguage: string = "en";
  @observable localeCategories: any = [];
  @observable localeProducts: any = [];
  @observable localeCategoriesList: ICategory[] = [];
  @observable localeSubCategories: ISubCategory[] = [];
  @observable selectedCategoryId: number = 0;

  constructor() {
    makeObservable(this);
  }
  @action
  setLocaleSubCategories = (subCatgories: any) => {
    this.localeSubCategories = subCatgories;
  };

  @action
  setLocaleCategories = (categories: any) => {
    this.localeCategories = categories;
  };

  @action
  setLocaleProducts = (products: any) => {
    this.localeProducts = products;
  };

  @action
  setLocaleCategoriesList = (categoriesList: any) => {
    this.localeCategoriesList = toJS(categoriesList);
  };

  @action
  setLocaleLanguage = async (language: string) => {
    const sakosShit = await MenuService.getCategoriesByLocale(language);
    this.setLocaleCategoriesList(toJS(sakosShit));
    this.localeLanguage = language;
  };
  @action
  setSelectedCategoryId = (categoryId: number) => {
    this.selectedCategoryId = categoryId;
  };
  @action
  setIsLoading = (isLoading: boolean) => {
    this.loading = isLoading;
  };
}
export const menuStore = new MenuStore();

const MenuStoreContext = createContext(menuStore);

export const useMenuStore = () => useContext(MenuStoreContext);
