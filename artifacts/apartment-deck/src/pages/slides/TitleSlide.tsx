const base = import.meta.env.BASE_URL;

export default function TitleSlide() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-deep">
      <img
        src={`${base}hero-apartment.png`}
        crossOrigin="anonymous"
        alt="Luxury apartment building wellness space"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/70 to-deep/40" />

      <div className="absolute top-[6vh] left-[6vw] z-10">
        <div className="font-body text-[1.4vw] font-semibold tracking-[0.3em] uppercase text-accent">
          BH Labs
        </div>
      </div>

      <div className="absolute bottom-[10vh] left-[6vw] z-10 max-w-[55vw]">
        <div className="font-body text-[1.3vw] font-medium tracking-[0.2em] uppercase text-accent mb-[2vh]">
          Partnership Proposal
        </div>
        <h1 className="font-display text-[5.5vw] font-bold leading-[1.05] text-white tracking-tight mb-[3vh]">
          The Recovery Pod
        </h1>
        <p className="font-body text-[1.8vw] text-white/70 leading-relaxed max-w-[42vw]">
          Turnkey wellness infrastructure for apartment buildings.
          New revenue. Zero additional staff. Under 90 days.
        </p>
      </div>

      <div className="absolute bottom-[6vh] right-[6vw] z-10">
        <div className="font-body text-[1.2vw] text-white/40">
          www.thebiohacklab.com
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-[40vw] h-[0.4vh] bg-accent" />
    </div>
  );
}
