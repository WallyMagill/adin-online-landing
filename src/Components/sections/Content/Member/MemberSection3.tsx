import { COLORS } from "@/lib/constants";
import Image from "next/image";

export default function MemberSection3() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-start gap-44 w-full">
          {/* LEFT COLUMN - Steps Section */}
          <div className="flex flex-col gap-10">
            {/* Header */}
            <div className="flex flex-col gap-4 max-w-[453px]">
              <h2 className="text-6xl font-semibold leading-[64px]">
                How to earn your 10% carry.
              </h2>
              <p className="text-xl leading-loose">
                &quot;Carry&quot; is a boomer term for &quot;cash back&quot;.
              </p>
            </div>

            {/* Steps Container */}
            <div className="flex flex-col items-start">
              {/* Connector line before Step 1 */}
              <div className="w-px h-6 border-l border-neutral-200" />

              {/* Step 1 */}
              <div className="flex items-start gap-4">
                {/* Left side - Line indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-11 border-l border-neutral-200" />
                  <div
                    className="w-px h-7 border-l-2"
                    style={{ borderColor: COLORS.accent.purple }}
                  />
                  <div className="w-px h-20 border-l border-neutral-200" />
                </div>

                {/* Right side - Content */}
                <div className="w-[453px] flex flex-col gap-6">
                  <span className="text-base font-medium">Step 1</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold leading-7">
                      Spot something great.
                    </h3>
                    <p className="text-base leading-normal">
                      You meet a founder or discover a startup you believe in.
                      You don&apos;t need to be an expert or just have a strong
                      conviction in the team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector line between Step 1 and Step 2 */}
              <div className="w-px h-12 border-l border-neutral-200" />

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                {/* Left side - Line indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-11 border-l border-neutral-200" />
                  <div
                    className="w-px h-7 border-l-2"
                    style={{ borderColor: COLORS.accent.purple }}
                  />
                  <div className="w-px h-14 border-l border-neutral-200" />
                </div>

                {/* Right side - Content */}
                <div className="w-[453px] flex flex-col gap-6">
                  <span className="text-base font-medium">Step 2</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold leading-7">
                      Share the deal.
                    </h3>
                    <p className="text-base leading-normal">
                      Upload the link or deck. We&apos;ll ask a few quick
                      questions (and confirm you can intro the founder if
                      needed).
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector line between Step 2 and Step 3 */}
              <div className="w-px h-12 border-l border-neutral-200" />

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                {/* Left side - Line indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-11 border-l border-neutral-200" />
                  <div
                    className="w-px h-7 border-l-2"
                    style={{ borderColor: COLORS.accent.purple }}
                  />
                  <div className="w-px h-20 border-l border-neutral-200" />
                </div>

                {/* Right side - Content */}
                <div className="w-[453px] flex flex-col gap-6">
                  <span className="text-base font-medium">Step 3</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold leading-7">
                      ADIN gets to work.
                    </h3>
                    <p className="text-base leading-normal">
                      Our AI dives in—analyzing the market, product, team, and
                      traction. You&apos;ll see how your deal stacks up in real
                      time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector line between Step 3 and Step 4 */}
              <div className="w-px h-12 border-l border-neutral-200" />

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                {/* Left side - Line indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-11 border-l border-neutral-200" />
                  <div
                    className="w-px h-7 border-l-2"
                    style={{ borderColor: COLORS.accent.purple }}
                  />
                  <div className="w-px h-20 border-l border-neutral-200" />
                </div>

                {/* Right side - Content */}
                <div className="w-[453px] flex flex-col gap-6">
                  <span className="text-base font-medium">Step 4</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold leading-7">
                      Investors vote.
                    </h3>
                    <p className="text-base leading-normal">
                      Over the next few days, ADIN members review the deal and
                      cast a simple yes or no vote. It keeps the process
                      transparent and democratic.
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector line between Step 4 and Step 5 */}
              <div className="w-px h-12 border-l border-neutral-200" />

              {/* Step 5 */}
              <div className="flex items-start gap-4">
                {/* Left side - Line indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-11 border-l border-neutral-200" />
                  <div
                    className="w-px h-7 border-l-2"
                    style={{ borderColor: COLORS.accent.purple }}
                  />
                  <div className="w-px h-20 border-l border-neutral-200" />
                </div>

                {/* Right side - Content */}
                <div className="w-[453px] flex flex-col gap-6">
                  <span className="text-base font-medium">Step 5</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold leading-7">
                      ADIN connects.
                    </h3>
                    <p className="text-base leading-normal">
                      If the deal shows strong signals, the ADIN team reaches
                      out to the founder and kicks off formal diligence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector line between Step 5 and Step 6 */}
              <div className="w-px h-12 border-l border-neutral-200" />

              {/* Step 6 */}
              <div className="flex items-start gap-4">
                {/* Left side - Line indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-11 border-l border-neutral-200" />
                  <div
                    className="w-px h-7 border-l-2"
                    style={{ borderColor: COLORS.accent.purple }}
                  />
                  <div className="w-px h-20 border-l border-neutral-200" />
                </div>

                {/* Right side - Content */}
                <div className="w-[453px] flex flex-col gap-6">
                  <span className="text-base font-medium">Step 6</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold leading-7">
                      Times goes by...
                    </h3>
                    <p className="text-base leading-normal">
                      If the deal you submitted has an exit event (like an
                      acquisition or IPO), you get 10% of the return. Payouts
                      are made in USDC or by mailed check.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Logo */}
          <div
            className="w-[480px] h-[480px] relative rounded-[32px] overflow-hidden flex items-center justify-center ml-auto"
            style={{ backgroundColor: "#FFD800" }}
          >
            <Image
              src="/assets/images/Logo.svg"
              alt="ADIN Logo"
              width={360}
              height={360}
              className="w-[360px] h-[360px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
