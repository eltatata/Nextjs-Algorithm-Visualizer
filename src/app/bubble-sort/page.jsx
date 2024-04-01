import { generateList } from '@/utils/generatosList';
import ListBubbleSort from '@/components/ListBubbleSort';

export default function BubbleSortPage() {
  const numbers = generateList();

  return (
    <div className='flex flex-col justify-center items-center gap-5 h-screen w-screen'>
      <h1 className="text-3xl font-bold">Bubble sort</h1>
      <ListBubbleSort numbers={numbers} />
    </div>
  )
}
