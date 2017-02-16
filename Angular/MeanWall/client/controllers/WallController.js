angular.module('app')
    .controller('WallController', WallController);

function WallController($scope, $location, UserFactory, WallFactory){
    $scope.user = {};
    $scope.messages = [];

    UserFactory.getUser(function(user){
        if(!user._id){
            $location.path('/');
        } else {
            $scope.user = user;
        }
    });

    WallFactory.getMessages(function(response){
        $scope.messages = response;
    });

    $scope.postMessage = function(){
        var message = $scope.messageText,
            userId = $scope.user._id;

        $scope.messageText = "";

        WallFactory.postMessage(message, userId, function(messages){
            $scope.messages = messages;
        });
    };

    $scope.postComment = function(){
        var comment = this.commentText,
            messageId = this.msg._id,
            userId = this.user._id;

        this.commentText = "";

        WallFactory.postComment(comment, messageId, userId, function(messages){
            $scope.messages = messages;
        });
    };
}