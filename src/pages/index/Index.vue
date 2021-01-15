<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul>
            <li class="menu-item">
              <a href="javascript:;" class="item-name">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,index) of menuList" :key="index">
                  <li v-for="sub of item" :key="sub.id">
                    <router-link  class="children-item" :to="'/product/'+sub.id">
                      <img v-lazy="sub.img" alt="">
                      <span>{{sub.name}}</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="item-name">电视 盒子</a>
              <div class="children">
                <ul v-for="(item,index) of menuList" :key="index">
                  <li v-for="sub of item" :key="sub.id">
                    <router-link  class="children-item" :to="'/product/'+sub.id">
                      <img v-lazy="sub.img" alt="">
                      <span>{{sub.name}}</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="item-name">笔记本 平板</a>
              <div class="children">
                <ul v-for="(item,index) of menuList" :key="index">
                  <li v-for="sub of item" :key="sub.id">
                    <router-link  class="children-item" :to="'/product/'+sub.id">
                      <img v-lazy="sub.img" alt="">
                      <span>{{sub.name}}</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="item-name">家电 插线板</a>
              <div class="children">
                <ul v-for="(item,index) of menuList" :key="index">
                  <li v-for="sub of item" :key="sub.id">
                    <router-link  class="children-item" :to="'/product/'+sub.id">
                      <img v-lazy="sub.img" alt="">
                      <span>{{sub.name}}</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="item-name">出行 穿戴</a>
              <div class="children">
                <ul v-for="(item,index) of menuList" :key="index">
                  <li v-for="sub of item" :key="sub.id">
                    <router-link  class="children-item" :to="'/product/'+sub.id">
                      <img v-lazy="sub.img" alt="">
                      <span>{{sub.name}}</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="item-name">智能 路由器</a><div class="children">
                <ul v-for="(item,index) of menuList" :key="index">
                  <li v-for="sub of item" :key="sub.id">
                    <router-link  class="children-item" :to="'/product/'+sub.id">
                      <img v-lazy="sub.img" alt="">
                      <span>{{sub.name}}</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="item-name">电源 配件</a>
              <div class="children">
                <ul v-for="(item,index) of menuList" :key="index">
                  <li v-for="sub of item" :key="sub.id">
                    <router-link  class="children-item" :to="'/product/'+sub.id">
                      <img v-lazy="sub.img" alt="">
                      <span>{{sub.name}}</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="item-name">生活 箱包</a>
              <div class="children">
                <ul v-for="(item,index) of menuList" :key="index">
                  <li v-for="sub of item" :key="sub.id">
                    <router-link  class="children-item" :to="'/product/'+sub.id">
                      <img v-lazy="sub.img" alt="">
                      <span>{{sub.name}}</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="item of slideList" :key="item.id">
            <router-link :to="'/product/'+item.id">
              <img :src="item.img">
            </router-link>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="abs-box">
        <div class="box" v-for="item of adsList" :key="item.id">
          <router-link :to="'/product/'+item.id">
            <img v-lazy="item.img" alt="">
          </router-link>
        </div>
      </div>
      <div class="banner">
        <router-link to="/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="">
        </router-link>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <router-link to="/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
            </router-link>
          </div>
          <div class="list-box">
            <div class="lime" v-for="(item,i) of phoneList" :key="i">
              <div class="item" v-for="(sub,j) of item" :key="j">
                <span class="new-pro">新品</span>
                <div class="item-img">
                  <img v-lazy="sub.mainImage" alt="">
                </div>
                <p class="name">{{sub.name}}</p>
                <p class="introduce">{{sub.subtitle}}</p>
                <p class="price" @click="addCart(sub.id)">{{sub.price}}元</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal btnType="1" modalType="middle" title="提示" 
     sureText="查看购物车" :showModal="showModal" @cancel="showModal=false"
     @submit="skipCart()"
     >
      <template v-slot:body>
        <p class="modal-content">商品添加成功</p>
      </template>
    </modal>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Modal from '../../components/Modal'
