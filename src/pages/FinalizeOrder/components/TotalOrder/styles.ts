import styled from "styled-components";

export const TotalOrderContainer = styled.div`
  background: ${props => props.theme["gray-200"]};
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  width: 28rem;
  text-align: center;
  padding: 1rem;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 3rem;

`

export const OrderedCoffeeContainer = styled.div`
  img{
    width: 4rem;
    height: 4rem;
  }

  color: ${props => props.theme["gray-800"]};
  display: grid;
  grid-template-columns: 18% 44% 32%;
  gap: 3%;
  padding: 2rem 0;
  border-bottom: 0.5px solid ${props=> props.theme["gray-400"]};
  && > p{
    display: flex;
    justify-content: flex-end;
    font-weight: 700;
    color: ${props => props.theme["gray-700"]};

    span{
      margin-right: 0.2rem;
    }
  }

`

export const OrderedCoffeGrid = styled.div`
  text-align: left;
  p{
    padding-bottom: 1rem;
  }
  div{
    display: grid;
    grid-template-columns: 45% 50%;
    gap: 5%;

  }
`
export const ConfirmOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ConfirmOrderButton = styled.button`
  background: ${props => props.theme["yellow-500"]};
  border: none;
  border-radius: 8px;
  width: 100%;
  padding: 1rem;
  color: ${props => props.theme["gray-100"]};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
`
export const RemoveButton = styled.button`
  background: ${props => props.theme["gray-400"]};
  color: ${props => props.theme["gray-700"]};
  border-radius: 8px;
  padding: 0.5rem 0;
  border: none;
  text-transform: uppercase;
  font-size: 0.75rem;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  text-align: center;
  span{
    margin-left: 0.3rem;
  }

`
export const IconContainer = styled.div`
  color: ${props=> props.theme["purple-500"]};
`

export const InputNumberContainer = styled.input`
  background: ${props => props.theme["gray-400"]};
  color: ${props => props.theme["gray-700"]};
  border-radius: 8px;
  padding: 0.5rem 0;
  border: none;
  text-transform: uppercase;
  font-size: 0.75rem;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  text-align: center;
`

// export const InputNumber