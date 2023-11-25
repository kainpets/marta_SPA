import Image from 'next/image'
import juliaMilosz from "/public/Julia&Miłosz_672.jpg"
import martaKciuki from "/public/martazkciukami.jpg"
import martalabedz from "/public/martalabedz.jpg"
import martaradzi from "/public/martaradzi.jpg"
import martanogadogory from "/public/martanogadogory.jpg"
import opinia1 from "/public/opinia1.jpg"
import opinia2 from "/public/opinia2.jpg"
import opinia3 from "/public/opinia3.jpg"
import martaKontakt from "/public/martakontakt.jpg"
import logo from "/public/whiteTransparentLogoHomePage.png"
import { FacebookIcon, Instagram, Youtube, Mail, Phone, Album, ClipboardCheck, PhoneOutgoing, Presentation, User2 } from 'lucide-react'
import MobileNav from './components/MobileNav'

export default function Home() {
  return (
    <main className="min-h-screen overflow-y-hidden ">
      <div className="relative h-screen w-screen pt-16 px-4">
        {/* nav */}
        <nav>
          <div className="absolute top-8 right-16 text-white xl:hidden">
            <MobileNav />
          </div>
          <div className="hidden absolute right-8 xl:block xl:max-w-[70vw] lg:text-xl md:text-sm">
            <li className='flex px-4 justify-between gap-6 text-white'>
              <div className="hover:bg-slate-600 rounded-lg p-1 transition duration-300">
                <a className="flex gap-2" href="#o-mnie">
                  <User2 />
                  O mnie
                </a>
              </div>
              <div className="hover:bg-slate-600 rounded-lg p-1 transition duration-300">
                <a className="flex gap-2" href="#oferta">
                  <Presentation />
                  Oferta
                </a>
              </div>
              <div className="hover:bg-slate-600 rounded-lg p-1 transition duration-300">
                <a className="flex gap-2" href="#portfolio">
                  <Album />
                  Portfolio
                </a>
              </div>
              <div className="hover:bg-slate-600 rounded-lg p-1 transition duration-300">
                <a className="flex gap-2" href="#opinie">
                  <ClipboardCheck />
                  Opinie
                </a>
              </div>
              <div className="hover:bg-slate-600 rounded-lg p-1 transition duration-300">
                <a className="flex gap-2" href="#kontakt">
                  <PhoneOutgoing />
                  Kontakt
                </a>
              </div>
            </li>
          </div>
        </nav>

        {/* landing page */}
        <Image src={logo} alt='logo' className='absolute top-0  w-[200px] xl:ml-32' />
        <Image
          src={juliaMilosz}
          alt='Tańcząca, zakochana para weselna'
          fill={true}
          sizes='100vw'
          placeholder='blur'
          priority={true}
          className='absolute z-[-1] object-cover h-full w-full top-0' />
        <div className="sm:pl-4 flex flex-col max-w-sm text-white pt-[12rem] xl:pl-32">
          <h1 className="text-7xl leading-tight font-black">Pierwszy Taniec Poznań</h1>
          <p className="text-3xl leading-snug">ABY&nbsp;PIERWSZY&nbsp;TANIEC BYŁ&nbsp;DLA&nbsp;WAS&nbsp;PRZYGODĄ</p>
        </div>
      </div>

      {/* o mnie */}
      <div>
        <h2 id="o-mnie" className='py-16 uppercase text-center text-4xl font-bold'>O Mnie</h2>
        <div className='pt-4 px-4 flex flex-col-reverse gap-4 sm:flex-row xl:max-w-[70vw] xl:mx-auto xl:text-lg'>
          <Image src={martaKciuki} sizes='100vw' placeholder="blur" alt="Uśmiechnięta Marta z dwoma kciukami w górze" className='object-scale-down sm:max-h-[90vh]' />
          <div className="flex flex-col gap-1 leading-relaxed xl:max-w-[50%] 
        ">
            <h2 className="text-2xl">Cześć!</h2>
            <h2 className="text-2xl">Mam na imię Marta i jestem <br />instruktorką tańca.</h2>
            <p className='pt-4'>Uczę tańca i bardzo to kocham.</p>
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
        </div>
      </div>

      {/* oferta */}
      <div>
        <h2 id='oferta' className='py-16 uppercase text-center text-4xl font-bold'>Oferta</h2>
        <div className='xl:max-w-[70vw] xl:mx-auto' style={{
          display: "grid",
          gridGap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, auto))",
          paddingTop: "4rem",
          alignItems: "baseline",
          paddingRight: "1rem",
          paddingLeft: "1rem",
        }}>
          <div style={{ position: "relative", height: "80vh" }}>
            <Image src={martanogadogory} alt="Marta tańczy z nogą uniesioną do góry" className="shadow" placeholder="blur" sizes="100vw" style={{
              objectFit: "cover",
              width: "100%",
              height: "70%"
            }} />
            <div className="pt-4">
              <h2 className="text-center text-2xl pb-1">ZAJĘCIA GRUPOWE</h2>
              <p>Prowadzę zajęcia taneczne na eventach, warsztaty dla osób początkujących oraz tancerzy. Zapraszam na grupowe zajęcia taneczne dla wszystkich grup zaawansowania.</p>
              <br></br>
              <p className='text-xs italic text-slate-500'> Oferta cenowa zależna od kursu, kursy dostępne na instagramie i facebooku</p>
            </div>
          </div>
          <div style={{ position: "relative", height: "80vh" }}>
            <Image src={martaradzi} alt="Para tańczy na pierwszym planie, Marta doradza w tle" className="shadow" placeholder="blur" sizes="100vw" style={{
              objectFit: "cover",
              width: "100%",
              height: "70%"
            }} />
            <div className="pt-4">
              <h2 className="text-center text-2xl pb-1">PIERWSZY TANIEC</h2>
              <p >Pierwszy taniec to głównie lekcje indywidualne dla par młodych. Zaczynamy od podstawowych kroków tańca użytkowego, potem przechodzimy do przygotowanej dla Was choreografii.</p>
              <br></br>
              <p className='text-xs italic text-slate-500 text-center'>  Koszt - 150zł/godzina/para</p>
            </div>
          </div>
          <div style={{ position: "relative", height: "80vh" }}>
            <Image src={martalabedz} alt="Marta tańczy we wdzięcznej pozie" className="shadow" placeholder="blur" sizes="100vw" style={{
              objectFit: "cover",
              width: "100%",
              height: "70%"
            }} />
            <div className="pt-4">
              <h2 className="text-center text-2xl pb-1">TANIEC DLA KOBIET</h2>
              <p >Zajęcia pełne kobiecości, na których każda z Was może poczuć się jak gwiazda Broadway&apos;u. Prowadzę zajęcia grupowe i indywidualne. Realizuję też tańce na wieczorach panieńskich.</p>
              <br></br>
              <p className='text-xs italic text-slate-500 text-center'>  Cena ustalana indywidualnie</p>
            </div>
          </div>
        </div>
        <div className="pt-16 sm:py-0 w-full text-center pb-2">
          <h3 className="text-2xl font-bold">Chcesz dowiedzieć się więcej? </h3>
          <br />
          <button className="font-bold uppercase text-xl p-4 bg-green-600 text-white shadow rounded-xl hover:scale-125 hover:bg-green-500 transition duration-500">
            <a href='tel:793 792 883' >Zadzwoń!</a>
          </button>
        </div>
      </div>

      {/* portfolio */}
      <div>
        <h2 id='portfolio' className='py-16 uppercase text-center text-4xl font-bold'>Portfolio</h2>
        <div className="pt-4 text-center px-4 2xl:max-w-[80vw] xl:mx-auto">
          {/* <h2 className='text-xl'>MOJE PORTFOLIO</h2> */}
          <h3 >Zapraszam do zapoznania się z występami moich pięknych par młodych, z których jestem <strong className="font-medium">BARDZO</strong> dumna! Więcej na moim profilu na YouTube.</h3>
          <div className="flex flex-col gap-4 pt-4 lg:flex-row">
            <iframe className="w-full h-full aspect-video" src="https://www.youtube.com/embed/i9EtZgCjfPk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe className="w-full h-full aspect-video" src="https://www.youtube.com/embed/mc-7tzKjJfE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe className="w-full h-full aspect-video" src="https://www.youtube.com/embed/LqvE-7Xv5fE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="mx-auto text-center pt-8">
            <a target="_blank" href="https://www.youtube.com/@pierwszytaniecpoznan">
              <button className="p-4 font-bold text-xl bg-green-600 text-white shadow rounded-xl hover:scale-125 hover:bg-green-500 transition duration-500">ZOBACZ WIĘCEJ
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* opinie */}
      <div>
        <h2 id='opinie' className='py-16 uppercase text-center text-4xl font-bold'>Opinie</h2>

        <div className="flex flex-col justify-around gap-y-[130px] gap-4 pt-40 px-4 md:flex-row xl:max-w-[70vw] xl:mx-auto ">
          <div className="relative bg-white rounded shadow py-6 px-12 leading-relaxed flex flex-col items-center justify-between">
            <Image src={opinia1} placeholder="blur" alt="Para weselna" style={{
              objectFit: "cover",
              height: "125px",
              width: "125px",
              borderRadius: "50%",
              borderColor: "#D1E3DC",
              borderWidth: "10px",
              position: "absolute",
              top: "-100px"
            }} />
            <p >
              Długo myślałam co napisać, ponieważ nasz pierwszy taniec który Marta dla nas stworzyła był wyjątkowy, ponadto zrobił dużą furorę wśród gości! Goście mówili: „tak pięknego tańca jeszcze nie widzieliśmy”,  „trudno będzie go pobić innym tańcem”. Dodatkowo czas z Martą jest cudowny. Dziewczyna pełna energii, chcąca sprostać najcięższym wyzwaniom! Tak jak nasze, gdy mając już cały przygotowany taniec postanowiliśmy zmienić piosenkę!!! Co na to Marta?! Od razu podłapała temat i od razu zaczęła działać!!! I cała choreografia przerosła nasze oczekiwania!!! Marta jest bardzo pozytywną osobą i nie ważne jak byliśmy zmęczeni na zajęcia z Martą szliśmy chętnie, a wychodziliśmy z ogromnym uśmiechem!!! Jeśli ktoś się zastanawia jeszcze nad wyborem osoby, która poprowadzi Wasz pierwszy taniec, to naprawdę polecam Martę, która robi to z pasją!!!
            </p>
            <h3 className="text-center text-xl">KAROLINA I KRIS</h3>
          </div>
          <div className="relative bg-white rounded shadow py-6 px-12 leading-relaxed items-center flex flex-col justify-between">
            <Image src={opinia2} placeholder="blur" alt="Para weselna" style={{
              objectFit: "cover",
              height: "125px",
              width: "125px",
              borderRadius: "50%",
              borderColor: "#D1E3DC",
              borderWidth: "10px",
              position: "absolute",
              top: "-100px"
            }} />
            <p>
              Marta jest najlepszą instruktorką tańca, a przy jej pomocy pierwszy taniec przestaje być taki straszny! Bardzo się tym tańcem stresowaliśmy, nigdy wcześniej nie tańczyliśmy w parze, ale Marta zdziałała cuda. Dzięki jej ogromnym umiejętnościom, wyobraźni i pozytywnej energii, którą nas zaraziła, stworzyła w kilka lekcji układ, który był &quot;nasz&quot; i świetnie się bawiliśmy tańcząc go na weselu.
              Polecamy z całego serca!
            </p>
            <h3 className="text-center text-xl">OLIWIA I ARTUR</h3>
          </div>
          <div className="relative bg-white rounded shadow py-6 px-12 leading-relaxed flex flex-col items-center justify-between">
            <Image src={opinia3} placeholder="blur" alt="Para weselna" style={{
              objectFit: "cover",
              height: "125px",
              width: "125px",
              borderRadius: "50%",
              borderColor: "#D1E3DC",
              borderWidth: "10px",
              position: "absolute",
              top: "-100px"
            }} />
            <p className="">
              Dla tych, którzy nie wiedzą, to Marta to człowiek-petarda, która nawet z parkietowych drewien zrobi tancerzy!
              Każde spotkanie to była czysta przyjemność, dużo humorku i dużo ćwiczeń, profesjonalna choreografia, cierpliwe znoszenie mojego marudzenia i tłumaczenie co jesteśmy w stanie zrobić ładnie, a co jest zbyt zaawansowane jak na kilka lekcji - złota kobieta!
              Polecanko wszystkim, którzy chcą się nauczyć tańca bez spiny, za to z uśmiechem na ustach - u nas każda próba to była kupa śmiechu i z takim samym szerokim uśmiechem zatańczyliśmy w dniu ślubu
              10000/10, nie ma lepszej instruktorki - nie ma tu o czym dyskutować!
            </p>
            <h3 className="text-center text-xl pt-4">KLAUDIA I MICHAŁ</h3>
          </div>
        </div>
        <div className="mx-auto text-center pt-8">
          <a target="_blank" href="https://www.facebook.com/martaklisowskapierwszytaniec/reviews">
            <button className="p-4 font-bold text-xl bg-green-600 text-white shadow rounded-xl hover:scale-125 hover:bg-green-500 transition duration-500">ZOBACZ WIĘCEJ
            </button>
          </a>
        </div>
      </div>

      {/* kontakt */}
      <div className="sm:flex gap-16 mt-32 pb-16 sm:px-4 xl:max-w-[70vw] xl:mx-auto" >
        <div className='flex flex-col sm:flex-row-reverse'>
          <div >
            <Image
              src={martaKontakt}
              placeholder="blur"
              sizes='100vw'
              alt="Uśmiechnięta Marta czeka na kontakt"
              className='px-4 object-scale-down sm:max-h-[80vh]' />
          </div>
          <div className='pt-8 px-4'>
            <h2 id='kontakt' className="text-4xl py-16 text-center font-bold">KONTAKT</h2>
            <ul className="mt-8 flex flex-col gap-6 md:text-xl xl:gap-10 xl:text-2xl">
              <li className="flex flex-row gap-2">
                <FacebookIcon size="30px" color="#030099" />
                <a href="https://www.facebook.com/martaklisowskapierwszytaniec" target="_blank">@martaklisowskapierwszytaniec</a>
              </li>
              <li className="flex flex-row gap-2">
                <Instagram size="30px" color="#d45125" />
                <a href="https://www.instagram.com/pierwszytaniecpoznan/" target="_blank">@pierwszytaniecpoznan</a>
              </li>
              <li className="flex flex-row gap-2">
                <Youtube size="30px" color="#c70d00" />
                <a href="https://www.youtube.com/@pierwszytaniecpoznan" target="_blank">@pierwszytaniecpoznan</a>
              </li>
              <li className="flex flex-row gap-2">
                <Mail size="30px" />
                <a href="mailto:klisowska.marta@gmail.com?subject=Pytanie&body=Chcę się zapisać na zajęcia" target="_blank">@klisowska.marta@gmail.com</a>
              </li>
              <li className="flex flex-row gap-2">
                <Phone size="30px" />
                <a href="tel:793792883">+48 793 792 883</a>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </main>
  )
}
