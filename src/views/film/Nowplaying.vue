<template>
  <div class="nowplaying">

  	  <ul v-infinite-scroll="myLoadMore" infinite-scroll-disabled="disable" infinite-scroll-distance="0" infinite-scroll-immediate-check="false">
  	  	<li v-for="data in datalist" @click="handleClick(data.filmId)" :key="data.filmId">
  	  		<!-- {{data}} -->
  	  		<img :src="data.poster"/>
  	  		<p>{{data.name}}<span id="box1">{{data.item.name}}</span></p>
			<p class="huise">观众评分 <span id="box3">{{data.grade}}</span></p>
			<p class="huise">主演: <span id="box2" v-for="actor in data.actors" :key="actor.__ob__.dep.id"> {{actor.name}}</span> </p>
			<p class="huise">{{data.nation}} | {{data.runtime}}分钟</p>
			
  	  	</li>
  	  </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Vue from 'vue'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
export default {

	data(){
		return {
			datalist:[],
			disable:false,
			current:1,
			total:0
		}
	},

	mounted(){
		// axios.get("url?name=kerwin").then().catch()
		// axios.post("url",{name:"kerwin"}).then().catch()
		// axios.post("url","name=kerwin&age=100").then().catch();
		// axios({
		// 	url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3668007",
		// 	headers:{
		// 		// 'cookie'
		// 		'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154277371928424093566579"}',
		// 		'X-Host': 'mall.film-ticket.film.list'
		// 	}
		// }).then(res=>{
		// 	console.log(res.data);
		// 	this.datalist = res.data.data.films
		// })

		fetch("https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3668007",{
			headers:{
				// 'cookie'
				'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154277371928424093566579"}',
				'X-Host': 'mall.film-ticket.film.list'
			},
			// credentials: 'include' //为了让后端拿到cookie
		}).then(res=>res.json()).then(res=>{
			console.log(res);
			this.datalist = res.data.films
		
			this.total = res.data.total;
		})


		// Access-Control-Allow-Origin: req.origin
	},

	methods:{
		handleClick(index){
			// console.log(index);
			this.$router.push(`/detail/${index}`)
			// this.$router.push({name:"kerwindetail",params:{myid:index}})
		
			// this.$router.push(`/detail?id=${index}`);
			// this.$router.push({path:"/detail",query:{id:index,name:"kerwin"}})// /detail?id=4487
		},
		myLoadMore(){
			console.log("到底了")

			this.disable = true;//禁用
			this.current++;
			if(this.datalist.length===this.total){
				return ;
			}

			fetch(`https://m.maizuo.com/gateway?cityId=110100&pageNum=${this.current}&pageSize=10&type=1&k=3668007`,{
				headers:{
					// 'cookie'
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154277371928424093566579"}',
					'X-Host': 'mall.film-ticket.film.list'
				},
				// credentials: 'include' //为了让后端拿到cookie
			}).then(res=>res.json()).then(res=>{
				// console.log(res);
				this.datalist = [...this.datalist,...res.data.films];

				this.disable = false;
			})
		}
	}

}
</script>

<style scoped lang="scss">

	li{
		overflow: hidden;
		padding:10px;
		
		img{
			float:left;
    width: 66px;
    height:90.83px;


   		}
 		
		}
   		p{
   	color: #191a1b;
    font-size: 16px;
    height: 22px;
    margin-left: 77px;
    margin-right: 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
		}
    	p #box1{
    		font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
    margin-left:4px;
		}

		.huise{
	font-size: 13px;
    margin-top: 1px;
    color: #797d82;	

		}
		#box3{
	color: #ffb232;
    font-size: 14px;
		}
	

</style>
