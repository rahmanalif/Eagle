import Image from "next/image";

import { eagleServiceFeature, serviceVariantBullets, images } from "@/constants";

type ServiceCardArtVariant =
  | "blue-eagle"
  | "blue-write"
  | "pink-eagle"
  | "pink-write"
  | "green-eagle"
  | "green-write"
  | "red-eagle"
  | "red-write";

type ServiceSectionVariant = {
  cardKeys: [string, string];
  variantKey: string;
  containerClassName: string;
  gridClassName: string;
  leftCardsClassName: string;
  leftCardClassName: string;
  rightCardClassName: string;
  accentClassName: string;
  bulletIconClassName: string;
  bulletCheckColor: string;
  bulletTextClassName: string;
  buttonClassName: string;
  reviewIconClassName?: string;
  titleSuffix?: string;
  compact?: boolean;
};

const serviceSectionVariants: ServiceSectionVariant[] = [
  {
    cardKeys: ["blue", "blue"],
    variantKey: "instagram-followers",
    containerClassName:
      "mt-14 rounded-[40px] bg-gradient-to-b from-[rgba(0,132,255,0.17)] to-[rgba(5,5,5,0.17)] px-5 py-8 shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:px-8 lg:px-[50px] lg:py-[68px]",
    gridClassName:
      "flex flex-col gap-9 lg:flex-row lg:items-center lg:gap-9",
    leftCardsClassName: "",
    leftCardClassName:
      "w-[260px] h-[440px] rounded-[40px] border border-[rgba(255,255,255,0.15)] bg-[rgba(0,132,255,0.10)] px-5 py-8 text-center",
    rightCardClassName: "",
    accentClassName: "text-[#2577FF]",
    bulletIconClassName:
      "shrink-0 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.40)] ring-2 ring-[#62ABFF]",
    bulletCheckColor: "#62ABFF",
    bulletTextClassName: "text-[15px] font-semibold leading-[26px] text-white",
    buttonClassName:
      "mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-[9px] bg-[rgba(37,119,255,0.80)] px-6 text-[16px] font-bold capitalize text-white transition-opacity duration-200 hover:opacity-90",
    reviewIconClassName: "text-[#109cff]",
    titleSuffix: "Followers",
  },
  {
    cardKeys: ["pink", "pink"],
    variantKey: "instagram-likes",
    containerClassName:
      "mt-8 rounded-[34px] bg-gradient-to-b from-[#2c042d] to-[#050505] sm:px-7 md:px-8 md:py-8 lg:px-8 lg:py-8",
    gridClassName:
      "grid gap-5 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] md:items-start lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch",
    leftCardsClassName: "grid h-full gap-4 sm:grid-cols-2 sm:items-stretch",
    leftCardClassName:
      "flex min-h-full flex-col rounded-[22px] border border-[rgba(161,72,171,0.22)] bg-[rgba(51,11,53,0.62)] px-5 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
    rightCardClassName: "rounded-[28px] px-2 py-2 md:px-4 md:py-4",
    accentClassName: "text-[#FB00FF]",
    bulletIconClassName:
      "shrink-0 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.40)] ring-2 ring-[#ff37b2]",
    bulletCheckColor: "#ff37b2",
    bulletTextClassName: "text-[14px] font-semibold leading-[1.45] text-[#f4ebf7]",
    buttonClassName:
      "mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-[8px] bg-[linear-gradient(180deg,#ff37b2_0%,#d80c8c_100%)] px-6 text-[14px] font-semibold text-white shadow-[#FE06A3] transition-transform duration-200 hover:translate-y-[-1px]",
  },
  {
    cardKeys: ["green", "green"],
    variantKey: "instagram-views",
    containerClassName:
      "mt-14 rounded-[34px] bg-gradient-to-b from-[#042e09] to-[#050505] px-8 py-9 shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:px-10 md:py-11 lg:px-8 lg:py-10",
    gridClassName:
      "grid gap-6 md:grid-cols-2 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]",
    leftCardsClassName: "",
    leftCardClassName:
      "rounded-[28px] border border-[rgba(88,139,203,0.18)] bg-[#04F31F1A] px-7 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
    rightCardClassName: "rounded-[28px] px-4 py-4 md:col-span-2 md:px-6 md:py-6 lg:col-span-1",
    accentClassName: "text-[#1ED760]",
    bulletIconClassName:
      "shrink-0 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.40)] ring-2 ring-[#1ED760]",
    bulletCheckColor: "#1ED760",
    bulletTextClassName: "text-[15px] font-semibold leading-[1.45] text-[#f0f6ff]",
    buttonClassName:
      "mt-8 inline-flex min-h-[58px] w-full items-center justify-center rounded-[10px] bg-[#1ED760] px-6 text-[15px] font-semibold text-white shadow-[0_18px_40px_rgba(32,98,225,0.26)] transition-transform duration-200 hover:translate-y-[-1px]",
    reviewIconClassName: "text-[#109cff]",
    titleSuffix: "Views",
  },
  {
    cardKeys: ["red", "red"],
    variantKey: "instagram-comments",
    containerClassName:
      "mt-8 rounded-[34px] bg-gradient-to-b from-[#2f0505] to-[#050505] sm:px-7 md:px-8 md:py-8 lg:px-8 lg:py-8",
    gridClassName:
      "grid gap-5 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] md:items-start lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch",
    leftCardsClassName: "grid h-full gap-4 sm:grid-cols-2 sm:items-stretch",
    leftCardClassName:
      "flex min-h-full flex-col rounded-[22px] border border-[rgba(161,72,171,0.22)] bg-[#FF00001A] px-5 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
    rightCardClassName: "rounded-[28px] px-2 py-2 md:px-4 md:py-4",
    accentClassName: "text-[#FF0000]",
    bulletIconClassName:
      "shrink-0 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.40)] ring-2 ring-[#FF0000]",
    bulletCheckColor: "#FF0000",
    bulletTextClassName: "text-[14px] font-semibold leading-[1.45] text-[#f4ebf7]",
    buttonClassName:
      "mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-[8px] bg-[#FF0000] px-6 text-[14px] font-semibold text-white shadow-[#FE06A3] transition-transform duration-200 hover:translate-y-[-1px]",
    titleSuffix: "Comments",
  },
  {
    cardKeys: ["blue", "blue"],
    variantKey: "tiktok-followers",
    containerClassName:
      "mt-14 rounded-[40px] bg-gradient-to-b from-[rgba(0,132,255,0.17)] to-[rgba(5,5,5,0.17)] px-5 py-8 shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:px-8 lg:px-[50px] lg:py-[68px]",
    gridClassName:
      "flex flex-col gap-9 lg:flex-row lg:items-center lg:gap-9",
    leftCardsClassName: "",
    leftCardClassName:
      "w-[260px] h-[440px] rounded-[40px] border border-[rgba(255,255,255,0.15)] bg-[rgba(0,132,255,0.10)] px-5 py-8 text-center",
    rightCardClassName: "",
    accentClassName: "text-[#2577FF]",
    bulletIconClassName:
      "shrink-0 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.40)] ring-2 ring-[#62ABFF]",
    bulletCheckColor: "#62ABFF",
    bulletTextClassName: "text-[15px] font-semibold leading-[26px] text-white",
    buttonClassName:
      "mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-[9px] bg-[rgba(37,119,255,0.80)] px-6 text-[16px] font-bold capitalize text-white transition-opacity duration-200 hover:opacity-90",
    reviewIconClassName: "text-[#109cff]",
    titleSuffix: "Followers",
  },
  {
    cardKeys: ["pink", "pink"],
    variantKey: "tiktok-likes",
    containerClassName:
      "mt-8 rounded-[34px] bg-gradient-to-b from-[#2c042d] to-[#050505] sm:px-7 md:px-8 md:py-8 lg:px-8 lg:py-8",
    gridClassName:
      "grid gap-5 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] md:items-start lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch",
    leftCardsClassName: "grid h-full gap-4 sm:grid-cols-2 sm:items-stretch",
    leftCardClassName:
      "flex min-h-full flex-col rounded-[22px] border border-[rgba(161,72,171,0.22)] bg-[rgba(51,11,53,0.62)] px-5 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
    rightCardClassName: "rounded-[28px] px-2 py-2 md:px-4 md:py-4",
    accentClassName: "text-[#FB00FF]",
    bulletIconClassName:
      "shrink-0 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.40)] ring-2 ring-[#ff37b2]",
    bulletCheckColor: "#ff37b2",
    bulletTextClassName: "text-[14px] font-semibold leading-[1.45] text-[#f4ebf7]",
    buttonClassName:
      "mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-[8px] bg-[linear-gradient(180deg,#ff37b2_0%,#d80c8c_100%)] px-6 text-[14px] font-semibold text-white shadow-[#FE06A3] transition-transform duration-200 hover:translate-y-[-1px]",
  },
  {
    cardKeys: ["green", "green"],
    variantKey: "tiktok-views",
    containerClassName:
      "mt-14 rounded-[34px] bg-gradient-to-b from-[#042e09] to-[#050505] px-8 py-9 shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:px-10 md:py-11 lg:px-8 lg:py-10",
    gridClassName:
      "grid gap-6 md:grid-cols-2 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]",
    leftCardsClassName: "",
    leftCardClassName:
      "rounded-[28px] border border-[rgba(88,139,203,0.18)] bg-[#04F31F1A] px-7 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
    rightCardClassName: "rounded-[28px] px-4 py-4 md:col-span-2 md:px-6 md:py-6 lg:col-span-1",
    accentClassName: "text-[#1ED760]",
    bulletIconClassName:
      "shrink-0 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.40)] ring-2 ring-[#1ED760]",
    bulletCheckColor: "#1ED760",
    bulletTextClassName: "text-[15px] font-semibold leading-[1.45] text-[#f0f6ff]",
    buttonClassName:
      "mt-8 inline-flex min-h-[58px] w-full items-center justify-center rounded-[10px] bg-[#1ED760] px-6 text-[15px] font-semibold text-white shadow-[0_18px_40px_rgba(32,98,225,0.26)] transition-transform duration-200 hover:translate-y-[-1px]",
    reviewIconClassName: "text-[#109cff]",
    titleSuffix: "Views",
  },
  {
    cardKeys: ["red", "red"],
    variantKey: "tiktok-comments",
    containerClassName:
      "mt-8 rounded-[34px] bg-gradient-to-b from-[#2f0505] to-[#050505] sm:px-7 md:px-8 md:py-8 lg:px-8 lg:py-8",
    gridClassName:
      "grid gap-5 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] md:items-start lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch",
    leftCardsClassName: "grid h-full gap-4 sm:grid-cols-2 sm:items-stretch",
    leftCardClassName:
      "flex min-h-full flex-col rounded-[22px] border border-[rgba(161,72,171,0.22)] bg-[#FF00001A] px-5 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
    rightCardClassName: "rounded-[28px] px-2 py-2 md:px-4 md:py-4",
    accentClassName: "text-[#FF0000]",
    bulletIconClassName:
      "shrink-0 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.40)] ring-2 ring-[#FF0000]",
    bulletCheckColor: "#FF0000",
    bulletTextClassName: "text-[14px] font-semibold leading-[1.45] text-[#f4ebf7]",
    buttonClassName:
      "mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-[8px] bg-[#FF0000] px-6 text-[14px] font-semibold text-white shadow-[#FE06A3] transition-transform duration-200 hover:translate-y-[-1px]",
    titleSuffix: "Comments",
  },
];

