import svgPaths from "./svg-7gekd7ccta";

function Container2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p300a1100} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Heading 2">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[40px] relative w-full">
          <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] text-center tracking-[-0.45px] w-[166.31px]">
            <p className="leading-[22.5px]">Vaccination Records</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container1 />
          <Heading />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(246,247,248,0.8)] content-stretch flex flex-col items-start pb-px relative shrink-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[134.39px]">
        <p className="leading-[20px]">Immunization Status</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
        <g id="Container" opacity="0.9">
          <path d={svgPaths.p13774060} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[20px] right-[20px] top-[20px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[20px] top-[52px]" data-name="Heading 3">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[24px] text-white w-[117.08px]">
        <p className="leading-[32px]">Up to date</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] opacity-80 pb-[0.75px] right-[20px] top-[91.25px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[39px] justify-center leading-[19.5px] relative shrink-0 text-[12px] text-white w-[300.5px]">
        <p className="mb-0">All recommended vaccinations for your age group and</p>
        <p>health profile are current.</p>
      </div>
    </div>
  );
}

function SummaryCard() {
  return (
    <div className="absolute bg-[#1577d3] h-[151px] left-[16px] right-[16px] rounded-[12px] top-[16px]" data-name="Summary Card">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(21,119,211,0.2),0px_4px_6px_-4px_rgba(21,119,211,0.2)]" data-name="Overlay+Shadow" />
      <Container3 />
      <Heading1 />
      <Container6 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[22.5px]">Administered Vaccines</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p2b677030} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(21,119,211,0.1)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[129.98px]">
        <p className="leading-[20px]">COVID-19 (Pfizer)</p>
      </div>
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center relative shrink-0 text-[#64748b] text-[12px] w-[67.97px]">
        <p className="leading-[16px]">15 Oct 2023</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="leading-[20px]">Dose 2 of 2</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 10.5">
        <g id="Container">
          <path d={svgPaths.p2cf7a400} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[119.13px]">
        <p className="leading-[16px]">City General Hospital</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container11 />
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph />
        <Margin />
        <Margin1 />
      </div>
    </div>
  );
}

function VaccineItem() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Vaccine Item 1">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex gap-[16px] items-start p-[17px] relative w-full">
        <Overlay />
        <Container9 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[20.5px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20.5">
        <g id="Container">
          <path d={svgPaths.p1f1be480} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(21,119,211,0.1)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[147.22px]">
        <p className="leading-[20px]">Influenza (Flu Shot)</p>
      </div>
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center relative shrink-0 text-[#64748b] text-[12px] w-[72.17px]">
        <p className="leading-[16px]">02 Sep 2023</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="leading-[20px]">Seasonal Annual Dose</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p12ef5180} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[125.27px]">
        <p className="leading-[16px]">Wellness Clinic Center</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph1 />
        <Margin2 />
        <Margin3 />
      </div>
    </div>
  );
}

function VaccineItem1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Vaccine Item 2">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex gap-[16px] items-start p-[17px] relative w-full">
        <Overlay1 />
        <Container15 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p3b22eb80} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(21,119,211,0.1)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[83.44px]">
        <p className="leading-[20px]">Hepatitis B</p>
      </div>
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center relative shrink-0 text-[#64748b] text-[12px] w-[70.11px]">
        <p className="leading-[16px]">14 Mar 2023</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="leading-[20px]">Dose 3 of 3 (Complete)</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p20051b80} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[106.53px]">
        <p className="leading-[16px]">Metro Medical Hub</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container23 />
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph2 />
        <Margin4 />
        <Margin5 />
      </div>
    </div>
  );
}

function VaccineItem2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Vaccine Item 3">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex gap-[16px] items-start p-[17px] relative w-full">
        <Overlay2 />
        <Container21 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.pf1b7680} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(21,119,211,0.1)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[36.77px]">
        <p className="leading-[20px]">Tdap</p>
      </div>
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center relative shrink-0 text-[#64748b] text-[12px] w-[65.77px]">
        <p className="leading-[16px]">10 Jan 2022</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="leading-[20px]">10 Year Booster</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[8.167px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 10.5">
        <g id="Container">
          <path d={svgPaths.p26a5b900} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[135.95px]">
        <p className="leading-[16px]">Primary Care Associates</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container29 />
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph3 />
        <Margin6 />
        <Margin7 />
      </div>
    </div>
  );
}

function VaccineItem3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Vaccine Item 4">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex gap-[16px] items-start p-[17px] relative w-full">
        <Overlay3 />
        <Container27 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <VaccineItem />
      <VaccineItem1 />
      <VaccineItem2 />
      <VaccineItem3 />
    </div>
  );
}

function ListSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 pb-[8px] pt-[7px] px-[16px] right-0 top-[183px]" data-name="List Section">
      <Heading2 />
      <Container7 />
    </div>
  );
}

function FooterMessage() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] pt-[16px] right-[24px] top-[697px]" data-name="Footer Message">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[32px] justify-center leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] text-center w-[302.56px]">
        <p className="mb-0">End of records. Contact your healthcare provider if any</p>
        <p>information is missing or incorrect.</p>
      </div>
    </div>
  );
}

function Container32() {
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

function Margin8() {
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
        <Container32 />
        <Margin8 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.pc679c40} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[10px] w-[38.483px]">
        <p className="leading-[15px]">Records</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container33 />
        <Margin9 />
      </div>
    </div>
  );
}

function Container34() {
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

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[39.483px]">
        <p className="leading-[15px]">Hospital</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container34 />
        <Margin10 />
      </div>
    </div>
  );
}

function Container35() {
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

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[30.876px]">
        <p className="leading-[15px]">Profile</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container35 />
        <Margin11 />
      </div>
    </div>
  );
}

function BottomNavigation() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[43.3px] items-center left-0 max-w-[448px] pb-[4px] pl-[29.64px] pr-[29.67px] pt-[5px] top-[812px] w-[390px]" data-name="Bottom Navigation">
      <div aria-hidden="true" className="absolute border-[#1577d3] border-solid border-t inset-0 pointer-events-none" />
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[874px] overflow-clip relative shrink-0 w-full z-[1]" data-name="Main">
      <SummaryCard />
      <ListSection />
      <FooterMessage />
      <BottomNavigation />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#f6f7f8] content-stretch flex flex-col isolate items-start relative size-full" data-name="Body">
      <Header />
      <Main />
    </div>
  );
}