import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${props => props.theme.fonts.bigger}px;
  font-weight: bold;
  margin: 0;
  margin-left: ${props => props.theme.sizes[5]}px;
  padding-top:  ${props => props.theme.sizes[5]}px;
  letter-spacing: 3px;
`

export const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-wrap: wrap;
 margin:  ${props => props.theme.sizes[5]}px;
`