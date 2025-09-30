import { COLORS } from "@/lib/constants";
import { ProfileCardProps } from "@/types/components";
import Image from "next/image";

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <div className="relative h-96 md:h-[460px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left accent card */}
        <div
          className="absolute left-0 top-0 w-16 md:w-20 h-full rounded-r-3xl"
          style={{ backgroundColor: COLORS.accent.green }}
        />

        {/* Center profile card */}
        <div
          className="relative w-[300px] md:w-96 h-full rounded-3xl overflow-hidden"
          style={{ backgroundColor: COLORS.accent.cream }}
        >
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-full h-full bg-orange-100 rounded-full blur-[210px] opacity-50" />
          <div className="absolute top-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-purple-100 rounded-full blur-[150px] opacity-30" />

          {/* Profile Image */}
          <div className="relative w-full h-full">
            <Image
              src={profile.image}
              alt={`${profile.name} profile`}
              fill
              className="object-cover object-center"
            />

            {/* Profile Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/20 backdrop-blur-md p-4 rounded-b-3xl">
              <div className="flex justify-center items-center">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <h4 className="text-xl md:text-2xl font-semibold leading-loose text-white">
                      {profile.name}
                    </h4>
                    {profile.verified && (
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded flex items-center justify-center">
                        <span className="text-white text-xs md:text-sm">✓</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm md:text-base leading-tight text-white">
                    {profile.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right accent card */}
        <div
          className="absolute right-0 top-0 w-[60px] md:w-[80px] h-full rounded-l-3xl"
          style={{ backgroundColor: COLORS.neutral.light.light1 }}
        />
      </div>
    </div>
  );
};
