"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function Cards() {
  return (
    <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
    <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "“Your time is limited, so don't waste it living someone else's life.” ...",
    name: "Steve Jobs",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
  },
  {
    quote: "I don't mean to be presumptuous, but I liken myself to the robber barons.",
    name: "Martin Shkreli",
  },
  {
    quote:
      "You only lose what you cling to.",
    name: "Gautam Budhha",
  },
  {
    quote:
      "“I think it is possible for ordinary people to choose to be extraordinary.” - ...",
    name: "Elon Musk",
  },
];
