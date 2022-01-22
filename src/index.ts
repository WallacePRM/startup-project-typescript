import './index.css';
import './jsx/jsx-factory';
import App from './app';

const app = App();

const root = document.body.querySelector('#root');
root.appendChild(app as HTMLElement);