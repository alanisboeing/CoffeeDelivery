import styled from "styled-components"
import { IColorIcon, ICON_COLORS } from "../../../../interfaces/IColorIcon"


export const CoffeeBannerContainer = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 6rem 0;

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
    weight: 800;
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

export const IconContainer = styled.span<IColorIcon>`
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    color: ${props => props.theme.white};
    background: ${props => props.theme[ICON_COLORS[props.iconcolor]]};
    display: flex;
    justify-content: center;
    align-items: center;

`
