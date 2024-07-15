import { useEffect, useReducer } from 'react';

// los dos parametros iniciales se deben de respetar
function useLocalStorage(itemName, initialValue) {
  const [ state, dispatch ] = useReducer( reducer, initialState({ initialValue }) );
  const {
    sincItem,
    error,
    loading,
    item,
  } = state;

  // ACTION CREATORS
  const onError = (error) => dispatch({ 
    type: actionTypes.error, 
    payload: error 
  });
  const onSuccess = (parsedItem) => dispatch({ 
    type: actionTypes.success, 
    payload: parsedItem 
  });

  const onSave = (newItem) => dispatch({ 
    type: actionTypes.save, 
    payload: newItem 
  });

  const onSinc = () => dispatch({ 
    type: actionTypes.sinc, 
  });
  
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);
        // setItem(parsedItem);
        // setLoading(false);
        // setSincItem(true);
      } catch(error) {
        onError(error);
        // setError(error);
      }
    }, 1500);
  }, [sincItem, initialValue, itemName]);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
      // setItem(newItem);
    } catch(error) {
      onError(error);
      // setError(error);
    }
  };

  const sincronizeItem = () => {
    onSinc();
  }

  // tambien el valor de retorno se debe de quedar exactamente igual
  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

const initialState = ({ initialValue }) => ({
  sincItem: true,
  error: false,
  loading: true,
  item: initialValue
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sinc: 'SINC',
}

const reducerObject = ( state, payload ) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    item: payload,
    loading: false,
    sincItem: true
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sinc]: {
    ...state,
    sincItem: false,
    loading: true
  }
})

const reducer = (state, action) => {
  return reducerObject(state, action.payload) [action.type] || state;
}

export { useLocalStorage };