import svgPaths from "./svg-a434yprhrd";
import imgImage from "figma:asset/7cb7bd4be869ec324c255f98812f3576066c7689.png";
import imgImage1 from "figma:asset/6513c8a0a32221d53a8655ab473ae6b5e5c3633a.png";
import imgImage2 from "figma:asset/4f649e17c949a2543750da09312495c728c30dbf.png";

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[14px] tracking-[0.21px] w-[65.98px]">
          <p className="leading-[21px]">Active (3)</p>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#1577d3] border-b-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center py-[16px] relative">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[0.21px] w-[50.8px]">
          <p className="leading-[21px]">History</p>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center py-[16px] relative">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex gap-[32px] h-[54px] items-start pb-px relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Link />
      <Link1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[12px] px-[16px] right-0 top-[72px]" data-name="Container">
      <HorizontalBorder />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.27px] w-[170.52px]">
        <p className="leading-[22.5px]">Current Medications</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1577d3] text-[12px] w-[61.61px]">
        <p className="leading-[16px]">Update list</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[151.75px]">
        <p className="leading-[20px]">Dematraxone 50mg</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(21,119,211,0.1)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[10px] uppercase w-[28.64px]">
        <p className="leading-[15px]">Daily</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Overlay />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[21px]">1 tablet daily with food</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.p6d5e700} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[94.38px]">
        <p className="leading-[16px]">Dr. Sarah Jenkins</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container12 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 12.25">
        <g id="Container">
          <path d={svgPaths.pee94d00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[100.66px]">
        <p className="leading-[16px]">2 refills remaining</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container11 />
      <Margin />
      <Container15 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.p2db3a360} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[67.27px]">
        <p className="leading-[21px]">Refill Now</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1577d3] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] text-center w-[45.72px]">
        <p className="leading-[20px]">Details</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex h-[32px] items-center justify-center px-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container8 />
        <Container18 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex items-start justify-between p-[17px] relative w-full">
        <Container7 />
        <div className="relative rounded-[12px] shrink-0 size-[96px]" data-name="Image">
          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[12px]">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[120.48px]">
        <p className="leading-[20px]">Ventolin Inhaler</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(249,115,22,0.1)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#ea580c] text-[10px] uppercase w-[57.64px]">
        <p className="leading-[15px]">As Needed</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Overlay1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[21px]">1-2 puffs every 4-6 hours</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.p6d5e700} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[93.52px]">
        <p className="leading-[16px]">Dr. Michael Chen</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container27 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 12.25">
        <g id="Container">
          <path d={svgPaths.pee94d00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[100.84px]">
        <p className="leading-[16px]">0 refills remaining</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container26 />
      <Margin1 />
      <Container30 />
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p3307fb80} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] text-center w-[63.33px]">
        <p className="leading-[21px]">No Refills</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] text-center w-[54.36px]">
        <p className="leading-[20px]">Request</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex h-[32px] items-center justify-center px-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container36 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container23 />
        <Container33 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex items-start justify-between p-[17px] relative w-full">
        <Container22 />
        <div className="relative rounded-[12px] shrink-0 size-[96px]" data-name="Image">
          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[12px]">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[44.3px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[40px] justify-center leading-[20px] relative shrink-0 text-[#0f172a] text-[16px] w-[85.25px]">
        <p className="mb-0">Amoxicillin</p>
        <p>500mg</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(21,119,211,0.1)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[10px] uppercase w-[58.45px]">
        <p className="leading-[15px]">Antibiotic</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Overlay2 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[21px]">Take twice daily for 7 days</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.p6d5e700} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[94.38px]">
        <p className="leading-[16px]">Dr. Sarah Jenkins</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container42 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p3bb7dc80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[79.48px]">
        <p className="leading-[16px]">Ends in 4 days</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container41 />
      <Margin2 />
      <Container45 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.p28c03b80} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[14px] text-center w-[89.19px]">
        <p className="leading-[21px]">Set Reminder</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(21,119,211,0.2)] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Button4 />
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container38 />
        <Container48 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex items-start justify-between p-[17px] relative w-full">
        <Container37 />
        <div className="relative rounded-[12px] shrink-0 size-[96px]" data-name="Image">
          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[12px]">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[8px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 pb-[8px] pt-[7px] px-[16px] right-0 top-[138px]" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p6c8ea80} fill="var(--fill-0, #1577D3)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] w-[168.47px]">
        <p className="leading-[20px]">Need a new prescription?</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[32px] justify-center leading-[16px] relative shrink-0 text-[#475569] text-[12px] w-[286.57px]">
        <p className="mb-0">Book a quick telehealth consultation to discuss new</p>
        <p>symptoms or medication changes.</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Container">
          <path d={svgPaths.p20314340} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pt-[8px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[14px] text-center w-[122.7px]">
        <p className="leading-[20px]">Book Consultation</p>
      </div>
      <Container56 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0" data-name="Container">
      <Heading2 />
      <Container55 />
      <Button5 />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Container53 />
        <Container54 />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(21,119,211,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(21,119,211,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative w-full">
        <Container52 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[16px] py-[24px] right-0 top-[777.5px]" data-name="Container">
      <OverlayBorder />
    </div>
  );
}

function Container58() {
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

function Container57() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[48px]" data-name="Container">
      <Container58 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Heading 2">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.27px] w-full">
        <p className="leading-[22.5px]">Prescriptions</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center max-w-[480px] overflow-clip relative rounded-[12px] shrink-0" data-name="Button">
      <Container60 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[48px]" data-name="Container">
      <Button6 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#f6f7f8] content-stretch flex items-center justify-between left-0 pb-[8px] pt-[16px] px-[16px] right-0 top-0" data-name="Background">
      <Container57 />
      <Heading />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p1820480} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[10px] w-[28.068px]">
        <p className="leading-[15px]">Home</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container61 />
        <Margin3 />
      </div>
    </div>
  );
}

function Container62() {
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

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[38.483px]">
        <p className="leading-[15px]">Records</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container62 />
        <Margin4 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p8fed400} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[39.483px]">
        <p className="leading-[15px]">Hospital</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container63 />
        <Margin5 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[30.876px]">
        <p className="leading-[15px]">Profile</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container64 />
        <Margin6 />
      </div>
    </div>
  );
}

function BottomNavigation() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex gap-[43.3px] items-center left-[0.26%] max-w-[448px] pb-[4px] pl-[29.64px] pr-[29.67px] pt-[5px] right-[-0.26%]" data-name="Bottom Navigation">
      <div aria-hidden="true" className="absolute border-[#1577d3] border-solid border-t inset-0 pointer-events-none" />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#f6f7f8] relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Body">
      <Container />
      <Container3 />
      <Container51 />
      <div className="absolute h-[80px] left-0 right-0 top-[947.5px]" data-name="Rectangle" />
      <Background />
      <BottomNavigation />
    </div>
  );
}