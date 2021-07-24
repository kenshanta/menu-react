export interface IProduct {
  name: string;
  id: number;
  created_at: string;
  description?: string;
  category: ICategory;
  prices: IPrices;
  published_at: string;
  sub_category: number;
  updated_at: string;
}

export interface ICategory {
  id: number;
  created_at: string;
  name: string;
  published_at: string;
  products: IProduct[];
  updated_at: string;
  sub_categories: ISubCategory[];
}

export interface ISubCategory {
  id: number;
  created_at: string;
  name: string;
  published_at: string;
  updated_at: string;
  category: number; //categoryId
  products: IProduct[];
}

export interface IPrices {
  unit: number;
  lot?: number;
}

export interface IRootProductResponse {
  productsList: IProduct[];
}
