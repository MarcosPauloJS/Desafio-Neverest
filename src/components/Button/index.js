import { ButtonStyled } from './style.js'

export default function Button({children, ...props}) {
  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  )
}