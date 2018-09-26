var orm = require('../config/orm.js');

var burger = {
	// Select all burger table entries
	selectAll: function (callback) {
		orm.selectAll(function (res) {
			callback(res);
		});
	},
	insertOne: function (name, callback) {
		orm.insertOne(name, function(res) {
			callback(res);
		})
	},
	updateOne: function (id, callback) {
		orm.updateOne(id, function(res) {
			callback(res);
		})
	},
}

module.exports = burger;