import React from 'react'
import Card from '../../components/Cards/Card'
import Footer from "../../components/Footer/Footer.js"
import {Link} from "react-router-dom"
import { useEffect, useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import{getDogs, filterByTemp,filterByOrigin, getTemperaments, sortByName} from "../../redux/actions";
import "./Home.css"
const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  
    
  }, [dispatch]);

  const dogs = useSelector(state => state.dogs);
  
  const temperaments = useSelector(state => state.temperaments);

  const [currentPage, setCurrentPage] = useState(1);

  const [orden, setOrden] = useState('')

  
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
      await dispatch(getDogs());
      dispatch(filterByTemp(e.target.value))   
  }

  async function handleFilterOrigin(e) {
    await dispatch(getDogs());
    dispatch(filterByOrigin(e.target.value))   
}

function handleSortName(e) {
  e.preventDefault();
  dispatch(sortByName(e.target.value))
  setOrden(`Ordenado ${e.target.value}`)
}

  return (
   <div className='main'>
    <div className='selectDiv'>
    <select  onChange={handleFilterTemp}>
  <option value="Todos">Filtrar por temperamento</option>
  {temperaments.map((temperamento) => (
    <option key={temperamento} value={temperamento}>{temperamento}</option>
  ))}
</select>
<select  onChange={handleFilterOrigin}>
  <option value="Todos">Filtrar por origen</option>
  <option value="Bases de datos">Base de datos</option>
  <option value="Api Dogs">Api Dogs</option>
</select>
<select  onChange={handleSortName}>
 <option value="">Orden Alfabético</option>
 <option value="asc">A-Z</option>
 <option value="desc">Z-A</option>
</select>
    </div>

    <div className='cardContainer'>
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
      <div>
        <button
          className='btnPaginado'
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Anterior
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
          Siguiente
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home