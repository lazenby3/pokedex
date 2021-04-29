import React, { useState, useEffect } from 'react';
import * as API from '../util/API'
import Card from 'react-bootstrap/Card'
import './PokemonDetails.css';
import ProgressBar from "./ProgressBar";
import { Button } from 'react-bootstrap';

const PokemonDetails = () => {
    let url = window.location.href;
    let id = url.split('/')[url.split('/').length - 1]
    let nextpok = parseInt(id) + 1;
    let prevpok = parseInt(id) - 1;

    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        API.get('https://pokeapi.co/api/v2/pokemon/' + id).then(res => {
            setPokemon(res.data)
        })
    }, [id]);

    return (
        <>
            {pokemon &&
                <div className="card-wrapper">
                
                    <Card>
                        <Card.Header>{pokemon.name} #0{pokemon.id}</Card.Header>
                        <Button className="full-next" href={"/pokemonstats/" + prevpok}>Previous Pokémon</Button>
                        <Button className="full-prev" href={"/pokemonstats/" + nextpok}>Next Pokémon</Button>
                        <Button className="short-next" href={"/pokemonstats/" + prevpok}>Prev</Button>
                        <Button className="short-prev" href={"/pokemonstats/" + nextpok}>Next</Button>
                        <Card.Body>
                            <Card.Title>                    
                            </Card.Title>
                            <Card.Img src={pokemon.sprites.front_default} alt="Pokemon"
                                        className="details__img" /> 
                            <Card.Text className="description">
                            <p className='list'>
                            Height: {pokemon.height}<br/>
                            Weight: {pokemon.weight}<br/>
                            Abilities: {pokemon.abilities.map(ability => {
                                return ability.ability.name + " "
                            })}
                            </p>
                            </Card.Text>
                            <Card.Text className='progress'>                
                                <ProgressBar key={1} label={pokemon.stats[0].stat.name} bgcolor={'#E1140A'} completed={pokemon.stats[0].base_stat} />
                                <ProgressBar key={2} label={pokemon.stats[1].stat.name} bgcolor={'#F98C01'} completed={pokemon.stats[1].base_stat} />
                                <ProgressBar key={3} label={pokemon.stats[2].stat.name} bgcolor={'#179532'} completed={pokemon.stats[2].base_stat} />
                                <ProgressBar key={4} label={pokemon.stats[3].stat.name} bgcolor={'#110AE1'} completed={pokemon.stats[3].base_stat} />
                                <ProgressBar key={5} label={pokemon.stats[4].stat.name} bgcolor={'#B941FD'} completed={pokemon.stats[4].base_stat} />
                                <ProgressBar key={6} label={pokemon.stats[5].stat.name} bgcolor={'#FB0CD3'} completed={pokemon.stats[5].base_stat} />
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted"></Card.Footer>
                    </Card>

                </div>}
        </>
    )
}

export default PokemonDetails