import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router";
import { MenuContext } from "./contexts/MainContext";

function App() {
  

  return (
    
    <BrowserRouter>
    <MenuContext>
    <Router />
    </MenuContext>
    </BrowserRouter>
  )
}

export default App

