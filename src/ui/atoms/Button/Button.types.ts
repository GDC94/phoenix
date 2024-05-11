export type VariantProps = "primary" | "outlined" | "contained";

export type SizeProps = "small" | "medium" | "large" | "xlarge";

export type ColorProps = "primary" | "secondary" | "danger" | "warning" | "success" | "default";

export interface ButtonProps {
  variant?: VariantProps;
  size: SizeProps;
  color: ColorProps;
  children: React.ReactNode;
  onClick?: () => void;
  label?: string;
  textColor?: string;
}
