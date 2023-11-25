import Header from '@/components/home/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={`flex flex-col gap-10 justify-around items-center`}>
      <Header/>
    </main>
  )
}
