var gulp = require("gulp");
var ser = require("gulp-webserver");

gulp.task("ser",function(){
	return gulp.src("./src/")
	.pipe(ser({
		open:true,
		// host:
		port:8089,
		livereload:true,
		proxies:[
			{source:"/api/addTalk",target:"http://localhost:3000/api/addTalk"},//添加评论
			{source:"/api/getshop",target:"http://localhost:3000/api/getshop"},//获取商品
			{source:"/api/getshopOne",target:"http://localhost:3000/api/getshopOne"},//查询商品详情
			{source:"/api/getTalk",target:"http://localhost:3000/api/getTalk"}//获取商品评论
		]
	}))
})
