var config = require('../config.json');
var superagent = require('superagent');

module.exports = function(app) {

	app.get('/search/shows', function(req, res){
		superagent
		.get(config.tvmaze.url + '/search/shows')
		.query({ q: req.query.name })
		.end(function(err, result){
			res.json(result.body);
		})
	});

	app.get('/shows/:id', function(req, res){
		superagent
		.get(config.tvmaze.url + '/shows/' + req.params.id +'?embed=cast')
		.end(function(err, result){
			res.json(result.body)
		})
	});

};