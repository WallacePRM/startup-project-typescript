import styles from './index.module.css';

const Clock = (title?: string, actions?: ClockActions) => {

    const stopClock = () => {

        const intervalId = parseInt(getIntervalId());

        clearInterval(intervalId);
    };

    const startClock = () => {

        const intervalId = setInterval(() => {
            clock.querySelector('[name="time"]').innerHTML = new Date().toLocaleString();
        }, 1000);

        saveIntervalId(intervalId);
    };

    const saveIntervalId = (intervalId: NodeJS.Timer) => {
        localStorage.setItem('intervalId', intervalId.toString());
    };

    const getIntervalId = () => {
        return localStorage.getItem('intervalId');
    };

    const clock = (
        <div id="clock" class={styles['c-clock'] + ' mt-20 mb-20'}>
            {title ? <h1 class="text-center">{title}</h1> : null}
            <span name="time" class={styles['c-clock__time']}>{new Date().toLocaleString()}</span>
        </div>
    ) as HTMLElement;

    if (actions) {
        actions.stop = stopClock;
        actions.start = startClock;
    }

    startClock();

    return clock;
};

export class ClockActions {
    public static create() {
        return new ClockActions();
    }
    public start?: () => void = undefined;
    public stop?: () => void = undefined;
};

export default Clock;