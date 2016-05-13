/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/
'use strict'
const _ = require('ramda')
function describe(tag, fn) {
  fn()
}

function it(tag, fn) {
  fn()
}

describe('Functions', () => {
  it('T and F', () => {
    const num1: boolean = _.T()
    const num2: boolean = _.F()
  })
  it('should typecheck pipe', () => {
    const f = _.compose(_.add)
    const m: (a: number) => number = f(2)
    const a = _.compose(_.add(2))
    const b: number = a(2)
    const fail: string = _.pipe(_.trim)('h')
    const str: Array<string|void> = _.pipe(_.toLower, _.trim, _.match(/2/))(' 1,2,3 ')
    const str1: Array<string> = _.pipe(_.toLower, _.trim, _.split(','))(' 1,2,3 ')
    const str2: string = _.pipe(_.replace('3', '4'), _.toLower, _.trim)(' 1,2,3 ')
  })
  it('should typecheck composition', () => {
    const f = _.pipe(_.add)
    const m: (a: number) => number = f(2)
    const a = _.pipe(_.add(2))
    const b: number = a(2)
    const fail: string = _.pipe(_.trim)('h')
    const str: Array<string|void> = _.compose(_.match(/2/), _.toLower, _.trim)(' 1,2,3 ')
    const str1: Array<string> = _.compose(_.split(','), _.toLower, _.trim)(' 1,2,3 ')
    const str2: string = _.compose(_.replace('3', '4'), _.toLower, _.trim)(' 1,2,3 ')
  })
})

describe('Math', () => {
  it('typechecks unary', () => {
    const n1: number = _.inc(1)
    const n2: number = _.dec(1)
  })
  it('typechecks binary', () => {
    const n1: number = _.divide(2, 4)
    const n2: (b: number) => number = _.divide(2)
    const n3: number = n2(2)
    const n4: number = _.add(2, 1)
    const n5: (b: number) => number = _.add(2)
    const n6: number = n5(2)
  })

  it('mean/median/product/sum', () => {
    const n1: number = _.mean([ 1, 2 ])
    const n2: number = _.median([ 1, 2 ])
    const n3: number = _.product([ 1, 2 ])
    const n4: number = _.sum([ 1, 2 ])
  })
})

describe('List', () => {
  it('typechecks adjust', () => {
    const a = [ 1, 2, 3 ]
    const b: Array<number> = _.adjust(_.add(2), _.__, a)(2)
    const c = [ 1, 2, 3 ]
    const d: Array<number|boolean> = _.adjust(_.T, 2, a)
    const adjustByAdd = _.adjust(_.add(2))
    const adjustSecondElemByAdd = adjustByAdd(2, a)
    const result: Array<number> = adjustSecondElemByAdd(a)
    const a1: boolean = _.all((x: number) => x < 1, [ 2,3,4 ])
  })
  it('typechecks insert', () => {
    const a = [ 1, 2, 3 ]
    const b: Array<number> = _.insert(1, _.__, a)(2)
    const c = [ 1, 2, 3 ]
    const b1: Array<number> = _.insertAll(1, c, a)
    const d: Array<number> = _.insert(0, 2, a)
    const insertAtOne = _.insert(1)
    const insertMe: Array<number> = insertAtOne(2)(a)
  })
  it('should typecheck all', function () {
    const a1: boolean = _.all((x: number) => x < 1, [ 2,3,4 ])
  })
  it('should typecheck chain', () => {
    const ch: Array<string> = _.chain(x => [ x + 'ss' ], [ 's', 'w' ])
  })
  it('should typecheck concat', () => {
    const s: Array<number> = _.concat([ 1 ],[ 2 ])
    const s1: Array<number> = _.concat([ 1 ])([ 2 ])
  })
  it('should typecheck contains', () => {
    const c: boolean = _.contains(1, [ 1,2 ])
    const c1: (xs: Array<number>) => boolean = _.contains(1)
    const c2: boolean = c1([ 1,2 ])
  })
  it('should typecheck drop', () => {
    const s: Array<number> = _.drop(1,[ 1, 2 ])
    const s1: Array<number> = _.drop(1)([ 1, 2 ])
    const s3: Array<number> = _.dropWhile(x => x > 1, [ 1,2,3 ])
    const s4: Array<string> = _.dropWhile(x => x === '2', [ '1','2' ])
  })
  it('should typecheck filter/find', () => {
    const s: Array<number> = _.filter(x => x > 1,[ 1, 2 ])
    const s1: Array<string> = _.filter(x => x === '2', [ '2', '3' ])
    const s3: {[key: string]: string} = _.filter(x => x === '2', { a:'2', b:'3' })
    const s4: ?string = _.find(x => x === '2', [ '1', '2' ])
    const s5: ?{[key: string]: number} = _.find(x => x === '2', { a:1, b:2 })
    const s6: number = _.findIndex(x => x === '2', [ '1', '2' ])
    const s7: number = _.findIndex(x => x === '2', { a:'1', b:'2' })
  })
  it('should typecheck flatten', function () {
    const s: Array<number> = _.flatten([ 1, [ 2 ], [ '1', [ 2, [ 3 ] ] ] ])
    const s1: Array<number> = _.flatten([ [ '1' ], [ '1', '2' ], [ '1', [ '2', [ '3' ] ] ] ])
  })

  it('should typecheck forEach', function () {
    const s: Array<number> = _.forEach(x => console.log(x), [ 1,2,3 ])
    const logEach: (x: Array<number>) => Array<number> = _.forEach(x => console.log(x))
  })

  it('should typecheck fromPairs', function () {
    const s: {[key: string]: number} = _.fromPairs([ [ 'hello', 1 ], [ 'bye', 2 ] ])
    const s1: {[key: string]: string} = _.fromPairs([ [ '1', 'hello' ], [ '2', 'bye' ] ])
  })

  it('should typecheck groupBy', function () {
    const s: {[key: string]: Array<number>} = _.groupBy(x => x > 1 ? 'A' : 'B', [ 0, 1, 2 ])
    const s1: {[key: string]: Array<Object>} = _.groupBy(x => x.n > 1 ? 'A' : 'B', [ { n:1 },{ n:2 } ])
  })

  it('should typecheck groupWith', function () {
    const s: Array<Array<number>> = _.groupWith((x,y) => x === y, [ 0, 1, 2 ])
    const s1: Array<string> = _.groupWith((x,y) => x === y, 'fffdahgs')
  })
  it('should typecheck head', function () {
    const s: ?number = _.head([ 1,2,3 ])
    const s1: ?string = _.head('hhhh')
  })
  it('should typecheck xprod', function () {
    const s: Array<[string, number]> = _.xprod([ 's', 'f' ], [ 1, 2 ])
    const s1: Array<[number, Object]> = _.xprod([ 1, 1 ], [ {}, {} ])
  })
})

