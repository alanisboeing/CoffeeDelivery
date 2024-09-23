import styled from "styled-components"

export const CoffeeBannerContainer = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 6rem 0;

  @media (max-width: 800px) {
    flex-direction: column;
}

`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${props => props.theme["gray-900"]};
  h1{
    font-size: 3rem;
    font-weight: 800;
    margin: 0;
      line-height: 1.2;

  }
  p{
    font-size: 1.25rem;
  }
`
export const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;

  ul{
    list-style: none;
  }
  li{
    padding-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`
