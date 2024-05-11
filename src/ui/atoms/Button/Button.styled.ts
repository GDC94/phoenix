import styled from "styled-components";

interface LabelProps {
  textColor?: React.CSSProperties["color"];
}

export const ButtonContainer = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`;

export const Label = styled.span<LabelProps>`
  color: ${(props) => (props.textColor !== null ? props.textColor : props.theme.colors.text)};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;
`;
