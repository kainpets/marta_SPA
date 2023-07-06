import Image from 'next/image'
import juliaMilosz from "/public/Julia&Miłosz_672.jpg"
import martaKciuki from "/public/martazkciukami.jpg"
import martalabedz from "/public/martalabedz.jpg"
import martaradzi from "/public/martaradzi.jpg"
import martanogadogory from "/public/martanogadogory.jpg"

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
        <Image src={martaKciuki} sizes='100vw' placeholder="blur" alt="Uśmiechnięta Marta z dwoma kciukami w górze" className='object-scale-down sm:max-w-fit' />
      </div>

      {/* usługi */}
      <div style={{
        display: "grid",
        gridGap: "16px",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, auto))",
        paddingTop: "4rem",
        alignItems: "baseline",
        paddingRight: "1rem",
        paddingLeft: "1rem",
      }}>
        <div style={{ position: "relative", height: "625px" }}>
          <Image src={martanogadogory} alt="Marta tańczy z nogą uniesioną do góry" className="shadow" placeholder="blur" sizes="100vw" style={{
            objectFit: "cover",
            width: "100%",
            height: "70%"
          }} />
          <div className="pt-4">
            <h2 className="text-center text-xl pb-1">WARSZTATY TANECZNE</h2>
            <p className="text-justify">Prowadzę zajęcia taneczne na eventach, warsztaty dla osób początkujących oraz tancerzy. Zapraszam na grupowe zajęcia taneczne dla wszystkich grup zaawansowania. </p>
          </div>
        </div>
        <div style={{ position: "relative", height: "625px" }}>
          <Image src={martaradzi} alt="Para tańczy na pierwszym planie, Marta doradza w tle" className="shadow" placeholder="blur" sizes="100vw" style={{
            objectFit: "cover",
            width: "100%",
            height: "70%"
          }} />
          <div className="pt-4">
            <h2 className="text-center text-xl pb-1">PIERWSZY TANIEC</h2>
            <p className="text-justify">Pierwszy taniec to głównie lekcje indywidualne dla par młodych. Zaczynamy od podstawowych kroków tańca użytkowego, potem przechodzimy do przygotowanej dla Was choreografii. </p>
          </div>
        </div>
        <div style={{ position: "relative", height: "625px" }}>
          <Image src={martalabedz} alt="Marta tańczy we wdzięcznej pozie" className="shadow" placeholder="blur" sizes="100vw" style={{
            objectFit: "cover",
            width: "100%",
            height: "70%"
          }} />
          <div className="pt-4">
            <h2 className="text-center text-xl pb-1">TANIEC DLA KOBIET</h2>
            <p className="text-justify">Zajęcia pełne kobiecości, na których każda z Was może poczuć się jak gwiazda Broadway&apos;u. Prowadzę zajęcia grupowe i indywidualne. Realizuję też tańce na wieczorach panieńskich.</p>
          </div>
        </div>
      </div>
      <div className="marginx-auto w-full text-center pb-2">
        <h3 className="text-xl">Chcesz dowiedzieć się więcej? <a href='tel:793 792 883' className="font-bold">Zadzwoń!</a></h3>
      </div>
      {/* portfolio */}
      <div className="pt-8 text-center px-4">
        <h2 className='text-xl'>MOJE PORTFOLIO</h2>
        <h3 >Zapraszam do zapoznania się z występami moich pięknych par młodych, z których jestem <strong className="font-medium">BARDZO</strong> dumna! Więcej na moim profilu na YouTube.</h3>
        <div className="flex flex-col gap-4 pt-4 lg:flex-row">
          <iframe className="w-full h-full aspect-video" src="https://www.youtube.com/embed/i9EtZgCjfPk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe className="w-full h-full aspect-video" src="https://www.youtube.com/embed/mc-7tzKjJfE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe className="w-full h-full aspect-video" src="https://www.youtube.com/embed/LqvE-7Xv5fE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="mx-auto text-center pt-8">
          <a target="_blank" href="https://www.youtube.com/@martaklisowska2017">
            <button className="p-4 font-bold text-xl bg-green-400 text-white shadow rounded-xl hover:scale-125 hover:bg-green-500 transition duration-500">ZOBACZ WIĘCEJ
            </button>
          </a>
        </div>
      </div>

    </main>
  )
}
