
import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.7/eventFlux/EventFlux.js'

class TestEB {

    constructor() {
        new EventFlux(); // load it
        QUnit.test("eB test", function (assert_) {
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
        dispatchEvent(new CustomEvent('cB4', { detail: 'XXX oh hi cB4' })) // this never happens so..

        defEventBus.addListener('dataB4', function (data) {
            console.log('b4', data);
            TestEB.assert.ok(true, "Passed!");
            TestEB.done1();
        })
        addEventListener('cB4', function(evt){
            console.log(evt.detail)
        })

    } //()

    static testAf() {
        // data after
        defEventBus.addListener('dataAf', function (data) {
            console.log('af:', data);
            TestEB.assert.ok(true, "Passed!");
            TestEB.done2();
        })
        addEventListener('Af', function(evt){
            console.log(evt.detail)
        })

        // can use regular dispatch, or a delayed dispatch
        defEventBus.dispatchAsync('dataAf', 'oh hi af')
        dispatchEvent(new CustomEvent('Af', { detail: 'oh hi Af' }))

    } //()
} //class

new TestEB()