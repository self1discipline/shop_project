<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-multiple-template-root -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="app">
        <div class="top center">
            <div class="logo center">
                <a href="##" target="_blank"><img v-bind:src="logo" alt=""></a>
            </div>
        </div>
        <div class="form center">
            <div class="login">
                <div class="login_center">
                    <div class="login_top">
                        <div class="left fl">会员登录</div>
                        <div class="right fr">您还不是我们的会员？<a href="##" target="_self">立即注册</a></div>
                        <div class="clear"></div>
                        <div class="under-line center"></div>
                    </div>
                    <form ref="loginForm" @submit.prevent="handleSubmit" :model="loginform" action="##">
                        <div class="login_main center">
                            <div class="login-info">手机号:&nbsp;<input class="login-info-input" type="text" name="loginName"
                                    v-model="loginform.loginName" placeholder="请输入你的手机号" />
                            </div>
                            <div class="login-info">密&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;<input class="login-info-input"
                                    v-model="loginform.password" type="password" name="password" placeholder="请输入你的密码" />
                            </div>
                            <!-- <div class="login-info">
                            验证码:&nbsp;
                            <input class="login-info-input verify-code" type="text" name="verifyCode"
                                placeholder="请输入验证码" v-model="verifyCode"/>
                            = <img alt="单击图片刷新！" style="top: 16px;position: relative;" src="@{/common/mall/kaptcha}"
                                onclick="this.src='/common/mall/kaptcha?d='+new Date()*1"> 
                        </div>  -->
                        </div>
                        <div class="login_submit">
                            <input class="submit" type="submit" value="立即登录"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { validPhoneNumber, validPassword } from '@/assets/admin/dist/js/public.js'
import Swal from '@/assets/admin/plugins/sweetalert2/sweetalert2.all.min.js'

export default {
    data() {
        return {
            loginform: {
                loginName: "",
                password: ""
            },
            logo: require("../../assets/mall/image/login-logo-2.png"),
            index_href: "",
            session_id: "false"

        }
    },
    methods: {
        handleSubmit: function () {
            // alert(this.loginform.loginName)
            // const that=this
            // this.$options.methods.sendMsg(that);
            var loginName = this.loginform.loginName;
            if (!validPhoneNumber(loginName)) {
                Swal.fire({
                    text: "请输入正确的登录名(即手机号)",
                    icon: "error", iconColor: "#f05b72",
                });
                return
            }

            var password = this.loginform.password;
            if (!validPassword(password)) {
                Swal.fire({
                    text: "请输入正确的密码格式(6-20位字符和数字组合)",
                    icon: "error", iconColor: "#f05b72",
                });
                return
            }
            return {}
        },
        // sendMsg:function(that){
            // this.axios.post('/user', {
            //     loginName: that.loginform.loginName,
            //     password: that.loginform.password
            //     })
            //     .then(function (response) {
            //         alert(response.data);
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
            
        // }
    },
}
</script>
<style lang="less" scoped>
@import url('../../assets/mall/css/common.css');
@import url('../../assets/mall/styles/login.css');
@import url('../../assets/mall/styles/header.css');
@import url('../../assets/admin/plugins/sweetalert2/sweetalert2.min.css');
</style>
// <!-- jQuery -->
// <!-- <script th:src="@{/admin/plugins/jquery/jquery.min.js}"></script>
// <script th:src="@{/admin/dist/js/public.js}"></script>
// <script th:src="@{/admin/plugins/sweetalert2/sweetalert2.all.min.js}"></script> -->
// <!-- <script type="text/javascript">
//     function login() {
//         var loginName = $("#loginName").val();
//         if (!validPhoneNumber(loginName)) {
//             Swal.fire({
//                 text: "请输入正确的登录名(即手机号)",
//                 icon: "error",iconColor:"#f05b72",
//             });
//             return false;
//         }
//         var password = $("#password").val();
//         if (!validPassword(password)) {
//             Swal.fire({
//                 text:"请输入正确的密码格式(6-20位字符和数字组合)",
//                 icon: "error",iconColor:"#f05b72",
//             });
//             return false;
//         }
//         var verifyCode = $("#verifyCode").val();
//         if (!validLength(verifyCode, 5)) {
//             Swal.fire({
//                 text: "请输入正确的验证码",
//                 icon: "error",iconColor:"#f05b72",
//             });
//             return false;
//         }
//         //验证
//         var params = $("#loginForm").serialize();
//         var url = '/login';
//         $.ajax({
//             type: 'POST',//方法类型
//             url: url,
//             data: params,
//             success: function (result) {
//                 if (result.resultCode == 200) {
//                     window.location.href = '/index';
//                 } else {
//                     Swal.fire({
//                         text: result.message,
//                         icon: "error",iconColor:"#f05b72",
//                     });
//                 }
//                 ;
//             },
//             error: function () {
//                 Swal.fire({
//                     text: "操作失败",
//                     icon: "error",iconColor:"#f05b72",
//                 });
//             }
//         });
//     }
// </script> -->
