import { ShoppingCartSimple } from "@phosphor-icons/react";
import {
  CartButtonContainer,
  CoffeeCardContainer,
  CoffeeDescriptionContainer,
  CoffeeFeatureTagContainer,
  CoffeeFooter,
  CoffeeImage,
  CoffeeListContainer,
  InputNumberContainer,
  PriceContainer,
  TagsContainer,
} from "./styles";
import { COFFEE_ITEMS } from "../../../../http/CoffeeItems";
import { ICoffee } from "../../../../interfaces/ICoffee";
import { useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";

export function CoffeeList() {
  const { defineNewCoffee, defineNewShoppingCart, newCoffee, updateCoffeeQuantity } =
    useContext(OrderContext);

  function HandleAddNewCoffee(coffee: ICoffee, quantity: number) {
    coffee.quantity = quantity;
    defineNewCoffee(coffee);
    // updateCoffeeQuantity(coffee, quantity)
    
  }
  function HandleAddCoffeOnCart() {
    if (newCoffee) {
      defineNewShoppingCart(newCoffee);
    }
  }


  return (
    <CoffeeListContainer>
      {COFFEE_ITEMS.map((coffee) => {
        // GetCoffeeQuantity(coffee)
        return (
          <CoffeeCardContainer key={coffee.id}>
            <CoffeeImage>
              <img
                src={coffee.img}
                alt="Imagem de uma xícara de café Expresso Tradicional."
              />
            </CoffeeImage>

            <CoffeeDescriptionContainer>
              <TagsContainer>
                {coffee.feature.map((feature) => {
                  return (
                    <CoffeeFeatureTagContainer>
                      {feature}
                    </CoffeeFeatureTagContainer>
                  );
                })}
              </TagsContainer>

              <h3>{coffee.name}</h3>
              <p>{coffee.description}</p>
            </CoffeeDescriptionContainer>

            <CoffeeFooter>
              <PriceContainer>
                <span>R$</span>
                <p>
                  {new Intl.NumberFormat("id", {
                    minimumFractionDigits: 2,
                  }).format(coffee.price)}
                </p>
              </PriceContainer>

              <InputNumberContainer
                type="number"
                placeholder="0"
                
                onChange={(event) =>
                  HandleAddNewCoffee(coffee, Number(event.target.value))
                  
                }
              />

              <CartButtonContainer>
                <ShoppingCartSimple
                  onClick={HandleAddCoffeOnCart}
                  size={18}
                  weight="fill"
                />
              </CartButtonContainer>
            </CoffeeFooter>
          </CoffeeCardContainer>
        );
      })}
    </CoffeeListContainer>
  );
}
