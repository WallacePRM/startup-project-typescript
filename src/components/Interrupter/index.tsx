
const Interrupter = (onSwitch: Function, isChecked?: boolean) => {

    const handleSwitch = () => {

        onSwitch();
    };

    const interrupter = (
        <input checked={isChecked ? 'checked': null }  class="checkbox checkbox--switch" type="checkbox"/>
    );

    $(interrupter).on('change', handleSwitch);

    return interrupter;
};

export default Interrupter;