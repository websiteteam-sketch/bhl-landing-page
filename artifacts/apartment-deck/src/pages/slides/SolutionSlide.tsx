const base = import.meta.env.BASE_URL;

export default function SolutionSlide() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg">
      <div className="absolute top-0 right-0 w-[50vw] h-full">
        <img
          src={`${base}solution-bg.png`}
          crossOrigin="anonymous"
          alt="Recovery Pod wellness space in apartment building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-transparent" />
      </div>

      <div className="absolute top-[6vh] left-[6vw] z-10">
        <div className="font-body text-[1.2vw] font-semibold tracking-[0.2em] uppercase text-accent">
          The Solution
        </div>
      </div>

      <div className="absolute top-[14vh] left-[6vw] max-w-[44vw] z-10">
        <h2 className="font-display text-[3.5vw] font-bold text-text tracking-tight leading-[1.1]">
          The Recovery Pod for Apartment Buildings
        </h2>
        <p className="font-body text-[1.5vw] text-muted mt-[2vh] leading-relaxed max-w-[38vw]">
          Seven clinical-grade wellness modalities, installed in 500-750 sqft of existing common space. Turnkey. Revenue-positive. Under 90 days.
        </p>
      </div>

      <div className="absolute top-[45vh] left-[6vw] z-10 flex flex-col gap-[2.5vh]">
        <div className="flex items-center gap-[1.5vw]">
          <div className="w-[3.5vw] h-[3.5vw] rounded-full bg-primary flex items-center justify-center">
            <span className="font-body text-[1.4vw] font-bold text-white">1</span>
          </div>
          <div>
            <div className="font-body text-[1.6vw] font-semibold text-text">500-750 sqft footprint</div>
            <div className="font-body text-[1.3vw] text-muted">Fits spaces you are not monetizing today</div>
          </div>
        </div>

        <div className="flex items-center gap-[1.5vw]">
          <div className="w-[3.5vw] h-[3.5vw] rounded-full bg-primary flex items-center justify-center">
            <span className="font-body text-[1.4vw] font-bold text-white">2</span>
          </div>
          <div>
            <div className="font-body text-[1.6vw] font-semibold text-text">$45,000-$49,000 investment</div>
            <div className="font-body text-[1.3vw] text-muted">Complete turnkey pod with all equipment included</div>
          </div>
        </div>

        <div className="flex items-center gap-[1.5vw]">
          <div className="w-[3.5vw] h-[3.5vw] rounded-full bg-primary flex items-center justify-center">
            <span className="font-body text-[1.4vw] font-bold text-white">3</span>
          </div>
          <div>
            <div className="font-body text-[1.6vw] font-semibold text-text">7 evidence-based modalities</div>
            <div className="font-body text-[1.3vw] text-muted">HBOT, Red Light, PEMF, Sauna, Compression, Lymphatic, Cold Plunge</div>
          </div>
        </div>

        <div className="flex items-center gap-[1.5vw]">
          <div className="w-[3.5vw] h-[3.5vw] rounded-full bg-primary flex items-center justify-center">
            <span className="font-body text-[1.4vw] font-bold text-white">4</span>
          </div>
          <div>
            <div className="font-body text-[1.6vw] font-semibold text-text">No additional staff required</div>
            <div className="font-body text-[1.3vw] text-muted">30+ self-guided protocols residents use independently</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-[25vw] h-[0.4vh] bg-accent" />
    </div>
  );
}
