import NavBar from "./components/NavBar";
import StreamersList from "./components/StreamersList";
import CategoryList from "./components/CategoryList";

export default function App() {
  return (
    <main className="bg-[#0E0D10] text-white min-h-screen">
      <NavBar />
      <div className="grid grid-cols-[250px_auto]">
        <StreamersList />

        <CategoryList />
      </div>
    </main>
  );
}
