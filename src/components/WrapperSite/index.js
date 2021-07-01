import { Container} from './style.js'

export default function WrapperSite(props) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}