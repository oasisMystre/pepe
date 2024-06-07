"use client";

import { useState } from "react";
import { MdMenu } from "react-icons/md";

import LayoutNavigation from "./LayoutNavigation";

export default function LayoutHeaderClient() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <LayoutNavigation
        visible={showMenu}
        setVisible={setShowMenu}
      />
      <div className="md:hidden">
        <button className="text-xl p-4" onClick={() => setShowMenu(!showMenu)}>
          <MdMenu />
        </button>
      </div>
    </>
  );
}
