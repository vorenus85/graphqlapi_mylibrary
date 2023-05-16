const _ = require('lodash');
const lodashId = require('lodash-id');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./data/books.json');
const db = low(adapter);
db._.mixin(lodashId);

module.exports = db;