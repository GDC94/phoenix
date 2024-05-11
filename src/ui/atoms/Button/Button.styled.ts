import styled from "@emotion/styled";

interface LabelProps {
  textColor?: React.CSSProperties["color"];
}

export const ButtonContainer = styled.button`
  background-color: ${({theme}) => theme.colors.primary};
  border: 0;
  border-radius: ${({theme}) => theme.size[0.5]};
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background-color: ${({theme}) => theme.colors.primary};
  }
`;

export const Label = styled.span<LabelProps>`
  color: ${({textColor, theme}) => (textColor !== null ? textColor : theme.colors.gray400)};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;
`;
