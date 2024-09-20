import { AdressForm } from "./components/AdressForm";
import { PaymentMethod } from "./components/PaymentMethod";
import { TotalOrder } from "./components/TotalOrder";
import { FinalizeOrderContainer, PaymentContainer } from "./styles";


export function FinalizeOrder() {
  return (
    <FinalizeOrderContainer>
      <PaymentContainer>
        <h2>Complete seu pedido</h2>
        <AdressForm />
        <PaymentMethod />
      </PaymentContainer>

      <div>
        <h2>Cafés Selecionados</h2>
        <TotalOrder/>
      </div>
    </FinalizeOrderContainer>
  );
}
