import { createContext, ReactNode, useState } from "react";
import { IOrderContext } from "../interfaces/IOrderContext";
import { ICoffee } from "../interfaces/ICoffee";
import { PaymentMethodType } from "../interfaces/IFinishedOrder";
import { IAdress } from "../pages/FinalizeOrder/components/AdressForm";

export const OrderContext = createContext({} as IOrderContext);
interface IOrderContextProviderProps {
  children: ReactNode;
}

export function OrderContextProvider({ children }: IOrderContextProviderProps) {
  const [newCoffee, setNewCoffee] = useState<ICoffee | null>(null);
  const [shoppingCart, setNewShoppingCart] = useState<ICoffee[]>([]);
  const [newAdress, setNewAdress] = useState<IAdress>();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>('' as PaymentMethodType)

  function definePaymentMethod(newPaymentMethod: PaymentMethodType){
    setPaymentMethod(newPaymentMethod)
  }


  function resetShoppingCart(){
    setNewShoppingCart([] as ICoffee[])
  }

  function updateCoffeeQuantity(coffeeToUpdate: ICoffee, newQuantity: number) {
    setNewShoppingCart((state) => {
      state.map((coffee) => {
        if (coffee.id == coffeeToUpdate.id) coffee.quantity = newQuantity;
      });
      return [...state];
    });
  }
  function defineNewCoffee(coffee: ICoffee) {
    setNewCoffee(coffee);
  }
  function defineNewShoppingCart(coffee: ICoffee) {
    setNewShoppingCart((state) => [...state, coffee]);
  }
  function removeCoffeeFromShoppingCart(coffeeToRemove: ICoffee){
    setNewShoppingCart((state)=>{
      const filter= state.filter((coffee)=>{
        return coffee.id != coffeeToRemove.id
      })
      return [...filter]
    })
  }

  return (
    <OrderContext.Provider
      value={{
        newCoffee,
        shoppingCart,
        newAdress,
        paymentMethod,
        defineNewCoffee,
        defineNewShoppingCart,
        updateCoffeeQuantity,
        setNewAdress,
        definePaymentMethod,
        resetShoppingCart,
        removeCoffeeFromShoppingCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
