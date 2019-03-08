<template>
  <div class="comingsoon">
  	  <ul >
  	  	<li v-for="data in datalist" @click="handleClick(data.filmId)" :key="data.filmId">
  	  		<!-- {{data}} -->
  	  		<img :src="data.poster"/>
  	  		<p class="name">{{data.name}}<span id="box1">{{data.item.name}}</span></p>
					
					<p class="lable">主演: <span v-for="actor in data.actors"> {{actor.name}}</span> </p>
					<p class="lable">{{data.nation}} | {{data.runtime}}分钟</p>
  	  	</li>
  	  </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {

  mounted(){
  	// axios.get
  	if(this.$store.state.comingsoonList.length==0){
  		// axios().then(store.commit())
  		this.$store.dispatch("getComingsoonList","11111") //提交到action
  	}
  },

  computed:{
  	datalist(){
  		return this.$store.state.comingsoonList
  	}
  },

  methods:{
  	handleClick(index){
			// console.log(index);
			this.$router.push(`/detail/${index}`)
			// this.$router.push({name:"kerwindetail",params:{myid:index}})
		
			// this.$router.push(`/detail?id=${index}`);
			// this.$router.push({path:"/detail",query:{id:index,name:"kerwin"}})// /detail?id=4487
	}
  }
}
</script>

<style scoped lang="scss">
	li{
		overflow: hidden;
		padding:10px;
  }
		img{
			float:left;
      width: 66px;
      height:90.83px;
  		}
      .name{
            max-width: calc(100% - 25px);
    color: #191a1b;
    font-size: 16px;
    height: 22px;
    line-height: 22px;
    margin-right: 5px;
    overflow: hidden;
   
    text-overflow: ellipsis;
    white-space: nowrap;
      }
      .lable{
    font-size: 13px;
    margin-top: 4px;
    color: #797d82;
      }
      p{
        margin-left:77px;
      }
      #box1{
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
    margin-left:4px;
      }
	
</style>
