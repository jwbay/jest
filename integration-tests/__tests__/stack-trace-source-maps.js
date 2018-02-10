/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

const {readFileSync} = require('fs');
const path = require('path');
const skipOnWindows = require('../../scripts/skip_on_windows');
const {cleanup, run} = require('../utils');
const runJest = require('../runJest');

skipOnWindows.suite();

it('processes stack traces and code frames with source maps', () => {
  const dir = path.resolve(__dirname, '../stack-trace-source-maps');
  run('yarn', dir);
  const {stderr} = runJest(dir, ['--no-cache']);
  expect(stderr).toMatch('>  9 |   (() => expect(false).toBe(true))();');
  expect(stderr).toMatch(`at __tests__/fails.ts:9:24
      at Object.<anonymous> (__tests__/fails.ts:9:35)`);
});
