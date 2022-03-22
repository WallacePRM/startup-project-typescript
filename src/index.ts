import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import '../public/themes/dark.css';
import '../public/css/variables.css';
import '../public/css/helpers.css';
import '../public/css/utils.css';
import './index.css';
import './jsx/jsx-factory';
import App from './app';

const app = App();

const root = $('#root');
root.append(app as HTMLElement);