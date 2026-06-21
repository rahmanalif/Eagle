import Image from "next/image";

import { images, whyEagleLikesFeatures } from "@/constants";

const bulletIconClasses = {
  pink: "bg-[rgba(173,70,255,0.10)]",
  green: "bg-[rgba(173,70,255,0.10)]",
  purple: "bg-[rgba(173,70,255,0.10)]",
} as const;

type StatBubble = {
  value: string;
  label: string;
  gradient: string;
  shadow: string;
  border: string;
  labelColor: string;
  angle: number;
  radius: number;
};

const statBubbles: StatBubble[] = [
  { value: "10M+", label: "Followers", gradient: "linear-gradient(135deg,#9810FA,#8200DB)", shadow: "0 8px 10px -6px rgba(0,0,0,0.1),0 20px 25px -5px rgba(0,0,0,0.1)", border: "rgba(194,122,255,0.3)", labelColor: "#E9D4FF", angle: 270, radius: 190 },
  { value: "95%", label: "Success", gradient: "linear-gradient(135deg,#E60076,#C6005C)", shadow: "0 8px 10px -6px rgba(0,0,0,0.1),0 20px 25px -5px rgba(0,0,0,0.1)", border: "rgba(251,100,182,0.3)", labelColor: "#FCCEE8", angle: 315, radius: 190 },
  { value: "100%", label: "Organic", gradient: "linear-gradient(135deg,#7F22FE,#7008E7)", shadow: "0 8px 10px -6px rgba(0,0,0,0.1),0 20px 25px -5px rgba(0,0,0,0.1)", border: "rgba(166,132,255,0.3)", labelColor: "#DDD6FF", angle: 0, radius: 190 },
  { value: "24/7", label: "Support", gradient: "linear-gradient(135deg,#0092B8,#007595)", shadow: "0 8px 10px -6px rgba(0,0,0,0.1),0 20px 25px -5px rgba(0,0,0,0.1)", border: "rgba(0,211,243,0.3)", labelColor: "#A2F4FD", angle: 45, radius: 190 },
  { value: "500K+", label: "Accounts", gradient: "linear-gradient(135deg,#155DFC,#1447E6)", shadow: "0 8px 10px -6px rgba(0,0,0,0.1),0 20px 25px -5px rgba(0,0,0,0.1)", border: "rgba(81,162,255,0.3)", labelColor: "#BEDBFF", angle: 90, radius: 190 },
  { value: "2.5x", label: "Engagement", gradient: "linear-gradient(135deg,#009966,#007A55)", shadow: "0 8px 10px -6px rgba(0,0,0,0.1),0 20px 25px -5px rgba(0,0,0,0.1)", border: "rgba(0,212,146,0.3)", labelColor: "#A4F4CF", angle: 135, radius: 190 },
  { value: "99%", label: "Retention", gradient: "linear-gradient(135deg,#C800DE,#A800B7)", shadow: "0 8px 10px -6px rgba(0,0,0,0.1),0 20px 25px -5px rgba(0,0,0,0.1)", border: "rgba(237,106,255,0.3)", labelColor: "#F6CFFF", angle: 180, radius: 190 },
  { value: "3M+", label: "Likes", gradient: "linear-gradient(135deg,#4F39F6,#432DD7)", shadow: "0 8px 10px -6px rgba(0,0,0,0.1),0 20px 25px -5px rgba(0,0,0,0.1)", border: "rgba(124,134,255,0.3)", labelColor: "#C6D2FF", angle: 225, radius: 190 },
];

function BulletIcon({ type }: { type: "growth" | "engagement" | "data" }) {
  if (type === "growth") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="#C27AFF" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1.67 14.17h11.66" />
        <circle cx="15.83" cy="8.33" r="2.5" />
      </svg>
    );
  }
  if (type === "engagement") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="#C27AFF" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6.67" cy="5" r="3.33" />
        <path d="M1.67 14.17h10" />
        <path d="M13.33 5v5" />
        <path d="M15.83 15v-5" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="#C27AFF" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="14" height="14" rx="2" />
      <path d="M7 10h6" />
      <path d="M10 7v6" />
    </svg>
  );
}

