require.config({
	paths: {
		"mui": "libs/mui.min"
	}
})


require(["mui"], function(mui) {


	//全局变量
	let shopID = localStorage.getItem("shopID");

	function init() {
		getshopOne()
		getTalk()
		 addTalk()
	}
	//业务逻辑
	
	
	//商品的详情
	function getshopOne() {
		mui.ajax('/api/getshopOne', {
			data: {
				id: shopID
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(res) {
				console.log(res);
				var str = "";
				res.data.forEach(function(item) {
					str +=
						`<h3>${item.name}</h3>
						<h4>金额:${item.money}元/尺</h4>
						<p>${item.aress}</p>
						<div class="img"><img src="${item.img}"></div>`
				})
				document.querySelector(".box").innerHTML = str;
			},
			error: function(xhr, type, errorThrown) {

			}
		});
	}
	
	//商品的评论
	function getTalk(){
		mui.ajax('/api/getTalk',{
			data:{
				id:shopID
			},
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(res){
				var str = "";
				res.data.forEach(function(item) {
				str +=
						`<li>${item.talk}</li>`
				})
				document.querySelector(".list").innerHTML = str;
			}
		})
	}
	
	//发送评论
	
	function addTalk(){
		
		//点击事件
		document.querySelector(".btn").addEventListener("tap",function(){
			
			let txt = document.querySelector(".inp").value;//评论内容
			
			mui.ajax('/api/addTalk',{
				data:{
					id:shopID,
					talk:txt
				},
				dataType:'json',//服务器返回json格式数据
				type:'post',//HTTP请求类型
				timeout:10000,//超时时间设置为10秒；
				success:function(res){
					getTalk()
				},
				error:function(xhr,type,errorThrown){
					
				}
			});
		})
		
	}
	
	//ctrl + k //代码格式化



	init();




})
