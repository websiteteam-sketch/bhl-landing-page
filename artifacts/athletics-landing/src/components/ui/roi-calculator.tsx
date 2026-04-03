import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, Clock, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function ROICalculator() {
  const [athletes, setAthletes] = useState(300);
  const [outsourcedCost, setOutsourcedCost] = useState(100000);
  const [podCost] = useState(45000);
  const [showMethodology, setShowMethodology] = useState(false);

  const annualSavings = outsourcedCost - (podCost * 0.1);
  const savingsPercent = Math.round((1 - (podCost / outsourcedCost)) * 100);
  const paybackMonths = Math.max(1, Math.round((podCost / outsourcedCost) * 12));
  const costPerAthlete = Math.round(podCost / athletes);

  return (
    <section className="py-12 md:py-24 bg-card" id="roi">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            Recovery Savings Estimator
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">How much could your program save by bringing recovery in-house?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Adjust the sliders to estimate projected savings from replacing outsourced recovery with an on-site Recovery Pod. Results are illustrative and update instantly.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="bg-background rounded-2xl p-8 border border-border shadow-sm"
          >
            <h3 className="text-lg font-medium text-foreground mb-6">Your Program</h3>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-foreground">Number of Athletes</label>
                  <span className="text-sm font-bold text-emerald-600">{athletes}</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={800}
                  step={10}
                  value={athletes}
                  onChange={(e) => setAthletes(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>50</span>
                  <span>800</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Total athletes across all sports programs served by recovery</p>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-foreground">Current Annual Recovery Spend</label>
                  <span className="text-sm font-bold text-emerald-600">${outsourcedCost.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={25000}
                  max={500000}
                  step={5000}
                  value={outsourcedCost}
                  onChange={(e) => setOutsourcedCost(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$25K</span>
                  <span>$500K</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Include outsourced cryo, off-campus recovery centers, vendor contracts, and fragmented treatment costs</p>
              </div>

              <div className="bg-secondary/50 rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">One-Time Pod Investment</span>
                  <span className="text-lg font-bold text-foreground">~${podCost.toLocaleString()}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Fixed assumption — includes all 7 modalities, design, installation, and training</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="bg-emerald-600 rounded-2xl p-8 text-white shadow-xl"
          >
            <h3 className="text-lg font-medium text-emerald-100 mb-6">Projected Savings</h3>

            <div className="space-y-6">
              <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-5 h-5 text-emerald-200" />
                  <span className="text-sm text-emerald-100">Estimated First-Year Net Savings</span>
                </div>
                <div className="text-4xl font-bold text-white">${Math.max(0, annualSavings).toLocaleString()}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-emerald-200" />
                    <span className="text-xs text-emerald-100">Estimated Cost Reduction</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{savingsPercent}%</div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-emerald-200" />
                    <span className="text-xs text-emerald-100">Illustrative Payback</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{paybackMonths} mo</div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="w-4 h-4 text-emerald-200" />
                  <span className="text-xs text-emerald-100">One-Time Cost Per Athlete</span>
                </div>
                <div className="text-2xl font-bold text-white">${costPerAthlete}</div>
                <p className="text-xs text-emerald-200 mt-1">One-time investment per athlete served</p>
              </div>

              <p className="text-xs text-emerald-200/80 italic leading-relaxed">Illustrative estimate only. Actual savings depend on your current vendor usage, program size, utilization, and internal recovery workflow.</p>

              <Button size="lg" className="w-full h-14 text-base font-bold bg-white text-emerald-700 hover:bg-emerald-50 shadow-lg" asChild>
                <a href="#contact">
                  Request a Custom Proposal
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => setShowMethodology(!showMethodology)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showMethodology ? "rotate-180" : ""}`} />
            How savings are calculated
          </button>
          {showMethodology && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-3 bg-background border border-border rounded-xl p-5 text-sm text-muted-foreground space-y-2"
            >
              <p><strong className="text-foreground">First-Year Net Savings</strong> = Current annual recovery spend − annual pod operating cost (estimated at 10% of pod investment)</p>
              <p><strong className="text-foreground">Cost Reduction %</strong> = Percentage reduction from outsourced spend to pod investment</p>
              <p><strong className="text-foreground">Payback Period</strong> = Pod investment ÷ current annual recovery spend (months)</p>
              <p><strong className="text-foreground">Cost Per Athlete</strong> = One-time pod investment ÷ number of athletes served</p>
              <p className="text-xs italic mt-3">Estimate based on your current annual recovery spend, athlete count, and a one-time pod investment of approximately $45,000. Final savings depend on current vendor usage, program size, and recovery workflow.</p>
            </motion.div>
          )}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center bg-background rounded-2xl p-8 border border-border">
          <h3 className="text-xl md:text-2xl font-serif text-foreground mb-3">Want to see how this could fit your training room and budget?</h3>
          <p className="text-muted-foreground mb-6">Request a custom proposal to review facility fit, sports coverage, and projected savings.</p>
          <Button size="lg" className="h-14 px-8 text-base" asChild>
            <a href="#contact">
              Request a Custom Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
