import { BrowserRouter, Route, Routes } from 'react-router';
import Wrapper from './modules/Wrapper';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Wrapper />} />
      </Routes>
    </BrowserRouter>
  );
}
