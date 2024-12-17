export const useGameTrailers = async (id: number) => {
const config = useRuntimeConfig();
  const key = config.public.apiKey;
	const res = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=${key}`);
	return res.json();
}