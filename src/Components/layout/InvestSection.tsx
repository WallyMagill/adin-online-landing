// TODO: mobile better integration
interface InvestSectionProps {
  title: string;
}

export default function InvestSection({ title }: InvestSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-10">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-semibold leading-tight md:leading-[64px] text-neutral-900 text-center max-w-4xl">
          {title}
        </h2>

        {/* CTA Pill */}
        <div className="w-full md:w-auto md:inline-flex bg-white border border-purple-100 rounded-full pl-6 pr-1 py-1 flex items-center justify-between gap-4 overflow-hidden">
          {/* Gradient text */}
          <span
            className="text-base font-medium leading-tight"
            style={{
              background: "radial-gradient(circle, #A97DF5, #B19AD9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Early access for Tribute Labs Members
          </span>

          {/* Button */}
          <button className="px-6 py-3.5 bg-purple-400 rounded-full flex items-center gap-1 text-white text-base font-medium leading-tight hover:bg-purple-500 transition-colors">
            Get Started →
          </button>
        </div>

        {/* Waitlist link */}
        <p className="text-base leading-normal text-center">
          <span className="text-neutral-600">Not a Tribute Labs Member? </span>
          <span className="text-purple-400 hover:text-purple-500 cursor-pointer">
            Join the Waitlist →
          </span>
        </p>
      </div>
    </section>
  );
}
