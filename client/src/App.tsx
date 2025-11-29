import { Switch, Route, Redirect } from "wouter";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import PriceList from "@/pages/PriceList";
import Maintenance from "@/pages/Maintenance";
import Member from "@/pages/Member"; 
import Scanner from "@/pages/Scanner";
import FloatingWA from "./components/FloatingWA";

// Saklar Rahasia (Environment Variable)
const APP_MODE = import.meta.env.VITE_APP_MODE || "web";

function Router() {
  // --- SKENARIO 1: JIKA MODENYA "SYSTEM" (KHUSUS MEMBER & ADMIN) ---
  if (APP_MODE === "system") {
    return (
      <Switch>
        {/* Kalau dibuka halaman depan, langsung lempar ke Member */}
        <Route path="/">
          <Redirect to="/member" />
        </Route>
        
        <Route path="/member" component={Member} />
        <Route path="/admin-scan" component={Scanner} />
        
        {/* Halaman lain tidak bisa diakses */}
        <Route component={NotFound} />
      </Switch>
    );
  }

  // --- SKENARIO 2: JIKA MODENYA "WEB" (WEBSITE UTAMA) ---
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/price-list" component={PriceList} />
      <Route path="/shop" component={Maintenance} />
      {/* Di website utama, menu member tetap bisa diakses opsional */}
      <Route path="/member" component={Member} /> 
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />

      {APP_MODE === "web" && <FloatingWA />}
    </QueryClientProvider>
  );
}

export default App;

// Update untuk Vercel