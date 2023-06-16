import React from 'react'
import Card from '../../components/Cards/Card'
import Footer from "../../components/Footer/Footer.js"
import { useEffect, useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import{getDogs, filterByTemp,filterByOrigin, getTemperaments, sortByName, sortByWeight} from "../../redux/actions";
import "./Home.css"
import SearchBar from '../../components/Searchbar/Searchbar';
import ClipLoader from "react-spinners/ClipLoader";
import perros from "../../dogs"
import temperamentos from "../../temperaments"

const Home = () => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const dogs = useSelector(state => state.dogs);
  
  const temperaments = useSelector(state => state.temperaments);

  const [currentPage, setCurrentPage] = useState(1);

    
  /*useEffect(() => {
    setLoading(true); // Establece el estado de carga en true antes de realizar la solicitud
    dispatch(getDogs());
    dispatch(getTemperaments())
    .then(() => {
      setLoading(false); // Establece el estado de carga en false cuando la solicitud se completa
  });
  
    
  }, [dispatch]); */


  // PAGINADO
  
  const pageSize = 8;
   
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const currentCards = dogs.slice(startIndex, endIndex);
  
    function handlePageChange(newPage) {
      setCurrentPage(newPage);
    }

    const totalPages = Math.ceil(dogs.length / pageSize);

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);




  async function handleFilterTemp(e) {
    //  await dispatch(getDogs());
      dispatch(filterByTemp(e.target.value))   
  }

  async function handleFilterOrigin(e) {
   // await dispatch(getDogs());
    dispatch(filterByOrigin(e.target.value))   
}

function handleSortName(e) {
  e.preventDefault();
  dispatch(sortByName(e.target.value))
}

function handleSortWeight(e) {
  e.preventDefault();
  dispatch(sortByWeight(e.target.value))
  
}


  return (
   <div className='main'>
    <div className='selectDiv'>
    <SearchBar/>
    <select  onChange={handleFilterTemp}>
  <option value="Todos">Filter by temp</option>
  {temperaments.map((temperamento) => (
    <option key={temperamento} value={temperamento}>{temperamento}</option>
  ))}
</select>
<select  onChange={handleFilterOrigin}>
  <option value="Todos">Filter by origin</option>
  <option value="Bases de datos">Database</option>
  <option value="Api Dogs">Dogs Api</option>
</select>
<select  onChange={handleSortName}>
 <option value="">Sort alphabetically</option>
 <option value="asc">A-Z</option>
 <option value="desc">Z-A</option>
</select>
<select  onChange={handleSortWeight}>
 <option value="">Sort by weight</option>
 <option value="asc">higher weight</option>
 <option value="desc">lower weight</option>
</select>
    </div>
    { loading ?  ( <div className='homeLoader'><ClipLoader color="#c487f4" size="80px" /> </div> ) :
    (<div className='cardContainer'>
      {currentCards.map((dog) => (
        <Card  
        key={dog.id}
        id={dog.id}
        name={dog.name}
        height={dog.height}
        life_span={dog.life_span}
        weight={dog.weight}
        image={dog.image} />
      ))}  
    </div>) }
    <div className='paginado'>
        <button
          className='btnPaginado'
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
          className='btnPaginado'
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
        <button
         className='btnPaginado'
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
      <Footer/>
    </div>
  )
}

export default Home