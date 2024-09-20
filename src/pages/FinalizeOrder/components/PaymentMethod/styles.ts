import styled from "styled-components";

export const PaymentMethodCard = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${props => props.theme["gray-200"]};
  border-radius: 8px;
  padding: 2.5rem;
`
export const IconContainer = styled.div`
  color: ${props=> props.theme["purple-500"]};

  margin-left: -0.4rem;
`
export const PaymentButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  text-align: center;
  background: ${props => props.theme["gray-400"]};
  color: ${props => props.theme["gray-700"]};
  border-radius: 8px;
  padding: 1rem;
  border: none;
  width: 33.33%;
  text-transform: uppercase;
  font-size: 0.75rem;

  &&:hover{
    background: ${props => props.theme["gray-500"]};
    color: ${props => props.theme["gray-700"]};
    transition: 0.5s;
  }

  &&:active{
    background: ${props => props.theme["purple-100"]};

    /* transition: 0.5s; */
    border: 0.5px solid ${props=> props.theme["purple-700"]};
  }

`
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  
`