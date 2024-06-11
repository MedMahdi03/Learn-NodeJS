const EventEmitter = require("node:events");
class ProductShop extends EventEmitter {
    constructor() {
        super();
        this.orderNumber = 0;
    }

    order(pkgSize,delivery) {
        this.orderNumber++;
        this.emit("order", pkgSize, delivery);
    }
    showOrderNumber() {
        console.log(`Current order number: ${this.orderNumber}`)
    }
}
module.exports = ProductShop;