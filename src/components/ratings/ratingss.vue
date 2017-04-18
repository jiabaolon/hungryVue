<template>
	<div>
		<div class="ratings" v-for="item in ratings">
			<div class="face"><img :src="item.avatar" alt=""></div>
			<div class="cont">
				<div class="cont_meg">
					<p class="name">{{item.username}}</p>
					<p class="rateTime">{{item.rateTime | time}}</p>
				</div>
				<div class="cont_score">
					<div class="score">
						<span v-for="i in item.score"><img src="../../assets/star24_on@2x.png" alt=""></span>
						<span v-if="item.score!=5" v-for="i in 5-item.score"><img src="../../assets/star24_off@2x.png" alt=""></span>
					</div>
					<div class="time" v-if="item.deliveryTime">{{item.deliveryTime}}分钟到达</div>
				</div>
				<p class="text">{{item.text}}</p>
				<div class="recommend">
					<div v-for="i in item.recommend"><span>{{i}}</span></div>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
export default{
	data(){
		return{
			ratings:[]
		}
	},
	filters:{
		time(value) {
			var date = new Date(value);
			var Y = date.getFullYear(),
				m = date.getMonth() + 1,
				d = date.getDate(),
				H = date.getHours(),
				i = date.getMinutes();
			if (m < 10) {
				m = '0' + m;
			}
			if (d < 10) {
				d = '0' + d;
			}
			if (H < 10) {
				H = '0' + H;
			}
			if (i < 10) {
				i = '0' + i;
			}
			// 获取时间格式 2017-01-03 10:13:48
			var t = Y+'-'+m+'-'+d+' '+H+':'+i;
			return t;
		}
	},
	created (){
  	 	this.$http.get('/api/ratings').then(function(data){
  	 	 	console.log(data.body.data)
  	 	 	this.ratings = data.body.data;
       	})
  	}
}
</script>
<style lang="scss">
	.ratings{
		display: -webkit-box;
		padding: 10px;
		border-top: #ddd solid 1px;
		.face{
			width: 40px;
			height: 40px;
			img{
				width: 100%;
				border-radius: 50%;
			}
		}
		.cont{
			width: 88%;
			padding: 10px;
			margin-left: 10px;
			overflow: hidden;
			.cont_meg{
				display: -webkit-box;
				-webkit-box-pack:justify;
				font-size: 14px;
			}
			.rateTime{
				color: #999;
			}
			.time{
				color: #999;
				margin-left: 5px;
				font-size: 12px;
			}
			.text{
				line-height: 24px;

			}
			.cont_score{
				display: -webkit-box;
				.score{
					
					span{
						display: inline-block;
						img{
							width: 100%;
						}
					}
				}
			}
				
			.recommend{
				div{
					float: left;
					margin-top: 5px;
					font-size: 12px;
					color: #999;
					padding: 2px 8px;
					border: #ccc solid 1px;
					margin-right: 8px;
				}
			}
		}
	}
</style>