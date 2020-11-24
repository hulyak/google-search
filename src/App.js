import React, {useState} from 'react';
import ReactAutocomplete from 'react-autocomplete';
import Input from './components/Input';
import {useSearch, useDebounce, useSearchValue} from './hooks';

function App() {
  // const [value, setValue] = useState('');
  // custom hook
  const {searchValue, onSearchChange } = useSearchValue()
  const {articles, status, error } = useSearch(useDebounce(searchValue));

    return (
      <ReactAutocomplete
        items={articles}
        renderInput ={Input}
        inputProps = {{placeholder: 'Input a search term'}}
        // shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item.label}
        // comes from Input component
        renderMenu = {(children, value, style) => {
          return articles && articles.length ? (
            <div style={{...style}} className="input-suggestion">
            {children}
            {/* only show if we have sth typed in the input */}
            <a href={`/search?query=${value}`} className="search-link">See all results</a>
          </div> 
          ) : <></>
          }}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
          >
            {item.label}
          </div>
        }
        value={searchValue}
        onChange={onSearchChange}
        // onSelect={value => setValue(value)}
      />
    )
}

export default App;