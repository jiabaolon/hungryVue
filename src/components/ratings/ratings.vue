<template>
  <div class="rating">
     <div class="ratingBar">
         <span class="total" :class='{"active":selectType === 2}' @click="select(2,$event)">{{desc.all}}{{ratingslist.length}}</span>
         <span class="tuijian"  :class='{"active":selectType === 0}' @click="select(0,$event)">{{desc.positive}}{{positives.length}}</span>
         <span class="tucao"  :class='{"active":selectType === 1}' @click="select(1,$event)">{{desc.negative}}{{negative.length}}</span>
     </div>
     <div class="onlyContent">
     	  <span @click="see" :class='{"on":youcan}'>✔</span>
     	  <span>只看有内容的评价</span>
     </div>
  </div>
</template>

<script>
  const POSITIVE = 0;
  const NEGATIVE = 1;
  const ALL = 2;
export default {
  name: 'raying',
  props:{
  	 ratingslist:{
  	 	type:Array,
  	 	default() {
  	 		 return []
  	 	}
  	 },
  	 desc:{
          type:Object,
          default() {
                return {
                	 all:'全部',
                	 positive:'好的',
                	 negative:'坏的'
                }
          }
  	 },
  	 selectType: {
        type: Number,
        default: ALL
      }
  },
  data() {
       return {
       	  youcan:false
       }
  },
  computed:{
  	  positives() {
        return this.ratingslist.filter((rating) => {
          return rating.rateType === POSITIVE;
        });

      },
	  negative() {
	    return this.ratingslist.filter((rating) => {
	      return rating.rateType === NEGATIVE;
	    });

	  }
  },
  methods:{
      select(type, event) {
        if (!event._constructed) {
          return;
        }
        this.$emit('select', type);
      },
      see() {
      	 this.youcan = !this.youcan
      }
  }
}
</script>

<style lang='scss' scoped>
   .ratingBar{
   	  width: 100%;
   	  span{
   	  	 display: inline-block;
   	  	 font-size: 12px;
   	  	 width: 60px;
   	  	 height: 30px;
   	  	 text-align: center;
   	  	 line-height: 30px;
   	  	 &.total,&.tuijian{
   	  	 	 background:#ccecf8;
   	  	 	 &.active{
   	  	 	 	background:#00a0dc;
   	  	 	 }
   	  	 }
   	  	 &.tucao{
   	  	 	 background:#e9ebec;
   	  	 	 &.active{
   	  	 	 	background:#a0a3a5;
   	  	 	 }
   	  	 }
   	  }
   	   	 	  
   	  
   }
   .onlyContent{    	  	 
           .on{
           	   color:#26d854;
            }
  	  }	 
</style>
