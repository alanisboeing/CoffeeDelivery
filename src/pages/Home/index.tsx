import { CoffeeBanner } from "./components/CoffeeBanner";
import { CoffeeList } from "./components/CoffeeList";
import { HomeContainer } from "./styles";

export function Home(){
  return(
    <HomeContainer>
      <CoffeeBanner/>
      <h2>Nossos Cafés</h2>
      <CoffeeList/>
    </HomeContainer>
  )
}