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
    ? "relative flex min-h-[34px] items-center justify-center gap-4 bg-transparent p-0 sm:min-h-[74px] sm:justify-start sm:bg-[rgba(35,58,91,0.65)] sm:px-[18px] sm:py-[14px] lg:h-[100px] lg:gap-5 lg:px-[28px] first:rounded-bl-[22px] last:rounded-br-[22px]"
    : [
      "relative flex min-h-[34px] items-center justify-center gap-4 bg-transparent p-0 sm:min-h-[72px] sm:justify-start sm:bg-[rgba(35,58,91,0.65)] sm:px-[18px] sm:py-[12px] lg:h-[100px] lg:gap-5 lg:px-[28px]",
      service.highlighted
        ? "sm:first:rounded-tl-[22px]"
        : "sm:border-b sm:border-[rgba(79,110,154,0.22)]",
      "sm:first:rounded-tl-[32px] sm:last:rounded-tr-[22px]",
    ].join(" ")
    ;

  return (
    <article
      key={service.name}
      className={baseClassName}
      style={
        isHighlightedTopCard
          ? {
              backgroundImage: `url(${tiktokServiceBg.src})`,
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 100%",
            }
          : undefined
      }
    >
      <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] border border-black/15 bg-white sm:h-auto sm:w-auto sm:rounded-none sm:border-0 sm:bg-transparent">
        <Image
          src={service.icon}
          alt=""
          className="h-5 w-5 shrink-0 object-contain sm:h-[32px] sm:w-[32px] lg:h-[58px] lg:w-[58px]"
        />
      </span>
      <div className="min-w-0 hidden sm:block">
        <h2
          className={`mb-3.5 whitespace-nowrap text-[15px] font-semibold leading-[1.1] tracking-normal lg:text-[18px] ${
            isHighlightedTopCard ? "text-[#131825]" : "text-white"
          }`}
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          {service.name}
        </h2>
        <div className="inline-flex h-[24px] items-center overflow-hidden rounded-full border border-[rgba(255,255,255,0.06)] shadow-sm lg:h-[28px]">
          <span className="inline-flex h-full items-center gap-1.5 bg-white pl-2.5 pr-3 font-[var(--font-open-sans)] text-[11px] font-semibold text-[#5c5d60] lg:text-[14px]">
            <span className="text-[#0a8cff] text-[11px] leading-none">{starLabel}</span>
            <span>{service.rating}</span>
          </span>
          <span
            className={`inline-flex h-full items-center px-3.5 font-[var(--font-open-sans)] text-[11px] font-semibold lg:text-[16px] ${
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
