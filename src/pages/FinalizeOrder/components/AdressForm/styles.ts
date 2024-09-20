import styled from "styled-components";

export const PaymentFormCard = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${props => props.theme["gray-200"]};
  border-radius: 8px;
  padding: 2.5rem;
`

export const BaseInput = styled.input`
  background: ${props => props.theme["gray-300"]};
  color: ${props => props.theme["gray-700"]};
  border-radius: 8px;
  border: 0.5px solid ${props => props.theme["gray-400"]};
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;

`

export const SelectInput = styled.select`
  background: ${props => props.theme["gray-300"]};
  color: ${props => props.theme["gray-700"]};
  border-radius: 8px;
  border: 0.5px solid ${props => props.theme["gray-400"]};
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-family: "Roboto", sans-serif;
  -webkit-appearance: none; 
  appearance: none;
`

export const IconContainer = styled.div`
  color: ${props => props.theme["yellow-500"]};
    margin-top: -0.1rem;
`
export const SecondFormGridContainer = styled.div`
    display: grid;
    grid-template-columns: 20% 65% 10%;
    gap: 2.5%;
`

export const FirstFormGridContainer = styled.div`
    display: grid;
    grid-template-columns: 20% 77.5%;
    gap: 2.5%;
`

export const PaymentFormContainer = styled.form`
  display: flex;
  flex-direction: column;

 
`
export const CepContainer = styled.div`
    display: flex;
    width: 20%;
`