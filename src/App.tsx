import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import Download from './screens/Download'
import CodeOfConduct from './screens/CodeOfConduct'
import Privacy from './screens/Privacy'
import Terms from './screens/Terms'
import Contact from './screens/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
  },
  {
    path: '/download',
    element: <Download />,
  },
  {
    path: '/code-of-conduct',
    element: <CodeOfConduct />,
  },
  {
    path: '/terms-and-conditions',
    element: <Terms />,
  },
  {
    path: '/privacy-policy',
    element: <Privacy />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
