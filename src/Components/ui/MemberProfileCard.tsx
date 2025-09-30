import { MemberProfile } from "@/types/components";
import Image from "next/image";

export const MemberProfileCard = ({
  name,
  location,
  image,
  bgColor,
}: MemberProfile) => {
  return (
    <div
      className="w-80 h-60 rounded-3xl overflow-hidden relative flex-shrink-0"
      style={{ backgroundColor: bgColor }}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-[6px] rounded-b-3xl">
        <h4 className="text-xl font-semibold text-white">{name}</h4>
        <p className="text-xs text-white">{location}</p>
      </div>
    </div>
  );
};
