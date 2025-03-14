import { BrowserRouter, Route, Routes } from 'react-router';
import Menu from './components/Menu';
import Wrapper from './modules/Wrapper';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Wrapper />
              <Menu />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
