var keystone = require('keystone');

var admins = 'admin users';

var user = new keystone.List(admins);

let types = keystone.Field.Types;

user.add({
	
	
	name : {type : String, required : true, initial : true, default : 'admin', label : 'Name'},
	email : {type : types.Email, required : true, initial : true, unique : true, default : 'admin@keystone.com', label : 'Email'},
	password : {type : types.Password, required : true, initial : false, default : '12345asdf', label : 'Password'}
	
	});

user.schema.virtual('canAccessKeystone').get(function (){return true});

user.register();

//+++++++++++++++++++++++++++++++++++++++
	//                   contact
//++++++++++++++++++++++++++++++++++++++++
	
	var contact = 'Contact Requests';
	
	var contacts_form = new keystone.List(contact);
	
	contacts_form.add({
		
		        name : {type : String, required : true, initial : true, label : 'Contact Name'},//vali not necessary here, oh whatda ell.
		         Email : { type : types.Email, required : true, initial : true, label : 'Contact Email'},
		         contact : {type : Number, required : true, initial : true, label : 'Contact Number'}
		 });

contacts_form.register();

//+++++++++++++++++++++++++++++++++++++++++
	//                    recipes
//+++++++++++++++++++++++++++++++++++++++++
var recipe_list = 'Recipe list';

var recipes_model = new keystone.List(recipe_list)


recipes_model.add({
	       name : {type : String, required : true, initial : true, label : 'Recipe name'},
           description : {type : types.Textarea, initial : true, required : true, label : 'Recipe description' },
	       ingredients : { type : types.TextArray, required : false, initial : false, label : 'Recipe ingredients'},
	       method : {type : types.Textarea, required : false, initial : false, label : 'Recipe method'}
	       
	}	);

recipes_model.register();

//+++++++++++++++++++++++++++++++++++++++++
//                          gallery
//+++++++++++++++++++++++++++++++++++++++++
var time = new Date();
var unique_value = time.getFullYear()+time.getMonth()+time.getDate()+time.getDay()+time.getHours()+time.getMinutes()+time.getSeconds();



var file_upload = new keystone.Storage({
   adapter : keystone.Storage.Adapters.FS,
    fs  : {
            path : 'static/uploads',
            generateFilename: function (file, index) {
                return unique_value+file.originalname;
            },
            //whenExists: 'error',//removed made files to be stored unique
            publicPath : 'static/uploads/'//add end slash//ohwell using express to server//keystone show wrong url to file
           
           },
    schema: {
	size: true,
 	mimetype: true,
	path: true,
	originalname: false,
	url: true,
	},
    
    
});

var image_gallery = 'Image gallery';

var gallery_model = new keystone.List(image_gallery);

gallery_model.add({
    
    name : {type : String, required : true, initial : true, label : 'Image name'},
    
    file : {type : types.File, storage : file_upload, required : true, initial : true},
    
    descripion : {type : types.Textarea, label : 'Image description'}
});

gallery_model.register();
