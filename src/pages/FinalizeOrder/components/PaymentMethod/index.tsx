import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { CardFormHeader } from "../../styles";
import {
  ButtonsContainer,
  IconContainer,
  PaymentButton,
  PaymentMethodCard,
} from "./styles";
import { PaymentMethodType } from "../../../../interfaces/IFinishedOrder";
import { useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";

export function PaymentMethod() {

  const {definePaymentMethod} = useContext(OrderContext)

  function HandleNewPaymentMethod(method: PaymentMethodType, button: any){
    definePaymentMethod(method)
    const buttons = document.querySelectorAll('.paymentbutton');
    buttons.forEach((button: any)=>{
      button.style = 'none';
    })
    button.style = 
    'background:#EBE5F9; border: 0.5px solid #4B2995;transition: 0.5s;'
   

  }

  return (
    <PaymentMethodCard>
      <CardFormHeader>
        <IconContainer>
          <CurrencyDollar size={22} />
        </IconContainer>

        <span>
          <h4>Pagamento</h4>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </span>
      </CardFormHeader>
      <ButtonsContainer>
        <PaymentButton className="paymentbutton" id={PaymentMethodType.CREDIT} onClick={(event)=>HandleNewPaymentMethod(PaymentMethodType.CREDIT, event.target)}>
          <IconContainer>
            <CreditCard size={15} />
          </IconContainer>
          Cartão de crédito
        </PaymentButton>
        <PaymentButton className="paymentbutton" id={PaymentMethodType.DEBIT} onClick={(event)=>HandleNewPaymentMethod(PaymentMethodType.DEBIT, event.target)}>
          <IconContainer>
            <Bank size={15} />
          </IconContainer>
          Cartão de débito
        </PaymentButton>
        <PaymentButton className="paymentbutton" id={PaymentMethodType.CASH} onClick={(event)=>HandleNewPaymentMethod(PaymentMethodType.CASH, event.target)}>
          <IconContainer>
            <Money size={15} />
          </IconContainer>
          Dinheiro
        </PaymentButton>
      </ButtonsContainer>
    </PaymentMethodCard>
  );
}
