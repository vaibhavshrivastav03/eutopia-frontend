import svgPaths from "./svg-unx7j1alq9";
import imgMapPreviewSection from "figma:asset/e4187d29d5c66c0635096d4c9c901746647ab22e.png";
import imgImage from "figma:asset/7826ed6cce4f24ebc0d2d21320450babb3391b3f.png";
import imgImage1 from "figma:asset/8490793bd882976e45995f7378e1bf9e51458f0d.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-[63.48px]">
        <p className="leading-[20px]">Map View</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8px] relative rounded-[8px] shrink-0 w-[177.19px]" data-name="Label">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[14px] w-[59.11px]">
        <p className="leading-[20px]">List View</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[172.81px]" data-name="Label">
      <Container2 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e2e8f0] flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[12px]" data-name="Background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Label />
          <Label1 />
        </div>
      </div>
    </div>
  );
}

function ViewSwitcher() {
  return (
    <div className="absolute bg-[#f6f7f8] content-stretch flex items-start justify-center left-0 px-[16px] py-[12px] right-0 top-[73px]" data-name="View Switcher">
      <Background />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-full" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.02 11.6667">
        <g id="Container">
          <path d={svgPaths.p12ef5180} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#1577d3] bottom-[36.1%] content-stretch flex flex-col items-start left-[33.42%] p-[4px] right-[60.42%] rounded-[9999px] top-1/2" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-full" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.02 11.6667">
        <g id="Container">
          <path d={svgPaths.p12ef5180} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#1577d3] content-stretch flex flex-col inset-[25.25%_25.14%_60.85%_68.71%] items-start p-[4px] rounded-[9999px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Container4 />
    </div>
  );
}

function MapPreviewSection() {
  return (
    <div className="h-[201.38px] relative rounded-[12px] shrink-0 w-[358px]" data-name="Map Preview Section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-[176.78%] left-[0.28%] max-w-none top-[-38.39%] w-[99.44%]" src={imgMapPreviewSection} />
      </div>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[rgba(21,119,211,0.05)] inset-px" data-name="Overlay" />
        <Background1 />
        <Background2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[25px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[20px] tracking-[-0.3px] w-[160.31px]">
        <p className="leading-[25px]">Nearby Hospitals</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1577d3] text-[14px] w-[54.05px]">
        <p className="leading-[20px]">View All</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[12px] px-[16px] relative w-full">
          <Heading />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p8fed400} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(21,119,211,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay">
      <Container10 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[140.81px]">
        <p className="leading-[24px]">{`St. Mary's General`}</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[179.84px]">
        <p className="leading-[20px]">1.2 miles away • 12 min drive</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[179.84px]" data-name="Container">
      <Heading1 />
      <Container12 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <Overlay />
      <Container11 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container9 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p1d9bcc00} fill="var(--fill-0, #15803D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#15803d] text-[12px] tracking-[0.6px] uppercase w-[155.05px]">
        <p className="leading-[16px]">Emergency Open 24/7</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[8px] shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p34b4000} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1577d3] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[10px] relative rounded-[8px]" data-name="Button">
      <Container16 />
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[68.36px]">
        <p className="leading-[20px]">Directions</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p143e1930} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-center justify-center py-[12px] relative rounded-[8px] shrink-0 w-[48px]" data-name="Button">
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative w-full">
        <Container15 />
      </div>
    </div>
  );
}

function HospitalCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Hospital Card 1">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[17px] relative w-full">
        <Container8 />
        <Background3 />
        <Margin />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
        <g id="Container">
          <path d={svgPaths.p130f1800} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(21,119,211,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay">
      <Container20 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[151.47px]">
        <p className="leading-[24px]">City Medical Center</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[183.56px]">
        <p className="leading-[20px]">2.5 miles away • 18 min drive</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[183.56px]" data-name="Container">
      <Heading2 />
      <Container22 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <Overlay1 />
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container19 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p1d9bcc00} fill="var(--fill-0, #15803D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#15803d] text-[12px] tracking-[0.6px] uppercase w-[155.05px]">
        <p className="leading-[16px]">Emergency Open 24/7</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[8px] shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p34b4000} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#1577d3] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[10px] relative rounded-[8px]" data-name="Button">
      <Container26 />
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[68.36px]">
        <p className="leading-[20px]">Directions</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p143e1930} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-center justify-center py-[12px] relative rounded-[8px] shrink-0 w-[48px]" data-name="Button">
      <Container27 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative w-full">
        <Container25 />
      </div>
    </div>
  );
}

