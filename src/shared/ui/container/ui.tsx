"use client";
import { forwardRef, HTMLAttributes } from "react";

import { Element } from "./styles";

export const Container = forwardRef(
  ({ children }: HTMLAttributes<HTMLDivElement>, ref) => {
    return <Element ref={ref as any}>{children}</Element>;
  },
);
