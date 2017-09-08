var express = require('express');
var router = express.Router();
var db = require("../config/db");

router.get("/", function(req, res, next){
	db.query("select * from user", function(err, result){
		if(err){
			res.render("users", {title:"user list", datas:[]});
		} else {
			console.log("********");
			console.log(result);
			console.log("********");
			res.render("users", {title:"ALL USERS LIST", datas: result});
		}
	});
});


router.get("/insert", function(req, res, next){
	res.render("insert");
});
router.post("/insert", function(req, res, next){
	var name = req.body.name;
	var age = req.body.age;
	var sql = "insert into user(name,age) values('"+name+"','"+age+"')";
	console.log(sql);
	db.query(sql, function(err, result){
		if(err){
			res.send("insert"+err);
		} else {
			res.redirect("/users");
		}
	});
});

router.get("/delete/:id", function(req, res){
	var id = req.params.id;
	db.query("delete from user where id = " + id, function(err, result){
		if(err){
			res.send("delete"+err);
		}else{
			res.redirect("/users");
		}
	});
});

router.get("/update/:id", function(req,res,next){
	var id = req.params.id;
	var sql = "select * from user where id = " + id;
	console.log(sql);
	db.query(sql, function(err, result){
		if(err){
			res.send("redirect err");
		}else{
			res.render("update",{datas: result})
		}
	});
});

router.post("/update", function(req,res,next){
	var id = req.body.id;
	var name = req.body.name;
	var age = req.body.age;
	var sql = "update user set name='"+name+"',age='"+age+"' where id = "+id;
	console.log(sql);
	db.query(sql, function(err, rows){
		if(err){
			res.send("update"+err);
		}else{
			res.redirect("/users");
		}
	});
});

router.get("/search", function(req, res, next){
	res.render("search");
});
router.post("/search", function(req, res, next){
	var name = req.body.name;
	var age = req.body.age;
	var sql = "select * from user ";

	if(name){
		sql += "where name = '"+name+"'";
	}
	if(age){
        sql += " and age = '" + age + "'";
  }
	
 console.log(sql);
	db.query(sql, function(err, result){
		if(err){
			res.send("search"+err);
		}else{
			console.log("_________");
			console.log(result);
			console.log("_________");
			res.render("users",{title:"TARGET USERS LIST", datas: result});
		}
	});
})

module.exports = router;
