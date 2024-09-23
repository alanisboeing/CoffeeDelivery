import {
  DeliveredList,
  DeliveredOrderContainer,
  TextContainer,
} from "./styles";
import Motoboy from "../../assets/Motoboy.svg";
import { IconContainer } from "../../styles/Icon";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export function DeliveredOrder() {

  const {newAdress, paymentMethod} = useContext(OrderContext)
  return (
    <DeliveredOrderContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>
      <TextContainer>
        <DeliveredList>
          <li>
            <IconContainer iconcolor="purple">
              <MapPin size={16} weight="fill" />
            </IconContainer>
            <div>
              <p>
                Entrega em <strong>{newAdress?.rua}, {newAdress?.numero}</strong>
              </p>
              <p>{newAdress?.bairro} - {newAdress?.cidade}, {newAdress?.UF}</p>
            </div>
          </li>
          <li>
            <IconContainer iconcolor="yellow">
              <Timer size={16} weight="fill" />
            </IconContainer>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </li>
          <li>
            <IconContainer iconcolor="darkYellow">
              <CurrencyDollar size={16} />
            </IconContainer>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{paymentMethod}</strong>
            </div>
          </li>
        </DeliveredList>
        <img
          src={Motoboy}
          alt="Ilustração de um homem em uma moto carregando seu pedido."
        />
      </TextContainer>
    </DeliveredOrderContainer>
  );
}
