<template>
  <div class="film">

  	  <swipe class="my-swipe" :auto="1000" @change="handleChange()" ref="myswipe">
  	    <swipe-item v-for="data in looplist" :key="data.bannerId">
  	    	<img :src="data.imgUrl"/>
  	    </swipe-item>
  	  </swipe>

  	  <ul ref="myul" :class="isFixed?'swipefix':''">
  	  	<router-link to="/film/nowplaying" tag="li" activeClass="active">正在热映</router-link>
  	  	<router-link to="/film/comingsoon" tag="li" activeClass="active">即将上映</router-link>
  	  </ul>
  	  <!-- <filmchild></filmchild> -->
  	  <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
import Vue from "vue";
import { Indicator } from 'mint-ui';

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);


// import FilmChild from "dwa"
export default {
	data(){
		return {
			looplist:[],
			isFixed:false
		}
	},

	mounted(){
		Indicator.open({
		  text: '加载中...',
		  spinnerType: 'triple-bounce'
		});
		// axios.get("http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1548399332122&summary=b514985dd7d4770790598b2da7919a13&platform_code=H5").then(result=>{
		// 	console.log(result.data)
		// })
		// 
		// axios.get("/restapi/shopping/v3/restaurants?latitude=31.230416&longitude=121.473701&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5").then(res=>{
		// 	console.log(res.data);
		// })
		// axios.post("11111",{}).then



		// fetch("http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1548399332122&summary=b514985dd7d4770790598b2da7919a13&platform_code=H5").then(res=>res.text()).then(res=>{
		// 	console.log(res);
		// })
		
		axios({
			url:"https://m.maizuo.com/gateway?type=2&cityId=110100&k=4538802",
			headers:{
				'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154277371928424093566579"}',
				'X-Host': 'mall.cfg.common-banner'
			}
		}).then(res=>{
			console.log(res.data);
			this.looplist= res.data.data;
		})

		setTimeout(() => {
		  Indicator.close();
		}, 2000)

		//window.onscroll = function(){}
		window.onscroll=this.handleScroll;
	},
	components:{
		// "swipe":Swipe,
		// "swipe-item":SwipeItem
	},

	methods:{
		handleChange(){
			// console.log("handleChange")
		},
		handleScroll(){
			// console.log(this.$refs.myswipe.$el.offsetHeight); 
			/*
				ref加载普通dom节点 dom对象
				ref 加在组件上， 组件对象， .$el才是dom对象
			 */
			//console.log("scorll",document.documentElement.scrollTop || document.body.scrollTop);

			if( (document.documentElement.scrollTop || document.body.scrollTop) > this.$refs.myswipe.$el.offsetHeight){
				console.log(this.$refs.myswipe.$el.offsetHeight);
				this.isFixed = true;
			}else{
				console.log("unfixed");
				this.isFixed = false;
			}
		}
	},

	//销毁生命周期
	beforeDestroy(){
		window.onscroll= null;
	}
}
</script>

<style scoped lang="scss">
	.my-swipe {
	  height: 200px;
	}

	.my-swipe{
		img{
			width: 100%;
		}
	}

	ul{
		display: flex;
		li{
			flex:1;
			height: 40px;
			line-height: 40px;
			text-align: center;
		}		
	}

	.active{
		border-bottom:5px solid #f60;
	}

	.swipefix{
		position: fixed;
		top:0px;
		left:0px;
		width: 100%;
		height: 50px;
		background: white;
	}
</style>
