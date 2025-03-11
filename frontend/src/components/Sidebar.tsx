import { Link } from "@heroui/react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface SidebarItem {
  id?: number;
  title: string;
  icon: JSX.Element;
  link?: string;
  subItems?: { title: string; link: string }[];
}

interface SidebarProps {
  sidebarItems: SidebarItem[];
}

export default function Sidebar({ sidebarItems }: SidebarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setIsDropdownOpen((prev) => (prev === id ? null : id));
  };
  return (
    <aside
      style={{
        width: "15rem",
        background: "gray",
        height: "100vh",
        overflowY: "auto",
        position: "sticky",
        top: 0,
        left: 0,
      }}
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {sidebarItems.map(({ id, title, icon, link, subItems }) =>
            link ? (
              <li key={title}>
                <Link
                  href={link}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    {icon}
                  </span>
                  <span className="ml-3">{title}</span>
                </Link>
              </li>
            ) : (
              <li key={title}>
                <button
                  onClick={() => id && toggleDropdown(id)}
                  type="button"
                  className="flex items-center w-full p-2 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <span className="shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    {icon}
                  </span>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    {title}
                  </span>
                  <FaAngleDown
                    className={`transition-transform ${
                      isDropdownOpen === id ? "-rotate-180" : ""
                    }`}
                  />
                </button>
                <ul
                  className={`${
                    isDropdownOpen === id ? "block" : "hidden"
                  } py-2 space-y-2`}
                >
                  {subItems?.map(({ title, link }) => (
                    <li key={title}>
                      <Link
                        href={link}
                        className="flex items-center w-full p-2 text-gray-900 rounded-lg pl-11 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </div>
    </aside>
  );
}
