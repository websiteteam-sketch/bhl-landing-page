export default function OpportunitySlide() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg">
      <div className="absolute top-0 right-0 w-[35vw] h-full bg-gradient-to-l from-light-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-[25vw] h-[0.3vh] bg-accent" />

      <div className="absolute top-[6vh] left-[6vw]">
        <div className="font-body text-[1.2vw] font-semibold tracking-[0.2em] uppercase text-accent">
          The Opportunity
        </div>
      </div>

      <div className="absolute top-[14vh] left-[6vw] max-w-[50vw]">
        <h2 className="font-display text-[3.8vw] font-bold text-text tracking-tight leading-[1.1]">
          Wellness Is the New Amenity Arms Race
        </h2>
        <p className="font-body text-[1.6vw] text-muted mt-[2vh] leading-relaxed max-w-[44vw]">
          Residents expect more than a gym and a pool. Properties that deliver premium wellness command higher rents, lower turnover, and stronger NOI.
        </p>
      </div>

      <div className="absolute bottom-[8vh] left-[6vw] right-[6vw] flex gap-[2vw]">
        <div className="flex-1 bg-white rounded-[1vw] p-[2.5vh_2vw] border border-primary/10">
          <div className="font-display text-[4vw] font-bold text-primary leading-none">
            $6.8T
          </div>
          <div className="font-body text-[1.4vw] font-medium text-text mt-[1vh]">
            Global Wellness Economy
          </div>
          <div className="font-body text-[1.2vw] text-muted mt-[0.5vh]">
            GWI, 2025
          </div>
        </div>

        <div className="flex-1 bg-white rounded-[1vw] p-[2.5vh_2vw] border border-primary/10">
          <div className="font-display text-[4vw] font-bold text-primary leading-none">
            40%
          </div>
          <div className="font-body text-[1.4vw] font-medium text-text mt-[1vh]">
            Consumers Rank Wellness a Top Priority
          </div>
          <div className="font-body text-[1.2vw] text-muted mt-[0.5vh]">
            McKinsey, 2024
          </div>
        </div>

        <div className="flex-1 bg-white rounded-[1vw] p-[2.5vh_2vw] border border-primary/10">
          <div className="font-display text-[4vw] font-bold text-primary leading-none">
            10-25%
          </div>
          <div className="font-body text-[1.4vw] font-medium text-text mt-[1vh]">
            Property Value Increase with Wellness
          </div>
          <div className="font-body text-[1.2vw] text-muted mt-[0.5vh]">
            Global Wellness Institute, 2025
          </div>
        </div>
      </div>
    </div>
  );
}
