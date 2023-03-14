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
        cartHasItem(id) {
            this.cart.indexOf(id) >= 0
        }
    }
  })
  