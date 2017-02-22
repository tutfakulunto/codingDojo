myApp.controller('topicsController', function($scope, $cookies, $location, userFactory, topics){

    $scope.topics = topics;

    $scope.currentUser = $cookies.getObject('currentUser');
    $scope.newComment = {};

    if ($location.path() == '/dashboard') {
        // topicFactory.index(function(data){
        //    $scope.topics = data;
        // });
    } else {
        topicFactory.show($location.path(), function(data){
            $scope.topic = data;
        });
    }

    $scope.showUser = function(user_id){
        $location.path('/users/'+user_id)
    }

    $scope.addTopic = function(){
        if($scope.newTopic){
            if(Object.keys($scope.newTopic).length == 3){
                $scope.newTopic._user = $scope.currentUser._id;
                topicFactory.create($scope.newTopic, function(data){
                    $scope.newTopic = undefined;
                    topicFactory.index(function(data){
                        $scope.topics = data;
                    });
                });
            }
        }
    }

    $scope.show = function(_id){
        $location.path('/topics/'+_id)
    }

    $scope.addPost = function(){
        // postCount = 0;
        if($scope.newPost){
            $scope.newPost._user = $scope.currentUser._id;
            topicFactory.createPost($scope.newPost, $location.url(), function(){
                $scope.newPost = undefined;
                topicFactory.show($location.path(), function(data){
                        $scope.topic = data;
                        // postCount += 1;
                });
            });
        }
    }

    $scope.addComment = function(post_id, idx) {
        
        if($scope.newComment[idx]) {
            var comment = {content: $scope.newComment[idx]}
            comment._user = $scope.currentUser._id;
            comment._post = post_id;
            topicFactory.createComment(comment, function(){
                topicFactory.show($location.path(), function(data){
                        $scope.newComment = {};
                        $scope.topic = data;
                });
            })
            
        }
    }

    $scope.upVote = function(post_id) {

        topicFactory.upVote(post_id, function(){
            topicFactory.show($location.path(), function(data){
                        $scope.topic = data;
                });
        });
        
    }

    $scope.downVote = function(post_id) {

        topicFactory.downVote(post_id, function(data){
            topicFactory.show($location.path(), function(data){
                        $scope.topic = data;
                });
        });        
    }
})