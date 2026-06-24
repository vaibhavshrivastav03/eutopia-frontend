import svgPaths from "./svg-89eozfhfzn";
import imgImageBorder from "figma:asset/50224185bd839a0a76e8043fdef5f6f792e7088d.png";
import imgImageBorder1 from "figma:asset/9f8d88d5211c0cf1ddf77d2ef2079badf7539f2c.png";
import imgImageBorder2 from "figma:asset/1a0bb374571c1d36f3d8a1ea83cf0ae03e9b86b9.png";
import imgImageBorder3 from "figma:asset/9cc7aa1b7895967012e5b42b72def13a5ca20656.png";
import imgImageBorder4 from "figma:asset/46edf6d621cbc7c4888598887b681305cd26c1e4.png";

function Container() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 top-[8px] w-[16px]" data-name="Container">
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
    <div className="absolute content-stretch flex flex-col items-start left-[8px] pt-[2px] top-[26px]" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#a1aec1] text-[10px] w-[28.068px]">
        <p className="leading-[15px]">Home</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[51px] left-[30px] top-[5px] w-[44.068px]" data-name="Link">
      <Container />
      <Margin />
    </div>
  );
}

function Container1() {
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

function Margin1() {
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
    <div className="absolute content-stretch flex flex-col items-center left-[117.07px] p-[8px] top-[4px]" data-name="Link">
      <Container1 />
      <Margin1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 size-[18px] top-[8px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p8fed400} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] pt-[2px] top-[26px]" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[39.483px]">
        <p className="leading-[15px]">Hospital</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[51px] left-[214.55px] top-[5px] w-[55.483px]" data-name="Link">
      <Container2 />
      <Margin2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 size-[16px] top-[8px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] pt-[2px] top-[24px]" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[30.876px]">
        <p className="leading-[15px]">Profile</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[49px] left-[313.03px] top-[6px] w-[46.876px]" data-name="Link">
      <Container3 />
      <Margin3 />
    </div>
  );
}

function BottomNavigation() {
  return (
    <div className="absolute bg-white border-[#1577d3] border-solid border-t h-[62px] left-0 top-0 w-[389.91px]" data-name="Bottom Navigation">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[62px] left-0 top-0 w-[389.91px]">
      <BottomNavigation />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[62px] relative shrink-0 w-[389.91px]">
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0">
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[62px] relative shrink-0 w-[389.91px]">
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0">
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[62px] relative shrink-0 w-[389.91px]">
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0">
      <Frame14 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute h-[62px] left-0 top-0 w-[389.91px]">
      <Frame15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute h-[62px] left-0 top-0 w-[389.91px]">
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[62px] relative shrink-0 w-[389.91px]">
      <Frame17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[838px]">
      <Frame19 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[105.23px]">
        <p className="leading-[24px]">Dr. Linda Gray</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[40.88px]">
        <p className="leading-[16px]">Aug 25</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[14px] w-full">
        <p className="leading-[20px]">Nutrition Consultation</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="mb-0">Reviewed meal logs. Discussed increasing</p>
        <p>fiber intake and Vitamin D supplementatio…</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Container6 />
      <Margin4 />
      <Container9 />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[56px]" data-name="Image+Border">
          <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
            <img alt="" className="absolute left-[1.79%] max-w-none size-[96.43%] top-[1.79%]" src={imgImageBorder} />
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 rounded-[9999px]" />
        </div>
        <Container5 />
      </div>
    </div>
  );
}

function NoteItem4() {
  return (
    <div className="absolute content-stretch flex h-[121px] items-start justify-center left-0 pb-[17px] pt-[16px] px-[16px] top-[683px] w-[390px]" data-name="Note Item 5">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[125.81px]">
        <p className="leading-[24px]">Dr. James Wilson</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[37.14px]">
        <p className="leading-[16px]">Sep 12</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[14px] w-full">
        <p className="leading-[20px]">Orthopedic Review</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="mb-0">Knee recovery is progressing well after</p>
        <p>physical therapy. Suggested continuing…</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Container12 />
      <Margin5 />
      <Container15 />
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[56px]" data-name="Image+Border">
          <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
            <img alt="" className="absolute left-[1.79%] max-w-none size-[96.43%] top-[1.79%]" src={imgImageBorder1} />
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 rounded-[9999px]" />
        </div>
        <Container11 />
      </div>
    </div>
  );
}

function NoteItem3() {
  return (
    <div className="absolute content-stretch flex h-[121px] items-start justify-center left-0 pb-[17px] pt-[16px] px-[16px] top-[562px] w-[390px]" data-name="Note Item 4">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container10 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[146.25px]">
        <p className="leading-[24px]">Dr. Elena Rodriguez</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[39.97px]">
        <p className="leading-[16px]">Sep 30</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[14px] w-full">
        <p className="leading-[20px]">Dermatology Check-up</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="mb-0">Skin examination complete. Recommended</p>
        <p>SPF 50 for daily use. No suspicious lesion…</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Container18 />
      <Margin6 />
      <Container21 />
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[56px]" data-name="Image+Border">
          <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
            <img alt="" className="absolute left-[1.79%] max-w-none size-[96.43%] top-[1.79%]" src={imgImageBorder2} />
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 rounded-[9999px]" />
        </div>
        <Container17 />
      </div>
    </div>
  );
}

