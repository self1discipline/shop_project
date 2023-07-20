<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="test">
        <button @click="settest()"></button>
    </div>
</template>
<script>

export default {
    data() {
        return {
            loginName: "123123",
            password: "312321"
        }
    },
    methods: {
        settest: function () {

            // this.$axios.get('/article'+this.loginName+'/'+this.password, {

            //         headers: {
            //             "Access-Control-Allow-Origin": "*",  //加上这个请求头之后可以正常访问
            //          }
            //          },)
            //         .then(function (response) {
            //             alert(response.data);
            //         })
            //         .catch(function (error) {
            //             console.log(error);
            //         });
            this.$axios.post("/article", {

                loginName: this.loginName,
                password: this.password

            }).then(function (response) {
                alert(response.data);
            })
                .catch(function (error) {
                    console.log(error);
                });

        }
    }
}
</script>
<style></style>