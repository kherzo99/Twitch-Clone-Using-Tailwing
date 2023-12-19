import CategoryCard from "./CategoryCard";

const games = [
  {
    img: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
    name: "Call of Duty: Warzone",
    viewers: "66.1 k espectadores",
    category: "Shooter en primera persona",
  },
  {
    img: "https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
    name: "Eventos especiales",
    viewers: "2.6 k espectadores",
    category: "IRL (vida real)",
  },
  {
    img: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
    name: "Minecraft",
    viewers: "95.7K espectadores",
    category: "Simulación",
  },
  {
    img: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
    name: "Valorant",
    viewers: "49.9K espectadores",
    category: "Shooter en primera persona",
  },
  {
    img: "https://static-cdn.jtvnw.net/ttv-boxart/509660-285x380.jpg",
    name: "Arte",
    viewers: "10 K espectadores",
    category: "Creative",
  },
  {
    img: "https://static-cdn.jtvnw.net/ttv-boxart/2085980140_IGDB-285x380.jpg",
    name: "Lethal Company",
    viewers: "53.2K espectadores",
    category: "Juego de aventuras",
  },
  {
    img: "https://static-cdn.jtvnw.net/ttv-boxart/23020_IGDB-285x380.jpg",
    name: "Roblox",
    viewers: "6.8K espectadores",
    category: "Plataformas",
  },

  {
    img: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg",
    name: "Grand Theft Auto V",
    viewers: "264.4K espectadores",
    category: "Shooter en primera persona",
  },
];

export default function CategoryList() {
  return (
    <main className="flex flex-grow p-8 gap-5">
      {games.map((game) => {
        return (
          <CategoryCard
            key={game.name}
            img={game.img}
            name={game.name}
            viewers={game.viewers}
            category={game.category}
          />
        );
      })}
    </main>
  );
}
