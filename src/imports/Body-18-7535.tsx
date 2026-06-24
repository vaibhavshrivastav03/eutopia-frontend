import svgPaths from "./svg-9qvtm5n6v1";

function Svg() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="SVG">
          <path d={svgPaths.p34d07300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function SuccessIconContainer() {
  return (
    <div className="bg-[#22c55e] relative rounded-[9999px] self-stretch shadow-[0px_0px_20px_0px_rgba(34,197,94,0.5)] shrink-0" data-name="Success Icon Container">
      <div className="content-stretch flex flex-col h-full items-start p-[16px] relative">
        <Svg />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[96px] items-start justify-center left-[24px] right-[24px] top-[48px]" data-name="Container">
      <SuccessIconContainer />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] right-[24px] top-[168px]" data-name="Heading 1">
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-center text-white tracking-[-0.75px] w-[183.09px]">
        <p className="leading-[36px]">Request Sent</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[35px] max-w-[320px] right-[35px] top-[212px]" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] h-[45px] justify-center leading-[22.5px] not-italic relative shrink-0 text-[#bfdbfe] text-[18px] text-center w-[261.23px]">
        <p className="mb-0">Hospital notified. Blood matching</p>
        <p>process initiated.</p>
      </div>
    </div>
  );
}

function MainHeader() {
  return (
    <div className="h-[289px] relative shrink-0 w-full" data-name="MainHeader">
      <Container />
      <Heading />
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Request Summary</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p37770e00} fill="var(--fill-0, #DC2626)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0" data-name="Background">
      <Svg1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-[59.5px]">
        <p className="leading-[16px]">Blood Type</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[24.53px]">
        <p className="leading-[22.5px]">O+</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[59.5px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Margin">
      <Container3 />
    </div>
  );
}

function BloodType() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Blood Type">
      <Background />
      <Margin />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1ecd3100} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0" data-name="Background">
      <Svg2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-[43.33px]">
        <p className="leading-[16px]">Hospital</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[168.67px]">
        <p className="leading-[22.5px]">XYZ Medical Center</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[168.67px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Margin">
      <Container6 />
    </div>
  );
}

function Hospital() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Hospital">
      <Background1 />
      <Margin1 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pe7a3ec0} id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p12e8b940} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0" data-name="Background">
      <Svg3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-[62.86px]">
        <p className="leading-[16px]">Famestamp</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[67.81px]">
        <p className="leading-[22.5px]">4:42 PM</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[67.81px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Margin">
      <Container9 />
    </div>
  );
}

function TimestampLocationPinPlaceholderFunctionality() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Timestamp (Location Pin Placeholder functionality)">
      <Background2 />
      <Margin2 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pb12b480} id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0" data-name="Background">
      <Svg4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-[59.22px]">
        <p className="leading-[16px]">Timestamp</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[67.81px]">
        <p className="leading-[22.5px]">4:42 PM</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[67.81px]" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Margin">
      <Container12 />
    </div>
  );
}

function ClockTimestamp() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Clock Timestamp">
      <Background3 />
      <Margin3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <BloodType />
      <Hospital />
      <TimestampLocationPinPlaceholderFunctionality />
      <ClockTimestamp />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16px] shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Section:shadow" />
        <Heading1 />
        <Container2 />
      </div>
    </div>
  );
}

function MainRequestDetails() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main - RequestDetails">
      <div className="content-stretch flex flex-col items-start pb-[72px] px-[24px] relative w-full">
        <Section />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[331.31px]">
          <p className="leading-[28px]">SEND EMERGENCY BLOOD REQUEST</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-center opacity-90 px-[16px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white w-[282.08px]">
        <p className="leading-[15px]">This will notify hospital and blood logistics partners immediately.</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative">
        <Container16 />
      </div>
    </div>
  );
}

function ButtonPrimaryEmergencyAction() {
  return (
    <div className="bg-[#e53935] content-stretch flex flex-col items-center justify-center pb-[20px] pt-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Button - Primary Emergency Action">
      <div aria-hidden="true" className="absolute border-[#7f1d1d] border-b-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button - Primary Emergency Action:shadow" />
      <Container15 />
      <Margin4 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p467c778} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCallHospital() {
  return (
    <div className="bg-[#16a34a] col-1 content-stretch flex flex-col gap-[4px] items-center justify-center justify-self-start pl-[40.05px] pr-[40.06px] py-[16px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Button - Call Hospital">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button - Call Hospital:shadow" />
      <Svg5 />
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[84.89px]">
        <p className="leading-[20px]">Call Hospital</p>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_18_7622)" id="SVG">
          <path d={svgPaths.p3d1b5880} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_18_7622">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonNotifyContact() {
  return (
    <div className="bg-[#334155] col-2 content-stretch flex flex-col gap-[4px] items-center justify-center justify-self-start px-[34.5px] py-[16px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Button - Notify Contact">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button - Notify Contact:shadow" />
      <Svg6 />
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[96px]">
        <p className="leading-[20px]">Notify Contact</p>
      </div>
    </div>
  );
}

function SecondaryActionsGrid() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_80px] relative shrink-0 w-full" data-name="Secondary Actions Grid">
      <ButtonCallHospital />
      <ButtonNotifyContact />
    </div>
  );
}

function FooterActions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer - Actions">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-[24px] px-[24px] relative w-full">
        <ButtonPrimaryEmergencyAction />
        <SecondaryActionsGrid />
      </div>
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#223e53] content-stretch flex flex-col items-start relative size-full" data-name="Body">
      <MainHeader />
      <MainRequestDetails />
      <FooterActions />
    </div>
  );
}