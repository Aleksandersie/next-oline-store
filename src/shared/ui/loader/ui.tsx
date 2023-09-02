"use client";
import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { Oval } from "react-loader-spinner";

import { Wrapper } from "./styles";

type LoaderProps = {
  loading: boolean;
  isLocal?: boolean;
};

export const Loader: FC<LoaderProps> = ({ loading, isLocal }) => {
  return (
    <AnimatePresence>
      {loading && (
        <Wrapper
          isLocal={isLocal ?? false}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{
            opacity: 0,
            transition: { duration: 1, delay: 0.5 },
          }}
        >
          <Oval
            height={50}
            width={50}
            color="var(--colors-blackA12)"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="var(--colors-blackA6)"
            strokeWidth={4}
            strokeWidthSecondary={4}
          />
        </Wrapper>
      )}
    </AnimatePresence>
  );
};
