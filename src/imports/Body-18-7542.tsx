import svgPaths from "./svg-vlcoya89dy";
import imgTosinOgunlana from "figma:asset/a2edaaf67c68dfa0e9afbb8b7e9073f7c54f9004.png";

function Svg() {
  return (
    <div className="h-[24px] relative shrink-0 w-[22.52px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.52 24">
        <g id="SVG">
          <path d={svgPaths.p2e009000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.87667" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[71.57px] relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.45px] uppercase w-[177.9px]">
        <p className="mb-0">Emergency Blood</p>
        <p>Request</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Svg />
      <Heading />
    </div>
  );
}

function Timer() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Timer">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[48.02px]">
        <p className="leading-[24px]">02:14</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <Container1 />
          <Timer />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-[358px]" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#fef2f2] text-[12px] w-[276.8px]">
        <p className="leading-[16px]">Immediate blood matching and hospital coordination</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#d91e18] content-stretch flex flex-col items-center left-0 pb-[8px] right-0 top-0" data-name="Header">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Header:shadow" />
      <Container />
      <Container2 />
    </div>
  );
}

function TosinOgunlana() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[80px]" data-name="Tosin Ogunlana">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTosinOgunlana} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f1f5f9] border-solid inset-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function PatientPhoto() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex flex-col items-start left-[16px] top-[16px] w-[80px]" data-name="Patient Photo">
      <TosinOgunlana />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex flex-col items-start px-[9px] py-[5px] relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#fecaca] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#d91e18] text-[14px] w-[19.08px]">
        <p className="leading-[20px]">O+</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[25px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-[149.56px]">
        <p className="leading-[25px]">Tosin Ogunlana</p>
      </div>
      <BackgroundBorder />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p324b57c0} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1425e780} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] w-[75.16px]">
        <p>
          <span className="leading-[16px]">{`Genotype: `}</span>
          <span className="font-['Nimbus_Sans:Bold',sans-serif] leading-[16px] not-italic">AS</span>
        </p>
      </div>
    </div>
  );
}

function Genotype() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Genotype">
      <Svg1 />
      <Container5 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p26572700} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#dc2626] text-[12px] w-[110.8px]">
        <p className="leading-[16px]">Allergies: Penicillin</p>
      </div>
    </div>
  );
}

function Allergies() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Allergies">
      <Svg2 />
      <Container6 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p381bdc00} fill="var(--fill-0, #1D4ED8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1d4ed8] text-[12px] w-[97.09px]">
        <p className="leading-[16px]">+234 123 456 789</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <Svg3 />
      <Container7 />
    </div>
  );
}

function EmergencyContact() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0 w-full" data-name="Emergency Contact">
      <Background />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Genotype />
      <Allergies />
      <EmergencyContact />
    </div>
  );
}

function PatientDetails() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[16px_16px_16px_112px] items-start" data-name="Patient Details">
      <Container3 />
      <Container4 />
    </div>
  );
}

function SectionPatientProfileCard() {
  return (
    <div className="absolute bg-white h-[138px] left-[16px] right-[16px] rounded-[16px] top-0" data-name="Section - Patient Profile Card">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <PatientPhoto />
      <PatientDetails />
    </div>
  );
}

function Svg4() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p1f4d0580} fill="var(--fill-0, #F59E0B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[36px] pb-[0.75px] pr-[19.27px] top-[-0.75px]" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[35px] justify-center leading-[17.5px] not-italic relative shrink-0 text-[#d91e18] text-[14px] w-[266.73px]">
        <p className="mb-0">This request should only be triggered in</p>
        <p>confirmed emergency situations.</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[35px] left-[16px] right-[16px] top-[16px]" data-name="Container">
      <Svg4 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] w-[270.73px]">
        <p className="leading-[20px]">Patient is unconscious or unable to respond</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[20px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#fcd34d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] w-[239.17px]">
        <p className="leading-[20px]">Blood transfusion is medically required</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[20px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#fcd34d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Container12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[16px] right-[16px] top-[63px]" data-name="Container">
      <Label />
      <Label1 />
    </div>
  );
}

