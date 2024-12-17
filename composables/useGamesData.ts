export const useGamesData = async (slug = "") => {
	const config = useRuntimeConfig();
  const key = config.public.apiKey;
	console.log("key", key);
	
	const res = await fetch(`https://api.rawg.io/api/games?key=${key}${slug ? `&${slug}` : ""}`);
	return res.json();
}
