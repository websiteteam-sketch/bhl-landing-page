export default function ROISlide() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg">
      <div className="absolute top-0 right-0 w-[20vw] h-[20vw] bg-light-accent/20 rounded-full -translate-y-1/2 translate-x-1/4" />

      <div className="absolute top-[6vh] left-[6vw]">
        <div className="font-body text-[1.2vw] font-semibold tracking-[0.2em] uppercase text-accent">
          ROI Projection
        </div>
      </div>

      <div className="absolute top-[13vh] left-[6vw] max-w-[55vw]">
        <h2 className="font-display text-[3.2vw] font-bold text-text tracking-tight leading-[1.1]">
          The Numbers Speak for Themselves
        </h2>
      </div>

      <div className="absolute top-[26vh] left-[6vw] right-[6vw]">
        <div className="bg-white rounded-[1vw] border border-primary/10 overflow-hidden">
          <div className="grid grid-cols-4 bg-primary text-white">
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] font-semibold" />
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] font-semibold text-center">Conservative</div>
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] font-semibold text-center">Moderate</div>
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] font-semibold text-center">Aggressive</div>
          </div>

          <div className="grid grid-cols-4 border-b border-primary/5">
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] font-medium text-text bg-primary/5">Units</div>
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] text-text text-center">100</div>
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] text-text text-center">200</div>
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] text-text text-center">350</div>
          </div>

          <div className="grid grid-cols-4 border-b border-primary/5">
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] font-medium text-text bg-primary/5">Participation Rate</div>
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] text-text text-center">80%</div>
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] text-text text-center">90%</div>
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] text-text text-center">95%</div>
          </div>

          <div className="grid grid-cols-4 border-b border-primary/5">
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] font-medium text-text bg-primary/5">Monthly Wellness Fee</div>
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] text-text text-center">$25</div>
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] text-text text-center">$30</div>
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] text-text text-center">$40</div>
          </div>

          <div className="grid grid-cols-4 border-b border-primary/5">
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] font-medium text-text bg-primary/5">Monthly Revenue</div>
            <div className="p-[1.5vh_1.5vw] font-display text-[1.4vw] font-bold text-primary text-center">$2,000</div>
            <div className="p-[1.5vh_1.5vw] font-display text-[1.4vw] font-bold text-primary text-center">$5,400</div>
            <div className="p-[1.5vh_1.5vw] font-display text-[1.4vw] font-bold text-primary text-center">$13,300</div>
          </div>

          <div className="grid grid-cols-4 border-b border-primary/5">
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] font-medium text-text bg-primary/5">Annual Revenue</div>
            <div className="p-[1.5vh_1.5vw] font-display text-[1.4vw] font-bold text-primary text-center">$24,000</div>
            <div className="p-[1.5vh_1.5vw] font-display text-[1.4vw] font-bold text-primary text-center">$64,800</div>
            <div className="p-[1.5vh_1.5vw] font-display text-[1.4vw] font-bold text-primary text-center">$159,600</div>
          </div>

          <div className="grid grid-cols-4 border-b border-primary/5">
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] font-medium text-text bg-primary/5">Payback Period</div>
            <div className="p-[1.5vh_1.5vw] font-body text-[1.4vw] font-semibold text-accent text-center">~23 months</div>
            <div className="p-[1.5vh_1.5vw] font-body text-[1.4vw] font-semibold text-accent text-center">~9 months</div>
            <div className="p-[1.5vh_1.5vw] font-body text-[1.4vw] font-semibold text-accent text-center">~4 months</div>
          </div>

          <div className="grid grid-cols-4 bg-primary/5">
            <div className="p-[1.5vh_1.5vw] font-body text-[1.3vw] font-medium text-text bg-primary/10">Property Value Increase</div>
            <div className="p-[1.5vh_1.5vw] font-display text-[1.4vw] font-bold text-primary text-center">+$480,000</div>
            <div className="p-[1.5vh_1.5vw] font-display text-[1.4vw] font-bold text-primary text-center">+$1,296,000</div>
            <div className="p-[1.5vh_1.5vw] font-display text-[1.4vw] font-bold text-primary text-center">+$3,192,000</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-end">
        <p className="font-body text-[1.2vw] text-muted">
          Property value increase calculated at 5% cap rate. Revenue = Units x Participation Rate x Monthly Fee.
        </p>
        <div className="font-body text-[1.2vw] text-muted">
          Investment: $45,000-$49,000
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-[25vw] h-[0.4vh] bg-accent" />
    </div>
  );
}
