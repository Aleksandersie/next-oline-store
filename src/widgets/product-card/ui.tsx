"use client";
import Image from "next/image";
import { FC } from "react";

import { Product } from "@/entities/product/model";
import {
  CardWrapper,
  ProductDesc,
  ProductHeader,
  ProductImage,
} from "@/widgets/product-card/styles";

type ProductCardProps = {
  product: Product;
};

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { product } = props;
  return (
    <CardWrapper>
      <ProductHeader>{product.title}</ProductHeader>
      <ProductDesc>{product.description}</ProductDesc>
      <ProductImage
        src={product.thumbnail}
        alt={"alt"}
        width={265}
        height={210}
      />
      <ProductDesc>
        {product.brand}/{product.category}
      </ProductDesc>
    </CardWrapper>
  );
};
