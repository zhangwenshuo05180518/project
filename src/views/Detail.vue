<template>
  <div class="detail" v-if="filminfo">
			

			<img class="poster" :src="filminfo.poster">

			<div class="box1">
				<p class="name">{{filminfo.name}}
					<span id="item">{{filminfo.item.name}}</span>
					<span id="grade">{{filminfo.grade}}分</span>
				</p>
				<p class="film box7">{{filminfo.category}}</p>
				<p class="film box4">{{dateForm(filminfo.premiereAt)}} 首映</p>
				<p class="film box5">{{filminfo.nation}} | {{filminfo.runtime}}分钟</p>
				<p class="film box6">{{filminfo.synopsis}}</p>
			</div>

  	  <div class="swiper-container">
				<p class="actors">演职人员</p>
  	      <div class="swiper-wrapper yanzhi">
  	          <div class="swiper-slide" v-for="data in filminfo.actors" :key="data.__ob__.dep.id">
  	          	<img :src="data.avatarAddress"/>
  	          </div>
  	      </div>
  	  </div>

			<div class="swiper-container">
				<p id="juzhao">剧照<span class="film you">全部({{filminfo.photos.length}}) ></span></p>
  	      <div class="swiper-wrapper" id="tupian">
  	          <div class="swiper-slide" v-for="data in filminfo.photos" :key="data.index">
  	          	<img :src="data"/>
  	          </div>
  	      </div>
  	  </div>

			<a href="">选座购票</a>
  </div>
</template>

<script>
// @ is an alias to /src  @/assets/sss.   ~ @   
import axios from "axios";
import Swiper from "swiper";
import store from "@/store/observe";
import "swiper/dist/css/swiper.css"
export default {

	data(){
		return {
			filminfo:null
		}
	},

	created(){

	},

	mounted(){
		// this.$route.params
		console.log(this.$route.params.myid)
		axios({
			url:`https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}&k=3805235`,
			headers:{
				'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154277371928424093566579"}',
				'X-Host': 'mall.film-ticket.film.info'
			}
		}).then(res=>{
			console.log(res.data);
			// this.looplist= res.data.data;
			// 
			this.filminfo = res.data.data.film

			this.$nextTick(()=>{
				var swiper = new Swiper('.swiper-container', {
				     slidesPerView: 4,//一页几个
				     spaceBetween: 10,// 间隔30px
				     freeMode: true,
				     // pagination: {
				     //   el: '.swiper-pagination',
				     //   clickable: true,
				     // },
				   });
			})
		})
		// console.log(this.$route.query.id)
    
    //store.publish() 
    // store.publish({show:false});
    
    // this.$store.state.myshow = false;
    this.$store.commit("changeMyshow",false);
	},

	methods:{
		dateForm(time){
			var now = new Date( time*1000 );
			var month = now.getMonth() + 1
			var date = now.getDate()
			if(month < 10){
				month = "0" + month
			}
			if(date < 10){
				date = "0" + date
			}
			return now.getFullYear() + "-" + month + "-" + date
		}
	},

  beforeDestroy(){
    // store.publish({show:true});
    // this.$store.state.myshow = true;
    this.$store.commit("changeMyshow",true);
  }


}
</script>

<style scoped lang="scss">
	img.poster{
		width: 100%
	}
	.swiper-slide{
		img{
			width: 100%;
		}
	}
	p{
		padding-left:18px;
	}
	.name{
	color: #191a1b;
    font-size: 18px;
    height: 24px;
    line-height: 24px;
    margin-right: 7px;

	}
	.box1 #item{
	font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
    display: inline-block;
	}
	.box1 #grade{
		font-size: 18px;
    font-style: italic;
    text-align: right;
    color: #ffb232;
    margin-left:210px;
	}
	.film{
		font-size: 13px;
    color: #797d82;
    margin-top: 4px;
	}
	.box7{
		margin-top:6px;
	}
	.box4{
		margin-top: 8px;
	}
	.box6{
		margin-top: 10px;
		padding-bottom:20px;
		border-bottom:10px solid #f4f4f4;
	}
	.actors{
		font-size: 16px;
    	text-align: left;
    	color: #191a1b;
    	padding-top:9px;


	}
	.yanzhi{
		padding-left:10px;
		padding-top:15px;
		padding-bottom:20px;
		border-bottom:10px solid #f4f4f4;
	}
	.you{
		margin-left:250px;

	}
	#juzhao{
		margin-bottom:30px;
	}
	a{
		    position: fixed;
    bottom: 0;
    left: 0;
    height: 49px;
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
    text-decoration:none;
	}

	
</style>
