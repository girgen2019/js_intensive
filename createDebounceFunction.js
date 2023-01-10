function createDebounceFunction(callback, delay){
    let callCount = 0;

    function callCallback(currentCall){
        if(currentCall === callCount){
            callback();
        }
    }

    return () => {
        callCount++;
        const currentCall = callCount;
        setTimeout(() => callCallback(currentCall), delay);
    }
}

const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 1000);
debounceLog100();
setTimeout(debounceLog100, 200);
setTimeout(debounceLog100, 400);