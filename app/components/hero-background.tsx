import { asset } from "../lib/base-path";

/**
 * Hero backdrop, back-to-front exactly as the Figma frame layers it:
 *   1. #FCFCFC base (set on <main>)
 *   2. Bulbs      — two soft blue glow blobs anchored to the left
 *   3. FractalGlass — 12 × 60px vertical columns with backdrop-blur that
 *                     frost the bulbs sitting behind them
 * Content and the video render on top of this (higher z-index).
 *
 * Everything is positioned inside a centered 1534px frame so the Figma
 * coordinates map directly and stay aligned with the hero content.
 */
export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="relative mx-auto h-full w-full max-w-[1534px]">
        <Bulbs />
        <FractalGlass />
      </div>
    </div>
  );
}

/** Two masked, rotated blue glow blobs (Figma node "Bulbs" 753:1840). */
function Bulbs() {
  const src = asset("/hero/bulb.jpg");
  return (
    <div className="absolute left-[-190px] top-[82px] h-[558px] w-[727px] opacity-[0.58]">
      {/* Bulb 1 — large diagonal glow */}
      <div className="absolute left-[-136.94px] top-[-140.19px] flex h-[865.451px] w-[908.848px] items-center justify-center blur-[80px]">
        <div className="rotate-[-31.4deg]">
          <div
            className="relative h-[580.184px] w-[710.649px]"
            style={{
              WebkitMaskImage: `url("${asset("/hero/bulb-mask-1.svg")}")`,
              maskImage: `url("${asset("/hero/bulb-mask-1.svg")}")`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "552.094px 418.531px",
              maskSize: "552.094px 418.531px",
              WebkitMaskPosition: "175.273px 192.858px",
              maskPosition: "175.273px 192.858px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="absolute inset-0 h-full w-full max-w-none object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bulb 2 — smaller lower-right glow */}
      <div className="absolute left-[414.56px] top-[279.22px] flex h-[350.538px] w-[368.116px] items-center justify-center blur-[80px]">
        <div className="-scale-y-100 rotate-[-148.6deg]">
          <div
            className="relative h-[234.995px] w-[287.838px]"
            style={{
              WebkitMaskImage: `url("${asset("/hero/bulb-mask-2.svg")}")`,
              maskImage: `url("${asset("/hero/bulb-mask-2.svg")}")`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "223.617px 169.52px",
              maskSize: "223.617px 169.52px",
              WebkitMaskPosition: "73.503px 78.114px",
              maskPosition: "73.503px 78.114px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="absolute inset-0 h-full w-full max-w-none object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * "Fractal Glass" (Figma node 752:1767): 12 vertical 60px columns clipped to
 * a 960px band on the left. Each column's backdrop-blur frosts the bulbs
 * behind it, producing the soft striped light on the left of the hero.
 */
function FractalGlass() {
  const columnGradient =
    "linear-gradient(90deg, rgba(204,204,204,0.02) 0%, rgba(242,242,242,0.11) 67%, rgba(204,204,204,0.02) 100%)";
  return (
    <div className="absolute bottom-0 left-0 h-full w-[960px] overflow-hidden">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 h-full w-[60px] backdrop-blur-[90px]"
          style={{ left: `${i * 60}px`, background: columnGradient }}
        />
      ))}
    </div>
  );
}
