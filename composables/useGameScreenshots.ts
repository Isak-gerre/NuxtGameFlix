export const useGameScreenshots = async (id: string) => {
const config = useRuntimeConfig();
  const key = config.public.apiKey;
	const res = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${key}`);
	return res.json();
}