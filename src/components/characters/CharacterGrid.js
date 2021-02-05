import React from 'react'
import CharacterItem from '../characters/CharaterItem';

export const CharacterGrid = ({ items, isLoading }) => {
    return (
        isLoading ? (<h1 src="">Loading...</h1>) : (


            <section className="cards">

                {items.map(item => (<CharacterItem key={item.char_id} item={item}></CharacterItem>))}

            </section>



        )
    )
}


export default CharacterGrid