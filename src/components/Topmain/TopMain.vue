<template>
	<div class="Topmain">
		<div class="Topmain-text">
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
			</ul>
		</div>
		<Carousel/>
	</div>

	
</template>

<script setup lang='ts'>
import Carousel from './carousel.vue';
</script>

<style lang="less">
.Topmain {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-top: 45px;
	&-text {
		margin-left:80px;
		margin-top:80px;
	}
}
</style>