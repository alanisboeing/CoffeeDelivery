import { ICoffee } from "../interfaces/ICoffee"
import ExpressoTradicinal from "../assets/ExpressoTradicional.svg"
import Americano from "../assets/Americano.svg"
import Cremoso from "../assets/Cremoso.svg"
import Gelado from "../assets/Gelado.svg"
import Leite from "../assets/Leite.svg"
import Latte from "../assets/Latte.svg"
import Capuccino from "../assets/Cappuccino.svg"
import Macchiato from "../assets/Macchiato.svg"
import Mocaccino from "../assets/Moccaccino.svg"
import Chocolate from "../assets/Chocolate.svg"
import Cubano from "../assets/Cubano.svg"
import Havaiano from "../assets/Havai.svg"
import Arabe from "../assets/Arabe.svg"
import Irlandes from "../assets/Irlandes.svg"

const COFFEE_FEATURES = {
  tradicional: "Tradicional",
  ice: "Gelado",
  milk: "Com Leite",
  special: "Especial",
  alcohol: "Alcoólico"
} as const

export const COFFEE_ITEMS: ICoffee[] = [
  {
    id: "1",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90,
    feature: [COFFEE_FEATURES.tradicional],
    img: ExpressoTradicinal,
    quantity: 0,
  },
  {
    id: "2",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.90,
    feature: [COFFEE_FEATURES.tradicional],
    img: Americano,
    quantity: 0,
  },
  {
    id: "3",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.90,
    feature: [COFFEE_FEATURES.tradicional],
    img: Cremoso,
    quantity: 0,
  },
  {
    id: "4",
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.90,
    feature: [COFFEE_FEATURES.tradicional, COFFEE_FEATURES.ice],
    img: Gelado,
    quantity: 0,
  },
  {
    id: "5",
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.90,
    feature: [COFFEE_FEATURES.tradicional, COFFEE_FEATURES.milk],
    img: Leite,
    quantity: 0,
  },
  {
    id: "6",
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.90,
    feature: [COFFEE_FEATURES.tradicional, COFFEE_FEATURES.milk],
    img: Latte,
    quantity: 0,
  },
  {
    id: "7",
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.90,
    feature: [COFFEE_FEATURES.tradicional, COFFEE_FEATURES.milk],
    img: Capuccino,
    quantity: 0,
  },
  {
    id: "8",
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.90,
    feature: [COFFEE_FEATURES.tradicional, COFFEE_FEATURES.milk],
    img: Macchiato,
    quantity: 0,
  },
  {
    id: "9",
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.90,
    feature: [COFFEE_FEATURES.tradicional, COFFEE_FEATURES.milk],
    img: Mocaccino,
    quantity: 0,
  },
  {
    id: "10",
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.90,
    feature: [COFFEE_FEATURES.special, COFFEE_FEATURES.milk],
    img: Chocolate,
    quantity: 0,
  },
  {
    id: "11",
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.90,
    feature: [COFFEE_FEATURES.special, COFFEE_FEATURES.alcohol, COFFEE_FEATURES.ice],
    img: Cubano,
    quantity: 0,
  },
  {
    id: "12",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.90,
    feature: [COFFEE_FEATURES.special],
    img: Havaiano,
    quantity: 0,
  },
  {
    id: "13",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.90,
    feature: [COFFEE_FEATURES.special],
    img: Arabe,
    quantity: 0,
  },
  {
    id: "14",
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.90,
    feature: [COFFEE_FEATURES.special, COFFEE_FEATURES.alcohol],
    img: Irlandes,
    quantity: 0,
  },
]