
var pro = toolBelt.loadQunit();
pro.then(function () {
    console.log('qunit loaded');
    QUnit.start();
    new TestEB();
}); //pro

import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.3/eventFlux/EventFlux.js'

class TestEB {

    constructor() {
        new EventFlux(); // load it
        QUnit.test("eb test", function (assert_) {
            TestEB.assert = assert_;
            TestEB.done1 = assert_.async();
            TestEB.done2 = assert_.async();
            console.log('start tests...');
            TestEB.testB4();
            TestEB.testAf();
        });
    } //()

    static testB4() {
        // data before
        defEventBus.dispatch('dataB4', 'oh hi b4');
        defEventBus.addListener('dataB4', function (data) {
            console.log('b4', data);
            TestEB.assert.ok(true, "Passed!");
            TestEB.done1();
        });
    } //()

    static testAf() {
        // data after
        defEventBus.addListener('dataAf', function (data) {
            console.log('af:', data);
            TestEB.assert.ok(true, "Passed!");
            TestEB.done2();
        });
        // can use regular dispatch, or a delayed dispatch
        defEventBus.dispatchAsync('dataAf', 'oh hi af');
    } //()
} //class
