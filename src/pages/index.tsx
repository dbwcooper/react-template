import { Routes, Route } from 'react-router-dom';
import routePath from '@utils/RouterPath';

import PageLogin from './Login';
import PageRegister from './Register';
import PageDashboard from './Dashboard';
import PageDaily from './Daily';
import PageDailyInfo from './DailyInfo';

export default function Routers() {
  return (
    <Routes>
      <Route path={routePath.login} element={<PageLogin />} />
      <Route path={routePath.register} element={<PageRegister />} />
      <Route path={routePath.dashboard} element={<PageDashboard />} />
      <Route path={routePath.daily} element={<PageDaily />} />
      <Route path={routePath.dailyInfo} element={<PageDailyInfo />} />
      <Route path='*' element={<PageLogin />} />
    </Routes>
  );
}
