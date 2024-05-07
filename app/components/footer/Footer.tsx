const Footer = () => {
  return (
    <footer className="">
      <svg
        className="block w-full "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 208"
      >
        <path
          fill="#082f49"
          fillOpacity="1"
          d="M0,200.72L80,180.72C160,160.72,240,150.72,250,150.6C640,116.48,800,169.6,960,185.44C1120,201.28,1280,195.89,1360,193.28L1440,190.67L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <section className="bg-sky-950 w-full flex justify-center">
        <div className="text-zinc-300 font-bold w-full flex justify-between pb-10 px-16 max-w-screen-xl">
          <div className="w-52">
            <div>
              <img src="/Logo.png" alt="" />
            </div>
            <p className="text-lg">
              Conceito de educação adequado para entregar um ensino de qualidade
              para seu filho
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex w-full justify-start pb-5">
              <h1 className="text-2xl">Menu</h1>
            </div>
            <div className="flex gap-40">
              <div>
                <p className=" hover:text-white hover:cursor-pointer pb-1">
                  Início
                </p>
                <p className=" hover:text-white hover:cursor-pointer pb-1">
                  Sobre Nós
                </p>
                <p className=" hover:text-white hover:cursor-pointer pb-1">
                  Serviços
                </p>
                <p className=" hover:text-white hover:cursor-pointer pb-1">
                  Páginas
                </p>
              </div>
              <div>
                <p className=" hover:text-white hover:cursor-pointer pb-1">
                  Blog
                </p>
                <p className=" hover:text-white hover:cursor-pointer pb-1">
                  Preços
                </p>
                <p className=" hover:text-white hover:cursor-pointer pb-1">
                  Contato
                </p>
                <p className=" hover:text-white hover:cursor-pointer pb-1">
                  FAQ
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex w-full justify-start pb-5">
              <h2 className="text-2xl">Utility pages</h2>
            </div>
            <div>
              <p className=" hover:text-white hover:cursor-pointer pb-1">
                Proteção de senha
              </p>
              <p className=" hover:text-white hover:cursor-pointer pb-1">
                Error
              </p>
              <p className=" hover:text-white hover:cursor-pointer pb-1">
                Licenças
              </p>
              <p className=" hover:text-white hover:cursor-pointer pb-1">
                Changelog
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
