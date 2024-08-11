import { createGlobalStyle } from 'styled-components'

export const colors = {
  salmon: '#E66767',
  lightBeige: '#FFF8F2',
  beige: '#FFEBD9',
  white: '#FFFFFF'
}

export const GLobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.lightBeige};
    color: ${colors.salmon};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