function NoteItem2() {
  return (
    <div className="absolute content-stretch flex h-[121px] items-start justify-center left-0 pb-[17px] pt-[16px] px-[16px] top-[441px] w-[390px]" data-name="Note Item 3">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container16 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[137.36px]">
        <p className="leading-[24px]">Dr. Marcus Thorne</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[35.48px]">
        <p className="leading-[16px]">Oct 18</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[14px] w-full">
        <p className="leading-[20px]">Annual Wellness Visit</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="mb-0">All vital signs within normal range. Blood</p>
        <p>work results pending. Patient reported…</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Container24 />
      <Margin7 />
      <Container27 />
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[56px]" data-name="Image+Border">
          <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
            <img alt="" className="absolute left-[1.79%] max-w-none size-[96.43%] top-[1.79%]" src={imgImageBorder3} />
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 rounded-[9999px]" />
        </div>
        <Container23 />
      </div>
    </div>
  );
}

function NoteItem1() {
  return (
    <div className="absolute content-stretch flex h-[121px] items-start justify-center left-0 pb-[17px] pt-[16px] px-[16px] top-[320px] w-[390px]" data-name="Note Item 2">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container22 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[128.25px]">
        <p className="leading-[24px]">Dr. Sarah Jenkins</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[37.59px]">
        <p className="leading-[16px]">Oct 24</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[14px] w-full">
        <p className="leading-[20px]">Cardiology Consultation</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="mb-0">Patient shows excellent cardiovascular</p>
        <p>health. Recommended continuing current…</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Container30 />
      <Margin8 />
      <Container33 />
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[56px]" data-name="Image+Border">
          <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
            <img alt="" className="absolute left-[1.79%] max-w-none size-[96.43%] top-[1.79%]" src={imgImageBorder4} />
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 rounded-[9999px]" />
        </div>
        <Container29 />
      </div>
    </div>
  );
}

function NoteItem() {
  return (
    <div className="absolute content-stretch flex h-[121px] items-start justify-center left-0 pb-[17px] pt-[16px] px-[16px] top-[199px] w-[390px]" data-name="Note Item 1">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container28 />
    </div>
  );
}

function Container36() {
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

function Container35() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Container">
      <Container36 />
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Heading 1">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[40px] relative w-full">
          <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] text-center tracking-[-0.45px] w-[107.44px]">
            <p className="leading-[22.5px]">Doctor Notes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container35 />
          <Heading />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p2dbaedc0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(226,232,240,0.5)] content-stretch flex h-full items-center justify-center pl-[16px] relative rounded-bl-[12px] rounded-tl-[12px] shrink-0" data-name="Overlay">
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bottom-[14.5px] content-stretch flex flex-col items-start left-[8px] overflow-clip pr-[121.73px] top-[14.5px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[176.27px]">
        <p className="leading-[normal]">Search notes or doctors</p>
      </div>
    </div>
  );
}

function Container40() {
  return <div className="absolute bottom-[14.5px] left-[8px] top-[14.5px] w-[298px]" data-name="Container" />;
}

function Input() {
  return (
    <div className="bg-[rgba(226,232,240,0.5)] flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative rounded-br-[12px] rounded-tr-[12px]" data-name="Input">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative rounded-[12px] w-full" data-name="Container">
      <Overlay />
      <Input />
    </div>
  );
}

function SearchBarLabel() {
  return (
    <div className="h-[48px] min-w-[160px] relative shrink-0 w-[358px]" data-name="Search Bar → Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center min-w-[inherit] relative size-full">
        <Container37 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] tracking-[0.35px] w-[49.25px]">
          <p className="leading-[21px]">Recent</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative self-stretch shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1577d3] border-b-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center py-[16px] relative">
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[0.35px] w-[62.03px]">
          <p className="leading-[21px]">Archived</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative self-stretch shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center py-[16px] relative">
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Tabs">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start pb-px px-[16px] relative size-full">
        <HorizontalBorder />
        <HorizontalBorder1 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#f6f7f8] content-stretch flex flex-col gap-[12px] items-center left-0 pb-px top-0 w-[390px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container34 />
      <SearchBarLabel />
      <Tabs />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#f6f7f8] relative size-full" data-name="Body">
      <Frame20 />
      <NoteItem4 />
      <NoteItem3 />
      <NoteItem2 />
      <NoteItem1 />
      <NoteItem />
      <Header />
    </div>
  );
}