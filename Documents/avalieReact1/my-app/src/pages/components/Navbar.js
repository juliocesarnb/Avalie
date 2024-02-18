import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="text-black-1 py-4">
    <div className="container mx-auto flex items-center justify-between">
      <div className="ml-20">
        <Link href="/">
          <img src="/assets/Logo-Avalie.svg" alt="Logo da empresa" width={150} height={150} />
        </Link>
      </div>
      <ul className="flex items-center space-x-10">
        <li>
          <Link href="/">Quem Somos</Link>
        </li>
        <li>
          <Link href="/about">Soluções</Link>
        </li>
        <li>
          <Link href="/contact">Produtos</Link>
        </li>
        <li>
          <Link href="/contact">Contatos</Link>
        </li>
        <li>
          <Link href="/contact">
            <button className="hover:brightness-110 hover:animate-pulse font-bold py-2 px-6 rounded-full bg-purple-600 text-white">
              Login
            </button>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  
  );
};

export default Navbar;