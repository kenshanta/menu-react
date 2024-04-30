import { observable, action, makeObservable, toJS } from "mobx";
import { ICategory, IProduct, ISubCategory } from "../utils/interfaces";
import { createContext, useContext } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
export class MenuStore {
  @observable errorMessage = "";
  @observable productsList: IProduct[] | null = [];
  @observable localeLanguage: string = "en";
  @observable localeCategories: any = [];
  @observable localeCategoriesList: ICategory[] = [];
  @observable localeSubCategories: ISubCategory[] = [];
  @observable selectedCategoryId: number = 0;
  @observable currentCategoriesList: ICategory[] = [];
  @observable prefersDarkMode: boolean = false;

  constructor() {
    makeObservable(this);
  }
  @action
  setLocaleSubCategories = (subCatgories: any) => {
    this.localeSubCategories = subCatgories;
  };
  @action
  setCurrentCategoriesList = (categoriesList: any) => {
    let sortedList = categoriesList.sort(function (a, b) {
      return a.id - b.id;
    });
    this.currentCategoriesList = toJS(sortedList);
  };

  @action
  setLocaleCategoriesList = (categoriesList: ICategory[]) => {
    this.localeCategoriesList = categoriesList;
  };

  @action
  setSelectedCategoryId = (categoryId: number) => {
    this.selectedCategoryId = categoryId;
  };

  @action
  checkForSystemDefault = () => {
    this.prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  };

  @action
  updateCurrentCategoriesListByLocale = (language: string) => {
    let arr: ICategory[] = [];
    this.localeCategoriesList.map((category: ICategory) => {
      if (language === "en" && category.locale === "en") {
        arr.push(category);
      } else if (language === "hy-AM" && category.locale === "hy-AM") {
        arr.push(category);
      }
      return arr;
    });
    this.setCurrentCategoriesList(arr);
  };

  @action
  setLocaleLanguage = async (language: string) => {
    this.updateCurrentCategoriesListByLocale(language);
    this.localeLanguage = language;
  };
}
export const menuStore = new MenuStore();

const MenuStoreContext = createContext(menuStore);

export const useMenuStore = () => useContext(MenuStoreContext);
