import Image from 'next/image'
import juliaMilosz from "/public/Julia&Miłosz_672.jpg"

export default function Home() {
  return (
    <main className="min-h-screen overflow-y-hidden">
      <div className="relative h-screen w-screen">
        <Image
          src={juliaMilosz}
          alt='Tańcząca, zakochana para weselna'
          fill={true}
          sizes='100vw'
          className='absolute z-[-1] object-cover h-full w-full top-0' />
          <div className="flex flex-col max-w-sm text-white">
            <h1 className="text-6xl leading-relaxed font-black">Pierwszy Taniec Poznań</h1>
            <h5 className="text-3xl leading-snug">ABY PIERWSZY TANIEC <br></br> BYŁ DLA WAS PRZYGODĄ</h5>
          </div>
      </div>
      <div>
        </div>

    </main>
  )
}
