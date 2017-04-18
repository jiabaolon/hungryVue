<template>
  <div class="shopcar">
      <div class="bigCir">
         <div class="smallCir" :class='{"lightHeight":totalCount>0}'>
             <img src="../../assets/shop.svg" alt="" >
         </div>
         <div class="badge" v-show='totalCount>0'>{{totalCount}}</div>
      </div>
      <div class="shopRight">
        <div class="allprice" :class='{"fontlight":totalCount>0}'>
         ￥{{totalPrie}}
        </div>
        <div class="eml">另需配送费￥{{eml}}元</div>
        <div class="changeCor" :class='payclass'>{{patDesc}}</div>
      </div>
      
  </div>
</template>

<script>
 
export default {
  name: 'shopcar',
  props:{
     selectFoods: {
        type: Array,
        default (){
            return [
              {
                price:30,
                count:1
              }
            ]
        }
     },
     eml:{
       type:Number,
       default:0
     },
     chazhi:{
       type:Number,
       default:0
     }

  },
  computed:{
     totalPrie (){
        let  total = 0;
        this.selectFoods.forEach((food)=> {
           total += food.price * food.count
        })
        return  total;
     },

     totalCount (){
        let  count = 0;
        this.selectFoods.forEach((food)=> {
           count += food.count;
        })
        return  count;
     },
     patDesc(){
        if (this.totalPrie === 0) {
            return `￥${this.chazhi}元起送`;
        }else if (this.totalPrie < this.chazhi) {
           let  diff = this.chazhi - this.totalPrie
           return  `还差￥${diff}元起送`
        }else{
            return  '去结算';
        }
     },
     payclass(){
       if (this.totalPrie > this.chazhi) {
         return 'enough'
       }else{
         return  'not-enough'
       }
     }
  }
  /*data () {
    return {
        allprice:0,
        eml:4

    }
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .shopcar{
        width: 100%;
        height: 44px;
        background:#141d27;
        position: fixed;
        z-index:150;
        bottom: 0;
        .bigCir{
           width: 55px;
           height: 55px;
           border-radius: 100%;
           background:#141d27;
           position: absolute;
           bottom: 0;
           margin-left: 18px;
             .smallCir{
               width: 45px;
               height: 45px;
               border-radius: 100%;
               background: #2b343c;
               position: absolute;
               bottom: 4px;
               left: 5px;
               display: flex;
               align-items: center;
               justify-content: center; 
               img{
                 width: 25px;
                 height: 25px;
               }
          }
          .lightHeight{
             background: #00a0dc;
          }
        }
        .shopRight{
          float: right;
          height: 100%;
          color: #919396;
          width: 76%;
           display: -webkit-box;
           -webkit-box-align:center;
           -webkit-box-pack:center;

          div{
             padding: 0 4px;
             -webkit-box-flex:1;
          }
          .eml{
             font-size:12px;
          }
          .changeCor{
             
             height: 100%;
             display: -webkit-box;
             -webkit-box-align:center;
             -webkit-box-pack:center;  
             font-size:12px;    
             &.enough{
                 background: #28dd68;
                 color: #fff;
             };
             &.not-enough{
                 background: #2b343c;
             };       
          }

        }
         .badge{
             width: 20px;
             height: 15px;
             background: red;
             position: absolute;
             text-align: center;
             border-radius: 50%;
             top: 0;
             right: 0;
             color: #fff;
          }
          .fontlight{
             color: #fff;
          }

    }
</style>
