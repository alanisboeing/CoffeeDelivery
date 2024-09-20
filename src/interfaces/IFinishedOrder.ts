import { IAdress } from "./IAdress";

export interface IFinishedOrder {
  adress: IAdress,
  paymentMethod: PaymentMethodType
}

export enum PaymentMethodType {
  CREDIT = "Crédito",
  DEBIT = "Débito",
  CASH = "Dinheiro"
}

