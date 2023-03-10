import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PokemonModule } from './modules/pokemon/pokemon.module';

@Module({
  imports: [HttpModule, PokemonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
