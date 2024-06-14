import { DotBackground } from "@/components/grid";
import { GlobeDemo } from "@/components/useglobe";
import { Cards } from "@/components/card";
import { Waitlist } from "@/components/waitlist";
import { SignupButton } from "@/components/SignupButton";
import { LoginButton } from "@/components/LoginButton";

export default function Home() {
  return (
    <div>
      <div className=" table-auto flex justify-end p-5 border border-blue-950 bg-black">
        <LoginButton/>
        <div>
        <SignupButton/>
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
