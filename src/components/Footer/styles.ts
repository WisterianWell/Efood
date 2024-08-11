import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.beige};

  .container {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    width: 480px;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    color: ${colors.salmon};
  }
`

export const SocialLinks = styled.div`
  display: block;
  margin-top: 32px;
  margin-bottom: 80px;

  img {
    margin-right: 8px;
  }
`