function ServiceCardArt({ variant }: { variant: ServiceCardArtVariant }) {
  if (variant === "blue-eagle") {
    return (
      <div className="relative mx-auto h-[126px] w-[144px]">
        <Image
          src={images.blueEagle}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-0 h-auto w-[144px]"
        />
      </div>
    );
  }

  if (variant === "pink-eagle") {
    return (
      <div className="relative mx-auto h-[126px] w-[144px]">
        <Image
          src={images.pinkEagle}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-0 h-auto w-[144px]"
        />
      </div>
    );
  }

  if (variant === "green-eagle") {
    return (
      <div className="relative mx-auto h-[126px] w-[144px]">
        <Image
          src={images.greenEagle}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-0 h-auto w-[144px]"
        />
      </div>
    );
  }

  if (variant === "red-eagle") {
    return (
      <div className="relative mx-auto h-[126px] w-[144px]">
        <Image
          src={images.redEagle}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-0 h-auto w-[144px]"
        />
      </div>
    );
  }

  if (variant === "blue-write") {
    return (
      <div className="relative mx-auto h-[126px] w-[144px]">
        <Image
          src={images.blueWrite}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-auto w-[116px] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    );
  }

  if (variant === "pink-write") {
    return (
      <div className="relative mx-auto h-[126px] w-[144px]">
        <Image
          src={images.pinkWrite}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-auto w-[116px] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    );
  }

  if (variant === "green-write") {
    return (
      <div className="relative mx-auto h-[126px] w-[144px]">
        <Image
          src={images.greenWrite}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-auto w-[116px] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    );
  }

  return (
    <div className="relative mx-auto h-[126px] w-[144px]">
      <Image
        src={images.redWrite}
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-auto w-[116px] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}

function ServiceSectionBlock({
  variant,
  titlePrefix,
  titleAccent,
  titleSuffix,
  firstCard,
  secondCard,
}: {
  variant: ServiceSectionVariant;
  titlePrefix: string;
  titleAccent: string;
  titleSuffix?: string;
  firstCard: (typeof eagleServiceFeature.cards)[number];
  secondCard: (typeof eagleServiceFeature.cards)[number];
}) {
  const cardVariants: [ServiceCardArtVariant, ServiceCardArtVariant] = [
    `${variant.cardKeys[0]}-eagle` as ServiceCardArtVariant,
    `${variant.cardKeys[1]}-write` as ServiceCardArtVariant,
  ];

  const variantData = serviceVariantBullets[variant.variantKey];
  const bullets = variantData?.bullets ?? eagleServiceFeature.bullets;
  const buttonLabel = variantData?.buttonLabel ?? eagleServiceFeature.buttonLabel;
  const cardTitle = variantData?.cardTitle ?? "";
  const cardDescription = "Likes increase your content's reach by attracting new viewers and boosting your profile's credibility. The more likes, the higher your chances to trend.";

  return (
    <div
      className={`mx-auto mt-0 w-full max-w-[1078px] ${variant.containerClassName}`}
    >
      <div className={variant.gridClassName}>
        {variant.compact ? (
          <>
            <div className={variant.leftCardsClassName}>
              {[firstCard, secondCard].map((card, index) => (
                <article
                  key={`${variant.cardKeys[0]}-compact-${card.title}`}
                  className={`${variant.leftCardClassName} lg:min-h-[441px]`}
                >
                  <ServiceCardArt variant={cardVariants[index]} />
                  <h4 className="mt-4 text-[16px] font-semibold leading-[1.45] text-white">
                    {cardTitle}
                  </h4>
                  <p className="mt-4 text-[11px] leading-[1.5] text-[#99A1AF]">
                    {cardDescription}
                  </p>
                </article>
              ))}
            </div>

            <article className={`${variant.rightCardClassName} lg:min-h-[441px]`}>
              <div className="inline-flex items-center gap-1 rounded-full bg-[#D4E3EF] px-[9px] py-[4px] text-[11px] font-semibold text-[#506171]">
                <span className={variant.reviewIconClassName || "text-[#109cff]"}>
                  ★
                </span>
                <span>{eagleServiceFeature.rating}</span>
                <span>{eagleServiceFeature.reviews}</span>
              </div>

              <h3 className="mt-5 text-[clamp(2rem,3vw,3rem)] font-bold leading-[1.08] tracking-[-0.04em] text-white">
                {titlePrefix}
                <span className={variant.accentClassName}>{titleAccent}</span>
                {titleSuffix}
              </h3>

              <div className="mt-7 space-y-3.5">
                {bullets.map((bullet) => (
                  <div key={`${titleAccent}-${bullet}`} className="flex items-start gap-3">
                    <span className={`mt-[2px] ${variant.bulletIconClassName}`}>
                      <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                        <path d="M1 3L3 5.5L7 1" stroke={variant.bulletCheckColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className={variant.bulletTextClassName}>{bullet}</p>
                  </div>
                ))}
              </div>

              <button type="button" className={variant.buttonClassName}>
                {buttonLabel}
              </button>
            </article>
          </>
        ) : (
          <>
            <article className={`${variant.rightCardClassName} lg:min-h-[441px]`}>
              <div className="inline-flex items-center gap-1 rounded-full bg-[#D4E3EF] px-[9px] py-[4px] text-[11px] font-semibold text-[#506171]">
                <span className={variant.reviewIconClassName || "text-[#109cff]"}>
                  ★
                </span>
                <span>{eagleServiceFeature.rating}</span>
                <span>{eagleServiceFeature.reviews}</span>
              </div>

              <h3 className="mt-7 text-[clamp(2rem,3vw,3rem)] font-bold leading-[1.08] tracking-[-0.04em] text-white">
                {titlePrefix}
                <span className={variant.accentClassName}>{titleAccent}</span>
                {titleSuffix}
              </h3>

              <div className="mt-8 space-y-4">
                {bullets.map((bullet) => (
                  <div key={`${titleAccent}-${bullet}`} className="flex items-start gap-3">
                    <span className={`mt-[2px] ${variant.bulletIconClassName}`}>
                      <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                        <path d="M1 3L3 5.5L7 1" stroke={variant.bulletCheckColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className={variant.bulletTextClassName}>{bullet}</p>
                  </div>
                ))}
              </div>

              <button type="button" className={variant.buttonClassName}>
                {buttonLabel}
              </button>
            </article>

            <div className="flex flex-col gap-4 sm:flex-row lg:gap-[17px]">
              {[firstCard, secondCard].map((card, index) => (
                <article
                  key={`${variant.cardKeys[0]}-wide-${card.title}`}
                  className={`${variant.leftCardClassName} flex-1 lg:min-h-[441px]`}
                >
                  <ServiceCardArt variant={cardVariants[index]} />
                  <div className="mt-auto flex flex-col items-center gap-[23px]">
                    <h4 className="text-[18px] font-bold capitalize leading-[30px] text-white">
                      {cardTitle}
                    </h4>
                    <p className="text-[15px] leading-[24px] text-[#99A1AF]">
                      {cardDescription}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function EagleServiceSection() {
  const [titleStart] = eagleServiceFeature.title.split(eagleServiceFeature.accent);
  const [firstCard, secondCard] = eagleServiceFeature.cards;

  return (
    <section className="relative isolate overflow-hidden px-6 pb-24 pt-12 md:px-10 lg:px-[92px] lg:pt-[86px]">
      <Image
        src={images.leftHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[180px] z-[1] h-auto w-[220px] select-none opacity-60 sm:w-[260px] md:w-[300px] lg:w-[340px] lg:opacity-70"
        priority
      />
      <Image
        src={images.rightHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[540px] z-[1] h-auto w-[170px] select-none opacity-[0.6] sm:w-[210px] md:w-[235px] lg:w-[265px] lg:opacity-[0.74]"
        priority
      />
      <Image
        src={images.leftHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[50%] z-[1] h-auto w-[220px] -translate-y-1/2 select-none opacity-60 sm:w-[260px] md:w-[300px] lg:w-[340px] lg:opacity-70"
        priority
      />
      <Image
        src={images.rightHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[calc(50%+270px)] z-[1] h-auto w-[170px] -translate-y-1/2 select-none opacity-[0.6] sm:w-[210px] md:w-[235px] lg:w-[265px] lg:opacity-[0.74]"
        priority
      />
      <Image
        src={images.leftHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[300px] left-0 z-[1] h-auto w-[220px] select-none opacity-60 sm:w-[260px] md:w-[300px] lg:w-[340px] lg:opacity-70"
        priority
      />
      <Image
        src={images.rightHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-40px] right-0 z-[1] h-auto w-[170px] select-none opacity-[0.6] sm:w-[210px] md:w-[235px] lg:w-[265px] lg:opacity-[0.74]"
        priority
      />

      <div className="relative z-[2] mx-auto max-w-[1078px]">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[30px] font-semibold capitalize leading-[38px] tracking-[0] text-white sm:text-[clamp(2.1rem,3.6vw,54px)] sm:font-bold sm:leading-[65px]">
            Eagle Likes <span className="text-[#01D0FF]">Services</span>
          </h2>
          <p className="mt-[25px] font-[var(--font-inter)] text-[14px] leading-[19.6px] tracking-[0] text-[#99a1af] sm:mt-4 sm:text-[16px] sm:leading-[24px]">
            Transform your social media journey with reliable{" "}
            <span className="font-semibold text-[#62ABFF]">Instagram</span> and{" "}
            <span className="font-semibold text-[#62ABFF]">TikTok growth solutions</span>.
            {" "}Gain real followers, likes, and views safely and instantly, helping your content reach more people and increasing your engagement organically
          </p>
        </div>

        <div className="mt-[56px]">
        <ServiceSectionBlock
          variant={serviceSectionVariants[0]}
          titlePrefix={titleStart}
          titleAccent={`${eagleServiceFeature.accent} `}
          titleSuffix={serviceSectionVariants[0].titleSuffix}
          firstCard={firstCard}
          secondCard={secondCard}
        />
        <ServiceSectionBlock
          variant={{ ...serviceSectionVariants[1], compact: true }}
          titlePrefix={titleStart}
          titleAccent={`${eagleServiceFeature.accent} `}
          titleSuffix="Likes"
          firstCard={firstCard}
          secondCard={secondCard}
        />
        <ServiceSectionBlock
          variant={serviceSectionVariants[2]}
          titlePrefix={titleStart}
          titleAccent={`${eagleServiceFeature.accent} `}
          titleSuffix={serviceSectionVariants[2].titleSuffix}
          firstCard={firstCard}
          secondCard={secondCard}
        />
        <ServiceSectionBlock
          variant={{ ...serviceSectionVariants[3], compact: true }}
          titlePrefix={titleStart}
          titleAccent="Instagram "
          titleSuffix={serviceSectionVariants[3].titleSuffix}
          firstCard={firstCard}
          secondCard={secondCard}
        />
        <ServiceSectionBlock
          variant={serviceSectionVariants[4]}
          titlePrefix={titleStart}
          titleAccent="TikTok "
          titleSuffix={serviceSectionVariants[4].titleSuffix}
          firstCard={firstCard}
          secondCard={secondCard}
        />
        <ServiceSectionBlock
          variant={{ ...serviceSectionVariants[5], compact: true }}
          titlePrefix={titleStart}
          titleAccent="TikTok "
          titleSuffix="Likes"
          firstCard={firstCard}
          secondCard={secondCard}
        />
        <ServiceSectionBlock
          variant={serviceSectionVariants[6]}
          titlePrefix={titleStart}
          titleAccent="TikTok "
          titleSuffix={serviceSectionVariants[6].titleSuffix}
          firstCard={firstCard}
          secondCard={secondCard}
        />
        <ServiceSectionBlock
          variant={{ ...serviceSectionVariants[7], compact: true }}
          titlePrefix={titleStart}
          titleAccent="TikTok "
          titleSuffix={serviceSectionVariants[7].titleSuffix}
          firstCard={firstCard}
          secondCard={secondCard}
        />
        </div>
      </div>
    </section>
  );
}
