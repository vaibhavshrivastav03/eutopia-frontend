import svgPaths from "./svg-fmb231jy1y";
import imgOgunlanaOreoluwa from "figma:asset/f0f1699a36967683aad1847d458152dcbf694b2c.png";

function Container3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-1/2 top-[calc(50%-12px)]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[24px] text-center tracking-[-0.36px] w-[219.52px]">
        <p className="leading-[30px]">Ogunlana Oreoluwa</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-1/2 top-[calc(50%+15px)]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[16px] text-center w-[153.42px]">
        <p className="leading-[24px]">Health ID: #1234567</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="-translate-x-1/2 absolute h-[54px] left-1/2 top-[144px] w-[219.52px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function OgunlanaOreoluwa() {
  return (
    <div className="absolute left-[39.76px] pointer-events-none rounded-[9999px] size-[140px] top-0" data-name="Ogunlana Oreoluwa">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOgunlanaOreoluwa} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 rounded-[9999px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="-translate-x-1/2 absolute h-[198px] left-1/2 top-0 w-[219.52px]" data-name="Container">
      <Container2 />
      <OgunlanaOreoluwa />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute inset-[24px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function ProfileHero() {
  return (
    <div className="col-1 h-[246px] ml-0 mt-0 relative row-1 w-[390px]" data-name="Profile Hero">
      <Container />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] pb-[16px] pt-[8px] right-[16px] top-0" data-name="Heading 3">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.27px] w-full">
        <p className="leading-[22.5px]">Personal Details</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
        <g id="Container">
          <path d={svgPaths.p8dd9500} fill="var(--fill-0, #1577D3)" fillOpacity="0.7" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[82.42px]">
        <p className="leading-[21px]">Date of Birth</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative">
        <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-right w-[85.48px]">
          <p className="leading-[21px]">May 12, 1995</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(21,119,211,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13px] pt-[12px] relative w-full">
        <Container5 />
        <Container8 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
        <g id="Container">
          <path d={svgPaths.p17104880} fill="var(--fill-0, #1577D3)" fillOpacity="0.7" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[72.73px]">
        <p className="leading-[21px]">Blood Type</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative">
        <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-right w-[18.52px]">
          <p className="leading-[21px]">O+</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(21,119,211,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13px] pt-[12px] relative w-full">
        <Container9 />
        <Container12 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[15px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15">
        <g id="Container">
          <path d={svgPaths.p2a5a6200} fill="var(--fill-0, #1577D3)" fillOpacity="0.7" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[128.86px]">
        <p className="leading-[21px]">Emergency Contact</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-right w-[117.7px]">
        <p className="leading-[21px]">John Doe (+234...)</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[12px] relative w-full">
        <Container14 />
        <Container17 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[16px] p-[17px] right-[16px] rounded-[12px] top-[47px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(21,119,211,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <HorizontalBorder />
      <HorizontalBorder1 />
      <Container13 />
    </div>
  );
}

function PersonalDetailsSection() {
  return (
    <div className="col-1 h-[218px] ml-0 mt-[246px] relative row-1 w-[390px]" data-name="Personal Details Section">
      <Heading1 />
      <BackgroundBorderShadow />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] tracking-[0.7px] uppercase w-full">
          <p className="leading-[20px]">Account Settings</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[83.16px]">
        <p className="leading-[24px]">Edit Profile</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(21,119,211,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative w-full">
          <Container18 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p25774b00} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[162.33px]">
        <p className="leading-[24px]">{`Subscription & Billing`}</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container22 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Button />
        <Button1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(21,119,211,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function AccountSettings() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Account Settings">
      <Heading2 />
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] tracking-[0.7px] uppercase w-full">
          <p className="leading-[20px]">Notification Preferences</p>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[20.05px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.05">
        <g id="Container">
          <path d={svgPaths.p3f50100} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[136.5px]">
        <p className="leading-[24px]">Push Notifications</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <div className="bg-[#1577d3] h-[24px] rounded-[9999px] shrink-0 w-[44px]" data-name="Background" />
        <div className="absolute bg-white left-[22px] rounded-[9999px] size-[20px] top-[2px]" data-name="Background+Border">
          <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(21,119,211,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative w-full">
          <Container26 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[127.58px]">
        <p className="leading-[24px]">Email Newsletter</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container30 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <HorizontalBorder2 />
        <Button2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(21,119,211,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function NotificationPreferences() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Notification Preferences">
      <Heading3 />
      <BackgroundBorderShadow2 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] tracking-[0.7px] uppercase w-full">
          <p className="leading-[20px]">{`Security & Privacy`}</p>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 21">
        <g id="Container">
          <path d={svgPaths.p12930f00} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[133.66px]">
        <p className="leading-[24px]">Change Password</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(21,119,211,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative w-full">
          <Container34 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[19.964px] relative shrink-0 w-[18.049px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0489 19.9643">
        <g id="Container">
          <path d={svgPaths.p18018100} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[186.53px]">
        <p className="leading-[24px]">Biometric Authentication</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <div className="bg-[#1577d3] h-[24px] rounded-[9999px] shrink-0 w-[44px]" data-name="Background" />
        <div className="absolute bg-white left-[22px] rounded-[9999px] size-[20px] top-[2px]" data-name="Background+Border">
          <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(21,119,211,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative w-full">
          <Container38 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p15aec574} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[103.81px]">
        <p className="leading-[24px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container42 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Button3 />
        <Button4 />
        <Button5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(21,119,211,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function SecurityPrivacy() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Security & Privacy">
      <Heading4 />
      <BackgroundBorderShadow3 />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="var(--fill-0, #DC2626)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonLogout() {
  return (
    <div className="bg-[rgba(239,68,68,0.1)] content-stretch flex gap-[7.99px] items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Button - Logout">
      <Container46 />
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[16px] text-center w-[53.38px]">
        <p className="leading-[24px]">Logout</p>
      </div>
    </div>
  );
}

function MenuSections() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Sections">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[96px] px-[16px] relative w-full">
        <AccountSettings />
        <NotificationPreferences />
        <SecurityPrivacy />
        <ButtonLogout />
      </div>
    </div>
  );
}

function MenuSectionsMargin() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-[464px] pt-[32px] relative row-1 w-[390px]" data-name="Menu Sections:margin">
      <MenuSections />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p1820480} fill="var(--fill-0, #A1AEC1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#a1aec1] text-[10px] w-[28.068px]">
        <p className="leading-[15px]">Home</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container47 />
        <Margin />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.pc679c40} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[38.483px]">
        <p className="leading-[15px]">Records</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container48 />
        <Margin1 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p8fed400} fill="var(--fill-0, #A1AEC1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#a1aec1] text-[10px] w-[39.483px]">
        <p className="leading-[15px]">Hospital</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container49 />
        <Margin2 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[10px] w-[30.876px]">
        <p className="leading-[15px]">Profile</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container50 />
        <Margin3 />
      </div>
    </div>
  );
}

function BottomNavigation() {
  return (
    <div className="bg-white col-1 content-stretch flex gap-[43.3px] items-center max-w-[448px] ml-0 mt-[1218px] pb-[4px] pl-[29.64px] pr-[29.67px] pt-[5px] relative row-1 w-[390px]" data-name="Bottom Navigation">
      <div aria-hidden="true" className="absolute border-[#1577d3] border-solid border-t inset-0 pointer-events-none" />
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <ProfileHero />
      <PersonalDetailsSection />
      <MenuSectionsMargin />
      <BottomNavigation />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-[#f6f7f8] content-stretch flex flex-col items-start left-0 min-h-[1312px] right-0 top-[59px]" data-name="Body">
      <Group1 />
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p300a1100} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container52 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] text-center tracking-[-0.27px] w-[55.11px]">
          <p className="leading-[22.5px]">Profile</p>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative rounded-[12px] shrink-0" data-name="Button">
      <Container54 />
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end relative w-full">
        <Button6 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#f6f7f8] content-stretch flex items-center justify-between left-0 pb-[9px] pt-[16px] px-[16px] top-0 w-[390px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(21,119,211,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container51 />
      <Heading />
      <Container53 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <Header />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group3 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Body />
      <Group2 />
    </div>
  );
}