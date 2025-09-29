import { COLORS } from "@/lib/constants";

interface StageCardProps {
  label: string;
  title: string;
  description: string;
  accentColor: string;
}

function StageCard({ label, title, description, accentColor }: StageCardProps) {
  return (
    <div className="flex items-start gap-4">
      {/* Decorative line */}
      <div className="flex flex-col items-center">
        <div className="w-px h-11 bg-neutral-200" />
        <div className="w-px h-7" style={{ backgroundColor: accentColor }} />
        <div className="w-px h-20 bg-neutral-200" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-6">
        <p className="text-xs font-medium leading-none text-neutral-900 uppercase">
          {label}
        </p>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold leading-7 text-neutral-900">
            {title}
          </h3>
          <p className="text-base leading-normal text-neutral-900">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutSection2() {
  const stages = [
    {
      id: "pre-seed",
      label: "Pre-Seed",
      title: "Backed by Belief",
      description:
        "At pre-seed, conviction outweighs traction. ADIN provides governance capital and strategic support to founders with deep alignment and long-term thinking.",
      accentColor: COLORS.accent.purple,
    },
    {
      id: "seed",
      label: "Seed",
      title: "Culture-First Capital",
      description:
        "Seed-stage founders shape ADIN's future. Our community brings cultural context and dealflow, helping us invest in projects that align with our collective values.",
      accentColor: COLORS.accent.green,
    },
    {
      id: "a-round",
      label: "A Round",
      title: "Early, Not Late",
      description:
        "We don't chase momentum—we help create it. ADIN's A-round capital supports early traction and sharp execution, before the noise of growth-stage hype.",
      accentColor: COLORS.accent.purple,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-semibold leading-tight md:leading-[64px] text-neutral-900 mb-6">
          Only Early.
          <br />
          Always Human.
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed md:leading-loose text-neutral-900 max-w-4xl mb-12 md:mb-16">
          ADIN backs bold ideas at the beginning, where conviction matters most.
          We invest exclusively at the earliest stages, combining operator
          insight and intelligent systems to move faster, with greater focus.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stages.map((stage) => (
            <StageCard
              key={stage.id}
              label={stage.label}
              title={stage.title}
              description={stage.description}
              accentColor={stage.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
