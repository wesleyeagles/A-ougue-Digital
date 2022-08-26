import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { ApolloProvider } from '@apollo/client'
import ReactDOM from 'react-dom/client'
import App from './App'
import { client } from './lib/apollo'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>
)
