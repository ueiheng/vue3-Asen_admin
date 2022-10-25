<template>
    <div class="Scroll-content" :class="{show:top>=78}">
        <el-page-header  style="margin-left:100px" @back = "goBack">
            <template #content>
                <div class="flex items-center">
                    <el-avatar :size="32" class="mr-3" src="../../../Avatar/photo.jpg" />
                    <span class="text-large"> Asen </span>
                    <span class="text-sm" style="color: var(--el-text-color-regular)">
                        Freelance Blog
                    </span>
                </div>
            </template>
            <template #extra>
                <div class="flex items-center">
                    <el-button>Print</el-button>
                    <el-button type="primary" class="ml-2">Edit</el-button>
                </div>
            </template>
        </el-page-header>
    </div>
</template>
    
<script setup lang='ts'>
import { ref } from 'vue';

const top = ref(0);

window.onscroll = () => {
    const scrollTop = document.documentElement.scrollTop
    top.value = scrollTop;
}

const goBack = ()=>{
    console.log("返回了！");
    
}
</script>
    
<style lang="less">

.Scroll-content {
    width: 100%;
    height: 60px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    background-color: #f2f3f5;
    transform: translateY(-100%);
    opacity: 0;

    &.show {
        transition: all 0.5s linear;
        transform: none;
        opacity: 1;
    }
}

.text-large {
    margin-left: 20px;
}

.text-sm {
    margin-left: 3px;
}
</style>