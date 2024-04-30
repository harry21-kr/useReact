import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <nav className="bg-gray-1 flex h-16 items-center px-6 text-white">
      <Link href="/">
        <h1 className="text-primary text-xl font-bold">useReact</h1>
      </Link>
    </nav>
  );
};

export default Nav;
