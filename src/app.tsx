import './app.css';

import Clock, { ClockActions } from "./components/Clock";
import Globe from './components/Globe/globe';
import ThemeSwitch, { getTheme } from './components/ThemeSwitch';

import { version } from './common/config';

const App = () => {

    const handleClockAction = () => {

        if ($(root).find('.btn span').html().toLocaleLowerCase() === 'start') {

            clockActions.start();

            $(root).find('.btn').html(`
                <i class="btn__icon fa-solid fa-stop"></i>
                <span>Stop</span>
            `);
        }
        else {
            clockActions.stop();

            $(root).find('.btn').html(`
                <i class="btn__icon fa-solid fa-play"></i>
                <span>Start</span>
            `);
        }
    };

    const theme = getTheme();
    theme ? $('body').attr('theme', theme) : null;

    const clockActions = ClockActions.create();

    const root = (
        <div class="c-app">
            <div class='c-container'>
                {Globe()}
                {Clock('Hello World', clockActions)}
                <button class="btn mb-20">
                    <i class="btn__icon fa-solid fa-stop"></i>
                    <span>Stop</span>
                </button>
                {ThemeSwitch()}
            </div>
            <div class="c-footer">
                <p>v{version}</p>
            </div>
        </div>
    );

    $(root).find('.btn').on('click', handleClockAction);

    return root;
}

export default App;