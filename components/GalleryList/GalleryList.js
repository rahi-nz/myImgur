import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
// import Link from 'next/link';
import { getGalleryAction } from '../../store/getGallery/getGalleryAction';

const GalleryLists = ({ viral, section, window }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.galleryList.data);
  const itemsCount = useSelector((state) => state.galleryList.data.length);
  const [page, setPage] = useState(1);
  const GAP_SIZE = 20;
  const CARD_HEIGHT = 300;
  const CARD_WIDTH = 240;
  let stopIndex;

  const isItemLoaded = (totalCount) => {
    console.log(totalCount, stopIndex, '--');
    return totalCount - stopIndex > 5;
  };

  const loadMoreItems = () => {
    dispatch(getGalleryAction(page, section, viral, window));
    setPage((prevState) => prevState + 1);
  };

  const renderItem = (i) => <div>{i}</div>;

  const Item = ({ data, index, style }) => {
    const {
      cardHeight,
      cardWidth,
      columnCount,
      gapSize,
      itemCount,
      items,
    } = data;

    // This is the range of cards visible on this row, given the current width:
    // const itemIndex = index * columnCount + columnIndex;
    const startIndex = index * columnCount;
    stopIndex = Math.min(itemCount - 1, startIndex + columnCount - 1);

    const cards = [];
    for (let i = startIndex; i <= stopIndex; i++) {
      cards.push(
        <div
          key={i}
          className="Card"
          style={{
            flex: `0 0 ${cardWidth}px`,
            height: cardHeight,
            margin: `0 ${gapSize / 2}px`,
          }}
        >
          {renderItem(i)}
        </div>,
      );
    }

    return (
      <div className="Item" style={style}>
        {cards}
      </div>
    );
  };
  const ListWrapper = ({
    height, itemCount, width, ref, onItemsRendered,
  }) => {
    // How many cards can we show per row, given the current width?
    const columnCount = Math.floor(
      (width - GAP_SIZE) / (CARD_WIDTH + GAP_SIZE),
    );
    const rowCount = Math.ceil(itemCount / columnCount);

    const itemData = useMemo(
      () => ({
        columnCount,
        itemCount,
        items,
        // These values could be dynamically calculated as well
        cardWidth: CARD_WIDTH,
        cardHeight: CARD_HEIGHT,
        gapSize: GAP_SIZE,
      }),
      [columnCount, itemCount],
    );

    return (
      <List
        className="List"
        height={height}
        itemCount={rowCount}
        itemSize={CARD_HEIGHT + GAP_SIZE}
        width={width}
        itemData={itemData}
        onItemsRendered={onItemsRendered}
        ref={ref}
      >
        {Item}
      </List>
    );
  };
  // console.log(`itemsCount: ${itemsCount}`);
  // console.log(`items: ${items.length}`);

  return (
    <div className="root">
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isItemLoaded={(index) => isItemLoaded(itemsCount, index)}
            itemCount={itemsCount}
            loadMoreItems={loadMoreItems}
          >
            {({ onItemsRendered, ref }) => (
              <ListWrapper
                height={height}
                itemCount={itemsCount}
                width={width}
                onItemsRendered={onItemsRendered}
                ref={ref}
              />
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </div>
  );
};

export default GalleryLists;
