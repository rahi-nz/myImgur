import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from './Dropdown';

describe('<Dropdown/>', () => {
  let rootElement;
  let testRenderer;

  // eslint-disable-next-line prefer-const
  rootElement = () => (
    <Dropdown />
  );
  // eslint-disable-next-line prefer-const
  testRenderer = renderer.create(rootElement());

  it('Should render correctly', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
