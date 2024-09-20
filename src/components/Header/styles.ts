import styled from "styled-components";

export const HeaderContainerContent = styled.div`
  display: flex;
  justify-content: space-between;

  div{
    display: flex;
    gap: 0.75rem;
    align-items: center;

    span{
      font-size: 0.875rem;
      color: ${props => props.theme["purple-500"]};
      background: ${props => props.theme["purple-100"]};
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      padding: 0 0.5rem;
    }
    
  }
  nav{
    background: ${props => props.theme["yellow-100"]};
    border-radius: 8px;
    height: 38px;
    width: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    a{
     color: ${props => props.theme["yellow-700"]};
   
    }
   
  }
`
export const HeaderContainer = styled.header`
  background: ${props => props.theme["gray-100"]};
  position: fixed;
  top: 0;
  padding: 1em 0;
  width: 100%;
  max-width: 90rem;
  
`
