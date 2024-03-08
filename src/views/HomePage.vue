<template>
    <div>
        <nav>
            <router-link to="/add-product">Add Product</router-link> |
            <router-link to="/product-list">Product List</router-link>
        </nav>
    </div>
  </template>
  
  <script>
  export default {
      name: "HomepPge",
      data () {
          return {
              form: {
                  email: '',
                  password: ''
              },
              errors: {}
          }
      }
  }
  </script>
  
  <style>
  
  </style>