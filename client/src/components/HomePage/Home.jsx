import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import {
  allPoke,
  filterOrigin,
  filterTypes,
  getTypes,
  orderAlf,
  orderAtt,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import styles from "../HomePage/Home.module.css";
import Page from "../Pagination/Pagination";

const Home = () => {
  //const pokeByName = useSelector((state) => state.allPokemons);
  const pokemons = useSelector((state) => state.allPokemons);
  const pokesBackUp = useSelector((state) => state.allPokemonsCopy);
  const allTypes = useSelector((state) => state.types);
  const [orden, setOrden] = useState(""); //voy a mostrar que orden estoy aplicando, hace que vuelva a renderizar mi useEffect.
  const dispatch = useDispatch();

  /*Paginado*/
  const [currentPage, setCurrentPage] = useState(1);
  const [pokePerPage, setPokePerPage] = useState(12);
  const [render, setRender] = useState(false);
  const indexLastPoke = currentPage * pokePerPage; // 12 -> seria el indice del 13 poke
  const indexFirstPoke = indexLastPoke - pokePerPage; // 12 - 12 = 0 -> me da el indice del primer poke.
  const currentPokes = pokemons.slice(indexFirstPoke, indexLastPoke);
  /*SideBar*/
  const [isExpanded, setIsExpanded] = useState(false);

  const page = (pageNum) => {
    setCurrentPage(pageNum); //seteo el estado, y esto hace que cambie el valor del resto de mis constantes del paginado.
  };

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(allPoke());
      dispatch(getTypes());
    }
  }, [render]);

  /*handlers*/
  const handleOrderAlf = (e) => {
    e.preventDefault();
    dispatch(orderAlf(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
    setRender(!render);
  };

  const handleOrderAtt = (e) => {
    e.preventDefault();
    dispatch(orderAtt(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
    setRender(!render);
  };

  const handleFilterOrigin = (e) => {
    e.preventDefault();
    dispatch(filterOrigin(e.target.value));
    setCurrentPage(1);
  };

  const handleFilterType = (e) => {
    e.preventDefault();
    dispatch(filterTypes(e.target.value));
    setCurrentPage(1);
  };

  const handleClick = (e) => {
    //refresco largando nuevamente una petición al back.
    e.preventDefault();
    dispatch(allPoke(e.target.value));
    setCurrentPage(1);
  };

  // if (pokemons.length === 0) {
  //   return <div className={styles.loading}>
  //       <h2>Loading...</h2>
  //       <img
  //         src="https://media.tenor.com/4K2_dLLq-pwAAAAi/charmander-chases-tail.gif"
  //         alt="loading"
  //       />
  //     </div>
  // }

  return (
    <div className={styles.container}>
      <div
        className={`${isExpanded ? styles.sideBar : styles.close}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {isExpanded ? (
          <div className={styles.menuContainer}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" width="150px"/>
            <div className={styles.filterContainer}>
              <h4>Filter 🔍</h4>
              <div className={styles.filter}>
              <h5>Origin</h5>
              <select
                className={styles.button}
                name="filterOrigin"
                id="filterOrigin"
                onChange={(e) => handleFilterOrigin(e)}
                defaultValue="all"
              >
                <option value="all">All</option>
                <option value="A">API</option>
                <option value="DB">DataBase</option>
              </select>
              <h5>Types</h5>
              <select
                className={styles.button}
                name="filterType"
                id="filterType"
                onChange={(e) => handleFilterType(e)}
                defaultValue="all"
              >
                <option value="all">All</option>
                {allTypes?.map((t, i) => {
                  return (
                    <option value={t.name} key={i}>
                      {t.name.charAt(0).toUpperCase() + t.name.slice(1)}
                    </option>
                  );
                })}
              </select>
              </div>
            </div>
            <div className={styles.orderContainer}>
              <h4>Order 🔍</h4>
              <select
                className={styles.button}
                name="orderAlf"
                id="orderAlf"
                onChange={(e) => handleOrderAlf(e)}
                defaultValue="default"
              >
                <option value="default">Alphabetically</option>
                <option value="A">Ascendent</option>
                <option value="D">Descendent</option>
              </select>

              <select
                className={styles.button}
                name="orderAtt"
                id="orderAtt"
                onChange={(e) => handleOrderAtt(e)}
                defaultValue="default"
              >
                <option value="default">Attack</option>
                <option value="A">Min to Max</option>
                <option value="D">Max to Min</option>
              </select>
            </div>
          </div>
        ) : (
          <div className={styles.menuContainerClose}>
            <div className={styles.menuLogo}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" width="80px"/>
            <img src="https://cdn-icons-png.flaticon.com/512/3588/3588249.png" width="50px"/>
            </div>
            <img src="https://detectivepikachu.pokemon.com/_images/characters/pikachu-intro.png" width="80px"/>
            </div>
        )}
      </div>
      <div className={styles.containerNav}>
        

        <SearchBar setCurrentPage={setCurrentPage} />
        {/* {pokeByName && <Card key={pokeByName.id} poke={pokeByName} />} */}

        <button className={styles.button} onClick={handleClick}>Refresh</button>
        <Link to="/create">
          <button className={styles.button}> Create </button>
        </Link>
        <Link to="/">
          <button className={styles.button}> Leave </button>
        </Link>
      </div>
      <div className={styles.displayContainer}>
        <div>
          <Page
            setCurrentPage={setCurrentPage}
            pokePerPage={pokePerPage}
            pokemons={pokemons.length}
            page={page}
            current={currentPage}
          />
        </div>
        <div className={styles.containerCards}>
          {pokemons.length > 0 ? (
            currentPokes.map((poke) => <Card key={poke.id} poke={poke} />)
          ) : (
            // <div>
            //   <h3> ¡Not found pokémons! </h3>
            //   <img
            //     className={styles.imageLoading}
            //     src="https://pa1.aminoapps.com/6515/a679c273ddaf134771ec2669ed86b0cea90faa35_hq.gif"
            //   />
            // </div>
            <div className={styles.loading}>
            <h2>Loading...</h2>
            <img
             src="https://media.tenor.com/4K2_dLLq-pwAAAAi/charmander-chases-tail.gif"
             alt="loading"
            />
            </div>
          )}
        </div>
        <div>
          <Page
            setCurrentPage={setCurrentPage}
            pokePerPage={pokePerPage}
            pokemons={pokemons.length}
            page={page}
            current={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
