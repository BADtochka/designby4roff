import { BrowserRouter, Route, Routes } from 'react-router';
import CaseOutlet from './modules/CasePage';
import Wrapper from './modules/Wrapper';
import { createCaseRoutes } from './utils/createCaseRoutes';

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
      </Routes>
    </BrowserRouter>
  );
}
