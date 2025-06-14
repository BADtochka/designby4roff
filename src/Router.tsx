import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Button from './components/Button';
import { createCaseRoutes } from './utils/createCaseRoutes';
const Wrapper = lazy(() => import('@/modules/Wrapper'));
const CaseOutlet = lazy(() => import('@/modules/CaseOutlet'));

export default function Router() {
  const caseRoutes = createCaseRoutes();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Wrapper />}>
          <Route path='/cases' element={<CaseOutlet />}>
            {caseRoutes.map((route) => (
              <Route key={route.name} path={route.name} element={route.element} />
            ))}
          </Route>
        </Route>
        <Route
          path='yuy'
          element={
            <Button animation iconLeft='behance' iconRight='en'>
              Testik
            </Button>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
