import {FontWeightProps} from "../ui/atoms/Button/Button.types";

const getWeight = (weight: FontWeightProps): number => {
  const weightsOptions: Record<FontWeightProps, number> = {
    extraBold: 800,
    bold: 500,
    semiBold: 400,
    regular: 300,
    light: 200
  };

  return weightsOptions[weight];
};

export default getWeight;
