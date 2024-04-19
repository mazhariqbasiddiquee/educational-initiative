class Product {

    constructor(){
      this.productObject={}
      this.cartProduct={}

    }

    // Add product to store 
    addProduct(name,price,availability){
      if(this.productObject[name]==undefined){
        this.productObject[name]={name:name,price,isAvailable:availability}
        console.log("Product added in store")
      }
      else{
        console.log("Product already exist in store")
      }
    }


    // Get product from store
    getProduct(){
      return this.productObject
    }



    // Add product to cart
    addtoCart(name){
      if(this.productObject[name]!=undefined&&this.productObject[name].isAvailable){
        this.cartProduct[name]={name:name,quantity:1,price:this.productObject[name].price}

        return "product is added"

      }
      else{
        return "product is not available"
      }
    }

    // View product of the cart
    getCart(){
        return this.cartProduct
    }


    // Update product of the cart
   updateCart(name,quantity){
    if(this.cartProduct[name]!=undefined){
        this.cartProduct[name].quantity=quantity

        return "Quantity updated"
    }
    else{
        return "Product is not in cart"
    }
   }

//    Remove product from the cart
   removeFromCart(name){
    if(this.cartProduct[name]!=undefined){
       delete  this.cartProduct[name]

        return "Quantity deleted"
    }
    else{
        return "Product is not in cart"
    }

   }


//    Calculate total bill
   totalBill(){
       if(Object.keys(this.cartProduct).length>0){
        let sum=0
        for( let a in this.cartProduct){
            sum+=this.cartProduct[a].price*this.cartProduct[a].quantity
        }

        return `Your total bill is ${sum}`
       }
         else{
        return "Cart is empty"
        }
   }




  }




  let products=new Product()

  products.addProduct("shirt",100,true)
  products.addProduct("Paint",200,true)
  products.addtoCart("Paint")
  products.updateCart("Paint",2)
  console.log(products.getProduct())
  console.log(products.getCart())
console.log(products.totalBill())


