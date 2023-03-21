var app = new Vue({
    el: '#app',
    data: {
        products: [
            { name: 'Produs 1' },
            { name: 'Produs 2' },
            { name: 'Produs 3' },
            { name: 'Produs 4' }
        ],
        selectedProduct: '',
        price: '',
        quantity: '',
        productList: [],
        highlightIndex: -1
    },
    methods: {
        addProduct: function() {
            if (this.selectedProduct && this.price && this.quantity) {
                var total = this.price * this.quantity;
                this.productList.push({
                    name: this.selectedProduct,
                    price: this.price,
                    quantity: this.quantity,
                    totalPrice: total
                });
                this.selectedProduct = '';
                this.price = '';
                this.quantity = '';
            }
        },
        resetForm: function() {
            this.selectedProduct = '';
            this.price = '';
            this.quantity = '';
        },
        isHighlighted: function(index) {
            return this.highlightIndex === index;
        },
        highlightRow: function(index) {
            this.highlightIndex = index;
        },
        unhighlightRow: function() {
            this.highlightIndex = -1;
        }
    },
    computed: {
        total: function() {
            var sum = 0;
            for (var i = 0; i < this.productList.length; i++) {
                sum += this.productList[i].totalPrice;
            }
            return sum;
        }
    }
});
