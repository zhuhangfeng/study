import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
const actions = {
    // jia(context,value){
    //     // console.log(a,b)
    //     context.commit('JIA',value)
    // },
    // jian(context,value){
    //     context.commit('JIAN',value)

    // },
    jijian(context,value){
        if(context.state.sum%2!==0){
            context.commit('JIA',value)
          }
    },
    ddagainadd(context,value){
        setTimeout(()=>{
        context.commit('JIA',value)
        },2000)
    }
};

const mutations = {
    JIA(state,value){
        // console.log(context.sum,value)
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value

    },
    
};

const state = {
    sum:0,
    school:'昆明',
    subject:'计算机'
};
const getters = {
    getNum(state){
        return state.sum*10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})