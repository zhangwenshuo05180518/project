<template>
  <div class="cinema">
  	  <button @click="sheetVisible=!sheetVisible">click</button>
  	  <button @click="opentoast()">clicktoast</button>
  	  <mt-actionsheet
  	    :actions="actions"
  	    v-model="sheetVisible">
  	  </mt-actionsheet>

  	  <mt-swipe :auto="4000">
  	    <mt-swipe-item>1</mt-swipe-item>
  	    <mt-swipe-item>2</mt-swipe-item>
  	    <mt-swipe-item>3</mt-swipe-item>
  	  </mt-swipe>

  	  <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
  	    <router-link to="/" slot="left">
  	      <mt-button icon="back">返回</mt-button>
  	    </router-link>
  	    <mt-button icon="more" slot="right"></mt-button>
  	  </mt-header>

  </div>
</template>

<script>
// @ is an alias to /src
import { Toast } from 'mint-ui';

export default {

	data(){
		return {
			sheetVisible:false,
			actions:[
				{
					name:"拍照",
					method(){
						console.log("1111")
					}
				},
				{
					name:"从相册选择",
					method(){
						console.log("2222")
					}
				}
			]
		}
	},

	methods:{
		opentoast(){
			Toast({
			  message: '提示',
			  position: 'bottom',
			  duration: 5000
			});
		}
	}
}
</script>

<style scoped lang="scss">
	.mint-swipe{
		height: 200px;
	}
</style>
