<template>
    <el-carousel height="600px" direction="vertical" :autoplay="true" interval="4000">
        <el-carousel-item v-for="item in 4 " :key="item">
            <img :src="'slider/img'+item+'.jpg'" alt="">
        </el-carousel-item>
    </el-carousel>
</template>
<script lang="ts" setup>


</script>
<style scoped>
.el-carousel {
    width: 888.866px;
}
.el-carousel__item {
    border-radius: 8px;
    
}

.el-carousel__item img {
    opacity: 1;
    width: 888.866px;
    border-radius: 8px;
}
</style>

  