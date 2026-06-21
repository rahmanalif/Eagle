import { footerLinkGroups } from "@/constants";

export function FooterSection() {
  const navTitles = footerLinkGroups.slice(0, 4).map((g) => g.title);
  const instagramGroup = footerLinkGroups[0];
  const tiktokGroup = footerLinkGroups[1];
  const youtubeGroup = footerLinkGroups[2];
  const toolsGroup = footerLinkGroups[3];
  const myAccountGroup = footerLinkGroups[4];
  const authGroup = footerLinkGroups[5];

  return (
    <footer className="bg-black px-6 pb-6 pt-[77px] md:px-10 lg:px-[75px] lg:pb-8">
      <div className="mx-auto max-w-[1288px]">
        <div className="flex items-center gap-9">
          {navTitles.map((title) => (
            <span
              key={title}
              className="text-[22px] font-semibold leading-[24px] text-white"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {title}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:gap-[19px]">
          <div className="flex flex-1 flex-wrap gap-[47px]">
            {[instagramGroup, tiktokGroup, youtubeGroup].map((group) => {
              const [heading, ...links] = group.links;
              return (
                <div key={heading} className="min-w-[124px]">
                  <h3
                    className="text-[22px] font-medium leading-[24px] text-white"
                    style={{ fontFamily: "'Rethink Sans', sans-serif" }}
                  >
                    {heading}
                  </h3>
                  <div className="mt-7 space-y-6">
                    {links.map((link) => (
                      <p
                        key={link}
                        className="whitespace-nowrap text-[14.5px] leading-[27px] text-white"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        {link}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="min-w-[200px] flex-1">
              <h3
                className="text-[22px] font-medium leading-[24px] text-white"
                style={{ fontFamily: "'Rethink Sans', sans-serif" }}
              >
                {toolsGroup.links[0]}
              </h3>
              <div className="mt-7 flex gap-9">
                <div className="space-y-6">
                  {toolsGroup.links.slice(1).map((link) => (
                    <p
                      key={link}
                      className="whitespace-nowrap text-[14.5px] leading-[27px] text-white"
                      style={{ fontFamily: "'Open Sans', sans-serif" }}
                    >
                      {link}
                    </p>
                  ))}
                </div>
                <div className="space-y-6">
                  {myAccountGroup.links.map((link) => (
                    <p
                      key={link}
                      className="whitespace-nowrap text-[14.5px] leading-[27px] text-white"
                      style={{ fontFamily: "'Open Sans', sans-serif" }}
                    >
                      {link}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-[140px]">
            <h3
              className="text-[22px] font-medium leading-[24px] text-white"
              style={{ fontFamily: "'Rethink Sans', sans-serif" }}
            >
              My Account
            </h3>
            <div className="mt-7 space-y-[18px]">
              {authGroup.links.map((link, i) => (
                <p
                  key={link}
                  className={`text-[14.5px] leading-[27px] text-white ${i === 0 ? "underline" : "capitalize"}`}
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {link.toLowerCase() === "sign in" ? "sign in" : link}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2">
          <div className="h-4 w-4 bg-white" />
          <span className="text-xl font-normal uppercase text-white" style={{ fontFamily: "Inter, sans-serif" }}>
            En
          </span>
        </div>

        <div className="mt-[50px] border-t border-[rgba(80,80,80,0.55)]" />

        <div className="mt-[25px] flex flex-col items-center justify-between gap-5 md:flex-row">
          <p
            className="text-base leading-[26px] text-white"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Copyright © 2025 Eagle Likes, All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            <div className="flex h-[27px] w-[39px] items-center justify-center rounded-[5px] border border-[#D6DCE5] bg-white shadow-[0_2px_20px_rgba(183,183,183,0.08),0_20px_40px_rgba(183,183,183,0.08)]">
              <svg width="28" height="10" viewBox="0 0 28 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6038 0.164384L11.768 9.15003H9.548L11.3842 0.164384H13.6038ZM22.9441 5.96645L24.1128 2.59203L24.7854 5.96645H22.9441ZM25.421 9.15003H27.4744L25.6825 0.164384H23.7872C23.3613 0.164384 23.0019 0.423757 22.8419 0.823625L19.5113 9.15003H21.8426L22.3055 7.80823H25.1537L25.421 9.15003ZM19.627 6.21615C19.6365 3.84453 16.4947 3.71399 16.5164 2.6546C16.5229 2.3318 16.8166 1.98939 17.4579 1.90151C17.7765 1.85799 18.6525 1.82472 19.6471 2.30393L20.0366 0.398446C19.5024 0.195384 18.8149 0 17.9598 0C15.7657 0 14.2212 1.2215 14.2082 2.97057C14.1943 4.26402 15.3107 4.98583 16.1519 5.41585C17.0168 5.85638 17.3074 6.13851 17.3036 6.53241C17.2979 7.13562 16.6137 7.40125 15.9754 7.41177C14.859 7.43026 14.2112 7.09637 13.6948 6.84439L13.2926 8.8133C13.8111 9.06272 14.7685 9.27944 15.7619 9.29053C18.0937 9.29053 19.6194 8.0841 19.627 6.21615ZM10.4316 0.164384L6.83479 9.15003H4.48771L2.71783 1.97886C2.61027 1.53719 2.51684 1.37565 2.19008 1.18937C1.65689 0.886478 0.775477 0.601793 0 0.425464L0.0529659 0.164384H3.83039C4.3117 0.164384 4.74494 0.499977 4.85413 1.08044L5.78905 6.28043L8.09918 0.164384H10.4316Z" fill="#1434CB"/>
              </svg>
            </div>
            <div className="flex h-[27px] w-[39px] items-center justify-center rounded-[5px] border border-[#D6DCE5] bg-[#006FCF] shadow-[0_2px_20px_rgba(183,183,183,0.08),0_20px_40px_rgba(183,183,183,0.08)]">
              <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M21 1.00408H17.8027L16.1315 5.14534L14.3875 1.00408H11.1177V7.45234L7.77506 1.00408H5.08662L1.74399 7.59232H4.06916L4.72313 6.27475H8.21111L8.86508 7.59232H13.2249V3.01186L15.1868 7.59232H17.0034L18.9653 3.01186V7.59232H21V8.59622H18.3113L16.1315 10.6668L13.8789 8.59622H4.65057V15.1845H13.8063L16.0587 13.0512L18.3113 15.1845H21V16H17.8027L16.0587 14.3687L14.3147 16H3.48798V8.47071H0L4.35986 0H8.57438L10.1002 2.88635V0H15.3322L16.2041 2.19614L17.0762 0H21V1.00408ZM21 10.0393L19.0381 11.8589L21 13.6785V15.1845L17.4395 11.8589L21 8.59622V10.0393ZM11.1177 15.1845V13.6159H6.75782V12.612H11.0449V11.106H6.75782V10.1021H11.1177V8.59622L14.7508 11.8589L11.1177 15.1845ZM5.3771 4.83148L6.39455 2.69818L7.41179 4.83148H5.3771Z" fill="white"/>
              </svg>
            </div>
            <div className="flex h-[27px] w-[39px] items-center justify-center rounded-[5px] border border-[#D6DCE5] bg-white shadow-[0_2px_20px_rgba(183,183,183,0.08),0_20px_40px_rgba(183,183,183,0.08)]">
              <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.245 1.60351H8.75531V13.3965H15.245V1.60351Z" fill="#FF5F00"/>
                <path d="M9.1674 7.5C9.16638 6.36425 9.42089 5.24315 9.91167 4.22157C10.4025 3.19999 11.1167 2.30471 12.0002 1.6035C10.9061 0.733844 9.59203 0.193016 8.20831 0.0428346C6.82459 -0.107347 5.427 0.139171 4.17528 0.754225C2.92356 1.36928 1.86822 2.32805 1.12988 3.52094C0.391541 4.71383 0 6.09272 0 7.5C0 8.90728 0.391541 10.2862 1.12988 11.4791C1.86822 12.672 2.92356 13.6307 4.17528 14.2458C5.427 14.8608 6.82459 15.1073 8.20831 14.9572C9.59203 14.807 10.9061 14.2662 12.0002 13.3965C11.1167 12.6953 10.4025 11.8 9.91169 10.7784C9.4209 9.75685 9.16638 8.63575 9.1674 7.5Z" fill="#EB001B"/>
                <path d="M24 7.5C24.0001 8.90726 23.6086 10.2861 22.8703 11.479C22.132 12.6719 21.0766 13.6307 19.825 14.2458C18.5733 14.8608 17.1757 15.1073 15.792 14.9572C14.4083 14.807 13.0943 14.2662 12.0002 13.3965C12.8829 12.6946 13.5966 11.7992 14.0873 10.7777C14.578 9.75632 14.833 8.63557 14.833 7.5C14.833 6.36443 14.578 5.24368 14.0873 4.22226C13.5966 3.20084 12.8829 2.30542 12.0002 1.6035C13.0943 0.733843 14.4083 0.193013 15.792 0.0428326C17.1757 -0.107347 18.5733 0.139182 19.825 0.754242C21.0766 1.3693 22.132 2.32807 22.8703 3.52097C23.6086 4.71386 24.0001 6.09274 24 7.5Z" fill="#F79E1B"/>
                <path d="M23.2924 12.1474V11.906H23.3887V11.8568H23.1435V11.906H23.2398V12.1474H23.2924ZM23.7684 12.1474V11.8563H23.6933L23.6068 12.0566L23.5203 11.8563H23.4451V12.1474H23.4982V11.9279L23.5793 12.1172H23.6343L23.7154 11.9274V12.1474H23.7684Z" fill="#F79E1B"/>
              </svg>
            </div>
            <div className="flex h-[27px] w-[39px] items-center justify-center rounded-[5px] border border-[#D6DCE5] bg-white shadow-[0_2px_20px_rgba(183,183,183,0.08),0_20px_40px_rgba(183,183,183,0.08)]">
              <svg width="28" height="12" viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.24274 1.46752C5.56933 1.07247 5.79095 0.542038 5.7325 0C5.25442 0.0229898 4.671 0.305025 4.33324 0.700381C4.02996 1.03894 3.76153 1.59158 3.83151 2.1109C4.36819 2.15592 4.90437 1.85148 5.24274 1.46752Z" fill="black"/>
                <path d="M5.72642 2.2123C4.94704 2.16741 4.28437 2.64008 3.91218 2.64008C3.53978 2.64008 2.96983 2.23493 2.35338 2.24585C1.55103 2.25724 0.806539 2.69596 0.399381 3.39373C-0.438074 4.7896 0.178377 6.86018 0.992757 7.99704C1.38824 8.55948 1.86486 9.17878 2.49289 9.15653C3.08626 9.13401 3.31884 8.78496 4.04012 8.78496C4.76086 8.78496 4.97037 9.15653 5.59849 9.14527C6.24987 9.13401 6.6571 8.58255 7.05258 8.01956C7.50627 7.37841 7.692 6.75932 7.70368 6.72533C7.69199 6.71408 6.44763 6.25242 6.43609 4.86815C6.42434 3.70908 7.41306 3.15776 7.45959 3.12356C6.90125 2.32497 6.02887 2.23493 5.72642 2.2123Z" fill="black"/>
                <path d="M12.5127 0.643684C14.2066 0.643684 15.3862 1.77291 15.3862 3.41698C15.3862 5.06692 14.1824 6.20201 12.4702 6.20201H10.5946V9.08647H9.23954V0.643682L12.5127 0.643684ZM10.5946 5.10201H12.1495C13.3293 5.10201 14.0008 4.48775 14.0008 3.42285C14.0008 2.35806 13.3293 1.74955 12.1556 1.74955H10.5946V5.10201Z" fill="black"/>
                <path d="M15.7403 7.33709C15.7403 6.26045 16.5933 5.59935 18.1059 5.51742L19.8482 5.41799V4.94411C19.8482 4.25954 19.3702 3.84999 18.5718 3.84999C17.8154 3.84999 17.3434 4.20097 17.2286 4.75102H15.9944C16.067 3.63929 17.047 2.82018 18.6201 2.82018C20.1628 2.82018 21.1489 3.61006 21.1489 4.84458V9.08645H19.8965V8.07426H19.8664C19.4974 8.75883 18.6927 9.19174 17.8578 9.19174C16.6115 9.19174 15.7403 8.44284 15.7403 7.33709ZM19.8482 6.78128V6.29567L18.2812 6.38922C17.5007 6.44193 17.0592 6.77541 17.0592 7.30199C17.0592 7.8402 17.519 8.19129 18.2208 8.19129C19.1343 8.19129 19.8482 7.58277 19.8482 6.78128Z" fill="black"/>
                <path d="M22.3313 11.3508V10.3268C22.4279 10.3502 22.6457 10.3502 22.7547 10.3502C23.3597 10.3502 23.6864 10.1045 23.886 9.47264C23.886 9.4609 24.001 9.09819 24.001 9.09232L21.7021 2.93135H23.1176L24.7271 7.93973H24.7511L26.3606 2.93135H27.74L25.3561 9.4082C24.8118 10.9003 24.1826 11.38 22.8637 11.38C22.7547 11.38 22.4279 11.3683 22.3313 11.3508Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
