import styles from "../Error/Error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className={styles.container}> 
        <h2>¡Ouch! Back to landing page...</h2>
        <img
          src="https://media.tenor.com/4K2_dLLq-pwAAAAi/charmander-chases-tail.gif"
          alt="loading"
        />
        <Link to="/">
          <button className={styles.button}>Landing</button>
        </Link> 
        
      </div>
    )
}

export default Error;