import React from 'react';
import Card from './Card.jsx';
import { data } from '../../data'



// This is like a wrapper that will render a bunch of cards.
const CardList = () => {

    return data.map(app => {
        return (
            <Card {...app} key={app.name} />

        )
    })

}

export default CardList;