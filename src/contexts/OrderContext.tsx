import { createContext, ReactNode, useState } from "react";
import { IOrderContext } from "../interfaces/IOrderContext";
import { ICoffee } from "../interfaces/ICoffee";
import { IAdress } from "../interfaces/IAdress";
import { IFinishedOrder, PaymentMethodType } from "../interfaces/IFinishedOrder";

export const OrderContext = createContext({} as IOrderContext);
interface IOrderContextProviderProps {
  children: ReactNode;
}

export function OrderContextProvider({ children }: IOrderContextProviderProps) {
  const [newCoffee, setNewCoffee] = useState<ICoffee | null>(null);
  const [shoppingCart, setNewShoppingCart] = useState<ICoffee[]>([]);
  const [newAdress, setNewAdress] = useState<IAdress>({} as IAdress);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>('' as PaymentMethodType)

  function definePaymentMethod(newPaymentMethod: PaymentMethodType){
    setPaymentMethod(newPaymentMethod)
  }

  function defineNewAdress(
    inputValue: string | number | null,
    adressType: keyof IAdress
  ) {
    setNewAdress((state) => {
      
      state[adressType] = inputValue;
      return state;
    });
    
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
        defineNewAdress,
        definePaymentMethod,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
