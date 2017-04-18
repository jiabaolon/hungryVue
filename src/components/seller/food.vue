<template>
  <transition name='fade'>
      <div class="foodSelf" v-show='showFlag' ref='food'>
         <section>
           <div class="back" @click='hide'><</div>
           <div class="foodimg">
               <img :src="foods.image" alt="" >
           </div>
           <div class="fooddetails">
                <h2>{{foods.name}}</h2>
                <p>
                   <span>月售{{foods.sellCount}}</span>
                   <span>好评率{{foods.rating}}%</span>
                </p>
                <div class="price">
                    <b>￥{{foods.price}}</b>
                    <span>{{foods.oldPrice}}</span>
                </div>
           </div>
           <cartcontrol  :food = 'foods' class='cart'></cartcontrol>
           <div class='info' v-show='foods.info'>
             <h2>商品信息</h2>
             <p>{{foods.info}}</p>
          </div>
          <div class="rating">
             <ratings :ratingslist='foods.ratings'
                      :desc="desc" 
                      :selectType='selectType'
                      @select="selectRating"
                      ></ratings>
          </div>
         </section>
           

      </div>
      
  </transition>
</template>

<script>
import  BScroll from 'better-scroll';
import  cartcontrol from '@/components/goods/cartcontrol';
import  ratings from '@/components/ratings/ratings';

const ALL = 2;

export default {
  name: 'foodSelf',
  data(){
      return {
           showFlag:false,
           desc: {
             all: '全部',
             positive: '推荐',
             negative: '吐槽'
           },
           selectType:2
      }
  },
  components:{
     cartcontrol,
     ratings
  },
  props:{
     foods:{
         
     }      
  },

  methods:{
     show() {
        this.showFlag = true;
        this.$nextTick(()=>{
            if(!this.scroll) {
                this.scroll = new BScroll(this.$refs.food,{
                    click:true
                })
            }else{
                this.scroll.refresh()
            }
        })
     },
     hide() {
        this.showFlag = false;
     },
     selectRating(type) {
        this.selectType = type;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      },
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
   .foodSelf{
       position: fixed;
       left:0;
       top: 0;
       bottom: 44px;
       z-index: 120;
       width: 100%;
       background: #fff;
   }
   .back{
       position: fixed;
       z-index: 150;
       color: #fff;
       font-size: 20px;
       top:20px;
       left: 20px;
   }
   .foodimg{
       width: 100%;
       padding-top: 100%;
       position: relative;
       img{
        position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
       }

   }
   .cart{
      position: absolute;
      right:10px;
   }
   .info{
     margin-top: 30px;
   }
   .fade-enter-active, .fade-leave-active{
      transition: all 0.5s ease 
   }    
   .fade-enter, .fade-leave-active{   
     opacity: 0;
     transform: translate3d(100px,0,0);
   } 
   .rating{
     margin-top: 20px;
   }
</style>
