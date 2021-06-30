import Image from 'next/image'
import logo from './../../../public/img/logo.png'
import { Title, Container } from './style.js'

export default function Brand() {
  return (
   <Container>
   <Image src={ logo } alt="logo da empresa" width={130} height={90}></Image>
   <Title>Neverrest</Title>
    </Container>
  )
}