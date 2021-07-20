// @flow
import { describe, it } from 'flow-typed-test';
import { List, Item } from 'linked-list';

// --- List ---
describe('create List', () => {
  const item1: Item = new Item();
  const item2: Item = new Item();
  const item3: Item = new Item();

  it('constructor', () => {
    new List(item1, item2, item3);
  });

  it('static methods', () => {
    List.of(item1, item2, item3);
    List.from([item1, item2, item3]);
  });
});

describe('List methods', () => {
  const head = new Item();
  const tail = new Item();
  const list = new List();

  list.append(head);
  list.prepend(tail);
  list.toArray();
});

describe('List variables', () => {
  const item1 = new Item();
  const item2 = new Item();
  const list = new List(item1, item2);

  list.head;
  list.tail;
  list.size;
});

// --- Item ---
describe('create Item', () => {
  new Item();
});

describe('Item methods', () => {
  const item1 = new Item();
  const item2 = new Item();
  const item3 = new Item();

  item1.append(item2);
  item1.prepend(item3);
  item1.detach();
});

describe('Item variables', () => {
  const item1 = new Item();
  const item2 = new Item();
  new List(item1, item2);

  item1.next;
  item1.prev;
  item1.list;
});


describe('subclassing', () => {
  class Tokens extends List {
    constructor(...items: Array<Item>): Tokens {
      super(...items);
      return this;
    }
    join(delimiter): string {
      return this.toArray().join(delimiter);
    }
  }

  class Token extends Item {
    value: string;
    constructor(value: string) {
      super()
      this.value = value;
    }

    toString(): string {
      return this.value;
    }
  }

  const dogs: Token = new Token('dogs');
  const and: Token = new Token('&');
  const cats: Token = new Token('cats');
  const tokens: Tokens = new Tokens(dogs, and, cats);

  (tokens.join(' '): string);
});
