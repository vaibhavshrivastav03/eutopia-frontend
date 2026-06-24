import svgPaths from "./svg-9bnpf8fcd6";
import imgImage from "figma:asset/3386b06e4e6bb6f497f906d008edde06ad96910b.png";

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[58.44px]">
          <p className="leading-[20px]">All Tests</p>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col h-full items-center justify-center pb-[18px] pt-[16px] relative">
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
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#213e53] text-[14px] w-[47.16px]">
          <p className="leading-[20px]">Recent</p>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#2789d0] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col h-full items-center justify-center pb-[18px] pt-[16px] relative">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[54.72px]">
          <p className="leading-[20px]">Pending</p>
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col h-full items-center justify-center pb-[18px] pt-[16px] relative">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[71.27px]">
          <p className="leading-[20px]">Scheduled</p>
        </div>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col h-full items-center justify-center pb-[18px] pt-[16px] relative">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[32px] h-[54px] items-start left-[16px] overflow-clip right-[16px] top-[73px]" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] w-full">
        <p className="leading-[28px]">Latest Result</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase w-[151.73px]">
        <p className="leading-[16px]">OCT 24, 2023 • FASTING</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[20px] w-[137.33px]">
        <p className="leading-[28px]">Blood Glucose</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[151.73px]" data-name="Container">
      <Container7 />
      <Heading2 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#15803d] text-[12px] w-[42.53px]">
        <p className="leading-[16px]">Normal</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[21px] right-[21px] top-[21px]" data-name="Container">
      <Container6 />
      <Background />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] relative shrink-0 text-[#213e53] text-[36px] w-[62.92px]">
        <p className="leading-[40px]">105</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[48.55px]">
        <p className="leading-[24px]">mg/dL</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-end left-[21px] right-[21px] top-[85px]" data-name="Container">
      <Container9 />
      <Margin />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#f1f5f9] content-stretch flex h-[8px] items-start left-[21px] overflow-clip right-[21px] rounded-[9999px] top-[141px]" data-name="Background">
      <div className="bg-[#facc15] h-full shrink-0 w-[94.8px]" data-name="Background" />
      <div className="bg-[#22c55e] h-full shrink-0 w-[126.39px]" data-name="Background" />
      <div className="bg-[#ef4444] h-full shrink-0 w-[94.8px]" data-name="Background" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[19.03px]">
        <p className="leading-[15px]">Low</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[107.28px]">
        <p className="leading-[15px]">Normal Range (70-130)</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[22.23px]">
        <p className="leading-[15px]">High</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start justify-between left-[21px] pr-[0.02px] right-[21px] top-[157px]" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(21,119,211,0.1)] content-stretch flex items-center justify-center left-[21px] py-[10px] right-[21px] rounded-[12px] top-[192px]" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#213e53] text-[14px] text-center w-[151.72px]">
        <p className="leading-[20px]">View Detailed Analysis</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white h-[253px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container5 />
        <Container8 />
        <Background1 />
        <Container10 />
        <Button />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function SectionHighlightCard() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section - Highlight Card">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
        <Heading1 />
        <BackgroundBorderShadow />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] w-[110.72px]">
        <p className="leading-[28px]">Past Reports</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#213e53] text-[14px] text-center w-[54.75px]">
        <p className="leading-[20px]">View All</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Button1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(21,119,211,0.1)] relative rounded-[12px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-full">
        <p className="leading-[20px]">HbA1c (Hemoglobin A1c)</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px]">Oct 12, 2023 • LabCorp</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Heading4 />
        <Container18 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[38.84px]">
        <p className="leading-[24px]">5.7%</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#16a34a] text-[12px] w-[36.73px]">
        <p className="leading-[16px]">Stable</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function HbA1CCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="HbA1c Card">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[17px] relative w-full">
          <Overlay />
          <Container17 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p812130} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(21,119,211,0.1)] relative rounded-[12px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-full">
        <p className="leading-[20px]">Hemoglobin</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="mb-0">Sep 28, 2023 • Quest</p>
        <p>Diag.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Heading5 />
        <Container24 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[70.88px]">
        <p className="leading-[24px]">14.2 g/dL</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#16a34a] text-[12px] w-[41.47px]">
        <p className="leading-[16px]">Normal</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function HemoglobinCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Hemoglobin Card">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[17px] relative w-full">
          <Overlay1 />
          <Container23 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[18px] relative shrink-0 w-[18.057px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.057 18">
        <g id="Container">
          <path d={svgPaths.p269eed00} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(21,119,211,0.1)] relative rounded-[12px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-full">
        <p className="leading-[20px]">Lipid Profile</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="mb-0">Sep 28, 2023 • Quest</p>
        <p>Diag.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Heading6 />
        <Container30 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[16px] w-[80.39px]">
        <p className="leading-[24px]">210 mg/dL</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#dc2626] text-[12px] w-[26.67px]">
        <p className="leading-[16px]">High</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function LipidProfileCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Lipid Profile Card">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[17px] relative w-full">
          <Overlay2 />
          <Container29 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[106.06px]">
        <p className="leading-[24px]">Result Trends</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[7px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 7">
        <g id="Container">
          <path d={svgPaths.pde19380} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[20px] right-[20px] top-[20px]" data-name="Container">
      <Heading7 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] opacity-80 pb-[0.75px] right-[20px] top-[211.53px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[39px] justify-center leading-[19.5px] relative shrink-0 text-[12px] text-white w-[313px]">
        <p className="mb-0">Your average glucose has decreased by 4% compared to</p>
        <p>last month. Keep up the consistent diet.</p>
      </div>
    </div>
  );
}

function VisualChartPreview() {
  return (
    <div className="bg-[#2789d0] h-[271.28px] relative rounded-[12px] shrink-0 w-full" data-name="Visual Chart Preview">
      <Container34 />
      <div className="absolute aspect-[21/9] left-[20px] opacity-90 right-[20px] rounded-[8px] top-[60px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[233.34%] left-0 max-w-none top-[-66.67%] w-full" src={imgImage} />
        </div>
      </div>
      <Container36 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <HbA1CCard />
      <HemoglobinCard />
      <LipidProfileCard />
      <VisualChartPreview />
    </div>
  );
}

function SectionTestList() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section - Test List">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[8px] relative w-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[96px] right-0 top-[127px]" data-name="Main Content">
      <SectionHighlightCard />
      <SectionTestList />
    </div>
  );
}

