import svgPaths from "./svg-m7totoasmf";
import imgImage from "figma:asset/144e019ecc90f322f5c3a441fad879d0d5d84a4e.png";
import imgRemoveTheNoiseAroundItMakeItClean2KDelpmaspuRemovebgPreview1 from "figma:asset/e5b58051fcd947c0dbd69ecdfdcc7e41b5c6ae00.png";

function Svg() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p22cb9200} fill="var(--fill-0, #00D2FF)" fillOpacity="0.8" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(0,210,255,0.8)] tracking-[-0.5px] w-[124.75px]">
        <p className="leading-[15px]">SECURE LINK ESTABLISHED</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center right-0 top-0" data-name="Container">
      <Svg />
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Container">
      <div className="bg-[#00d2ff] h-[8px] shrink-0 w-[4px]" data-name="Background" />
      <div className="bg-[#00d2ff] h-[12px] shrink-0 w-[4px]" data-name="Background" />
      <div className="bg-[#00d2ff] h-[16px] shrink-0 w-[4px]" data-name="Background" />
      <div className="bg-[#00d2ff] h-[20px] shrink-0 w-[4px]" data-name="Background" />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[122.75px] pt-[4px] top-[15px]" data-name="Margin">
      <Container2 />
    </div>
  );
}

function RightConnectionStatus() {
  return (
    <div className="-translate-y-1/2 absolute h-[39px] left-[221.25px] top-[calc(50%-0.5px)] w-[144.75px]" data-name="Right: Connection Status">
      <Container />
      <Margin />
    </div>
  );
}

function MainHeader() {
  return (
    <div className="bg-[rgba(15,23,42,0.4)] h-[104px] relative shrink-0 w-full" data-name="MainHeader">
      <div aria-hidden="true" className="absolute border-[rgba(59,130,246,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <RightConnectionStatus />
      <div className="absolute h-[93px] left-[-14px] top-[-13px] w-[167px]" data-name="Remove_the_noise_around_it_make_it_clean_2k_delpmaspu-removebg-preview 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRemoveTheNoiseAroundItMakeItClean2KDelpmaspuRemovebgPreview1} />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[153px] not-italic text-[#fffbfb] text-[20px] top-[35px] tracking-[1.8px] whitespace-nowrap">
        <p className="leading-[28px]">ID</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="SVG">
          <path d={svgPaths.p25ae4b80} id="Vector" stroke="var(--stroke-0, #00D2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
          <path d={svgPaths.p10264900} id="Vector_2" stroke="var(--stroke-0, #00D2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="absolute bg-[#3b82f6] blur-[20px] inset-0 opacity-20" data-name="Background+Blur" />
      <Svg1 />
    </div>
  );
}

function IconSymbol() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-start justify-center left-[41px] right-[41px] top-[41px]" data-name="Icon/Symbol">
      <Container3 />
    </div>
  );
}

function Heading1MainAlertText() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[41px] right-[41px] top-[153px]" data-name="Heading 1 - Main Alert Text">
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[180px] justify-center leading-[45px] not-italic relative shrink-0 text-[#f1f5f9] text-[36px] text-center text-shadow-[0px_0px_20px_rgba(0,210,255,0.4),0px_0px_10px_rgba(0,210,255,0.8)] w-[154.3px]">
        <p className="mb-0">Family</p>
        <p className="mb-0">Located.</p>
        <p className="mb-0">Contacts</p>
        <p>Alerted.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[41px] max-w-[512px] pb-[0.625px] right-[41px] top-[356.38px]" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] h-[117px] justify-center leading-[29.25px] not-italic relative shrink-0 text-[#94a3b8] text-[18px] text-center w-[249.42px]">
        <p className="mb-0">Primary guardian and</p>
        <p className="mb-0">emergency contacts have been</p>
        <p className="mb-0">notified of the patient’s hospital</p>
        <p>admission and location.</p>
      </div>
    </div>
  );
}

