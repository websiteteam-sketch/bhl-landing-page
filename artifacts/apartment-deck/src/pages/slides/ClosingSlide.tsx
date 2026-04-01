export default function ClosingSlide() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-deep">
      <div className="absolute inset-0 bg-gradient-to-br from-deep via-primary/40 to-deep" />
      <div className="absolute top-[15vh] right-[10vw] w-[25vw] h-[25vw] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-[10vh] left-[5vw] w-[20vw] h-[20vw] rounded-full bg-accent/5 blur-3xl" />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-[10vw]">
        <div className="font-body text-[1.4vw] font-semibold tracking-[0.3em] uppercase text-accent mb-[4vh]">
          BH Labs
        </div>

        <h2 className="font-display text-[4.5vw] font-bold text-white tracking-tight text-center leading-[1.1] mb-[3vh]">
          Transform Unused Space Into Your Most Profitable Amenity
        </h2>

        <p className="font-body text-[1.6vw] text-white/60 text-center max-w-[50vw] leading-relaxed mb-[5vh]">
          Complimentary property assessment. Custom pod design. Revenue-generating in under 90 days.
        </p>

        <div className="flex gap-[4vw] mb-[5vh]">
          <div className="text-center">
            <div className="font-display text-[2.5vw] font-bold text-accent">$45K</div>
            <div className="font-body text-[1.2vw] text-white/50">Investment</div>
          </div>
          <div className="w-[0.1vw] bg-white/10" />
          <div className="text-center">
            <div className="font-display text-[2.5vw] font-bold text-accent">90 Days</div>
            <div className="font-body text-[1.2vw] text-white/50">To Launch</div>
          </div>
          <div className="w-[0.1vw] bg-white/10" />
          <div className="text-center">
            <div className="font-display text-[2.5vw] font-bold text-accent">$0</div>
            <div className="font-body text-[1.2vw] text-white/50">Additional Staff</div>
          </div>
        </div>

        <div className="font-body text-[1.5vw] text-white/70">
          sales@thebiohacklab.com
        </div>
        <div className="font-body text-[1.3vw] text-white/40 mt-[1vh]">
          www.thebiohacklab.com
        </div>
      </div>

      <div className="absolute bottom-[4vh] left-0 right-0 text-center z-10">
        <div className="font-body text-[1vw] text-white/20">
          2026 BH Labs. All rights reserved.
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40vw] h-[0.4vh] bg-accent" />
    </div>
  );
}
