import './App.css';
import Cart from './components/Cart';
import Dasboard from './components/Dasboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import RouteLayout from './components/RouteLayout';

const App = () => {
  const routeDefinations = createRoutesFromElements(
    <Route path='/' element={<RouteLayout />}>
      <Route index element={<Dasboard />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  )
  const router = createBrowserRouter(routeDefinations)
  return (
    <>
      <RouterProvider router={router} />


    </>
  );
}

export default App;
