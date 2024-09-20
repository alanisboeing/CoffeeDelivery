import { MapPinLine } from "@phosphor-icons/react";
import {
  BaseInput,
  CepContainer,
  FirstFormGridContainer,
  IconContainer,
  PaymentFormCard,
  PaymentFormContainer,
  SecondFormGridContainer,
  SelectInput,
} from "./styles";
import { CardFormHeader } from "../../styles";
import { UFs } from "../../../../http/UFs";
import { useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";
import { AdressType } from "../../../../interfaces/IAdress";


export function AdressForm() {

  const { newAdress, defineNewAdress } = useContext(OrderContext);

  function HandlNewAdress(){

  }
  return (
    <PaymentFormCard>
      <CardFormHeader>
        <IconContainer>
          <MapPinLine size={22} />
        </IconContainer>

        <span>
          <h4>Endereço de Entrega</h4>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </span>
      </CardFormHeader>

      <PaymentFormContainer>
        <CepContainer>
          <BaseInput type="number" value={newAdress.cep } placeholder="CEP" onChange={(event)=> defineNewAdress(event.target.value, AdressType.cep)} />
        </CepContainer>
        <BaseInput type="text" placeholder="Rua" value={newAdress.rua} onChange={(event)=> defineNewAdress(event.target.value, AdressType.rua)} />

        <FirstFormGridContainer>
          <BaseInput type="text" placeholder="Número" value={newAdress.numero} onChange={(event)=> defineNewAdress(event.target.value, AdressType.numero)} />
          <BaseInput type="text" placeholder="Complemento" value={newAdress.complemento} onChange={(event)=> defineNewAdress(event.target.value, AdressType.complemento)} />
        </FirstFormGridContainer>

        <SecondFormGridContainer>
          <BaseInput type="text" placeholder="Bairro" value={newAdress.bairro} onChange={(event)=> defineNewAdress(event.target.value, AdressType.bairro)} />
          <BaseInput type="text" placeholder="Cidade" value={newAdress.cidade} onChange={(event)=> defineNewAdress(event.target.value, AdressType.cidade)} />
          {/* <BaseInput type="text" placeholder="UF" /> */}
          <SelectInput name="UFs" id="uf-select" value={newAdress.UF} onChange={(event)=> defineNewAdress(event.target.value, AdressType.UF)}>
            <option value="" disabled defaultValue={""}>UF</option>
            {
              UFs.map(uf =>{
                return(
                  <option value={uf.code}>{uf.code}</option>
                )
              })
            }
          </SelectInput>
        </SecondFormGridContainer>
      </PaymentFormContainer>
    </PaymentFormCard>
  );
}
