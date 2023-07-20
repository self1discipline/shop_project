<!-- eslint-disable vue/multi-word-component-names -->
<template>
  
        <body class="homepage">
            <header id="header">
                <div class="top-bar">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-xs-4">
                                <div class="top-number">
                                    <p><i class="fa fa-phone-square"></i> +0123 456 70 90</p>
                                </div>
                            </div>
                            <div v-if="!islogined" class="col-sm-6 col-xs-8">
                                <div class="social">
                                    <ul class="social-share">
                                        <li><a href=""><router-link to="/login">Sign in</router-link></a></li>

                                    </ul>
                                    <ul class="social-share">
                                        <li><a href="#">Sign up</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div v-else class="col-sm-6 col-xs-8">
                                <div class="social">
                                    <ul class="social-share">
                                        <li><a href=""><router-link to="/login">123</router-link></a></li>

                                    </ul>
                                    <ul class="social-share">
                                        <li><a href="#">321</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--/.top-bar-->

                <nav class="navbar navbar-inverse" role="banner">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-collapse">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#"><img src="@/assets/component/images/logo.png"
                                    alt="logo"></a>
                        </div>

                        <div class="collapse navbar-collapse navbar-right">
                            <ul class="nav navbar-nav">
                                <li class="active"><a href="javascript:void(0);" @click="inDex">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages <i
                                            class="fa fa-angle-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="blog-item.html">Blog Single</a></li>
                                        <li><a href="pricing.html">Pricing</a></li>
                                        <li><a href="404.html">404</a></li>
                                        <li><a href="shortcodes.html">Shortcodes</a></li>
                                    </ul>
                                </li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="contact-us.html">Contact</a></li>
                            </ul>
                        </div>
                    </div><!--/.container-->

                </nav><!--/nav-->
                <div data-content-region="header_bottom"></div>
                <div class="tmheader-bottom">
                    <aside class="page-sidebar" id="header-category-inner">
                        <div class="box-category-heading">
                            <h5 class="page-heading"><i class="fa fa-bars" aria-hidden="true"></i>Categories</h5><i
                                class="fa fa-angle-down" aria-hidden="true"></i>
                        </div>

                    </aside>
                    <div class="navPages-container" id="menu" data-menu="">
                        <nav class="navPages">
                            <aside class="page-sidebar" id="header-category">
                                <div class="box-category-heading">
                                    <h5 class="page-heading">Categories</h5><i class="fa fa-angle-down"
                                        aria-hidden="true"></i>
                                </div>

                            </aside>
                            <div class="navPages-quickSearch">
                                <!-- InnerSearch -->
                                <form class="form" action="https://tmdemo1.mybigcommerce.com/search.php">
                                    <fieldset class="form-fieldset">
                                        <div class="form-field">
                                            <label class="is-srOnly" for="search_query">Search</label>
                                            <input class="form-input" data-search-quick="" name="search_query"
                                                id="search_query" data-error-message="Search field cannot be empty."
                                                placeholder="Search the store" autocomplete="off">
                                        </div>
                                    </fieldset>
                                </form>
                                <div class="container">
                                    <!-- snippet location forms_search -->
                                    <div class="dropdown dropdown--quickSearch" id="quickSearch" aria-hidden="true"
                                        tabindex="-1">
                                        <span class="removeSearch inner-close"><span aria-hidden="true">×</span></span>
                                        <div class="container">
                                            <section class="quickSearchResults" data-bind="html: results"></section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul class="navPages-list bottom-navlist">
                                <li class="navPages-item navPages-item-page">
                                    <a class="navPages-action" href="https://tmdemo1.mybigcommerce.com/">Home</a>
                                </li>
                                <li class="navPages-item navPages-item-page">
                                    <a class="navPages-action" href="https://tmdemo1.mybigcommerce.com/about-us/">About
                                        Us</a>
                                </li>
                                <li class="navPages-item navPages-item-page">
                                    <a class="navPages-action" href="https://tmdemo1.mybigcommerce.com/blog/">Blog</a>
                                </li>
                                <li class="navPages-item navPages-item-page">
                                    <a class="navPages-action" href="https://tmdemo1.mybigcommerce.com/rss-syndication/">RSS
                                        Syndication</a>
                                </li>
                                <li class="navPages-item navPages-item-page">
                                    <a class="navPages-action" href="https://tmdemo1.mybigcommerce.com/contact-us/">Contact
                                        Us</a>
                                </li>
                                <li class="navPages-item navPages-item-page">
                                    <a class="navPages-action"
                                        href="https://tmdemo1.mybigcommerce.com/shipping-returns/">Shipping &amp;
                                        Returns</a>
                                </li>
                            </ul>
                            <ul class="navPages-list tmouter-search">
                                <li class="navUser-item search">
                                    <div class="tm-container tm-search-wrapper">
                                        <fieldset class="form-fieldset">
                                            <div class="form-field">
                                                <form class="form" action="https://tmdemo1.mybigcommerce.com/search.php">
                                                    <div class="main-serch" data-prevent-quick-search-close="">
                                                        <input class="form-input searchbox" data-search-quick=""
                                                            name="search_query" id="search_query"
                                                            data-error-message="Search field cannot be empty."
                                                            placeholder="Search the store" autocomplete="off">
                                                        <input type="submit" class="button button--primary searchbtn"
                                                            value="" />
                                                    </div>
                                                </form>
                                            </div>
                                        </fieldset>
                                    </div>
                                </li>
                            </ul>


                            <ul class="navPages-list navPages-list--user">
                                <li class="navPages-item">
                                    <a class="navPages-action has-subMenu" href="https://tmdemo1.mybigcommerce.com/#"
                                        data-collapsible="navPages-currency" aria-controls="navPages-currency"
                                        aria-expanded="false">
                                        Select Currency: USD <i class="icon navPages-action-moreIcon"
                                            aria-hidden="true"><svg>
                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    xlink:href="#icon-chevron-down">
                                                </use>
                                            </svg></i>
                                    </a>
                                    <div class="navPage-subMenu" id="navPages-currency" aria-hidden="true" tabindex="-1">
                                        <ul class="navPage-subMenu-list">
                                            <li class="navPage-subMenu-item">
                                                <a class="navPage-subMenu-action navPages-action"
                                                    href="https://tmdemo1.mybigcommerce.com/?setCurrencyId=1">
                                                    <strong>Default Currency</strong>
                                                </a>
                                            </li>
                                            <li class="navPage-subMenu-item">
                                                <a class="navPage-subMenu-action navPages-action"
                                                    href="https://tmdemo1.mybigcommerce.com/?setCurrencyId=5">
                                                    AUD
                                                </a>
                                            </li>
                                            <li class="navPage-subMenu-item">
                                                <a class="navPage-subMenu-action navPages-action"
                                                    href="https://tmdemo1.mybigcommerce.com/?setCurrencyId=6">
                                                    Indian Rupee
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="navPages-item">
                                    <a class="navPages-action"
                                        href="https://tmdemo1.mybigcommerce.com/giftcertificates.php">Gift Certificates</a>
                                </li>
                                <li class="navPages-item">
                                    <a class="navPages-action" href="https://tmdemo1.mybigcommerce.com/login.php">Login</a>
                                    or <a class="navPages-action"
                                        href="https://tmdemo1.mybigcommerce.com/login.php?action=create_account">Sign Up</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="navUser-item navUser-item--cart">
                    <a class="navUser-action" data-cart-preview="" data-dropdown="cart-preview-dropdown"
                        data-options="align:right" href="https://tmdemo1.mybigcommerce.com/cart.php" aria-expanded="false">
                        <span class="navUser-item-cartLabel">Cart</span><span class="countPill cart-quantity">0</span>
                    </a>

                    <div class="dropdown-menu" id="cart-preview-dropdown" data-dropdown-content="" aria-hidden="true">
                    </div>
                </div>
            </header><!--/header-->
        </body>

