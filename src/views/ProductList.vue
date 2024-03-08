<template>
    <div>
        <table border="1">
          <tr>
            <thead>
              <td>Product Name</td>
              <td>Price</td>
              <td>Desc</td>
            </thead>
            <tbody>
              <tr v-for="product in productList" :key="product.id">
                <td> {{ product.name }}</td>
                <td> {{ product.price }}</td>
                <td> {{ product.description }}</td>
              </tr>
            </tbody>
          </tr>
        </table>
    </div>
  </template>
  
  <script>
  import Product from "@/apis/Product";
  export default {
      name: "AddProduct",
      data () {
          return {
              productList: '',
              errors: {}
          }
      },
      created () {
        Product.all().then((res) => {
                    this.productList = res.data.data
                  }).catch((error) => {
                    alert('Something Went Wrong!!') 
                      if (error) {
                          console.log(error)
                      } 
                  });
      },
  }
  </script>
  
  <style>
  
  </style>