function SectionSafetyCheck() {
  return (
    <div className="absolute bg-[#fffbeb] border-[#fbbf24] border-l-4 border-solid h-[131px] left-[16px] right-[16px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[162px]" data-name="Section - Safety Check">
      <Container8 />
      <Container10 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p37f44b00} fill="var(--fill-0, #60A5FA)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(59,130,246,0.2)] relative rounded-[8px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative">
        <Svg5 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-[132.47px]">
        <p className="leading-[16px]">Current Location</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[247.58px]">
        <p className="leading-[20px]">Public Service Institute, Dutse, Abuja</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-[247.58px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function CurrentLocation() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[49px] items-center left-[16px] pb-[13px] right-[16px] top-[16px]" data-name="Current Location">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Overlay />
      <Container13 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">Target Hospital</p>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="SVG">
          <path d="M6.3 8.4L10.5 12.6L14.7 8.4" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute content-stretch flex flex-col h-[42px] items-start justify-center left-0 overflow-clip pl-[217.98px] pr-[9px] py-[10.5px] top-0 w-[247.98px]" data-name="image fill">
      <Svg6 />
    </div>
  );
}

function Container19() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[11px] overflow-clip right-[11px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[178.52px]">
        <p className="leading-[20px]">Nisa Premier Hospital, Abuja</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-[#1e293b] h-[42px] relative rounded-[8px] shrink-0 w-full" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#334155] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ImageFill />
      <Container19 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pb7adf00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center px-[8px] right-0 top-0" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Options />
      <Container20 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2563eb] content-stretch flex flex-col items-center justify-center px-[12px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[44.02px]">
        <p className="leading-[16px]">Change</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Button />
    </div>
  );
}

function NearestHospitalSelector() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] pt-[12px] right-[16px] top-[65px]" data-name="Nearest Hospital Selector">
      <Container16 />
      <Container17 />
    </div>
  );
}

function LocationSection() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] border-solid h-[161px] left-[16px] right-[16px] rounded-[12px] top-[317px]" data-name="Location Section">
      <CurrentLocation />
      <NearestHospitalSelector />
    </div>
  );
}

function Svg8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[21.98px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.98 24">
        <g clipPath="url(#clip0_18_7634)" id="SVG">
          <path d={svgPaths.p25aa1fc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83167" />
        </g>
        <defs>
          <clipPath id="clip0_18_7634">
            <rect fill="white" height="24" width="21.98" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[40.32px] pr-[40.33px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[1.8px] w-[195.37px]">
        <p className="mb-0">SEND EMERGENCY</p>
        <p>REQUEST</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[12px] items-center left-1/2 top-1/2" data-name="Container">
      <Svg8 />
      <Container22 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#d91e18] h-[96px] left-0 right-0 rounded-[16px] top-[16px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(239,68,68,0.3)]" data-name="Button:shadow" />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 px-[32px] right-0 top-[127px]" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] h-[50px] justify-center leading-[16.5px] not-italic relative shrink-0 text-[#94a3b8] text-[11px] text-center w-[283.14px]">
        <p className="mb-0">By tapping, you will notify hospital and blood logistics</p>
        <p className="mb-0">partners immediately. This action will initiate a high-priority</p>
        <p>dispatch protocol.</p>
      </div>
    </div>
  );
}

function SectionActionArea() {
  return (
    <div className="absolute h-[177px] left-[16px] right-[16px] top-[502px]" data-name="Section - Action Area">
      <Button1 />
      <Container23 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[679px] left-0 right-0 top-[128px]" data-name="Main">
      <SectionPatientProfileCard />
      <SectionSafetyCheck />
      <LocationSection />
      <SectionActionArea />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-gradient-to-b from-[#0f172a] relative size-full to-[#1e293b]" data-name="Body">
      <Header />
      <Main />
    </div>
  );
}