import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router";
import { MenuContext } from "./contexts/MainContext";
import { theme } from "./themes";

function App() {
  

  return (
    
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <MenuContext>
    <Router />
    </MenuContext>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

