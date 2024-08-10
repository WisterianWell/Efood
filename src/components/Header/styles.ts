import styled from 'styled-components'
import headerBackground from '../../assets/images/fundo.png'
import { Props } from '.'

export const HeaderBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderContainer = styled.header<Props>`
  background-image: url(${headerBackground});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 24px;
  font-weight: 900;

  > .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px auto;
  }

  a {
    font-size: 18px;
    width: 200px;
    display: ${(props) => (props.page === 'home' ? 'none' : 'block')};
  }

  ${HeaderBar} {
    justify-content: ${(props) =>
      props.page === 'home' ? 'center' : 'space-between'};
  }
`

export const Title = styled.h1`
  margin-top: 140px;
  max-width: 540px;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
`
