import { AgentCardProps } from "@/types/components";
import Image from "next/image";

export const AgentCard = ({ agent, showDivider = false }: AgentCardProps) => {
  return (
    <>
      <div className="flex items-center gap-4 py-4">
        <div className="w-12 h-12 flex-shrink-0">
          <Image
            src={agent.icon}
            alt={`${agent.name} icon`}
            width={48}
            height={48}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-base font-bold leading-tight text-neutral-900">
            {agent.name}
          </h4>
          <p className="text-base leading-tight text-neutral-600">
            {agent.description}
          </p>
        </div>
      </div>
      {showDivider && <div className="border-t border-purple-100" />}
    </>
  );
};
