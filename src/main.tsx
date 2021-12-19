import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr';
import request from '@utils/Request';
import App from './App';
import './index.css';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

// Create a root.
const root = ReactDOM.createRoot(container);

const WrapApp = (
  <SWRConfig
    value={{
      fetcher: async (resource, init) =>
        request(resource, init).then((res) => res.json()),
    }}
  >
    <App />
  </SWRConfig>
);
root.render(WrapApp);
