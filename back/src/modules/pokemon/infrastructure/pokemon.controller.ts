import { PokemonService } from '../application/find-pokemon.service';
import { PaginationDto } from '../dtos/pagination.dto';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async getPokemonsFormPaginated(@Query() pagination: PaginationDto) {
    const { page } = pagination;
    const { pokemons, maxPages } =
      await this.pokemonService.getPaginatedPokemons({ page });

    return {
      pokemons,
      maxPages,
    };
  }
}
