import { howItWorksSteps } from "@/constants";

function StepIcon({ icon }: { icon: "cart" | "user" | "lock" }) {
  if (icon === "cart") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 28 28"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9.33" cy="23.33" r="1.17" />
        <circle cx="22.17" cy="23.33" r="1.17" />
        <path d="M2.39 2.39h3.5l2.94 12.72a1.4 1.4 0 0 0 1.4 1.09h12.46a1.4 1.4 0 0 0 1.37-1.12L25.61 8.17H7.83" />
      </svg>
    );
  }

  if (icon === "user") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 28 28"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="10.5" cy="8.17" r="4.67" />
        <path d="M21 15.17a3.5 3.5 0 0 1 3.5 3.5" />
        <path d="M2.33 21a7 7 0 0 1 14 0" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 28 28"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="12.83" width="21" height="12.83" rx="3.5" />
      <path d="M8.17 12.83V8.17a5.83 5.83 0 0 1 11.67 0v4.67" />
    </svg>
  );
}

export function HowItWorksSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-14 md:px-10 md:py-16 lg:px-[92px] lg:py-20">
      <div className="relative z-[1] mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[650px] text-center">
          <h2 className="text-[48px] font-bold text-white">
            How it works
          </h2>
          <p className="mx-auto mt-4 text-[18px] font-medium leading-[1.3] text-[#99A1AF]">
            Ordering services is simple — pick your package, pay quickly, and
            watch your growth begin instantly
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {howItWorksSteps.map((step, index) => (
            <article
              key={step.number}
              className={`group relative overflow-hidden rounded-[24px] border border-[#27272A] bg-[linear-gradient(135deg,#18181B_0%,#09090B_100%)] p-8 ${index === 2 ? "md:col-span-2 md:max-w-[420px] md:justify-self-center lg:col-span-1 lg:max-w-none" : ""}`}
            >
              <div className="pointer-events-none absolute inset-[1px] rounded-[23px] bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="pointer-events-none absolute right-5 top-[-15px] text-[120px] font-normal leading-[180px] tracking-normal text-white/[0.05]" style={{ fontFamily: "Arial, sans-serif" }}>
                {step.number}
              </div>

              <div className="relative z-[1]">
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: step.iconBackground,
                      color: step.iconColor,
                      boxShadow: `inset 0 0 0 1px ${step.iconBorder}`,
                    }}
                  >
                    <StepIcon icon={step.icon} />
                  </div>
                  <span className="text-base text-[#52525C]" style={{ fontFamily: "Arial, sans-serif" }}>
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-base font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-6 max-w-[311px] text-base font-semibold leading-6 text-[#9F9FA9]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
