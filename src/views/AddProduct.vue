<template>
    <div>
      <form @submit.prevent="saveUpdate" autocomplete="off"  enctype="multipart/form-data">
           <span>Select Category</span>
           <select class="form-control" v-model="form.category_id">
            <option>Choose Province</option>
            <option v-for="option in categoryList" :key="option.id">{{ option.name }}</option>
        </select>
          <br>
          <br>
           <span>Product name</span>
          <input type="text" name="name" v-model="form.name">
          <br>
          <br>
          <span>Product Descirption</span>
            <textarea name="description" v-model="form.description" cols="30" rows="10"></textarea>
          <br>
          <br>
          <span>Product Price</span>
          <input type="number" name="price" v-model="form.price">
          <br>
          <br>
          <span>Product Image</span>
          <input name="image" type="file"  v-on:change="onFileChange">
          <br>
          <br>
          <pre>{{ }}</pre>
          <input type="submit">
      </form>
    </div>
  </template>
  
  <script>
  import Product from "@/apis/Product";
  import Category from "@/apis/Category";
  export default {
      name: "AddProduct",
      data () {
          return {
              form: {
                  name: '',
                  category_id: '',
                  price: '',
                  description: '',
                  image: ''
              },
              categoryList: [],
              errors: {}
          }
      },
      created () {
        Category.all().then((res) => {
                    this.categoryList = res.data.data
                    console.log(res.data.data)
                  }).catch((error) => {
                    alert('Something Went Wrong!!') 
                      if (error) {
                          console.log(error)
                      } 
                  });
      },
      methods: {
        onFileChange (event) {
          const input = event.target
          if (input.files && input.files[0]) {
            const reader = new FileReader()
            reader.onload = (e) => {
                this.form.image = e.target.result
            }
            reader.readAsDataURL(input.files[0])
          } else {
            this.form.image = ''
          }
      },
      async saveUpdate () {
              Product.create(this.form).then((res) => {
                  this.setUser = res.data.user
                   alert('Product Creted Successfully')
                  this.$router.push('/product-list')
                  this.loading = false
                  }).catch((error) => {
                    alert('Something Went Wrong!!') 
                      if (error) {
                          console.log(error)
                      } 
                  });
          }
      }
  }
  </script>
  
  <style>
  
  </style>