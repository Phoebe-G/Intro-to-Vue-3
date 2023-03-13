app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<ul>
    <li v-for="detail in details">{{ detail }}</li>
    </ul>`,
    computed: {
        details() {
            return this.details
        }
    }

})
//<product-display :premium="premium" :details="['50% cotton', '30% wool', '20% polyester']"></product-display>