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
    throw new Error("Error fetching product");
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching product");
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
  limit = 30,
  skip = 0,
}: getAllProductsFilters = {}) => {
  let url = `${process.env.URL_API}/products`;

  if (search) {
    url += `/search?q=${search}`;
  }
  if (categories) {
    url += `/category/${categories}`;
  }
  if (search) {
    url += `&limit=${limit}&skip=${skip}`;
  } else {
    url += `?limit=${limit}&skip=${skip}`;
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