</template>  

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names

    // eslint-disable-next-line vue/multi-word-component-names
    name: 'headerview',
    props: {
        index: String
    },
    data(){
        return{
            islogined:false
        }
    },
    methods:{
        inDex:function(){
            this.$router.push({path:'/header'})
        },
        // get:function(){
        //     var user=sessionStorage.getItem("user")
        //     console.log(user)
        //     if(user!=null){
        //         this.islogined=true
        //     }
        // }
    },
    // mounted(){
    //      let _this = this
    //      setTimeout(function() {
    //         _this.get()
    //     }, 100)
    // },
}

</script>
<script src="@/assets/component/js/jquery.js"></script>
<script src="@/assets/component/js/bootstrap.min.js"></script>
<script src="@/assets/component/js/jquery.prettyPhoto.js"></script>
<script src="@/assets/component/js/jquery.isotope.min.js"></script>
<script src="@/assets/component/js/main.js"></script>
<script src="@/assets/component/js/wow.min.js"></script>

<!-- <style lang="less" scoped>
@import "../../assets/component/css/bootstrap.min.css";
@import "../../assets/component/css/main.css";
@import "../../assets/component/css/theme-41694380-b3b9-0138-7d93-0242ac110008.css";
// @import url("../../assets/mall/styles/{this.$route.path}.css"); 

</style> -->
<style src="../../assets/component/css/bootstrap.min.css"  scoped></style>
<style src="../../assets/component/css/theme-41694380-b3b9-0138-7d93-0242ac110008.css"  scoped></style>
<style src="../../assets/component/css/main.css"  scoped></style>
<style src="../../assets/component/css/font-awesome.min.css"  scoped></style>
<style src="../../assets/component/css/prettyPhoto.css"  scoped></style>
<style src="../../assets/component/css/responsive.css"  scoped></style>
<style src="../../assets/component/css/animate.min.css"  scoped></style>
