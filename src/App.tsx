import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routePath from '@utils/RouterPath';
import NotFound from '@pages/NotFound';
import PageLogin from '@pages/Login';
import BaseLayout from '@components/layout';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePath.login} element={<PageLogin />} />
        <Route path={routePath.dashboard.index} element={<BaseLayout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
