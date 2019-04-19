require.config({
	paths:{
		"mui":"libs/mui.min"
	}
})


require(["mui"],function(mui){


	//全局变量
	
	function init(){
		 getShop();
	}
	//业务逻辑
	
	
	//获取商品信息
	function getShop(){
		mui.ajax('/api/getshop',{
			data:{
				
			},
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(res){
				// console.log(res);
				render(res.data)
				liClick()
				
				
				
			}
		});
	}
	
	function liClick(){
		mui('.list').on('tap','li',function(){
		  console.log(this.getAttribute("data-id"));
		  let shopId = localStorage.setItem("shopID",this.getAttribute("data-id"))
		  location.href = "../html/detail.html";
		}) 
	}
	
	//渲染方法
	function render(data){
		var str = "";
		data.forEach(function(e){
			str +=`<li class="mui-table-view-cell mui-media" data-id="${e._id}">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-right" src="${e.img}">
					<div class="mui-media-body">
						${e.name}
						<p class="mui-ellipsis">${e.aress}</p>
					</div>
				</a>
			</li>`
		})
		document.querySelector(".list").innerHTML = str;
	}
	
	
	init();
	
	
	
	
})