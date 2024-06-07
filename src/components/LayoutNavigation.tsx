import Link from "next/link";
import { MdClose } from "react-icons/md";
import { layoutNavigations } from "@/config";
import clsx from "clsx";

type LayoutNavigationProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LayoutNavigation({
  visible,
  setVisible,
}: LayoutNavigationProps) {
  return (
    <nav
      className={clsx(
        "fixed inset-0 bg-black/50 text-white backdrop-blur-3xl z-10 md:flex-1 md:flex md:flex-row md:static md:items-center md:justify-center md:bg-transparent md:text-black",
        [visible ? "flex flex-col" : "hidden md:flex"]
      )}
    >
      <div className="flex flex-col bg-green-950/50 backdrop-blur-3xl md:flex-row md:bg-transparent">
        <div className="flex p-4 md:hidden">
          <div className="flex-1">
            <h1 className="text-2xl font-extrabold text-green">Pepe</h1>
          </div>
          <button
            className="p-2 text-xl"
            onClick={() => setVisible(false)}
          >
            <MdClose />
          </button>
        </div>
        {layoutNavigations.map((navigation, index) => (
          <Link
            href={navigation.href}
            key={index}
            className="p-4"
          >
            {navigation.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
