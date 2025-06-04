// components/TrustPilotBadge.tsx
import Image from "next/image";
import trustPilot from ".././../../public/assets/images/trust-pilot.png"

export default function TrustPilotBadge() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={trustPilot}
        alt="trust-pilot picture"
        width={250}
        height={250}
        className="mx-auto"
      />
      <h1 className="font-extrabold text-sm text-center">
        4.6 Rated Excellent based on 13,805 reviews
      </h1>
    </div>
  );
}