function Container38() {
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

function Container37() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container38 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] text-center tracking-[-0.45px] w-[77.78px]">
          <p className="leading-[22.5px]">Lab Tests</p>
        </div>
      </div>
    </div>
  );
}

function Container40() {
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

function Container39() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container40 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-0 pb-[17px] pt-[16px] px-[16px] right-0 top-0" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container37 />
      <Heading />
      <Container39 />
    </div>
  );
}

function Container41() {
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

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[10px] w-[28.068px]">
        <p className="leading-[15px]">Home</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container41 />
        <Margin1 />
      </div>
    </div>
  );
}

function Container42() {
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

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[38.483px]">
        <p className="leading-[15px]">Records</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container42 />
        <Margin2 />
      </div>
    </div>
  );
}

function Container43() {
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

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[39.483px]">
        <p className="leading-[15px]">Hospital</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container43 />
        <Margin3 />
      </div>
    </div>
  );
}

function Container44() {
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

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[30.876px]">
        <p className="leading-[15px]">Profile</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container44 />
        <Margin4 />
      </div>
    </div>
  );
}

function BottomNavigation() {
  return (
    <div className="absolute bg-white bottom-[0.28px] content-stretch flex gap-[43.3px] items-center left-0 max-w-[448px] pb-[4px] pl-[29.64px] pr-[29.67px] pt-[5px] right-0" data-name="Bottom Navigation">
      <div aria-hidden="true" className="absolute border-[#1577d3] border-solid border-t inset-0 pointer-events-none" />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Container45() {
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

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[10px] w-[28.068px]">
        <p className="leading-[15px]">Home</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container45 />
        <Margin5 />
      </div>
    </div>
  );
}

function Container46() {
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

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[38.483px]">
        <p className="leading-[15px]">Records</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container46 />
        <Margin6 />
      </div>
    </div>
  );
}

function Container47() {
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

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[39.483px]">
        <p className="leading-[15px]">Hospital</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container47 />
        <Margin7 />
      </div>
    </div>
  );
}

function Container48() {
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

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[30.876px]">
        <p className="leading-[15px]">Profile</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container48 />
        <Margin8 />
      </div>
    </div>
  );
}

function BottomNavigation1() {
  return (
    <div className="absolute bg-white bottom-[0.28px] content-stretch flex gap-[43.3px] items-center left-0 max-w-[448px] pb-[4px] pl-[29.64px] pr-[29.67px] pt-[5px] right-0" data-name="Bottom Navigation">
      <div aria-hidden="true" className="absolute border-[#1577d3] border-solid border-t inset-0 pointer-events-none" />
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

export default function BodyMainContainer() {
  return (
    <div className="bg-[#f6f7f8] relative size-full" data-name="Body → Main Container">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.28px_0] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Main Container:shadow" />
      <Container />
      <MainContent />
      <Header />
      <BottomNavigation />
      <BottomNavigation1 />
    </div>
  );
}