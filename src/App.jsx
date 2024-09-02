import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer.jsx";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { Provider } from "./contexts/ItemsContext.jsx";
import { Cart } from "./components/Cart.jsx";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailsContainer />} />
          <Route path="/Cart" element={<Cart />} />

          <Route path="*" element={404} />
          {/* Usar el componente NotFound */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
