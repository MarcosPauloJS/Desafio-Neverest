import Image from 'next/image'
import { useRouter } from 'next/router'

import spotlightImage from '../../../public/img/spotlight_image.png'
import { Title, Spotlight, Paragraph, WrapperImage } from './style.js'
import Brand from '../Brand'
import WrapperSite from '../WrapperSite'
import Button from '../Button'

export default function Enter() {
  const router = useRouter()

  const redirect = (url) => {
    router.push(url);
  }
  
  return (
    <>
      <WrapperSite>
        <Brand />
        <WrapperImage>
          <Image src={spotlightImage} alt="imagem de destaque"/>
        </WrapperImage>

        <Title style={{textAlign: 'center'}}>
            Veja aqui  os <Spotlight>melhores</Spotlight> jogadores  de  CS GO
        </Title>

        <Paragraph style={{textAlign: 'center'}}>
          Acesse como:
        </Paragraph>

        <div style={{display: 'flex', flexDirection: 'column', width: 250, margin: 'auto'}}>
          <Button onClick={()=> redirect('/home')}>
            Atleta
          </Button>
          <br />

          <Button onClick={()=> redirect('/adm')}>
            Acessar como adiministrador
          </Button>
        </div>
      </WrapperSite>
    </>  
  )
}