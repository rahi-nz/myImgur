// @flow
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGalleryAction } from '../../store/getGallery/getGalleryAction';
import GalleryLists from '../GalleryList/GalleryList';
import {
  Title,
  DropdownFilterContainer,
  FilterViralBtn,
  FilterViral,
  DropdownFilterItem,
  MainContainer,
  LoadingContainer,
  LoadingGif,
  LoadingTitle,
} from './style';
import Dropdown from '../Dropdown/Dropdown';
import { sectionList, dateRangeList } from '../../webConfig';

const GalleryContainer = () => {
  const [viral, setViral] = useState(false);
  const [section, setSection] = useState('hot');
  const [dateRange, setDateRange] = useState('day');
  const [filterLoading, setFilterLoading] = useState(false);

  const loading = useSelector((state) => state.galleryList.loading);
  const error = useSelector((state) => state.galleryList.error);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setFilterLoading(true);
      await dispatch(getGalleryAction(true, 1, section, viral, dateRange));
      setFilterLoading(false);
    })();
  }, [viral,section,dateRange]); // eslint-disable-line

  const handleChangeViral = () => {
    setViral((prevState) => !prevState);
  };

  const handleChangeSection = (value) => {
    setSection(value);
  };

  const handleChangeWindow = (value) => {
    setDateRange(value);
  };

  const renderComponent = () => {
    if (error) {
      return <div>error</div>;
    } if (loading || filterLoading) {
      return (
        <LoadingContainer>
          <LoadingTitle>loading Data ...</LoadingTitle>
          <LoadingGif alt="MyImgur" src="/loading/loading.gif" />
        </LoadingContainer>
      );
    }
    return <GalleryLists viral={viral} section={section} dateRange={dateRange} />;
  };

  return (
    <MainContainer>
      <Title>
        Welcome to myImgur
      </Title>
      <DropdownFilterContainer>
        <DropdownFilterItem>
          <Dropdown
            defaultValue={section}
            list={sectionList}
            handleChangeFilter={handleChangeSection}
          />
          {
            section === 'top' && <Dropdown defaultValue={dateRange} list={dateRangeList} handleChangeFilter={handleChangeWindow} />
          }
        </DropdownFilterItem>
        <FilterViral>
          <FilterViralBtn type="button" onClick={handleChangeViral}>{viral ? 'hide viral images' : 'Show viral images' }</FilterViralBtn>
        </FilterViral>
      </DropdownFilterContainer>
      {renderComponent()}
    </MainContainer>
  );
};

export default GalleryContainer;
