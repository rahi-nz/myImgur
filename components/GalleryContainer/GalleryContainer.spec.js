import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import waitForExpect from 'wait-for-expect';
import { getGalleryAction } from '../../store/getGallery/getGalleryAction';
import GalleryContainer from './GalleryContainer';

describe('<GalleryContainer />', () => {
  let rootElement;
  let testRenderer;
  let store;

  beforeEach(async () => {
    store = createStore([])({
      galleryList: {
        loading: false,
        data: [],
        error: false,
      },
    });
    store.dispatch = jest.fn();

    rootElement = () => (
      <Provider store={store}>
        <GalleryContainer />
      </Provider>
    );

    testRenderer = renderer.create(rootElement());
  });

  it('Should dispatch the getGalleryAction action on useEffect', () => {
    act(async () => {
      await waitForExpect(() => {
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(getGalleryAction(true, 1, 'hot', false, 'day'));
      });
    });
  });

  it('Should check viral button existence and on click action', () => {
    expect(testRenderer.root.findAllByProps({ 'data-test-id': 'viral-btn' }).length).toBe(1);
    expect(testRenderer.root.findAllByProps({ 'data-test-id': 'viral-btn' })[0].props.children).toBe('Show viral images');
    act(() => {
      testRenderer.root.findAllByProps({ 'data-test-id': 'viral-btn' })[0].props.onClick();
    });
    expect(testRenderer.root.findAllByProps({ 'data-test-id': 'viral-btn' })[0].props.children).toBe('hide viral images');
  });

  it('Should render correctly', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
