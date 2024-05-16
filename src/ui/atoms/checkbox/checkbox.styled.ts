import styled from "@emotion/styled";
import * as Checkbox from "@radix-ui/react-checkbox";

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: "blue";
`;

export const Label = styled.label`
  padding-left: 15;
  color: white;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxRoot = styled(Checkbox.Root)`
  all: "unset";
  background-color: "white";
  width: 25;
  height: 25;
  border-radius: 4;
  display: "flex";
  align-items: "center";
  justify-content: "center";
`;
