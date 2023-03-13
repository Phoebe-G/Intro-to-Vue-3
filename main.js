const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeItem(id) {
            this.cart = this.cart.filter( (_id) => id != id)
        }
    },
    computed: {
        inCart(id) {
            return this.cart.indexOf(id) >= 0
        }
    }
})
