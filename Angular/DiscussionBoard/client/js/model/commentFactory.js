myApp.factory('commentFactory', function($http){

	var factory = {};

	factory.create = function(postId, data) {
		return $http.post('/posts/' + postId + '/comments', data);
	};
});