import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ApiResponse } from '../dtos/pokemon.paginated.response.dto';
import { Pokemon } from '../domain/pokemon.entity';
import { PaginationDto } from '../dtos/pagination.dto';
import { PartialPokemonApiDto } from '../dtos/pokemon.api.dto';

const API_URL = 'https://pokeapi.co/api/v2';
@Injectable()
export class PokemonService {
  async getPaginatedPokemons({
    page = 1,
  }: PaginationDto): Promise<ApiResponse<Pokemon>> {
    const { data } = await axios.get(`${API_URL}/pokemon/`, {
      params: {
        offset: (page - 1) * 20,
      },
    });

    const maxPages = Math.floor(data.count / 20) + (data.count % 20 ? 1 : 0);

    const pokemonsUrl: string[] = data.results.map(
      (pokemonWithData) => pokemonWithData.url,
    );

    const pokemonsData: PartialPokemonApiDto[] = await Promise.all(
      pokemonsUrl.map(async (pokemonUrl) => (await axios.get(pokemonUrl)).data),
    );

    const pokemons = pokemonsData.map(
      (pokemonFullData) =>
        new Pokemon(
          pokemonFullData.id,
          pokemonFullData.name,
          pokemonFullData.sprites.front_default,
          pokemonFullData.sprites.back_default,
        ),
    );

    return new ApiResponse<Pokemon>(pokemons, maxPages);
  }
}
