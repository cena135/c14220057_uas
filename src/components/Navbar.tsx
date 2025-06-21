'use client';

import { useRouter } from "next/navigation";
import { clearUserSession } from "@/utils/auth";
import { User } from "@/types";

interface NavbarProps {
  user: User;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const router = useRouter();

  const handleLogout = () => {
    clearUserSession();
    router.push("/signin");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Dashboard</div>
        <div className="flex items-center gap-4">
          <span className="text-white">
            Welcome, <span className="text-purple-300">{user.username}</span>
          </span>
          <button onClick={handleLogout} className="text-white px-4">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;