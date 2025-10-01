import { InvestorAgentCardProps } from "@/types/components";
import Image from "next/image";

export const InvestorAgentCard = ({ agent }: InvestorAgentCardProps) => {
  return (
    <div className="flex items-center gap-3 bg-white rounded-2xl p-4 px-6 max-w-xs w-full">
      <div
        className="w-8 h-8 flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: agent.color }}
      >
        <Image src={agent.icon} alt={agent.name} width={20} height={20} />
      </div>
      <span className="text-sm md:text-xl font-semibold text-black">
        {agent.name}
      </span>
    </div>
  );
};
