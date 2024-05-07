import Button from "../button/Button";

const BannerIntroduction = () => {
  return (
    <section className="px-5 max-w-screen-xl justify-center w-full h-full">
      <div className="flex justify-center w-full">
        <div className="flex flex-col w-2/4">
          <div className="w-60">
            <svg
              className="block w-full "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1400 208"
            >
              <path
                fill="#2dd4bf"
                fillOpacity="1"
                d="M0,200.72L80,180.72C160,160.72,240,150.72,250,150.6C640,116.48,800,169.6,960,185.44C1120,201.28,1280,195.89,1360,193.28L1440,190.67L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
            <div className="bg-teal-400 pb-5 pl-5 pr-5 rounded-b-lg w-60">
              <h2 className="text-white font-bold text-lg">
                Bem vindos à KidsLand
              </h2>
            </div>
          </div>
          <h1 className="font-bold text-sky-950 text-6xl pt-5">
            Aprenda, Brinque e Cresça!
          </h1>
          <p className="pt-10 text-sky-800 text-lg font-medium">
            Na KidsLand adotamos um conceito revolucionário de ensino para
            nossos alunos, onde eles podem aprender se divertindo, tornando o
            aprendizado mais eficaz e rápido!
          </p>
          <Button className="w-2/4 mt-10">Ler Mais</Button>
        </div>
        <div className="w-2/4">
          <img className="w-full" src="/Lapis.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default BannerIntroduction;
