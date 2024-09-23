import styled from "styled-components";

export const HeaderContainerContent = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  & > div{
    display: flex;
    gap: 0.75rem;
    align-self: flex-start;
    justify-content: flex-start;
   
    span{
      font-size: 0.875rem;
      color: ${props => props.theme["purple-500"]};
      background: ${props => props.theme["purple-100"]};
      height: 2.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      padding: 0 0.5rem;
    
    }
    
  }


`
export const ShoppingCartLink = styled.div`
    background: ${props => props.theme["yellow-100"]};
    border-radius: 8px;
    height: 2.375rem;
    width: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme["yellow-700"]};

`
export const HeaderContainer = styled.header`
  background: ${props => props.theme["gray-100"]};
  position: fixed;
  top: 0;
  padding: 1em 0;
  width: 100%;
  max-width: 90rem;
  
`
export const Badge = styled.div`
  width: 1.15rem;
  height: 1.15rem;
  background: ${props=> props.theme["yellow-700"]};
  color: ${props=> props.theme["gray-100"]};

  border-radius: 50%;
  font-size: 0.625rem;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  position: relative;
  top: -2.8rem;
  right: -1.8rem;
`
