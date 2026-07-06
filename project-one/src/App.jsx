import { useState } from "react";
import { Minus, Plus, RotateCcw, Send } from "lucide-react";

import { Button } from "@/components/ui/button";

const App = () => {
  const [count, setCount] = useState(0);
  const [countTo, setCountTo] = useState(0);

  return (
    <main className="min-h-svh bg-[radial-gradient(circle_at_top_left,var(--accent),transparent_34%),linear-gradient(135deg,var(--background),var(--secondary))] px-4 py-10 text-foreground">
      <section className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-3xl items-center justify-center">
        <div className="w-full rounded-lg border bg-card p-6 text-card-foreground shadow-2xl shadow-slate-950/10 sm:p-8">
          <div className="space-y-2 text-left">
            <p className="text-sm font-medium text-muted-foreground">React Hook</p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              useState example
            </h1>
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              Update a number with button clicks, reset it, or type a custom
              value to see state change instantly.
            </p>
          </div>

          <div className="mt-8 rounded-md border bg-background p-6 text-center">
            <p className="text-sm font-medium text-muted-foreground">Current count</p>
            <h2 className="mt-2 text-6xl font-bold tracking-tight tabular-nums">
              {count}
            </h2>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Button onClick={() => setCount(count + 1)} className="w-full">
              <Plus />
              Increment
            </Button>
            <Button
              variant="secondary"
              onClick={() => setCount(count - 1)}
              className="w-full"
            >
              <Minus />
              Decrement
            </Button>
            <Button
              variant="destructive"
              onClick={() => setCount(0)}
              className="w-full"
            >
              <RotateCcw />
              Reset
            </Button>
          </div>

          <div className="mt-6 flex flex-col gap-3 rounded-md border bg-muted/40 p-4 sm:flex-row">
            <input
              type="number"
              value={countTo}
              onChange={(e) => setCountTo(Number(e.target.value) || 0)}
              className="h-10 flex-1 rounded-md border bg-background px-3 text-sm outline-none transition focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              aria-label="Set count value"
            />
            <Button onClick={() => {setCount(countTo), setCountTo(0)}} className="sm:w-auto">
              <Send />
              Set Count
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
