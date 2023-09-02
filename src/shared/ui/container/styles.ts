import styled from "@emotion/styled";

const mediaMixin = (
  maxWidth: number,
  maxWidthUnit: string,
  padding: string,
  margin = "auto",
) => `
  @media (min-width: ${maxWidth}${maxWidthUnit}) {
    padding: 0 ${padding};
    max-width: ${maxWidth}px; 
    margin: ${margin};
  }
`;

export const Element = styled.div`
  padding: 0 18px;

  ${mediaMixin(34.375, "rem", "12px")}
  ${mediaMixin(450.98, "px", "12px")}
  ${mediaMixin(485.98, "px", "12px")}
  ${mediaMixin(520.98, "px", "12px")}
  ${mediaMixin(555.98, "px", "18px")}
  ${mediaMixin(590.98, "px", "18px")}
  ${mediaMixin(625.98, "px", "18px")}
  ${mediaMixin(660.98, "px", "18px")}
  ${mediaMixin(695.98, "px", "18px")}
  ${mediaMixin(730.98, "px", "18px")}
  ${mediaMixin(765.98, "px", "18px")}
  ${mediaMixin(800.98, "px", "18px")}
  ${mediaMixin(835.98, "px", "18px")}
  ${mediaMixin(870.98, "px", "18px")}
  ${mediaMixin(905.98, "px", "18px")}
  ${mediaMixin(940.98, "px", "18px")}
  ${mediaMixin(975.98, "px", "18px")}
  ${mediaMixin(1010.98, "px", "18px")}
  ${mediaMixin(1045.98, "px", "18px")}
  ${mediaMixin(1080.98, "px", "18px")}
  ${mediaMixin(1150.98, "px", "18px")}
  ${mediaMixin(1185.98, "px", "18px")}
  ${mediaMixin(1220.98, "px", "18px")}
  ${mediaMixin(1255.98, "px", "18px")}
  ${mediaMixin(1290.98, "px", "18px")}
  ${mediaMixin(1325.98, "px", "18px")}
  ${mediaMixin(1360.98, "px", "18px")}
  ${mediaMixin(1395.98, "px", "18px")}
  ${mediaMixin(1430.98, "px", "18px")}
  ${mediaMixin(1465.98, "px", "18px")}
  ${mediaMixin(1500.98, "px", "18px")}
  ${mediaMixin(1535.98, "px", "18px")}
  ${mediaMixin(1570.98, "px", "18px")}
  ${mediaMixin(1605.98, "px", "18px")}
`;
