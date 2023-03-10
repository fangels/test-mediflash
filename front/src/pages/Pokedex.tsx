import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchPokemons from '../hooks/useFetchPokemons';
import { Card } from '../components/Card';
import './pokedex.css';
import Paginations from '../components/Paginations';

export default function Pokedex() {
  const { page } = useParams();
  const { loading, error, pokemons, nbMaxPages } = useFetchPokemons(
    Number(page) || 1,
  );

  return (
    <div className="App">
      <h1>Pokédex</h1>
      {error && <p>error please retry</p>}
      <div className={'Card-container'}>
        {pokemons.map((pokemon) => {
          return <Card key={`pokemon-id-${pokemon.id}`} pokemon={pokemon} />;
        })}
      </div>
      {loading ? (
        <div className={'Loader'} />
      ) : (
        <Paginations page={Number(page) || 1} nbMaxPages={nbMaxPages} />
      )}
    </div>
  );
}
