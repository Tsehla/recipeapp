var keystone = require('keystone');
var express = require('express');
var api = require('express').Router();


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
    
     app.use('/api/recipes', api);
     
     api.get('/', (req, res)=>{
         
         
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
   //home
    app.get('/', function(req, res){
        
        res.writeHead(200);
        res.end('<p>Please use api to access site<br /> OR open <a href = \'http://127.0.0.1:3000/keystone\'>Admin area</a><br /> to configure site content</p>');
    })
    
    
    
});