function AssuranceTag() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(59,130,246,0.1)] content-stretch flex items-start justify-center left-1/2 pl-[40.16px] pr-[40.17px] py-[13px] rounded-[9999px] top-[506px]" data-name="Assurance Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(96,165,250,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[40px] justify-center leading-[20px] not-italic relative shrink-0 text-[#00d2ff] text-[14px] text-center tracking-[0.7px] uppercase w-[179.67px]">
        <p className="mb-0">This patient will not</p>
        <p>remain unidentified.</p>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(15,23,42,0.6)] flex-[1_0_0] h-[613px] max-w-[672px] min-h-px min-w-px relative rounded-[8px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute border-[#00d2ff] border-l-2 border-solid border-t-2 left-[-1px] size-[15px] top-[-1px]" data-name="Decorative UI Corners" />
        <div className="absolute border-[#00d2ff] border-r-2 border-solid border-t-2 right-[-1px] size-[15px] top-[-1px]" data-name="Border" />
        <div className="absolute border-[#00d2ff] border-b-2 border-l-2 border-solid bottom-[-1px] left-[-1px] size-[15px]" data-name="Border" />
        <div className="absolute border-[#00d2ff] border-b-2 border-r-2 border-solid bottom-[-1px] right-[-1px] size-[15px]" data-name="Border" />
        <IconSymbol />
        <Heading1MainAlertText />
        <Container4 />
        <AssuranceTag />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,210,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_20px_0px_rgba(0,210,255,0.1)]" />
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="MainContent">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[27.87px] pt-[27.88px] px-[24px] relative w-full">
          <OverlayBorderShadowOverlayBlur />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[10px] tracking-[2px] uppercase w-[264.64px]">
          <p className="leading-[15px]">EUTOPIA EMERGENCY NETWORK ACTIVE</p>
        </div>
      </div>
    </div>
  );
}

function StatusIndicator() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex gap-[8px] items-center px-[17px] py-[7px] relative rounded-[9999px] shrink-0" data-name="Status Indicator">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#22c55e] rounded-[9999px] shadow-[0px_0px_8px_0px_#22c55e] shrink-0 size-[8px]" data-name="Background+Shadow" />
      <Container5 />
    </div>
  );
}

function StatusIndicatorMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0" data-name="Status Indicator:margin">
      <StatusIndicator />
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute h-[128.25px] left-0 top-0 w-[342px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342 128.25">
        <g id="SVG">
          <path d={svgPaths.p3788ef80} fill="var(--fill-0, #00D2FF)" id="Vector" />
          <path d={svgPaths.p1ba09880} fill="var(--fill-0, #00D2FF)" id="Vector_2" />
          <path d={svgPaths.p2224ef00} fill="var(--fill-0, #00D2FF)" id="Vector_3" />
          <path d={svgPaths.p2dae3300} fill="var(--fill-0, #00D2FF)" id="Vector_4" />
          <path d={svgPaths.p9475780} fill="var(--fill-0, #00D2FF)" id="Vector_5" />
          <path d={svgPaths.p304cb300} fill="var(--fill-0, #00D2FF)" id="Vector_6" />
          <path d={svgPaths.p3b252c00} fill="var(--fill-0, #00D2FF)" id="Vector_7" />
          <g id="Vector_8">
            <path d={svgPaths.p247bdac0} fill="var(--fill-0, #00D2FF)" />
            <path d={svgPaths.p247bdac0} stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="1.71 0.86" strokeWidth="0.21375" />
          </g>
          <g id="Vector_9">
            <path d={svgPaths.p3175d00} fill="var(--fill-0, #00D2FF)" />
            <path d={svgPaths.p3175d00} stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="1.71 0.86" strokeWidth="0.21375" />
          </g>
          <g id="Vector_10">
            <path d={svgPaths.p2a83f180} fill="var(--fill-0, #00D2FF)" />
            <path d={svgPaths.p2a83f180} stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="1.71 0.86" strokeWidth="0.21375" />
          </g>
          <path d={svgPaths.p25d7c660} fill="var(--fill-0, #00D2FF)" fillOpacity="0.1" id="Vector_11" />
          <path d={svgPaths.p347d2180} fill="var(--fill-0, #00D2FF)" fillOpacity="0.1" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function WorldMapGraphicMargin() {
  return (
    <div className="h-[108.25px] max-w-[896px] relative shrink-0 w-full" data-name="World Map Graphic:margin">
      <Svg2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[24px] relative w-full">
          <StatusIndicatorMargin />
          <WorldMapGraphicMargin />
        </div>
      </div>
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#1c3445] content-stretch flex flex-col items-start relative size-full" data-name="Body">
      <div className="absolute inset-0" data-name="Background Layers" style={{ backgroundImage: "linear-gradient(rgba(0, 210, 255, 0.05) 3.3333%, rgba(0, 210, 255, 0) 3.3333%), linear-gradient(90deg, rgba(0, 210, 255, 0.05) 3.3333%, rgba(0, 210, 255, 0) 3.3333%)" }} />
      <div className="absolute bg-size-[512px_512px] bg-top-left inset-0 opacity-10" data-name="Image" style={{ backgroundImage: `url('${imgImage}')` }} />
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(30,58,138,0.2)] via-1/2 via-[rgba(0,0,0,0)]" data-name="Gradient" />
      <div className="absolute bg-gradient-to-r from-[rgba(0,210,255,0)] h-[2px] left-0 to-[rgba(0,210,255,0)] top-0 via-1/2 via-[rgba(0,210,255,0.2)] w-[390px]" data-name="Horizontal Divider" />
      <MainHeader />
      <MainContent />
      <Footer />
    </div>
  );
}