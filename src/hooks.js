import {useState, useEffect, useRef, useCallback} from 'react';
import axios from 'axios';

// get the parsed response from axios
export const useSearch = (query = '', limit = 10) => {

    // enum object
    const [state, setState ] = useState({
        articles: [],
        state : 'IDLE',
        error: '',
    });

    const cancelToken = useRef(null);

    useEffect(() => {
        // ignore requests less than 3 chars
        if(query.length < 3) {
            return;
        }

        // if it is not empty, cancel it
        if(cancelToken.current) {
            console.log('cancel -- 1');
            cancelToken.current.cancel();
        }

        cancelToken.current = axios.CancelToken.source();

        setState({...state, status: 'PENDING'});
        
       axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${query}&limit=${limit}`, 
            // pass cancelToken as a parameter
            {cancelToken:cancelToken.current.token})

            .then((response) => {
              const parsedResponse = [];
              for(let i = 0; i < response.data[1].length; i++) {
                parsedResponse.push({
                  id: response.data[3][i],
                  label: response.data[1][i]
                })
              }
  
            // debugger;
            // setItems(parsedResponse);
            setState({
                articles : parsedResponse,
                status: 'SUCCESS',
                error: '',
            });
          })

          .catch(function (error) {
            if(axios.isCancel(error)){
                return;
            }
            setState({
                articles: [],
                status: 'error',
                error: error
            });
          })
      }, [query]); // user input
    //   return state object
      return state;
}


export const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // run when it unmounts
        return () => {
            clearTimeout(timer);
        }
    }, [value, delay])

    return debouncedValue;
}

export const useSearchValue = () => {
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, [])

  return {
    searchValue, 
    onSearchChange
  }
}