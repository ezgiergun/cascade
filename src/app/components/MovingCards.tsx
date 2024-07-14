"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
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
      "Helius RPCs are powered by the highest-end hardware, ensuring your app performs at its best.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Solana's most battle-tested RPCs, trusted by thousands of crypto's best developers. We have global coverage with data centers across North America, Europe, and Asia and 99.99% uptime SLAs. ",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "With DAS API, you can access Solana's most complete, versatile, and performant NFT + token API.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  }
];
