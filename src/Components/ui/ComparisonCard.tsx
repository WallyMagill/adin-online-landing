import { IonIcon } from "@/Components/icons";
import { COLORS } from "@/lib/constants";
import { ComparisonCardProps } from "@/types/components";

// Helper function for icon color filters
function getFilterForColor(color: string) {
  const filterMap: Record<string, string> = {
    [COLORS.accent.yellow]:
      "invert(78%) sepia(82%) saturate(548%) hue-rotate(359deg) brightness(102%) contrast(101%)",
    [COLORS.accent.red]:
      "invert(38%) sepia(80%) saturate(2476%) hue-rotate(337deg) brightness(96%) contrast(91%)",
    [COLORS.accent.purple]:
      "invert(47%) sepia(95%) saturate(1775%) hue-rotate(235deg) brightness(92%) contrast(88%)",
    [COLORS.accent.green]:
      "invert(65%) sepia(39%) saturate(634%) hue-rotate(97deg) brightness(92%) contrast(86%)",
  };
  return filterMap[color];
}

export const ComparisonCard = ({
  badge,
  earnings,
  earningsLabel,
  features,
  warning,
  badges,
  isAdin = false,
}: ComparisonCardProps) => {
  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div
      className="relative rounded-[32px] border backdrop-blur-sm overflow-hidden"
      style={{ borderColor: COLORS.neutral.dark.lightGray1 }}
    >
      {/* Gradient for ADIN card */}
      {isAdin && (
        <div
          className="absolute inset-x-0 top-0 h-48 pointer-events-none"
          style={{
            background: `linear-gradient(to right, ${COLORS.accent.green}, ${COLORS.accent.yellow}, ${COLORS.accent.orange}, ${COLORS.accent.red}, ${COLORS.accent.purple}, ${COLORS.accent.blue})`,
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)",
          }}
        />
      )}

      {/* Content */}
      <div
        className={`relative z-10 p-6 md:p-10 flex flex-col gap-6 md:gap-10 ${
          isAdin ? "bg-white/70" : "bg-white/80"
        } h-full`}
      >
        {/* Badge */}
        <div
          className={`${
            isAdin ? "bg-white" : "bg-neutral-50"
          } rounded-[20px] px-3 py-2 inline-block w-fit`}
        >
          <span className="text-base font-medium text-neutral-600">
            {badge}
          </span>
        </div>

        {/* Earnings */}
        <div className="flex flex-col">
          <div className="text-4xl md:text-6xl font-semibold leading-tight md:leading-[64px]">
            {formatCurrency(earnings)}
          </div>
          <div className="text-lg md:text-xl leading-normal md:leading-loose">
            {earningsLabel}
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <IonIcon
                name={feature.icon}
                size={16}
                style={
                  feature.iconColor
                    ? { filter: getFilterForColor(feature.iconColor) }
                    : undefined
                }
              />
              <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                <span className="text-sm font-medium">{feature.label}</span>
                <span className="text-sm text-neutral-600">
                  {feature.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Warning or Badges */}
        {warning && (
          <div
            className="px-2 py-1 rounded-lg border flex items-center gap-1 w-fit"
            style={{
              backgroundColor: `${warning.color}1A`,
              borderColor: warning.color,
            }}
          >
            <IonIcon
              name={warning.icon}
              size={16}
              style={{
                filter:
                  "invert(38%) sepia(80%) saturate(2476%) hue-rotate(337deg) brightness(96%) contrast(91%)",
              }}
            />
            <span className="text-sm">{warning.text}</span>
          </div>
        )}

        {badges && (
          <div className="flex gap-2 md:gap-4 flex-wrap">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="pl-1.5 pr-2 py-1 rounded-lg border flex items-center gap-1"
                style={{
                  backgroundColor: `${COLORS.accent.green}1A`,
                  borderColor: COLORS.accent.green,
                }}
              >
                <IonIcon
                  name={badge.icon}
                  size={16}
                  style={{
                    filter:
                      "invert(65%) sepia(39%) saturate(634%) hue-rotate(97deg) brightness(92%) contrast(86%)",
                  }}
                />
                <span className="text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
