import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles/reset.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

window.electron.ipcRenderer.once('app.init', (options: any) => {
  document.title = options.title;
});

window.electron.ipcRenderer.sendMessage('app.init');
