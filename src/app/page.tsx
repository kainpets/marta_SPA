import Image from 'next/image'
import juliaMilosz from "/public/Julia&Miłosz_672.jpg"
import martaKciuki from "/public/martazkciukami.jpg"

export default function Home() {
  return (
    <main className="min-h-screen overflow-y-hidden ">
      {/* landing page */}
      <div className="relative h-screen w-screen pt-16 px-4">
        <Image
          src={juliaMilosz}
          alt='Tańcząca, zakochana para weselna'
          fill={true}
          sizes='100vw'
          placeholder='blur'
          priority={true}
          className='absolute z-[-1] object-cover h-full w-full top-0' />
        <div className="flex flex-col max-w-sm text-white">
          <h1 className="text-6xl leading-normal font-black">Pierwszy Taniec Poznań</h1>
          <h5 className="text-3xl leading-snug">ABY PIERWSZY TANIEC <br></br> BYŁ DLA WAS PRZYGODĄ</h5>
        </div>
      </div>
      {/* o mnie */}
      <div className='sm:flex pt-8 px-4'>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl">Cześć!</h2>
          <h2 className="text-2xl">Mam na imię Marta i jestem <br />instruktorką tańca.</h2>
          <p>Uczę tańca i bardzo to kocham.</p>
          <br />
          <p>
            Tańczę od 7 roku życia. Zaczynałam w ukochanym, rodzinnym Gorzowie Wielkopolskim, gdzie przez 12 lat rozwijałam taniec współczesny pod okiem Pana Adama Węsławskiego, który na zawsze będzie moim najważniejszym nauczycielem tańca.
          </p>
          <br />
          <p>
            Taneczna droga zaprowadziła mnie do tańca w parze. Zaczynałam od salsy kubańskiej, potem nadszedł czas zouka
            i west coast swinga. Intensywnie spełniam się także w high heels.
          </p>
          <br />
          <p>
            Pierwszy taniec znalazł mnie przypadkiem, a ja oddałam mu serce! Kilkoro znajomych zwróciło się do mnie z prośbą o pomoc w przygotowaniach do pierwszego tańca weselnego. W uczeniu tańca ślubnego odkryłam swoje nowe powołanie!
          </p>
          <br />
          <p>
            Przygotowuję około 25 par rocznie do pierwszego tańca. Mam ogromne szczęście trafiać na wspaniałych ludzi! </p>
        </div>
        <Image src={martaKciuki} sizes='100vw' placeholder="blur" alt="Uśmiechnięta Marta z dwoma kciukami w górze" className='object-scale-down' />
      </div>

    </main>
  )
}
