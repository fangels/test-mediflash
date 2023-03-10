import axios from 'axios';

export async function getPokemons(page: number) {
  const {
    data: { maxPages, pokemons },
  } = await axios.get(`${process.env.REACT_APP_API_URL}/pokemons`, {
    params: {
      page,
    },
  });
  return { maxPages, pokemons };
}
