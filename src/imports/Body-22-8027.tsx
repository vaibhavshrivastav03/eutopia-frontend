import svgPaths from "./svg-mp7tc99mec";
import imgImageBorder from "figma:asset/5a68cb126a18821714a3f1cc056abff5f88fd7d4.png";
import imgImageBorder1 from "figma:asset/f61873a6f1536e26a346416282624de68e93c18f.png";
import imgImageBorder2 from "figma:asset/43050af9711b4dcd6199690c58b840563cb90225.png";
import imgImageBorder3 from "figma:asset/c07aee8b3e11a90e096d3076acb5d31db0fa3254.png";

function Paragraph() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[22px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[247.02px]">
        <p className="leading-[22px]">Chest X-Ray (Posterior-Anterior)</p>
      </div>
      <div className="h-[7px] relative shrink-0 w-[4.317px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31667 7">
          <path d={svgPaths.p35022f90} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[21px] relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="mb-0">Lungs are clear. No pleural effusions or</p>
        <p>pneumothorax identified. Cardiac…</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.3333">
        <g id="Container">
          <path d={svgPaths.p270cf300} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[70.41px]">
        <p className="leading-[16px]">Oct 12, 2023</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[16px] w-[5.08px]">
        <p className="leading-[24px]">•</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[82.94px]">
        <p className="leading-[16px]">Dr. Sarah Chen</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Paragraph />
      <Margin />
      <Margin1 />
    </div>
  );
}

function Item1ChestXRay() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Item 1: Chest X-Ray">
      <div className="content-stretch flex gap-[16px] items-start px-[16px] py-[20px] relative w-full">
        <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[80px]" data-name="Image+Border">
          <div className="absolute inset-0 overflow-hidden rounded-[8px]">
            <img alt="" className="absolute left-[1.25%] max-w-none size-[97.5%] top-[1.25%]" src={imgImageBorder} />
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 rounded-[8px]" />
        </div>
        <Container />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[22px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[140.34px]">
        <p className="leading-[22px]">Lumbar Spine MRI</p>
      </div>
      <div className="h-[7px] relative shrink-0 w-[4.317px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31667 7">
          <path d={svgPaths.p35022f90} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[21px] relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="mb-0">Mild disc bulging at L4-L5 level. No</p>
        <p>significant spinal stenosis noted. Nerv…</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.3333">
        <g id="Container">
          <path d={svgPaths.p270cf300} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[75.52px]">
        <p className="leading-[16px]">Sep 28, 2023</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[16px] w-[5.08px]">
        <p className="leading-[24px]">•</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[93.42px]">
        <p className="leading-[16px]">Dr. James Wilson</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Paragraph1 />
        <Margin2 />
        <Margin3 />
      </div>
    </div>
  );
}

function Item2LumbarMri() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Item 2: Lumbar MRI">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[16px] items-start pb-[20px] pt-[21px] px-[16px] relative w-full">
        <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[80px]" data-name="Image+Border">
          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden rounded-[8px]">
            <img alt="" className="absolute left-[1.25%] max-w-none size-[97.5%] top-[1.25%]" src={imgImageBorder1} />
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 rounded-[8px]" />
        </div>
        <Container7 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[22px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[133.47px]">
        <p className="leading-[22px]">Right Knee X-Ray</p>
      </div>
      <div className="h-[7px] relative shrink-0 w-[4.317px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31667 7">
          <path d={svgPaths.p35022f90} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[21px] relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="mb-0">No acute fracture or dislocation. Joint</p>
        <p>spaces are well maintained. No…</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.3333">
        <g id="Container">
          <path d={svgPaths.p270cf300} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[74.03px]">
        <p className="leading-[16px]">Aug 15, 2023</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[16px] w-[5.08px]">
        <p className="leading-[24px]">•</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[81.91px]">
        <p className="leading-[16px]">Dr. Emily Blunt</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Paragraph2 />
        <Margin4 />
        <Margin5 />
      </div>
    </div>
  );
}

