import styled from "styled-components";

export const DeliveredOrderContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 5rem auto;

  h1{
    font-size: 2rem;
    font-weight: 800;
    color: ${props => props.theme["yellow-700"]};
  }
  h3{
    font-size: 1.25rem;
    font-weight: 400;
    color: ${props => props.theme["gray-800"]};
  }
`
export const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  gap: 10%;

 
`
export const DeliveredList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2.5rem;
  margin-top: 3rem;

  border: 2px solid  ${props=> props.theme["yellow-100"]};
  border-top-left-radius: 8px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 8px;

  li{
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.875rem;
    div{
      flex-direction: row;
      
    }

    p{
      flex-direction: row;
    }

  }
`