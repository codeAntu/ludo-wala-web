import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
