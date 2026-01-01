import { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSec(s => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="demo-card">
      <h3>useEffect</h3>
      <p>
        Handles side effects such as timers, subscriptions, and cleanup.
      </p>

      <div className="demo-box">
        <span className="demo-label">Live Timer</span>
        <div className="timer">{sec}s</div>
      </div>
    </div>
  );
}
