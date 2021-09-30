import { observable, action, makeObservable, toJS } from "mobx";
import { ICategory, IProduct, ISubCategory } from "../utils/interfaces";
import { createContext, useContext } from "react";
import { MenuService } from "../services";
export class MenuStore {
  @observable errorMessage = "";
  @observable productsList: IProduct[] | null = [];
  @observable localeLanguage: string = "en";
  @observable localeCategories: any = [];
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
}
export const menuStore = new MenuStore();

const MenuStoreContext = createContext(menuStore);

export const useMenuStore = () => useContext(MenuStoreContext);
