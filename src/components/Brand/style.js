import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${props => props.theme.fonts.bigger}px;
  font-weight: bold;
  margin: 0;
  margin-left: ${props => props.theme.sizes[5]}px;
  padding-top:  ${props => props.theme.sizes[5]}px;
`
export const Container = styled.h1`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-wrap: wrap;
`