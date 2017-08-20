import * as React from 'react';

declare module 'react-router-dom' {
  declare export class BrowserRouter extends React$Component<{
    basename?: string,
    forceRefresh?: boolean,
    getUserConfirmation?: GetUserConfirmation,
    keyLength?: number,
    children?: React$Element<*>,
  }> {}

  declare export class HashRouter extends React$Component<{
    basename?: string,
    getUserConfirmation?: GetUserConfirmation,
    hashType?: 'slash' | 'noslash' | 'hashbang',
    children?: React$Element<*>
  }> {}

  declare export class Link extends React$Component<{
    to: string | LocationShape,
    replace?: boolean,
    children?: React$Node
  }> {}

  declare export class NavLink extends React$Component<{
    to: string | LocationShape,
    activeClassName?: string,
    className?: string,
    activeStyle?: Object,
    style?: Object,
    isActive?: (match: Match, location: Location) => boolean,
    children?: React$Node,
    exact?: bool,
    strict?: bool
  }> {}

  // // NOTE: Below are duplicated from react-router. If updating these, please
  // // update the react-router and react-router-native types as well.
  declare export type Location = {
    pathname: string,
    search: string,
    hash: string,
    state?: any,
    key?: string
  };

  declare export type LocationShape = {
    pathname?: string,
    search?: string,
    hash?: string,
    state?: any
  };

  declare export type HistoryAction = 'PUSH' | 'REPLACE' | 'POP';

  declare export type RouterHistory = {
    length: number,
    location: Location,
    action: HistoryAction,
    listen(callback: (location: Location, action: HistoryAction) => void): () => void,
    push(path: string | LocationShape, state?: any): void,
    replace(path: string | LocationShape, state?: any): void,
    go(n: number): void,
    goBack(): void,
    goForward(): void,
    canGo?: (n: number) => bool,
    block(callback: (location: Location, action: HistoryAction) => boolean): void,
    // createMemoryHistory
    index?: number,
    entries?: Array<Location>
  };

  declare export type Match = {
    params: { [key: string]: ?string },
    isExact: boolean,
    path: string,
    url: string
  };

  declare export type ContextRouter = {
    history: RouterHistory,
    location: Location,
    match: Match
  };

  declare export type GetUserConfirmation = (message: string, callback: (confirmed: boolean) => void) => void;

  declare type StaticRouterContext = {
    url?: string
  };

  declare export class StaticRouter extends React$Component<{
    basename?: string,
    location?: string | Location,
    context: StaticRouterContext,
    children?: React$Element<*>
  }> {}

  declare export class MemoryRouter extends React$Component<{
    initialEntries?: Array<LocationShape | string>,
    initialIndex?: number,
    getUserConfirmation?: GetUserConfirmation,
    keyLength?: number,
    children?: React$Element<*>
  }> {}

  declare export class Router extends React$Component<{
    history: RouterHistory,
    children?: React$Element<*>
  }> {}

  declare export class Prompt extends React$Component<{
    message: string | (location: Location) => string | true,
    when?: boolean
  }> {}

  declare export class Redirect extends React$Component<{
    to: string | LocationShape,
    push?: boolean
  }> {}

  declare export class Route extends React$Component<{
    component?: React$Component<*>,
    render?: (router: ContextRouter) => React$Element<*>,
    children?: React.ComponentType<ContextRouter>,
    path?: string,
    exact?: bool,
    strict?: bool
  }> {}

  declare export class Switch extends React$Component<{
    children?: Array<React$Element<*>>
  }> {}

  declare type FunctionComponent<P> = (props: P) => ?React$Element<any>;
  declare type ClassComponent<D, P, S> = Class<React$Component<D, P, S>>;
  declare export function withRouter<P, S>(Component: ClassComponent<void, P, S> | FunctionComponent<P>): ClassComponent<void, $Diff<P, ContextRouter>, S>;

  declare type MatchPathOptions = {
    path: string,
    exact?: boolean,
    strict?: boolean
  };

  declare export function matchPath(pathname: string, options: MatchPathOptions): null | Match;
}
