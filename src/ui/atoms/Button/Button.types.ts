import {ButtonHTMLAttributes} from "react";
import {z} from "zod";

const VariantProps = z.enum(["solid", "faded", "bordered", "light", "flat", "ghost"]);

export type VariantProps = z.infer<typeof VariantProps>;

const ColorProps = z.enum(["red", "blue", "green", "yellow", "purple"]);

export type ColorProps = z.infer<typeof ColorProps>;

const FontWeightProps = z.enum(["extraBold", "bold", "semiBold", "regular", "light"]);

export type FontWeightProps = z.infer<typeof FontWeightProps>;

export const VARIANTS = {
  SOLID: "solid",
  FADED: "faded",
  BORDERED: "bordered",
  LIGHT: "light",
  FLAT: "flat",
  GHOST: "ghost"
};
const ButtonPropsSchema = z.object({
  variant: z.optional(VariantProps),
  color: ColorProps,
  onClick: z.optional(z.function()),
  label: z.optional(z.string()),
  weight: z.optional(FontWeightProps),
  disabled: z.optional(z.boolean())
});

export type ButtonProps = z.infer<typeof ButtonPropsSchema> & ButtonHTMLAttributes<HTMLButtonElement>;
