import React from 'react';
import Autocomplete from './components/Autocomplete';
import Container from './components/Container';

const App =() =>  (
  <Container>
  {({searchValue, onSearchChange, articles}) => <Autocomplete articles={articles} onSearchChange={onSearchChange} searchValue={searchValue} />}
  </Container>  
)
 

export default App; 