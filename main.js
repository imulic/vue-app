const app = Vue.createApp({
    data() {
        return {
            product: {
                    cart: 0,
                    name: 'SSC Tuatara',
                    selectedVariant: 0,
                    quantity: 1,
                    inStock: true,
                    variants: [{
                        id: 0, 
                        color: 'white',
                        image: './assets/images/whitessc.jpg',
                        price: 1000000,
                    }, {
                        id: 1,
                        color: 'black',
                        price: 1200000,
                        image: './assets/images/blackssc.jpg'
                    }],
                    details: [{
                            detail: 'Engine: 5.9L V8'
                        },
                        {
                            detail: 'Horsepower: 1350 hp'
                        },
                        {
                            detail: 'Top speed: 532 km/h'
                        }]
                }
        };
    },
    methods: {
        addToCart() {
            this.product.cart += 1;
        },
        updateImage(index) {
            console.log(index)
            this.product.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            console.log(this.product.selectedVariant);
            return this.product.variants[this.product.selectedVariant].image;
        },
        price() {
            var price = this.product.variants[this.product.selectedVariant].price;
            return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        }
    }
});