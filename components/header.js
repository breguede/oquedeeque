import Image from "next/image";
import React from "react";
function Header() {
  return (
    <div className="sticky top-0 z-30 w-full px-2 py-4 bg-black bg-opacity-75 sm:px-4 shadow-xl">
    <div className="grid grid-cols-5 gap-4 mt-5 ">
      <div className="flex ml-auto col-span-2">
        <ul className="flex">
          <li className="m-4 text-2xl text-white">A Cia.</li>
          <li className="m-4 text-2xl text-white">Espetáculos</li>
          <li className="m-4 text-2xl text-white">Agenda</li>
          <li className="m-4 text-2xl text-white">Turnê</li>
        </ul>
      </div>
      <div className="flex justify-center">
        <Image alt="leeerob" width={130} height={70} src="https://oquedeque.com.br/novo/wp-content/uploads/2018/12/novo-logo-claro1-e1544847449375.png" />
      </div>
      <div className="flex mr-auto col-span-2">
        <ul className="flex">
          <li className="m-4 text-2xl text-white">Clipping</li>
          <li className="m-4 text-2xl text-white">Contato</li>
          <li className="m-4">
            <Image src="https://oquedeque.com.br/novo/wp-content/uploads/2019/02/bandeiras1.png" width={75} height={25}/>
          </li>          
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Header;
