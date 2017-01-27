'use strict';

var app = require('angular').module('MovieApp');

app.controller('BookingController', require('./bookingController'));
app.controller('ContactController', require('./contactController'));
app.controller('HomeController', require('./homeController'));
app.controller('AdminController', require('./adminController'));
app.controller('LoginController', require('./loginController'));
app.controller('LogoutController', require('./logoutController'));
app.controller('RegisterController', require('./registerController'));

