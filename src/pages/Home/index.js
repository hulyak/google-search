import React from 'react'
import Autocomplete from '../../components/Autocomplete';
import Container from '../../components/Container'
import './styles.scss'

const Home= () => {
    return (
        <div className="home-page-container">
            <img src="./google.png" alt="Google logo" />
                <Container>
                {({searchValue, onSearchChange, articles}) => <Autocomplete articles={articles} onSearchChange={onSearchChange} searchValue={searchValue} />}
                </Container>
        </div>
    )
}

export default Home;
