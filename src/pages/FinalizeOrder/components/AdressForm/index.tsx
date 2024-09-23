import { zodResolver } from "@hookform/resolvers/zod";
import { MapPinLine } from "@phosphor-icons/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { OrderContext } from "../../../../contexts/OrderContext";
import { UFs } from "../../../../http/UFs";
import { CardFormHeader } from "../../styles";
import {
  BaseInput,
  CepContainer,
  ErrorMessage,
  FieldContainer,
  FirstFormGridContainer,
  IconContainer,
  PaymentFormCard,
  PaymentFormContainer,
  SecondFormGridContainer,
  SelectInput,
} from "./styles";
import { useNavigate } from "react-router-dom";

const newAdressFormValidationSchema = z.object({
  cep: z.coerce.number().min(1, "Campo obrigatório."),
  rua: z.string().min(1, "Campo obrigatório."),
  numero: z.coerce.number({}).min(1, "Campo obrigatório."),
  bairro: z.string().min(1, "Campo obrigatório."),
  cidade: z.string().min(1, "Campo obrigatório."),
  complemento: z.string(),
  UF: z.string().min(1, "Campo obrigatório."),
});

export type IAdress = z.infer<typeof newAdressFormValidationSchema>;

export function AdressForm() {
  const navigate = useNavigate();

  const { setNewAdress, resetShoppingCart } = useContext(OrderContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAdress>({
    resolver: zodResolver(newAdressFormValidationSchema),
  });

  function handleSubmitOrder(event: IAdress) {
    setNewAdress(event);
    navigate("/delivered");
    resetShoppingCart();
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

      <PaymentFormContainer
        id="address-form"
        onSubmit={handleSubmit(handleSubmitOrder)}
      >
        <CepContainer>
          <BaseInput {...register("cep")} placeholder="CEP" />
          {errors?.cep?.message && (
            <ErrorMessage>{errors?.cep?.message}</ErrorMessage>
          )}
        </CepContainer>
        <FieldContainer>
          <BaseInput type="text" placeholder="Rua" {...register("rua")} />
          {errors?.rua?.message && (
            <ErrorMessage>{errors?.rua?.message}</ErrorMessage>
          )}
        </FieldContainer>

        <FirstFormGridContainer>
          <FieldContainer>
            <BaseInput
              type="text"
              placeholder="Número"
              {...register("numero")}
            />
            {errors?.numero?.message && (
              <ErrorMessage>{errors?.numero?.message}</ErrorMessage>
            )}
          </FieldContainer>
          <FieldContainer>
            <BaseInput
              type="text"
              placeholder="Complemento"
              {...register("complemento")}
            />
            {errors?.cep?.message && (
              <ErrorMessage>{errors?.cep?.message}</ErrorMessage>
            )}
          </FieldContainer>
        </FirstFormGridContainer>

        <SecondFormGridContainer>
          <FieldContainer>
            <BaseInput
              type="text"
              placeholder="Bairro"
              {...register("bairro")}
            />
            {errors?.bairro?.message && (
              <ErrorMessage>{errors?.bairro?.message}</ErrorMessage>
            )}
          </FieldContainer>
          <FieldContainer>
            <BaseInput
              type="text"
              placeholder="Cidade"
              {...register("cidade")}
            />
            {errors?.cidade?.message && (
              <ErrorMessage>{errors?.cidade?.message}</ErrorMessage>
            )}
          </FieldContainer>

          {/* <BaseInput type="text" placeholder="UF" /> */}
          <FieldContainer>
            <SelectInput id="uf-select" {...register("UF")}>
              <option value="" selected disabled>
                UF
              </option>
              {UFs.map((uf) => {
                return (
                  <option key={uf.code} value={uf.code}>
                    {uf.code}
                  </option>
                );
              })}
            </SelectInput>
            <ErrorMessage>
              {" "}
              {errors?.UF?.message && <span>{errors?.UF?.message}</span>}
            </ErrorMessage>
          </FieldContainer>
        </SecondFormGridContainer>
      </PaymentFormContainer>
    </PaymentFormCard>
  );
}
