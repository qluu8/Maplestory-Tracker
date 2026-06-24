import Link from "next/link";

export default function Sidebar()
{
    return(
        <aside className="sidebar">
            <h2>Maple Tracker</h2>

            <nav>
                <Link href="/">Roster</Link>
                <Link href="/bosses">Bosses</Link>
                <Link href="/dailies">Dailies</Link>
                <Link href="/weeklies">Weeklies</Link>
            </nav>
        </aside>
    );
}