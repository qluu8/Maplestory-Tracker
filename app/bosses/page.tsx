export default function BossesPage() {
  const bosses = ["Zakum", "Horntail", "Lotus", "Damien"];

  return (
    <main>
      <h1>Boss Tracker</h1>

      <ul>
        {bosses.map((boss) => (
          <li key={boss}>
            <input type="checkbox" />
            {boss}
          </li>
        ))}
      </ul>
    </main>
  );
}