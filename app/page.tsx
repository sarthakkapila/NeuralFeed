
import { DotBackground } from "@/components/grid";
import { GlobeDemo } from "@/components/useglobe";
import { Cards } from "@/components/card";
import { Waitlist } from "@/components/waitlist";
import { HoverBorderGradientDemo } from "@/components/hoverbutton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className=" table-auto flex justify-end p-5 border border-blue-950 bg-black">
        <button className="inline-flex h-11 w-36 animate-shimmer items-center justify-center rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Log In
        </button>
        <div className="ml-4">
        <HoverBorderGradientDemo/>
        </div>
      </div>
      <DotBackground>
          <GlobeDemo/>
      </DotBackground>
      <DotBackground>
        <Cards/>
      </DotBackground>
      <DotBackground>
        <Waitlist/>
      </DotBackground>
    </div>
  );
}
