import imgWhatsAppImage20260311At123612AmRemovebgPreview12 from "figma:asset/897384dbb22eab0d327a4fffcdbc0cf5d7a9a825.png";
import imgEmbedTheLogoEutopiaOnTheBand2KDelpmaspu11 from "figma:asset/0ef9aefb35b3dc403d19a813c5b19450ec33bdce.png";

function Frame() {
  return <div className="absolute h-[63px] left-[24px] top-[32px] w-[113px]" />;
}

function Container() {
  return <div className="-translate-y-1/2 absolute h-[34px] left-[235.34px] top-[calc(50%+4px)] w-[130.66px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(0,242,255,0.8)] tracking-[3px] w-full">
        <p className="leading-[15px]">EMERGENCY ACCESS</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] pt-[4px] top-[47px] w-[130.66px]" data-name="Margin">
      <Container1 />
    </div>
  );
}

function TopHeaderNavigation() {
  return (
    <div className="h-[119px] relative shrink-0 w-full" data-name="Top Header Navigation">
      <Frame />
      <Container />
      <Margin />
      <div className="absolute h-[54px] left-[-20px] top-[-7px] w-[179px]" data-name="WhatsApp_Image_2026-03-11_at_12.36.12_AM-removebg-preview (1) 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhatsAppImage20260311At123612AmRemovebgPreview12} />
      </div>
    </div>
  );
}

function Shadow() {
  return <div className="absolute bottom-[34px] h-[17.5px] left-[2px] right-[2px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.1),0px_10px_8px_0px_rgba(0,0,0,0.04)]" data-name="Shadow" />;
}

function MainScannerCircle() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(0,242,255,0.05)] h-[252px] left-[70px] rounded-[9999px] top-[117px] w-[256px]" data-name="Main Scanner Circle">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <div className="h-[318px] relative shrink-0 w-[570px]" data-name="Embed_the_logo_eutopia_on_the_band_2k_delpmaspu (1) 1">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEmbedTheLogoEutopiaOnTheBand2KDelpmaspu11} />
        </div>
        <Shadow />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,242,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_0px_20px_0px_rgba(0,242,255,0.3)]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white tracking-[-0.5px] uppercase w-[231.56px]">
        <p className="leading-[28px]">Tap Eutopia Bracelet</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#eef4fb] text-[14px] text-center w-[261.63px]">
        <p className="leading-[20px]">Hold device near wearable to begin scan</p>
      </div>
    </div>
  );
}

function ScanningText() {
  return (
    <div className="absolute bottom-[28.5px] content-stretch flex flex-col gap-[8px] items-start left-[24px] right-[24px]" data-name="Scanning Text">
      <Heading />
      <Container2 />
    </div>
  );
}

function MainScanningArea() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Main Scanning Area">
      <MainScannerCircle />
      <div className="absolute flex inset-[75.4px_6.9px] items-center justify-center">
        <div className="flex-none h-[379.2px] w-[376.2px]">
          <div className="border-2 border-[rgba(0,242,255,0.1)] border-solid rounded-[9999px] size-full" data-name="Decorative Outer Rings" />
        </div>
      </div>
      <div className="absolute flex inset-[49.75px_-18.75px] items-center justify-center">
        <div className="flex-none h-[430.5px] w-[427.5px]">
          <div className="border-2 border-[rgba(0,242,255,0.05)] border-solid rounded-[9999px] size-full" data-name="Border" />
        </div>
      </div>
      <ScanningText />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#00f2ff] text-[10px] tracking-[1px] uppercase w-[95.61px]">
        <p className="leading-[15px]">System Status</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-white w-[192.25px]">
        <p className="leading-[28px]">SCANNING INITIATED</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[192.25px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,242,255,0.6)] w-[93.63px]">
        <p className="leading-[16px]">0.04s latency</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container7 />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="bg-[#1e293b] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Progress Bar">
      <div className="absolute bg-gradient-to-r from-[#1c4989] inset-[0_35%_0_0] rounded-[9999px] shadow-[0px_0px_10px_0px_rgba(0,242,255,0.5)] to-[#0557ea]" data-name="Gradient+Shadow" />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eff5fd] text-[9px] tracking-[0.45px] uppercase w-full">
          <p className="leading-[13.5px]">Identity</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] w-full">
          <p className="leading-[16px]">Searching...</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(30,41,59,0.3)] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(51,65,85,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[13px] relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eff3f9] text-[9px] tracking-[0.45px] uppercase w-full">
          <p className="leading-[13.5px]">Vitals</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] w-full">
          <p className="leading-[16px]">Connecting...</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(30,41,59,0.3)] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(51,65,85,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[13px] relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[68px] items-start justify-between pt-[8px] relative shrink-0 w-full" data-name="Container">
      <OverlayBorder />
      <OverlayBorder1 />
    </div>
  );
}

function FooterBottomStatusArea() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer - Bottom Status Area">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[48px] pt-[32px] px-[32px] relative w-full">
        <Container3 />
        <ProgressBar />
        <Container8 />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex flex-col h-[884px] items-start overflow-clip relative shrink-0 w-full" data-name="Background" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 884\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(50.558 0 0 114.6 -16055 -36391)\\'><stop stop-color=\\'rgba(0,242,255,0.05)\\' offset=\\'0.016071\\'/><stop stop-color=\\'rgba(0,242,255,0)\\' offset=\\'0.016071\\'/></radialGradient></defs></svg>')" }}>
      <TopHeaderNavigation />
      <MainScanningArea />
      <FooterBottomStatusArea />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#1c3445] content-stretch flex flex-col items-start relative size-full" data-name="Body">
      <Background />
    </div>
  );
}