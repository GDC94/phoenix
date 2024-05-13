import {z} from "zod";

const VariantProps = z.enum(["primary", "secondary", "success", "danger"]);

export type VariantProps = z.infer<typeof VariantProps>;

const ColorProps = z.enum(["primary", "default", "success", "warning", "danger", "secondary"]);

export type ColorProps = z.infer<typeof ColorProps>;

const TextColorProps = z.enum(["dark", "primary", "white", "success", "warning", "danger", "secondary"]);

export type TextColorProps = z.infer<typeof TextColorProps>;

const FontWeightProps = z.enum(["extraBold", "bold", "semiBold", "regular", "light"]);

export type FontWeightProps = z.infer<typeof FontWeightProps>;

const ButtonPropsSchema = z.object({
  variant: z.optional(VariantProps),
  color: z.optional(ColorProps),
  onClick: z.optional(z.function()),
  label: z.optional(z.string()),
  textColor: TextColorProps,
  weight: z.optional(FontWeightProps)
});

export type ButtonProps = z.infer<typeof ButtonPropsSchema>;
