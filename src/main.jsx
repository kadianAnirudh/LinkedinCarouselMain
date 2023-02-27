import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <BrowserRouter>
        <ChakraProvider>
           <NextUIProvider>
    <App />
    </NextUIProvider>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
