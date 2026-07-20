import Image from "next/image";
import { asset } from "../lib/base-path";

const NAV_LINKS = [
  "Accueil",
  "Problèmes",
  "Solutions",
  "Tarification",
  "Mobile",
  "Sécurité",
  "Contact",
];

export function Navbar() {
  return (
    <header className="relative z-30 px-[16px] pt-[15px] lg:px-[31px]">
      <nav className="relative flex h-[76px] w-full items-center justify-between overflow-hidden rounded-[24px] border-[0.6px] border-[#eaf2ff]/70 bg-[#0b1526] px-[21px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] backdrop-blur-[8px]">
        <NavLights />

        <a href="#" className="relative flex items-center gap-[5px]">
          <Image
            src={asset("/hero/logo.svg")}
            alt="NeuraTracker"
            width={36}
            height={36}
            priority
          />
          <span className="text-[18px] font-semibold text-white">
            NeuraTracker
          </span>
        </a>

        <ul className="relative hidden items-center gap-[28px] lg:flex">
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <a
                href="#"
                className="text-[14px] font-medium whitespace-nowrap text-[#8293af] transition-colors duration-200 hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="relative flex items-center gap-[12px]">
          <button
            type="button"
            className="flex cursor-pointer items-center gap-[6px] rounded-full px-[12px] py-[6px] text-[12px] font-medium text-white transition-colors hover:bg-white/10"
          >
            FR
            <Image src={asset("/hero/chevron.svg")} alt="" width={7} height={5} />
          </button>
          <a
            href="#"
            className="rounded-[10px] px-[22px] py-[13px] text-[15px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-white/10"
          >
            Se connecter
          </a>
        </div>
      </nav>
    </header>
  );
}

/**
 * The soft light streaks living inside the dark nav pill: two pairs of
 * blurred blue beams (screen-blended) near the center plus glow arcs
 * bleeding in from both corners.
 */
function NavLights() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[24px]"
    >
      <div className="absolute top-0 left-[calc(50%-271px)] h-[76px] w-[516px] -translate-x-1/2 opacity-25 mix-blend-plus-lighter blur-[31.6px]">
        <div className="absolute top-[22px] left-[81px] h-[17px] w-[419px] rotate-[14.91deg] bg-[#188aff]" />
        <div className="absolute top-[-12px] left-[-163px] h-[17px] w-[419px] rotate-[14.91deg] bg-[#188aff]" />
      </div>
      <div className="absolute top-0 left-[calc(50%+162px)] h-[76px] w-[516px] -translate-x-1/2 rotate-180 -scale-y-100 opacity-25 mix-blend-plus-lighter blur-[31.6px]">
        <div className="absolute top-[22px] left-[81px] h-[17px] w-[419px] rotate-[14.91deg] bg-[#188aff]" />
        <div className="absolute top-[-12px] left-[-163px] h-[17px] w-[419px] rotate-[14.91deg] bg-[#188aff]" />
      </div>
      <div className="absolute top-0 right-0 h-[76px] w-[211px] overflow-hidden opacity-25">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/hero/nav-glow-right.svg")}
          alt=""
          className="absolute top-[-78px] left-0 w-[221px] max-w-none mix-blend-plus-lighter"
        />
      </div>
      <div className="absolute top-0 left-0 h-[76px] w-[184px] overflow-hidden opacity-25">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/hero/nav-glow-left.svg")}
          alt=""
          className="absolute top-[-78px] left-[-37px] w-[221px] max-w-none rotate-180 -scale-y-100 mix-blend-plus-lighter"
        />
      </div>
    </div>
  );
}
