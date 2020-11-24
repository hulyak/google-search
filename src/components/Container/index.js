import { useDebounce, useSearch, useSearchValue } from '../../hooks';

const Container = ({children}) => {
   // const [value, setValue] = useState('');
  // custom hook
  const {searchValue, onSearchChange } = useSearchValue()
  const {articles} = useSearch(useDebounce(searchValue));

  return children({searchValue, onSearchChange, articles})
}

export default Container;
