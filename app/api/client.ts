import { env } from "@/config/env";
import { Configuration, PokemonApi } from "./openapi-generated";

const config = new Configuration({
  basePath: env.POKE_API_BASE_URL,
});

const pokemonApiClient = new PokemonApi(config);

export { pokemonApiClient };
