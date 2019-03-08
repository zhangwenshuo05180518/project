<template>
  <div id="box">
<!--   	<router-view></router-view>
 -->   
 	<!-- <a href="#/film">film</a>
 	<a href="#/cinema">cinema</a>
 	<a href="#/center">center</a> -->
 	<tabbar></tabbar>
    <section>
    <router-view></router-view>
	</section>
   	<!-- 路由容器 -->
  </div>
</template>

<script type="text/javascript">
	//组件 data 是函数
	import tabbar from '@/components/tabbar'
	export default {
		data(){
			return {
				mytext:""
			}
		},
		components:{
			tabbar	
		}
	}
</script>


<style lang="scss">
*{
	margin:0px;
	padding:0px;
}

ul{
	list-style: none;
}

html,body{
	// touch-action:none;
}

.myactive{
	// background: red;
	color:red;
}

section{
	margin-bottom: 50px;
}
</style>
