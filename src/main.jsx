import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { NextUIProvider } from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ChakraProvider>
           <NextUIProvider>
    <App />
    </NextUIProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
