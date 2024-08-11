import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  width: 472px;
  border: 1px solid ${colors.salmon};
  background-color: ${colors.white};
  position: relative;
`

export const Tags = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
`

export const Tag = styled.div`
  background-color: ${colors.salmon};
  color: ${colors.beige};
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
  margin-left: 8px;
`

export const CardInfos = styled.div`
  padding: 8px;
  padding-bottom: 12px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;

  ${Title} {
    margin-right: 8px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  margin: 16px 0;
  line-height: 22px;
`

export const Button = styled.a`
  background-color: ${colors.salmon};
  color: ${colors.beige};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  cursor: pointer;
`
