import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between p-3">
      <a href="#">IconBrand</a>
      <ul className="flex space-x-8 ">
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <li>Outdoor</li>
        <li>Umbrellas</li>
        <li>Floor</li>
        <li>Trade</li>
      </ul>
    </nav>
  );
};
