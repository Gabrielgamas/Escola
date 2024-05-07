import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { Link } from "@remix-run/react";
import Button from "../button/Button";

const Header = () => {
  return (
    <section className="bg-[#fffdf5] w-full flex justify-center">
      <div className="flex w-full justify-between items-center px-4 py-2 max-w-screen-xl">
        <div>
          <Link to="/">
            <img src="/Logo.png" alt="" />
          </Link>
        </div>
        <div className="flex ">
          <Menubar className="p-5 text-black border-2 font-bold border-white rounded-lg">
            <MenubarMenu>
              <MenubarTrigger className="px-5 text-lg  hover:text-orange-500">
                Home
              </MenubarTrigger>
              <MenubarTrigger className="px-5 text-lg  hover:text-orange-500">
                <Link to="/teste">Sobre Nós</Link>
              </MenubarTrigger>
              <MenubarTrigger className="px-5 text-lg  hover:text-orange-500">
                Serviços
              </MenubarTrigger>
              <MenubarTrigger className="px-5 text-lg  hover:text-orange-500">
                Páginas
              </MenubarTrigger>
              <MenubarTrigger className="px-5 text-lg  hover:text-orange-500">
                Blog
              </MenubarTrigger>
              <MenubarTrigger className="px-5 text-lg  hover:text-orange-500">
                Preços
              </MenubarTrigger>
              <MenubarTrigger className="px-5 text-lg  hover:text-orange-500">
                Contato
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
        <div>
          <Button>Vamos lá!</Button>
        </div>
      </div>
    </section>
  );
};

export default Header;
