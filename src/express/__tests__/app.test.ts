import { Substitute } from '@fluffy-spoon/substitute';

import makeApp from '../app';
import { CustomContext } from '../types/CustomContext';
import * as Utils from '../utils';

describe('makeApp - Unit Test', () => {
  it('setBodyParser function should be called', () => {
    const customContext = Substitute.for<CustomContext>();
    const setBodyParserSpy = jest.spyOn(Utils, 'setBodyParser');
    const app = makeApp(customContext);
    expect(setBodyParserSpy).toHaveBeenCalled();
  });
});
