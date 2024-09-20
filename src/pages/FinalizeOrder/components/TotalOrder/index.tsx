import {
  ConfirmOrder,
  ConfirmOrderButton,
  IconContainer,
  InputNumberContainer,
  OrderedCoffeeContainer,
  OrderedCoffeGrid,
  RemoveButton,
  TotalOrderContainer,
} from "./styles";
import { Trash } from "@phosphor-icons/react";
import { useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";
import { ICoffee } from "../../../../interfaces/ICoffee";
import { useNavigate } from "react-router-dom";

export function TotalOrder() {
  const { shoppingCart, updateCoffeeQuantity, paymentMethod, newAdress } = useContext(OrderContext);
  const navigate = useNavigate()

  function CountTotalItemsValue() {
    let count = 0;
    shoppingCart.forEach((coffee) => (count += coffee.price * coffee.quantity));
    return count;
  }

  function HandleConfirmOrder(){
    navigate('/delivered')
    console.table(newAdress)
    console.log(paymentMethod)

  }


  return (
    <ConfirmOrder>
      {shoppingCart.map((coffee: ICoffee) => {
        return (
          <OrderedCoffeeContainer key={coffee.id}>
            <img
              src={coffee.img}
              alt="Imagem de uma xícara de café Capuccino."
            />

            <OrderedCoffeGrid>
              <p>{coffee.name}</p>
              <div>
                <InputNumberContainer value={coffee.quantity} type="number"  onChange={(event)=>updateCoffeeQuantity(coffee, Number(event?.target.value) )}/>

                <RemoveButton>
                  <IconContainer>
                    <Trash size={14} />
                  </IconContainer>

                  <span>Remover</span>
                </RemoveButton>
              </div>
            </OrderedCoffeGrid>
            <p>
              <span>R$ </span>
              {new Intl.NumberFormat("id", {
                minimumFractionDigits: 2,
              }).format(coffee.price * coffee.quantity)}
            </p>
          </OrderedCoffeeContainer>
        );
      })}
      <TotalOrderContainer>
        <ConfirmOrder>
          <span>
            <p>Total de itens</p>
            <p>
              {new Intl.NumberFormat("id", {
                minimumFractionDigits: 2,
              }).format(CountTotalItemsValue())}
            </p>
          </span>
          <span>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </span>
          <span>
            <h2>Total</h2>
            <h2>
              {new Intl.NumberFormat("id", {
                minimumFractionDigits: 2,
              }).format(CountTotalItemsValue() + 3.5)}
            </h2>
          </span>
          <ConfirmOrderButton onClick={HandleConfirmOrder}>Confirmar pedido</ConfirmOrderButton>
        </ConfirmOrder>
      </TotalOrderContainer>
    </ConfirmOrder>
  );
}
