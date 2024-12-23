"use client";

import { RiCloseLargeFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const BurguerMenu = ({
  isMenuOpen,
  setIsMenuOpen,
}: Props): React.ReactElement => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative">
      <button onClick={handleMenuOpen}>
        {isMenuOpen ? (
          <RiCloseLargeFill size={25} />
        ) : (
          <RxHamburgerMenu size={25} />
        )}
      </button>
      {isMenuOpen && (
        <SideBar isVisible={isVisible} handleMenuOpen={handleMenuOpen} />
      )}
    </div>
  );
};

export default BurguerMenu;
