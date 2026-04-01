export default function ProblemSlide() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-deep">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-deep via-primary/80 to-deep" />

      <div className="absolute top-[6vh] left-[6vw] z-10">
        <div className="font-body text-[1.2vw] font-semibold tracking-[0.2em] uppercase text-accent">
          The Problem
        </div>
      </div>

      <div className="absolute top-[14vh] left-[6vw] max-w-[45vw] z-10">
        <h2 className="font-display text-[3.5vw] font-bold text-white tracking-tight leading-[1.1]">
          The Amenity Arms Race Is Real
        </h2>
        <p className="font-body text-[1.5vw] text-white/60 mt-[2vh] leading-relaxed">
          Every property has a gym, a pool, and a lounge. None of them drive revenue or reduce churn.
        </p>
      </div>

      <div className="absolute top-[42vh] left-[6vw] right-[6vw] z-10 flex gap-[2vw]">
        <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-[1vw] p-[3vh_2vw] border border-white/10">
          <div className="font-display text-[2.5vw] font-bold text-accent leading-none mb-[1.5vh]">
            Table Stakes
          </div>
          <p className="font-body text-[1.4vw] text-white/80 leading-relaxed">
            Gyms and pools are expected, not differentiating. Every competing property offers the same basic amenities.
          </p>
        </div>

        <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-[1vw] p-[3vh_2vw] border border-white/10">
          <div className="font-display text-[2.5vw] font-bold text-accent leading-none mb-[1.5vh]">
            Resident Churn
          </div>
          <p className="font-body text-[1.4vw] text-white/80 leading-relaxed">
            Without premium differentiation, residents leave at lease renewal. The cost of turnover far exceeds the cost of retention.
          </p>
        </div>

        <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-[1vw] p-[3vh_2vw] border border-white/10">
          <div className="font-display text-[2.5vw] font-bold text-accent leading-none mb-[1.5vh]">
            Dead Space
          </div>
          <p className="font-body text-[1.4vw] text-white/80 leading-relaxed">
            Common areas and underused rooms generate zero revenue. Storage closets and vacant retail sit idle while expenses grow.
          </p>
        </div>
      </div>

      <div className="absolute bottom-[6vh] left-[6vw] z-10">
        <p className="font-body text-[1.4vw] text-white/40 italic max-w-[50vw]">
          Your residents are spending on wellness elsewhere. The question is whether it happens at your property -- or someone else's.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-[30vw] h-[0.4vh] bg-accent" />
    </div>
  );
}
