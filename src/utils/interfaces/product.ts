export interface IProduct {
    name:  string;
    id: number;
    created_at: string;
    description?: string;
    categories: ICategories[];
    prices: IPrices;
    published_at: string;
    subCategory?: string;
    updated_at: string;
  }
  
  export interface ICategories {
    id: number;
    created_at: string;
    name: string;
    published_at: string;
    updated_at: string;
  }

  export interface IPrices {
      primary: number;
      secondary?: number
  }
