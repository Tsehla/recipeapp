var keystone = require('keystone');
var express = require('express');
var api = require('express').Router();
var path = require('path');//need this for angular file serving;



keystone.get('routes', function(app){
    //allors cors
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
  
    
    //-----------------------------------------------------
    //images api//
    //retrieve gallery images
    app.use('/static/uploads', express.static('static/uploads/'));
    app.use('/', express.static('app/'));//use to serve all angular app contents as static
    
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++
    //retrive images
    app.get('/api/imagelist', function(req, res){
        
       keystone.list('Image gallery').model.find()
               .exec(function(error, results){
                // console.log(results);
                 res.json(results);
          })
        
    })
    
    
    //----------------------------------------------------
    //recipes api
    //retrieve recipes data
    
   
     
     app.get('/api/recipes', (req, res)=>{
         
         
          keystone.list('Recipe list').model.find()
         .exec(function(error, results){
             // console.log(results);
              res.json(results);
          })
         
         
         
    	     //   res.json({'recipes' : { 'sucess' : true }});
    	});
    
    
    
    
    
    //----------------------------------------------------
   //contact api/
    //save contact data
    
    app.get('/api/contact', function(req, res){
        
        
        //console.log(req.query);//http://127.0.0.1:3000/api/contact?name=tsehla&contact=0719010014&Email=tsehla2@gmail.com
        
        
        keystone.createItems({ 'Contact Requests' : [req.query]  }, 
            
            function(err, sucess){
                    if(err){return res.json({result : {error : err}})};
            
                    res.json({result : {sucess : sucess}});
            
        } );

    });
    
    //----------------------------------------------------

    

    app.use('/', api);//angular app routing, this is connecting browser links with internal angular links via express linkikng
    app.use('/recipe', api);//can use normal routing than express.Route(), method
    app.use('/gallery', api);
    app.use('/contact', api);
     
    api.get('/', (req, res)=>{
         
         res.sendFile(path.resolve('app/index.html'));//you need this or you get file forbidden issure.

    	});
    
});

