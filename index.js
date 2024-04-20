class Product {
  constructor() {
    this.productObject = {};
  }

  addProduct(name, price, availability) {
    if (this.productObject[name] === undefined) {
      this.productObject[name] = { name, price, isAvailable: availability };
      console.log("Product added in store");
    } else {
      console.log("Product already exists in store");
    }
  }

  getProduct() {
    return this.productObject;
  }
}




class Cart extends Product {
  constructor(productList) {
    super()
    this.cartProducts = {};
    this.productList = productList; 
  }

  addToCart(name) {
    const product = this.productList.getProduct()[name]; 

    if (product && product.isAvailable) {
      if (this.cartProducts[name]) {
        this.cartProducts[name].quantity++;
      } else {
        this.cartProducts[name] = { ...product, quantity: 1 };
      }
      console.log(`${name} added to cart.`);
    } else {
      console.log(`Sorry, ${name} is not available.`);
    }
  }
  displayCart(){
    return this.cartProducts
  }


}



let products = new Product();
products.addProduct("shirt", 100, true);
products.addProduct("paint", 200, true);

let cart = new Cart(products); 

cart.addToCart("shirt");
cart.addToCart("paint");
cart.addToCart("brush"); 

console.log(cart.displayCart());


  

  class UpdateCart extends Cart {
    constructor() {
      super();
    }
  
    updateQuantity(name, newQuantity) {
      if (this.cartProducts[name]) {
        this.cartProducts[name].quantity = newQuantity;
        console.log(`Quantity of ${name} updated to ${newQuantity}.`);
      } else {
        console.log(`${name} is not in the cart.`);
      }
    }
  }
  

  class DeleteFromCart extends Cart {
    constructor() {
      super();
    }
  
    deleteProduct(name) {
      if (this.cartProducts[name]) {
        delete this.cartProducts[name];
        console.log(`${name} removed from cart.`);
      } else {
        console.log(`${name} is not in the cart.`);
      }
    }
  }


  
  class CalculateTotalBill extends Cart {
    constructor() {
      super();
    }
  
    calculate() {
      let total = 0;
      for (const itemName in this.cartProducts) {
        const item = this.cartProducts[itemName];
        total += item.price * item.quantity;
      }
      return total;
    }
  }
  



const  bill=new CalculateTotalBill()
console.log(bill.calculate())
  


