import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import App from './App.jsx'
import Home from './pages/Home'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1>Wrong page!</h1>,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <RouterProvider router={router} />
    </ChakraProvider>
)
