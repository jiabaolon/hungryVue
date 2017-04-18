<template>
  <div class="headerbax">
     <div class="header">
        <div class="content-wrapper">
          <div class="avatar">
            <img width="64" height="64" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg">
          </div>
          <div class="content">
            <div class="title">
             <span class="brand"><img src="../../assets/brand@2x.png" alt=""></span>
             <span class="name">粥品香坊（回龙观）</span>
           </div>
           <div class="description">
              蜂鸟专送/38分钟送达
           </div>
           <div class="support">
             <span class="icon decrease"></span>
             <span class="text">在线支付满28减5</span>
           </div>
          </div>
          <div class="support-count">
            <span class="count">5个</span>
            <i class="icon-keyboard_arrow_right"></i>
          </div>
        </div>

        <div class="bulletin-wrapper">
           <span class="bulletin-title"></span><span class="bulletin-text">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
           <i class="icon-keyboard_arrow_right"></i>
        </div>
       <div class="background">
         <img width="100%" height="100%" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg">
       </div>


       <!--   <div class="detail fade-transition" style="display: none;">
         <div class="detail-wrapper clearfix">
           <div class="detail-main">
             <h1 class="name">粥品香坊（回龙观）</h1>
             <div class="star-wrapper">
               <div class="star star-48">
             <span class="star-item on"></span><span class="star-item on"></span><span class="star-item on"></span><span class="star-item on"></span><span class="star-item off"></span>
           </div>
                   </div>
                   <div class="title">
                     <div class="line"></div>
                     <div class="text">优惠信息</div>
                     <div class="line"></div>
                   </div>
                   <ul class="supports">
                     <li class="support-item">
                       <span class="icon decrease"></span>
                       <span class="text">在线支付满28减5</span>
                     </li><li class="support-item">
                       <span class="icon discount"></span>
                       <span class="text">VC无限橙果汁全场8折</span>
                     </li><li class="support-item">
                       <span class="icon special"></span>
                       <span class="text">单人精彩套餐</span>
                     </li><li class="support-item">
                       <span class="icon invoice"></span>
                       <span class="text">该商家支持发票,请下单写好发票抬头</span>
                     </li><li class="support-item">
                       <span class="icon guarantee"></span>
                       <span class="text">已加入“外卖保”计划,食品安全保障</span>
                     </li>
                   </ul>
                   <div class="title">
                     <div class="line"></div>
                     <div class="text">商家公告</div>
                     <div class="line"></div>
                   </div>
                   <div class="bulletin">
                     <p class="content">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
                   </div>
                 </div>
               </div>
               <div class="detail-close">
                 <i class="icon-close"></i>
               </div>
       </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang='scss' scoped>
.header {
    position: relative;
    overflow: hidden;
    color: #fff;
    background: rgba(7,17,27,0.5);
      .content-wrapper {
        position: relative;
        padding: 24px 12px 18px 24px;
        /*font-size: 0;*/
        .avatar {
            display: inline-block;
            vertical-align: top;
        }
       .content {
            display: inline-block;
            margin-left: 16px;
            .title{
               display: flex;
               .brand{
                 width: 32px;
                 img{
                    width: 100%;
                 }
               }
               .name{
                display: inline-block;
                 line-height: 18px;
                 margin-left: 6px;
                 font-size: 16px;
                 line-height: 18px;
                 font-weight: bold;
               }
            }
            .description{
                margin-bottom: 10px;
                line-height: 12px;
                font-size: 12px;
                margin-top: 8px;
            }
            .text{
               font-size: 10px;
               line-height: 12px;
            }
        }
       .support-count{
                  position: absolute;
                  right: 12px;
                  bottom: 14px;
                  padding: 0 8px;
                  height: 24px;
                  line-height: 24px;
                  border-radius: 14px;
                  background: rgba(0,0,0,0.2);
                  text-align: center;
                  .count{
                     font-size: 12px
                  }
        }

     }
     .bulletin-wrapper{
          height:28px;
          font-size: 10px;
          padding-left: 12px;
          line-height: 28px;
          background: rgba(7,17,27,.2);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          overflow:hidden;
          .bulletin-title{
             margin-right: 4px;
          }
          .bulletin-text{
            white-space:nowrap;
            margin: 0 4px;
          }

        }
    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      -webkit-filter: blur(10px);
      filter: blur(10px);
    }
}
</style>
