import styled from "@emotion/styled";
import Image from "next/image";
export const CardWrapper = styled.div`
  border: 1px solid var(--colors-blackA8);
  border-radius: var(--sizes-2);
  width: 300px;
  height: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  &:hover {
    cursor: pointer;
    box-shadow: var(--colors-shadowLight);
  }
`;

export const ProductImage = styled(Image)`
  border-radius: var(--sizes-2);
  object-fit: cover;
`;

export const ProductHeader = styled.h4`
  font-size: 21px;
  color: var(--colors-blackA12);
`;
export const ProductDesc = styled.p`
  color: var(--colors-blackA11);
`;
