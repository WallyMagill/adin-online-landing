import { COLORS } from "@/lib/constants";
import { NotificationCardProps } from "@/types/components";
import Image from "next/image";

export const NotificationCard = ({ notification }: NotificationCardProps) => {
  return (
    <div
      className="flex items-start gap-2.5 p-2.5 rounded-[20px] backdrop-blur-[40px] w-full lg:w-[380px] h-auto lg:h-[70px]"
      style={{
        backgroundColor: "rgba(245, 245, 245, 0.95)",
        boxShadow:
          "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05)",
      }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: COLORS.base.smiley }}
      >
        <Image
          src="/assets/images/Logo.svg"
          alt="ADIN"
          width={20}
          height={20}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-bold text-sm leading-tight">ADIN</div>
        <div className="font-semibold text-sm leading-tight">
          {notification.title}
        </div>
        <div className="text-xs text-gray-600 leading-tight">
          {notification.body}
        </div>
      </div>
    </div>
  );
};
