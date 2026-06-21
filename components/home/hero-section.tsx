"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  bottomServiceTabs,
  featuredServiceButtons,
  images,
  primaryNav,
  reviewStars,
  topServiceTabs,
} from "@/constants";

import { ServiceTabCard } from "./service-tab";

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative isolate min-h-[797px] overflow-hidden rounded-b-[65px] md:min-h-screen md:rounded-b-none">
      <div className="pointer-events-none absolute left-[-143px] top-[283px] z-0 h-[457px] w-[179px] rounded-full bg-[#0067DB] blur-[100px] sm:h-[340px] sm:w-[340px] lg:left-[-240px] lg:h-[420px] lg:w-[420px] lg:blur-[100px]" />
      <div className="pointer-events-none absolute left-[24px] top-[-100px] z-0 h-[246px] w-[310px] rounded-full bg-[#0067DB] blur-[100px] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px] lg:blur-[80px]" />
      <div className="pointer-events-none absolute right-[-123px] top-[296px] z-0 h-[460px] w-[170px] rounded-full bg-[#0067DB] blur-[100px] md:hidden" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[797px] rounded-b-[65px] bg-[linear-gradient(180deg,rgba(6,99,205,0.20)_19%,rgba(0,0,0,0.20)_100%)] md:hidden" />

      <Image
        src={images.hero_top_shadow}
        alt=""
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-auto w-[min(100%,980px)] -translate-x-1/2 select-none opacity-80"
        priority
      />
      <Image
        src={images.leftHeroShadow}
        alt=""
        className="pointer-events-none absolute left-0 top-[20px] z-0 h-auto w-[320px] select-none opacity-60 sm:top-[30px] sm:w-[380px] md:top-[40px] md:w-[440px] lg:top-[50px] lg:w-[500px] lg:opacity-75"
        priority
      />
      <Image
        src={images.leftHeroShadowUnder}
        alt=""
        className="pointer-events-none absolute bottom-[-8px] left-0 z-0 h-auto w-[92px] select-none opacity-60 sm:w-[110px] md:w-[124px] lg:w-[138px] lg:opacity-70"
        priority
      />
      <Image
        src={images.leftHeroImg}
        alt=""
        className="pointer-events-none absolute left-0 top-[51px] z-[1] h-auto w-[374px] select-none sm:left-[16px] sm:w-[28px] md:left-[20px] md:top-[104px] md:w-[32px] lg:left-[26px] lg:top-[112px] lg:w-[36px] lg:opacity-[0.58]"
        priority
      />
      <Image
        src={images.rightHeroShadow}
        alt=""
        className="pointer-events-none absolute right-0 top-0 z-0 h-auto w-[170px] select-none opacity-[0.64] sm:w-[210px] md:w-[235px] lg:w-[265px] lg:opacity-[0.74]"
        priority
      />
      <Image
        src={images.rightHeroImg}
        alt=""
        className="pointer-events-none absolute right-[-64px] top-[385px] z-[1] h-auto w-[309px] origin-top-left rotate-[37deg] select-none opacity-30 sm:rotate-0 sm:w-[136px] md:right-[-6px] md:top-[66px] md:w-[152px] md:opacity-50 lg:right-[-4px] lg:top-[76px] lg:w-[172px] lg:opacity-60"
        priority
      />
      <Image
        src={images.middleHeroImg}
        alt=""
        className="pointer-events-none absolute left-1/2 top-[82px] z-0 h-auto w-[min(118vw,520px)] -translate-x-1/2 select-none opacity-[0.18] sm:w-[min(104vw,620px)] md:w-[min(96vw,700px)] lg:top-[68px] lg:w-[min(92vw,762px)] lg:opacity-[0.26]"
        priority
      />

      <div className="relative z-[10] w-full border-b border-[rgba(68,129,203,0.34)]">
        {/* Header Container */}
        <header className="relative mx-auto flex min-h-[51px] w-full max-w-[1220px] items-center justify-between gap-4 px-4 sm:min-h-[70px] sm:px-6 md:min-h-[70px] md:px-10 lg:min-h-[74px] lg:px-8">
          <Link href="/" aria-label="Eagle Likes home" className="shrink-0 z-[51]">
            <Image src={images.appLogo} alt="Eagle Likes" priority className="h-auto w-[110px] sm:w-[185px] lg:w-[215px]" />
          </Link>

          {/* Desktop Navigation & Mobile Drawer Nav */}
          <nav
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-y-6 bg-[rgba(8,24,43,0.98)] p-6 transition-all duration-300 md:static md:z-auto md:flex-row md:w-auto md:flex-1 md:gap-x-3.5 md:bg-transparent md:p-0 lg:gap-x-4 xl:gap-x-5 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"
              }`}
            aria-label="Primary navigation"
          >
            {primaryNav.map((item) => (
              <Link
                key={item}
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center gap-1.5 text-[16px] font-semibold tracking-[0.02em] text-[#d6e3f7] no-underline transition-colors duration-200 hover:text-white md:text-[12px] lg:text-[13px] xl:text-[14px]"
              >
                <span>{item}</span>
                <span className="text-[10px] leading-none text-[#69adff]">
                  <Image src={images.arrow_down} alt="" />
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 z-[51]">
            {/* Mobile Rating Display */}
            <div className="flex items-center gap-2.5 md:hidden">
              <span className="text-[14px] font-semibold capitalize text-white" style={{ fontFamily: "var(--font-open-sans)" }}>5.0</span>
              <div className="flex items-center gap-[6.28px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="flex h-[17.58px] w-[17.58px] items-center justify-center rounded-[3.14px] bg-[#01AAFF]">
                    <svg width="11" height="11" viewBox="0 0 18 18" fill="none">
                      <path d="M8.04785 1.19043C8.34738 0.269579 9.65067 0.269588 9.9502 1.19043L11.4951 5.94629H16.4951C17.4638 5.94629 17.8665 7.18543 17.083 7.75488L13.0381 10.6943L14.583 15.4492C14.8824 16.3705 13.8277 17.1368 13.0439 16.5674L8.99902 13.6289L4.9541 16.5674C4.17038 17.1368 3.11569 16.3705 3.41504 15.4492L4.95996 10.6943L0.915039 7.75488C0.131521 7.18543 0.534272 5.94629 1.50293 5.94629H6.50293L8.04785 1.19043Z" fill="white" stroke="white" />
                    </svg>
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/"
              className="hidden items-center gap-1.5 rounded-[8px] border border-[rgba(110,162,224,0.42)] bg-[rgba(8,24,43,0.94)] no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:inline-flex sm:h-auto sm:px-[14px] sm:py-[9px] sm:text-[12px] sm:font-bold sm:text-white md:text-[13px]"
            >
              <Image src={images.userIcon} alt="" className="sm:h-auto sm:w-auto" />
              <span>Login</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-7 w-7 flex-col items-center justify-center gap-[4px] rounded-[8px] border border-[rgba(110,162,224,0.3)] bg-[rgba(8,24,43,0.8)] md:hidden"
              aria-label="Toggle menu"
            >
              <span className={`h-[2px] w-4 bg-white transition-transform duration-300 ${isMenuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-4 bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-4 bg-white transition-transform duration-300 ${isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </button>
          </div>
        </header>
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-[1220px] px-4 pb-[17px] sm:px-6 md:px-10 md:pb-10 lg:px-8">
        <div className="pt-[43px] sm:pt-16 md:pt-20 lg:pt-[96px]">
          <div className="w-full text-center flex flex-col justify-center items-center mx-auto max-w-[1191px]">
            <h1 className="m-0 max-w-[333px] text-[26px] font-semibold leading-[32px] tracking-normal text-white text-balance md:max-w-none md:text-[clamp(1.95rem,3.6vw,3.75rem)] md:font-extrabold md:leading-[1.06] md:tracking-[-0.04em]">
              Buy Tiktok and Instagram Followers and Views & Likes and{" "}
              <span className="text-[#04a9ff]">other interactions!</span>
            </h1>
            <p className="mx-auto mt-[25px] max-w-[345px] text-center font-[var(--font-inter)] text-[14px] font-normal leading-[24px] text-[#99A1AF] sm:text-[19px] sm:leading-[30px] md:max-w-[880px] lg:mt-[18px] lg:text-[22px] lg:leading-[35px]" style={{ letterSpacing: '0px' }}>
              Enhance your brand&apos;s online presence and increase engagement
              with our social media growth solutions.
            </p>
          </div>

          {/* Service Tabs + Featured Buttons Grid */}
          <div className="mx-auto mt-[37px] w-full max-w-[346px] sm:mt-12 sm:max-w-[1240px] lg:mt-14">
            {/* Top Service Tabs */}
            <div className="flex h-[58px] items-center justify-evenly rounded-t-[10px] border border-[rgba(255,255,255,0.20)] bg-[rgba(255,255,255,0.10)] px-[15px] shadow-[0_2px_2px_rgba(0,0,0,0.10)] sm:grid sm:h-auto sm:grid-cols-4 sm:justify-start sm:gap-0 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:shadow-none">
              {topServiceTabs.map((service) => (
                <ServiceTabCard key={service.name} service={service} />
              ))}
            </div>

            {/* Featured Service Buttons */}
            <div className="grid grid-cols-1 gap-[15px] px-[15px] py-[28px] sm:grid-cols-2 sm:gap-5 sm:border sm:border-[rgba(0,0,0,0.05)] sm:bg-gradient-to-b sm:from-[rgba(0,0,0,0.10)] sm:to-[rgba(55,55,55,0.07)] sm:px-[128px] sm:py-9 sm:shadow-[0_4px_4px_rgba(0,0,0,0.05)] max-lg:sm:px-6 max-md:sm:px-4">
              {featuredServiceButtons.map((label) => (
                <Link
                  key={label}
                  href="/"
                  className="flex h-11 items-center justify-center rounded-[10px] bg-gradient-to-r from-[#c363e3] via-[#d23aa2] to-[#ee1d52] px-7 text-[14px] font-bold text-white no-underline outline outline-[0.3px] outline-[rgba(0,0,0,0.15)] transition-opacity hover:opacity-90 sm:h-[51px] sm:uppercase sm:tracking-wide md:text-[16px]"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Bottom Service Tabs */}
            <div className="flex h-[58px] items-center justify-evenly rounded-b-[10px] border border-[rgba(255,255,255,0.20)] bg-[rgba(255,255,255,0.10)] px-[15px] shadow-[0_2px_2px_rgba(0,0,0,0.10)] sm:grid sm:h-auto sm:grid-cols-4 sm:justify-start sm:gap-0 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:shadow-none">
              {bottomServiceTabs.map((service) => (
                <ServiceTabCard key={service.name} service={service} bottom />
              ))}
            </div>

            {/* Activity Bar */}
            <div className="flex flex-wrap items-center justify-center gap-[18px] px-4 pt-[34px] sm:border-t sm:border-[rgba(0,0,0,0.16)] sm:px-6 sm:py-5 lg:px-8">
              {/* Star Rating */}
              <div className="flex items-center gap-2.5">
                {Array.from({ length: reviewStars }).map((_, i) => (
                  <span
                    key={i}
                    className="flex h-[26px] w-[26px] items-center justify-center rounded-[5px] bg-[#01AAFF] sm:h-7 sm:w-7"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M8.04785 1.19043C8.34738 0.269579 9.65067 0.269588 9.9502 1.19043L11.4951 5.94629H16.4951C17.4638 5.94629 17.8665 7.18543 17.083 7.75488L13.0381 10.6943L14.583 15.4492C14.8824 16.3705 13.8277 17.1368 13.0439 16.5674L8.99902 13.6289L4.9541 16.5674C4.17038 17.1368 3.11569 16.3705 3.41504 15.4492L4.95996 10.6943L0.915039 7.75488C0.131521 7.18543 0.534272 5.94629 1.50293 5.94629H6.50293L8.04785 1.19043Z" fill="white" stroke="white" />
                    </svg>
                  </span>
                ))}
              </div>

              {/* Delivery Status Bar */}
              <div className="flex h-[34px] items-center gap-[18px] rounded-[6px] bg-[rgba(1,170,255,0.80)] px-[17px] sm:h-[46px] sm:gap-5 sm:rounded-[11px] sm:px-6">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#1ED760] shadow-[0_0_8px_rgba(30,215,96,0.6)] sm:h-2.5 sm:w-2.5" />
                  <span className="whitespace-nowrap text-[12px] text-white sm:text-[14px]">
                    <strong>500 views</strong> delivered
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                    <circle cx="9" cy="9" r="9" fill="#1DA1F2" />
                    <path d="M5 9.5L7.5 12L13 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="whitespace-nowrap text-[12px] text-white sm:text-[14px]">6 mins ago</span>
                </div>
              </div>

              {/* Apple Play Button */}
              <div className="flex h-[34px] items-center gap-2.5 rounded-[8px] bg-white px-5 sm:h-[46px] sm:rounded-[10px]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.2515 2.87361C13.0235 2.11311 13.5438 1.05389 13.4014 0C12.289 0.0360003 10.9432 0.604038 10.1455 1.36364C9.42922 2.03773 8.80395 3.11484 8.97204 4.14804C10.213 4.22633 11.4796 3.635 12.2515 2.87361ZM15.0342 9.56259C15.0653 12.2869 17.9679 13.1931 18 13.2048C17.9764 13.2687 17.5364 14.4961 16.4711 15.7651C15.5492 16.8613 14.5931 17.953 13.0867 17.9764C11.607 17.9989 11.1305 17.2619 9.43779 17.2619C7.74611 17.2619 7.2172 17.9529 5.81675 17.9988C4.36277 18.0429 3.25462 16.8129 2.32634 15.7203C0.426954 13.4856 -1.02381 9.40516 0.924822 6.65118C1.89272 5.28409 3.62186 4.41705 5.49983 4.39545C6.92704 4.37295 8.27503 5.17768 9.14763 5.17768C10.0202 5.17768 11.6584 4.21018 13.38 4.35238C14.1006 4.37668 16.1242 4.58901 17.4229 6.1379C17.318 6.191 15.0085 7.2856 15.0342 9.56259Z" fill="black" />
                </svg>
                <span className="text-[14px] font-semibold text-black sm:text-[16px]">Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
