import { IonIcon } from "@/Components/icons";
import { COLORS } from "@/lib/constants";
import { DeckFeedbackCardProps } from "@/types/components";
import Image from "next/image";

export const DeckFeedbackVisual = ({
  feedback,
  desktopImage,
  bgColor,
}: DeckFeedbackCardProps) => {
  return (
    <div className="relative h-[275px] md:h-[604px] rounded-[32px] border border-[#E1D1FA] overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 rounded-[32px]"
        style={{
          background: `linear-gradient(180deg, ${bgColor} 0%, ${bgColor}4D 100%)`,
        }}
      />

      {/* Blur effect */}
      <div
        className="absolute w-[777px] h-[777px] -left-32 top-[90px] rounded-full blur-[210px]"
        style={{ backgroundColor: bgColor }}
      />

      {/* Desktop template */}
      <div className="absolute bottom-0 right-0 scale-[0.85] md:scale-100 origin-bottom-right">
        <Image
          src={desktopImage}
          alt="Desktop template"
          width={480}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Feedback card */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.5] md:scale-100 w-80 p-5 bg-white rounded-xl shadow-lg border border-[#E1D1FA] flex flex-col gap-5">
        {/* Card header with navigation */}
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2.5">
            <IonIcon
              name="chevron-back-outline"
              size={20}
              className="opacity-60"
            />
            <IonIcon
              name="chevron-forward-outline"
              size={20}
              className="opacity-60"
            />
          </div>
          <div className="flex gap-2.5">
            <IonIcon
              name="checkmark-circle-outline"
              size={20}
              className="opacity-60"
            />
            <IonIcon name="close-outline" size={20} className="opacity-60" />
          </div>
        </div>

        {/* Message content */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/Logo.svg"
                alt="ADIN"
                width={28}
                height={28}
              />
            </div>
            <span className="text-base font-medium">{feedback.sender}</span>
            <span className="text-base font-medium opacity-60">
              {feedback.time}
            </span>
          </div>
          <p className="text-base font-medium ml-9">{feedback.message}</p>
        </div>

        {/* Input box */}
        <div className="w-full h-10 bg-neutral-50 rounded-[10px] border border-neutral-200 flex items-center px-2.5 py-1.5">
          <div className="flex-1 flex items-center gap-3">
            <span style={{ color: COLORS.accent.purple }} className="text-base">
              |
            </span>
            <span className="text-base text-zinc-400">
              {feedback.inputPlaceholder}
            </span>
          </div>
          <IonIcon name="chevron-up-circle" size={20} className="opacity-60" />
        </div>
      </div>

      {/* Notification badge */}
      <div className="hidden md:flex absolute left-1/2 translate-x-[118px] md:translate-x-[168px] top-1/2 translate-y-[84px] md:translate-y-[120px] scale-[0.5] md:scale-100 w-7 h-7 bg-white rounded-full shadow-lg border border-orange-400 items-center justify-center">
        <span className="text-xs font-medium">
          {feedback.notificationCount}
        </span>
      </div>
    </div>
  );
};
