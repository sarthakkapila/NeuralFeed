import { ModeToggle } from "@/components/modetoggle";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-end">
<ModeToggle/>
</div>
<div>
  <h1 className="text-4xl text-primary">Join our network!</h1>
    <p className="text-lg text-secondary">Imagine run models on multiple inferences for free !
    you dont understand right!? yes even i don't! 
    </p>
    <h1 className="text-4xl text-primary">We are LLM on a blockchain</h1>
</div>
</>
  );
}
