import Image from "next/image";

export function Hero() {
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-[1534px] flex-1 flex-col items-center justify-center gap-[56px] px-[24px] py-[56px] lg:flex-row lg:justify-between lg:gap-[40px] lg:px-0 lg:py-0 lg:pl-[108px]">
      <div className="flex w-full max-w-[670px] flex-col items-start gap-[24px] lg:shrink-0">
        <Eyebrow />

        <h1
          className="w-full max-w-[584px] bg-clip-text text-[40px] leading-[1.12] font-bold tracking-[-1.5px] text-transparent lg:text-[56px] lg:leading-[62px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #111827 0%, #0f2542 12.5%, #0d325d 25%, #094c93 50%, #0466c9 75%, #0080ff 100%)",
          }}
        >
          Vos rayons analysés,
          <br />
          Vos actions prouvées.
        </h1>

        <p className="max-w-[545px] text-[18px] leading-[28px] text-[#6b7280]">
          Vos équipes terrain photographient les rayons — NeuraTracker en
          extrait ruptures, part de linéaire et conformité planogramme, en
          quelques secondes.
        </p>

        <div className="flex flex-wrap items-center gap-[12px]">
          <PrimaryCta />
          <SecondaryCta />
        </div>

        <p className="text-[13px] leading-[20px] font-medium whitespace-pre-wrap text-[#546f8b]">
          {`96 % de précision SKU  ·  Rapport en moins d'une minute  ·  Pilote en 4 semaines`}
        </p>
      </div>

      <div className="relative aspect-[687/444] w-full max-w-[687px] lg:mr-[21px] lg:h-[444px] lg:w-[687px] lg:shrink-0">
        <video
          className="h-full w-full object-cover mix-blend-multiply"
          src="/hero/neuratracker-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
        />
      </div>
    </section>
  );
}

function Eyebrow() {
  return (
    <div
      className="relative flex h-[27px] items-center gap-[8px] overflow-hidden rounded-full border-[0.5px] border-white px-[14px] py-[5px] backdrop-blur-[4px]"
      style={{
        background:
          "radial-gradient(484px 443px at 68% 50%, #ffffff 0%, rgba(198,227,255,0.75) 25%, rgba(140,199,255,0.5) 50%, rgba(83,171,255,0.25) 75%, rgba(25,143,255,0) 100%)",
      }}
    >
      <span
        aria-hidden
        className="absolute top-[-1px] left-1/2 h-[27px] w-[214px] -translate-x-1/2 rounded-full bg-white opacity-50 blur-[19px]"
      />
      <span className="relative text-[11px] font-semibold tracking-[1.2px] whitespace-nowrap text-[#188aff]">
        RETAIL EXECUTION · IA
      </span>
      <Image
        src="/hero/sparkle.svg"
        alt=""
        width={20}
        height={20}
        className="relative"
      />
    </div>
  );
}

function PrimaryCta() {
  return (
    <a
      href="#"
      className="group relative flex items-center overflow-hidden rounded-[12px] border border-white px-[22px] py-[13px] shadow-[0px_42px_107px_0px_rgba(87,177,255,0.34),0px_24.7px_32.3px_0px_rgba(87,177,255,0.19),0px_10.3px_13.4px_0px_rgba(87,177,255,0.22),0px_3.7px_4.8px_0px_rgba(87,177,255,0.15)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-[12px] bg-gradient-to-b from-[#0073ff] to-[#0da2ff]"
      />
      <span
        aria-hidden
        className="absolute inset-0 rounded-[12px] bg-[url('/hero/btn-texture.png')] bg-[length:307px_307px] opacity-40 mix-blend-plus-lighter"
      />
      <span className="relative text-[15px] font-semibold whitespace-nowrap text-white">
        Lancer l&apos;estimation
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[12px] shadow-[inset_0px_1px_18px_0px_#d2eaff,inset_0px_1px_4px_0px_#d2eaff]"
      />
    </a>
  );
}

function SecondaryCta() {
  return (
    <a
      href="#"
      className="flex h-[43px] items-center gap-[8px] rounded-[10px] border border-[rgba(173,204,255,0.04)] bg-white px-[22px] text-[15px] font-semibold whitespace-nowrap text-[#111827] shadow-[0px_1px_2px_rgba(16,24,40,0.06)] transition-shadow duration-200 hover:shadow-[0px_4px_12px_rgba(16,24,40,0.12)]"
    >
      <Image src="/hero/play.svg" alt="" width={10} height={11} />
      Voir la vidéo ( 60s )
    </a>
  );
}
