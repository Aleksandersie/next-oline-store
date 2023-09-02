"use client";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { ProductList } from "@/entities/product";
import { Product } from "@/entities/product/model";
import { api } from "@/shared/api/api.instance";
import { BasicResponse } from "@/shared/api/types";

type Response = BasicResponse<Product[]>;

export const useProductList = () => {
  return useQuery<Response>({
    queryKey: ["product-list"],
    queryFn: () => {
      return api.get("/products").then((r: AxiosResponse<Response>) => r.data);
    },
  });
};
