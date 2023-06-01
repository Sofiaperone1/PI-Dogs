import React from 'react';
import { useDispatch } from 'react-redux';
import { searchbar } from '../../redux/actions';
import "../../views/Home/Home.css"

const SearchBar = () => {

const dispatch = useDispatch();


const handleSearchChange = (e) => {
  e.preventDefault()
  dispatch(searchbar(e.target.value))
}

  return (
    <div className='sbCont'>
   {/*  <img src={buscar2} alt="" />*/}
    <input 
      className="searchBar"
      type="text"
      placeholder="Find..."
      onChange={handleSearchChange}
    />
    </div>
    
  );
};

export default SearchBar;