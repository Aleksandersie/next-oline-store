import styled from "@emotion/styled";

import { FlexProps } from "@/shared/ui/flex/ui";

export const Element = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  gap: ${({ gap }) => `var(--${gap})`};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "auto"};
  max-height: ${({ maxHeight }) => maxHeight || "auto"};
  background: ${({ background }) => background || "none"};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;
