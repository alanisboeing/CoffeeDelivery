import styled from "styled-components"

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
`


export const CoffeeCardContainer = styled.div`
  background: ${props => props.theme["gray-200"]};
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  width: 16rem;
  height: 19.3rem;
  text-align: center;
  padding: 1rem;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;

`
export const CoffeeImage = styled.div`
  margin: -2rem 0;
`
export const CoffeeDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;

  gap: 0.5rem;


  h3{
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props=> props.theme["gray-800"]};
    font-family: "Baloo 2", sans-serif;
  }

`

export const CoffeeFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input{
    width: 5rem;
  }
  p{
    font-size: 1.5rem;
    font-weight: 800;
    color: ${props=> props.theme["gray-700"]};
    font-family: "Baloo 2", sans-serif;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`

export const CoffeeFeatureTagContainer = styled.span`
  color: ${props => props.theme["yellow-700"]};
  background: ${props => props.theme["yellow-100"]};
  text-transform: uppercase;
  font-size: 0.625rem;
  font-weight: 700;
  border-radius: 8px;
  padding: 0.3rem 0.5rem;
`

export const TagsContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  gap: 0.3rem;
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
export const CartButtonContainer = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props=> props.theme["purple-500"]};
  color: ${props=> props.theme["gray-200"]};
  border: none;
  border-radius: 8px;

  &&:hover{
    background-color: ${props=> props.theme["purple-700"]};
    transition: 0.5s;
  }
`