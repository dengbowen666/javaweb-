import { createRouter } from "vue-router"
//引入路由器模式
import { createWebHistory } from "vue-router";
import myapp from '../first_components/myapp.vue'
import myhomepage from '../first_components/myhomepage.vue'
import mycalendar from '../first_components/mycalendar.vue'
import myset from '../first_components/myset.vue'
//创建路由器
const router = createRouter({
     history:createWebHistory(),
    //管理路由
     routes:[  //一个一个的路由规则
       {
         //路径
          path:'/myapp.vue',
        //组件绑定
          component:myapp
       },
       {
         path: '/myhomepage.vue',
         component:myhomepage
       },
       {
         path: '/mycalendar.vue',
         component:mycalendar
       },
       {
         path: '/myset',
         component:myset
       }
     ]
})

export default router

