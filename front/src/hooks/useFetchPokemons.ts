import { useState, useEffect, useCallback } from 'react';
import { Pokemon } from '../types/pokemon';
import { getPokemons } from '../queries/getPokemons';

function useFetchPokemons(page: number) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nbMaxPages, setNbMaxPages] = useState<number>(1);

  const fetchPokemons = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);

      const { maxPages, pokemons } = await getPokemons(page);

      setNbMaxPages(maxPages);
      setPokemons(pokemons);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons, page]);

  return { loading, error, pokemons, nbMaxPages };
}

export default useFetchPokemons;
