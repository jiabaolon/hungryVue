<template>
	<footer class="foot">
		<a href="javascript:;" class="shop"><!-- <img src="../../assets/shop.svg" alt=""> --></a>
		<div>
			<a href="javascript:;" class="price">￥0</a>
			<a href="javascript:;">另需配送费￥4元</a>
			<a href="javascript:;" class="song">￥20起送</a>
		</div>
	
	</footer>
</template>
<script>
	export default {

	}
</script>
<style lang="scss" scope>
.foot{
	width: 100%;
	background: #141C27;
	height: 50px;
	position: fixed;
	bottom: 0;
	.shop{
		width: 60px;
		height: 60px;
		display: block;
		border-radius: 30px;
		background: #2B343D;
		display: -webkit-box;
		-webkit-box-align:center;
		-webkit-box-pack:center;
		position: absolute;
		border: #141C27 solid 6px;
		top:-15px;
		left:10px;
		img{
			display: block;
			width: 30px;
			height: 30px;
		}
	}
	div{
		margin-left: 80px;
		display: -webkit-box;
		-webkit-box-align:center;
		a{
			display: block;
			-webkit-box-flex:1;
			color:#909296;
			padding: 15px 0;
			text-align: center;
		}
		.price{
			font-weight: bold;
			font-size: 16px;
		}
		.song{
			background: #2B343B;
		}
	}
}
	
</style>