import { Component } from '../component';
import { ComponentDir } from '../bundler/get-entry';

// TODO: remove this extends "ComponentDir", this should be part of the workspace alone since scope
// would never have componentDir and as it has nothing to do with `UIRoot`.
export interface UIRoot extends ComponentDir {
  /**
   * unique name of the ui.
   */
  name: string;

  /**
   * path of the ui root.
   */
  path: string;

  /**
   * paths for all extensions to load.
   */
  extensionsPaths: string[];

  /**
   * resolve components from a given pattern.
   */
  resolvePattern(pattern: string): Promise<Component[]>;

  /**
   * listener for when the dev server starts. can be used for running the watcher.
   */
  postStart?(options: PostStartOptions): Promise<void>;

  /**
   * determine whether UI should get a priority.
   */
  priority?: boolean;

  getProxy?: () => Promise<ProxyEntry[]>;
}

export type ProxyEntry = {
  /**
   * paths to apply on.
   */
  context: string[];

  /**
   * target URL
   */
  target: string;

  /**
   * proxy to a web socket.
   */
  ws?: boolean;
};

export type PostStartOptions = {
  /**
   * pattern for selecting components in the container.
   */
  pattern?: string;
};
