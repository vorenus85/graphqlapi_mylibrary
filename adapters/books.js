import _ from 'lodash';
import lodashId from 'lodash-id';
import low from 'lowdb';
import MemoryAdapter from 'lowdb/adapters/Memory.js';
import FileSync from 'lowdb/adapters/FileSync.js';

const adapter = process.env.NODE_ENV === 'test' ? new MemoryAdapter() : new FileSync('./data/books.json');
const db = low(adapter);

if (process.env.NODE_ENV === 'test') {
  db.defaults({ books: [] }).write();
}

db._.mixin(lodashId);

export default db;