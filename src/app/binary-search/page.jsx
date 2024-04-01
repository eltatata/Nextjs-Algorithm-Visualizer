import { generateListNoRepeats } from "@/utils/generatosList";
import ListBinarySearch from "@/components/ListBinarySearch";

export default function BinarySearchPage() {
  const numbers = generateListNoRepeats();
  numbers.sort((a, b) => a - b);

  return (
    <div className='flex flex-col justify-center items-center gap-4 h-screen w-screen'>
      <h1 className="text-3xl font-bold">Binary Search</h1>
      <ListBinarySearch numbers={numbers} />
    </div>
  )
}