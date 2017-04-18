<template>
  <div class="goods">
     <aside ref='meunScr'>
       <section  >
         <div v-for='(item,index) in goods' class="menuList" :class="{'current':currentIndex===index}"  @click='selectMenu(index,$event)' ref='menuList'>
            <a>{{item.name}}</a>
         </div>
       </section>
     	 
     </aside>
     <div class="goodslist" ref='foodScr'>
     	  <ul >
     	  	<li class="good-list" v-for='item in goods' ref='foodHook' >
     	  		<h2 class="title">{{item.name}}</h2>
     	  		<ul>
     	  			<li v-for='x in item.foods' class="foodUnite" @click='selFood(x,$event)'>
     	  				 <div class="imgg">
     	  				 	<img width="57" height="57" :src="x.icon" alt="">
     	  				 </div>
     	  				 <div class="content">
     	  				 	  <h2 class="foodname">{{x.name}}</h2>
     	  				 	  <p class="describ">{{x.description}}</p>
     	  				 	  <div class="extra">
     	  				 	  	 <span>月售{{x.sellCount}}份</span>
     	  				 	  	 <span>好评率{{x.rating}}%</span>
     	  				 	  </div>
     	  				 	  <div class="price">
     	  				 	  	  <span>￥{{x.price}}</span>
     	  				 	  	  <span v-show='x.oldPrice?true:false'>{{x.oldPrice}}</span>
                        
     	  				 	  </div>
                    
     	  				 </div>
                 <!-- carcontrol -->
                 <div class="cartcontrol-wrap">
                    <cartcontrol  :food = 'x'></cartcontrol>
                 </div>
     	  			</li>
     	  		</ul>
     	  	</li>
     	  </ul>
     </div>
   <!--  shopcar -->
     <shopcar :selectFoods = 'selectFoo' :eml = 'sellC.deliveryPrice' :chazhi='sellC.minPrice' ></shopcar>
    <!--  food -->
     <food :foods = 'selFoo' ref="food"></food>
  </div>
</template>

<script>
 import  BScroll from 'better-scroll';
 import  shopcar from '@/components/goods/shopcar';
 import  cartcontrol from '@/components/goods/cartcontrol';
 import  food from '@/components/seller/food';

export default {
  name: 'goods',
  props:{
     sellC:{
       
     }
  },
  data (){
  	 return {
  	 	 goods:[],
       listHeight:[],
       scrollY :0,
       FoodsAll:[],
       selFoo:[]
  	 }
  },
  components:{
       shopcar,
       cartcontrol,
       food
  },
  computed :{
      currentIndex(){
         for(let i = 0;i<this.listHeight.length;i++){
               let  h1 =  this.listHeight[i];
               let  h2 =  this.listHeight[i+1];
               if (!h2 || (this.scrollY >= h1 && this.scrollY <h2)) {
                   return  i;
            }   
         }
         return 0;
      },
      selectFoo(){
         let foods = [];
         this.goods.forEach((good)=>{
              good.foods.forEach((food) => {
                    if (food.count) {
                        foods.push(food)
                    }
              })
         })

         return  foods;
         
      }
      
  },
  methods:{
      _initScroll (){
         this.meunScroll = new BScroll(this.$refs.meunScr,{
             click:true
         })
         this.foodScroll = new BScroll(this.$refs.foodScr,{
            click:true,
            probeType: 3
         });

         this.foodScroll.on('scroll',(pos)=>{
            this.scrollY = Math.abs(Math.round(pos.y))
         })
     },

     fudlistHeight (){
         let  foodlist = this.$refs.foodHook;
         let  height=0;
         this.listHeight.push(height)
         for(let i=0;i<foodlist.length;i++){
             height+= foodlist[i].clientHeight;
             this.listHeight.push(height);
         }
     },
     selectMenu (ind,ev){
      if (!ev._constructed) {return}
          let fodlist = this.$refs.foodHook;
          let el = fodlist[ind];

          this.foodScroll.scrollToElement(el,300)
     },
     selFood(food,event){
         this.selFoo =  food; 

         this.$refs.food.show()
         console.log(this.$refs.food)
      }

  },
  created (){
    var  that= this;
  	 this.$http.get('/api/goods').then(function(data){
  	 	 console.log(data.body.data)
  	 	that.goods = data.body.data;
      that.$nextTick(()=>{
         that._initScroll();
         that.fudlistHeight();
       })
       
  	 })
  }

}
</script>

<style lang='scss' scoped>
    .goods{
       position: absolute;
       top: 180px;
       left: 0;
       right: 0;
       bottom: 0;
    }
	.goods aside{
        background: #f3f5f7;
       width: 80px;
       float: left;
       position: absolute;
       top: 0;
       bottom: 0;
       overflow: auto;
	}
  .goodslist{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 80px;
      right: 0;
      overflow: hidden;
  }
   .current{
      background: #fff;
      font-weight: 700;
   }
   .menuList{
   	  width: 56px;
   	  height: 30px;
   	  padding:12px;
   	 
      
   	  a{
   	  	 position: relative;   	  	 
   	  	 font-size: 12px;
   	  	 text-align: center;
         display:flex;
         align-items: center;
         justify-content: center; 
         width: 100%;
         height: 100%;  
   	  	  &:after{
   	  	  	width:200%;
   	  	    display: block;
   	  	 	content:'';
   	  	 	height: 1px;
   	  	 	left: -50%;
   	  	 	background: #ccc;
   	  	 	position: absolute;
   	  	 	bottom: 0;
   	  	 	transform: scale(.5);
   	  	   }; 
   	  }

   }
   .good-list{
   	 width: 100%;
   	 overflow: hidden;
   	 .title{
       width: 100%;
   	 	 border-left: solid 3px #d9dde1;
   	 	 background: #f3f5f7;
   	 	 line-height: 26px;
       padding-left: 10px;
       font-size: 14px;
   	 }
   	 .foodUnite{
   	 	 margin: 20px;
       position:relative;
   	 	 display: flex;
   	 	 .imgg{
   	 	 	 margin-right: 10px;
   	 	 }
   	 }
   	 .foodname{
   	 	 font-size: 14px;
   	 	 line-height: 14px;
   	 }
   	 .describ{
   	 	font-size: 10px;
   	 	line-height: 10px;
   	 	margin-top: 8px;
   	 }
   	 .extra{
   	 	 font-size: 10px;
   	 	 color: rgb(147,153,159);
   	 	 line-height: 10px;
   	 	 margin-top: 8px;
   	 	 span{
   	 	 	margin-right: 12px;
   	 	 }
   	 }
   	 .price{
   	 	 margin-top: 8px;
       width: 60%;
   	 	 span{
   	 	 	 &:first-child{
   	 	 	 	font-size:14px;
   	 	 	 	color: red;
   	 	 	 };
   	 	 }
   	 }
   }
   .cartcontrol-wrap{
      position: absolute;
      right: 0;
      top:55px;
      z-index: 100;
   }
</style>
