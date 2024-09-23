import { AdressForm } from "./components/AdressForm";
import { PaymentMethod } from "./components/PaymentMethod";
import { TotalOrder } from "./components/TotalOrder";
import { FinalizeOrderContainer, PaymentContainer } from "./styles";
// import { FormProvider } from "react-hook-form";
// import {newAdressForm} from "./components/TotalOrder"


export function FinalizeOrder() {
  return (
    <FinalizeOrderContainer>
      <PaymentContainer>
        <h2>Complete seu pedido</h2>
        {/* <FormProvider {...newAdressForm}>
            <AdressForm />
          </FormProvider> */}
          <AdressForm/>
        <PaymentMethod />
      </PaymentContainer>

      <div>
        <h2>Cafés Selecionados</h2>
        <TotalOrder/>
      </div>
    </FinalizeOrderContainer>
  );
}
