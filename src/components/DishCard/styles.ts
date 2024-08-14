import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  width: 320px;
  background-color: ${colors.salmon};
  color: ${colors.beige};

  > div {
    padding: 8px;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-top: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 8px 0;
`
