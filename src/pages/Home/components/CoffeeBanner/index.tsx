import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { CoffeeBannerContainer, ListContainer, TextContainer, Title } from "./styles";

import CoffeeMainImage from "../../../../assets/CoffeeMainImage.svg";
import { IconContainer } from "../../../../styles/Icon";

export function CoffeeBanner() {
  return (
    <CoffeeBannerContainer>
      <TextContainer>
        <Title>
          <div>
            <h1>Encontre o café perfeito</h1>
            <h1>para qualquer hora do dia</h1>
          </div>
          <div>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a</p>
            <p>qualquer hora</p>
          </div>
        </Title>

        <ListContainer>
          <ul>
            <li>
              <IconContainer iconcolor="darkYellow">
                <ShoppingCart size={16} weight="fill" />
              </IconContainer>
              Compra simples e segura
            </li>
            <li>
              <IconContainer iconcolor="yellow">
                <Timer size={16} weight="fill" />
              </IconContainer>
              Entrega rápida e rastreada
            </li>
          </ul>
          <ul>
            <li>
              <IconContainer iconcolor="gray">
                <Package size={16} weight="fill" />
              </IconContainer>
              Embalagem mantém o café intacto
            </li>
            <li>
              <IconContainer iconcolor="purple">
                <Coffee size={16} weight="fill" />
              </IconContainer>
              O café chega fresquinho até você
            </li>
          </ul>
        </ListContainer>
      </TextContainer>
      <img src={CoffeeMainImage} />

    </CoffeeBannerContainer>
  );
}
