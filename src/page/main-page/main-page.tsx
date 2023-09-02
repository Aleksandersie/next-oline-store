"use client";

import { useProductList } from "@/features/product/list";
import { Wrapper } from "@/page/main-page/styles";
import { Flex } from "@/shared/ui/flex";
import { Loader } from "@/shared/ui/loader";
import { ProductCard } from "@/widgets/product-card/ui";

const MainPage = () => {
  const { data, isLoading } = useProductList();

  return (
    <div>
      <Loader loading={isLoading} />
      <Wrapper>
        <Flex wrap={"wrap"} gap={"sizes-5"} justify={"center"}>
          {data?.products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </Flex>
      </Wrapper>
    </div>
  );
};
export default MainPage;
