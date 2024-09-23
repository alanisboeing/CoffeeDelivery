import styled from "styled-components";
import { IColorIcon, ICON_COLORS } from "../interfaces/IColorIcon";

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
