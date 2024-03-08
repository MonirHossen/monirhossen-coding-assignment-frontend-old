<template>
  <div>
    <pre>{{ setUser }}</pre>
    <form @submit.prevent="LoginSubmit" @reset.prevent="reset" autocomplete="off"  enctype="multipart/form-data">
        <input type="email" name="email" v-model="form.email">
        <br>
        <br>
        <input type="password" name="password" v-model="form.password">
        <br>
        <br>
        <pre>{{ errors }}</pre>
        <input type="submit">
    </form>
  </div>
</template>

<script>
import User from "@/apis/User";
const baseUrl = 'http://127.0.0.1:8000/api/'
export default {
    name: "LogIn",
    data () {
        return {
            form: {
                email: '',
                password: ''
            },
            setUser: '',
            baseUrl: baseUrl,
            errors: {}
        }
    },
    methods: {
        async LoginSubmit () {
            User.login(this.form).then((res) => {
                this.setUser = res.data.user
                localStorage.setItem('token', res.data.token)
                this.$router.push('/homepage')
                this.loading = false
                }).catch((error) => { 
                    this.$router.push('/login')
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