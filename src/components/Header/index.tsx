import {
  Badge,
  HeaderContainer,
  HeaderContainerContent,
  ShoppingCartLink,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import { NavLink } from "react-router-dom";
import { MapPin } from "@phosphor-icons/react";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export function Header() {
  const { shoppingCart } = useContext(OrderContext);
  return (
    <HeaderContainer>
      <HeaderContainerContent>
        <nav>
          <NavLink to="/" title="Página inicial">
            <img src={Logo} />
          </NavLink>
        </nav>

        <div>
          <span>
            <MapPin size={22} weight="fill" />
            Criciúma, SC
          </span>
          <div>
            <nav>
              <NavLink to="/finalizeOrder" title="Finalizar pedido">
                <ShoppingCartLink>
                  <ShoppingCart weight="fill" size={22} />
                </ShoppingCartLink>
              </NavLink>
            </nav>
            <Badge>{shoppingCart.length}</Badge>
          </div>
        </div>
      </HeaderContainerContent>
    </HeaderContainer>
  );
}
