import CardOne from './assets/Components/CardOne'
import CardTwo from './assets/Components/CardTwo'
export default function App() {
  return (
    <div className='flex flex-row w-full h-full'>
      <div className='w-1/2 hidden md:hidden lg:block h-full'></div>
      <div className='w-full h-full flex items-center justify-center flex-col gap-5'>
      <CardOne/>
<CardTwo/>
      </div>
     
    </div>
  )
}
