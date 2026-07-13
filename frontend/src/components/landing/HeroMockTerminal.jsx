import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

function HeroMockTerminal() {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>

        <span className="ml-4 text-sm text-slate-400">
          Diagnosis Report
        </span>
      </div>

      {/* Terminal Body */}
      <div className="space-y-5 p-6 text-sm">

        <div className="flex items-center gap-3 text-emerald-400">
          <CheckCircle2 size={18} />
          <span>MongoDB Connected</span>
        </div>

        <div className="flex items-center gap-3 text-red-400">
          <XCircle size={18} />
          <span>Missing JWT_SECRET</span>
        </div>

        <div className="flex items-center gap-3 text-amber-400">
          <AlertTriangle size={18} />
          <span>Port 5000 already in use</span>
        </div>

        <div className="border-t border-slate-800 pt-5">
          <p className="mb-3 font-semibold text-white">
            Recommended Fix
          </p>

          <ul className="space-y-2 text-slate-400">
            <li>→ Add JWT_SECRET to your .env file</li>
            <li>→ Kill the process using port 5000</li>
            <li>→ Restart the backend server</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default HeroMockTerminal;