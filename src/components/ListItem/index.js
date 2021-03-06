import React from 'react'
import './styles.scss';
import PropTypes from 'prop-types'

const ListItem = ({id, label}) => {
    return (
        <div className="list-item">
            <a href={id} rel="noreferrer" target="_blank">{label}</a>
            <p>{id}</p>
        </div>
    )
}

ListItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default ListItem;
