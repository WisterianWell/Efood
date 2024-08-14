import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    content: '';
    z-index: 0;
  }

  .container {
    color: ${colors.white};
    font-size: 32px;
    z-index: 1;
    position: relative;
    line-height: 36px;
  }
`

export const Subtitle = styled.h3`
  font-weight: 100;
  padding-top: 24px;
`

export const Title = styled.h2`
  font-weight: 900;
  padding-top: 156px;
  padding-bottom: 32px;
`
