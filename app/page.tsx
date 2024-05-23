import { DotBackground } from "@/components/grid";
import { ModeToggle } from "@/components/modetoggle";
import { GlobeDemo } from "@/components/useglobe";
import Image from "next/image";
import { signupVanish } from "@/components/signup-vanish";
import { Macbook } from "@/components/macbook";
import { VaultCard } from "@/components/card";
import { Waitlist } from "@/components/waitlist";
import { HoverBorderGradientDemo } from "@/components/hoverbutton";
export default function Home() {
  return 
    <div>
      {/* <div className="flex justify-end"> */}
        {/* <HoverBorderGradientDemo/> */}
      {/* </div> */}
      <DotBackground>
        <div>
        <GlobeDemo/>
        </div>
</DotBackground>
<DotBackground>
<div>
  <VaultCard/>
</div>
</DotBackground>
<DotBackground>
<Waitlist/>
</DotBackground>
</div>
  ;
}
