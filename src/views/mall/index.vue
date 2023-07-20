<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <!DOCTYPE html>
    <html lang="en">

    <body class="homepage">
        <Header></Header>
        <div class="body" data-currency-code="USD">


            <div class="main-tmslider-fullbg">
                <div class="container">
                    <aside class="page-sidebar tminner-menu" id="faceted-search-container">
                        <div class="sidebarBlock">
                            <!--<div class="box-category-heading"><h5 class="page-heading">Categories</h5><i class="fa fa-angle-down" aria-hidden="true"></i></div>-->
                            <div class="catgory-left">
                                <div class="category-lfet-box">

                                    <ul class="navList level-0" style="display: block;">
                                        
                                        <li  v-for="category in categories"  class="navList-item level-0">
                                            <router-link :to="{path:'/search',query:{goodsCategoryId:categoryId}}" class="navList-action"
                                                >{{category.categoryName}}<div
                                                    class="right-angle"><i class="icon" aria-hidden="true"><svg>
                                                            <use xlink:href="#icon-chevron-right"></use>
                                                        </svg></i></div></router-link>

                                            <div class="right-angle">
                                                <i class="icon" aria-hidden="true">
                                                    <svg>
                                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                            xlink:href="#icon-chevron-right"></use>
                                                    </svg>
                                                </i>
                                            </div>
                                            <div class="plus_minus">
                                                <svg class="icon_plus">
                                                    <use xlink:href="#icon-add"></use>
                                                </svg>
                                                <svg class="icon_minus">
                                                    <use xlink:href="#icon-remove"></use>
                                                </svg>
                                            </div>


                                            <div class="my_dropdown-menu column3">

                                                <div class="my_dropdown-inner">

                                                    <ul class="navList category level-1" style="display: block;">

                                                        <li class="navList-item level-1" v-for="secondLevelCategory in category.secondLevelCategoryVOS">
                                                                            <router-link :to="{path:'/search',query:{goodsCategoryId:secondLevelCategory.categoryId}}" class="navList-action has-subMenu"
                                                                                >{{secondLevelCategory.categoryName}}</router-link>
                                                        
                                                            <div class="right-angle">
                                                                <i class="icon" aria-hidden="true">
                                                                    <svg>
                                                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                            xlink:href="#icon-chevron-right"></use>
                                                                    </svg>
                                                                </i>
                                                            </div>
                                                            <div class="plus_minus">
                                                                <svg class="icon_plus">
                                                                    <use xlink:href="#icon-add"></use>
                                                                </svg>
                                                                <svg class="icon_minus">
                                                                    <use xlink:href="#icon-remove"></use>
                                                                </svg>
                                                            </div>

                                                            <div class="my_dropdown-menu">
                                                                <div class="my_dropdown-inner">
                                                                    <ul class="navList category level-2" id="navPages-65"
                                                                        style="display: block;">
                                                                        <li class="navList-item level-2" v-for="thirdLevelCategory in secondLevelCategory.thirdLevelCategoryVOS">
                                                                            <router-link :to="{path:'/search',query:{goodsCategoryId:thirdLevelCategory.categoryId}}" class="navList-action"
                                                                                >{{thirdLevelCategory.categoryName}}</router-link>
                                                                        </li>
                                                                        <!-- <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/shirts/">Shirts</a>
                                                                        </li>
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/trousers/">Trousers</a>
                                                                        </li>
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/tshirts/">Tshirts</a>
                                                                        </li> -->

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <!-- <li class="navList-item level-1">
                                                            <a class="navList-action has-subMenu"
                                                                href="https://tmdemo1.mybigcommerce.com/women/">Women</a>
                                                            <div class="right-angle">
                                                                <i class="icon" aria-hidden="true">
                                                                    <svg>
                                                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                            xlink:href="#icon-chevron-right"></use>
                                                                    </svg>
                                                                </i>
                                                            </div>
                                                            <div class="plus_minus">
                                                                <svg class="icon_plus">
                                                                    <use xlink:href="#icon-add"></use>
                                                                </svg>
                                                                <svg class="icon_minus">
                                                                    <use xlink:href="#icon-remove"></use>
                                                                </svg>
                                                            </div>

                                                            <div class="my_dropdown-menu">
                                                                <div class="my_dropdown-inner">
                                                                    <ul class="navList category level-2" id="navPages-66"
                                                                        style="display: block;">
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/dresses/">Dresses</a>
                                                                        </li>
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/leggings/">Leggings</a>
                                                                        </li>
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/saress/">saress</a>
                                                                        </li>
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/suits/">Suits</a>
                                                                        </li>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li class="navList-item level-1">
                                                            <a class="navList-action has-subMenu"
                                                                href="https://tmdemo1.mybigcommerce.com/kids-wear/">Kids
                                                                Wear</a>
                                                            <div class="right-angle">
                                                                <i class="icon" aria-hidden="true">
                                                                    <svg>
                                                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                            xlink:href="#icon-chevron-right"></use>
                                                                    </svg>
                                                                </i>
                                                            </div>
                                                            <div class="plus_minus">
                                                                <svg class="icon_plus">
                                                                    <use xlink:href="#icon-add"></use>
                                                                </svg>
                                                                <svg class="icon_minus">
                                                                    <use xlink:href="#icon-remove"></use>
                                                                </svg>
                                                            </div>

                                                            <div class="my_dropdown-menu">
                                                                <div class="my_dropdown-inner">
                                                                    <ul class="navList category level-2" id="navPages-67"
                                                                        style="display: block;">
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/baba-suits/">Baba
                                                                                Suits</a>
                                                                        </li>
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/shorts/">Shorts</a>
                                                                        </li>
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/polos/">Polos</a>
                                                                        </li>
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/sleeves/">Sleeves</a>
                                                                        </li>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li class="navList-item level-1">
                                                            <a class="navList-action has-subMenu"
                                                                href="https://tmdemo1.mybigcommerce.com/sportswear/">Sportswear</a>
                                                            <div class="right-angle">
                                                                <i class="icon" aria-hidden="true">
                                                                    <svg>
                                                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                            xlink:href="#icon-chevron-right"></use>
                                                                    </svg>
                                                                </i>
                                                            </div>
                                                            <div class="plus_minus">
                                                                <svg class="icon_plus">
                                                                    <use xlink:href="#icon-add"></use>
                                                                </svg>
                                                                <svg class="icon_minus">
                                                                    <use xlink:href="#icon-remove"></use>
                                                                </svg>
                                                            </div>

                                                            <div class="my_dropdown-menu">
                                                                <div class="my_dropdown-inner">
                                                                    <ul class="navList category level-2" id="navPages-101"
                                                                        style="display: block;">
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/addidas/">Addidas</a>
                                                                        </li>
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/breakbounce/">Breakbounce</a>
                                                                        </li>
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/nike/">Nike</a>
                                                                        </li>
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/united-colors/">United
                                                                                Colors</a>
                                                                        </li>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li> -->
                                                    </ul>

                                                    <div class="subbanner-image">
                                                        <img class="lazyload" data-sizes="auto"
                                                            src="@/assets/component/images/cat-shoptown__84072.original.jpg">
                                                    </div>



                                                </div>

                                            </div>
                                        
                                        </li>
                                        <!-- <li class="navList-item level-0">
                                            <a class="navList-action"
                                                href="https://tmdemo1.mybigcommerce.com/mobiles/">Mobiles<div
                                                    class="right-angle"><i class="icon" aria-hidden="true"><svg>
                                                            <use xlink:href="#icon-chevron-right"></use>
                                                        </svg></i></div></a>

                                            <div class="right-angle">
                                                <i class="icon" aria-hidden="true">
                                                    <svg>
                                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                            xlink:href="#icon-chevron-right"></use>
                                                    </svg>
                                                </i>
                                            </div>
                                            <div class="plus_minus">
                                                <svg class="icon_plus">
                                                    <use xlink:href="#icon-add"></use>
                                                </svg>
                                                <svg class="icon_minus">
                                                    <use xlink:href="#icon-remove"></use>
                                                </svg>
                                            </div>


                                            <div class="my_dropdown-menu column3">

                                                <div class="my_dropdown-inner">

                                                    <ul class="navList category level-1" style="display: block;">

                                                        <li class="navList-item level-1">
                                                            <a class="navList-action has-subMenu"
                                                                href="https://tmdemo1.mybigcommerce.com/samsung-galaxy/">samsung-galaxy</a>
                                                            <div class="right-angle">
                                                                <i class="icon" aria-hidden="true">
                                                                    <svg>
                                                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                            xlink:href="#icon-chevron-right"></use>
                                                                    </svg>
                                                                </i>
                                                            </div>
                                                            <div class="plus_minus">
                                                                <svg class="icon_plus">
                                                                    <use xlink:href="#icon-add"></use>
                                                                </svg>
                                                                <svg class="icon_minus">
                                                                    <use xlink:href="#icon-remove"></use>
                                                                </svg>
                                                            </div>

                                                            <div class="my_dropdown-menu">
                                                                <div class="my_dropdown-inner">
                                                                    <ul class="navList category level-2" id="navPages-68"
                                                                        style="display: block;">
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/galaxy-a6s/">Galaxy
                                                                                A6s</a>
                                                                        </li>
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/galaxy-note9/">Galaxy
                                                                                Note9</a>
                                                                        </li>
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/galaxy-j4-core/">Galaxy
                                                                                J4 Core</a>
                                                                        </li>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li class="navList-item level-1">
                                                            <a class="navList-action has-subMenu"
                                                                href="https://tmdemo1.mybigcommerce.com/nokia-lumia/">Nokia
                                                                lumia</a>
                                                            <div class="right-angle">
                                                                <i class="icon" aria-hidden="true">
                                                                    <svg>
                                                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                            xlink:href="#icon-chevron-right"></use>
                                                                    </svg>
                                                                </i>
                                                            </div>
                                                            <div class="plus_minus">
                                                                <svg class="icon_plus">
                                                                    <use xlink:href="#icon-add"></use>
                                                                </svg>
                                                                <svg class="icon_minus">
                                                                    <use xlink:href="#icon-remove"></use>
                                                                </svg>
                                                            </div>

                                                            <div class="my_dropdown-menu">
                                                                <div class="my_dropdown-inner">
                                                                    <ul class="navList category level-2" id="navPages-69"
                                                                        style="display: block;">
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/nokia-7-1-plus/">Nokia
                                                                                7.1 Plus</a>
                                                                        </li>
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/nokia-8-sirocco/">Nokia
                                                                                8 Sirocco</a>
                                                                        </li>
                                                                        <li class="navList-item level-2">
                                                                            <a class="navList-action"
                                                                                href="https://tmdemo1.mybigcommerce.com/nokia-8110-4g/">Nokia
                                                                                8110 4G</a>
                                                                        </li>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>




                                                </div>

                                            </div>
                                        </li>
                                        <li class="navList-item level-0">
                                            <a class="navList-action"
                                                href="https://tmdemo1.mybigcommerce.com/electronics/">Electronics</a>

                                        </li>
                                        <li class="navList-item level-0">
                                            <a class="navList-action"
                                                href="https://tmdemo1.mybigcommerce.com/cameras/">Cameras</a>

                                        </li>
                                        <li class="navList-item level-0">
                                            <a class="navList-action"
                                                href="https://tmdemo1.mybigcommerce.com/chairs/">Chairs</a>

                                        </li>
                                        <li class="navList-item level-0">
                                            <a class="navList-action"
                                                href="https://tmdemo1.mybigcommerce.com/furniture/">Furniture</a>

                                        </li>
                                        <li class="navList-item level-0">
                                            <a class="navList-action"
                                                href="https://tmdemo1.mybigcommerce.com/home-theatre/">home theatre</a>

                                        </li>
                                        <li class="navList-item level-0">
                                            <a class="navList-action"
                                                href="https://tmdemo1.mybigcommerce.com/accessories/">Accessories</a>

                                        </li>
                                        <li class="navList-item level-0">
                                            <a class="navList-action"
                                                href="https://tmdemo1.mybigcommerce.com/lightings/">Lightings</a>

                                        </li>
                                        <li class="navList-item level-0">
                                            <a class="navList-action"
                                                href="https://tmdemo1.mybigcommerce.com/fashion/">Fashion</a>

                                        </li>
                                        <li class="navList-item level-0" style="display: none;">
                                            <a class="navList-action"
                                                href="https://tmdemo1.mybigcommerce.com/trends/">Trends</a>

                                        </li>
                                        <li>
                                            <div class="more-wrap"><span class="more-view">More Categories<i
                                                        class="material-icons"></i></span></div>
                                        </li> -->
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </aside>
                    <div class="home-slider-right">
                        <div class="main-slider">
                            <section class="heroCarousel slick-initialized slick-slider slick-dotted" data-slick="{
                  &quot;arrows&quot;: true,
  &quot;dots&quot;: true,
  &quot;mobileFirst&quot;: true,
  &quot;slidesToShow&quot;: 1,
  &quot;slidesToScroll&quot;: 1,
  &quot;autoplay&quot;: true,
  &quot;autoplaySpeed&quot;: 500000,
  &quot;lazyLoad&quot;: &quot;anticipated&quot;
  }"><button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="">Previous</button>
                                <div class="slick-list draggable">
                                    <div class="slick-track"
                                        style="opacity: 1; width: 3395px; transform: translate3d(-679px, 0px, 0px);"><a
                                            href="https://tmdemo1.mybigcommerce.com/" class="slick-slide slick-cloned"
                                            data-slick-index="-1" id="" aria-hidden="true" tabindex="-1"
                                            style="width: 679px;">
                                            <div class="heroCarousel-slide  ">
                                                <div class="heroCarousel-image-wrapper">
                                                    <img src="@/assets/component/images/Main-Banner-3.jpg" alt="" title=""
                                                        data-sizes="auto"
                                                        srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/carousel/80/Main-Banner-3.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/carousel/80/Main-Banner-3.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/carousel/80/Main-Banner-3.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/carousel/80/Main-Banner-3.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/678w/carousel/80/Main-Banner-3.jpg?c=2 678w"
                                                        data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/carousel/80/Main-Banner-3.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/carousel/80/Main-Banner-3.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/carousel/80/Main-Banner-3.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/carousel/80/Main-Banner-3.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/678w/carousel/80/Main-Banner-3.jpg?c=2 678w"
                                                        class=" heroCarousel-image lazyautosizes lazyloading" loading="lazy"
                                                        sizes="679px">
                                                </div>
                                                <div class="heroCarousel-content">
                                                    <h1 class="heroCarousel-title">Fashion Sandles</h1>
                                                    <p class="heroCarousel-description">Women's Footwear</p>
                                                    <span
                                                        class="heroCarousel-action button button--primary button--large">shop
                                                        now</span>
                                                </div>
                                            </div>
                                        </a><a href="https://tmdemo1.mybigcommerce.com/"
                                            class="slick-slide slick-current slick-active" data-slick-index="0"
                                            aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide00"
                                            aria-describedby="slick-slide-control00" style="width: 679px;">
                                            <div class="heroCarousel-slide  heroCarousel-slide--first">
                                                <div class="heroCarousel-image-wrapper">
                                                    <img src="@/assets/component/images/main-banner1.jpg" alt="" title=""
                                                        data-sizes="auto"
                                                        srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/carousel/76/main-banner1.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/carousel/76/main-banner1.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/carousel/76/main-banner1.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/carousel/76/main-banner1.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/678w/carousel/76/main-banner1.jpg?c=2 678w"
                                                        class=" heroCarousel-image">
                                                </div>
                                                <div class="heroCarousel-content">
                                                    <h1 class="heroCarousel-title">Women FASHION</h1>
                                                    <p class="heroCarousel-description">On Summer Collection</p>
                                                    <span
                                                        class="heroCarousel-action button button--primary button--large">SHOP
                                                        NOW</span>
                                                </div>
                                            </div>
                                        </a><a href="https://tmdemo1.mybigcommerce.com/" class="slick-slide"
                                            data-slick-index="1" aria-hidden="true" tabindex="-1" role="tabpanel"
                                            id="slick-slide01" aria-describedby="slick-slide-control01"
                                            style="width: 679px;">
                                            <div class="heroCarousel-slide  ">
                                                <div class="heroCarousel-image-wrapper">
                                                    <img src="@/assets/component/images/Main-Banner-3.jpg" alt="" title=""
                                                        data-sizes="auto"
                                                        srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/carousel/80/Main-Banner-3.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/carousel/80/Main-Banner-3.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/carousel/80/Main-Banner-3.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/carousel/80/Main-Banner-3.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/678w/carousel/80/Main-Banner-3.jpg?c=2 678w"
                                                        data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/carousel/80/Main-Banner-3.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/carousel/80/Main-Banner-3.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/carousel/80/Main-Banner-3.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/carousel/80/Main-Banner-3.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/678w/carousel/80/Main-Banner-3.jpg?c=2 678w"
                                                        class=" heroCarousel-image lazyautosizes lazyloading" loading="lazy"
                                                        sizes="679px">
                                                </div>
                                                <div class="heroCarousel-content">
                                                    <h1 class="heroCarousel-title">Fashion Sandles</h1>
                                                    <p class="heroCarousel-description">Women's Footwear</p>
                                                    <span
                                                        class="heroCarousel-action button button--primary button--large">shop
                                                        now</span>
                                                </div>
                                            </div>
                                        </a><a href="https://tmdemo1.mybigcommerce.com/" class="slick-slide slick-cloned"
                                            data-slick-index="2" id="" aria-hidden="true" tabindex="-1"
                                            style="width: 679px;">
                                            <div class="heroCarousel-slide  heroCarousel-slide--first">
                                                <div class="heroCarousel-image-wrapper">
                                                    <img src="@/assets/component/images/main-banner1.jpg" alt="" title=""
                                                        data-sizes="auto"
                                                        srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/carousel/76/main-banner1.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/carousel/76/main-banner1.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/carousel/76/main-banner1.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/carousel/76/main-banner1.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/678w/carousel/76/main-banner1.jpg?c=2 678w"
                                                        class=" heroCarousel-image">
                                                </div>
                                                <div class="heroCarousel-content">
                                                    <h1 class="heroCarousel-title">Women FASHION</h1>
                                                    <p class="heroCarousel-description">On Summer Collection</p>
                                                    <span
                                                        class="heroCarousel-action button button--primary button--large">SHOP
                                                        NOW</span>
                                                </div>
                                            </div>
                                        </a><a href="https://tmdemo1.mybigcommerce.com/" class="slick-slide slick-cloned"
                                            data-slick-index="3" id="" aria-hidden="true" tabindex="-1"
                                            style="width: 679px;">
                                            <div class="heroCarousel-slide  ">
                                                <div class="heroCarousel-image-wrapper">
                                                    <img src="@/assets/component/images/Main-Banner-3.jpg" alt="" title=""
                                                        data-sizes="auto"
                                                        srcset="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                                        data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/carousel/80/Main-Banner-3.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/carousel/80/Main-Banner-3.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/carousel/80/Main-Banner-3.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/carousel/80/Main-Banner-3.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/678w/carousel/80/Main-Banner-3.jpg?c=2 678w"
                                                        class="lazyload heroCarousel-image" loading="lazy">
                                                </div>
                                                <div class="heroCarousel-content">
                                                    <h1 class="heroCarousel-title">Fashion Sandles</h1>
                                                    <p class="heroCarousel-description">Women's Footwear</p>
                                                    <span
                                                        class="heroCarousel-action button button--primary button--large">shop
                                                        now</span>
                                                </div>
                                            </div>
                                        </a></div>
                                </div>

                                <button class="slick-next slick-arrow" aria-label="Next" type="button"
                                    style="">Next</button>
                                <ul class="slick-dots" style="display: block;" role="tablist">
                                    <li class="slick-active" role="presentation"><button type="button" role="tab"
                                            id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 2"
                                            tabindex="0" aria-selected="true">1</button></li>
                                    <li role="presentation"><button type="button" role="tab" id="slick-slide-control01"
                                            aria-controls="slick-slide01" aria-label="2 of 2" tabindex="-1">2</button></li>
                                </ul>
                            </section>
                        </div>
                        <div class="banner-top-right">
                            <div class="top-right-banners">
                                <div class="banner1"><a name="top-banner1" href="https://tmdemo1.mybigcommerce.com/#"><img
                                            class="__mce_add_custom__" title="right-bannr1.jpg"
                                            src="@/assets/component/images/right-bannr1.jpg" alt="right-bannr1.jpg"
                                            width="240" height="223"></a></div>
                                <div class="banner2"><a name="top-banner2" href="https://tmdemo1.mybigcommerce.com/#"><img
                                            class="__mce_add_custom__" title="right-bannr2.jpg"
                                            src="@/assets/component/images/right-bannr2.jpg" alt="right-bannr2.jpg"
                                            width="240" height="223"></a></div>
                            </div>
                        </div>
                    </div>
                    <div data-content-region="home_below_carousel"></div>
                    <div class="servicetop-cms">
                        <div class="service">
                            <div class="serviceblock serviceblock1">
                                <div class="title">Free world delivery</div>
                                <div class="subtitle">order over $100</div>
                            </div>
                            <div class="serviceblock serviceblock2">
                                <div class="title">win $100 to shop</div>
                                <div class="subtitle">enter now</div>
                            </div>
                            <div class="serviceblock serviceblock3">
                                <div class="title">Best online support</div>
                                <div class="subtitle">hours : 8am - 11pm</div>
                            </div>
                            <div class="serviceblock serviceblock4">
                                <div class="title">My Money Back guaranty</div>
                                <div class="subtitle">with a 30 day</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- snippet location home_content -->

            <div class="container">


                <div class="main full">
                    <aside class="page-sidebar home-leftcol" id="faceted-search--container">

                        <div class="service-left-banner">
                            <!-- Start Service Left Bottom Banner -->
                            <div class="box-content bv1">
                                <div class="ser-banner banner1"><a href="https://tmdemo1.mybigcommerce.com/#"><span
                                            class="round_img"><img src="@/assets/component/images/sticon-1.png"
                                                alt=""></span> <span class="ser-text1">use wallet</span> <span
                                            class="ser-text3">Pay for
                                            payments</span> </a></div>
                                <div class="ser-banner banner2"><a href="https://tmdemo1.mybigcommerce.com/#"> <span
                                            class="round_img"><img src="@/assets/component/images/sticon-2.png"
                                                alt=""></span> <span class="ser-text1">our details</span> <span
                                            class="ser-text3">our bank
                                            account</span> </a></div>
                                <div class="ser-banner banner3"><a href="https://tmdemo1.mybigcommerce.com/#"> <span
                                            class="round_img"><img src="@/assets/component/images/sticon-3.png"
                                                alt=""></span> <span class="ser-text1">Online shopping</span> <span
                                            class="ser-text3">Free
                                            hemming</span> </a></div>
                                <div class="ser-banner banner4"><a href="https://tmdemo1.mybigcommerce.com/#"> <span
                                            class="round_img"><img src="@/assets/component/images/sticon-4.png"
                                                alt=""></span> <span class="ser-text1">Free delivery</span> <span
                                            class="ser-text3">order about
                                            $50</span> </a></div>
                                <div class="ser-banner banner5"><a href="https://tmdemo1.mybigcommerce.com/#"> <span
                                            class="round_img"><img src="@/assets/component/images/sticon-5.png"
                                                alt=""></span> <span class="ser-text1">login checkout</span> <span
                                            class="ser-text3">Payment
                                            service</span> </a></div>
                            </div>
                            <!--End Service Left Bottom Banner -->
                            <p>&nbsp;</p>
                            <!-- Start Left image Banner 1 -->
                            <div class="img-leftcol"><a class="single-image1"
                                    href="https://tmdemo1.mybigcommerce.com/#"><img class="__mce_add_custom__"
                                        title="left-banner1.jpg" src="@/assets/component/images/left-banner1.jpg"
                                        alt="left-banner1.jpg" width="270" height="290"></a></div>
                            <!-- End Left image Banner 1 -->
                        </div>
                        <article class="column-left-info">
                            <h4 class="left-info-heading btm-border">Information</h4>
                            <ul class="left-info-list">
                                <li>
                                    <a href="https://tmdemo1.mybigcommerce.com/about-us/">About Us</a>
                                </li>
                                <li>
                                    <a href="https://tmdemo1.mybigcommerce.com/blog/">Blog</a>
                                </li>
                                <li>
                                    <a href="https://tmdemo1.mybigcommerce.com/rss-syndication/">RSS Syndication</a>
                                </li>
                                <li>
                                    <a href="https://tmdemo1.mybigcommerce.com/contact-us/">Contact Us</a>
                                </li>
                                <li>
                                    <a href="https://tmdemo1.mybigcommerce.com/shipping-returns/">Shipping &amp; Returns</a>
                                </li>
                                <li>
                                    <a href="https://tmdemo1.mybigcommerce.com/sitemap.php">Sitemap</a>
                                </li>
                            </ul>
                        </article>

                        <div class="banners" data-banner-location="bottom">
                            <div class="banner">
                                <div id="566538091">
                                    <!-- Start Left Image Banner 2 -->
                                    <div class="img-leftcol2"><a class="single-image2"
                                            href="https://tmdemo1.mybigcommerce.com/#"><img class="__mce_add_custom__"
                                                title="left-banner-2.jpg" src="@/assets/component/images/left-banner-2.jpg"
                                                alt="left-banner-2.jpg" width="270" height="400"></a></div>
                                    <!-- End Left Image Banner 2 -->
                                </div>
                            </div>
                        </div>

                    </aside>

                    <main class="tmpage-content home-rightcol" id="product-listing-container">

                        <div class="banners" data-banner-location="top">
                            <div class="banner">
                                <div id="573095607">
                                    <!-- Start top right banners -->

                                    <!-- Start home Service Banner -->

                                    <!-- Start Middle Banners-->
                                    <div id="homepage-tabs" class="homepage-products">

                                        <h2 class="page-heading btm-border">top products</h2>
                                        <div data-content-region="home_below_top_products"></div>
                                        <ul class="tabs" data-tab="">
                                            <li class="tab is-active" role="presentational"><a class="tab-title"
                                                    href="https://tmdemo1.mybigcommerce.com/#tab-featured">Featured</a></li>

                                            <li class="tab" role="presentational"><a class="tab-title"
                                                    href="https://tmdemo1.mybigcommerce.com/#tab-best">Best Seller</a></li>
                                        </ul>

                                        <div class="tabs-contents">
                                            <div class="tab-content is-active has-jsContent" id="tab-featured"
                                                role="tabpanel">

                                                <section class="productCarousel slick-initialized slick-slider slick-dotted"
                                                    data-list-name="" data-slick="{
  &quot;dots&quot;: true,
  &quot;infinite&quot;: false,
  &quot;mobileFirst&quot;: true,
  &quot;slidesToShow&quot;: 2,
  &quot;slidesToScroll&quot;: 1,
  &quot;responsive&quot;: [
      {
          &quot;breakpoint&quot;: 1300,
          &quot;settings&quot;: {
              &quot;slidesToScroll&quot;: 1,
              &quot;slidesToShow&quot;: 4
          }
      },
      {
          &quot;breakpoint&quot;: 800,
          &quot;settings&quot;: {
              &quot;slidesToScroll&quot;: 1,
              &quot;slidesToShow&quot;: 3
          }
      },
      {
          &quot;breakpoint&quot;: 550,
          &quot;settings&quot;: {
              &quot;slidesToScroll&quot;: 1,
              &quot;slidesToShow&quot;: 3
          }
      }
  ]
  }"><button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true"
                                                        style="">Previous</button>





                                                    <div class="slick-list draggable">
                                                        <div class="slick-track"
                                                            style="opacity: 1; width: 1215px; transform: translate3d(0px, 0px, 0px);">
                                                            <div class="productCarousel-slide slick-slide slick-current slick-active"
                                                                style="width: 243px;" tabindex="0" role="tabpanel"
                                                                id="slick-slide10" aria-describedby="slick-slide-control10"
                                                                data-slick-index="0" aria-hidden="false">

                                                                <article class="card ">
                                                                    <figure class="card-figure">
                                                                        <a href="https://tmdemo1.mybigcommerce.com/product-cam-pro/"
                                                                            tabindex="0">
                                                                            <div class="card-img-container">
                                                                                <img src="@/assets/component/images/15__56115.jpg"
                                                                                    alt="Product Cam Pro"
                                                                                    title="Product Cam Pro"
                                                                                    data-sizes="auto"
                                                                                    srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/28/663/15__56115.1516601254.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/28/663/15__56115.1516601254.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/28/663/15__56115.1516601254.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/28/663/15__56115.1516601254.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/28/663/15__56115.1516601254.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/28/663/15__56115.1516601254.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/28/663/15__56115.1516601254.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/28/663/15__56115.1516601254.jpg?c=2 2560w"
                                                                                    data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/28/663/15__56115.1516601254.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/28/663/15__56115.1516601254.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/28/663/15__56115.1516601254.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/28/663/15__56115.1516601254.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/28/663/15__56115.1516601254.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/28/663/15__56115.1516601254.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/28/663/15__56115.1516601254.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/28/663/15__56115.1516601254.jpg?c=2 2560w"
                                                                                    class="card-image lazyautosizes lazyloaded"
                                                                                    sizes="220px">
                                                                            </div>
                                                                        </a>
                                                                        <!-- card figcaption was here -->
                                                                    </figure>
                                                                    <div class="card-body">
                                                                        <p class="card-text tmbrand-name"
                                                                            data-test-info-type="brandName">Microsoft</p>
                                                                        <h4 class="card-title">
                                                                            <a href="https://tmdemo1.mybigcommerce.com/product-cam-pro/"
                                                                                tabindex="0">Product Cam Pro</a>
                                                                        </h4>

                                                                        <div class="card-text prod-price"
                                                                            data-test-info-type="price">

                                                                            <div
                                                                                class="price-section price-section--withTax">
                                                                                <span data-product-price-with-tax=""
                                                                                    class="price price--withTax">$899.00</span>
                                                                            </div>
                                                                            <div class="price-section price-section--withTax non-sale-price--withTax"
                                                                                style="display: none;">
                                                                                <span
                                                                                    data-product-non-sale-price-with-tax=""
                                                                                    class="price price--non-sale">

                                                                                </span>
                                                                            </div>
                                                                        </div>


                                                                        <figcaption class="card-figcaption">
                                                                            <div class="card-figcaption-body">
                                                                                <a href="https://tmdemo1.mybigcommerce.com/#"
                                                                                    class="button button--small card-figcaption-button quickview"
                                                                                    data-product-id="28" tabindex="0">Quick
                                                                                    view</a>
                                                                                <label
                                                                                    class="button button--small card-figcaption-button tm-compare"
                                                                                    title="Compare" for="compare-28">
                                                                                    Compare <input type="checkbox"
                                                                                        class="tm-cmcheck" name="products[]"
                                                                                        value="28" id="compare-28"
                                                                                        data-compare-id="28" tabindex="0">
                                                                                </label>
                                                                                <a href="https://tmdemo1.mybigcommerce.com/product-cam-pro/"
                                                                                    data-event-type="product-click"
                                                                                    class="button button--small card-figcaption-button addtocart"
                                                                                    title="Choose Options"
                                                                                    data-product-id="28" tabindex="0">Choose
                                                                                    Options</a>
                                                                            </div>
                                                                        </figcaption>


                                                                    </div>
                                                                </article>
                                                            </div>
                                                            <div class="productCarousel-slide slick-slide slick-active"
                                                                style="width: 243px;" tabindex="0" role="tabpanel"
                                                                id="slick-slide11" aria-describedby="slick-slide-control11"
                                                                data-slick-index="1" aria-hidden="false">


                                                                <article class="card ">
                                                                    <figure class="card-figure">
                                                                        <div class="sale-flag-side">
                                                                            <span class="sale-text">Sale!</span>
                                                                        </div>
                                                                        <a href="https://tmdemo1.mybigcommerce.com/black-n-white-suit/"
                                                                            tabindex="0">
                                                                            <div class="card-img-container">
                                                                                <img src="@/assets/component/images/6__72037.jpg"
                                                                                    alt="Black n White  Suit"
                                                                                    title="Black n White  Suit"
                                                                                    data-sizes="auto"
                                                                                    srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/27/351/6__72037.1593434297.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/27/351/6__72037.1593434297.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/27/351/6__72037.1593434297.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/27/351/6__72037.1593434297.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/27/351/6__72037.1593434297.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/27/351/6__72037.1593434297.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/27/351/6__72037.1593434297.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/27/351/6__72037.1593434297.jpg?c=2 2560w"
                                                                                    data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/27/351/6__72037.1593434297.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/27/351/6__72037.1593434297.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/27/351/6__72037.1593434297.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/27/351/6__72037.1593434297.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/27/351/6__72037.1593434297.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/27/351/6__72037.1593434297.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/27/351/6__72037.1593434297.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/27/351/6__72037.1593434297.jpg?c=2 2560w"
                                                                                    class="card-image lazyautosizes lazyloaded"
                                                                                    sizes="220px">
                                                                            </div>
                                                                        </a>
                                                                        <!-- card figcaption was here -->
                                                                    </figure>
                                                                    <div class="card-body">
                                                                        <p class="card-text tmbrand-name"
                                                                            data-test-info-type="brandName">Levis</p>
                                                                        <h4 class="card-title">
                                                                            <a href="https://tmdemo1.mybigcommerce.com/black-n-white-suit/"
                                                                                tabindex="0">Black n White Suit</a>
                                                                        </h4>

                                                                        <div class="card-text prod-price"
                                                                            data-test-info-type="price">

                                                                            <div
                                                                                class="price-section price-section--withTax">
                                                                                <span data-product-price-with-tax=""
                                                                                    class="price price--withTax">$59.00</span>
                                                                            </div>
                                                                            <div
                                                                                class="price-section price-section--withTax non-sale-price--withTax">
                                                                                <span
                                                                                    data-product-non-sale-price-with-tax=""
                                                                                    class="price price--non-sale">
                                                                                    $359.00
                                                                                </span>
                                                                            </div>
                                                                        </div>


                                                                        <figcaption class="card-figcaption">
                                                                            <div class="card-figcaption-body">
                                                                                <a href="https://tmdemo1.mybigcommerce.com/#"
                                                                                    class="button button--small card-figcaption-button quickview"
                                                                                    data-product-id="27" tabindex="0">Quick
                                                                                    view</a>
                                                                                <label
                                                                                    class="button button--small card-figcaption-button tm-compare"
                                                                                    title="Compare" for="compare-27">
                                                                                    Compare <input type="checkbox"
                                                                                        class="tm-cmcheck" name="products[]"
                                                                                        value="27" id="compare-27"
                                                                                        data-compare-id="27" tabindex="0">
                                                                                </label>
                                                                                <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=27"
                                                                                    data-event-type="product-click"
                                                                                    title="Add to Cart"
                                                                                    class="button button--small card-figcaption-button addtocart"
                                                                                    tabindex="0">Add to Cart</a>
                                                                            </div>
                                                                        </figcaption>


                                                                    </div>
                                                                </article>
                                                            </div>
                                                            <div class="productCarousel-slide slick-slide slick-active"
                                                                style="width: 243px;" tabindex="0" role="tabpanel"
                                                                id="slick-slide12" aria-describedby="slick-slide-control12"
                                                                data-slick-index="2" aria-hidden="false">


                                                                <article class="card ">
                                                                    <figure class="card-figure">
                                                                        <div class="sale-flag-side">
                                                                            <span class="sale-text">Sale!</span>
                                                                        </div>
                                                                        <a href="https://tmdemo1.mybigcommerce.com/apple-ipod-socks/"
                                                                            tabindex="0">
                                                                            <div class="card-img-container">
                                                                                <img src="@/assets/component/images/13__01672.jpg"
                                                                                    alt="Apple iPod Socks"
                                                                                    title="Apple iPod Socks"
                                                                                    data-sizes="auto"
                                                                                    srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/24/661/13__01672.1593434302.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/24/661/13__01672.1593434302.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/24/661/13__01672.1593434302.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/24/661/13__01672.1593434302.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/24/661/13__01672.1593434302.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/24/661/13__01672.1593434302.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/24/661/13__01672.1593434302.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/24/661/13__01672.1593434302.jpg?c=2 2560w"
                                                                                    data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/24/661/13__01672.1593434302.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/24/661/13__01672.1593434302.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/24/661/13__01672.1593434302.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/24/661/13__01672.1593434302.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/24/661/13__01672.1593434302.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/24/661/13__01672.1593434302.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/24/661/13__01672.1593434302.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/24/661/13__01672.1593434302.jpg?c=2 2560w"
                                                                                    class="card-image lazyautosizes lazyloaded"
                                                                                    sizes="220px">
                                                                            </div>
                                                                        </a>
                                                                        <!-- card figcaption was here -->
                                                                    </figure>
                                                                    <div class="card-body">
                                                                        <p class="card-text tmbrand-name"
                                                                            data-test-info-type="brandName">Elgato</p>
                                                                        <h4 class="card-title">
                                                                            <a href="https://tmdemo1.mybigcommerce.com/apple-ipod-socks/"
                                                                                tabindex="0">Apple iPod Socks</a>
                                                                        </h4>

                                                                        <div class="card-text prod-price"
                                                                            data-test-info-type="price">

                                                                            <div
                                                                                class="price-section price-section--withTax">
                                                                                <span data-product-price-with-tax=""
                                                                                    class="price price--withTax">$19.00</span>
                                                                            </div>
                                                                            <div
                                                                                class="price-section price-section--withTax non-sale-price--withTax">
                                                                                <span
                                                                                    data-product-non-sale-price-with-tax=""
                                                                                    class="price price--non-sale">
                                                                                    $29.00
                                                                                </span>
                                                                            </div>
                                                                        </div>


                                                                        <figcaption class="card-figcaption">
                                                                            <div class="card-figcaption-body">
                                                                                <a href="https://tmdemo1.mybigcommerce.com/#"
                                                                                    class="button button--small card-figcaption-button quickview"
                                                                                    data-product-id="24" tabindex="0">Quick
                                                                                    view</a>
                                                                                <label
                                                                                    class="button button--small card-figcaption-button tm-compare"
                                                                                    title="Compare" for="compare-24">
                                                                                    Compare <input type="checkbox"
                                                                                        class="tm-cmcheck" name="products[]"
                                                                                        value="24" id="compare-24"
                                                                                        data-compare-id="24" tabindex="0">
                                                                                </label>
                                                                                <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=24"
                                                                                    data-event-type="product-click"
                                                                                    title="Add to Cart"
                                                                                    class="button button--small card-figcaption-button addtocart"
                                                                                    tabindex="0">Add to Cart</a>
                                                                            </div>
                                                                        </figcaption>


                                                                    </div>
                                                                </article>
                                                            </div>
                                                            <div class="productCarousel-slide slick-slide slick-active"
                                                                style="width: 243px;" tabindex="0" role="tabpanel"
                                                                id="slick-slide13" aria-describedby="slick-slide-control13"
                                                                data-slick-index="3" aria-hidden="false">


                                                                <article class="card ">
                                                                    <figure class="card-figure">
                                                                        <a href="https://tmdemo1.mybigcommerce.com/embarrassment-bag/"
                                                                            tabindex="0">
                                                                            <div class="card-img-container">
                                                                                <img src="@/assets/component/images/10__74773.jpg"
                                                                                    alt="Embarrassment Bag"
                                                                                    title="Embarrassment Bag"
                                                                                    data-sizes="auto"
                                                                                    srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/18/638/10__74773.1593433989.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/18/638/10__74773.1593433989.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/18/638/10__74773.1593433989.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/18/638/10__74773.1593433989.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/18/638/10__74773.1593433989.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/18/638/10__74773.1593433989.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/18/638/10__74773.1593433989.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/18/638/10__74773.1593433989.jpg?c=2 2560w"
                                                                                    data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/18/638/10__74773.1593433989.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/18/638/10__74773.1593433989.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/18/638/10__74773.1593433989.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/18/638/10__74773.1593433989.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/18/638/10__74773.1593433989.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/18/638/10__74773.1593433989.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/18/638/10__74773.1593433989.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/18/638/10__74773.1593433989.jpg?c=2 2560w"
                                                                                    class="card-image lazyautosizes lazyloaded"
                                                                                    sizes="220px">
                                                                            </div>
                                                                        </a>
                                                                        <!-- card figcaption was here -->
                                                                    </figure>
                                                                    <div class="card-body">
                                                                        <p class="card-text tmbrand-name"
                                                                            data-test-info-type="brandName">Logitech</p>
                                                                        <h4 class="card-title">
                                                                            <a href="https://tmdemo1.mybigcommerce.com/embarrassment-bag/"
                                                                                tabindex="0">Embarrassment Bag</a>
                                                                        </h4>

                                                                        <div class="card-text prod-price"
                                                                            data-test-info-type="price">

                                                                            <div
                                                                                class="price-section price-section--withTax">
                                                                                <span data-product-price-with-tax=""
                                                                                    class="price price--withTax">$89.95</span>
                                                                            </div>
                                                                            <div class="price-section price-section--withTax non-sale-price--withTax"
                                                                                style="display: none;">
                                                                                <span
                                                                                    data-product-non-sale-price-with-tax=""
                                                                                    class="price price--non-sale">

                                                                                </span>
                                                                            </div>
                                                                        </div>


                                                                        <figcaption class="card-figcaption">
                                                                            <div class="card-figcaption-body">
                                                                                <a href="https://tmdemo1.mybigcommerce.com/#"
                                                                                    class="button button--small card-figcaption-button quickview"
                                                                                    data-product-id="18" tabindex="0">Quick
                                                                                    view</a>
                                                                                <label
                                                                                    class="button button--small card-figcaption-button tm-compare"
                                                                                    title="Compare" for="compare-18">
                                                                                    Compare <input type="checkbox"
                                                                                        class="tm-cmcheck" name="products[]"
                                                                                        value="18" id="compare-18"
                                                                                        data-compare-id="18" tabindex="0">
                                                                                </label>
                                                                                <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=18"
                                                                                    data-event-type="product-click"
                                                                                    title="Add to Cart"
                                                                                    class="button button--small card-figcaption-button addtocart"
                                                                                    tabindex="0">Add to Cart</a>
                                                                            </div>
                                                                        </figcaption>


                                                                    </div>
                                                                </article>
                                                            </div>
                                                            <div class="productCarousel-slide slick-slide"
                                                                style="width: 243px;" tabindex="-1" role="tabpanel"
                                                                id="slick-slide14" aria-describedby="slick-slide-control14"
                                                                data-slick-index="4" aria-hidden="true">


                                                                <article class="card ">
                                                                    <figure class="card-figure">
                                                                        <div class="sale-flag-side">
                                                                            <span class="sale-text">Sale!</span>
                                                                        </div>
                                                                        <a href="https://tmdemo1.mybigcommerce.com/special-media-edition/"
                                                                            tabindex="-1">
                                                                            <div class="card-img-container">
                                                                                <img src="@/assets/component/images/12__10993.jpg"
                                                                                    alt="Special Media Edition"
                                                                                    title="Special Media Edition"
                                                                                    data-sizes="auto"
                                                                                    srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/11/660/12__10993.1593434312.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/11/660/12__10993.1593434312.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/11/660/12__10993.1593434312.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/11/660/12__10993.1593434312.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/11/660/12__10993.1593434312.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/11/660/12__10993.1593434312.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/11/660/12__10993.1593434312.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/11/660/12__10993.1593434312.jpg?c=2 2560w"
                                                                                    data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/11/660/12__10993.1593434312.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/11/660/12__10993.1593434312.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/11/660/12__10993.1593434312.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/11/660/12__10993.1593434312.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/11/660/12__10993.1593434312.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/11/660/12__10993.1593434312.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/11/660/12__10993.1593434312.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/11/660/12__10993.1593434312.jpg?c=2 2560w"
                                                                                    class="card-image lazyautosizes lazyloaded"
                                                                                    sizes="220px">
                                                                            </div>
                                                                        </a>
                                                                        <!-- card figcaption was here -->
                                                                    </figure>
                                                                    <div class="card-body">
                                                                        <p class="card-text tmbrand-name"
                                                                            data-test-info-type="brandName">Microsoft</p>
                                                                        <h4 class="card-title">
                                                                            <a href="https://tmdemo1.mybigcommerce.com/special-media-edition/"
                                                                                tabindex="-1">Special Media Edition</a>
                                                                        </h4>

                                                                        <div class="card-text prod-price"
                                                                            data-test-info-type="price">

                                                                            <div
                                                                                class="price-section price-section--withTax">
                                                                                <span data-product-price-with-tax=""
                                                                                    class="price price--withTax">$399.45</span>
                                                                            </div>
                                                                            <div
                                                                                class="price-section price-section--withTax non-sale-price--withTax">
                                                                                <span
                                                                                    data-product-non-sale-price-with-tax=""
                                                                                    class="price price--non-sale">
                                                                                    $499.95
                                                                                </span>
                                                                            </div>
                                                                        </div>


                                                                        <figcaption class="card-figcaption">
                                                                            <div class="card-figcaption-body">
                                                                                <a href="https://tmdemo1.mybigcommerce.com/#"
                                                                                    class="button button--small card-figcaption-button quickview"
                                                                                    data-product-id="11" tabindex="-1">Quick
                                                                                    view</a>
                                                                                <label
                                                                                    class="button button--small card-figcaption-button tm-compare"
                                                                                    title="Compare" for="compare-11">
                                                                                    Compare <input type="checkbox"
                                                                                        class="tm-cmcheck" name="products[]"
                                                                                        value="11" id="compare-11"
                                                                                        data-compare-id="11" tabindex="-1">
                                                                                </label>
                                                                                <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=11"
                                                                                    data-event-type="product-click"
                                                                                    title="Add to Cart"
                                                                                    class="button button--small card-figcaption-button addtocart"
                                                                                    tabindex="-1">Add to Cart</a>
                                                                            </div>
                                                                        </figcaption>


                                                                    </div>
                                                                </article>
                                                            </div>
                                                        </div>
                                                    </div><button class="slick-next slick-arrow" aria-label="Next"
                                                        type="button" style="" aria-disabled="false">Next</button>
                                                    <ul class="slick-dots" style="display: block;" role="tablist">
                                                        <li class="slick-active" role="presentation"><button type="button"
                                                                role="tab" id="slick-slide-control10"
                                                                aria-controls="slick-slide10" aria-label="1 of 2"
                                                                tabindex="0" aria-selected="true">1</button></li>
                                                        <li role="presentation"><button type="button" role="tab"
                                                                id="slick-slide-control11" aria-controls="slick-slide11"
                                                                aria-label="2 of 2" tabindex="-1">2</button></li>
                                                    </ul>
                                                </section>


                                            </div>
                                            <div class="tab-content has-jsContent" id="tab-best" role="tabpanel">

                                                <section class="productCarousel slick-initialized slick-slider slick-dotted"
                                                    data-list-name="" data-slick="{
  &quot;dots&quot;: true,
  &quot;infinite&quot;: false,
  &quot;mobileFirst&quot;: true,
  &quot;slidesToShow&quot;: 2,
  &quot;slidesToScroll&quot;: 1,
  &quot;responsive&quot;: [
      {
          &quot;breakpoint&quot;: 1300,
          &quot;settings&quot;: {
              &quot;slidesToScroll&quot;: 1,
              &quot;slidesToShow&quot;: 4
          }
      },
      {
          &quot;breakpoint&quot;: 800,
          &quot;settings&quot;: {
              &quot;slidesToScroll&quot;: 1,
              &quot;slidesToShow&quot;: 3
          }
      },
      {
          &quot;breakpoint&quot;: 550,
          &quot;settings&quot;: {
              &quot;slidesToScroll&quot;: 1,
              &quot;slidesToShow&quot;: 3
          }
      }
  ]
  }"><button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true"
                                                        style="">Previous</button>








                                                    <div class="slick-list draggable">
                                                        <div class="slick-track"
                                                            style="opacity: 1; width: 1944px; transform: translate3d(0px, 0px, 0px);">
                                                            <div class="productCarousel-slide slick-slide slick-current slick-active"
                                                                style="width: 243px;" tabindex="0" role="tabpanel"
                                                                id="slick-slide20" aria-describedby="slick-slide-control20"
                                                                data-slick-index="0" aria-hidden="false">


                                                                <article class="card ">
                                                                    <figure class="card-figure">
                                                                        <a href="https://tmdemo1.mybigcommerce.com/balck-pro-camera/"
                                                                            tabindex="0">
                                                                            <div class="card-img-container">
                                                                                <img src="@/assets/component/images/14__91637.jpg"
                                                                                    alt="Balck Pro Camera"
                                                                                    title="Balck Pro Camera"
                                                                                    data-sizes="auto"
                                                                                    srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/50/636/14__91637.1593434112.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/50/636/14__91637.1593434112.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/50/636/14__91637.1593434112.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/50/636/14__91637.1593434112.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/50/636/14__91637.1593434112.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/50/636/14__91637.1593434112.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/50/636/14__91637.1593434112.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/50/636/14__91637.1593434112.jpg?c=2 2560w"
                                                                                    data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/50/636/14__91637.1593434112.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/50/636/14__91637.1593434112.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/50/636/14__91637.1593434112.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/50/636/14__91637.1593434112.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/50/636/14__91637.1593434112.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/50/636/14__91637.1593434112.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/50/636/14__91637.1593434112.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/50/636/14__91637.1593434112.jpg?c=2 2560w"
                                                                                    class="card-image lazyautosizes lazyloaded"
                                                                                    sizes="220px">
                                                                            </div>
                                                                        </a>
                                                                        <!-- card figcaption was here -->
                                                                    </figure>
                                                                    <div class="card-body">
                                                                        <p class="card-text tmbrand-name"
                                                                            data-test-info-type="brandName">Crumpler</p>
                                                                        <h4 class="card-title">
                                                                            <a href="https://tmdemo1.mybigcommerce.com/balck-pro-camera/"
                                                                                tabindex="0">Balck Pro Camera</a>
                                                                        </h4>

                                                                        <div class="card-text prod-price"
                                                                            data-test-info-type="price">

                                                                            <div
                                                                                class="price-section price-section--withTax">
                                                                                <span data-product-price-with-tax=""
                                                                                    class="price price--withTax">$99.00</span>
                                                                            </div>
                                                                            <div class="price-section price-section--withTax non-sale-price--withTax"
                                                                                style="display: none;">
                                                                                <span
                                                                                    data-product-non-sale-price-with-tax=""
                                                                                    class="price price--non-sale">

                                                                                </span>
                                                                            </div>
                                                                        </div>


                                                                        <figcaption class="card-figcaption">
                                                                            <div class="card-figcaption-body">
                                                                                <a href="https://tmdemo1.mybigcommerce.com/#"
                                                                                    class="button button--small card-figcaption-button quickview"
                                                                                    data-product-id="50" tabindex="0">Quick
                                                                                    view</a>
                                                                                <label
                                                                                    class="button button--small card-figcaption-button tm-compare"
                                                                                    title="Compare" for="compare-50">
                                                                                    Compare <input type="checkbox"
                                                                                        class="tm-cmcheck" name="products[]"
                                                                                        value="50" id="compare-50"
                                                                                        data-compare-id="50" tabindex="0">
                                                                                </label>
                                                                                <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=50"
                                                                                    data-event-type="product-click"
                                                                                    title="Add to Cart"
                                                                                    class="button button--small card-figcaption-button addtocart"
                                                                                    tabindex="0">Add to Cart</a>
                                                                            </div>
                                                                        </figcaption>


                                                                    </div>
                                                                </article>
                                                            </div>
                                                            <div class="productCarousel-slide slick-slide slick-active"
                                                                style="width: 243px;" tabindex="0" role="tabpanel"
                                                                id="slick-slide21" aria-describedby="slick-slide-control21"
                                                                data-slick-index="1" aria-hidden="false">


                                                                <article class="card ">
                                                                    <figure class="card-figure">
                                                                        <div class="sale-flag-side">
                                                                            <span class="sale-text">Sale!</span>
                                                                        </div>
                                                                        <a href="https://tmdemo1.mybigcommerce.com/apple-ipod-socks/"
                                                                            tabindex="0">
                                                                            <div class="card-img-container">
                                                                                <img src="@/assets/component/images/13__01672.jpg"
                                                                                    alt="Apple iPod Socks"
                                                                                    title="Apple iPod Socks"
                                                                                    data-sizes="auto"
                                                                                    srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/24/661/13__01672.1593434302.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/24/661/13__01672.1593434302.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/24/661/13__01672.1593434302.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/24/661/13__01672.1593434302.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/24/661/13__01672.1593434302.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/24/661/13__01672.1593434302.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/24/661/13__01672.1593434302.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/24/661/13__01672.1593434302.jpg?c=2 2560w"
                                                                                    data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/24/661/13__01672.1593434302.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/24/661/13__01672.1593434302.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/24/661/13__01672.1593434302.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/24/661/13__01672.1593434302.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/24/661/13__01672.1593434302.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/24/661/13__01672.1593434302.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/24/661/13__01672.1593434302.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/24/661/13__01672.1593434302.jpg?c=2 2560w"
                                                                                    class="card-image lazyautosizes ls-is-cached lazyloaded"
                                                                                    sizes="220px">
                                                                            </div>
                                                                        </a>
                                                                        <!-- card figcaption was here -->
                                                                    </figure>
                                                                    <div class="card-body">
                                                                        <p class="card-text tmbrand-name"
                                                                            data-test-info-type="brandName">Elgato</p>
                                                                        <h4 class="card-title">
                                                                            <a href="https://tmdemo1.mybigcommerce.com/apple-ipod-socks/"
                                                                                tabindex="0">Apple iPod Socks</a>
                                                                        </h4>

                                                                        <div class="card-text prod-price"
                                                                            data-test-info-type="price">

                                                                            <div
                                                                                class="price-section price-section--withTax">
                                                                                <span data-product-price-with-tax=""
                                                                                    class="price price--withTax">$19.00</span>
                                                                            </div>
                                                                            <div
                                                                                class="price-section price-section--withTax non-sale-price--withTax">
                                                                                <span
                                                                                    data-product-non-sale-price-with-tax=""
                                                                                    class="price price--non-sale">
                                                                                    $29.00
                                                                                </span>
                                                                            </div>
                                                                        </div>


                                                                        <figcaption class="card-figcaption">
                                                                            <div class="card-figcaption-body">
                                                                                <a href="https://tmdemo1.mybigcommerce.com/#"
                                                                                    class="button button--small card-figcaption-button quickview"
                                                                                    data-product-id="24" tabindex="0">Quick
                                                                                    view</a>
                                                                                <label
                                                                                    class="button button--small card-figcaption-button tm-compare"
                                                                                    title="Compare" for="compare-24">
                                                                                    Compare <input type="checkbox"
                                                                                        class="tm-cmcheck" name="products[]"
                                                                                        value="24" id="compare-24"
                                                                                        data-compare-id="24" tabindex="0">
                                                                                </label>
                                                                                <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=24"
                                                                                    data-event-type="product-click"
                                                                                    title="Add to Cart"
                                                                                    class="button button--small card-figcaption-button addtocart"
                                                                                    tabindex="0">Add to Cart</a>
                                                                            </div>
                                                                        </figcaption>


                                                                    </div>
                                                                </article>
                                                            </div>
                                                            <div class="productCarousel-slide slick-slide slick-active"
                                                                style="width: 243px;" tabindex="0" role="tabpanel"
                                                                id="slick-slide22" aria-describedby="slick-slide-control22"
                                                                data-slick-index="2" aria-hidden="false">


                                                                <article class="card ">
                                                                    <figure class="card-figure">
                                                                        <div class="sale-flag-side">
                                                                            <span class="sale-text">Sale!</span>
                                                                        </div>
                                                                        <a href="https://tmdemo1.mybigcommerce.com/black-n-white-suit/"
                                                                            tabindex="0">
                                                                            <div class="card-img-container">
                                                                                <img src="@/assets/component/images/6__72037.jpg"
                                                                                    alt="Black n White  Suit"
                                                                                    title="Black n White  Suit"
                                                                                    data-sizes="auto"
                                                                                    srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/27/351/6__72037.1593434297.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/27/351/6__72037.1593434297.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/27/351/6__72037.1593434297.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/27/351/6__72037.1593434297.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/27/351/6__72037.1593434297.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/27/351/6__72037.1593434297.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/27/351/6__72037.1593434297.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/27/351/6__72037.1593434297.jpg?c=2 2560w"
                                                                                    data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/27/351/6__72037.1593434297.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/27/351/6__72037.1593434297.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/27/351/6__72037.1593434297.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/27/351/6__72037.1593434297.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/27/351/6__72037.1593434297.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/27/351/6__72037.1593434297.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/27/351/6__72037.1593434297.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/27/351/6__72037.1593434297.jpg?c=2 2560w"
                                                                                    class="card-image lazyautosizes ls-is-cached lazyloaded"
                                                                                    sizes="220px">
                                                                            </div>
                                                                        </a>
                                                                        <!-- card figcaption was here -->
                                                                    </figure>
                                                                    <div class="card-body">
                                                                        <p class="card-text tmbrand-name"
                                                                            data-test-info-type="brandName">Levis</p>
                                                                        <h4 class="card-title">
                                                                            <a href="https://tmdemo1.mybigcommerce.com/black-n-white-suit/"
                                                                                tabindex="0">Black n White Suit</a>
                                                                        </h4>

                                                                        <div class="card-text prod-price"
                                                                            data-test-info-type="price">

                                                                            <div
                                                                                class="price-section price-section--withTax">
                                                                                <span data-product-price-with-tax=""
                                                                                    class="price price--withTax">$59.00</span>
                                                                            </div>
                                                                            <div
                                                                                class="price-section price-section--withTax non-sale-price--withTax">
                                                                                <span
                                                                                    data-product-non-sale-price-with-tax=""
                                                                                    class="price price--non-sale">
                                                                                    $359.00
                                                                                </span>
                                                                            </div>
                                                                        </div>


                                                                        <figcaption class="card-figcaption">
                                                                            <div class="card-figcaption-body">
                                                                                <a href="https://tmdemo1.mybigcommerce.com/#"
                                                                                    class="button button--small card-figcaption-button quickview"
                                                                                    data-product-id="27" tabindex="0">Quick
                                                                                    view</a>
                                                                                <label
                                                                                    class="button button--small card-figcaption-button tm-compare"
                                                                                    title="Compare" for="compare-27">
                                                                                    Compare <input type="checkbox"
                                                                                        class="tm-cmcheck" name="products[]"
                                                                                        value="27" id="compare-27"
                                                                                        data-compare-id="27" tabindex="0">
                                                                                </label>
                                                                                <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=27"
                                                                                    data-event-type="product-click"
                                                                                    title="Add to Cart"
                                                                                    class="button button--small card-figcaption-button addtocart"
                                                                                    tabindex="0">Add to Cart</a>
                                                                            </div>
                                                                        </figcaption>


                                                                    </div>
                                                                </article>
                                                            </div>
                                                            <div class="productCarousel-slide slick-slide slick-active"
                                                                style="width: 243px;" tabindex="0" role="tabpanel"
                                                                id="slick-slide23" aria-describedby="slick-slide-control23"
                                                                data-slick-index="3" aria-hidden="false">


                                                                <article class="card ">
                                                                    <figure class="card-figure">
                                                                        <a href="https://tmdemo1.mybigcommerce.com/product-cam-pro/"
                                                                            tabindex="0">
                                                                            <div class="card-img-container">
                                                                                <img src="@/assets/component/images/15__56115.jpg"
                                                                                    alt="Product Cam Pro"
                                                                                    title="Product Cam Pro"
                                                                                    data-sizes="auto"
                                                                                    srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/28/663/15__56115.1516601254.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/28/663/15__56115.1516601254.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/28/663/15__56115.1516601254.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/28/663/15__56115.1516601254.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/28/663/15__56115.1516601254.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/28/663/15__56115.1516601254.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/28/663/15__56115.1516601254.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/28/663/15__56115.1516601254.jpg?c=2 2560w"
                                                                                    data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/28/663/15__56115.1516601254.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/28/663/15__56115.1516601254.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/28/663/15__56115.1516601254.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/28/663/15__56115.1516601254.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/28/663/15__56115.1516601254.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/28/663/15__56115.1516601254.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/28/663/15__56115.1516601254.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/28/663/15__56115.1516601254.jpg?c=2 2560w"
                                                                                    class="card-image lazyautosizes ls-is-cached lazyloaded"
                                                                                    sizes="220px">
                                                                            </div>
                                                                        </a>
                                                                        <!-- card figcaption was here -->
                                                                    </figure>
                                                                    <div class="card-body">
                                                                        <p class="card-text tmbrand-name"
                                                                            data-test-info-type="brandName">Microsoft</p>
                                                                        <h4 class="card-title">
                                                                            <a href="https://tmdemo1.mybigcommerce.com/product-cam-pro/"
                                                                                tabindex="0">Product Cam Pro</a>
                                                                        </h4>

                                                                        <div class="card-text prod-price"
                                                                            data-test-info-type="price">

                                                                            <div
                                                                                class="price-section price-section--withTax">
                                                                                <span data-product-price-with-tax=""
                                                                                    class="price price--withTax">$899.00</span>
                                                                            </div>
                                                                            <div class="price-section price-section--withTax non-sale-price--withTax"
                                                                                style="display: none;">
                                                                                <span
                                                                                    data-product-non-sale-price-with-tax=""
                                                                                    class="price price--non-sale">

                                                                                </span>
                                                                            </div>
                                                                        </div>


                                                                        <figcaption class="card-figcaption">
                                                                            <div class="card-figcaption-body">
                                                                                <a href="https://tmdemo1.mybigcommerce.com/#"
                                                                                    class="button button--small card-figcaption-button quickview"
                                                                                    data-product-id="28" tabindex="0">Quick
                                                                                    view</a>
                                                                                <label
                                                                                    class="button button--small card-figcaption-button tm-compare"
                                                                                    title="Compare" for="compare-28">
                                                                                    Compare <input type="checkbox"
                                                                                        class="tm-cmcheck" name="products[]"
                                                                                        value="28" id="compare-28"
                                                                                        data-compare-id="28" tabindex="0">
                                                                                </label>
                                                                                <a href="https://tmdemo1.mybigcommerce.com/product-cam-pro/"
                                                                                    data-event-type="product-click"
                                                                                    class="button button--small card-figcaption-button addtocart"
                                                                                    title="Choose Options"
                                                                                    data-product-id="28" tabindex="0">Choose
                                                                                    Options</a>
                                                                            </div>
                                                                        </figcaption>


                                                                    </div>
                                                                </article>
                                                            </div>
                                                            <div class="productCarousel-slide slick-slide"
                                                                style="width: 243px;" tabindex="-1" role="tabpanel"
                                                                id="slick-slide24" aria-describedby="slick-slide-control24"
                                                                data-slick-index="4" aria-hidden="true">


                                                                <article class="card ">
                                                                    <figure class="card-figure">
                                                                        <a href="https://tmdemo1.mybigcommerce.com/mamba-saddle/"
                                                                            tabindex="-1">
                                                                            <div class="card-img-container">
                                                                                <img src="@/assets/component/images/1__29610.jpg"
                                                                                    alt="Mamba Saddle" title="Mamba Saddle"
                                                                                    data-sizes="auto"
                                                                                    srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/21/637/1__29610.1516598202.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/21/637/1__29610.1516598202.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/21/637/1__29610.1516598202.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/21/637/1__29610.1516598202.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/21/637/1__29610.1516598202.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/21/637/1__29610.1516598202.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/21/637/1__29610.1516598202.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/21/637/1__29610.1516598202.jpg?c=2 2560w"
                                                                                    data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/21/637/1__29610.1516598202.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/21/637/1__29610.1516598202.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/21/637/1__29610.1516598202.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/21/637/1__29610.1516598202.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/21/637/1__29610.1516598202.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/21/637/1__29610.1516598202.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/21/637/1__29610.1516598202.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/21/637/1__29610.1516598202.jpg?c=2 2560w"
                                                                                    class="card-image lazyautosizes lazyloaded"
                                                                                    sizes="220px">
                                                                            </div>
                                                                        </a>
                                                                        <!-- card figcaption was here -->
                                                                    </figure>
                                                                    <div class="card-body">
                                                                        <p class="card-text tmbrand-name"
                                                                            data-test-info-type="brandName">Crumpler</p>
                                                                        <h4 class="card-title">
                                                                            <a href="https://tmdemo1.mybigcommerce.com/mamba-saddle/"
                                                                                tabindex="-1">Mamba Saddle</a>
                                                                        </h4>

                                                                        <div class="card-text prod-price"
                                                                            data-test-info-type="price">

                                                                            <div
                                                                                class="price-section price-section--withTax">
                                                                                <span data-product-price-with-tax=""
                                                                                    class="price price--withTax">$124.95</span>
                                                                            </div>
                                                                            <div class="price-section price-section--withTax non-sale-price--withTax"
                                                                                style="display: none;">
                                                                                <span
                                                                                    data-product-non-sale-price-with-tax=""
                                                                                    class="price price--non-sale">

                                                                                </span>
                                                                            </div>
                                                                        </div>


                                                                        <figcaption class="card-figcaption">
                                                                            <div class="card-figcaption-body">
                                                                                <a href="https://tmdemo1.mybigcommerce.com/#"
                                                                                    class="button button--small card-figcaption-button quickview"
                                                                                    data-product-id="21" tabindex="-1">Quick
                                                                                    view</a>
                                                                                <label
                                                                                    class="button button--small card-figcaption-button tm-compare"
                                                                                    title="Compare" for="compare-21">
                                                                                    Compare <input type="checkbox"
                                                                                        class="tm-cmcheck" name="products[]"
                                                                                        value="21" id="compare-21"
                                                                                        data-compare-id="21" tabindex="-1">
                                                                                </label>
                                                                                <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=21"
                                                                                    data-event-type="product-click"
                                                                                    title="Add to Cart"
                                                                                    class="button button--small card-figcaption-button addtocart"
                                                                                    tabindex="-1">Add to Cart</a>
                                                                            </div>
                                                                        </figcaption>


                                                                    </div>
                                                                </article>
                                                            </div>
                                                            <div class="productCarousel-slide slick-slide"
                                                                style="width: 243px;" tabindex="-1" role="tabpanel"
                                                                id="slick-slide25" aria-describedby="slick-slide-control25"
                                                                data-slick-index="5" aria-hidden="true">


                                                                <article class="card ">
                                                                    <figure class="card-figure">
                                                                        <div class="sale-flag-side">
                                                                            <span class="sale-text">Sale!</span>
                                                                        </div>
                                                                        <a href="https://tmdemo1.mybigcommerce.com/ladies-skaff/"
                                                                            tabindex="-1">
                                                                            <div class="card-img-container">
                                                                                <img src="@/assets/component/images/18__98178.jpg"
                                                                                    alt="Ladies skaff" title="Ladies skaff"
                                                                                    data-sizes="auto"
                                                                                    srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/53/643/18__98178.1593433916.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/53/643/18__98178.1593433916.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/53/643/18__98178.1593433916.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/53/643/18__98178.1593433916.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/53/643/18__98178.1593433916.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/53/643/18__98178.1593433916.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/53/643/18__98178.1593433916.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/53/643/18__98178.1593433916.jpg?c=2 2560w"
                                                                                    data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/53/643/18__98178.1593433916.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/53/643/18__98178.1593433916.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/53/643/18__98178.1593433916.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/53/643/18__98178.1593433916.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/53/643/18__98178.1593433916.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/53/643/18__98178.1593433916.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/53/643/18__98178.1593433916.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/53/643/18__98178.1593433916.jpg?c=2 2560w"
                                                                                    class="card-image lazyautosizes lazyloaded"
                                                                                    sizes="220px">
                                                                            </div>
                                                                        </a>
                                                                        <!-- card figcaption was here -->
                                                                    </figure>
                                                                    <div class="card-body">
                                                                        <p class="card-text tmbrand-name"
                                                                            data-test-info-type="brandName">Levis</p>
                                                                        <h4 class="card-title">
                                                                            <a href="https://tmdemo1.mybigcommerce.com/ladies-skaff/"
                                                                                tabindex="-1">Ladies skaff</a>
                                                                        </h4>

                                                                        <div class="card-text prod-price"
                                                                            data-test-info-type="price">

                                                                            <div
                                                                                class="price-section price-section--withTax">
                                                                                <span data-product-price-with-tax=""
                                                                                    class="price price--withTax">$14.23</span>
                                                                            </div>
                                                                            <div
                                                                                class="price-section price-section--withTax non-sale-price--withTax">
                                                                                <span
                                                                                    data-product-non-sale-price-with-tax=""
                                                                                    class="price price--non-sale">
                                                                                    $19.00
                                                                                </span>
                                                                            </div>
                                                                        </div>


                                                                        <figcaption class="card-figcaption">
                                                                            <div class="card-figcaption-body">
                                                                                <a href="https://tmdemo1.mybigcommerce.com/#"
                                                                                    class="button button--small card-figcaption-button quickview"
                                                                                    data-product-id="53" tabindex="-1">Quick
                                                                                    view</a>
                                                                                <label
                                                                                    class="button button--small card-figcaption-button tm-compare"
                                                                                    title="Compare" for="compare-53">
                                                                                    Compare <input type="checkbox"
                                                                                        class="tm-cmcheck" name="products[]"
                                                                                        value="53" id="compare-53"
                                                                                        data-compare-id="53" tabindex="-1">
                                                                                </label>
                                                                                <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=53"
                                                                                    data-event-type="product-click"
                                                                                    title="Add to Cart"
                                                                                    class="button button--small card-figcaption-button addtocart"
                                                                                    tabindex="-1">Add to Cart</a>
                                                                            </div>
                                                                        </figcaption>


                                                                    </div>
                                                                </article>
                                                            </div>
                                                            <div class="productCarousel-slide slick-slide"
                                                                style="width: 243px;" tabindex="-1" role="tabpanel"
                                                                id="slick-slide26" aria-describedby="slick-slide-control26"
                                                                data-slick-index="6" aria-hidden="true">


                                                                <article class="card ">
                                                                    <figure class="card-figure">
                                                                        <a href="https://tmdemo1.mybigcommerce.com/embarrassment-bag/"
                                                                            tabindex="-1">
                                                                            <div class="card-img-container">
                                                                                <img src="@/assets/component/images/10__74773.jpg"
                                                                                    alt="Embarrassment Bag"
                                                                                    title="Embarrassment Bag"
                                                                                    data-sizes="auto"
                                                                                    srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/18/638/10__74773.1593433989.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/18/638/10__74773.1593433989.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/18/638/10__74773.1593433989.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/18/638/10__74773.1593433989.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/18/638/10__74773.1593433989.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/18/638/10__74773.1593433989.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/18/638/10__74773.1593433989.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/18/638/10__74773.1593433989.jpg?c=2 2560w"
                                                                                    data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/18/638/10__74773.1593433989.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/18/638/10__74773.1593433989.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/18/638/10__74773.1593433989.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/18/638/10__74773.1593433989.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/18/638/10__74773.1593433989.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/18/638/10__74773.1593433989.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/18/638/10__74773.1593433989.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/18/638/10__74773.1593433989.jpg?c=2 2560w"
                                                                                    class="card-image lazyautosizes ls-is-cached lazyloaded"
                                                                                    sizes="220px">
                                                                            </div>
                                                                        </a>
                                                                        <!-- card figcaption was here -->
                                                                    </figure>
                                                                    <div class="card-body">
                                                                        <p class="card-text tmbrand-name"
                                                                            data-test-info-type="brandName">Logitech</p>
                                                                        <h4 class="card-title">
                                                                            <a href="https://tmdemo1.mybigcommerce.com/embarrassment-bag/"
                                                                                tabindex="-1">Embarrassment Bag</a>
                                                                        </h4>

                                                                        <div class="card-text prod-price"
                                                                            data-test-info-type="price">

                                                                            <div
                                                                                class="price-section price-section--withTax">
                                                                                <span data-product-price-with-tax=""
                                                                                    class="price price--withTax">$89.95</span>
                                                                            </div>
                                                                            <div class="price-section price-section--withTax non-sale-price--withTax"
                                                                                style="display: none;">
                                                                                <span
                                                                                    data-product-non-sale-price-with-tax=""
                                                                                    class="price price--non-sale">

                                                                                </span>
                                                                            </div>
                                                                        </div>


                                                                        <figcaption class="card-figcaption">
                                                                            <div class="card-figcaption-body">
                                                                                <a href="https://tmdemo1.mybigcommerce.com/#"
                                                                                    class="button button--small card-figcaption-button quickview"
                                                                                    data-product-id="18" tabindex="-1">Quick
                                                                                    view</a>
                                                                                <label
                                                                                    class="button button--small card-figcaption-button tm-compare"
                                                                                    title="Compare" for="compare-18">
                                                                                    Compare <input type="checkbox"
                                                                                        class="tm-cmcheck" name="products[]"
                                                                                        value="18" id="compare-18"
                                                                                        data-compare-id="18" tabindex="-1">
                                                                                </label>
                                                                                <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=18"
                                                                                    data-event-type="product-click"
                                                                                    title="Add to Cart"
                                                                                    class="button button--small card-figcaption-button addtocart"
                                                                                    tabindex="-1">Add to Cart</a>
                                                                            </div>
                                                                        </figcaption>


                                                                    </div>
                                                                </article>
                                                            </div>
                                                            <div class="productCarousel-slide slick-slide"
                                                                style="width: 243px;" tabindex="-1" role="tabpanel"
                                                                id="slick-slide27" aria-describedby="slick-slide-control27"
                                                                data-slick-index="7" aria-hidden="true">


                                                                <article class="card ">
                                                                    <figure class="card-figure">
                                                                        <div class="sale-flag-side">
                                                                            <span class="sale-text">Sale!</span>
                                                                        </div>
                                                                        <a href="https://tmdemo1.mybigcommerce.com/special-media-edition/"
                                                                            tabindex="-1">
                                                                            <div class="card-img-container">
                                                                                <img src="@/assets/component/images/12__10993.jpg"
                                                                                    alt="Special Media Edition"
                                                                                    title="Special Media Edition"
                                                                                    data-sizes="auto"
                                                                                    srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/11/660/12__10993.1593434312.jpg?c=2"
                                                                                    data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/11/660/12__10993.1593434312.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/11/660/12__10993.1593434312.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/11/660/12__10993.1593434312.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/11/660/12__10993.1593434312.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/11/660/12__10993.1593434312.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/11/660/12__10993.1593434312.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/11/660/12__10993.1593434312.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/11/660/12__10993.1593434312.jpg?c=2 2560w"
                                                                                    class="lazyload card-image">
                                                                            </div>
                                                                        </a>
                                                                        <!-- card figcaption was here -->
                                                                    </figure>
                                                                    <div class="card-body">
                                                                        <p class="card-text tmbrand-name"
                                                                            data-test-info-type="brandName">Microsoft</p>
                                                                        <h4 class="card-title">
                                                                            <a href="https://tmdemo1.mybigcommerce.com/special-media-edition/"
                                                                                tabindex="-1">Special Media Edition</a>
                                                                        </h4>

                                                                        <div class="card-text prod-price"
                                                                            data-test-info-type="price">

                                                                            <div
                                                                                class="price-section price-section--withTax">
                                                                                <span data-product-price-with-tax=""
                                                                                    class="price price--withTax">$399.45</span>
                                                                            </div>
                                                                            <div
                                                                                class="price-section price-section--withTax non-sale-price--withTax">
                                                                                <span
                                                                                    data-product-non-sale-price-with-tax=""
                                                                                    class="price price--non-sale">
                                                                                    $499.95
                                                                                </span>
                                                                            </div>
                                                                        </div>


                                                                        <figcaption class="card-figcaption">
                                                                            <div class="card-figcaption-body">
                                                                                <a href="https://tmdemo1.mybigcommerce.com/#"
                                                                                    class="button button--small card-figcaption-button quickview"
                                                                                    data-product-id="11" tabindex="-1">Quick
                                                                                    view</a>
                                                                                <label
                                                                                    class="button button--small card-figcaption-button tm-compare"
                                                                                    title="Compare" for="compare-11">
                                                                                    Compare <input type="checkbox"
                                                                                        class="tm-cmcheck" name="products[]"
                                                                                        value="11" id="compare-11"
                                                                                        data-compare-id="11" tabindex="-1">
                                                                                </label>
                                                                                <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=11"
                                                                                    data-event-type="product-click"
                                                                                    title="Add to Cart"
                                                                                    class="button button--small card-figcaption-button addtocart"
                                                                                    tabindex="-1">Add to Cart</a>
                                                                            </div>
                                                                        </figcaption>


                                                                    </div>
                                                                </article>
                                                            </div>
                                                        </div>
                                                    </div><button class="slick-next slick-arrow" aria-label="Next"
                                                        type="button" style="" aria-disabled="false">Next</button>
                                                    <ul class="slick-dots" style="display: block;" role="tablist">
                                                        <li class="slick-active" role="presentation"><button type="button"
                                                                role="tab" id="slick-slide-control20"
                                                                aria-controls="slick-slide20" aria-label="1 of 2"
                                                                tabindex="0" aria-selected="true">1</button></li>
                                                        <li role="presentation"><button type="button" role="tab"
                                                                id="slick-slide-control21" aria-controls="slick-slide21"
                                                                aria-label="2 of 2" tabindex="-1">2</button></li>
                                                        <li role="presentation"><button type="button" role="tab"
                                                                id="slick-slide-control22" aria-controls="slick-slide22"
                                                                aria-label="3 of 2" tabindex="-1">3</button></li>
                                                        <li role="presentation"><button type="button" role="tab"
                                                                id="slick-slide-control23" aria-controls="slick-slide23"
                                                                aria-label="4 of 2" tabindex="-1">4</button></li>
                                                        <li role="presentation"><button type="button" role="tab"
                                                                id="slick-slide-control24" aria-controls="slick-slide24"
                                                                aria-label="5 of 2" tabindex="-1">5</button></li>
                                                    </ul>
                                                </section>

                                            </div>
                                        </div>
                                        <div data-content-region="home_below_featured_products"></div>
                                    </div>
                                    <div class="subbanner-cms3">
                                        <div class="subbanner3">
                                            <div class="subbannercmspart1">
                                                <div class="subbanner-inner"><a
                                                        href="https://tmdemo1.mybigcommerce.com/#"><img
                                                            class="__mce_add_custom__" title="st-sub-banner1.jpg"
                                                            src="@/assets/component/images/st-sub-banner1.jpg"
                                                            alt="st-sub-banner1.jpg" width="460" height="251"></a><br>
                                                    <div class="banner-content">
                                                        <div class="banner-text1">winter 2018</div>
                                                        <div class="banner-text2">cloth for man</div>
                                                        <div class="banner-text3">20% off</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="subbannercmspart2">
                                                <div class="subbanner-inner"><a href="https://tmdemo1.mybigcommerce.com/#">
                                                        <img class="__mce_add_custom__" title="st-sub-banner2.jpg"
                                                            src="@/assets/component/images/st-sub-banner2.jpg"
                                                            alt="st-sub-banner2.jpg" width="460" height="251"></a><br>
                                                    <div class="banner-content">
                                                        <div class="banner-text1">clothes sale</div>
                                                        <div class="banner-text2">Designer wear</div>
                                                        <div class="banner-text3">35% off</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="subbannercmspart3">
                                                <div class="subbanner-inner">
                                                    <div class="inner-content">
                                                        <div class="banner-content">
                                                            <div class="banner-text1">shop your favourite Item On</div>
                                                            <div class="banner-text1-last">shop town</div>
                                                            <div class="banner-text2">Ends Thursday! EXTRA 30% OFF on sale
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--Start single last Banner -->
                                </div>
                            </div>
                        </div>

                        <!--<div class="container">	-->


                        <h2 class="page-heading btm-border">Special</h2>
                        <section class="productCarousel slick-initialized slick-slider slick-dotted" data-list-name=""
                            data-slick="{
  &quot;dots&quot;: true,
  &quot;infinite&quot;: false,
  &quot;mobileFirst&quot;: true,
  &quot;slidesToShow&quot;: 2,
  &quot;slidesToScroll&quot;: 1,
  &quot;responsive&quot;: [
      {
          &quot;breakpoint&quot;: 1300,
          &quot;settings&quot;: {
              &quot;slidesToScroll&quot;: 1,
              &quot;slidesToShow&quot;: 4
          }
      },
      {
          &quot;breakpoint&quot;: 800,
          &quot;settings&quot;: {
              &quot;slidesToScroll&quot;: 1,
              &quot;slidesToShow&quot;: 3
          }
      },
      {
          &quot;breakpoint&quot;: 550,
          &quot;settings&quot;: {
              &quot;slidesToScroll&quot;: 1,
              &quot;slidesToShow&quot;: 3
          }
      }
  ]
  }"><button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true"
                                style="">Previous</button>
                            <div class="slick-list draggable">
                                <div class="slick-track"
                                    style="opacity: 1; width: 2916px; transform: translate3d(0px, 0px, 0px);">
                                    <div class="productCarousel-slide slick-slide slick-current slick-active"
                                        style="width: 243px;" tabindex="0" role="tabpanel" id="slick-slide30"
                                        aria-describedby="slick-slide-control30" data-slick-index="0" aria-hidden="false">


                                        <article class="card ">
                                            <figure class="card-figure">
                                                <div class="sale-flag-side">
                                                    <span class="sale-text">Sale!</span>
                                                </div>
                                                <a href="https://tmdemo1.mybigcommerce.com/ladies-skaff/" tabindex="0">
                                                    <div class="card-img-container">
                                                        <img src="@/assets/component/images/18__98178.jpg"
                                                            alt="Ladies skaff" title="Ladies skaff" data-sizes="auto"
                                                            srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/53/643/18__98178.1593433916.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/53/643/18__98178.1593433916.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/53/643/18__98178.1593433916.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/53/643/18__98178.1593433916.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/53/643/18__98178.1593433916.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/53/643/18__98178.1593433916.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/53/643/18__98178.1593433916.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/53/643/18__98178.1593433916.jpg?c=2 2560w"
                                                            data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/53/643/18__98178.1593433916.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/53/643/18__98178.1593433916.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/53/643/18__98178.1593433916.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/53/643/18__98178.1593433916.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/53/643/18__98178.1593433916.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/53/643/18__98178.1593433916.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/53/643/18__98178.1593433916.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/53/643/18__98178.1593433916.jpg?c=2 2560w"
                                                            class="card-image lazyautosizes lazyloaded" sizes="220px">
                                                    </div>
                                                </a>
                                                <!-- card figcaption was here -->
                                            </figure>
                                            <div class="card-body">
                                                <p class="card-text tmbrand-name" data-test-info-type="brandName">Levis</p>
                                                <h4 class="card-title">
                                                    <a href="https://tmdemo1.mybigcommerce.com/ladies-skaff/"
                                                        tabindex="0">Ladies skaff</a>
                                                </h4>

                                                <div class="card-text prod-price" data-test-info-type="price">

                                                    <div class="price-section price-section--withTax">
                                                        <span data-product-price-with-tax=""
                                                            class="price price--withTax">$14.23</span>
                                                    </div>
                                                    <div
                                                        class="price-section price-section--withTax non-sale-price--withTax">
                                                        <span data-product-non-sale-price-with-tax=""
                                                            class="price price--non-sale">
                                                            $19.00
                                                        </span>
                                                    </div>
                                                </div>


                                                <figcaption class="card-figcaption">
                                                    <div class="card-figcaption-body">
                                                        <a href="https://tmdemo1.mybigcommerce.com/#"
                                                            class="button button--small card-figcaption-button quickview"
                                                            data-product-id="53" tabindex="0">Quick view</a>
                                                        <label
                                                            class="button button--small card-figcaption-button tm-compare"
                                                            title="Compare" for="compare-53">
                                                            Compare <input type="checkbox" class="tm-cmcheck"
                                                                name="products[]" value="53" id="compare-53"
                                                                data-compare-id="53" tabindex="0">
                                                        </label>
                                                        <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=53"
                                                            data-event-type="product-click" title="Add to Cart"
                                                            class="button button--small card-figcaption-button addtocart"
                                                            tabindex="0">Add to Cart</a>
                                                    </div>
                                                </figcaption>


                                            </div>
                                        </article>
                                    </div>
                                    <div class="productCarousel-slide slick-slide slick-active" style="width: 243px;"
                                        tabindex="0" role="tabpanel" id="slick-slide31"
                                        aria-describedby="slick-slide-control31" data-slick-index="1" aria-hidden="false">


                                        <article class="card ">
                                            <figure class="card-figure">
                                                <a href="https://tmdemo1.mybigcommerce.com/divine-cross-bag/" tabindex="0">
                                                    <div class="card-img-container">
                                                        <img src="@/assets/component/images/21__64975.jpg"
                                                            alt="Divine Cross Bag" title="Divine Cross Bag"
                                                            data-sizes="auto"
                                                            srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/52/641/21__64975.1593434082.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/52/641/21__64975.1593434082.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/52/641/21__64975.1593434082.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/52/641/21__64975.1593434082.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/52/641/21__64975.1593434082.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/52/641/21__64975.1593434082.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/52/641/21__64975.1593434082.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/52/641/21__64975.1593434082.jpg?c=2 2560w"
                                                            data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/52/641/21__64975.1593434082.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/52/641/21__64975.1593434082.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/52/641/21__64975.1593434082.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/52/641/21__64975.1593434082.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/52/641/21__64975.1593434082.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/52/641/21__64975.1593434082.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/52/641/21__64975.1593434082.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/52/641/21__64975.1593434082.jpg?c=2 2560w"
                                                            class="card-image lazyautosizes lazyloaded" sizes="220px">
                                                    </div>
                                                </a>
                                                <!-- card figcaption was here -->
                                            </figure>
                                            <div class="card-body">
                                                <p class="card-text tmbrand-name" data-test-info-type="brandName">Logitech
                                                </p>
                                                <h4 class="card-title">
                                                    <a href="https://tmdemo1.mybigcommerce.com/divine-cross-bag/"
                                                        tabindex="0">Divine Cross Bag</a>
                                                </h4>

                                                <div class="card-text prod-price" data-test-info-type="price">

                                                    <div class="price-section price-section--withTax">
                                                        <span data-product-price-with-tax=""
                                                            class="price price--withTax">$321.00</span>
                                                    </div>
                                                    <div class="price-section price-section--withTax non-sale-price--withTax"
                                                        style="display: none;">
                                                        <span data-product-non-sale-price-with-tax=""
                                                            class="price price--non-sale">

                                                        </span>
                                                    </div>
                                                </div>


                                                <figcaption class="card-figcaption">
                                                    <div class="card-figcaption-body">
                                                        <a href="https://tmdemo1.mybigcommerce.com/#"
                                                            class="button button--small card-figcaption-button quickview"
                                                            data-product-id="52" tabindex="0">Quick view</a>
                                                        <label
                                                            class="button button--small card-figcaption-button tm-compare"
                                                            title="Compare" for="compare-52">
                                                            Compare <input type="checkbox" class="tm-cmcheck"
                                                                name="products[]" value="52" id="compare-52"
                                                                data-compare-id="52" tabindex="0">
                                                        </label>
                                                        <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=52"
                                                            data-event-type="product-click" title="Add to Cart"
                                                            class="button button--small card-figcaption-button addtocart"
                                                            tabindex="0">Add to Cart</a>
                                                    </div>
                                                </figcaption>


                                            </div>
                                        </article>
                                    </div>
                                    <div class="productCarousel-slide slick-slide slick-active" style="width: 243px;"
                                        tabindex="0" role="tabpanel" id="slick-slide32"
                                        aria-describedby="slick-slide-control32" data-slick-index="2" aria-hidden="false">


                                        <article class="card ">
                                            <figure class="card-figure">
                                                <div class="sale-flag-side">
                                                    <span class="sale-text">Sale!</span>
                                                </div>
                                                <a href="https://tmdemo1.mybigcommerce.com/green-lc-t-shirts/" tabindex="0">
                                                    <div class="card-img-container">
                                                        <img src="@/assets/component/images/10__47643.jpg"
                                                            alt="Green LC T-shirts" title="Green LC T-shirts"
                                                            data-sizes="auto"
                                                            srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/51/675/10__47643.1593434106.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/51/675/10__47643.1593434106.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/51/675/10__47643.1593434106.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/51/675/10__47643.1593434106.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/51/675/10__47643.1593434106.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/51/675/10__47643.1593434106.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/51/675/10__47643.1593434106.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/51/675/10__47643.1593434106.jpg?c=2 2560w"
                                                            data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/51/675/10__47643.1593434106.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/51/675/10__47643.1593434106.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/51/675/10__47643.1593434106.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/51/675/10__47643.1593434106.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/51/675/10__47643.1593434106.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/51/675/10__47643.1593434106.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/51/675/10__47643.1593434106.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/51/675/10__47643.1593434106.jpg?c=2 2560w"
                                                            class="card-image lazyautosizes lazyloaded" sizes="220px">
                                                    </div>
                                                </a>
                                                <!-- card figcaption was here -->
                                            </figure>
                                            <div class="card-body">
                                                <p class="card-text tmbrand-name" data-test-info-type="brandName">Product
                                                    Mac Pro</p>
                                                <h4 class="card-title">
                                                    <a href="https://tmdemo1.mybigcommerce.com/green-lc-t-shirts/"
                                                        tabindex="0">Green LC T-shirts</a>
                                                </h4>

                                                <div class="card-text prod-price" data-test-info-type="price">

                                                    <div class="price-section price-section--withTax">
                                                        <span data-product-price-with-tax=""
                                                            class="price price--withTax">$39.00</span>
                                                    </div>
                                                    <div
                                                        class="price-section price-section--withTax non-sale-price--withTax">
                                                        <span data-product-non-sale-price-with-tax=""
                                                            class="price price--non-sale">
                                                            $149.00
                                                        </span>
                                                    </div>
                                                </div>


                                                <figcaption class="card-figcaption">
                                                    <div class="card-figcaption-body">
                                                        <a href="https://tmdemo1.mybigcommerce.com/#"
                                                            class="button button--small card-figcaption-button quickview"
                                                            data-product-id="51" tabindex="0">Quick view</a>
                                                        <label
                                                            class="button button--small card-figcaption-button tm-compare"
                                                            title="Compare" for="compare-51">
                                                            Compare <input type="checkbox" class="tm-cmcheck"
                                                                name="products[]" value="51" id="compare-51"
                                                                data-compare-id="51" tabindex="0">
                                                        </label>
                                                        <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=51"
                                                            data-event-type="product-click" title="Add to Cart"
                                                            class="button button--small card-figcaption-button addtocart"
                                                            tabindex="0">Add to Cart</a>
                                                    </div>
                                                </figcaption>


                                            </div>
                                        </article>
                                    </div>
                                    <div class="productCarousel-slide slick-slide slick-active" style="width: 243px;"
                                        tabindex="0" role="tabpanel" id="slick-slide33"
                                        aria-describedby="slick-slide-control33" data-slick-index="3" aria-hidden="false">


                                        <article class="card ">
                                            <figure class="card-figure">
                                                <a href="https://tmdemo1.mybigcommerce.com/balck-pro-camera/" tabindex="0">
                                                    <div class="card-img-container">
                                                        <img src="@/assets/component/images/14__91637.jpg"
                                                            alt="Balck Pro Camera" title="Balck Pro Camera"
                                                            data-sizes="auto"
                                                            srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/50/636/14__91637.1593434112.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/50/636/14__91637.1593434112.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/50/636/14__91637.1593434112.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/50/636/14__91637.1593434112.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/50/636/14__91637.1593434112.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/50/636/14__91637.1593434112.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/50/636/14__91637.1593434112.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/50/636/14__91637.1593434112.jpg?c=2 2560w"
                                                            data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/50/636/14__91637.1593434112.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/50/636/14__91637.1593434112.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/50/636/14__91637.1593434112.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/50/636/14__91637.1593434112.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/50/636/14__91637.1593434112.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/50/636/14__91637.1593434112.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/50/636/14__91637.1593434112.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/50/636/14__91637.1593434112.jpg?c=2 2560w"
                                                            class="card-image lazyautosizes ls-is-cached lazyloaded"
                                                            sizes="220px">
                                                    </div>
                                                </a>
                                                <!-- card figcaption was here -->
                                            </figure>
                                            <div class="card-body">
                                                <p class="card-text tmbrand-name" data-test-info-type="brandName">Crumpler
                                                </p>
                                                <h4 class="card-title">
                                                    <a href="https://tmdemo1.mybigcommerce.com/balck-pro-camera/"
                                                        tabindex="0">Balck Pro Camera</a>
                                                </h4>

                                                <div class="card-text prod-price" data-test-info-type="price">

                                                    <div class="price-section price-section--withTax">
                                                        <span data-product-price-with-tax=""
                                                            class="price price--withTax">$99.00</span>
                                                    </div>
                                                    <div class="price-section price-section--withTax non-sale-price--withTax"
                                                        style="display: none;">
                                                        <span data-product-non-sale-price-with-tax=""
                                                            class="price price--non-sale">

                                                        </span>
                                                    </div>
                                                </div>


                                                <figcaption class="card-figcaption">
                                                    <div class="card-figcaption-body">
                                                        <a href="https://tmdemo1.mybigcommerce.com/#"
                                                            class="button button--small card-figcaption-button quickview"
                                                            data-product-id="50" tabindex="0">Quick view</a>
                                                        <label
                                                            class="button button--small card-figcaption-button tm-compare"
                                                            title="Compare" for="compare-50">
                                                            Compare <input type="checkbox" class="tm-cmcheck"
                                                                name="products[]" value="50" id="compare-50"
                                                                data-compare-id="50" tabindex="0">
                                                        </label>
                                                        <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=50"
                                                            data-event-type="product-click" title="Add to Cart"
                                                            class="button button--small card-figcaption-button addtocart"
                                                            tabindex="0">Add to Cart</a>
                                                    </div>
                                                </figcaption>


                                            </div>
                                        </article>
                                    </div>
                                    <div class="productCarousel-slide slick-slide" style="width: 243px;" tabindex="-1"
                                        role="tabpanel" id="slick-slide34" aria-describedby="slick-slide-control34"
                                        data-slick-index="4" aria-hidden="true">


                                        <article class="card ">
                                            <figure class="card-figure">
                                                <div class="sale-flag-side">
                                                    <span class="sale-text">Sale!</span>
                                                </div>
                                                <a href="https://tmdemo1.mybigcommerce.com/canon-hd-lance/" tabindex="-1">
                                                    <div class="card-img-container">
                                                        <img src="@/assets/component/images/15__76349.jpg"
                                                            alt="Canon HD Lance" title="Canon HD Lance" data-sizes="auto"
                                                            srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/49/644/15__76349.1593434126.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/49/644/15__76349.1593434126.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/49/644/15__76349.1593434126.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/49/644/15__76349.1593434126.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/49/644/15__76349.1593434126.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/49/644/15__76349.1593434126.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/49/644/15__76349.1593434126.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/49/644/15__76349.1593434126.jpg?c=2 2560w"
                                                            data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/49/644/15__76349.1593434126.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/49/644/15__76349.1593434126.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/49/644/15__76349.1593434126.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/49/644/15__76349.1593434126.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/49/644/15__76349.1593434126.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/49/644/15__76349.1593434126.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/49/644/15__76349.1593434126.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/49/644/15__76349.1593434126.jpg?c=2 2560w"
                                                            class="card-image lazyautosizes lazyloaded" sizes="220px">
                                                    </div>
                                                </a>
                                                <!-- card figcaption was here -->
                                            </figure>
                                            <div class="card-body">
                                                <p class="card-text tmbrand-name" data-test-info-type="brandName">Wireless
                                                    Keyboard</p>
                                                <h4 class="card-title">
                                                    <a href="https://tmdemo1.mybigcommerce.com/canon-hd-lance/"
                                                        tabindex="-1">Canon HD Lance</a>
                                                </h4>

                                                <div class="card-text prod-price" data-test-info-type="price">

                                                    <div class="price-section price-section--withTax">
                                                        <span data-product-price-with-tax=""
                                                            class="price price--withTax">$922.00</span>
                                                    </div>
                                                    <div
                                                        class="price-section price-section--withTax non-sale-price--withTax">
                                                        <span data-product-non-sale-price-with-tax=""
                                                            class="price price--non-sale">
                                                            $1,010.00
                                                        </span>
                                                    </div>
                                                </div>


                                                <figcaption class="card-figcaption">
                                                    <div class="card-figcaption-body">
                                                        <a href="https://tmdemo1.mybigcommerce.com/#"
                                                            class="button button--small card-figcaption-button quickview"
                                                            data-product-id="49" tabindex="-1">Quick view</a>
                                                        <label
                                                            class="button button--small card-figcaption-button tm-compare"
                                                            title="Compare" for="compare-49">
                                                            Compare <input type="checkbox" class="tm-cmcheck"
                                                                name="products[]" value="49" id="compare-49"
                                                                data-compare-id="49" tabindex="-1">
                                                        </label>
                                                        <a href="https://tmdemo1.mybigcommerce.com/canon-hd-lance/"
                                                            data-event-type="product-click"
                                                            class="button button--small card-figcaption-button addtocart"
                                                            title="Choose Options" data-product-id="49" tabindex="-1">Choose
                                                            Options</a>
                                                    </div>
                                                </figcaption>


                                            </div>
                                        </article>
                                    </div>
                                    <div class="productCarousel-slide slick-slide" style="width: 243px;" tabindex="-1"
                                        role="tabpanel" id="slick-slide35" aria-describedby="slick-slide-control35"
                                        data-slick-index="5" aria-hidden="true">


                                        <article class="card ">
                                            <figure class="card-figure">
                                                <a href="https://tmdemo1.mybigcommerce.com/round-semi-bro-table/"
                                                    tabindex="-1">
                                                    <div class="card-img-container">
                                                        <img src="@/assets/component/images/4__75738.jpg"
                                                            alt="Round Semi-Bro Table" title="Round Semi-Bro Table"
                                                            data-sizes="auto"
                                                            srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/48/645/4__75738.1593434139.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/48/645/4__75738.1593434139.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/48/645/4__75738.1593434139.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/48/645/4__75738.1593434139.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/48/645/4__75738.1593434139.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/48/645/4__75738.1593434139.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/48/645/4__75738.1593434139.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/48/645/4__75738.1593434139.jpg?c=2 2560w"
                                                            data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/48/645/4__75738.1593434139.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/48/645/4__75738.1593434139.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/48/645/4__75738.1593434139.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/48/645/4__75738.1593434139.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/48/645/4__75738.1593434139.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/48/645/4__75738.1593434139.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/48/645/4__75738.1593434139.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/48/645/4__75738.1593434139.jpg?c=2 2560w"
                                                            class="card-image lazyautosizes lazyloaded" sizes="220px">
                                                    </div>
                                                </a>
                                                <!-- card figcaption was here -->
                                            </figure>
                                            <div class="card-body">
                                                <p class="card-text tmbrand-name" data-test-info-type="brandName">Apple</p>
                                                <h4 class="card-title">
                                                    <a href="https://tmdemo1.mybigcommerce.com/round-semi-bro-table/"
                                                        tabindex="-1">Round Semi-Bro Table</a>
                                                </h4>

                                                <div class="card-text prod-price" data-test-info-type="price">

                                                    <div class="price-section price-section--withTax">
                                                        <span data-product-price-with-tax=""
                                                            class="price price--withTax">$220.00</span>
                                                    </div>
                                                    <div class="price-section price-section--withTax non-sale-price--withTax"
                                                        style="display: none;">
                                                        <span data-product-non-sale-price-with-tax=""
                                                            class="price price--non-sale">

                                                        </span>
                                                    </div>
                                                </div>


                                                <figcaption class="card-figcaption">
                                                    <div class="card-figcaption-body">
                                                        <a href="https://tmdemo1.mybigcommerce.com/#"
                                                            class="button button--small card-figcaption-button quickview"
                                                            data-product-id="48" tabindex="-1">Quick view</a>
                                                        <label
                                                            class="button button--small card-figcaption-button tm-compare"
                                                            title="Compare" for="compare-48">
                                                            Compare <input type="checkbox" class="tm-cmcheck"
                                                                name="products[]" value="48" id="compare-48"
                                                                data-compare-id="48" tabindex="-1">
                                                        </label>
                                                        <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=48"
                                                            data-event-type="product-click" title="Add to Cart"
                                                            class="button button--small card-figcaption-button addtocart"
                                                            tabindex="-1">Add to Cart</a>
                                                    </div>
                                                </figcaption>


                                            </div>
                                        </article>
                                    </div>
                                    <div class="productCarousel-slide slick-slide" style="width: 243px;" tabindex="-1"
                                        role="tabpanel" id="slick-slide36" aria-describedby="slick-slide-control36"
                                        data-slick-index="6" aria-hidden="true">


                                        <article class="card ">
                                            <figure class="card-figure">
                                                <div class="sale-flag-side">
                                                    <span class="sale-text">Sale!</span>
                                                </div>
                                                <a href="https://tmdemo1.mybigcommerce.com/single-stand-chair/"
                                                    tabindex="-1">
                                                    <div class="card-img-container">
                                                        <img src="@/assets/component/images/6__46401.jpg"
                                                            alt="Single Stand Chair" title="Single Stand Chair"
                                                            data-sizes="auto"
                                                            srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/47/646/6__46401.1593434160.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/47/646/6__46401.1593434160.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/47/646/6__46401.1593434160.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/47/646/6__46401.1593434160.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/47/646/6__46401.1593434160.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/47/646/6__46401.1593434160.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/47/646/6__46401.1593434160.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/47/646/6__46401.1593434160.jpg?c=2 2560w"
                                                            data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/47/646/6__46401.1593434160.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/47/646/6__46401.1593434160.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/47/646/6__46401.1593434160.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/47/646/6__46401.1593434160.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/47/646/6__46401.1593434160.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/47/646/6__46401.1593434160.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/47/646/6__46401.1593434160.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/47/646/6__46401.1593434160.jpg?c=2 2560w"
                                                            class="card-image lazyautosizes lazyloaded" sizes="220px">
                                                    </div>
                                                </a>
                                                <!-- card figcaption was here -->
                                            </figure>
                                            <div class="card-body">
                                                <p class="card-text tmbrand-name" data-test-info-type="brandName">Crumpler
                                                </p>
                                                <h4 class="card-title">
                                                    <a href="https://tmdemo1.mybigcommerce.com/single-stand-chair/"
                                                        tabindex="-1">Single Stand Chair</a>
                                                </h4>

                                                <div class="card-text prod-price" data-test-info-type="price">

                                                    <div class="price-section price-section--withTax">
                                                        <span data-product-price-with-tax=""
                                                            class="price price--withTax">$145.00</span>
                                                    </div>
                                                    <div
                                                        class="price-section price-section--withTax non-sale-price--withTax">
                                                        <span data-product-non-sale-price-with-tax=""
                                                            class="price price--non-sale">
                                                            $210.00
                                                        </span>
                                                    </div>
                                                </div>


                                                <figcaption class="card-figcaption">
                                                    <div class="card-figcaption-body">
                                                        <a href="https://tmdemo1.mybigcommerce.com/#"
                                                            class="button button--small card-figcaption-button quickview"
                                                            data-product-id="47" tabindex="-1">Quick view</a>
                                                        <label
                                                            class="button button--small card-figcaption-button tm-compare"
                                                            title="Compare" for="compare-47">
                                                            Compare <input type="checkbox" class="tm-cmcheck"
                                                                name="products[]" value="47" id="compare-47"
                                                                data-compare-id="47" tabindex="-1">
                                                        </label>
                                                        <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=47"
                                                            data-event-type="product-click" title="Add to Cart"
                                                            class="button button--small card-figcaption-button addtocart"
                                                            tabindex="-1">Add to Cart</a>
                                                    </div>
                                                </figcaption>


                                            </div>
                                        </article>
                                    </div>
                                    <div class="productCarousel-slide slick-slide" style="width: 243px;" tabindex="-1"
                                        role="tabpanel" id="slick-slide37" aria-describedby="slick-slide-control37"
                                        data-slick-index="7" aria-hidden="true">


                                        <article class="card ">
                                            <figure class="card-figure">
                                                <a href="https://tmdemo1.mybigcommerce.com/dinning-chair/" tabindex="-1">
                                                    <div class="card-img-container">
                                                        <img src="@/assets/component/images/5__53181.jpg"
                                                            alt="Dinning Chair" title="Dinning Chair" data-sizes="auto"
                                                            srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/46/647/5__53181.1516599624.jpg?c=2"
                                                            data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/46/647/5__53181.1516599624.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/46/647/5__53181.1516599624.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/46/647/5__53181.1516599624.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/46/647/5__53181.1516599624.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/46/647/5__53181.1516599624.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/46/647/5__53181.1516599624.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/46/647/5__53181.1516599624.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/46/647/5__53181.1516599624.jpg?c=2 2560w"
                                                            class="lazyload card-image">
                                                    </div>
                                                </a>
                                                <!-- card figcaption was here -->
                                            </figure>
                                            <div class="card-body">
                                                <p class="card-text tmbrand-name" data-test-info-type="brandName">Levis</p>
                                                <h4 class="card-title">
                                                    <a href="https://tmdemo1.mybigcommerce.com/dinning-chair/"
                                                        tabindex="-1">Dinning Chair</a>
                                                </h4>

                                                <div class="card-text prod-price" data-test-info-type="price">

                                                    <div class="price-section price-section--withTax">
                                                        <span data-product-price-with-tax=""
                                                            class="price price--withTax">$149.00</span>
                                                    </div>
                                                    <div class="price-section price-section--withTax non-sale-price--withTax"
                                                        style="display: none;">
                                                        <span data-product-non-sale-price-with-tax=""
                                                            class="price price--non-sale">

                                                        </span>
                                                    </div>
                                                </div>


                                                <figcaption class="card-figcaption">
                                                    <div class="card-figcaption-body">
                                                        <a href="https://tmdemo1.mybigcommerce.com/#"
                                                            class="button button--small card-figcaption-button quickview"
                                                            data-product-id="46" tabindex="-1">Quick view</a>
                                                        <label
                                                            class="button button--small card-figcaption-button tm-compare"
                                                            title="Compare" for="compare-46">
                                                            Compare <input type="checkbox" class="tm-cmcheck"
                                                                name="products[]" value="46" id="compare-46"
                                                                data-compare-id="46" tabindex="-1">
                                                        </label>
                                                        <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=46"
                                                            data-event-type="product-click" title="Add to Cart"
                                                            class="button button--small card-figcaption-button addtocart"
                                                            tabindex="-1">Add to Cart</a>
                                                    </div>
                                                </figcaption>


                                            </div>
                                        </article>
                                    </div>
                                    <div class="productCarousel-slide slick-slide" style="width: 243px;" tabindex="-1"
                                        role="tabpanel" id="slick-slide38" aria-describedby="slick-slide-control38"
                                        data-slick-index="8" aria-hidden="true">


                                        <article class="card ">
                                            <figure class="card-figure">
                                                <div class="sale-flag-side">
                                                    <span class="sale-text">Sale!</span>
                                                </div>
                                                <a href="https://tmdemo1.mybigcommerce.com/long-white-wear/" tabindex="-1">
                                                    <div class="card-img-container">
                                                        <img src="@/assets/component/images/20__20739.jpg"
                                                            alt="Long White Wear" title="Long White Wear" data-sizes="auto"
                                                            srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/45/648/20__20739.1593434167.jpg?c=2"
                                                            data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/45/648/20__20739.1593434167.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/45/648/20__20739.1593434167.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/45/648/20__20739.1593434167.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/45/648/20__20739.1593434167.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/45/648/20__20739.1593434167.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/45/648/20__20739.1593434167.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/45/648/20__20739.1593434167.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/45/648/20__20739.1593434167.jpg?c=2 2560w"
                                                            class="lazyload card-image">
                                                    </div>
                                                </a>
                                                <!-- card figcaption was here -->
                                            </figure>
                                            <div class="card-body">
                                                <p class="card-text tmbrand-name" data-test-info-type="brandName">Microsoft
                                                </p>
                                                <h4 class="card-title">
                                                    <a href="https://tmdemo1.mybigcommerce.com/long-white-wear/"
                                                        tabindex="-1">Long White Wear</a>
                                                </h4>

                                                <div class="card-text prod-price" data-test-info-type="price">

                                                    <div class="price-section price-section--withTax">
                                                        <span data-product-price-with-tax=""
                                                            class="price price--withTax">$17.50</span>
                                                    </div>
                                                    <div
                                                        class="price-section price-section--withTax non-sale-price--withTax">
                                                        <span data-product-non-sale-price-with-tax=""
                                                            class="price price--non-sale">
                                                            $71.00
                                                        </span>
                                                    </div>
                                                </div>


                                                <figcaption class="card-figcaption">
                                                    <div class="card-figcaption-body">
                                                        <a href="https://tmdemo1.mybigcommerce.com/#"
                                                            class="button button--small card-figcaption-button quickview"
                                                            data-product-id="45" tabindex="-1">Quick view</a>
                                                        <label
                                                            class="button button--small card-figcaption-button tm-compare"
                                                            title="Compare" for="compare-45">
                                                            Compare <input type="checkbox" class="tm-cmcheck"
                                                                name="products[]" value="45" id="compare-45"
                                                                data-compare-id="45" tabindex="-1">
                                                        </label>
                                                        <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=45"
                                                            data-event-type="product-click" title="Add to Cart"
                                                            class="button button--small card-figcaption-button addtocart"
                                                            tabindex="-1">Add to Cart</a>
                                                    </div>
                                                </figcaption>


                                            </div>
                                        </article>
                                    </div>
                                    <div class="productCarousel-slide slick-slide" style="width: 243px;" tabindex="-1"
                                        role="tabpanel" id="slick-slide39" aria-describedby="slick-slide-control39"
                                        data-slick-index="9" aria-hidden="true">


                                        <article class="card ">
                                            <figure class="card-figure">
                                                <a href="https://tmdemo1.mybigcommerce.com/solo-sky-shirts/" tabindex="-1">
                                                    <div class="card-img-container">
                                                        <img src="@/assets/component/images/14__91522.jpg"
                                                            alt="Solo Sky Shirts" title="Solo Sky Shirts" data-sizes="auto"
                                                            srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/44/676/14__91522.1593434175.jpg?c=2"
                                                            data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/44/676/14__91522.1593434175.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/44/676/14__91522.1593434175.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/44/676/14__91522.1593434175.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/44/676/14__91522.1593434175.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/44/676/14__91522.1593434175.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/44/676/14__91522.1593434175.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/44/676/14__91522.1593434175.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/44/676/14__91522.1593434175.jpg?c=2 2560w"
                                                            class="lazyload card-image">
                                                    </div>
                                                </a>
                                                <!-- card figcaption was here -->
                                            </figure>
                                            <div class="card-body">
                                                <p class="card-text tmbrand-name" data-test-info-type="brandName">Product
                                                    Mac Pro</p>
                                                <h4 class="card-title">
                                                    <a href="https://tmdemo1.mybigcommerce.com/solo-sky-shirts/"
                                                        tabindex="-1">Solo Sky Shirts</a>
                                                </h4>

                                                <div class="card-text prod-price" data-test-info-type="price">

                                                    <div class="price-section price-section--withTax">
                                                        <span data-product-price-with-tax=""
                                                            class="price price--withTax">$75.00</span>
                                                    </div>
                                                    <div class="price-section price-section--withTax non-sale-price--withTax"
                                                        style="display: none;">
                                                        <span data-product-non-sale-price-with-tax=""
                                                            class="price price--non-sale">

                                                        </span>
                                                    </div>
                                                </div>


                                                <figcaption class="card-figcaption">
                                                    <div class="card-figcaption-body">
                                                        <a href="https://tmdemo1.mybigcommerce.com/#"
                                                            class="button button--small card-figcaption-button quickview"
                                                            data-product-id="44" tabindex="-1">Quick view</a>
                                                        <label
                                                            class="button button--small card-figcaption-button tm-compare"
                                                            title="Compare" for="compare-44">
                                                            Compare <input type="checkbox" class="tm-cmcheck"
                                                                name="products[]" value="44" id="compare-44"
                                                                data-compare-id="44" tabindex="-1">
                                                        </label>
                                                        <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=44"
                                                            data-event-type="product-click" title="Add to Cart"
                                                            class="button button--small card-figcaption-button addtocart"
                                                            tabindex="-1">Add to Cart</a>
                                                    </div>
                                                </figcaption>


                                            </div>
                                        </article>
                                    </div>
                                    <div class="productCarousel-slide slick-slide" style="width: 243px;" tabindex="-1"
                                        role="tabpanel" id="slick-slide310" aria-describedby="slick-slide-control310"
                                        data-slick-index="10" aria-hidden="true">


                                        <article class="card ">
                                            <figure class="card-figure">
                                                <div class="sale-flag-side">
                                                    <span class="sale-text">Sale!</span>
                                                </div>
                                                <a href="https://tmdemo1.mybigcommerce.com/armani-white-watch/"
                                                    tabindex="-1">
                                                    <div class="card-img-container">
                                                        <img src="@/assets/component/images/17__52168.jpg"
                                                            alt="Armani White Watch" title="Armani White Watch"
                                                            data-sizes="auto"
                                                            srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/43/640/17__52168.1593434198.jpg?c=2"
                                                            data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/43/640/17__52168.1593434198.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/43/640/17__52168.1593434198.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/43/640/17__52168.1593434198.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/43/640/17__52168.1593434198.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/43/640/17__52168.1593434198.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/43/640/17__52168.1593434198.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/43/640/17__52168.1593434198.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/43/640/17__52168.1593434198.jpg?c=2 2560w"
                                                            class="lazyload card-image">
                                                    </div>
                                                </a>
                                                <!-- card figcaption was here -->
                                            </figure>
                                            <div class="card-body">
                                                <p class="card-text tmbrand-name" data-test-info-type="brandName">speack</p>
                                                <h4 class="card-title">
                                                    <a href="https://tmdemo1.mybigcommerce.com/armani-white-watch/"
                                                        tabindex="-1">Armani White Watch</a>
                                                </h4>

                                                <div class="card-text prod-price" data-test-info-type="price">

                                                    <div class="price-section price-section--withTax">
                                                        <span data-product-price-with-tax=""
                                                            class="price price--withTax">$8.50</span>
                                                    </div>
                                                    <div
                                                        class="price-section price-section--withTax non-sale-price--withTax">
                                                        <span data-product-non-sale-price-with-tax=""
                                                            class="price price--non-sale">
                                                            $13.00
                                                        </span>
                                                    </div>
                                                </div>


                                                <figcaption class="card-figcaption">
                                                    <div class="card-figcaption-body">
                                                        <a href="https://tmdemo1.mybigcommerce.com/#"
                                                            class="button button--small card-figcaption-button quickview"
                                                            data-product-id="43" tabindex="-1">Quick view</a>
                                                        <label
                                                            class="button button--small card-figcaption-button tm-compare"
                                                            title="Compare" for="compare-43">
                                                            Compare <input type="checkbox" class="tm-cmcheck"
                                                                name="products[]" value="43" id="compare-43"
                                                                data-compare-id="43" tabindex="-1">
                                                        </label>
                                                        <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=43"
                                                            data-event-type="product-click" title="Add to Cart"
                                                            class="button button--small card-figcaption-button addtocart"
                                                            tabindex="-1">Add to Cart</a>
                                                    </div>
                                                </figcaption>


                                            </div>
                                        </article>
                                    </div>
                                    <div class="productCarousel-slide slick-slide" style="width: 243px;" tabindex="-1"
                                        role="tabpanel" id="slick-slide311" aria-describedby="slick-slide-control311"
                                        data-slick-index="11" aria-hidden="true">


                                        <article class="card ">
                                            <figure class="card-figure">
                                                <div class="sale-flag-side">
                                                    <span class="sale-text">Sale!</span>
                                                </div>
                                                <a href="https://tmdemo1.mybigcommerce.com/gs-white-chain-bag/"
                                                    tabindex="-1">
                                                    <div class="card-img-container">
                                                        <img src="@/assets/component/images/12__50089.jpg"
                                                            alt="GS White Chain Bag" title="GS White Chain Bag"
                                                            data-sizes="auto"
                                                            srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/42/677/12__50089.1593434205.jpg?c=2"
                                                            data-srcset="https://cdn11.bigcommerce.com/s-b2a52/images/stencil/80w/products/42/677/12__50089.1593434205.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/160w/products/42/677/12__50089.1593434205.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/320w/products/42/677/12__50089.1593434205.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/640w/products/42/677/12__50089.1593434205.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/960w/products/42/677/12__50089.1593434205.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1280w/products/42/677/12__50089.1593434205.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/1920w/products/42/677/12__50089.1593434205.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-b2a52/images/stencil/2560w/products/42/677/12__50089.1593434205.jpg?c=2 2560w"
                                                            class="lazyload card-image">
                                                    </div>
                                                </a>
                                                <!-- card figcaption was here -->
                                            </figure>
                                            <div class="card-body">
                                                <p class="card-text tmbrand-name" data-test-info-type="brandName">Wireless
                                                    Keyboard</p>
                                                <h4 class="card-title">
                                                    <a href="https://tmdemo1.mybigcommerce.com/gs-white-chain-bag/"
                                                        tabindex="-1">GS White Chain Bag</a>
                                                </h4>

                                                <div class="card-text prod-price" data-test-info-type="price">

                                                    <div class="price-section price-section--withTax">
                                                        <span data-product-price-with-tax=""
                                                            class="price price--withTax">$21.19</span>
                                                    </div>
                                                    <div
                                                        class="price-section price-section--withTax non-sale-price--withTax">
                                                        <span data-product-non-sale-price-with-tax=""
                                                            class="price price--non-sale">
                                                            $83.00
                                                        </span>
                                                    </div>
                                                </div>


                                                <figcaption class="card-figcaption">
                                                    <div class="card-figcaption-body">
                                                        <a href="https://tmdemo1.mybigcommerce.com/#"
                                                            class="button button--small card-figcaption-button quickview"
                                                            data-product-id="42" tabindex="-1">Quick view</a>
                                                        <label
                                                            class="button button--small card-figcaption-button tm-compare"
                                                            title="Compare" for="compare-42">
                                                            Compare <input type="checkbox" class="tm-cmcheck"
                                                                name="products[]" value="42" id="compare-42"
                                                                data-compare-id="42" tabindex="-1">
                                                        </label>
                                                        <a href="https://tmdemo1.mybigcommerce.com/cart.php?action=add&amp;product_id=42"
                                                            data-event-type="product-click" title="Add to Cart"
                                                            class="button button--small card-figcaption-button addtocart"
                                                            tabindex="-1">Add to Cart</a>
                                                    </div>
                                                </figcaption>


                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div><button class="slick-next slick-arrow" aria-label="Next" type="button" style=""
                                aria-disabled="false">Next</button>
                            <ul class="slick-dots" style="display: block;" role="tablist">
                                <li class="slick-active" role="presentation"><button type="button" role="tab"
                                        id="slick-slide-control30" aria-controls="slick-slide30" aria-label="1 of 3"
                                        tabindex="0" aria-selected="true">1</button></li>
                                <li role="presentation"><button type="button" role="tab" id="slick-slide-control31"
                                        aria-controls="slick-slide31" aria-label="2 of 3" tabindex="-1">2</button></li>
                                <li role="presentation"><button type="button" role="tab" id="slick-slide-control32"
                                        aria-controls="slick-slide32" aria-label="3 of 3" tabindex="-1">3</button></li>
                                <li role="presentation"><button type="button" role="tab" id="slick-slide-control33"
                                        aria-controls="slick-slide33" aria-label="4 of 3" tabindex="-1">4</button></li>
                                <li role="presentation"><button type="button" role="tab" id="slick-slide-control34"
                                        aria-controls="slick-slide34" aria-label="5 of 3" tabindex="-1">5</button></li>
                                <li role="presentation"><button type="button" role="tab" id="slick-slide-control35"
                                        aria-controls="slick-slide35" aria-label="6 of 3" tabindex="-1">6</button></li>
                                <li role="presentation"><button type="button" role="tab" id="slick-slide-control36"
                                        aria-controls="slick-slide36" aria-label="7 of 3" tabindex="-1">7</button></li>
                                <li role="presentation"><button type="button" role="tab" id="slick-slide-control37"
                                        aria-controls="slick-slide37" aria-label="8 of 3" tabindex="-1">8</button></li>
                                <li role="presentation"><button type="button" role="tab" id="slick-slide-control38"
                                        aria-controls="slick-slide38" aria-label="9 of 3" tabindex="-1">9</button></li>
                            </ul>
                        </section>


                        <div data-content-region="home_below_new_products"></div>

                        <!--/div>-->

                        <div id="bottom-banner1">
                            <div class="item"><a href="https://tmdemo1.mybigcommerce.com/#"><img class="__mce_add_custom__"
                                        title="st-tm-sub-banner-last.jpg"
                                        src="@/assets/component/images/st-tm-sub-banner-last.jpg"
                                        alt="st-tm-sub-banner-last.jpg" width="950" height="122"> </a></div>
                        </div>
                        <div class="blog-posts">
                            <!--<div class="container">-->
                            <h2 class="page-heading btm-border">latest news</h2>
                            <div class="blogslider slick-initialized slick-slider"><button
                                    class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button"
                                    aria-disabled="true" style="">Previous</button>






                                <div class="slick-list draggable">
                                    <div class="slick-track"
                                        style="opacity: 1; width: 1956px; transform: translate3d(0px, 0px, 0px);">
                                        <div class="blog-item slick-slide slick-current slick-active" tabindex="0"
                                            style="width: 296px;" data-slick-index="0" aria-hidden="false">
                                            <div class="blog-inner">
                                                <div class="image-block">
                                                    <img src="@/assets/component/images/blog1.jpg" alt="">
                                                    <span class="image-block-hover">
                                                        <span class="block-hover-icons">
                                                            <a href="https://tmdemo1.mybigcommerce.com/my-forth-news/"
                                                                tabindex="0"><i class="fa fa-link"></i></a>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="details-block">
                                                    <div class="date">20th Sep 2013</div>
                                                    <div class="title"><a
                                                            href="https://tmdemo1.mybigcommerce.com/my-forth-news/"
                                                            tabindex="0">My forth news</a></div>
                                                    <div class="content">I've setup PayPal sandbox so I can do test orders
                                                        all the way through, however the Thanks For Your O</div>
                                                    <div class="tags"></div>
                                                    <div class="view-blog">
                                                        <div class="read-more"> <a
                                                                href="https://tmdemo1.mybigcommerce.com/my-forth-news/"
                                                                tabindex="0">read more...</a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="blog-item slick-slide slick-active" tabindex="0" style="width: 296px;"
                                            data-slick-index="1" aria-hidden="false">
                                            <div class="blog-inner">
                                                <div class="image-block">
                                                    <img src="@/assets/component/images/blog2-950x672.jpg" alt="">
                                                    <span class="image-block-hover">
                                                        <span class="block-hover-icons">
                                                            <a href="https://tmdemo1.mybigcommerce.com/my-fifth-news/"
                                                                tabindex="0"><i class="fa fa-link"></i></a>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="details-block">
                                                    <div class="date">20th Sep 2013</div>
                                                    <div class="title"><a
                                                            href="https://tmdemo1.mybigcommerce.com/my-fifth-news/"
                                                            tabindex="0">My fifth News</a></div>
                                                    <div class="content">I'd like to make my left SideCategory menu column
                                                        into an accordion style just like in the Product D</div>
                                                    <div class="tags"></div>
                                                    <div class="view-blog">
                                                        <div class="read-more"> <a
                                                                href="https://tmdemo1.mybigcommerce.com/my-fifth-news/"
                                                                tabindex="0">read more...</a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="blog-item slick-slide slick-active" tabindex="0" style="width: 296px;"
                                            data-slick-index="2" aria-hidden="false">
                                            <div class="blog-inner">
                                                <div class="image-block">
                                                    <img src="@/assets/component/images/blog5.jpg" alt="">
                                                    <span class="image-block-hover">
                                                        <span class="block-hover-icons">
                                                            <a href="https://tmdemo1.mybigcommerce.com/my-seven-news/"
                                                                tabindex="0"><i class="fa fa-link"></i></a>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="details-block">
                                                    <div class="date">20th Sep 2013</div>
                                                    <div class="title"><a
                                                            href="https://tmdemo1.mybigcommerce.com/my-seven-news/"
                                                            tabindex="0">My Seven News</a></div>
                                                    <div class="content">It was popularised in the 1960s with the release of
                                                        Letraset sheets containing Lorem Ipsum passag</div>
                                                    <div class="tags"></div>
                                                    <div class="view-blog">
                                                        <div class="read-more"> <a
                                                                href="https://tmdemo1.mybigcommerce.com/my-seven-news/"
                                                                tabindex="0">read more...</a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="blog-item slick-slide" tabindex="-1" style="width: 296px;"
                                            data-slick-index="3" aria-hidden="true">
                                            <div class="blog-inner">
                                                <div class="image-block">
                                                    <img src="@/assets/component/images/blog4-950x672.jpg" alt="">
                                                    <span class="image-block-hover">
                                                        <span class="block-hover-icons">
                                                            <a href="https://tmdemo1.mybigcommerce.com/my-third-news/"
                                                                tabindex="-1"><i class="fa fa-link"></i></a>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="details-block">
                                                    <div class="date">20th Sep 2013</div>
                                                    <div class="title"><a
                                                            href="https://tmdemo1.mybigcommerce.com/my-third-news/"
                                                            tabindex="-1">My Third News</a></div>
                                                    <div class="content">It was popularised in the 1960s with the release of
                                                        Letraset sheets containing Lorem Ipsum passage</div>
                                                    <div class="tags"></div>
                                                    <div class="view-blog">
                                                        <div class="read-more"> <a
                                                                href="https://tmdemo1.mybigcommerce.com/my-third-news/"
                                                                tabindex="-1">read more...</a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="blog-item slick-slide" tabindex="-1" style="width: 296px;"
                                            data-slick-index="4" aria-hidden="true">
                                            <div class="blog-inner">
                                                <div class="image-block">
                                                    <img src="@/assets/component/images/blog3-950x672.jpg" alt="">
                                                    <span class="image-block-hover">
                                                        <span class="block-hover-icons">
                                                            <a href="https://tmdemo1.mybigcommerce.com/my-first-news/"
                                                                tabindex="-1"><i class="fa fa-link"></i></a>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="details-block">
                                                    <div class="date">20th Sep 2013</div>
                                                    <div class="title"><a
                                                            href="https://tmdemo1.mybigcommerce.com/my-first-news/"
                                                            tabindex="-1">My first News</a></div>
                                                    <div class="content">It was popularised in the 1960s with the release of
                                                        Letraset sheets containing Lorem Ipsum passag</div>
                                                    <div class="tags">[object Object]</div>
                                                    <div class="view-blog">
                                                        <div class="read-more"> <a
                                                                href="https://tmdemo1.mybigcommerce.com/my-first-news/"
                                                                tabindex="-1">read more...</a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="blog-item slick-slide" tabindex="-1" style="width: 296px;"
                                            data-slick-index="5" aria-hidden="true">
                                            <div class="blog-inner">
                                                <div class="image-block">
                                                    <img src="@/assets/component/images/blog4-950x672.jpg" alt="">
                                                    <span class="image-block-hover">
                                                        <span class="block-hover-icons">
                                                            <a href="https://tmdemo1.mybigcommerce.com/my-eigth-news/"
                                                                tabindex="-1"><i class="fa fa-link"></i></a>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="details-block">
                                                    <div class="date">20th Sep 2013</div>
                                                    <div class="title"><a
                                                            href="https://tmdemo1.mybigcommerce.com/my-eigth-news/"
                                                            tabindex="-1">My Eigth News</a></div>
                                                    <div class="content">If you want to do that now, you can log into your
                                                        control panel and click the Store Design option fr</div>
                                                    <div class="tags"></div>
                                                    <div class="view-blog">
                                                        <div class="read-more"> <a
                                                                href="https://tmdemo1.mybigcommerce.com/my-eigth-news/"
                                                                tabindex="-1">read more...</a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><button class="slick-next slick-arrow" aria-label="Next" type="button" style=""
                                    aria-disabled="false">Next</button>
                            </div>
                            <!--</div>-->
                        </div>

                    </main>
                </div>

            </div>
            <div id="modal" class="modal" data-reveal="" data-prevent-quick-search-close="">
                <a href="https://tmdemo1.mybigcommerce.com/#" class="modal-close" aria-label="Close" role="button">
                    <span aria-hidden="true">×</span>
                </a>
                <div class="modal-content"></div>
                <div class="loadingOverlay" style="display: none;"></div>
            </div>
            <div id="alert-modal" class="modal modal--alert modal--small" data-reveal="" data-prevent-quick-search-close="">
                <div class="swal2-icon swal2-error swal2-icon-show"><span class="swal2-x-mark"><span
                            class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div>

                <div class="modal-content"></div>

                <div class="button-container"><button type="button" class="confirm button" data-reveal-close="">OK</button>
                </div>
                <div class="loadingOverlay" style="display: none;"></div>
            </div>
        </div>
        <section id="bottom">
            <div class="container wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="widget">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">We are hiring</a></li>
                                <li><a href="#">Meet the team</a></li>
                                <li><a href="#">Copyright</a></li>
                                <li><a href="#">Terms of use</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                        </div>
                    </div><!--/.col-md-3-->

                    <div class="col-md-3 col-sm-6">
                        <div class="widget">
                            <h3>Support</h3>
                            <ul>
                                <li><a href="#">Faq</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Forum</a></li>
                                <li><a href="#">Documentation</a></li>
                                <li><a href="#">Refund policy</a></li>
                                <li><a href="#">Ticket system</a></li>
                                <li><a href="#">Billing system</a></li>
                            </ul>
                        </div>
                    </div><!--/.col-md-3-->

                    <div class="col-md-3 col-sm-6">
                        <div class="widget">
                            <h3>Developers</h3>
                            <ul>
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">SEO Marketing</a></li>
                                <li><a href="#">Theme</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Email Marketing</a></li>
                                <li><a href="#">Plugin Development</a></li>
                                <li><a href="#">Article Writing</a></li>
                            </ul>
                        </div>
                    </div><!--/.col-md-3-->

                    <div class="col-md-3 col-sm-6">
                        <div class="widget">
                            <h3>Our Partners</h3>
                            <ul>
                                <li><a href="#">Adipisicing Elit</a></li>
                                <li><a href="#">Eiusmod</a></li>
                                <li><a href="#">Tempor</a></li>
                                <li><a href="#">Veniam</a></li>
                                <li><a href="#">Exercitation</a></li>
                                <li><a href="#">Ullamco</a></li>
                                <li><a href="#">Laboris</a></li>
                            </ul>
                        </div>
                    </div><!--/.col-md-3-->
                </div>
            </div>
        </section><!--/#bottom-->
    </body>

    </html>
