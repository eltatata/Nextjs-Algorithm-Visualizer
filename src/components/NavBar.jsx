import Link from "next/link"

function NavBar() {
  return (
    <aside className="pt-20 px-10 bg-neutral-950 h-screen">
      <header className="text-white text-center text-2xl font-bold">
        <a href="/">Algorithms Visualizer</a>
      </header>
      <nav>
        <ul className="pt-16 flex flex-col items-center gap-10">
          <li className="bg-neutral-900 transition-colors duration-300 ease-in-out hover:bg-neutral-800 py-2 px-4 rounded-lg font-bold text-center"><Link href={"/bubble-sort"}>Bubble Sort</Link></li>
          <li className="bg-neutral-900 transition-colors duration-300 ease-in-out hover:bg-neutral-800 py-2 px-4 rounded-lg font-bold text-center"><Link href={"/quick-sort"}>Quick Sort</Link></li>
          <li className="bg-neutral-900 transition-colors duration-300 ease-in-out hover:bg-neutral-800 py-2 px-4 rounded-lg font-bold text-center"><Link href={"/binary-search"}>Binary Search</Link></li>
          <li className="bg-neutral-900 transition-colors duration-300 ease-in-out hover:bg-neutral-800 py-2 px-4 rounded-lg font-bold text-center"><Link href={"/linear-search"}>Linear Search</Link></li>
        </ul>
      </nav>
    </aside>
  )
}

export default NavBar