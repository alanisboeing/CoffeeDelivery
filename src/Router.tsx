import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { FinalizeOrder } from "./pages/FinalizeOrder";
import { DeliveredOrder } from "./pages/DeliveredOrder";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/finalizeOrder" element={<FinalizeOrder/>} />
        <Route path="/delivered" element={<DeliveredOrder/>} />
      </Route>
    </Routes>
  );
}
