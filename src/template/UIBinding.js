console.log('UI:');
class UIBinding {
    constructor() {
        document.getElementById("srchBut").addEventListener("click", function () {
            console.log('klk');
            let arg = {};
            defEventBus.dispatch('uFetch', arg);
        });
        defEventBus.addListener('onUData', UIBinding.onData);
    } //()
    static onData(data) {
        console.log('onData');
    } //()
}
depp.require(['DOM', 'defEventBus'], function () {
    console.log('UI loaded');
    new UIBinding();
});
// event buss eliminates race conditions
function testE1() {
    depp.require('defEventBus', function () {
        console.log('tst:');
        // data before
        defEventBus.dispatch('dataB4', 'oh hi b4');
        defEventBus.addListener('dataB4', function (data) {
            console.log('b4', data);
        });
        // data after
        defEventBus.addListener('dataAf', function (data) {
            console.log('af:', data);
        });
        defEventBus.dispatch('dataAf', 'oh hi af');
    });
} //()
