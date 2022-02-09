import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between p-3">
      <Link href="/">
        <a className="hover:text-blue-400">IconBrand</a>
      </Link>
      <ul className="flex space-x-8 ">
        <Link href="/projects">
          <a className="hover:text-blue-400">Projects</a>
        </Link>
        <Link href="/products">
          <a className="hover:text-blue-400">Products</a>
        </Link>
        <li>Umbrellas</li>
        <li>Floor</li>
        <li>Trade</li>
      </ul>
    </nav>
  );
};
