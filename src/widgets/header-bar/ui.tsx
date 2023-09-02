"use client";
import { Container } from "@/shared/ui/container";
import { Flex } from "@/shared/ui/flex";
import { HeaderBarBody, Logo } from "@/widgets/header-bar/styles";

export const HeaderBar = () => {
  return (
    <HeaderBarBody>
      <Container>
        <Flex justify={"flex-start"} align={"center"}>
          <Logo>Online-Store</Logo>
        </Flex>
      </Container>
    </HeaderBarBody>
  );
};
