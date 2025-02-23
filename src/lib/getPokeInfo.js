const BASE_URL = "https://pokeapi.co/api/v2/pokemon-form";

export default async function getPokeInfo(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error("Failed to fetch Pokemon");

    const pokeInfo = await response.json();

    return {
      id,
      name: pokeInfo.name || "",
      spriteUrl: pokeInfo.sprites.front_default || "",
      types: pokeInfo.types.map((type) => type.type.name) || [],
    };
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    return { id, name: "", spriteUrl: "", types: [] };
  }
}
