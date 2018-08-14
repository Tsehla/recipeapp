var keystone = require('keystone');

keystone.init({
    
    'cookie secret' : 'my_cookie_secret',
    'static' : 'static/uploads',
    'user model' : 'admin users',
    'auto update' : true,
    'auth' : true
    
});


keystone.import('routes');
keystone.import('models');

keystone.start();
