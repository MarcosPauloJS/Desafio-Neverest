import Image from 'next/image'

import spotlightImage from '../../../public/img/spotlight_image.png'
import { Title, Container, Spotlight, Paragraph, WrapperImage, WrapperAdvertising } from './style.js'
import Brand from '../Brand'
import WrapperSite from '../WrapperSite'
import Button from '../Button'

export default function Header() {
  return (
    <WrapperSite>
      <Brand />
      <Container>
        <WrapperAdvertising>
          <Title>
              Veja aqui  os <Spotlight>melhores</Spotlight> jogadores  de  CS GO
          </Title>

          <Paragraph>
            Você também pode ser um deles, acesse nosso <Spotlight>hub</Spotlight> e desbroquei o seu pontencial
          </Paragraph>

          <div style={{with: '100%', textAlign: 'center', marginTop: '30px'}}>
            <Button >
              Acessar HUB
            </Button>
          </div>
          </WrapperAdvertising>

          <WrapperImage>
            <Image src={spotlightImage} alt="imagem de destaque"/>
          </WrapperImage>
      </Container>
    </WrapperSite>
  )
}