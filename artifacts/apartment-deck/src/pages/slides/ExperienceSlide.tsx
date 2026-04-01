export default function ExperienceSlide() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg">
      <div className="absolute top-0 left-0 w-full h-[0.3vh] bg-gradient-to-r from-accent via-primary to-accent" />
      <div className="absolute bottom-0 right-0 w-[30vw] h-[40vh] bg-gradient-to-tl from-light-accent/20 to-transparent rounded-tl-full" />

      <div className="absolute top-[6vh] left-[6vw]">
        <div className="font-body text-[1.2vw] font-semibold tracking-[0.2em] uppercase text-accent">
          Resident Experience
        </div>
      </div>

      <div className="absolute top-[14vh] left-[6vw] max-w-[50vw]">
        <h2 className="font-display text-[3.5vw] font-bold text-text tracking-tight leading-[1.1]">
          Premium Wellness, Included in Rent
        </h2>
        <p className="font-body text-[1.5vw] text-muted mt-[2vh] leading-relaxed max-w-[44vw]">
          A monthly wellness fee added to rent gives every resident unlimited access to clinical-grade recovery technology.
        </p>
      </div>

      <div className="absolute top-[40vh] left-[6vw] right-[6vw] flex gap-[3vw]">
        <div className="flex-1">
          <div className="bg-white rounded-[1vw] p-[3vh_2vw] border border-primary/10 h-full">
            <div className="font-body text-[1.2vw] font-semibold tracking-[0.15em] uppercase text-accent mb-[1.5vh]">
              The Model
            </div>
            <div className="font-display text-[2.2vw] font-bold text-primary mb-[1.5vh]">
              Monthly Wellness Fee
            </div>
            <p className="font-body text-[1.4vw] text-muted leading-relaxed mb-[2vh]">
              $25-$40/unit added to monthly rent. Residents get unlimited access to the Recovery Pod and all 7 modalities.
            </p>
            <div className="flex gap-[1.5vw]">
              <div>
                <div className="font-display text-[2vw] font-bold text-text">$30</div>
                <div className="font-body text-[1.2vw] text-muted">Avg. Monthly Fee</div>
              </div>
              <div className="w-[0.15vw] bg-primary/10" />
              <div>
                <div className="font-display text-[2vw] font-bold text-text">95%</div>
                <div className="font-body text-[1.2vw] text-muted">Participation Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-primary rounded-[1vw] p-[3vh_2vw] h-full">
            <div className="font-body text-[1.2vw] font-semibold tracking-[0.15em] uppercase text-accent mb-[1.5vh]">
              Session Options
            </div>
            <div className="font-display text-[2.2vw] font-bold text-white mb-[2vh]">
              7 Modalities Available
            </div>
            <div className="flex flex-col gap-[1.2vh]">
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw] text-white/90">HBOT Chamber</span>
                <span className="font-body text-[1.2vw] text-accent">60 min</span>
              </div>
              <div className="w-full h-[0.1vh] bg-white/10" />
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw] text-white/90">Infrared Sauna</span>
                <span className="font-body text-[1.2vw] text-accent">20 min</span>
              </div>
              <div className="w-full h-[0.1vh] bg-white/10" />
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw] text-white/90">Red Light Therapy</span>
                <span className="font-body text-[1.2vw] text-accent">15 min</span>
              </div>
              <div className="w-full h-[0.1vh] bg-white/10" />
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw] text-white/90">Compression + PEMF + More</span>
                <span className="font-body text-[1.2vw] text-accent">10-20 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[5vh] left-[6vw] z-10">
        <p className="font-body text-[1.3vw] text-muted italic">
          Equinox proof point: 900 sessions/month, 85 NPS, 8x value-to-price ratio
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-[25vw] h-[0.4vh] bg-accent" />
    </div>
  );
}
