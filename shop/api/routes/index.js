var express = require('express');
var router = express.Router();
var Mongo = require("mongodb-curd");

/* GET home page. */

var db = "1701Bshopping";
var col_shop = "shop"; //商品
var col_talk = "talk"; //评论

router.post('/api/getshop', function(req, res, next) {
  Mongo.find(db,col_shop,{},function(result){
    if(!result){
      res.json({
        code:0,
        msg:"查询失败"
      })
    }else{
      res.json({
        code:1,
        msg:"查询成功",
        data:result
      })
    }
    
  })
});


router.post('/api/getshopOne', function(req, res, next) {

  let id = req.body.id;
  Mongo.find(db,col_shop,{"_id":id},function(result){
    if(!result){
      res.json({
        code:0,
        msg:"查询失败"
      })
    }else{
      res.json({
        code:1,
        msg:"查询成功",
        data:result
      })
    }
    
  })
});


//查询商品评论
router.post('/api/getTalk', function(req, res, next) {

  let id = req.body.id;

  Mongo.find(db, col_talk,{"id":id},function(result){
    if(!result){
      res.json({
        code:0,
        msg:"评论查询失败"
      })
    }else{
      res.json({
        code:1,
        msg:"评论查询成功",
        data:result
      })
    }
    
  })
});

//添加商品评论
router.post('/api/addTalk', function(req, res, next) {

  let obj = req.body;

  Mongo.insert(db, col_talk,obj,function(result){
    if(!result){
      res.json({
        code:0,
        msg:"添加评论失败"
      })
    }else{
      res.json({
        code:1,
        msg:"添加评论成功",
        data:result
      })
    }
    
  })
});




module.exports = router;
