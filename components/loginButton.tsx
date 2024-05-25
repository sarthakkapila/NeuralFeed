"use client"
import { useRouter } from "next/router";


export function LoginButton() {
    const router = useRouter();

    const handleClick = () => {
      router.push('/login');
    }
    return(
<button className="inline-flex h-11 w-36 animate-shimmer items-center justify-center rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
onClick={
handleClick        }>
  Log In
</button>
    )
}