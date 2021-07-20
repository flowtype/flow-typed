/*
 * Type def from from source code of linked-list.
 * this: https://github.com/wooorm/linked-list
**/
declare module 'linked-list' {
  declare class Item {
    list: ?List<Item>;
    next: ?Item;
    prev: ?Item;
    head: ?Item;
    tail: ?Item;
    size: number;

    constructor(): Item;
    prepend(item: Item): Item | boolean;
    append(item: Item): Item | boolean;
    detach(): Item;
  }

  declare class List {
    head: ?Item;
    tail: ?Item;
    next: ?Item;
    size: number;

    static of(...items: Array<Item>): List;
    static from(items: Array<Item>): List;

    constructor(...items: Array<Item>): List;

    toArray(): Array<Item>;
    prepend(item: Item): boolean | Item;
    append(item: Item): boolean | Item;
  }
}

