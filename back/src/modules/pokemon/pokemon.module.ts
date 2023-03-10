import { Module } from '@nestjs/common';
import { PokemonService } from './application/find-pokemon.service';
import { PokemonController } from './infrastructure/pokemon.controller';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
