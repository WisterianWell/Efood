import { HeaderBar, HeaderContainer, LinkHeader, Title } from './styles'

import efoodLogo from '../../assets/images/logo.svg'

export type Props = {
  page: 'home' | 'profile'
}

const Header = ({ page }: Props) => (
  <HeaderContainer page={page}>
    <div className="container">
      <HeaderBar className="container">
        <LinkHeader to="/" page={page}>
          Restaurantes
        </LinkHeader>
        <img src={efoodLogo} alt="Efood" />
        <a>0 produto(s) no carrinho</a>
      </HeaderBar>
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </HeaderContainer>
)

export default Header
