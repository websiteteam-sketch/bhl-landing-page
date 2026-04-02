import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Fitness from "@/pages/fitness";

function App() {
  return (
    <TooltipProvider>
      <Fitness />
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
