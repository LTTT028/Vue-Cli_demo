import Vue from 'vue'
import Router from 'vue-router'
import My_first_vue from "../components/My_first_vue";
import My_second_vue from "../components/My_second_vue";
import Msg_board from "../components/Msg_board";
import User from "../components/User";
import User_detail from "../components/User_detail";

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', name: 'first', redirect: '/first'},
        {path: '/first', name: 'first', component: My_first_vue},
        {path: '/second', name: 'second', component: My_second_vue},
        {path: '/msg', name: 'msg', component: Msg_board},
        {path: '/user', name: 'user', component: User},
        {path: '/user_detail/:id/:name/:bir/:content', name: 'user_detail', component: User_detail},
    ]
})
