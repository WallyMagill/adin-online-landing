import { IonIcon } from "@/Components/icons";
import { InvestorCardProps } from "@/types/components";
import Image from "next/image";

export const InvestorOfferCard = ({ investor }: InvestorCardProps) => {
  return (
    <div className="p-8 bg-white rounded-3xl flex flex-col gap-4 border border-purple-100">
      {/* Profile */}
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: investor.bgColor }}
        >
          <Image
            src={investor.image}
            alt={investor.name}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-medium text-neutral-900">
            {investor.name}
          </span>
          <span className="text-sm text-neutral-600">{investor.title}</span>
        </div>
      </div>

      {/* Checks */}
      <div className="flex flex-col gap-2">
        {investor.checks.map((check, index) => (
          <div key={index} className="flex items-center gap-2">
            <IonIcon
              name="checkmark-circle"
              size={16}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(68%) sepia(51%) saturate(432%) hue-rotate(88deg) brightness(91%) contrast(85%)",
              }}
            />
            <span className="text-base">{check}</span>
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 pt-2">
        <div className="flex-1 px-6 py-4 bg-neutral-50 rounded-[80px] border border-neutral-200 text-base font-medium text-center">
          Ignore
        </div>
        <div className="flex-1 px-6 py-4 bg-black rounded-[80px] text-white text-base font-medium text-center">
          View Offer
        </div>
      </div>
    </div>
  );
};