function Item3KneeXRay() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Item 3: Knee X-Ray">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[16px] items-start pb-[20px] pt-[21px] px-[16px] relative w-full">
        <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[80px]" data-name="Image+Border">
          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden rounded-[8px]">
            <img alt="" className="absolute left-[1.25%] max-w-none size-[97.5%] top-[1.25%]" src={imgImageBorder2} />
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 rounded-[8px]" />
        </div>
        <Container14 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[22px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[112.17px]">
        <p className="leading-[22px]">Pelvic CT Scan</p>
      </div>
      <div className="h-[7px] relative shrink-0 w-[4.317px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31667 7">
          <path d={svgPaths.p35022f90} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[21px] relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="mb-0">Contrast enhanced scan shows normal</p>
        <p>morphology of pelvic organs. No…</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.3333">
        <g id="Container">
          <path d={svgPaths.p270cf300} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[68.58px]">
        <p className="leading-[16px]">Jul 02, 2023</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[16px] w-[5.08px]">
        <p className="leading-[24px]">•</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[93.41px]">
        <p className="leading-[16px]">Dr. Robert Vance</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container23 />
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Paragraph3 />
        <Margin6 />
        <Margin7 />
      </div>
    </div>
  );
}

function Item4PelvicCt() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Item 4: Pelvic CT">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[16px] items-start pb-[20px] pt-[21px] px-[16px] relative w-full">
        <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[80px]" data-name="Image+Border">
          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden rounded-[8px]">
            <img alt="" className="absolute left-[1.25%] max-w-none size-[97.5%] top-[1.25%]" src={imgImageBorder3} />
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 rounded-[8px]" />
        </div>
        <Container21 />
      </div>
    </div>
  );
}

function ImagingList() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[114px] right-0 top-[127px]" data-name="Imaging List">
      <Item1ChestXRay />
      <Item2LumbarMri />
      <Item3KneeXRay />
      <Item4PelvicCt />
    </div>
  );
}

function Container29() {
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

function Container28() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container29 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Heading 2">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pr-[48px] relative w-full">
          <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] text-center tracking-[-0.27px] w-[142.09px]">
            <p className="leading-[22.5px]">Imaging (X-Rays)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pb-[9px] pt-[16px] px-[16px] right-0 top-0" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container28 />
      <Heading />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[14px] tracking-[0.21px] w-[19.81px]">
          <p className="leading-[21px]">All</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative self-stretch shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1577d3] border-b-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center py-[16px] relative">
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[0.21px] w-[41.02px]">
          <p className="leading-[21px]">X-Ray</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative self-stretch shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center py-[16px] relative">
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[0.21px] w-[27.53px]">
          <p className="leading-[21px]">MRI</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative self-stretch shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center py-[16px] relative">
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[0.21px] w-[56.61px]">
          <p className="leading-[21px]">CT Scan</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="relative self-stretch shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center py-[16px] relative">
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[32px] items-start pb-px px-[16px] relative size-full">
        <HorizontalBorder1 />
        <HorizontalBorder2 />
        <HorizontalBorder3 />
        <HorizontalBorder4 />
      </div>
    </div>
  );
}

function FilterTabs() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 right-0 top-[73px]" data-name="Filter Tabs">
      <HorizontalBorder />
    </div>
  );
}

function Container34() {
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
        <Container34 />
        <Margin8 />
      </div>
    </div>
  );
}

function Container35() {
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
        <Container35 />
        <Margin9 />
      </div>
    </div>
  );
}

function Container36() {
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
        <Container36 />
        <Margin10 />
      </div>
    </div>
  );
}

function Container37() {
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
        <Container37 />
        <Margin11 />
      </div>
    </div>
  );
}

function BottomNavigation() {
  return (
    <div className="bg-white content-stretch flex gap-[43px] items-center justify-center max-w-[448px] pb-[4px] pt-[5px] px-[30px] relative shrink-0" data-name="Bottom Navigation">
      <div aria-hidden="true" className="absolute border-[#1577d3] border-solid border-t inset-0 pointer-events-none" />
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <BottomNavigation />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0">
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[62px] left-0 top-0 w-[389.91px]">
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[62px] left-0 top-0 w-[389.91px]">
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[62px] left-0 top-0 w-[389.91px]">
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[62px] relative shrink-0 w-[389.91px]">
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
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0">
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[62px] relative shrink-0 w-[389.91px]">
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0">
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[62px] left-0 top-0 w-[389.91px]">
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[62px] left-0 top-0 w-[389.91px]">
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[62px] relative shrink-0 w-[389.91px]">
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
    <div className="h-[62px] relative shrink-0 w-[389.91px]">
      <Frame15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0">
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
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[813px]">
      <Frame19 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="absolute bg-white h-[884px] left-0 overflow-clip shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[390px]" data-name="Background+Shadow">
      <ImagingList />
      <div className="absolute bg-white h-[80px] left-0 right-0 top-[804px]" data-name="Spacer for content" />
      <Header />
      <FilterTabs />
      <Frame20 />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#f6f7f8] relative size-full" data-name="Body">
      <BackgroundShadow />
    </div>
  );
}