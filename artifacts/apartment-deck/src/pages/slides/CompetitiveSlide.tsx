export default function CompetitiveSlide() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-deep">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-deep via-primary/60 to-deep" />

      <div className="absolute top-[6vh] left-[6vw] z-10">
        <div className="font-body text-[1.2vw] font-semibold tracking-[0.2em] uppercase text-accent">
          Competitive Landscape
        </div>
      </div>

      <div className="absolute top-[14vh] left-[6vw] max-w-[50vw] z-10">
        <h2 className="font-display text-[3.2vw] font-bold text-white tracking-tight leading-[1.1]">
          Why the Recovery Pod Wins
        </h2>
      </div>

      <div className="absolute top-[28vh] left-[6vw] right-[6vw] z-10">
        <div className="grid grid-cols-4 gap-[1.5vw]">
          <div className="bg-white/5 rounded-[0.8vw] p-[2vh_1.5vw] border border-white/10">
            <div className="font-body text-[1.2vw] font-semibold text-white/40 uppercase tracking-wider mb-[2vh]">
              Metric
            </div>
            <div className="flex flex-col gap-[2vh]">
              <div className="font-body text-[1.3vw] text-white/70">Investment</div>
              <div className="w-full h-[0.1vh] bg-white/10" />
              <div className="font-body text-[1.3vw] text-white/70">Footprint</div>
              <div className="w-full h-[0.1vh] bg-white/10" />
              <div className="font-body text-[1.3vw] text-white/70">Deployment</div>
              <div className="w-full h-[0.1vh] bg-white/10" />
              <div className="font-body text-[1.3vw] text-white/70">Staff Required</div>
              <div className="w-full h-[0.1vh] bg-white/10" />
              <div className="font-body text-[1.3vw] text-white/70">Revenue Model</div>
            </div>
          </div>

          <div className="bg-white/5 rounded-[0.8vw] p-[2vh_1.5vw] border border-white/10">
            <div className="font-body text-[1.2vw] font-semibold text-white/40 uppercase tracking-wider mb-[2vh]">
              Traditional Gym
            </div>
            <div className="flex flex-col gap-[2vh]">
              <div className="font-body text-[1.3vw] text-white/70">$200K-$500K</div>
              <div className="w-full h-[0.1vh] bg-white/10" />
              <div className="font-body text-[1.3vw] text-white/70">2,000-5,000 sqft</div>
              <div className="w-full h-[0.1vh] bg-white/10" />
              <div className="font-body text-[1.3vw] text-white/70">6-12 months</div>
              <div className="w-full h-[0.1vh] bg-white/10" />
              <div className="font-body text-[1.3vw] text-white/70">Maintenance staff</div>
              <div className="w-full h-[0.1vh] bg-white/10" />
              <div className="font-body text-[1.3vw] text-white/70">Cost center</div>
            </div>
          </div>

          <div className="bg-white/5 rounded-[0.8vw] p-[2vh_1.5vw] border border-white/10">
            <div className="font-body text-[1.2vw] font-semibold text-white/40 uppercase tracking-wider mb-[2vh]">
              Boutique Studio
            </div>
            <div className="flex flex-col gap-[2vh]">
              <div className="font-body text-[1.3vw] text-white/70">$750K-$1.5M</div>
              <div className="w-full h-[0.1vh] bg-white/10" />
              <div className="font-body text-[1.3vw] text-white/70">1,500-3,000 sqft</div>
              <div className="w-full h-[0.1vh] bg-white/10" />
              <div className="font-body text-[1.3vw] text-white/70">6-12 months</div>
              <div className="w-full h-[0.1vh] bg-white/10" />
              <div className="font-body text-[1.3vw] text-white/70">Dedicated clinical</div>
              <div className="w-full h-[0.1vh] bg-white/10" />
              <div className="font-body text-[1.3vw] text-white/70">High overhead</div>
            </div>
          </div>

          <div className="bg-accent/20 rounded-[0.8vw] p-[2vh_1.5vw] border-[0.2vw] border-accent">
            <div className="font-body text-[1.2vw] font-bold text-accent uppercase tracking-wider mb-[2vh]">
              Recovery Pod
            </div>
            <div className="flex flex-col gap-[2vh]">
              <div className="font-body text-[1.3vw] text-white font-semibold">$45K-$49K</div>
              <div className="w-full h-[0.1vh] bg-accent/30" />
              <div className="font-body text-[1.3vw] text-white font-semibold">500-750 sqft</div>
              <div className="w-full h-[0.1vh] bg-accent/30" />
              <div className="font-body text-[1.3vw] text-white font-semibold">Under 90 days</div>
              <div className="w-full h-[0.1vh] bg-accent/30" />
              <div className="font-body text-[1.3vw] text-white font-semibold">Zero additional</div>
              <div className="w-full h-[0.1vh] bg-accent/30" />
              <div className="font-body text-[1.3vw] text-white font-semibold">Net-positive revenue</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[5vh] left-[6vw] z-10">
        <p className="font-body text-[1.3vw] text-white/40 italic max-w-[55vw]">
          Restore Hyper Wellness has 198+ locations validating demand. But they serve walk-in consumers, not residential properties. BH Labs is purpose-built for apartment buildings.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-[30vw] h-[0.4vh] bg-accent" />
    </div>
  );
}
