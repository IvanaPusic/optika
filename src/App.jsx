import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import { Action, Catalog, Home, Outlet, SightCheck } from './pages';
function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='katalog' element={<Catalog />} />
        <Route path='action' element={<Action />} />
        <Route path='outlet' element={<Outlet />} />
        <Route path='provjera-vida' element={<SightCheck />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
