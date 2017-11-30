/* This module definition is by no means complete. A lot of methods of the
RedisClient class are missing */
declare module "redis" {
  declare class RedisClient extends events$EventEmitter {
    hmset: (key: string, map: any, callback: (?Error) => void) => void;
    rpush: (key: string, value: string, callback: (?Error) => void) => void;
    lpush: (key: string, value: any) => void;
    hset: (topic: string, key: string, value: string) => number;
    hget: (topic: string, key: string, value: string) => string;
    hgetall: (topic: string, key: string) => Array<string>;
    get: (key: string) => any;
    set: (key: string, value: any) => void;
    del: (...keys: Array<string>) => void;
    publish: (topic: string, value: any) => void;
    subscribe: (topic: string) => void;
    unsubscribe: (topic: string) => void;
    psubscribe: (pattern: string) => void;
    punsubscribe: (pattern: string) => void;
    duplicate: () => RedisClient;
    quit: () => void;
  }

  declare module.exports: {
    RedisClient: typeof RedisClient,

    createClient: (settings: any) => RedisClient
  };
}
