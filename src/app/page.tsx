import Image from "next/image";
import { FeaturesSectionDemo } from "./components/FeaturesSection";
import { TabsDemo } from "./components/TabsDemo";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { InfiniteMovingCardsDemo } from "./components/MovingCards";

export default function Home() {
  return (
    <>
    <InfiniteMovingCardsDemo/>

    <TabsDemo/>
    </>
  );
}
