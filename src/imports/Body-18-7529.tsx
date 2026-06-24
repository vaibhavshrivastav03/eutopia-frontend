import svgPaths from "./svg-ecutcpafcz";
import imgOgunlanaOreoluwa from "figma:asset/f0f1699a36967683aad1847d458152dcbf694b2c.png";

function Margin() {
  return (
    <div className="absolute gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] left-[91.02px] top-[200px] w-[207.97px]" data-name="Margin">
      <div className="col-1 flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center justify-self-stretch leading-[0] relative row-1 self-start shrink-0 text-[#e8f5f6] text-[14px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`Female | Born on 17th Sept              2010`}</p>
      </div>
    </div>
  );
}

function OgunlanaOreoluwa() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[132px]" data-name="Ogunlana Oreoluwa">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOgunlanaOreoluwa} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 rounded-[9999px]" />
    </div>
  );
}

function ScanningEffectWrapper() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-[123px] rounded-[9999px] size-[144px] top-[13px]" data-name="Scanning Effect Wrapper">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[6px] relative rounded-[inherit] size-full">
        <OgunlanaOreoluwa />
        <div className="absolute inset-[-438px_-358px_442px_362px]" data-name="Gradient">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 140">
            <path d="M0 0H140V140H0V0Z" fill="url(#paint0_linear_1_1203)" id="Gradient" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1203" x1="-290" x2="-290" y1="440" y2="580">
                <stop stopColor="#00F2FF" stopOpacity="0" />
                <stop offset="0.5" stopColor="#00F2FF" stopOpacity="0.2" />
                <stop offset="1" stopColor="#00F2FF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,242,255,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_0px_30px_0px_rgba(0,242,255,0.2)]" />
    </div>
  );
}

function SectionProfileSummary() {
  return (
    <div className="absolute bg-[#206fa8] h-[248px] left-0 right-0 rounded-[20px] top-[89px]" data-name="Section - Profile Summary">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] left-[calc(50%-0.01px)] text-[#fbfcff] text-[24px] text-center top-[184px] w-[225.64px]">
        <p className="leading-[32px]">Ogunlana Oreoluwa</p>
      </div>
      <Margin />
      <ScanningEffectWrapper />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#206fa8] content-stretch flex flex-col items-center justify-center left-[16px] px-[20px] py-[10px] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(21,119,211,0.2)] top-[16px]" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[111.23px]">
        <p className="leading-[20px]">Medical Records</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col items-center justify-center left-[175.23px] px-[20px] py-[10px] rounded-[9999px] top-[16px]" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center w-[62.86px]">
        <p className="leading-[20px]">Lab Tests</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col items-center justify-center left-[286.09px] px-[20px] py-[10px] rounded-[9999px] top-[16px]" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center w-[87.5px]">
        <p className="leading-[20px]">Prescriptions</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col items-center justify-center left-[421.59px] px-[20px] py-[10px] rounded-[9999px] top-[16px]" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center w-[46.42px]">
        <p className="leading-[20px]">X-Rays</p>
      </div>
    </div>
  );
}

