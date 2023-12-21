import { useDispatch } from "react-redux";
import styles from "../Card/Card.module.css";
import { pokeById } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import * as imgTypes from "../ExportTypesImage/ExportTypesImage";

const Card = ({ poke }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log('me ejecute');
    e.preventDefault();
    dispatch(pokeById(poke.id, poke.isFromAPI));
    navigate("/detail");
  };

  return (
    <div className={styles.container} onClick={(e) => handleClick(e)}>
      
      <div className={styles.name}>
        <h1>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h1>
      </div>
      <div className={styles.image}>
        <img src={poke.image} width="200px" />
      </div>
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
  );
};

export default Card;
