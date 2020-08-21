
const api_key="BAEklPc6HZ9fi2dHLrixlHI3BfauufR0"
const API = 'https://api.giphy.com/v1/gifs'

async function getGiffy({keyword, rating}={keyword:'morty'}){
   const URL = `${API}/search?api_key=${api_key}&q=${keyword}&limit=25&offset=1&rating=${rating}&lang=es`
   const res= await fetch(URL);
   const datos = await res.json();
   const {data}= datos;
   return data.map(gif=>gif)
}

export default getGiffy