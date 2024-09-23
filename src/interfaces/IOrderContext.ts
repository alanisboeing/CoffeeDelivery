import { Dispatch, SetStateAction } from "react";
import { IAdress } from "../pages/FinalizeOrder/components/AdressForm";
import { ICoffee } from "./ICoffee";
import { PaymentMethodType } from "./IFinishedOrder";

export interface IOrderContext {
  newCoffee: ICoffee | null,
  shoppingCart: ICoffee[],
  defineNewCoffee: (coffee: ICoffee)=> void,
  resetShoppingCart: ()=>void,
  defineNewShoppingCart: (coffee: ICoffee)=> void,
  updateCoffeeQuantity: (coffee: ICoffee, newQuantity: number)=> void,
  newAdress?: IAdress,
  paymentMethod: PaymentMethodType,
  definePaymentMethod: (paymentMethod: PaymentMethodType )=> void,
  removeCoffeeFromShoppingCart: (coffeeToRemove: ICoffee)=> void
  setNewAdress: Dispatch<SetStateAction<IAdress | undefined>>
}