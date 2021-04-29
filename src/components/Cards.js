import React, {useState, useEffect} from 'react';
import CardItem from './CardItem';
import './Cards.css';
import * as API from '../util/API';
import {Container} from 'react-bootstrap'

function Cards() {

    const [pokemon, setPokemon] = useState([]);
    
    useEffect(() => {
        API.get('https://pokeapi.co/api/v2/pokemon/?limit=898').then(res=>{

            setPokemon(res.data.results)
        })
    }, []);

    return (
        <>
        {pokemon &&
        <div className='cards'>
            <h1>Pokédex</h1>
            <Container>
                <div className="row">
                        {pokemon.map((pok, index) =>  {
                            const pokemonIndex = pok.url.split('/')[pok.url.split('/').length - 2];
                            return(
                                <CardItem
                                key={index}
                                src={"https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/" + pokemonIndex + ".png?raw=true"}
                                text={pok['name']}                                l
                                label={pokemonIndex}
                                path={'/pokemonstats/' + pokemonIndex}
                                className='col-md-3 card-item'
                                />
                            )
                        }
                        )}
               </div>
            </Container>
        </div>
        }
        </>
    )
}

export default Cards
