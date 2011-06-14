/*
 * databases.js: Commands related to user resources
 *
 * (C) 2010, Nodejitsu Inc.
 *
 */
 
var winston = require('winston'),
    jitsu = require('jitsu');

var databases = exports;

databases.usage = [
  '`jitsu databases *` commands allow you to work with the database api',
  '',
  'jitsu databases create <database name>',
  'jitsu databases get <database name>',
  'jitsu databases delete <database name>',
];

databases.create = function (databaseName, callback) {
  jitsu.databases.create(databaseName, function (err) {
    if (err) {
      winston.error(err.result.error);
    } else {
      winston.info('Database ' + databaseName + ' was created.');
    }
    callback();
  });
};

databases.get = function (databaseName, callback) {
  jitsu.databases.get(databaseName, function (err, results) {
    if (err) {
      console.log(arguments);
    } else {
      winston.info('Database name: ' + results.name);
      winston.info('Database type: ' + results.type);
      winston.info('Id: ' + results.metadata.id);
    }
  });
}

databases.delete = function (databaseName, callback) {
  jitsu.databases.delete(databaseName, function (err) {
    if (err) {
      winston.error('Database could not be deleted');
    } else {
      winston.info('Database was deleted.');
    }
  });
}