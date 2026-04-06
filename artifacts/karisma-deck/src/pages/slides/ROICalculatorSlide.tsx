import type { MouseEvent, PointerEvent } from "react";
import { useState, useCallback, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function ROICalculatorSlide() {
  const [rooms, setRooms] = useState(300);
  const [surcharge, setSurcharge] = useState(10);
  const [occupancy, setOccupancy] = useState(75);
  const [sessionsPerDay, setSessionsPerDay] = useState(10);
  const [sessionPrice, setSessionPrice] = useState(85);
  const [operatingCost, setOperatingCost] = useState(1200);
  const [properties, setProperties] = useState(3);

  const results = useMemo(() => {
    const investmentCost = 49000;
    const adrMonthly = rooms * (occupancy / 100) * surcharge * 30;
    const alaCarteMonthly = sessionsPerDay * sessionPrice * 30;
    const grossMonthly = adrMonthly + alaCarteMonthly;
    const netMonthly = grossMonthly - operatingCost;
    const annual = netMonthly * 12;
    const paybackMonths = netMonthly > 0 ? investmentCost / netMonthly : 0;
    const portfolioAnnual = annual * properties;
    const portfolioInvestment = investmentCost * properties;
    return { adrMonthly, alaCarteMonthly, grossMonthly, netMonthly, annual, paybackMonths, portfolioAnnual, portfolioInvestment, investmentCost };
  }, [rooms, surcharge, occupancy, sessionsPerDay, sessionPrice, operatingCost, properties]);

  const stopPropagation = useCallback((e: MouseEvent | PointerEvent) => {
    e.stopPropagation();
  }, []);

  const sliders: { label: string; value: number; min: number; max: number; step: number; suffix: string; onChange: (v: number) => void }[] = [
    { label: "Rooms per Property", value: rooms, min: 50, max: 500, step: 10, suffix: "", onChange: setRooms },
    { label: "Wellness Surcharge / Night", value: surcharge, min: 2, max: 15, step: 1, suffix: "$", onChange: setSurcharge },
    { label: "Occupancy Rate", value: occupancy, min: 40, max: 95, step: 1, suffix: "%", onChange: setOccupancy },
    { label: "À La Carte Sessions / Day", value: sessionsPerDay, min: 0, max: 30, step: 1, suffix: "", onChange: setSessionsPerDay },
    { label: "Avg Session Price", value: sessionPrice, min: 30, max: 175, step: 5, suffix: "$", onChange: setSessionPrice },
    { label: "Monthly Operating Cost", value: operatingCost, min: 0, max: 3000, step: 100, suffix: "$", onChange: setOperatingCost },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cream">
      <div className="absolute top-0 right-0 w-[25vw] h-[25vh] bg-gradient-to-bl from-accent/10 to-transparent" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[3vh]">
        <div className="flex items-center gap-[1vw] mb-[1vh]">
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.2em] uppercase">
            Interactive ROI
          </p>
        </div>

        <h2 className="font-display text-primary text-[2.4vw] font-bold tracking-tight leading-[1.1] mb-[2vh]">
          Your Revenue Projection
        </h2>

        <div className="flex gap-[2.5vw] flex-1">
          {/* Left — Sliders */}
          <div className="w-[36vw] flex flex-col gap-[1.4vh]">
            {sliders.map((s) => (
              <div key={s.label}>
                <div className="flex justify-between mb-[0.3vh]">
                  <p className="font-body text-text text-[1vw] font-medium">{s.label}</p>
                  <p className="font-display text-primary text-[1.2vw] font-bold">
                    {s.suffix === "$" ? `$${s.value}` : s.suffix === "%" ? `${s.value}%` : s.value}
                  </p>
                </div>
                <input
                  type="range"
                  min={s.min}
                  max={s.max}
                  step={s.step}
                  value={s.value}
                  onChange={(e) => s.onChange(+e.target.value)}
                  onClick={stopPropagation}
                  onPointerDown={stopPropagation}
                  className="w-full h-[0.5vh] accent-accent cursor-pointer"
                />
              </div>
            ))}

            {/* Properties multiplier */}
            <div className="mt-[1vh] bg-primary rounded-[0.6vw] p-[1.2vw]">
              <div className="flex justify-between mb-[0.5vh]">
                <p className="font-body text-white text-[1.1vw] font-semibold">Deploy Across Properties</p>
                <p className="font-display text-accent text-[1.4vw] font-bold">{properties}</p>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                value={properties}
                onChange={(e) => setProperties(+e.target.value)}
                onClick={stopPropagation}
                onPointerDown={stopPropagation}
                className="w-full h-[0.5vh] accent-accent cursor-pointer"
              />
              <div className="flex justify-between mt-[0.3vh]">
                <span className="font-body text-white/50 text-[0.85vw]">Pilot (1)</span>
                <span className="font-body text-white/50 text-[0.85vw]">Full Portfolio (10)</span>
              </div>
            </div>
          </div>

          {/* Right — Results */}
          <div className="flex-1 flex flex-col gap-[1.2vh]">
            {/* Per Property */}
            <div className="bg-white rounded-[0.8vw] border border-primary/10 p-[1.5vw] flex-1 flex flex-col justify-center">
              <p className="font-body text-muted text-[0.9vw] font-semibold uppercase tracking-wider mb-[1.5vh]">
                Per Property
              </p>

              <div className="flex gap-[2vw] mb-[1.5vh]">
                <div className="flex-1">
                  <p className="font-body text-muted text-[0.85vw]">ADR Wellness Surcharge</p>
                  <p className="font-display text-primary text-[1.5vw] font-bold">{fmt(results.adrMonthly)}<span className="text-[0.9vw] text-muted font-normal">/mo</span></p>
                </div>
                <div className="flex-1">
                  <p className="font-body text-muted text-[0.85vw]">À La Carte Sessions</p>
                  <p className="font-display text-primary text-[1.5vw] font-bold">{fmt(results.alaCarteMonthly)}<span className="text-[0.9vw] text-muted font-normal">/mo</span></p>
                </div>
              </div>

              <div className="h-[0.1vh] bg-primary/10 mb-[1.5vh]" />

              <div className="flex gap-[2vw]">
                <div className="flex-1">
                  <p className="font-body text-muted text-[0.85vw]">Net Monthly Revenue</p>
                  <p className="font-display text-accent text-[2vw] font-bold">{fmt(results.netMonthly)}<span className="text-[1vw] text-muted font-normal">/mo</span></p>
                </div>
                <div className="flex-1">
                  <p className="font-body text-muted text-[0.85vw]">Annual Revenue</p>
                  <p className="font-display text-primary text-[2vw] font-bold">{fmt(results.annual)}</p>
                </div>
              </div>

              <div className="flex gap-[2vw] mt-[1.2vh]">
                <div className="flex-1">
                  <p className="font-body text-muted text-[0.85vw]">Investment</p>
                  <p className="font-display text-primary text-[1.3vw] font-bold">{fmt(results.investmentCost)}</p>
                </div>
                <div className="flex-1">
                  <p className="font-body text-muted text-[0.85vw]">Payback Period</p>
                  <p className="font-display text-accent text-[1.3vw] font-bold">
                    {results.paybackMonths < 1 ? "Under 1 Month" : results.paybackMonths < 2 ? "Under 2 Months" : `${Math.ceil(results.paybackMonths)} Months`}
                  </p>
                </div>
              </div>
            </div>

            {/* Portfolio Total */}
            <div className="bg-primary rounded-[0.8vw] p-[1.5vw]">
              <p className="font-body text-accent text-[0.9vw] font-semibold uppercase tracking-wider mb-[1vh]">
                Portfolio Total ({properties} {properties === 1 ? "Property" : "Properties"})
              </p>
              <div className="flex gap-[2vw] items-end">
                <div className="flex-1">
                  <p className="font-body text-white/60 text-[0.85vw]">Annual Portfolio Revenue</p>
                  <p className="font-display text-white text-[2.5vw] font-bold">{fmt(results.portfolioAnnual)}</p>
                </div>
                <div className="flex-1">
                  <p className="font-body text-white/60 text-[0.85vw]">Total Investment</p>
                  <p className="font-display text-accent text-[1.8vw] font-bold">{fmt(results.portfolioInvestment)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
