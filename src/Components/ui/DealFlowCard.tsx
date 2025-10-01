import { IonIcon } from "@/Components/icons";
import { COLORS } from "@/lib/constants";
import { DealFlowCardProps } from "@/types/components";
import Image from "next/image";

export const DealFlowCard = ({ company }: DealFlowCardProps) => {
  return (
    <div
      className="relative w-[360px] md:w-[320px] bg-white rounded-3xl overflow-hidden"
      style={{
        border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
        zIndex: 10,
      }}
    >
      {/* Card Header Image */}
      <div className="relative h-[176px] w-full">
        <Image
          src={company.image}
          alt={`${company.name} background`}
          fill
          className="object-cover"
          style={{ filter: "brightness(0.4) contrast(1.2)" }}
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Company Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(20, 43, 28, 1)" }}
            >
              <Image
                src={company.icon}
                alt={company.name}
                width={16}
                height={16}
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)",
                }}
              />
            </div>
            <h4 className="text-xl font-semibold">{company.name}</h4>
          </div>
          <IonIcon name="globe-outline" size={20} className="hidden md:block" />
        </div>

        {/* Description */}
        <p
          className="text-sm mt-2 leading-snug hidden md:block"
          style={{ color: COLORS.neutral.dark.darkGray1 }}
        >
          {company.description}
        </p>

        {/* Score Badge */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/assets/images/Logo.svg"
            alt="ADIN"
            width={24}
            height={24}
          />
          <span
            className="text-2xl font-bold"
            style={{
              fontFamily: "Barrio, cursive",
              color: COLORS.base.black,
            }}
          >
            {company.score}
          </span>
        </div>
      </div>
    </div>
  );
};
