import { RiCloseLargeFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const BurguerMenu = ({
  isMenuOpen,
  setIsMenuOpen,
}: Props): React.ReactElement => {
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <button onClick={handleMenuOpen}>
      {isMenuOpen ? (
        <RiCloseLargeFill size={25} />
      ) : (
        <RxHamburgerMenu size={25} />
      )}
    </button>
  );
};

export default BurguerMenu;
