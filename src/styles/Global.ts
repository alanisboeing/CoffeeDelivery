import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
    body{
    background-color: ${props => props.theme['gray-100']};
    color: ${props => props.theme['gray-700']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2{
    font-family: "Baloo 2", sans-serif;
  }

  :focus{
    outline: 0;
    // box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
  }
  button{
    cursor: pointer;
  }
`
