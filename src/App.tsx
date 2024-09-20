import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes/DefaultTheme";
import { GlobalStyle } from "./styles/Global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { OrderContextProvider } from "./contexts/OrderContext";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <OrderContextProvider>
          <Router />
        </OrderContextProvider>

        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
