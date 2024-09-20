import { AdressType, IAdress } from "./IAdress";
import { ICoffee } from "./ICoffee";
import { IFinishedOrder, PaymentMethodType } from "./IFinishedOrder";

export interface IOrderContext {
  newCoffee: ICoffee | null,
  shoppingCart: ICoffee[],
  defineNewCoffee: (coffee: ICoffee)=> void,
  defineNewShoppingCart: (coffee: ICoffee)=> void,
  updateCoffeeQuantity: (coffee: ICoffee, newQuantity: number)=> void,
  newAdress: IAdress,
  defineNewAdress: (inputValue: string | number | null, adressType: keyof IAdress )=> void,
  paymentMethod: PaymentMethodType,
  definePaymentMethod: (paymentMethod: PaymentMethodType )=> void
}