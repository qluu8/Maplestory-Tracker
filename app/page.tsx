import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <main className="app-layout">
      <Sidebar />
      <h1>Character Roster</h1>
      <div className="character-grid">
        
      </div>
    </main>
  );
}