import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from '@apollo/client'
import { Router } from "./components/Router";
import { MenuContext } from "./contexts/MainContext";
import { theme } from "./themes";
import { client } from "./lib/apollo";

function App() {
  

  return (
    
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <MenuContext>
    <Router />
    </MenuContext>
    </BrowserRouter>
    </ThemeProvider>
    </ApolloProvider>
  )
}

export default App

