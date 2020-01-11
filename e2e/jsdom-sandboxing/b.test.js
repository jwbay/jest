/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
test('jsdom-b', () => {
  /* eslint-disable no-undef */
  expect(document.createElement('div').offsetWidth).toBe(0);
  Object.defineProperty(HTMLDivElement.prototype, 'offsetWidth', {value: 24});
  expect(document.createElement('div').offsetWidth).toBe(24);
  /* eslint-enable no-undef */
});