function HospitalCard1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Hospital Card 2">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[17px] relative w-full">
        <Container18 />
        <Background4 />
        <Margin1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <HospitalCard />
        <HospitalCard1 />
      </div>
    </div>
  );
}

function SectionNearbyHospitals() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section - Nearby Hospitals">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[358px]" data-name="Heading 2">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[25px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[20px] tracking-[-0.3px] w-[153.25px]">
        <p className="leading-[25px]">Affiliated Clinics</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[132px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <div className="h-[128px] relative rounded-[8px] shrink-0 w-full" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <img alt="" className="absolute h-[192.19%] left-0 max-w-none top-[-46.09%] w-full" src={imgImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-full">
        <p className="leading-[24px]">Northside Urgent Care</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px]">Closes at 9:00 PM • 3.1 miles</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Heading4 />
        <Container30 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(21,119,211,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[8px] relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[14px] text-center w-[124.44px]">
          <p className="leading-[20px]">Book Appointment</p>
        </div>
      </div>
    </div>
  );
}

function Clinic() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col gap-[12px] items-start left-[16px] min-w-[280px] p-[17px] rounded-[12px] top-0 w-[280px]" data-name="Clinic 1">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Margin2 />
      <Container29 />
      <Button4 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[132px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <div className="h-[128px] relative rounded-[8px] shrink-0 w-full" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <img alt="" className="absolute h-[192.19%] left-0 max-w-none top-[-46.09%] w-full" src={imgImage1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-full">
        <p className="leading-[24px]">Wellness Family Practice</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px]">Opens 8:00 AM Mon • 4.5 miles</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Heading5 />
        <Container32 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(21,119,211,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[8px] relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[14px] text-center w-[124.44px]">
          <p className="leading-[20px]">Book Appointment</p>
        </div>
      </div>
    </div>
  );
}

function Clinic1() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col gap-[12px] items-start left-[312px] min-w-[280px] p-[17px] rounded-[12px] top-0 w-[280px]" data-name="Clinic 2">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Margin3 />
      <Container31 />
      <Button5 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[266px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Clinic />
      <Clinic1 />
    </div>
  );
}

function SectionAffiliatedClinics() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Section - Affiliated Clinics">
      <Heading3 />
      <Container28 />
    </div>
  );
}

function Container33() {
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

function Margin4() {
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
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center left-[29.64px] p-[8px] top-[calc(50%+0.5px)]" data-name="Link">
      <Container33 />
      <Margin4 />
    </div>
  );
}

function Container34() {
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

function Margin5() {
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
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center left-[117.01px] p-[8px] top-[calc(50%+0.5px)]" data-name="Link">
      <Container34 />
      <Margin5 />
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p8fed400} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[10px] w-[39.483px]">
        <p className="leading-[15px]">Hospital</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center left-[214.79px] p-[8px] top-[calc(50%+0.5px)]" data-name="Link">
      <Container35 />
      <Margin6 />
    </div>
  );
}

function Container36() {
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

function Margin7() {
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
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center left-[313.57px] p-[8px] top-[calc(50%+0.5px)]" data-name="Link">
      <Container36 />
      <Margin7 />
    </div>
  );
}

function BottomNavigation() {
  return (
    <div className="bg-white h-[62px] max-w-[448px] relative shrink-0 w-[390px]" data-name="Bottom Navigation">
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
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-0 pb-[96px] pt-[8px] right-0 top-[154px]" data-name="Main">
      <MapPreviewSection />
      <SectionNearbyHospitals />
      <SectionAffiliatedClinics />
      <BottomNavigation />
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
    <div className="relative shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container38 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] text-center tracking-[-0.27px] w-[79.64px]">
          <p className="leading-[22.5px]">Hospitals</p>
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

function Button6() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative rounded-[12px] shrink-0" data-name="Button">
      <Container40 />
    </div>
  );
}

function Container39() {
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
    <div className="absolute bg-[#f6f7f8] content-stretch flex items-center justify-between left-0 pb-[9px] pt-[16px] px-[16px] right-0 top-0" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container37 />
      <Heading6 />
      <Container39 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[1238px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <ViewSwitcher />
      <Main />
      <Header />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#f6f7f8] relative size-full" data-name="Body">
      <Container />
    </div>
  );
}