function NavTabBar() {
  return (
    <div className="absolute bg-white h-[72px] left-0 overflow-clip right-0 top-[337px]" data-name="Nav - Tab Bar">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute h-[21px] left-[16px] top-[16px] w-[22px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
        <g id="Margin">
          <path d={svgPaths.p1537de00} fill="var(--fill-0, #DC2626)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] relative shrink-0 text-[#991b1b] text-[14px] w-[163.5px]">
        <p className="leading-[17.5px]">Sickle Cell Complication</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[32px] justify-center leading-[16px] relative shrink-0 text-[#b91c1c] text-[12px] w-[242.96px]">
        <p className="mb-0">High blood sugar level detected. Immediate</p>
        <p>monitoring advised.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[52.02px] top-[15px] w-[242.96px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function WarningNote() {
  return (
    <div className="absolute bg-[#fef2f2] border border-[#f80c0c] border-solid h-[85.5px] left-[16px] right-[16px] rounded-[12px] top-[-5px]" data-name="Warning Note">
      <Margin1 />
      <Container />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] right-[16px] top-[90px]" data-name="Heading 3">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">Recent Lab Results</p>
      </div>
    </div>
  );
}

function WarningNoteMargin() {
  return (
    <div className="absolute h-[117.5px] left-0 right-0 top-[409px]" data-name="Warning Note:margin">
      <WarningNote />
      <Heading1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[133.39px]">
        <p className="leading-[20px]">Blood Glucose Level</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[11px] w-[113.06px]">
        <p className="leading-[16.5px]">Normal: 70-130 mg/dL</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[133.39px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[30px] leading-[0] relative shrink-0 text-right w-[65.64px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[28px] justify-center right-[30.12px] text-[#dc2626] text-[18px] top-[13.5px] w-[35.52px]">
        <p className="leading-[28px]">{`150 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[28px] justify-center right-[-0.01px] text-[#94a3b8] text-[10px] top-[16px] w-[30.13px]">
        <p className="leading-[28px]">mg/dL</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Paragraph />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[13px] relative w-full">
          <Container4 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[42.77px]">
        <p className="leading-[20px]">HbA1c</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[11px] w-[92.5px]">
        <p className="leading-[16.5px]">Normal: below 7%</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[92.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[30px] leading-[0] relative shrink-0 text-right w-[41.94px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[28px] justify-center right-[9.05px] text-[#dc2626] text-[18px] top-[13.5px] w-[32.89px]">
        <p className="leading-[28px]">{`8.6 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[28px] justify-center right-0 text-[#94a3b8] text-[10px] top-[16px] w-[9.05px]">
        <p className="leading-[28px]">%</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Paragraph1 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[13px] relative w-full">
          <Container8 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[80px]">
        <p className="leading-[20px]">Hemoglobin</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[11px] w-[111.88px]">
        <p className="leading-[16.5px]">Normal: 11.5-15.5 g/dL</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[13px] top-1/2 w-[111.88px]" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[30px] leading-[0] relative shrink-0 text-right w-[51.41px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[28px] justify-center right-[21.49px] text-[#dc2626] text-[18px] top-[13.5px] w-[29.92px]">
        <p className="leading-[28px]">{`7.2 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[28px] justify-center right-0 text-[#94a3b8] text-[10px] top-[16px] w-[21.48px]">
        <p className="leading-[28px]">g/dL</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[293.59px] top-1/2" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-[#f8fafc] h-[63px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container12 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[80px]">
        <p className="leading-[20px]">Hemoglobin</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[11px] w-[111.88px]">
        <p className="leading-[16.5px]">Normal: 11.5-15.5 g/dL</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[13px] top-1/2 w-[111.88px]" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[30px] leading-[0] relative shrink-0 text-right w-[51.41px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[28px] justify-center right-[21.49px] text-[#dc2626] text-[18px] top-[13.5px] w-[29.92px]">
        <p className="leading-[28px]">{`7.2 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[28px] justify-center right-0 text-[#94a3b8] text-[10px] top-[16px] w-[21.48px]">
        <p className="leading-[28px]">g/dL</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[293.59px] top-1/2" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-[#f8fafc] h-[63px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container16 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[116.78px]">
        <p className="leading-[20px]">White Blood Cells</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[11px] w-[94.94px]">
        <p className="leading-[16.5px]">Normal: 5-10 K/u/L</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-[116.78px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[30px] leading-[0] relative shrink-0 text-right w-[66px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[28px] justify-center right-[25.42px] text-[#1577d3] text-[18px] top-[13.5px] w-[40.58px]">
        <p className="leading-[28px]">{`14.5 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[28px] justify-center right-0 text-[#94a3b8] text-[10px] top-[16px] w-[25.42px]">
        <p className="leading-[28px]">K/u/L</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Paragraph4 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[13px] relative w-full">
          <Container20 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
      <BackgroundBorderShadow3 />
      <BackgroundBorderShadow4 />
    </div>
  );
}

function SectionRecentLabResults() {
  return (
    <div className="absolute bg-[#206fa8] content-stretch flex flex-col items-start left-0 px-[16px] py-[8px] right-0 top-[526.5px]" data-name="Section - Recent Lab Results">
      <Container3 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[7.933px] relative shrink-0 w-[5.25px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.25 7.93333">
        <g id="Container">
          <path d={svgPaths.p2ee18bc0} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[12px] text-center tracking-[0.6px] uppercase w-[158.38px]">
        <p className="leading-[16px]">See More Lab Results</p>
      </div>
      <Container25 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-start justify-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Button4 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] tracking-[1.4px] uppercase w-full">
          <p className="leading-[20px]">Medical History</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between leading-[0] relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center relative shrink-0 text-[#0f172a] text-[12px] w-[109.16px]">
          <p className="leading-[16px]">Medicrest Hospital</p>
        </div>
        <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[14px] justify-center not-italic relative shrink-0 text-[#94a3b8] text-[9px] uppercase w-[55.66px]">
          <p className="leading-[13.5px]">Mar 4, 2024</p>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] relative shrink-0 text-[#ef4444] text-[11px] w-[3.89px]">
        <p className="leading-[16.5px]">•</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <Container27 />
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[11px] w-[134.34px]">
        <p className="leading-[16.5px]">Penicillin Allergy detected</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[11px] w-[3.89px]">
        <p className="leading-[16.5px]">•</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <Container28 />
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[11px] w-[147.59px]">
        <p className="leading-[16.5px]">Dematraxone dosage (50mg)</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[11px] w-[3.89px]">
        <p className="leading-[16.5px]">•</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <Container29 />
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[11px] w-[150.44px]">
        <p className="leading-[16.5px]">Reported severe pain in joints</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative w-full">
        <Item />
        <Item1 />
        <Item2 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[13px] relative w-full">
        <Paragraph5 />
        <List />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="Container">
          <path d={svgPaths.p2fc55100} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#1577d3] content-stretch flex items-center justify-center left-0 rounded-[9999px] size-[24px] top-[6px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_0px_0px_4px_white] size-[24px] top-0" data-name="Overlay+Shadow" />
      <Container30 />
    </div>
  );
}

function TimelineItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline Item 1">
      <div className="content-stretch flex flex-col items-start pl-[32px] relative w-full">
        <BackgroundBorder1 />
        <Background1 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between leading-[0] relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center relative shrink-0 text-[#0f172a] text-[12px] w-[101.95px]">
          <p className="leading-[16px]">Springhope Clinic</p>
        </div>
        <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[14px] justify-center not-italic relative shrink-0 text-[#94a3b8] text-[9px] uppercase w-[56.92px]">
          <p className="leading-[13.5px]">Jan 20, 2024</p>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[16.5px] relative shrink-0 text-[#475569] text-[11px] w-full">
          <p className="mb-0">Hyperglycemia management initiated. Fluids and</p>
          <p>electrolyte balance monitoring.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[13px] relative w-full">
        <Paragraph6 />
        <Container31 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Container">
          <path d={svgPaths.p39133080} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#e2e8f0] content-stretch flex items-center justify-center left-0 rounded-[9999px] size-[24px] top-[6px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_0px_0px_4px_white] size-[24px] top-0" data-name="Overlay+Shadow" />
      <Container32 />
    </div>
  );
}

function TimelineItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline Item 2">
      <div className="content-stretch flex flex-col items-start pl-[32px] relative w-full">
        <BackgroundBorder2 />
        <Background2 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between leading-[0] relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center relative shrink-0 text-[#0f172a] text-[12px] w-[107.3px]">
          <p className="leading-[16px]">Lifecare Pediatrics</p>
        </div>
        <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[14px] justify-center not-italic relative shrink-0 text-[#94a3b8] text-[9px] uppercase w-[55.02px]">
          <p className="leading-[13.5px]">Dec 11, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] justify-center leading-[16.5px] not-italic relative shrink-0 text-[#475569] text-[11px] w-full">
          <p className="mb-0">Asthma attack: Emergency Nebulization</p>
          <p>administered.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[13px] relative w-full">
        <Paragraph7 />
        <Container33 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="Container">
          <path d={svgPaths.pf997800} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#e2e8f0] content-stretch flex items-center justify-center left-0 rounded-[9999px] size-[24px] top-[6px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_0px_0px_4px_white] size-[24px] top-0" data-name="Overlay+Shadow" />
      <Container34 />
    </div>
  );
}

function TimelineItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline Item 3">
      <div className="content-stretch flex flex-col items-start pl-[32px] relative w-full">
        <BackgroundBorder3 />
        <Background3 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[8px] relative w-full">
        <div className="absolute bg-[#e2e8f0] bottom-[16.5px] left-[11px] top-[8px] w-px" data-name="Vertical Divider" />
        <TimelineItem />
        <TimelineItem1 />
        <TimelineItem2 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 size-[10.325px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.325 10.325">
        <g id="Container">
          <path d={svgPaths.p2c5e5100} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[12px] text-center tracking-[0.6px] uppercase w-[193.14px]">
          <p className="leading-[16px]">View Full Medical History</p>
        </div>
        <Container35 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pt-[17px] relative w-full">
        <Button5 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.6)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_10px_20px_-5px_rgba(0,0,0,0.04)]" data-name="Overlay+Shadow" />
        <Heading2 />
        <Container26 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function SectionMedicalHistory() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[16px] py-[24px] right-0 top-[954.5px]" data-name="Section - Medical History">
      <Container24 />
      <BackgroundBorder />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 25">
        <g id="Container">
          <path d={svgPaths.p3cf81080} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px] w-[92.61px]">
          <p className="leading-[20px]">Request Blood</p>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#dc2626] content-stretch flex flex-col gap-[8px] items-center justify-center left-0 pl-[40.19px] pr-[40.2px] py-[17px] rounded-[16px] top-[9px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ef4444] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_10px_15px_-3px_#fecaca,0px_4px_6px_-4px_#fecaca]" data-name="Button:shadow" />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20px] left-[calc(50%-0.01px)] top-[calc(50%-14px)] w-[22.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 20">
        <g id="Container">
          <path d={svgPaths.p26c50080} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-[calc(50%-0.01px)] top-[calc(50%+14px)]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px] w-[115.27px]">
        <p className="leading-[20px]">Record Treatment</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#f59e0b] border border-[#fbbf24] border-solid h-[82px] left-[185px] rounded-[16px] top-[9px] w-[173px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px] rounded-[16px] shadow-[0px_10px_15px_-3px_#fef3c7,0px_4px_6px_-4px_#fef3c7]" data-name="Button:shadow" />
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[192px] relative shrink-0 w-full" data-name="Container">
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p143e1930} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#1577d3] content-stretch flex gap-[8px] items-center justify-center px-px py-[17px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(21,119,211,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(21,119,211,0.2),0px_4px_6px_-4px_rgba(21,119,211,0.2)]" data-name="Button:shadow" />
      <Container41 />
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[214px]">
        <p className="leading-[24px]">Tap to Contact Emergencies</p>
      </div>
    </div>
  );
}

function BottomActionButton() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom Action Button">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
        <Container36 />
        <Button8 />
      </div>
    </div>
  );
}

function BottomActionButtonMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[8px] right-0 top-[1423px]" data-name="Bottom Action Button:margin">
      <BottomActionButton />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 25">
        <g id="Container">
          <path d={svgPaths.p30b4c680} fill="var(--fill-0, #1577D3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[77.06px] relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[56px] justify-center leading-[28px] relative shrink-0 text-[#0f172a] text-[20px] tracking-[-0.5px] w-[98.86px]">
        <p className="mb-0">My Health</p>
        <p>Dashboard</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Container43 />
        <Heading />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#fa0606] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#fecaca] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[33.56px] py-[7px] relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[32px] justify-center leading-[16px] relative shrink-0 text-[#f8f2f2] text-[12px] text-center uppercase w-[76.96px]">
          <p className="mb-0">Emergency</p>
          <p>Access</p>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pb-[17px] pt-[16px] px-[16px] right-0 top-0" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container42 />
      <Button9 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white h-[1727px] left-0 right-0 top-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <SectionProfileSummary />
      <NavTabBar />
      <WarningNoteMargin />
      <SectionRecentLabResults />
      <SectionMedicalHistory />
      <BottomActionButtonMargin />
      <Header />
    </div>
  );
}

function Container44() {
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

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#1577d3] text-[10px] w-[28.068px]">
        <p className="leading-[15px]">Home</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative">
        <Container44 />
        <Margin2 />
      </div>
    </div>
  );
}

function Container45() {
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

function Margin3() {
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
        <Container45 />
        <Margin3 />
      </div>
    </div>
  );
}

function Container46() {
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

function Margin4() {
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
        <Container46 />
        <Margin4 />
      </div>
    </div>
  );
}

function Container47() {
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

function Margin5() {
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
        <Container47 />
        <Margin5 />
      </div>
    </div>
  );
}

function BottomNavigation() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex gap-[43.3px] items-center left-0 max-w-[448px] pb-[4px] pl-[29.64px] pr-[29.67px] pt-[5px] right-0" data-name="Bottom Navigation">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#f6f7f8] relative size-full" data-name="Body">
      <Background />
      <BottomNavigation />
    </div>
  );
}