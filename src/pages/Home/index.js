import React from 'react'
import Autocomplete from '../../components/Autocomplete';
import Container from '../../components/Container'

const Home= () => {
    return (
        <div>
            <Container>
            {({searchValue, onSearchChange, articles}) => <Autocomplete articles={articles} onSearchChange={onSearchChange} searchValue={searchValue} />}
            </Container>
        </div>
    )
}

export default Home;
