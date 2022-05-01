import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const countAbout = {
    namespaced: true,
    actions:{
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
    },
    mutations:{
        JIA(state,value){
            // console.log(context.sum,value)
            state.sum += value
        },
        JIAN(state,value){
            state.sum -= value
    
        },
    },
    state:{
        sum:0,
    school:'昆明',
    subject:'计算机',
    },
    getters:{
        getNum(state){
            return state.sum*10
        }
    }
}

const personAbout = {
    namespaced:true,
    actions:{

    },
    mutations:{
        ADDPERSON(state,value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[{id:'001',name:'小张'}]
    },
    getters:{
        
    }
}

export default new Vuex.Store({
    modules:{
        countAbout,
        personAbout
    }
})