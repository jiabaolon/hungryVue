<template>
  <div class="cartcontrol">
       <transition name="fade">
         <div class="cart-jian" v-show='food.count' @click.stop.prevent='jiancart' >
              <transition name="fadeiner">
                 <div class="inner">-</div>
              </transition>
         </div>
       </transition>
       <div class="cart-count" v-show='food.count'>{{food.count}}</div>
       <div class="cart-add" @click.stop.prevent='addcart' >+</div>
  </div>
</template>

<script>
import Vue from 'vue'
 
export default {
  props:{
    food: {

    }   
  
  },
  methods:{
     addcart (){
      
      if (!event._constructed){
         return
      }
      console.log('click')
        if (!this.food.count) {
          Vue.set(this.food,'count',1)
        }else{
           this.food.count++;
        }
     },
     jiancart (){
      
      if (!event._constructed){
         return
      }
      console.log('click')
        if (this.food.count) {
           this.food.count--;
        }
     }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .cartcontrol{
      div{
         display: inline-block;
      }
      .cart-add{
        width: 16px;
        height: 16px;
        background: #00a0dc;
        color: #fff;
        text-align: center;
        line-height: 16px;
        border-radius: 100%;
        margin: 5px;
      }

      .cart-jian{
         transition: all .4s linear;
         .inner{
                margin: 5px;
                width: 16px;
                height: 16px;
                background: #00a0dc;
                color: #fff;
                text-align: center;
                line-height: 16px;
                border-radius: 100%;
            }
      
      }

    
      /*进入过渡的开始状态，元素被插入时生效，只应用一帧后立即删除*/
      .fade-enter{
          opacity: 0;
          transform: translate3D(24px,0,0)  rotate(180deg);
      }
      /*离开过渡的结束状态，元素被删除时生效，离开过渡完成之后被删除；*/
      .fade-leave-active{
          opacity: 0;        
          transform: translate3D(24px,0,0)  rotate(180deg);
      }

  }
</style>
