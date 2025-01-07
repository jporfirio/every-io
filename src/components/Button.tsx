import styled from "styled-components";

type StyledProps = {
  $variant: keyof typeof propToBgColor;
  $padding: keyof typeof propsToPadding;
};

const StyledButton = styled.button<StyledProps>`
  color: white;
  font-size: 1.5rem;
  border-radius: 0.5em;
  border: none;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => disabled && "30%"};

  background-color: ${({ $variant }) => propToBgColor[$variant]};
  padding: ${({ $padding }) => propsToPadding[$padding]};
`;

const propToBgColor = {
  primary: "#0066FF",
  danger: "#C20B0B",
  success: "#218D1F",
};

const propsToPadding = {
  compact: ".25em .5em",
  default: ".25em 1em",
};

type Props = {
  children: React.ReactNode;
  variant?: StyledProps["$variant"];
  padding?: StyledProps["$padding"];
} & React.ComponentProps<"button">;

export default function Button({
  children,
  variant = "primary",
  padding = "default",
  ...props
}: Props) {
  return (
    <StyledButton $variant={variant} $padding={padding} {...props}>
      {children}
    </StyledButton>
  );
}
