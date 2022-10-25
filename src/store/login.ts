import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const LoginStore = defineStore('Login', {
    state: () => ({
        ruleForm: reactive({
            pass: 'admin',
            checkPass: '',
        }),


    }),
    getters: {

    },
    actions: {

    },
})


// type Result = {
//     admin:string,
//     password:string
// }

// const Login = ():Promise<Result> =>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve({
//                 admin:'admin',
//                 password:'123456'
//             })
//         })
//     })
// }

