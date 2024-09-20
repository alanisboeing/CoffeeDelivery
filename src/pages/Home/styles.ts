import styled from "styled-components";

export const HomeContainer = styled.main`
  gap: 4em;

  h2{
    font-size: 2rem;
    font-weight: 800;
    color: ${props => props.theme["gray-800"]};
  }
`