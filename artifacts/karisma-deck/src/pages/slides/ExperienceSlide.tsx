const base = import.meta.env.BASE_URL;

export default function ExperienceSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">
      <div className="absolute top-0 left-0 w-full h-[0.5vh] bg-gradient-to-r from-accent via-accent/50 to-transparent" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[5vh]">
        <div className="flex items-center gap-[1vw] mb-[2vh]">
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.2em] uppercase">
            The Guest Experience
          </p>
        </div>

        <h2 className="font-display text-white text-[3.2vw] font-bold tracking-tight leading-[1.1] mb-[4vh]">
          The Guest Journey
        </h2>

        {/* Three tiers side by side */}
        <div className="flex gap-[2vw] flex-1">
          {/* Tier 1 — Morning Activation */}
          <div className="flex-1 bg-white/5 rounded-[1vw] border border-white/10 p-[2vw] flex flex-col">
            <p className="font-body text-accent text-[1vw] font-semibold tracking-[0.15em] uppercase mb-[1vh]">
              Morning Activation
            </p>
            <p className="font-display text-white text-[1.8vw] font-bold mb-[1.5vh]">
              Quick Recovery
            </p>
            <div className="flex items-baseline gap-[0.5vw] mb-[2vh]">
              <p className="font-display text-accent text-[2.5vw] font-bold">45 min</p>
              <p className="font-body text-white/50 text-[1.3vw]">$75–$90</p>
            </div>
            <div className="space-y-[1vh] mb-auto">
              <p className="font-body text-white/70 text-[1.1vw]">Red Light Therapy</p>
              <p className="font-body text-accent text-[1vw]">↓</p>
              <p className="font-body text-white/70 text-[1.1vw]">Cold Plunge</p>
              <p className="font-body text-accent text-[1vw]">↓</p>
              <p className="font-body text-white/70 text-[1.1vw]">Compression</p>
            </div>
            <div className="mt-[2vh] rounded-[0.6vw] overflow-hidden h-[12vh] bg-white/5 flex items-center justify-center">
              <img
                src={`${base}redlight-therapy.jpg`}
                crossOrigin="anonymous"
                className="w-full h-full object-contain"
                alt="Red Light Therapy"
              />
            </div>
          </div>

          {/* Tier 2 — Signature Recovery (featured) */}
          <div className="flex-1 bg-accent/10 rounded-[1vw] border-2 border-accent/30 p-[2vw] flex flex-col relative">
            <div className="absolute top-0 left-0 right-0 h-[0.4vh] bg-accent rounded-t-[1vw]" />
            <p className="font-body text-accent text-[1vw] font-semibold tracking-[0.15em] uppercase mb-[1vh]">
              Signature Recovery ★
            </p>
            <p className="font-display text-white text-[1.8vw] font-bold mb-[1.5vh]">
              Full Pod Experience
            </p>
            <div className="flex items-baseline gap-[0.5vw] mb-[2vh]">
              <p className="font-display text-accent text-[2.5vw] font-bold">60 min</p>
              <p className="font-body text-white/50 text-[1.3vw]">$110–$140</p>
            </div>
            <div className="space-y-[1vh] mb-auto">
              <p className="font-body text-white/70 text-[1.1vw]">Red Light → PEMF</p>
              <p className="font-body text-accent text-[1vw]">↓</p>
              <p className="font-body text-white/70 text-[1.1vw]">Cold Plunge → IR Sauna</p>
              <p className="font-body text-accent text-[1vw]">↓</p>
              <p className="font-body text-white/70 text-[1.1vw]">Compression</p>
            </div>
            <div className="mt-[2vh] rounded-[0.6vw] overflow-hidden h-[12vh] bg-white/5 flex items-center justify-center">
              <img
                src={`${base}compression-boots.jpg`}
                crossOrigin="anonymous"
                className="w-full h-full object-contain"
                alt="Compression Therapy"
              />
            </div>
          </div>

          {/* Tier 3 — Full Longevity */}
          <div className="flex-1 bg-white/5 rounded-[1vw] border border-white/10 p-[2vw] flex flex-col">
            <p className="font-body text-accent text-[1vw] font-semibold tracking-[0.15em] uppercase mb-[1vh]">
              Full Longevity
            </p>
            <p className="font-display text-white text-[1.8vw] font-bold mb-[1.5vh]">
              Pod + HBOT + IV
            </p>
            <div className="flex items-baseline gap-[0.5vw] mb-[2vh]">
              <p className="font-display text-accent text-[2.5vw] font-bold">90+ min</p>
              <p className="font-body text-white/50 text-[1.3vw]">$200–$300+</p>
            </div>
            <div className="space-y-[1vh] mb-auto">
              <p className="font-body text-white/70 text-[1.1vw]">Full 5-modality sequence</p>
              <p className="font-body text-accent text-[1vw]">↓</p>
              <p className="font-body text-white/70 text-[1.1vw]">HBOT (60 min)</p>
              <p className="font-body text-accent text-[1vw]">↓</p>
              <p className="font-body text-white/70 text-[1.1vw]">Optional IV Therapy</p>
            </div>
            <div className="mt-[2vh] rounded-[0.6vw] overflow-hidden h-[12vh] bg-white/5 flex items-center justify-center">
              <img
                src={`${base}hbot-chamber.jpg`}
                crossOrigin="anonymous"
                className="w-full h-full object-contain"
                alt="HBOT Chamber"
              />
            </div>
          </div>
        </div>

        <div className="mt-[2vh]">
          <p className="font-body text-white/30 text-[1.1vw] italic">
            Proprietary protocol sequencing is BHL's intellectual property. The order matters — each modality primes the body for the next.
          </p>
        </div>
      </div>
    </div>
  );
}
