import renderer from 'react-test-renderer';

describe('render dropdown', () => {
  it('should render', () => {
    const component = renderer.create('div');
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
