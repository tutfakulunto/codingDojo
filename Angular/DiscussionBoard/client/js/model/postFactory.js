myApp.factory('postFactory', function($http){

	var factory = {};

	factory.create = function(postId, data, callback) {
		return $http.post('/posts' + postId + '/comments', data);
	};
});