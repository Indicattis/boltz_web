import GaleryForsale from '@/components/body/galery_forsale'
import Header from '@/components/header'
import DefaultBox from '@/components/layouts/default_box'

export default function Home() {
  return (
    <main className={`flex flex-col gap-10 justify-around items-center`}>
      <Header/>
      <DefaultBox tag='Marcketplace'>
        <GaleryForsale></GaleryForsale>
      </DefaultBox>
    </main>
  )
}
