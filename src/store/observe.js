//调度中心
var store = {
	list:[],

	subscribe(callback){
		//订阅方法
		//
		this.list.push(callback);	
	},

	publish(data){
		//发布方法
		this.list.forEach(item=>{
			console.log(item);
			item(data);//执行方法
		})
	}

}


export default store;