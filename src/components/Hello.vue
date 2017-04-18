<template>
  <div class="hello">
      <heade></heade>
      <div class="tab">
           <div class="tab-item">
              <router-link to='/hello/goods'>商品</router-link>
           </div>
           <div class="tab-item">
              <router-link to='/hello/ratings'>评论</router-link> 
           </div>
           <div class="tab-item">
              <router-link to='/hello/seller'>商家</router-link> 
           </div>
      </div>
      <router-view :sellC = 'seller'></router-view>
  </div>
</template>

<script>

import heade from '@/components/header/header'

export default {
  name: 'hello',
  data () {
    return {
        seller:[]
    }
  },
  components :{
     heade
  },
  created (){
     this.$http.get('/api/seller').then(function(data){
       console.log(data.body.data)
       this.seller = data.body.data;
       this.$nextTick(()=>{
          this._initScroll();
          this.fudlistHeight();
       })
       
     })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .hello .tab{
       display: flex;
       width: 100%;
       height: 40px;
       line-height: 40px;
       border:solid 1px #ccc;
       .tab-item{
           flex: 1;
           text-align: center;
       }
    }
    .router-link-active{
       color: red;
    }
</style>
