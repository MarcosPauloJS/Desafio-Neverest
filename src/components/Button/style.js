import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${props => props.theme.colors.primaryColor};
  color: ${props => props.theme.colors.text};
  border: none;
  border-radius: 5px;
  font-size: ${props => props.theme.fonts.big}px;
  font-weight: bold;
  padding: ${props => props.theme.sizes[2]}px ${props => props.theme.sizes[8]}px;
  cursor: pointer;
  transition: 0.4s linear;
  text-shadow: 0.05px 0.5px 5px #000;

  &:hover {
    background-color: ${props => props.theme.colors.contrastColor};
  }
`
