import Interrupter from "../Interrupter";


export const getTheme = () => {
    return localStorage.getItem('theme');
};

const ThemeSwitch = () => {

    const saveTheme = (theme: string) => {
        localStorage.setItem('theme', theme);
    };

    const onSwitch = () => {

        let theme;
        if ($('[theme="light"]').length > 0) {

            $('body').attr('theme', 'dark');
            theme = 'dark';
        }
        else {
            $('body').attr('theme', 'light');
            theme = 'light';
        }

        saveTheme(theme);
    };

    const theme = getTheme();

    return (
        <div class="c-theme p-10">
            <i class="fa-regular fa-sun mr-10"></i>
            {Interrupter(onSwitch, theme === 'dark' ? true : false)}
            <i class="fa-regular fa-moon ml-10"></i>
        </div>
    );
};

export default ThemeSwitch;