export default {
  name: 'Index',
  data(){
    return{
      swiperOption:{
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        effect : 'cube',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable:true
        }
      },
      slideList:[{
          id:'42',
          img:'/imgs/slider/slide-1.jpg'
        },{
          id:'45',
          img:'/imgs/slider/slide-2.jpg'
        },{
          id:'46',
          img:'/imgs/slider/slide-3.jpg'
        },{
          id:'41',
          img:'/imgs/slider/slide-4.jpg'
        },{
          id:'43',
          img:'/imgs/slider/slide-5.jpg'
      }],
      menuList:[
        [{
          id:30,
          img:'/imgs/item-box-1.png',
          name:'小米CC9',
        },{
          id:31,
          img:'/imgs/item-box-2.png',
          name:'小米8青春版',
        },{
          id:32,
          img:'/imgs/item-box-3.jpg',
          name:'Redmi K20 Pro',
        },{
          id:33,
          img:'/imgs/item-box-4.jpg',
          name:'移动4G专区',
        }],[{
          id:30,
          img:'/imgs/item-box-1.png',
          name:'小米CC9',
        },{
          id:31,
          img:'/imgs/item-box-2.png',
          name:'小米8青春版',
        },{
          id:32,
          img:'/imgs/item-box-3.jpg',
          name:'Redmi K20 Pro',
        },{
          id:33,
          img:'/imgs/item-box-4.jpg',
          name:'移动4G专区',
        }],[{
          id:30,
          img:'/imgs/item-box-1.png',
          name:'小米CC9',
        },{
          id:31,
          img:'/imgs/item-box-2.png',
          name:'小米8青春版',
        },{
          id:32,
          img:'/imgs/item-box-3.jpg',
          name:'Redmi K20 Pro',
        },{
          id:33,
          img:'/imgs/item-box-4.jpg',
          name:'移动4G专区',
        }],[{
          id:30,
          img:'/imgs/item-box-1.png',
          name:'小米CC9',
        },{
          id:31,
          img:'/imgs/item-box-2.png',
          name:'小米8青春版',
        },{
          id:32,
          img:'/imgs/item-box-3.jpg',
          name:'Redmi K20 Pro',
        },{
          id:33,
          img:'/imgs/item-box-4.jpg',
          name:'移动4G专区',
        }],[{
          id:30,
          img:'/imgs/item-box-1.png',
          name:'小米CC9',
        },{
          id:31,
          img:'/imgs/item-box-2.png',
          name:'小米8青春版',
        },{
          id:32,
          img:'/imgs/item-box-3.jpg',
          name:'Redmi K20 Pro',
        },{
          id:33,
          img:'/imgs/item-box-4.jpg',
          name:'移动4G专区',
        }],[{
          id:30,
          img:'/imgs/item-box-1.png',
          name:'小米CC9',
        },{
          id:31,
          img:'/imgs/item-box-2.png',
          name:'小米8青春版',
        },{
          id:32,
          img:'/imgs/item-box-3.jpg',
          name:'Redmi K20 Pro',
        },{
          id:33,
          img:'/imgs/item-box-4.jpg',
          name:'移动4G专区',
        }]
      ],
      adsList:[{
          id:33,
          img:'/imgs/ads/ads-1.png'
        },{
          id:48,
          img:'/imgs/ads/ads-2.jpg'
        },{
          id:45,
          img:'/imgs/ads/ads-3.png'
        },{
          id:47,
          img:'/imgs/ads/ads-4.jpg'
      }],
      phoneList:[],
      showModal: false
    }
  },
  components: {
    swiper,
    swiperSlide,
    Modal
  },
  methods: {
    getPhoneList(){
      this.axios.get('/products',{
        params:{
          categoryId:100012,
          pageSize: 14
        }
      }).then((res) => {
        res.list = res.list.slice(6,14);
        this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)]
      })
    },
    addCart(id){
      // this.axios.post('/carts',{
      //   productId:id,
      //   selected: true
      // }).then(()=>{

      // })
      console.log(id)
      this.showModal = true
    },
    skipCart(){
      this.$router.push('/cart')
    }
  },
  mounted () {
    this.getPhoneList()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/base.scss';
@import '../../assets/scss/mixin.scss';
@import '../../assets/scss/config.scss';
  .index{
    .swiper-box{
      position: relative;
      .nav-menu{
        z-index: 9;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 264px;
        height: 451px;
        background: #55585a7a;
        line-height: 50px;
        padding: 26px 0;
        .menu-item{
          height: 50px;
          .item-name{
            position: relative;
            display: block;
            color: #ffffff;
            font-size: 16px;
            padding-left: 30px;
            &::after{
              content: '';
              @include bgImg(10px,15px,'/imgs/icon-arrow.png');
              position: absolute;
              top: 17.5px;
              right: 30px;
            }
            &:hover{
              background: $colorA;
              padding-left: 40px;
              transition: all .3s;
              &::after{
                right: 20px;
              }
            }
          }
          &:hover{
            .children{
              display: block;
            }
          }
          .children{
            display: none;
            width: 962px;
            height: 451px;
            // background: #ffffff;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid #e5e5e5;
            box-sizing: border-box;
            ul{
              height: 75px;
              background: #ffffff;
              display: flex;
              li{
                flex: 1;
                line-height: 75px;
                padding-left: 30px;
                .children-item{
                  color: #333333;
                  font-size: 14px;
                  img{
                    width: 42px;
                    height: 35px;
                    vertical-align: middle;
                    margin-right: 15px
                  }
                }
              }
            }
          }
        }
      }
      .swiper-container{
        height: 451px;
        img{
          width: 100%;
          height: 100%;
        }
        .swiper-button-prev{
          left: 275px;
        }
      }
    }
    .abs-box{
      height: 167px;
      display: flex;
      margin-top: 18px;
      margin-bottom: 31px;
      .box{
        flex: 1;
        padding-right: 20px;
        &:last-child{
          padding-right: 0;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .banner{
      height: 130px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .product-box{
      margin-top: 60px;
      padding: 30px 0 50px;
      background: $colorJ;
      h2{
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 20px;
      }
      .wrapper{
        display: flex;
        .banner-left{
          width: 224px;
          height: 619px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .list-box{
          .lime{
            text-align: center;
            margin-bottom: 15px;
            .item{
              display: inline-block;
              width: 236px;
              height: 302px;
              background: #ffffff;
              margin-left: 14px;
              span{
                display: inline-block;
                width: 67px;
                height: 24px;
                color: #ffffff;
                font-size: 14px;
                line-height: 24px;
                &.new-pro{
                  background: #7ECF68;
                }
                &.kill-pro{
                  background: #E82626;
                }
              }
              .item-img{
                height: 195px;
                img{
                  width: 100%;
                  height: 100%;
                }
              }
              .name{
                font-size: 14px;
                color:$colorB;
                line-height: 14px;
                font-weight: bold;
              }
              .introduce{
                color: $colorD;
                font-size: 13px;
                line-height: 13px;
                margin: 10px 0;
              }
              .price{
                color: $colorA;
                font-size: 14px;
                font-weight: bold;
                line-height: 14px;
                cursor: pointer;
                &::after{
                  content: '';
                  @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                  vertical-align: middle;
                  margin-left: 5px;
                }
              }
            }
          }
        }
      }
    }
    .modal-content{
      text-align: center;
      line-height: 30px;
    }
  }
</style>