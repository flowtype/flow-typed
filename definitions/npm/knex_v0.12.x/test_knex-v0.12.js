import Knex from 'knex';

const knex = Knex({});
// $ExpectError - invalid Client
Knex({
  client: 'foo',
});

knex.select('foo').withSchema('a').from('bar').where('foo', 2).orWhere('bar', 'foo').whereNot('asd', 1).whereIn('batz', [1, 2]);
knex.select(knex.raw(''))

knex('foo').insert({
  a: 1
});
knex('bar').del();
// $ExpectError
knex.from();

knex.destroy();


/* Having tests */
knex('foo').having('count', '>', 100);
knex('foo').havingIn('count', [1, 2, 3]);
// $ExpectError
knex('foo').havingIn('count', 'string');
knex('foo').havingNotIn('count', [1, 2, 3]);
knex('foo').havingNull('count');
// $ExpectError
knex('foo').havingNull(null);
knex('foo').havingExists(function() {
  this.select('*');
});
knex('foo').havingExists(knex.raw(''));
knex('foo').havingBetween('count', [1, 5]);
// $ExpectError
knex('foo').havingBetween('count', [1, 2, 3]);
knex('foo').havingRaw('count > 10');
