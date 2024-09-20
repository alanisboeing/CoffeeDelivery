import { HeaderContainer, HeaderContainerContent } from "./styles";
import Logo from "../../assets/Logo.svg";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import { NavLink } from "react-router-dom";
import { MapPin } from "@phosphor-icons/react";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContainerContent>
        <img src={Logo} />
        <div>
          <span>
            <MapPin size={22} weight="fill" />
            Criciúma, SC
          </span>
          <nav>
            <NavLink to="/finalizeOrder" title="Finalizar pedido">
              <ShoppingCart weight="fill" size={22} />
            </NavLink>
          </nav>
        </div>
      </HeaderContainerContent>
    </HeaderContainer>
  );
}
