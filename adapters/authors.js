import _ from 'lodash';
import lodashId from 'lodash-id';
import low from'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';
const adapter = new FileSync('./data/authors.json');
const db = low(adapter);
db._.mixin(lodashId);

export default db;