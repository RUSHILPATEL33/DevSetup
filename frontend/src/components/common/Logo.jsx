import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="rounded-xl bg-blue-600 p-2">
        <ShieldCheck className="h-6 w-6 text-white" />
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold text-white">
          DevSetup
        </span>

        <span className="text-sm text-blue-400">
          Doctor
        </span>
      </div>
    </Link>
  );
}

export default Logo;