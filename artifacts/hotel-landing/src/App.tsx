import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import Hotels from "@/pages/hotels";
import ThankYou from "@/pages/thank-you";

function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <TooltipProvider>
      <Switch>
        <Route path={`${base}/thank-you`} component={ThankYou} />
        <Route path={`${base}/`} component={Hotels} />
        <Route path={`${base}`} component={Hotels} />
      </Switch>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