describe('String', () => {
  it('should trim', () => {
    const s: string = _.trim('s')
  })
  it('should match/test', () => {
    const ss: Array<string|void> = _.match(/h/, 'b')
    const ss1: boolean = _.test(/h/, 'b')
    const ss2: Array<string> = _.split(',', 'b,d,d')
    const ss3: string = _.replace(',', '|', 'b,d,d')
  })
  it('should typecheck concat', () => {
    const s: string = _.concat('H','E')
    const s1: string = _.concat('H')('E')
  })
  it('should typecheck drop', () => {
    const s: string = _.drop(1,'EF')
    const s1: string = _.drop(1)('E')
    const s3: string = _.dropLast(1,'EF')
  })
})


describe('Object', () => {
  it('should typecheck evolve', () => {
    const s: Object = _.evolve({
      n: _.add(2),
    }, { n: 1 })
    const s1 = _.evolve({
      n: x => `${x}`,
    }, { n: 1, d: 2 })
  })
  it('should typecheck objOf', function () {
    const obj: {[key: string]: number} = _.objOf('key', 1)
    const obj1: {[key: string]: number} = _.objOf('key')(1)
  })
})

describe('Logic', () => {
  it('should typecheck pathSatisfies', function () {
    const obj: boolean = _.pathSatisfies(y => y > 1, [ 'x', 'y' ], { x: { y: 2 } })
    const obj1: boolean = _.pathSatisfies(y => y > 1)([ 'x', 'y' ])({ x: { y: 2 } })
    const obj2: boolean = _.pathSatisfies(y => y > 1, [ 'x', 'y' ])({ x: { y: 2 } })
    const obj3: boolean = _.pathSatisfies(y => y > 1)([ 'x', 'y' ], { x: { y: 2 } })
  })
  it('should typecheck propSatisfies', function () {
    const obj: boolean = _.propSatisfies(y => y > 1, 'y', { x: { y: 2 } })
    const obj1: boolean = _.propSatisfies(y => y > 1)('y')({ x: { y: 2 } })
    const obj2: boolean = _.propSatisfies(y => y > 1, 'y')({ x: { y: 2 } })
    const obj3: boolean = _.propSatisfies(y => y > 1)('y', { x: { y: 2 } })
  })
})

describe('Function', function () {
  it('should typecheck curry', function () {
    const fn: (y: number) => number = _.curry((x: number, y: number): number => x + y)(2)
  })
  it('should typecheck is', function () {
    const x = _.is(Number, 1)
  })
})
