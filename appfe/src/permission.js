import { Form } from 'element-ui'
import router from './router'
import store from './store'
function sleep(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res({
                data:['project']
            })
        },2000)
    })
}

import {asyncRoutes} from "@/router/index.js"

async function generaterRouter(){
  let permison = await sleep();
  console.log(permison)

router.addRoutes(asyncRoutes)
}

generaterRouter()
