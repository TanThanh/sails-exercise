/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	'register': function (req , res){
		res.view();
	},

	'create': function(req , res){
		//Tao 1 user voi cac thong tin can thiet duoc gui tu form sign-in
		// sign-in form --->register
 		User.create(req.params.all(), function userCreated(err, user) {
 			if (err) return res.badRequest(err);
 			return res.ok(user);
 		});
	}


};

