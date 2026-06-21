import Image from "next/image";
import tiktokServiceBg from "@/public/tiktok_service.png";

import type { ServiceTab } from "@/constants";

type ServiceTabCardProps = {
  service: ServiceTab;
  bottom?: boolean;
};

const starLabel = "\u2605";

export function ServiceTabCard({
  service,
  bottom = false,
}: ServiceTabCardProps) {
  const isHighlightedTopCard = service.highlighted && !bottom;
  const baseClassName = bottom
    ? "relative flex min-h-[56px] sm:min-h-[74px] lg:h-full items-center justify-center sm:justify-start gap-3.5 px-[14px] py-[10px] sm:px-[18px] sm:py-[14px] first:rounded-bl-[22px] last:rounded-br-[22px]"
    : [
      "relative flex min-h-[56px] items-center justify-center gap-3.5 bg-[rgba(35,58,91,0.65)] px-[14px] py-[10px] sm:min-h-[72px] sm:justify-start sm:px-[18px] sm:py-[12px] lg:h-[100px] lg:px-[28px]",
      service.highlighted
        ? "z-[2] min-h-[64px] rounded-tl-[20px] rounded-tr-[20px] bg-transparent shadow-[0_10px_24px_rgba(0,0,0,0.16)] after:hidden before:hidden sm:mt-[-12px] sm:min-h-[84px] sm:rounded-tl-[27px] sm:rounded-tr-[27px] lg:mt-0 lg:h-[100px]"
        : "border-b border-[rgba(79,110,154,0.22)]",
      !service.highlighted
        ? "first:rounded-tl-[22px] last:rounded-tr-[22px]"
        : "",
    ].join(" ")
    ;

  return (
    <article
      key={service.name}
      className={baseClassName}
      style={
        isHighlightedTopCard
          ? {
              backgroundColor: "#ffffff",
              backgroundImage: `url(${tiktokServiceBg.src})`,
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 100%",
            }
          : undefined
      }
    >
      <Image
        src={service.icon}
        alt=""
        className="h-[32px] w-[32px] shrink-0 max-[640px]:h-6 max-[640px]:w-6 lg:h-[58px] lg:w-[58px]"
      />
      <div className="min-w-0 hidden sm:block">
        <h2
          className={`mb-[9px] font-[var(--font-open-sans)] text-[15px] font-semibold leading-[1.1] tracking-[0] lg:text-[18px] ${
            isHighlightedTopCard ? "text-[#131825]" : "text-white"
          } `}
        >
          {service.name}
        </h2>
        <div className="inline-flex h-[22px] items-center overflow-hidden rounded-full border border-[rgba(255,255,255,0.06)] shadow-sm lg:h-[26px]">
          <span className="inline-flex h-full items-center gap-1 bg-white pl-2 pr-2.5 font-[var(--font-open-sans)] text-[11px] font-semibold text-[#5c5d60] lg:text-[14px]">
            <span className="text-[#0a8cff] text-[11px] leading-none">{starLabel}</span>
            <span>{service.rating}</span>
          </span>
          <span
            className={`inline-flex h-full items-center px-2.5 font-[var(--font-open-sans)] text-[11px] font-semibold lg:text-[16px] ${
              isHighlightedTopCard
                ? "bg-[#edf1f7] text-[#8f9cb0]"
                : "bg-[rgba(255,255,255,0.14)] text-[#bfc7d2]"
            }`}
          >
            {service.count}
          </span>
        </div>
      </div>
    </article>
  );
}
