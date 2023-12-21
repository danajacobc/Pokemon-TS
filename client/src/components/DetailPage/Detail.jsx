import { pokeById, resetDetail } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../DetailPage/Detail.module.css";
import * as imgTypes from "../ExportTypesImage/ExportTypesImage";

const Detail = () => {
  const dispatch = useDispatch();
  const poke = useSelector((state) => state.detail);

  useEffect(() => {
    return () => { //una vez desmontado -> despacho resetDetail.
      dispatch(resetDetail());
    };
  }, [dispatch]);

  if (Object.keys(poke).length === 0) {
    return (
      <div className={styles.container}> 
        <h2>¡Ouch! Back to home...</h2>
        <img
          src="https://media.tenor.com/4K2_dLLq-pwAAAAi/charmander-chases-tail.gif"
          alt="loading"
        />
        <Link to="/home">
          <button className={styles.button}>Home</button>
        </Link> 
        
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerNav}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
          width="250px"
        />
        <div className={styles.name}>
          <h1>✨{poke.name?.charAt(0).toUpperCase() + poke.name?.slice(1)}✨</h1>
        </div>
        <Link to="/home">
          <button className={styles.button}>🏡 Home</button>
        </Link>
      </div>

      <div className={styles.presentation}>
        <div className={styles.detailImg}>
          <div className={styles.image}>
            <img src={poke.image} width="500px" />
          </div>
        </div>
        <div className={styles.detail}>
          <h2>❤️ HP: {poke.hp}</h2>
          <h2>⚔️ Attack: {poke.attack}</h2>
          <h2>🛡️ Defense: {poke.defense}</h2>
          <h2>⚡Speed: {poke.speed}</h2>
          <h2>📏 Height: {poke.height}</h2>
          <h2>⚖️ Weight: {poke.weight}</h2>
          <h2>Types: </h2>
          <div className={styles.types}>
            {poke.types &&
              Array.isArray(poke.types) &&
              poke.types.map((type, index) => (
                <div className={styles.type} key={index}>
                  <img
                    width="30px"
                    className={`${type.toUpperCase()}`}
                    src={imgTypes[`${type}`]}
                  />
                  <h3 key={index}>
                    {type && type.charAt(0).toUpperCase() + type.slice(1)}
                  </h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
