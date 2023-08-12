import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import data from "./data.json";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
function App() {
  AOS.init();

  return (
    <>
      <header className="w-full bg-white">
        <nav className="h-16 container m-auto px-7 max-w-screen-xl flex items-center text-3xl">
          <h1 className="font-righteoues  text-ligthgray">logo</h1>{" "}
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#141414" }}
            className="ml-auto"
          />
        </nav>
      </header>
      <section className="w-full bg-ligthbrown">
        <div className="container md:h-[52rem] xl:h-auto m-auto px-7 max-w-screen-xl leading-8 relative  z-20 pt-5">
          <div className="xl:w-7/12 xl:pr-10 font-roboto">
            <h2 className="text-2xl font-bold my-6 md:text-5xl sm:pr-5 z-20 xl:text-6xl">
              Servicios de rastas para todas las texturas de cabello
            </h2>
          </div>
          <div className="xl:w-5/12">
            <p className="text-lg xl:text-xl">
              Simple Text. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus
              quis elementum.
            </p>
          </div>
          <button className="py-3 px-5 rounded-md bg-white font-bold text-xs tracking-wider mt-7 mb-3 z-20 md:mt-20 xl:mt-44">
            RESERVAR MI CITA
          </button>
          <img
            className="w-11/12 max-w-2xl  md:absolute md:top-60 -z-10 xl:top-10 xl:right-0 "
            src="https://assets.nicepagecdn.com/d2cc3eaa/3125827/images/studio-portrait-young-african-american-man-posing-studio-background-smiles-points-with-finger-aside-copy-space-with-positive3.jpg"
            alt=""
          />
        </div>
      </section>

      <section className="w-full bg-black h-auto  ">
        <h2
          data-aos-duration="600"
          data-aos-delay="500"
          data-aos="zoom-in"
          className="font-roboto font-semibold text-center text-2xl md:text-5xl xl:text-5xl text-white py-8 animate-jump-in animate-duration-1000 animate-delay-1000 animate-ease-linear "
        >
          Servicios de peluqueria
        </h2>

        <div className=" container px-7 m-auto  max-w-screen-xl  text-white">
          {data.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              className=" m-auto w-72 h-auto flex items-cente flex-col text-center bg-white  my-3"
            >
              <h3 className="tracking-widest uppercase text-black font-bold py-8 px-2 text-base">
                {data.title}
              </h3>
              <img
                src={data.img}
                alt="img"
                data-aos="flip-down"
                data-aos-duration="1500"
                className="w-full"
              />
              <p className="text-gray">${data.price} y mas</p>
              
              <p className="text-gray">{data.contend}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
