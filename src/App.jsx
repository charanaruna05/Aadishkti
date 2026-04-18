import { useState } from "react";
import Home from "./pages/Home";
import Signal from "./pages/Signal";
import Watchlist from "./pages/Watchlist";
import Profile from "./pages/Profile";
import BottomNav from "./components/BottomNav";

export default function App() {
const [tab, setTab] = useState("home");

return ( <div className="app">
{tab === "home" && <Home />}
{tab === "signal" && <Signal />}
{tab === "watch" && <Watchlist />}
{tab === "profile" && <Profile />}

```
  <BottomNav setTab={setTab} />
</div>
```

);
}
