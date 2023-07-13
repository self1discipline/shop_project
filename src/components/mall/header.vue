<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div id="app">
    <div class="top center">
        <div class="logo center">
            <router-link to="/index" target="_blank"><img src="mall/image/login-logo-2.png" alt=""></router-link>>
        </div>
    </div>
    <div class="form center">
        <div class="login">
            <div class="login_center">
                <div class="login_top">
                    <div class="left fl">会员登录</div>
                    <div class="right fr">您还不是我们的会员？<a href="register.html" target="_self">立即注册</a></div>
                    <div class="clear"></div>
                    <div class="under-line center"></div>
                </div>
                <form id="loginForm" onsubmit="return false;" action="##">
                    <div class="login_main center">
                        <div class="login-info">手机号:&nbsp;<input class="login-info-input" type="text" name="loginName"
                                id="loginName" placeholder="请输入你的手机号" />
                        </div>
                        <div class="login-info">密&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;<input class="login-info-input"
                                id="password" type="password" name="password" placeholder="请输入你的密码" /></div>
                        <div class="login-info">
                            验证码:&nbsp;
                            <input class="login-info-input verify-code" type="text" name="verifyCode" placeholder="请输入验证码"
                                id="verifyCode" />
                            <img alt="单击图片刷新！" style="top: 16px;position: relative;" th:src="@{/common/mall/kaptcha}"
                                onclick="this.src='/common/mall/kaptcha?d='+new Date()*1">
                        </div>
                    </div>
                    <div class="login_submit">
                        <input class="submit" type="submit" onclick="login()" value="立即登录">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default{
        data(){
            // eslint-disable-next-line no-unused-labels
            this_path:this.$route.path

        },
    }
    
</script>

<style lang="less" scoped>
@import url("../../assets/mall/css/common.css");
@import url("../../assets/mall/css/swiper-bundle.min.css");
@import url("../../assets/mall/css/iconfont.css");
@import url("../../assets/mall/styles/header.css"); 
// @import url("../../assets/mall/styles/{this.$route.path}.css"); 
@import url("../../assets/admin/plugins/sweetalert2/sweetalert2.min.css"); 
</style>