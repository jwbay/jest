/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @emails oncall+jsinfra
 */

'use strict';

const ModuleMap = require('jest-haste-map').ModuleMap;
const Resolver = require('../');

describe('isCoreModule', () => {
  it('returns false if `hasCoreModules` is false.', () => {
    const moduleMap = new ModuleMap();
    const resolver = new Resolver(moduleMap, {
      hasCoreModules: false,
    });
    const isCore = resolver.isCoreModule('assert');
    expect(isCore).toEqual(false);
  });

  it('returns true if `hasCoreModules` is true and `moduleName` is a core module.', () => {
    const moduleMap = new ModuleMap();
    const resolver = new Resolver(moduleMap, {});
    const isCore = resolver.isCoreModule('assert');
    expect(isCore).toEqual(true);
  });

  it('returns false if `hasCoreModules` is true and `moduleName` is not a core module.', () => {
    const moduleMap = new ModuleMap();
    const resolver = new Resolver(moduleMap, {});
    const isCore = resolver.isCoreModule('not-a-core-module');
    expect(isCore).toEqual(false);
  });
});