</template>
  
<script>
// @ is an alias to /src
import Header from '@/components/mall/header.vue'
import jQuery from 'jquery'
export default {
    
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'headerview',
    components: {
        Header
    },
    data(){
        return{
         categories:[],
         carousels:[],
         hotGoodses:[],
         newGoodses:[],
         recommendGoodses:[]
        }
    },
    mounted(){
        console.log(this.categories)
        let _this = this
         setTimeout(function() {
            _this.indexpage()
        }, 100)
        // let _this = this;
        // setTimeout(function() {
        //     _this.setUserInfo();
        // }, 100)
        // window.sessionStorage.getItem('user');
        // console.log(this.$route.params)
        jQuery(window).load(function () {
            "use strict";
            jQuery('.productGrid').isotope({
                itemSelector: '.product'
            })
        });
        
        //直接打印不到
        // this.setUserInfo();
        
        // 加一定的延时就可以打印出来

    },
    watch: {
        // eslint-disable-next-line no-unused-vars
        $route(to, from) {
            window.location.reload(); //监测到路由发生跳转时刷新一次页面
        }
    },
    methods:{
            indexpage(){
                let that = this
                this.$axios.get('/index',{
                }).then(function (response) {
                            var resp = response.data.data
                            // var Categories = resp.categories
                            that.categories=resp.categories
                            // that.carousels=resp.carousels
                            // that.hotGoodses=resp.hotGoodses
                            // that.newGoodses=resp.newGoodses
                            // that.recommendGoodses=resp.recommendGoodses
                             console.log(that.categories)
                            // this.indexpage()
                            
    
                        })
                        .catch(function (error) {
                            console.log(error.data);
                        });
                
            }
    },
    created(){
        this.indexpage()
    },

}
</script>
<style src="../../assets/component/css/bootstrap.min.css"  scoped></style>
<style src="../../assets/component/css/theme-41694380-b3b9-0138-7d93-0242ac110008.css"  scoped></style>
<style src="../../assets/component/css/main.css"  scoped></style>
<style src="../../assets/component/css/font-awesome.min.css"  scoped></style>
<style src="../../assets/component/css/prettyPhoto.css"  scoped></style>
<style src="../../assets/component/css/responsive.css"  scoped></style>
<style src="../../assets/component/css/animate.min.css"  scoped></style>
  