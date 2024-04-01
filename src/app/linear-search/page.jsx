import { generateListNoRepeats } from '@/utils/generatosList';
import ListLinearSearch from '@/components/ListLinearSearch';

export default function LinearSearchPage() {
  const numbers = generateListNoRepeats();
  
  return (
    <div className='flex flex-col justify-center items-center gap-5 w-screen'>
      <h1 className="text-3xl font-bold">Linear Search</h1>
      <ListLinearSearch numbers={numbers} />
    </div>
  );
}