// export default function Home() {
//   return (
// <div>
//   <h1>ADONIMELIST</h1>
// </div>
//   );
// }

import AnimeList from "./components/AnimeList"
// atau bisa juga: import Animelist from "@/app/components/AnimeList"
// fetching data API:
const Home = async () => {
  const response = await fetch (`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
  const anime = await response.json()
  return (
  <div>
    <h1>Paling Populer</h1>
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
      {anime.data.map(data => {
      // console.log(data.title)
      return (
        <div key={data.mal_id} className="shadow-xl">
        <AnimeList title={data.title} images={data.images.webp.image_url}/>
        </div>
        )
    })}
    </div>
  </div>
  )
}

export default Home