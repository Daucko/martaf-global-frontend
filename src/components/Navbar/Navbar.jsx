import MartafInitials from '../../assets/images/martaf-initials.svg';
import MartafLogo from '../../assets/images/martaf-logo.svg';
import LangDropdown from '../ui/LangDropdown';

const Navbar = () => {
  return (
    <main className="h-[160px] border border-b-2 border-green-700">
      <nav className="bg-[#2C3192] h-[96px] flex justify-between items-center">
        <section className="w-[198.8px] h-[40.58px] border border-red-600">
          <div>
            <img src={MartafInitials} alt="Matarf Vector" />
          </div>
          <div>
            <img src={MartafLogo} alt="Matarf Name" />
          </div>
          <div></div>
        </section>
        <form className="w-[560px] h-[48px] flex justify-between items-center bg-white py-[10px] ps-[24px] pe-[4px] rounded-[100px]">
          <input type="search" value="" name="" className="w-full h-full" />
          <button
            type="submit"
            className="w-[80px] h-[40px] rounded-[100px] p[10px] bg-[#2C3192] text-white"
          >
            Search
          </button>
        </form>
        <section className="w-[307px] h-[48px] border border-red-500">
          <div className="w-[77px] h-[24px]">
            <LangDropdown />
          </div>
          <div></div>
        </section>
      </nav>
      <header></header>
    </main>
  );
};
export default Navbar;
