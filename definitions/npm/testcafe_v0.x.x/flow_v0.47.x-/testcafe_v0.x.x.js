/**
 * Flowtype definitions for TestCafe
 * Based on definitions generated by Flowgen
 * Flowgen v1.2.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type TestCafe$CustomPropsSnapshotTypeTransform = <V>((node: HTMLElement) => V | Promise<V>) => V
declare type TestCafe$CustomPropsSelectorTypeTransform = <V>((node: HTMLElement) => V | Promise<V>) => Promise<V>
declare type TestCafe$CustomMethodsSelectorTypeTransform = <V>((node: HTMLElement, ...args: any) => V | Promise<V>) => ((...args: any) => Promise<V>)

declare type TestCafe$ClientFunctionOptions = {
    dependencies?: { [string]: any },

    boundTestRun?: TestCafe$TestController
}

declare interface TestCafe$TextRectangle {
    bottom: number,
    left: number,
    right: number,
    top: number,
    width: number,
    height: number
}

declare interface TestCafe$NodeSnapshot {
    childElementCount: number,
    childNodeCount: number,
    hasChildElements: boolean,
    hasChildNodes: boolean,
    nodeType: number,
    textContent: string,
    attributes?: { [name: string]: string },
    boundingClientRect?: TestCafe$TextRectangle,
    checked?: boolean | void,
    classNames?: string[],
    clientHeight?: number,
    clientLeft?: number,
    clientTop?: number,
    clientWidth?: number,
    focused?: boolean,
    id?: string,
    innerText?: string,
    namespaceURI?: string | null,
    offsetHeight?: number,
    offsetLeft?: number,
    offsetTop?: number,
    offsetWidth?: number,
    selected?: boolean | void,
    selectedIndex?: number | void,
    scrollHeight?: number,
    scrollLeft?: number,
    scrollTop?: number,
    scrollWidth?: number,
    style?: { [prop: string]: string },
    tagName?: string,
    value?: string | void,
    visible?: boolean,
    hasClass(className: string): boolean,
    getStyleProperty(propertyName: string): string,
    getAttribute(attributeName: string): string,
    getBoundingClientRectProperty(propertyName: string): number,
    hasAttribute(attributeName: string): boolean
}

declare interface TestCafe$SelectorOptions {
    boundTestRun?: TestCafe$TestController,
    timeout?: number,
    visibilityCheck?: boolean
}

declare interface TestCafe$SelectorAPI {
    childElementCount: Promise<number>,
    childNodeCount: Promise<number>,
    hasChildElements: Promise<boolean>,
    hasChildNodes: Promise<boolean>,
    nodeType: Promise<number>,
    textContent: Promise<string>,
    attributes: Promise<{ [name: string]: string }>,
    boundingClientRect: Promise<TestCafe$TextRectangle>,
    checked: Promise<boolean | void>,
    classNames: Promise<string[]>,
    clientHeight: Promise<number>,
    clientLeft: Promise<number>,
    clientTop: Promise<number>,
    clientWidth: Promise<number>,
    focused: Promise<boolean>,
    id: Promise<string>,
    innerText: Promise<string>,
    namespaceURI: Promise<string | null>,
    offsetHeight: Promise<number>,
    offsetLeft: Promise<number>,
    offsetTop: Promise<number>,
    offsetWidth: Promise<number>,
    selected: Promise<boolean | void>,
    selectedIndex: Promise<number | void>,
    scrollHeight: Promise<number>,
    scrollLeft: Promise<number>,
    scrollTop: Promise<number>,
    scrollWidth: Promise<number>,
    style: Promise<{ [prop: string]: string }>,
    tagName: Promise<string>,
    value: Promise<string | void>,
    visible: Promise<boolean>,

    hasClass(className: string): Promise<boolean>,
    getStyleProperty(propertyName: string): Promise<string>,
    getAttribute(attributeName: string): Promise<string>,
    getBoundingClientRectProperty(propertyName: string): Promise<number>,
    hasAttribute(attributeName: string): Promise<boolean>,
    nth(index: number): TestCafe$SelectorFn,
    withText(text: string): TestCafe$SelectorFn,
    withText(re: RegExp): TestCafe$SelectorFn,
    withAttribute(attrName: string | RegExp, attrValue?: string | RegExp): TestCafe$SelectorPromise,
    filter(cssSelector: string): TestCafe$SelectorFn,
    filter(
        filterFn: (node: Element, idx: number) => boolean,
        dependencies?: { [string]: any }): TestCafe$SelectorFn,

    find(cssSelector: string): TestCafe$SelectorFn,
    find(
        filterFn: (node: Element, idx: number, originNode: Element) => boolean,
        dependencies?: { [string]: any }): TestCafe$SelectorFn,

    parent(): TestCafe$SelectorFn,
    parent(index: number): TestCafe$SelectorFn,
    parent(cssSelector: string): TestCafe$SelectorFn,
    parent(
        filterFn: (node: Element, idx: number, originNode: Element) => boolean,
        dependencies?: { [string]: any }): TestCafe$SelectorFn,

    child(): TestCafe$SelectorFn,
    child(index: number): TestCafe$SelectorFn,
    child(cssSelector: string): TestCafe$SelectorFn,
    child(
        filterFn: (node: Element, idx: number, originNode: Element) => boolean,
        dependencies?: { [string]: any }): TestCafe$SelectorFn,

    sibling(): TestCafe$SelectorFn,


    sibling(index: number): TestCafe$SelectorFn,


    sibling(cssSelector: string): TestCafe$SelectorFn,


    sibling(
        filterFn: (node: Element, idx: number, originNode: Element) => boolean,
        dependencies?: { [string]: any }): TestCafe$SelectorFn,


    nextSibling(): TestCafe$SelectorFn,


    nextSibling(index: number): TestCafe$SelectorFn,


    nextSibling(cssSelector: string): TestCafe$SelectorFn,


    nextSibling(
        filterFn: (node: Element, idx: number, originNode: Element) => boolean,
        dependencies?: { [string]: any }): TestCafe$SelectorFn,


    prevSibling(): TestCafe$SelectorFn,


    prevSibling(index: number): TestCafe$SelectorFn,


    prevSibling(cssSelector: string): TestCafe$SelectorFn,


    prevSibling(
        filterFn: (node: Element, idx: number, originNode: Element) => boolean,
        dependencies?: { [string]: any }): TestCafe$SelectorFn,


    exists: Promise<boolean>,


    count: Promise<number>,


    addCustomDOMProperties<T>(props: T): TestCafe$CustomPropsSelectorFn<T>,


    addCustomMethods<T>(methods: T): TestCafe$CustomMethodsSelectorFn<T>,


    with(options?: TestCafe$SelectorOptions): TestCafe$SelectorFn
}

declare interface TestCafe$SelectorPromise extends TestCafe$SelectorAPI, Promise<TestCafe$NodeSnapshot> {

}

declare interface TestCafe$CustomMethodsSelectorPromiseI<T> extends TestCafe$SelectorAPI, Promise<TestCafe$NodeSnapshot & $ObjMap<T, TestCafe$CustomMethodsSelectorTypeTransform>> {

}

declare type TestCafe$CustomMethodsSelectorPromise<T> = TestCafe$CustomMethodsSelectorPromiseI<T> & $ObjMap<T, TestCafe$CustomMethodsSelectorTypeTransform>;

declare interface TestCafe$CustomPropsSelectorPromiseI<T> extends TestCafe$SelectorAPI, Promise<TestCafe$NodeSnapshot & $ObjMap<T, TestCafe$CustomPropsSnapshotTypeTransform>> {

}

declare type TestCafe$CustomPropsSelectorPromise<T> = TestCafe$CustomPropsSelectorPromiseI<T> & $ObjMap<T, TestCafe$CustomPropsSelectorTypeTransform>;

declare interface TestCafe$RoleOptions {
    preseveUrl?: boolean
}

declare interface TestCafe$KeyModifiers {
    ctrl?: boolean,
    alt?: boolean,
    shift?: boolean,
    meta?: boolean
}

declare interface TestCafe$ActionOptions {
    speed?: number
}

declare interface TestCafe$MouseActionOptions extends TestCafe$ActionOptions {
    offsetX?: number,
    offsetY?: number,
    modifiers?: TestCafe$KeyModifiers
}

declare interface TestCafe$ClickActionOptions extends TestCafe$MouseActionOptions {
    caretPos?: number
}

declare interface TypeActionOptions extends TestCafe$ClickActionOptions {
    replace?: boolean,
    paste?: boolean
}

declare interface TestCafe$ResizeToFitDeviceOptions {
    portraitOrientation?: boolean
}

declare interface TestCafe$NativeDialogHistoryItem {
    type: 'alert' | 'confirm' | 'beforeunload' | 'prompt',
    text: string,
    url: string
}

declare interface TestCafe$TestController {
    ctx: { [key: string]: any },
    fixtureCtx: { [key: string]: any },

    click(
        selector: string |
        TestCafe$SelectorFn |
        TestCafe$NodeSnapshot |
        TestCafe$SelectorPromise |
        ((...args: any[]) => Node | Node[] | NodeList<*> | HTMLCollection<*>),
        options?: TestCafe$ClickActionOptions): TestCafe$TestControllerPromise,

    rightClick(
        selector: string |
        TestCafe$SelectorFn |
        TestCafe$NodeSnapshot |
        TestCafe$SelectorPromise |
        ((...args: any[]) => Node | Node[] | NodeList<*> | HTMLCollection<*>),
        options?: TestCafe$ClickActionOptions): TestCafe$TestControllerPromise,

    doubleClick(
        selector: string |
        TestCafe$SelectorFn |
        TestCafe$NodeSnapshot |
        TestCafe$SelectorPromise |
        ((...args: any[]) => Node | Node[] | NodeList<*> | HTMLCollection<*>),
        options?: TestCafe$ClickActionOptions): TestCafe$TestControllerPromise,

    hover(
        selector: string |
        TestCafe$SelectorFn |
        TestCafe$NodeSnapshot |
        TestCafe$SelectorPromise |
        ((...args: any[]) => Node | Node[] | NodeList<*> | HTMLCollection<*>),
        options?: TestCafe$MouseActionOptions): TestCafe$TestControllerPromise,

    drag(
        selector: string |
        TestCafe$SelectorFn |
        TestCafe$NodeSnapshot |
        TestCafe$SelectorPromise |
        ((...args: any[]) => Node | Node[] | NodeList<*> | HTMLCollection<*>),
        dragOffsetX: number,
        dragOffsetY: number,
        options?: TestCafe$MouseActionOptions): TestCafe$TestControllerPromise,

    dragToElement(
        selector: string |
        TestCafe$SelectorFn |
        TestCafe$NodeSnapshot |
        TestCafe$SelectorPromise |
        ((...args: any[]) => Node | Node[] | NodeList<*> | HTMLCollection<*>),
        destinationSelector: string |
        TestCafe$SelectorFn |
        TestCafe$NodeSnapshot |
        TestCafe$SelectorPromise |
        ((...args: any[]) => Node | Node[] | NodeList<*> | HTMLCollection<*>),
        options?: TestCafe$MouseActionOptions): TestCafe$TestControllerPromise,

    typeText(
        selector: string |
        TestCafe$SelectorFn |
        TestCafe$NodeSnapshot |
        TestCafe$SelectorPromise |
        ((...args: any[]) => Node | Node[] | NodeList<*> | HTMLCollection<*>),
        text: string,
        options?: TypeActionOptions): TestCafe$TestControllerPromise,

    selectText(
        selector: string |
        TestCafe$SelectorFn |
        TestCafe$NodeSnapshot |
        TestCafe$SelectorPromise |
        ((...args: any[]) => Node | Node[] | NodeList<*> | HTMLCollection<*>),
        startPos: number,
        endPos: number,
        startPos?: number,
        endPos?: number,
        options?: TestCafe$ActionOptions): TestCafe$TestControllerPromise,

    selectTextAreaContent(
        selector: string |
        TestCafe$SelectorFn |
        TestCafe$NodeSnapshot |
        TestCafe$SelectorPromise |
        ((...args: any[]) => Node | Node[] | NodeList<*> | HTMLCollection<*>),
        startLine: number,
        startPos: number,
        endLine: number,
        endPos: number,
        startLine?: number,
        startPos?: number,
        endLine?: number,
        endPos?: number,
        options?: TestCafe$ActionOptions): TestCafe$TestControllerPromise,

    selectEditableContent(
        startSelector: string |
        TestCafe$SelectorFn |
        TestCafe$NodeSnapshot |
        TestCafe$SelectorPromise |
        ((...args: any[]) => Node | Node[] | NodeList<*> | HTMLCollection<*>),
        endSelector: string |
        TestCafe$SelectorFn |
        TestCafe$NodeSnapshot |
        TestCafe$SelectorPromise |
        ((...args: any[]) => Node | Node[] | NodeList<*> | HTMLCollection<*>),
        options?: TestCafe$ActionOptions): TestCafe$TestControllerPromise,

    pressKey(keys: string, options?: TestCafe$ActionOptions): TestCafe$TestControllerPromise,

    wait(timeout: number): TestCafe$TestControllerPromise,

    navigateTo(url: string): TestCafe$TestControllerPromise,

    setFilesToUpload(
        selector: string |
        TestCafe$SelectorFn |
        TestCafe$NodeSnapshot |
        TestCafe$SelectorPromise |
        ((...args: any[]) => Node | Node[] | NodeList<*> | HTMLCollection<*>),
        filePath: string | string[]): TestCafe$TestControllerPromise,

    clearUpload(
        selector: string |
        TestCafe$SelectorFn |
        TestCafe$NodeSnapshot |
        TestCafe$SelectorPromise |
        ((...args: any[]) => Node | Node[] | NodeList<*> | HTMLCollection<*>)): TestCafe$TestControllerPromise,

    takeScreenshot(path?: string): TestCafe$TestControllerPromise,

    resizeWindow(width: number, height: number): TestCafe$TestControllerPromise,

    resizeWindowToFitDevice(deviceName: string, options?: TestCafe$ResizeToFitDeviceOptions): TestCafe$TestControllerPromise,

    maximizeWindow(): TestCafe$TestControllerPromise,

    switchToIframe(
        selector: string |
        TestCafe$SelectorFn |
        TestCafe$NodeSnapshot |
        TestCafe$SelectorPromise |
        ((...args: any[]) => Node | Node[] | NodeList<*> | HTMLCollection<*>)): TestCafe$TestControllerPromise,

    switchToMainWindow(): TestCafe$TestControllerPromise,

    eval(fn: Function, options?: TestCafe$ClientFunctionOptions): Promise<any>,

    setNativeDialogHandler(
        fn: ((
            type: 'alert' | 'confirm' | 'beforeunload' | 'prompt',
            text: string,
            url: string) => any) | null,
        options?: TestCafe$ClientFunctionOptions): TestCafe$TestControllerPromise,

    getNativeDialogHistory(): Promise<TestCafe$NativeDialogHistoryItem[]>,

    expect(actual: any): TestCafe$Assertion,

    debug(): TestCafe$TestControllerPromise,

    setTestSpeed(speed: number): TestCafe$TestControllerPromise,

    useRole(role: TestCafe$RoleFn): TestCafe$TestControllerPromise
}

declare interface TestCafe$TestControllerPromise extends TestCafe$TestController, Promise<any> {

};

declare interface TestCafe$AssertionOptions {
    timeout?: number
}

declare interface TestCafe$Assertion {
    eql(
        expected: any,
        message?: string,
        options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    eql(expected: any, options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    notEql(
        unexpected: any,
        message?: string,
        options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    notEql(unexpected: any, options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    ok(message?: string, options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    ok(options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    notOk(message?: string, options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    notOk(options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    contains(
        expected: any,
        message?: string,
        options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    contains(expected: any, options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    notContains(
        unexpected: any,
        message?: string,
        options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    notContains(unexpected: any, options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    typeOf(
        typeName: string,
        message?: string,
        options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    typeOf(typeName: string, options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    notTypeOf(
        typeName: string,
        message?: string,
        options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    notTypeOf(typeName: string, options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    gt(
        expected: number,
        message?: string,
        options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    gt(expected: number, options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    gte(
        expected: number,
        message?: string,
        options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    gte(expected: number, options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    lt(
        expected: number,
        message?: string,
        options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    lt(expected: number, options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    lte(
        expected: number,
        message?: string,
        options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    lte(expected: number, options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    within(
        start: number,
        finish: number,
        message?: string,
        options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    within(
        start: number,
        finish: number,
        options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    notWithin(
        start: number,
        finish: number,
        message?: string,
        options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    notWithin(
        start: number,
        finish: number,
        options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    match(
        re: RegExp,
        message?: string,
        options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    match(re: RegExp, options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    notMatch(
        re: RegExp,
        message?: string,
        options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise,

    notMatch(re: RegExp, options?: TestCafe$AssertionOptions): TestCafe$TestControllerPromise
}

declare interface TestCafe$HTTPAuthCredentials {
    username: string,
    password: string,
    domain?: string,
    workstation?: string
}

declare interface TestCafe$FixtureFn {
    (name: string|string[]): TestCafe$FixtureFn,
    page(url: string|string[]): TestCafe$FixtureFn,
    httpAuth(credentials: TestCafe$HTTPAuthCredentials): TestCafe$FixtureFn,
    before(fn: (ctx: { [key: string]: any }) => Promise<any>): TestCafe$FixtureFn,
    after(fn: (ctx: {[key: string]: any }) => Promise<any>): TestCafe$FixtureFn,
    beforeEach(fn: (t: TestCafe$TestController) => Promise<any>): TestCafe$FixtureFn,
    afterEach(fn: (t: TestCafe$TestController) => Promise<any>): TestCafe$FixtureFn,
    skip: TestCafe$FixtureFn,
    only: TestCafe$FixtureFn
}

declare interface TestCafe$TestFn {
    (name: string|string[], fn: (t: TestCafe$TestController) => Promise<any>): TestCafe$TestFn,
    page(url: string|string[]): TestCafe$TestFn,
    httpAuth(credentials: TestCafe$HTTPAuthCredentials): TestCafe$TestFn,
    before(fn: (t: TestCafe$TestController) => Promise<any>): TestCafe$TestFn,
    after(fn: (t: TestCafe$TestController) => Promise<any>): TestCafe$TestFn,
    skip: TestCafe$TestFn,
    only: TestCafe$TestFn
}

declare interface TestCafe$SelectorCallable {
  (...args: any[]): TestCafe$SelectorPromise
}

declare interface TestCafe$CustomSelectorCallable<T> {
  (...args: any[]): T
}

declare interface TestCafe$SelectorFn extends TestCafe$SelectorAPI, TestCafe$SelectorCallable {
}

declare interface TestCafe$CustomSelectorFnI<T> extends TestCafe$SelectorAPI, TestCafe$CustomSelectorCallable<T> {

}

declare type TestCafe$CustomPropsSelectorFn<T> = TestCafe$CustomSelectorFnI<TestCafe$CustomPropsSelectorPromise<T>> & $ObjMap<T, TestCafe$CustomPropsSelectorTypeTransform>;

declare type TestCafe$CustomMethodsSelectorFn<T> = TestCafe$CustomSelectorFnI<TestCafe$CustomMethodsSelectorPromise<T>> & $ObjMap<T, TestCafe$CustomMethodsSelectorTypeTransform>;

declare interface TestCafe$ClientFunctionFn {
    (...args: any[]): Promise<any>,
    with(options: TestCafe$ClientFunctionOptions): TestCafe$ClientFunctionFn
}

declare interface TestCafe$RoleFn {
    (url: string, fn: (t: TestCafe$TestController) => Promise<any>, options?: TestCafe$RoleOptions): TestCafe$RoleFn,
    anonymous(): TestCafe$RoleFn
};

declare var fixture: TestCafe$FixtureFn;
declare var test: TestCafe$TestFn;

declare module 'testcafe' {
    declare interface BrowserConnection {
        url: string,
        on(event: 'ready', handler: Function): BrowserConnection
    }

    declare type BrowserType = string | { path: string, cmd: string } | BrowserConnection;

    declare interface Stream {
        write(chunk: string): any
    }

    declare interface CancelablePromise<T> extends Promise<T> {
        cancel(): Promise<void>
    }

    declare class Runner {
        src(...source: (string | string [])[]): Runner,
        filter(callback: (testName: string, fixtureName: string, fixturePath: string) => boolean): Runner,
        browsers(...browser: (BrowserType | BrowserType [])[]): Runner,
        screenshots(path: string, takeOnFails?: boolean): Runner,
        reporter(name: string, outStream?: Stream): Runner,
        startApp(command: string, initDelay?: number): Runner,
        useProxy(host: string): Runner,

        run(options?: {
            skipJsErrors: boolean,
            quarantineMode: boolean,
            selectorTimeout: number,
            assertionTimeout: number,
            speed: number,
            debugMode: boolean
        }): CancelablePromise<number>,

        stop(): Promise<void>
    }

    declare interface TestCafe {
        createBrowserConnection(): Promise<BrowserConnection>,
        createRunner(): Runner,
        close(): Promise<void>
    }

    declare module.exports: {
        (hostname: string, port1: number, port2: number): Promise<TestCafe>,

        Selector(init: string | ((...args: any[]) => null | Node | Node[] | NodeList<*> | HTMLCollection<*>) | TestCafe$SelectorFn | TestCafe$NodeSnapshot | TestCafe$SelectorPromise,
                                     options?: TestCafe$SelectorOptions): TestCafe$SelectorFn,
        ClientFunction(fn: Function, options?: TestCafe$ClientFunctionOptions): TestCafe$ClientFunctionFn,

        Role: TestCafe$RoleFn,
        t: TestCafe$TestController
    };
}
