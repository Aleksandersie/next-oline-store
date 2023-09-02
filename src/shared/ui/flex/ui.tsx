import { forwardRef, HTMLAttributes } from "react";

import { Element } from "./styles";

export type FlexProps = HTMLAttributes<HTMLDivElement> & {
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string | number;
  width?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
  background?: string;
  padding?: string | number;
  margin?: string | number;
};

export const Flex = forwardRef(({ children, ...other }: FlexProps, ref) => {
  return (
    <Element ref={ref as any} {...other}>
      {children}
    </Element>
  );
});
