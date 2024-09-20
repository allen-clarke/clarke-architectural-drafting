import logo from "../../assets/clarke-drafting-logo-blue.png";

const Header = () => {
  return (
    <header>
      <div className="flex flex-row justify-between items-center py-1.5 px-2">
        <div>
          <img
            src={logo}
            alt="Clarke Drafting logo"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <div>
          <button className="">
            <i className="bx bx-moon"></i>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
