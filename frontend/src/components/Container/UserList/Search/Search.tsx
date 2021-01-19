import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchInterlocutors } from '../../../../redux/actions';

import './Search.css';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const searchUsernames = useSelector((state: any) => state.searchUsernames);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInterlocutors(e.target.value));
  };

  return (
    <>
      <input className='search' type='text' value={searchUsernames} placeholder='Search...' onChange={onChange} />
    </>
  );
};

export default Search;
