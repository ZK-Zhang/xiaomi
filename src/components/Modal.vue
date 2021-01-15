<template>
  <transition name="fade">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div :class="modalType" class="box">
        <div class="box-header">
            <span>{{title}}</span>
            <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="box-content">
            <slot name="body"></slot>
        </div>
        <div class="box-footer">
            <a v-if="btnType === '1'" class="btn1" href="javascript:;" @click="$emit('submit')">{{sureText}}</a>
            <a v-if="btnType === '2'" class="btn2" href="javascript:;" @click="$emit('cancel')">{{cancelText}}</a>
            <div v-if="btnType === '3'">
              <a class="btn1" href="javascript:;" @click="$emit('submit')">{{sureText}}</a>
              <a class="btn2" href="javascript:;" @click="$emit('cancel')">{{cancelText}}</a>
            </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    // 弹框类型：小small、中middle、大large、表单from
    modalType:{
      type: String,
      default: 'from'
    },
    // 弹框标题
    title: String,
   // 按钮类型: 1:确定按钮 2：取消按钮 3：确定取消
    btnType:String,
    sureText:{
      type:String,
      default:'确定'
    },
    cancelText:{
      type:String,
      default:'取消'
    },
    // 弹框显示或隐藏
    showModal:Boolean
  }
}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/modal.scss';
</style>