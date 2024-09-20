import styled from "styled-components";

export const FinalizeOrderContainer = styled.main`
  display: grid;
  grid-template-columns: 60% 30%;
  margin: 5rem 0;
  gap: 10%;
`
export const CardFormHeader = styled.div`
  display: grid;
  grid-template-columns: 5% 95%;
  
  
  span{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 0.5rem;
    
  }
  h4{
     color: ${props=> props.theme["gray-800"]};
     font-size: 16px;
     font-weight: 400;
  }

`
export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;

`
