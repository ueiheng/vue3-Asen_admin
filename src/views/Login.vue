<template>
    <!-- 头像UI -->
    <div class="Login-content">
        <el-avatar :size="202" src="../../public/Avatar/photo.jpg" class="Loginavatar" />
        <!-- 登录表单UI -->
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="ruleForm">
            <el-form-item label="admin" prop="pass">
                <el-input v-model="ruleForm.pass" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Password" prop="checkPass">
                <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <!-- <router-link to="/Home"> -->
                <el-button class="Loginbtn" type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
                <!-- </router-link> -->
                <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
            </el-form-item>
        </el-form>
    </div>
    <section>
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
        <div class="wave wave4"></div>
    </section>
</template>
    
<script setup lang='ts'>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useRouter } from 'vue-router';
import '../assets/css/wave-style.css'
//引入Login pinia状态管理库
import {LoginStore} from '../store/login'
//创建仓库实例化对象
const LoginS = LoginStore();

const {ruleForm} = LoginS;

const router = useRouter();

let flag = false;

//获取dom元素
const ruleFormRef = ref<FormInstance>()

//定义检测对象 (已移动至pinia状态管理库)
// const ruleForm = reactive({
//     pass: 'admin',
//     checkPass: '',
// })


//定义账号规则
const validatePass = (rule: any, value: any, callback: any) => {
    //输入为空时，提示Error
    if (value === '') {
        callback(new Error('Please input the Account number!'))
    } else {
        //如果校验规则不为空，则进行判断
        if (value !== 'admin') {
            callback(new Error('Wrong account number!'))
            flag = false;
        }
        else {
            flag = true
        }
        callback()
    }
}

const validatePass2 = (rule: any, value: any, callback: any) => {
    console.log(value);

    //输入为空时，提示Error
    if (value === '') {
        callback(new Error('Please input the password'))
    } else {
        //如果校验规则不为空，则进行判断
        if (value == '123456' && flag == true) {
            router.push('/Home')
        }else {
            callback(new Error('password wrong...'))
        }
        callback()
    }
}



//定义校验规则
const rules = reactive({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
})


//提交事件
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

</script>
    
<style>
html,
body,
#app {
    height: 100%;
    position: relative;
}

* {
    margin: 0;
    padding: 0;
}

.Login-content {
    background: url("../assets/admin.jpg");
    height: 100%;
}

.Loginavatar {
    position: absolute;
    top: 245px;
    left: 887px;
}

.ruleForm {
    width: 600px;
    height: 400px;
    position: absolute;
    left: 635px;
    top: 500px;
}

.Loginbtn{
    margin-left: 188px;
    margin-top: 10px;
}


.el-form-item .el-form-item__label {
    color: rgb(24, 10, 10);
    font-size: 17px;
}

</style>