import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)<{ isLocal: boolean }>`
  display: flex;
  ${(props) => (props.isLocal ? "position: relative;" : "position: fixed;")}
  inset: 0;
  align-items: center;
  justify-content: center;
  //background: var(--colors-whiteA12);
  z-index: 10;
`;
