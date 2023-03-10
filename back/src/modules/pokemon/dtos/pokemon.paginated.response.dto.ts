export class ApiResponse<T> {
  constructor(public pokemons: T[], public maxPages: number) {}
}
