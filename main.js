const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: true
        }
    },
    methods: {
        shipping() {
            return this.premium ? "Free" : 2.99
        }
    },
})
