import logo from "../../assets/clarke-drafting-logo-black.png";

const Header = () => {
  return (
    <header className="bg-white mb-1">
      <div className="flex flex-row justify-start items-center py-1.5 px-2">
        <div className="flex items-center justify-between">
          <img
            src={logo}
            alt="Clarke Drafting logo"
            className="h-10 w-10 rounded-full"
          />
          <p className="text-black text-3xl font-black font-sans ml-1">
            Clarke Drafting
          </p>
        </div>
      </div>
    </header>
  );
};
export default Header;
