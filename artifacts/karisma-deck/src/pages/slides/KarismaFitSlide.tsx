export default function KarismaFitSlide() {
  const properties = [
    { name: "Nickelodeon Punta Cana", type: "Family All-Inclusive", location: "Dominican Republic", config: "Recovery Center", size: "1,500+ sqft", opportunity: "Family wellness + post-activity recovery" },
    { name: "Nickelodeon Riviera Maya", type: "Family All-Inclusive", location: "Mexico", config: "Recovery Center", size: "1,500+ sqft", opportunity: "Same proven model, second market" },
    { name: "Margaritaville Riviera Maya", type: "Adults-Only", location: "Mexico", config: "Recovery Lounge", size: "750–1,500 sqft", opportunity: "Premium wellness upsell for couples" },
    { name: "Margaritaville Riviera Cancún", type: "All-Ages", location: "Mexico", config: "Recovery Lounge", size: "750–1,500 sqft", opportunity: "High volume, broad guest appeal" },
    { name: "Azul Beach Negril", type: "All-Inclusive", location: "Jamaica", config: "Recovery Lounge", size: "750–1,500 sqft", opportunity: "Wellness + beach recovery" },
    { name: "Azul Beach Montenegro", type: "All-Inclusive", location: "Europe", config: "Recovery Pod", size: "500–750 sqft", opportunity: "European wellness positioning" },
    { name: "Bor Hotel Zlatibor", type: "Mountain Boutique", location: "Serbia", config: "Recovery Pod", size: "500–750 sqft", opportunity: "Post-activity mountain recovery" },
    { name: "Margaritaville Roatán", type: "New Build", location: "Honduras", config: "Recovery Center", size: "1,500+ sqft", opportunity: "Design in from ground up" },
  ];

  const configColors: Record<string, string> = {
    "Recovery Center": "bg-accent text-primary",
    "Recovery Lounge": "bg-primary/80 text-white",
    "Recovery Pod": "bg-primary/60 text-white",
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cream">
      <div className="absolute top-0 left-0 w-full h-[0.5vh] bg-gradient-to-r from-accent via-primary to-accent" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[4vh]">
        <div className="flex items-center gap-[1vw] mb-[1.5vh]">
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.2em] uppercase">
            Portfolio Mapping
          </p>
        </div>

        <h2 className="font-display text-primary text-[2.8vw] font-bold tracking-tight leading-[1.1] mb-[1vh]">
          Recovery Pod × Every Karisma Property
        </h2>
        <p className="font-body text-muted text-[1.3vw] mb-[2.5vh]">
          One model, tailored to each property's profile. Pilot 1–2 → prove demand → roll across portfolio.
        </p>

        <div className="bg-white rounded-[0.8vw] border border-primary/10 overflow-hidden flex-1">
          {/* Header */}
          <div className="grid grid-cols-12 bg-primary/5 border-b border-primary/10">
            <div className="col-span-3 p-[1vw]">
              <p className="font-body text-muted text-[0.95vw] font-semibold uppercase tracking-wider">Property</p>
            </div>
            <div className="col-span-2 p-[1vw]">
              <p className="font-body text-muted text-[0.95vw] font-semibold uppercase tracking-wider">Location</p>
            </div>
            <div className="col-span-2 p-[1vw]">
              <p className="font-body text-muted text-[0.95vw] font-semibold uppercase tracking-wider">Configuration</p>
            </div>
            <div className="col-span-2 p-[1vw]">
              <p className="font-body text-muted text-[0.95vw] font-semibold uppercase tracking-wider">Footprint</p>
            </div>
            <div className="col-span-3 p-[1vw]">
              <p className="font-body text-muted text-[0.95vw] font-semibold uppercase tracking-wider">Opportunity</p>
            </div>
          </div>

          {/* Rows */}
          {properties.map((p, i) => (
            <div
              key={p.name}
              className={`grid grid-cols-12 ${i < properties.length - 1 ? "border-b border-primary/5" : ""} ${
                p.name === "Margaritaville Roatán" ? "bg-accent/10" : ""
              }`}
            >
              <div className="col-span-3 p-[0.8vw] flex flex-col">
                <p className="font-body text-text text-[1.05vw] font-semibold">{p.name}</p>
                <p className="font-body text-muted text-[0.85vw]">{p.type}</p>
              </div>
              <div className="col-span-2 p-[0.8vw] flex items-center">
                <p className="font-body text-text text-[1vw]">{p.location}</p>
              </div>
              <div className="col-span-2 p-[0.8vw] flex items-center">
                <span className={`px-[0.6vw] py-[0.3vh] rounded-full text-[0.9vw] font-semibold ${configColors[p.config]}`}>
                  {p.config}
                </span>
              </div>
              <div className="col-span-2 p-[0.8vw] flex items-center">
                <p className="font-body text-text text-[1vw]">{p.size}</p>
              </div>
              <div className="col-span-3 p-[0.8vw] flex items-center">
                <p className="font-body text-muted text-[0.95vw]">{p.opportunity}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[2vh] flex items-center gap-[2vw]">
          <div className="flex items-center gap-[0.5vw]">
            <div className="w-[1vw] h-[1vw] rounded-full bg-accent" />
            <p className="font-body text-text text-[1vw]">Recovery Center (1,500+ sqft)</p>
          </div>
          <div className="flex items-center gap-[0.5vw]">
            <div className="w-[1vw] h-[1vw] rounded-full bg-primary/80" />
            <p className="font-body text-text text-[1vw]">Recovery Lounge (750–1,500 sqft)</p>
          </div>
          <div className="flex items-center gap-[0.5vw]">
            <div className="w-[1vw] h-[1vw] rounded-full bg-primary/60" />
            <p className="font-body text-text text-[1vw]">Recovery Pod (500–750 sqft)</p>
          </div>
          <div className="ml-auto">
            <p className="font-body text-accent text-[1.1vw] font-bold italic">
              8 properties · 3 configurations · 1 partner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
