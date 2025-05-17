"use server";
import { resApi, ProductType, getAllProductsFilters } from "@/types/types";

export const getByCategoryWithLimit = async (
  category: string,
  limit: number
) => {
  const url = `${process.env.URL_API}/products/category/${category}?limit=${limit}`;
  try {
    const res = await fetch(url);
    if (res.status == 200) {
      const data: resApi = await res.json();
      return data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getProductById = async (id: number) => {
  const url = `${process.env.URL_API}/products/${id}`;
  try {
    const res = await fetch(url);
    if (res.status == 200) {
      const data: ProductType = await res.json();
      return data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAllCategories = async (): Promise<string[] | null> => {
  const url = `${process.env.URL_API}/products/category-list`;
  try {
    const res = await fetch(url);
    if (res.status == 200) {
      const data = await res.json();
      return data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAllProducts = async ({
  search,
  categories,
  page,
}: getAllProductsFilters = {}) => {
  const currentePage = page ? page : 1;
  const limit = 30;
  let url = `${process.env.URL_API}/products`;

  if (search) {
    url += `/search?q=${search}`;
  }
  if (categories) {
    url += `/category/${categories}`;
  }
  if (search) {
    url += `&limit=${limit}&skip=${(currentePage - 1) * limit}`;
  } else {
    url += `?limit=${limit}&skip=${(currentePage - 1) * limit}`;
  }

  try {
    const res = await fetch(url);
    if (res.status == 200) {
      const data: resApi = await res.json();
      console.log(url);

      return data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
