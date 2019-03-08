<template>
  <footer v-show="myshow">
  	  	<ul>
  	   		<router-link tag="li" to="/film" activeClass="myactive">电影</router-link>
  	   		<router-link tag="li" to="/cinema" activeClass="myactive">影院</router-link>
  	   		<router-link tag="li" to="/center" activeClass="myactive">9.9拼团</router-link>
			<router-link tag="li" to="/mine" activeClass="myactive">我的</router-link>
  	   		<!-- 声明式导航 -->
  	   	</ul>

  	   	{{computedSum}}
  </footer>
</template>

<script>
// @ is an alias to /src
import { mapState } from  'vuex'
export default {
	data(){
		return {
			
		}
	},

	mounted(){
	
	},

	computed:{
		...mapState(["myshow"]),
		computedSum(){
			return "111111"
		}
	}, // {myshow(){return this.$store.state.myshow}}



	watch:{
		$route(){
			console.log("改变了")
		}
	}
}
</script>

<style scoped lang="scss">
	footer{
		position: fixed;
		left:0px;
		bottom:0px;
		height: 50px;
		line-height: 50px;
		width: 100%;
		background: white;
		ul{
			display: flex;

			li{
				flex:1;
				text-align: center;
			}
		}
	}
</style>
