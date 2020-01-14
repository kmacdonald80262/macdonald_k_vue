import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

const myVM = (() => {

    let vue_vm = new Vue({
        data: {
            message: "Hello from Vue!",
            collection: [
                { name: "Kathleen", role: "Middle Sister"},
                { name: "Erin", role: "Twin Sister" },
                { name: "Maggie", role: "Older Sister" }
            ]
        },
        methods: {
            logClicked() {
                console.log("clicked on an element");
            }
        }
    }).$mount("#app");

})();