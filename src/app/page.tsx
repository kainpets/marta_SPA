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
import { FacebookIcon, Instagram, Youtube, Mail, Phone } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen overflow-y-hidden ">
      {/* landing page */}
      <div className="relative h-screen w-screen pt-16 px-4">
        <Image src={logo} alt='logo' className='absolute top-0  w-[200px] xl:ml-32' />
        <Image
          src={juliaMilosz}
          alt='Tańcząca, zakochana para weselna'
          fill={true}
          sizes='100vw'
          placeholder='blur'
          priority={true}
          className='absolute z-[-1] object-cover h-full w-full top-0' />
        <div className="pl-4 flex flex-col max-w-sm text-white pt-32 xl:pl-32">
          <h1 className="text-7xl leading-tight font-black">Pierwszy Taniec Poznań</h1>
          <h5 className="text-3xl leading-snug">ABY&nbsp;PIERWSZY&nbsp;TANIEC BYŁ&nbsp;DLA&nbsp;WAS&nbsp;PRZYGODĄ</h5>
        </div>
      </div>

      {/* o mnie */}
      <div className='pt-8 px-4 flex flex-col-reverse sm:flex-row xl:max-w-[70vw] xl:mx-auto xl:text-xl'>
        <Image src={martaKciuki} sizes='100vw' placeholder="blur" alt="Uśmiechnięta Marta z dwoma kciukami w górze" className='object-scale-down sm:max-h-[80vh]' />
        <div className="flex flex-col gap-1 leading-relaxed sm:pl-4 xl:max-w-[50%] xl:pl-0
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

      {/* usługi */}
      <div style={{
        display: "grid",
        gridGap: "16px",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, auto))",
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
            <p className="">Prowadzę zajęcia taneczne na eventach, warsztaty dla osób początkujących oraz tancerzy. Zapraszam na grupowe zajęcia taneczne dla wszystkich grup zaawansowania. </p>
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
            <p className="">Pierwszy taniec to głównie lekcje indywidualne dla par młodych. Zaczynamy od podstawowych kroków tańca użytkowego, potem przechodzimy do przygotowanej dla Was choreografii. </p>
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
            <p className="">Zajęcia pełne kobiecości, na których każda z Was może poczuć się jak gwiazda Broadway&apos;u. Prowadzę zajęcia grupowe i indywidualne. Realizuję też tańce na wieczorach panieńskich.</p>
          </div>
        </div>
      </div>
      <div className="marginx-auto w-full text-center pb-2">
        <h3 className="text-xl">Chcesz dowiedzieć się więcej? <a href='tel:793 792 883' className="font-bold">Zadzwoń!</a></h3>
      </div>

      {/* portfolio */}
      <div className="pt-8 text-center px-4">
        {/* <h2 className='text-xl'>MOJE PORTFOLIO</h2> */}
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

      {/* opinie */}
      <div className="flex flex-col justify-between gap-y-[130px] gap-4 pt-40 px-4 md:flex-row ">
        <div className="relative bg-white rounded shadow py-6 px-12 leading-relaxed flex flex-col items-center ">
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
          <p className="">
            Długo myślałam co napisać, ponieważ nasz pierwszy taniec który Marta dla nas stworzyła był wyjątkowy, ponadto zrobił dużą furorę wśród gości! Goście mówili: „tak pięknego tańca jeszcze nie widzieliśmy”,  „trudno będzie go pobić innym tańcem”. Dodatkowo czas z Martą jest cudowny. Dziewczyna pełna energii, chcąca sprostać najcięższym wyzwaniom! Tak jak nasze, gdy mając już cały przygotowany taniec postanowiliśmy zmienić piosenkę!!! Co na to Marta?! Od razu podłapała temat i od razu zaczęła działać!!! I cała choreografia przerosła nasze oczekiwania!!! Marta jest bardzo pozytywną osobą i nie ważne jak byliśmy zmęczeni na zajęcia z Martą szliśmy chętnie, a wychodziliśmy z ogromnym uśmiechem!!! Jeśli ktoś się zastanawia jeszcze nad wyborem osoby, która poprowadzi Wasz pierwszy taniec, to naprawdę polecam Martę, która robi to z pasją!!!
          </p>
          <h3 className="text-center text-xl">KAROLINA I KRIS</h3>
        </div>
        <div className="relative bg-white rounded shadow py-6 px-12 leading-relaxed flex flex-col  items-center ">
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
        <div className="relative bg-white rounded shadow py-6 px-12 leading-relaxed flex flex-col items-center ">
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
        <a target="_blank" href="https://www.youtube.com/@martaklisowska2017">
          <button className="p-4 font-bold text-xl bg-green-400 text-white shadow rounded-xl hover:scale-125 hover:bg-green-500 transition duration-500">ZOBACZ WIĘCEJ
          </button>
        </a>
      </div>
      {/* kontakt */}
      <div className="sm:flex gap-16 mt-16 pb-16 sm:px-4" >
        <div className='flex flex-col sm:flex-row-reverse'>
          <div >
            <Image
              src={martaKontakt}
              placeholder="blur"
              sizes='100vw'
              alt="Uśmiechnięta Marta czeka na kontakt"
              className='px-4 sm:block sm:object-scale-down shadow-lg' />
          </div>
          <div className='pt-8 px-4 text-xl'>
            <h2 className="text-3xl text-center">KONTAKT</h2>
            <ul className="font-medium mt-4 flex flex-col gap-6 md:text-xl">
              <li className="flex flex-row gap-2">
                <FacebookIcon color="#030099" />
                <a href="https://www.facebook.com/martaklisowskapierwszytaniec" target="_blank">@martaklisowskapierwszytaniec</a>
              </li>
              <li className="flex flex-row gap-2">
                <Instagram color="#d45125" />
                <a href="https://www.instagram.com/pierwszytaniecpoznan/" target="_blank">@pierwszytaniecpoznan</a>
              </li>
              <li className="flex flex-row gap-2">
                <Youtube color="#c70d00" />
                <a href="https://www.youtube.com/@martaklisowska2017" target="_blank">@martaklisowska2017</a>
              </li>
              <li className="flex flex-row gap-2">
                <Mail />
                <a href="mailto:klisowska.marta@gmail.com?subject=Pytanie&body=Interesują mnie zajęcia" target="_blank">@klisowska.marta@gmail.com</a>
              </li>
              <li className="flex flex-row gap-2">
                <Phone />
                <a href="tel:793792883">+48 793 792 883</a>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </main>
  )
}
