export const ALL_POKE = "ALL_POKE";
export const ID_POKE = "ID_POKE";
export const GET_NAME = "GET_NAME";
export const ORDER_ALF = "ORDER_ALF";
export const ORDER_ATTACK = "ORDER_ATTACK";
export const GET_TYPES = "GET_TYPES";
export const FILTER_TYPES = "FILTER_TYPE";
export const FILTER_ORIGIN = "FILTER_ORIGIN";
export const RESET_DETAIL = "RESET_DETAIL";
export const POKE_CREATE = "POKE_CREATE";

import axios from "axios";

export const allPoke = (character) => {
  try {
    const endpoint = "http://localhost:3001/pokemons";
    return async (dispatch) => {
    const {data} = await axios.get(endpoint, character);
      
      return dispatch({
      type: "ALL_POKE",
      payload: data,
    });
  };
  } catch (error) {
    console.log(error)
  }
};

export const pokeById = (id, isFromAPI) => {
  try {
    return async (dispatch) => {
    const {data} = await axios.get(`http://localhost:3001/pokemons/${id}?isFromAPI=${isFromAPI}`);
      
      return dispatch({
      type: "ID_POKE",
      payload: data,
    });
  };
  } catch (error) {
    console.log(error)
  }
};

export const resetDetail = () => {
  return {
    type: "RESET_DETAIL",
  };
}

export const searchPoke = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/pokemons/name?name=${name}`);
      
      return dispatch({
        type: "GET_NAME",
        payload: data,
      });
    } catch(error) {
      alert(`¡No encontramos el Pokemon ${name}! Revisa que este bien escrito.`);
    }
  };
};

export const orderAlf = (orden) => {
  return {
    type: "ORDER_ALF",
    payload: orden,
  };
};

export const orderAtt = (orden) => {
  return {
    type: "ORDER_ATTACK",
    payload: orden,
  };
};

export const getTypes = () => {
  try {
    return async (dispatch) => {
    let types = await axios.get("http://localhost:3001/types");
      
      return dispatch({
      type: "GET_TYPES",
      payload: types.data,
    });
  };
  } catch (error) {
    console.log(error)
  }
};

export const filterOrigin = (origin) => {
  return {
    type: "FILTER_ORIGIN",
    payload: origin,
  };
};

export const filterTypes = (types) => {
  return {
    type: "FILTER_TYPE",
    payload: types,
  };
};

export const pokeCreate = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/pokemons", payload);

      return dispatch({
        type: "POKE_CREATE", 
        payload: response.data
      });
    } catch (error) {
      alert(`Falla en el error: `, error);
      return error;
    }
  }
};