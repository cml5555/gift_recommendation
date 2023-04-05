import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {  //存放状态（共享属性）
        isCollapse: false,    //侧边栏收缩状态，true为收起来，false为打开
        test: 666
    },
    
    mutations: {    //改变state状态值
        changeisCollapse(state) {
            state.isCollapse = !state.isCollapse   //改变收缩状态
        }
    },
    actions: {},
    modules: {}
})
