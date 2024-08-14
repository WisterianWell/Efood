import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.beige};
  color: ${colors.salmon};
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  cursor: pointer;
  width: 100%;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.salmon};
  color: ${colors.beige};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  cursor: pointer;
  text-decoration: none;
`
