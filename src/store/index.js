import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { CHANGE_MY_SHOW } from './type'
Vue.use(Vuex)



// var name = "a";
// var obj  ={
//   [name]:"kerwin"
// }
// console.log(obj)

export default new Vuex.Store({
  state: {
  	myshow:true, //状态
    comingsoonList:[],
    bigobj:{
      list:[1,2,3,4,5]
    }
  },

  getters:{
    mylist(state){
      return [...state.bigobj.list,7,8]
    }
  },

  mutations: {
  	//唯一修改状态的地方，所有的状态都会被记录， 方便代码调试， 时光旅行用的。 -vue devtools

  	[CHANGE_MY_SHOW] (state,payload){
  		//state就是 this.state payload 调用者传来的参数
  		state.myshow  =payload;
  	},
    changeComingSoonList(state,payload){
      state.comingsoonList = payload;
    }

  },
  actions: {

    getComingsoonList(store,payload){
     // axios 成功了之后  再commit
     fetch("https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5366437",{
      headers:{
        // 'cookie'
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154277371928424093566579"}',
        'X-Host': 'mall.film-ticket.film.list'
      },
      // credentials: 'include' //为了让后端拿到cookie
     }).then(res=>res.json()).then(res=>{
      console.log(res);
      store.commit("changeComingSoonList",res.data.films)
     })
    }
  }
})
