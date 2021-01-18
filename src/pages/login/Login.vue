<template>
  <div class="login">
    <div class="login-header container">
      <router-link to="/">
        <img v-lazy="'/imgs/login-logo.png'" alt="">
      </router-link>
    </div>
    <div class="login-middle">
      <div class="container">
        <div class="login-form">
          <div class="form-header">
            <a href="javascript:;" class="select">账号登录</a>
            <span>|</span>
            <a href="javascript:;">扫码登录</a>
          </div>
          <div class="form-middle">
            <input type="text" name="user" placeholder="请输入账号" v-model="username">
            <input type="password" name="pwd" placeholder="请输入密码" v-model="password">
          </div>
          <div class="form-footer">
            <div class="but">
              <a href="javascript:;" @click="login()">登录</a>
            </div>
            <div class="tips">
              <div class="tips-left">
                <a href="javascript:;">手机短信登录/注册</a>
              </div>
              <div class="tips-right">
                <a href="javascript:;">立即注册</a>
                <span>|</span>
                <a href="javascript:;">忘记密码？</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="login-footer">
      <div class="container">
        <div class="friend-chain">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">米家</a>
          <a href="javascript:;">米聊</a>
          <a href="javascript:;">小米商城隐私政策</a>
          <a href="javascript:;">小米商城用户协议</a>
        </div>
        <div class="property-right">Copyright ©2021 <span>mi.futurefe.com</span> All Rights Reserved.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return {
      username: '',
      password: '',
      userId: ''
    }
  },
  methods: {
    login(){
      let { username,password } = this
      this.axios.post('/user/login',{
        username,
        password
      }).then((res) => {
        this.$cookie.set('userId',res.id,{expires:'1M'})
        this.$store.dispatch('storageUsername',res.username)
        this.$router.push('/index')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/base.scss';
@import '../../assets/scss/config.scss';
@import '../../assets/scss/mixin.scss';
.login{
  .login-header{
    height: 113px;
    img{
      height: 100%;
    }
  }
  .login-middle{
    height: 576px;
    background: url('/imgs/login-bg.jpg') no-repeat center;
    .login-form{
      float: right;
      margin-top: 29px;
      width: 410px;
      height: 510px;
      background: #ffffff;
      padding: 0 31px;
      box-sizing: border-box;
      .form-header{
        margin: 40px 0 49px;
        font-size: $fontE;
        font-weight: bold;
        text-align: center;
        a{
          color: #000000;
          &.select{
            color: $colorA;
          }
        }
        span{
          margin: 0 30px;
        }
      }
      .form-middle{
        input{
          display: block;
          width: 348px;
          height: 50px;
          margin-bottom: 20px;
          border: 1px solid $colorH;
          padding-left: 15px;
        }
      }
      .form-footer{
        margin-top: 30px;
        .but{
          margin-bottom: 15px;
          a{
            @include btn(100%,50px,$colorA);
            font-size: $fontI;
          }
        }
        .tips{
          font-size: $fontJ;
          .tips-left{
            float: left;
            a{
              color: $colorA;
            }
          }
          .tips-right{
            float: right;
            
            a{
              color: $colorD;
            }
            span{
              color: $colorD;
              margin: 0 5px;
            }
          }
        }
      }
    }
  }
  .login-footer{
    margin: 50px 0;
    text-align: center;
    font-size: $fontI;
    .friend-chain{
      a{
        position: relative;
        color: $colorD;
        margin: 0 18px;
        &::before{
          content: '';
          display: inline-block;
          width: 1;
          height: 17px;
          border-right: 2px solid $colorD;
          position: absolute;
          top: 0;
          right: -18px;
        }
        &:last-child::before{
          border-right: none;
        }
      }
    }
    .property-right{
      color: $colorD;
      margin-top: 10px;
    }
  }
}
</style>