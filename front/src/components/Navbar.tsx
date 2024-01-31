import Link from "next/link";
import BackButton from "./BackButton";

export default function Navbar() {
  return (
    <header>
      <nav className="w-full bg-purple-600 text-white p-4 mb-7 flex justify-between">
        <span className="text-3xl font-bold">Products</span>
        <ul className="flex gap-3">
          <li>
            <BackButton />
          </li>
          <li>
            <Link href="/register" className="">
              Cadastrar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
