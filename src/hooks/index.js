import {useState, useEffect} from 'react';
import axios from 'axios';

// get the parsed response from axios
const useSearch = (query) => {

    // enum object
    const [state, setState ] = useState({
        articles: [],
        state : 'IDLE',
        error: '',
    });

    useEffect(() => {
        const getUser = async ()  => {
          try {
            const response = await axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${query}`);
  
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
                status: 'Success',
                error: '',
            });

          } catch (error) {
            setState({
                articles: [],
                status: 'error',
                error: error
            });
          }
        }
        getUser();
      }, [query]); // user input

    //   return state object
      return state;
}

export default useSearch;