import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { ReactLenis } from "@studio-freight/react-lenis";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* ReactLenis setup for smooth scrolling as requested */}
      <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ReactLenis>
    </QueryClientProvider>
  );
}

export default App;