function GrowthOrbit() {
  return (
    <div className="relative mx-auto h-[500px] w-[500px]">
      <div className="pointer-events-none absolute left-[55px] top-[50px] h-[300px] w-[300px] rounded-full bg-[rgba(152,16,250,0.30)] blur-[100px]" />
      <div className="pointer-events-none absolute left-[44px] top-[200px] h-[250px] w-[250px] rounded-full bg-[rgba(230,0,118,0.30)] blur-[100px]" />
      <div className="pointer-events-none absolute left-[133px] top-[200px] h-[200px] w-[200px] rounded-full bg-[rgba(21,93,252,0.20)] blur-[80px]" />

      <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(246,51,154,0.10)]" />
      <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(173,70,255,0.20)]" />

      <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_25px_50px_-12px_rgba(173,70,255,0.50)]" style={{ background: "linear-gradient(135deg,#AD46FF,#F6339A)" }}>
        <div className="absolute left-1/2 top-1/2 flex h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-black">
          <span className="bg-gradient-to-r from-[#AD46FF] to-[#F6339A] bg-clip-text text-[48px] font-normal leading-[48px] text-transparent" style={{ fontFamily: "Arial, sans-serif" }}>
            +250%
          </span>
          <span className="mt-1 text-sm font-semibold text-[#99A1AF]">
            Growth Rate
          </span>
        </div>
      </div>

      {statBubbles.map((bubble) => {
        const rad = (bubble.angle * Math.PI) / 180;
        const x = Math.cos(rad) * bubble.radius;
        const y = Math.sin(rad) * bubble.radius;
        return (
          <div
            key={bubble.label}
            className="absolute flex flex-col items-center rounded-full px-[21px] pb-[1px] pt-[13px]"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
              background: bubble.gradient,
              boxShadow: bubble.shadow,
              border: `1px solid ${bubble.border}`,
            }}
          >
            <span className="text-center text-2xl leading-8 text-white" style={{ fontFamily: "Arial, sans-serif" }}>
              {bubble.value}
            </span>
            <span className="text-center text-xs leading-4" style={{ color: bubble.labelColor }}>
              {bubble.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function FeatureImage({
  src,
  alt,
  widthClassName,
  glowClassName,
}: {
  src: Parameters<typeof Image>[0]["src"];
  alt: string;
  widthClassName: string;
  glowClassName?: string;
}) {
  return (
    <div className={`relative ${widthClassName}`}>
      {glowClassName && <div className={glowClassName} />}
      <div className="absolute inset-0 rounded-[2.5rem] shadow-[0_24px_48px_rgba(0,0,0,0.32)]" />
      <Image
        src={src}
        alt={alt}
        className="relative z-[1] h-auto w-full object-contain"
      />
    </div>
  );
}

export function WhyEagleLikesSection() {
  const [firstFeature, secondFeature, thirdFeature] = whyEagleLikesFeatures;

  return (
    <section className="relative isolate overflow-hidden px-6 py-16 md:px-12 md:py-20 lg:px-[92px] lg:py-24">
      <Image
        src={images.leftHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-[1] h-auto w-[210px] select-none opacity-60 sm:w-[250px] md:w-[290px] lg:w-[340px] lg:opacity-70"
        priority
      />
      <Image
        src={images.rightHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-[1] h-auto w-[170px] select-none opacity-[0.62] sm:w-[210px] md:w-[235px] lg:w-[265px] lg:opacity-[0.74]"
        priority
      />

      <div className="relative z-[2] mx-auto max-w-[1020px]">
        <div className="mx-auto max-w-[520px] text-center">
          <h2 className="text-[clamp(2rem,3vw,3.3rem)] font-bold tracking-[-0.04em] text-white">
            Why <span className="text-[#09a7ff]">Eagle Likes?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[420px] text-[13px] leading-[1.55] text-[#8b98a8] sm:text-[14px]">
            Many providers offer social engagement, but none deliver our level
            of quality or safety. Experience why we&apos;re the go-to choice for
            Social Media growth
          </p>
        </div>

        <div className="mt-14 space-y-16 md:space-y-20 lg:space-y-24">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_320px] md:gap-x-10 lg:grid-cols-[minmax(0,400px)_minmax(320px,390px)] lg:justify-between lg:gap-x-[170px]">
            <div className="max-w-[410px]">
              <h3 className="text-[clamp(2rem,2.8vw,3rem)] font-bold leading-[1] tracking-[-0.04em] text-white">
                Growth Focused
                <br />
                Services
              </h3>
              <div className="mt-6 space-y-5 text-[13px] leading-[1.55] text-[#7f8b9a]">
                {firstFeature.description.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <FeatureImage
                src={firstFeature.image}
                alt={firstFeature.imageAlt}
                widthClassName="w-[260px] sm:w-[300px] md:w-[340px]"
              />
            </div>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-[320px_minmax(0,1fr)] md:gap-x-10 lg:grid-cols-[minmax(320px,390px)_minmax(0,430px)] lg:justify-between lg:gap-x-[170px]">
            <div className="flex justify-center lg:justify-start">
              <FeatureImage
                src={secondFeature.image}
                alt={secondFeature.imageAlt}
                widthClassName="w-[250px] sm:w-[290px] md:w-[330px]"
              />
            </div>

            <div className="max-w-[430px]">
              <h3 className="text-[clamp(2rem,2.8vw,3rem)] font-bold leading-[1] tracking-[-0.04em] text-white">
                Leading Growth
                <br />
                Specialists
              </h3>
              <div className="mt-6 space-y-5 text-[13px] leading-[1.55] text-[#7f8b9a]">
                {secondFeature.description.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-x-[75px]">
            <div className="max-w-[503px]">
              {thirdFeature.badge ? (
                <div className="inline-flex items-center gap-2 rounded-full px-[17px] py-[9px] text-sm text-white" style={{ background: "linear-gradient(90deg,rgba(173,70,255,0.10),rgba(246,51,154,0.10))", border: "1px solid rgba(173,70,255,0.20)" }}>
                  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="#C27AFF" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1.33 1.33h13.34v13.34" />
                    <circle cx="2" cy="13.33" r="0.67" />
                  </svg>
                  <span>{thirdFeature.badge}</span>
                </div>
              ) : null}

              <h3 className="mt-6 text-[48px] font-bold leading-[60px] text-white">
                Scale Your Social Media to New Heights
              </h3>
              <p className="mt-5 max-w-[419px] text-xl font-medium leading-[32.5px] text-[#99A1AF]">
                {thirdFeature.description}
              </p>

              {thirdFeature.bullets ? (
                <div className="mt-10 space-y-5">
                  {(["growth", "engagement", "data"] as const).map((type, i) => {
                    const bullet = thirdFeature.bullets![i];
                    return (
                      <div key={bullet.title} className="flex items-start gap-4">
                        <div className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] ${bulletIconClasses[bullet.color]}`}>
                          <BulletIcon type={type} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">
                            {bullet.title}
                          </h4>
                          <p className="mt-1.5 max-w-[360px] text-base leading-[26px] text-[#99A1AF]">
                            {bullet.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>

            <div className="flex justify-center lg:justify-end">
              <GrowthOrbit />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
