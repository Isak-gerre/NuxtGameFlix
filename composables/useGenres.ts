
export const useGenres = async () => {
const config = useRuntimeConfig();
  const key = config.public.apiKey;
	const res = await fetch(`https://api.rawg.io/api/genres?key=${key}`);
	return res.json();
}
