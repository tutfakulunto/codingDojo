module.exports = function Route(app){
    app.get('/', function(request, response){
        response.render("index");
    })
    app.post('/result', function(request, response){
        submitted_information = {
            name: request.body.name,
            dojoLocation: request.body.dojo_location,
            favoriteLanguage: request.body.favorite_language,
            comment: request.body.comment
        };
        response.render("result", {user_data: submitted_information})
    })
}