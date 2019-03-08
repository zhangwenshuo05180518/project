module.exports = {
	devServer: {
	  // port:8000, //随便改端口号
	  proxy: {
	       '/restapi': {
	           target: 'https://h5.ele.me',
	           host: 'h5.ele.me',
	           changeOrigin:true,
	           // pathRewrite: {
	           //     '^/v4/api': '/v4/api'
	           //   }
	       }
	 }
	}
}

//https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=31.230416&longitude=121.473701&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5