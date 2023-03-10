import { Pokemon } from '../types/pokemon';

type IProps = { pokemon: Pokemon };
export function Card(props: IProps) {
  const { pokemon } = props;

  return (
    <div className={'Card'}>
      <p>
        #{pokemon.id} - {pokemon.name.slice(0, 1).toUpperCase()}
        {pokemon.name.slice(1)}
      </p>
      <div className={'Image-container'}>
        <img
          className={'Image-card-front'}
          src={pokemon.frontImg}
          id={`pokemon-id-${pokemon.id}-front-image`}
          alt={`front image of ${pokemon.name}`}
        />
        <img
          className={'Image-card-back'}
          src={pokemon.backImg}
          id={`pokemon-id-${pokemon.id}-back-image`}
          alt={`back image of ${pokemon.name}`}
        />
      </div>
    </div>
  );
}
