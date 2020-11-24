import React from 'react'
import Autocomplete from '../../components/Autocomplete';
import Container from '../../components/Container';
import { useSearch } from '../../hooks';

const Search = ({...props}) => {
    const search = props.location.search;
    const params = new URLSearchParams(search)
    const query = params.get('query')

    const {articles, status} = useSearch(query, 50); // limit 50
    if(!articles.length && status === 'Success') return <h3>No articles for query {query}</h3>

     return (
        <div>
            <Container>
                    {({searchValue, onSearchChange, articles}) => <Autocomplete articles={articles} onSearchChange={onSearchChange} searchValue={searchValue} />}
            </Container>
    
            {!articles.length && status === 'Success' ? 
                <h3>No articles for query {query}</h3>
             :  articles.map(article => {
                return <div key={article.id}><a href={article.id} rel="noreferrer" target="_blank">{article.label}/</a></div>
            }) }
        </div>
    )
}

export default Search;