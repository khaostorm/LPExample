import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export { App };
