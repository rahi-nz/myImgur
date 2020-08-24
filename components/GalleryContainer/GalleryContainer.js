// @flow
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGalleryAction } from '../../store/getGallery/getGalleryAction';
import GalleryLists from '../GalleryList/GalleryList';
import {
  Title, DropdownFilterContainer, FilterViralBtn, FilterViral, DropdownFilterItem, MainContainer,
} from './style';
import Dropdown from '../Dropdown/Dropdown';
import { sectionList, windowList } from '../../webConfig';

const GalleryContainer = () => {
  const [viral, setViral] = useState(false);
  const [section, setSection] = useState('hot');
  const [window, setWindow] = useState('day');

  const data = useSelector((state) => state.galleryList.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGalleryAction(1, section, viral, window));
}, [viral,section,window]); // eslint-disable-line
  const handleChangeViral = () => {
    setViral((prevState) => !prevState);
  };

  const handleChangeSection = (value) => {
    setSection(value);
  };

  const handleChangeWindow = (value) => {
    setWindow(value);
  };

  return (
    <MainContainer>
      <Title>
        Welcome to myImgur
      </Title>
      <DropdownFilterContainer>
        <DropdownFilterItem>
          <Dropdown filterName="section" defaultValue={section} list={sectionList} handleChangeFilter={handleChangeSection} />
          {
            section === 'top' && <Dropdown filterName="date range" defaultValue={window} list={windowList} handleChangeFilter={handleChangeWindow} />
          }
        </DropdownFilterItem>
        <FilterViral>
          <FilterViralBtn type="button" onClick={handleChangeViral}>{viral ? 'hide viral images' : 'Show viral images' }</FilterViralBtn>
        </FilterViral>
      </DropdownFilterContainer>
      {data && <GalleryLists viral={viral} section={section} window={window} />}
    </MainContainer>
  );
};

export default GalleryContainer;
