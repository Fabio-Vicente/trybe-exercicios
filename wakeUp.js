const wakeUp = () => 'Acordando!!';
const breakFast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

doingThings(wakeUp);

function doingThings (thing) {
    return thing()
}
