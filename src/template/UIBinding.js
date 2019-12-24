console.log('UI:');
var UIBinding = (function () {
    function UIBinding() {
        document.getElementById("srchBut").addEventListener("click", function () {
            console.log('klk');
            var arg = {};
            DeventBus.dispatch('uFetch', arg);
        });
        DeventBus.addListener('onUData', UIBinding.onData);
    }
    UIBinding.onData = function (data) {
        console.log('onData');
    };
    return UIBinding;
}());
depp.require(['DOM', 'eventBus'], function () {
    console.log('UI loaded');
    new UIBinding();
});
function testE1() {
    depp.require('eventBus', function () {
        console.log('tst:');
        DeventBus.dispatch('dataB4', 'oh hi b4');
        DeventBus.addListener('dataB4', function (data) {
            console.log('b4', data);
        });
        DeventBus.addListener('dataAf', function (data) {
            console.log('af:', data);
        });
        DeventBus.dispatch('dataAf', 'oh hi af');
    });
}
