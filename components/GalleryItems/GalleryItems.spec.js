import React from 'react';
import createStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import GalleryItems from './GalleryItems';

describe('<GalleryItems />', () => {
  let rootElement;
  let testRenderer;
  let store;

  beforeEach(async () => {
    store = createStore([])({
      galleryList: {
        loading: false,
        data: [
          {
            account_id: 10047121,
            account_url: 'anlyin',
            ad_config: {},
            ad_type: 0,
            ad_url: '',
            comment_count: 120,
            cover: 'EegS2cp',
            cover_height: 854,
            cover_width: 684,
            datetime: 1598349693,
            description: null,
            downs: 21,
            favorite: false,
            favorite_count: 956,
            id: 'Znq9l9n',
            images: [{ id: 1, title: 'test', type: 'video/mp4' }, { id: 2, title: 'test2', type: 'img/png' }],
            images_count: 1,
            in_gallery: true,
            in_most_viral: true,
            include_album_ads: false,
            is_ad: false,
            is_album: true,
            layout: 'blog',
            link: 'https://imgur.com/a/Znq9l9n',
            nsfw: false,
            points: 3056,
            privacy: 'hidden',
            score: 3104,
            section: '',
            tags: (5)[{ name: 'test', accent: 'test' }],
            title: 'LEGO loom makes beautiful scarves',
            topic: 'No Topic',
            topic_id: 29,
            ups: 3077,
            views: 97375,
            vote: null,
          },
        ],
        error: false,
      },
    });
    store.dispatch = jest.fn();

    rootElement = () => (
      <Provider store={store}>
        <GalleryItems index={0} />
      </Provider>
    );

    testRenderer = renderer.create(rootElement());
  });

  it('Should find the correct index', () => {
    expect(testRenderer.root.props.children.props.index).toBe(0);
    expect(testRenderer.root.findAllByProps({ 'data-test-id': 'video-wrapper' }).length).toBe(1);
  });

  it('Should render correctly', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
