import { useState } from "react";
import { useDispatch } from 'react-redux';
import styles from "../SearchBar/SearchBar.module.css"
import { searchPoke } from "../../redux/actions";

const SearchBar = ({setCurrentPage}) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    //e.preventDefault(e);
    setName(event.target.value);
  };

  const handleButtonSubmit = () => {
    //e.preventDefault(e);
    dispatch(searchPoke(name)); 
    setName(''); 
    setTimeout(() => setCurrentPage(1), 2000);
  }

  return (
    <div className={styles.container}>
      <input className={styles.input} type="search" value={name} placeholder="Search by name..." onChange={handleChange}/>
      <button className={styles.button} onClick={handleButtonSubmit}> 🔎 </button> 
    </div>
  );
};

export default SearchBar;