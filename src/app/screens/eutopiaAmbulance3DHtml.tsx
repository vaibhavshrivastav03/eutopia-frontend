// EUTOPIA ID — Request Ambulance + live dispatch (inDrive-style).
// Self-contained HTML/CSS/SVG/JS exported as a string and rendered via iframe.
export const eutopiaAmbulance3DHtml = String.raw`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
<title>EUTOPIA ID — Request Ambulance</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Chakra+Petch:wght@600;700&display=swap" rel="stylesheet">
<style>
  :root{
    --blue:#2f6fff; --blue-soft:#e6efff;
    --green:#18c07a; --red:#ff3b47;
    --ink:#0f1623; --ink-2:#3a4255; --muted:#8893a5;
    --line:#e7eaf0; --bg:#eef2f7; --paper:#ffffff;
    --shadow:0 18px 40px rgba(15,22,35,.12);
  }
  *{box-sizing:border-box}
  html,body{margin:0;height:100%;background:#0a1628;font-family:'Manrope',system-ui,sans-serif;color:var(--ink);}
  body{display:flex;align-items:stretch;justify-content:center;}
  .stage{position:relative;width:100%;max-width:430px;min-height:100vh;background:var(--bg);overflow:hidden;}

  /* MAP */
  .map{position:absolute;inset:0;overflow:hidden;background:#eef2f7;}
  .map svg{position:absolute;inset:0;width:100%;height:100%;}
  .map-tilt{position:absolute;inset:-10% -5%;transform:perspective(900px) rotateX(8deg);transform-origin:50% 60%;}

  /* address card */
  .addr{position:absolute;top:14px;left:14px;right:14px;background:#fff;border-radius:16px;padding:12px 12px;
    box-shadow:var(--shadow);display:flex;align-items:center;gap:10px;z-index:5;}
  .addr .col{flex:1;min-width:0;}
  .addr .row{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--ink);}
  .addr .row + .row{margin-top:6px;}
  .addr .row .lbl{color:var(--muted);font-size:11px;letter-spacing:.05em;}
  .addr .row .val{font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .addr .dot{width:9px;height:9px;border-radius:50%;flex:0 0 9px;}
  .addr .dot.g{background:var(--green);box-shadow:0 0 0 3px rgba(24,192,122,.18);}
  .addr .dot.r{background:var(--red);box-shadow:0 0 0 3px rgba(255,59,71,.18);}
  .addr .edit{width:34px;height:34px;border-radius:50%;background:#f3f5f9;border:0;display:flex;align-items:center;justify-content:center;color:var(--ink-2);font-size:18px;cursor:pointer;}

  /* back button */
  .back{position:absolute;left:14px;top:14px;width:42px;height:42px;border-radius:50%;background:#fff;border:0;
    display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow);cursor:pointer;z-index:20;}
  .back svg{width:18px;height:18px;}
  /* shift address card so it doesn't sit under the back button */
  .addr{padding-left:62px !important;}

  /* SHEET */
  .sheet{position:absolute;left:0;right:0;bottom:0;max-height:72dvh;background:#fff;border-radius:24px 24px 0 0;
    box-shadow:0 -10px 30px rgba(15,22,35,.08);padding:10px 18px 18px;display:flex;flex-direction:column;
    overflow-y:auto;-webkit-overflow-scrolling:touch;
    transform:translateY(20px);opacity:0;animation:sheetIn .7s cubic-bezier(.16,1,.3,1) .2s forwards;z-index:6;}
  .sheet::-webkit-scrollbar{display:none;}
  @keyframes sheetIn{to{transform:translateY(0);opacity:1;}}
  .grab{width:42px;height:5px;border-radius:99px;background:#e3e7ee;margin:6px auto 10px;}

  /* unit card list */
  .unit{display:flex;align-items:center;gap:12px;padding:12px;border-radius:16px;border:1.5px solid var(--line);
    background:#fff;cursor:pointer;transition:all .2s ease;}
  .unit + .unit{margin-top:8px;}
  .unit.selected{border-color:var(--blue);background:linear-gradient(180deg,#f3f7ff,#fff);box-shadow:0 8px 22px rgba(47,111,255,.10);}
  .unit .ico{width:46px;height:46px;border-radius:14px;background:#f3f5f9;display:flex;align-items:center;justify-content:center;flex:0 0 46px;}
  .unit .ico svg{width:30px;height:30px;}
  .unit .meta{flex:1;min-width:0;}
  .unit .ttl{font-weight:700;font-size:14px;display:flex;align-items:center;gap:8px;}
  .unit .sub{font-size:12px;color:var(--muted);margin-top:2px;}
  .badge{display:inline-block;padding:2px 8px;border-radius:99px;font-size:9.5px;font-weight:800;letter-spacing:.12em;
    background:#e9f7ef;color:#0e7a4d;text-transform:uppercase;}
  .price{font-weight:800;font-size:14px;color:var(--ink);}

  /* toggle row */
  .toggle{display:flex;align-items:center;justify-content:space-between;padding:12px 4px;margin-top:8px;}
  .toggle .t{font-size:13px;color:var(--ink);font-weight:600;}
  .toggle .s{font-size:11px;color:var(--muted);margin-top:2px;}
  .switch{width:44px;height:26px;border-radius:99px;background:#e3e7ee;position:relative;cursor:pointer;transition:background .2s ease;flex:0 0 44px;}
  .switch::after{content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 2px 6px rgba(0,0,0,.15);transition:transform .2s ease;}
  .switch.on{background:var(--blue);}
  .switch.on::after{transform:translateX(18px);}

  /* CTA */
  .cta-wrap{position:relative;margin-top:auto;padding-top:6px;z-index:10;}
  .cta{position:relative;width:100%;height:58px;border-radius:18px;border:0;color:#fff;font-weight:800;letter-spacing:.18em;
    font-size:14px;background:linear-gradient(180deg,#ff5d63,#e0212c);box-shadow:0 16px 32px -10px rgba(224,33,44,.55);
    cursor:pointer;overflow:hidden;text-transform:uppercase;touch-action:manipulation;-webkit-tap-highlight-color:transparent;
    user-select:none;z-index:11;}
  .cta:active{transform:scale(.98);}
  .cta .ripple{position:absolute;border-radius:50%;background:rgba(255,255,255,.45);transform:scale(0);pointer-events:none;animation:ripple .7s ease-out;}
  @keyframes ripple{to{transform:scale(14);opacity:0;}}
  .cta::before{content:"";position:absolute;inset:-4px;border-radius:22px;border:2px solid rgba(255,59,71,.45);animation:pulseRing 1.6s ease-out infinite;pointer-events:none;}
  @keyframes pulseRing{0%{transform:scale(.95);opacity:.7;} 100%{transform:scale(1.08);opacity:0;}}

  .footer-mark{margin-top:10px;text-align:center;font-family:'Chakra Petch',sans-serif;letter-spacing:.45em;font-size:10px;color:var(--muted);}

  /* state-specific */
  .state-b, .state-c{display:none;flex-direction:column;height:100%;}
  body[data-state="b"] .state-a{display:none;}
  body[data-state="b"] .state-b{display:flex;}
  body[data-state="c"] .state-a{display:none;}
  body[data-state="c"] .state-c{display:flex;}

  /* state B */
  .finding{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;text-align:center;gap:14px;padding:20px;}
  .finding .title{font-size:18px;font-weight:800;}
  .finding .sub{font-size:13px;color:var(--muted);}
  .dots{display:inline-flex;gap:6px;}
  .dots span{width:8px;height:8px;border-radius:50%;background:var(--blue);opacity:.3;animation:bounce 1.1s infinite;}
  .dots span:nth-child(2){animation-delay:.15s;}
  .dots span:nth-child(3){animation-delay:.3s;}
  @keyframes bounce{0%,80%,100%{transform:translateY(0);opacity:.3;} 40%{transform:translateY(-6px);opacity:1;}}

  /* state C — assigned unit */
  .assigned{display:flex;align-items:center;gap:12px;padding:6px 4px 12px;}
  .avatar{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#2f6fff,#5da0ff);color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:16px;}
  .assigned .name{font-weight:800;font-size:15px;}
  .assigned .sub{color:var(--muted);font-size:12px;margin-top:2px;}
  .star{color:#f5b945;font-weight:700;}
  .stats{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:6px 0 10px;}
  .stat{background:#f6f8fb;border-radius:14px;padding:10px;text-align:center;}
  .stat .v{font-weight:800;font-size:16px;}
  .stat .l{font-size:10px;color:var(--muted);letter-spacing:.18em;text-transform:uppercase;margin-top:2px;}
  .progress{height:6px;border-radius:99px;background:#eef1f6;overflow:hidden;margin:0 4px 12px;}
  .progress > i{display:block;height:100%;width:5%;background:linear-gradient(90deg,#2f6fff,#7aa8ff);transition:width .8s ease;}
  .actions{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;}
  .act{height:54px;border-radius:16px;border:0;font-weight:800;font-size:12px;letter-spacing:.18em;text-transform:uppercase;display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;}
  .act.call{background:#18c07a;color:#fff;}
  .act.msg{background:#f3f5f9;color:var(--ink);}
  .act.cancel{background:#fff0f1;color:var(--red);border:1.5px solid #ffd5d8;}

  /* radar pulse on user dot */
  .ring{transform-origin:center;animation:userPulse 2.2s ease-out infinite;}
  .ring.r2{animation-delay:.7s;}
  .ring.r3{animation-delay:1.4s;}
  @keyframes userPulse{0%{transform:scale(.6);opacity:.55;} 100%{transform:scale(2.4);opacity:0;}}

  /* sonar sweep on user dot */
  .sonar{transform-origin:center;animation:sweep 2.4s linear infinite;opacity:.7;}
  @keyframes sweep{to{transform:rotate(360deg);}}

  /* drop-in animation */
  .drop{transform-origin:center bottom;animation:drop .55s cubic-bezier(.34,1.56,.64,1) both;}

  /* idle bob for ambulances */
  .amb-idle{animation:bob 2.6s ease-in-out infinite;transform-origin:center;}
  @keyframes bob{0%,100%{transform:translateY(0) rotate(var(--rot,0deg));} 50%{transform:translateY(-2px) rotate(calc(var(--rot,0deg) + 2deg));}}

  /* big radar over map (state B) */
  .scan{position:absolute;left:50%;top:42%;width:0;height:0;border-radius:50%;border:2px solid rgba(47,111,255,.45);transform:translate(-50%,-50%);pointer-events:none;z-index:4;}
  body[data-state="b"] .scan{animation:scan 1.8s ease-out infinite;}
  @keyframes scan{0%{width:30px;height:30px;opacity:.8;} 100%{width:520px;height:520px;opacity:0;}}

  /* ==== PREMIUM DISPATCH SCREEN (state B) ==== */
  .dispatch{position:absolute;inset:0;z-index:50;display:none;overflow:hidden;
    background:radial-gradient(ellipse 80% 60% at 50% 25%, var(--dispCenter,#1a3a78) 0%, var(--dispMid,#0a1838) 45%, var(--dispEdge,#020611) 100%);}
  body[data-state="b"] .dispatch{display:block;animation:fadeIn .5s ease-out;}
  @keyframes fadeIn{from{opacity:0;}to{opacity:1;}}

  .stars{position:absolute;inset:0;}
  .stars i{position:absolute;background:#fff;border-radius:50%;animation:twinkle 3s ease-in-out infinite;}
  @keyframes twinkle{0%,100%{opacity:.2;transform:scale(.7);}50%{opacity:1;transform:scale(1.1);}}

  /* glowing wordmark */
  .wm{position:absolute;left:0;right:0;top:14%;text-align:center;font-family:'Chakra Petch',sans-serif;
    font-weight:700;letter-spacing:.45em;font-size:38px;color:var(--dispGlow,#7fc4ff);z-index:6;
    text-shadow:0 0 18px var(--dispGlow,#7fc4ff),0 0 36px var(--dispGlowSoft,rgba(47,111,255,.6)),0 0 72px var(--dispGlowSoft,rgba(47,111,255,.35));
    animation:wmIn 1s cubic-bezier(.16,1,.3,1) both, breathe 2.6s ease-in-out 1s infinite;}
  @keyframes wmIn{0%{opacity:0;letter-spacing:1.2em;filter:blur(8px);}100%{opacity:1;letter-spacing:.45em;filter:blur(0);}}
  @keyframes breathe{0%,100%{text-shadow:0 0 18px var(--dispGlow,#7fc4ff),0 0 36px var(--dispGlowSoft,rgba(47,111,255,.6));transform:scale(1);}
    50%{text-shadow:0 0 28px var(--dispGlow,#7fc4ff),0 0 60px var(--dispGlowSoft,rgba(47,111,255,.85)),0 0 110px var(--dispGlowSoft,rgba(47,111,255,.5));transform:scale(1.02);}}
  .wm::after{content:"";position:absolute;left:50%;bottom:-12px;transform:translateX(-50%);width:120px;height:1px;
    background:linear-gradient(90deg,transparent,var(--dispGlow,#7fc4ff),transparent);box-shadow:0 0 8px var(--dispGlow,#7fc4ff);}
  .wm-sub{position:absolute;left:0;right:0;top:calc(14% + 56px);text-align:center;font-family:'Manrope',sans-serif;
    font-size:10px;letter-spacing:.6em;font-weight:700;text-transform:uppercase;
    background:linear-gradient(90deg,rgba(168,197,255,.4) 0%,#fff 50%,rgba(168,197,255,.4) 100%);
    background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;
    animation:shimmer 2.4s linear infinite;z-index:6;}
  @keyframes shimmer{0%{background-position:200% 0;}100%{background-position:-200% 0;}}

  /* SKYLINE silhouettes */
  .skyline{position:absolute;left:-5%;right:-5%;bottom:0;height:55%;pointer-events:none;z-index:3;}
  .sky-layer{position:absolute;left:0;right:0;bottom:0;width:110%;}
  .sky-back{bottom:36%;opacity:.5;filter:blur(.6px);}
  .sky-mid{bottom:18%;opacity:.78;}
  .sky-front{bottom:0;opacity:1;}

  /* spotlight sweeps */
  .spot{position:absolute;left:50%;top:0;width:60%;height:80%;transform:translateX(-50%) rotate(-22deg);transform-origin:50% 0;
    background:linear-gradient(180deg,var(--dispBeam,rgba(127,196,255,.22)) 0%,transparent 75%);
    mix-blend-mode:screen;animation:sweep2 6s ease-in-out infinite;z-index:4;}
  @keyframes sweep2{0%,100%{transform:translateX(-50%) rotate(-22deg);}50%{transform:translateX(-50%) rotate(22deg);}}
  .spot.s2{animation-delay:-3s;opacity:.5;}

  /* rising particles */
  .embers{position:absolute;inset:0;pointer-events:none;z-index:5;}
  .embers i{position:absolute;bottom:-8px;width:3px;height:3px;border-radius:50%;background:var(--dispGlow,#7fc4ff);
    box-shadow:0 0 10px var(--dispGlow,#7fc4ff);opacity:0;animation:rise 7s linear infinite;}
  @keyframes rise{
    0%{opacity:0;transform:translateY(0) translateX(0) scale(.6);}
    10%{opacity:1;}
    90%{opacity:.7;}
    100%{opacity:0;transform:translateY(-90vh) translateX(var(--drift,20px)) scale(1.2);}
  }

  /* concentric ripples */
  .ripples{position:absolute;left:50%;top:42%;transform:translate(-50%,-50%);z-index:4;width:0;height:0;}
  .ripples i{position:absolute;left:50%;top:50%;border:2px solid var(--dispGlow,rgba(127,196,255,.6));border-radius:50%;
    transform:translate(-50%,-50%);width:0;height:0;animation:rpA 3s ease-out infinite;}
  .ripples i:nth-child(2){animation-delay:1s;}
  .ripples i:nth-child(3){animation-delay:2s;}
  @keyframes rpA{0%{width:30px;height:30px;opacity:.8;}100%{width:520px;height:520px;opacity:0;}}

  /* status pipeline */
  .steps{position:absolute;left:10%;right:10%;bottom:20%;display:flex;flex-direction:column;gap:14px;z-index:6;}
  .step{display:flex;align-items:center;gap:14px;color:rgba(255,255,255,.35);font-family:'Manrope',sans-serif;
    font-size:12px;letter-spacing:.22em;text-transform:uppercase;font-weight:700;transition:all .5s ease;}
  .step .dt{width:11px;height:11px;border-radius:50%;background:rgba(255,255,255,.2);transition:all .5s;flex:0 0 11px;
    position:relative;}
  .step.active{color:#fff;transform:translateX(2px);}
  .step.active .dt{background:var(--dispGlow,#7fc4ff);box-shadow:0 0 0 4px var(--dispGlowSoft,rgba(127,196,255,.25)),0 0 14px var(--dispGlow,#7fc4ff);}
  .step.active .dt::after{content:"";position:absolute;inset:-6px;border:2px solid var(--dispGlow,#7fc4ff);border-radius:50%;animation:pulseDot 1.2s ease-out infinite;}
  @keyframes pulseDot{0%{transform:scale(.7);opacity:1;}100%{transform:scale(1.6);opacity:0;}}
  .step.done .dt{background:#18c07a;box-shadow:0 0 10px #18c07a;}
  .step.done .dt::before{content:"✓";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
    color:#fff;font-size:8px;font-weight:900;}

  /* dispatch progress bar */
  .dprog{position:absolute;bottom:7%;left:14%;right:14%;height:3px;border-radius:99px;
    background:rgba(255,255,255,.08);overflow:hidden;z-index:6;}
  .dprog i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--dispGlow,#7fc4ff),#fff);
    box-shadow:0 0 12px var(--dispGlow,#7fc4ff);}
  body[data-state="b"] .dprog i{animation:dprog 3.4s linear forwards;}
  @keyframes dprog{to{width:100%;}}

  /* horizon glow */
  .horizon{position:absolute;left:0;right:0;bottom:0;height:35%;pointer-events:none;z-index:2;
    background:linear-gradient(180deg,transparent 0%,var(--dispHorizon,rgba(47,111,255,.18)) 60%,var(--dispHorizon2,rgba(127,196,255,.28)) 100%);}

  /* ==== DISPATCHED SUCCESS PHASE ==== */
  .successCard{display:none;position:absolute;left:0;right:0;top:38%;flex-direction:column;align-items:center;
    justify-content:center;text-align:center;gap:18px;z-index:9;padding:0 10%;
    animation:scIn .65s cubic-bezier(.34,1.56,.64,1) both;}
  .successCard *{text-align:center;}
  body[data-state="b"] .dispatch.success .successCard{display:flex;}
  @keyframes scIn{0%{opacity:0;transform:translateY(24px) scale(.82);}100%{opacity:1;transform:translateY(0) scale(1);}}
  .dispatch.success .steps,
  .dispatch.success .dprog,
  .dispatch.success .wm-sub,
  .dispatch.success .ripples{opacity:0;transition:opacity .4s ease;pointer-events:none;}
  .checkWrap{position:relative;width:108px;height:108px;display:flex;align-items:center;justify-content:center;}
  .checkWrap::before{content:"";position:absolute;inset:0;border-radius:50%;
    background:radial-gradient(circle,rgba(24,192,122,.4),transparent 70%);animation:pop 1s ease-out;}
  .checkWrap::after{content:"";position:absolute;inset:-8px;border-radius:50%;border:2px solid rgba(24,192,122,.6);
    animation:burst 1.2s ease-out infinite;}
  @keyframes pop{0%{transform:scale(.4);opacity:0;}50%{transform:scale(1.2);opacity:1;}100%{transform:scale(1);opacity:1;}}
  @keyframes burst{0%{transform:scale(.85);opacity:.9;}100%{transform:scale(1.6);opacity:0;}}
  .check{position:relative;width:74px;height:74px;border-radius:50%;
    background:linear-gradient(135deg,#22d488,#0e9a5d);display:flex;align-items:center;justify-content:center;
    box-shadow:0 0 36px rgba(24,192,122,.7),inset 0 -6px 16px rgba(0,0,0,.18);}
  .check svg{width:38px;height:38px;}
  .check svg path{stroke-dasharray:40;stroke-dashoffset:40;animation:tick .5s .35s ease-out forwards;}
  @keyframes tick{to{stroke-dashoffset:0;}}
  .succTtl{font-family:'Chakra Petch',sans-serif;font-weight:700;letter-spacing:.32em;font-size:22px;color:#fff;
    text-shadow:0 0 16px var(--dispGlow,#7fc4ff);text-transform:uppercase;}
  .succMeta{font-family:'Manrope',sans-serif;font-size:11px;letter-spacing:.4em;color:#cfe1ff;
    text-transform:uppercase;font-weight:700;}
  .succUnit{margin-top:6px;padding:8px 18px;border-radius:99px;background:rgba(255,255,255,.08);
    border:1px solid rgba(255,255,255,.15);font-family:'Manrope',sans-serif;font-size:12px;letter-spacing:.18em;
    color:#fff;font-weight:700;text-transform:uppercase;backdrop-filter:blur(10px);}
  .succUnit b{color:var(--dispGlow,#7fc4ff);margin:0 4px;}
</style>
</head>
<body data-state="a">
<div class="stage">

  <!-- MAP -->
  <div class="map" id="map">

    <div class="map-tilt">
      <svg id="msvg" viewBox="0 0 390 520" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#f5f7fb"/>
            <stop offset="1" stop-color="#e6ebf2"/>
          </linearGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#dde3ec" stroke-width="0.4"/>
          </pattern>
          <filter id="ds" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1.4"/>
            <feOffset dy="1.2"/><feComponentTransfer><feFuncA type="linear" slope=".35"/></feComponentTransfer>
            <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <!-- land + grid -->
        <rect width="390" height="520" fill="url(#land)"/>
        <rect width="390" height="520" fill="url(#grid)"/>

        <!-- JABI LAKE (top water body, Abuja) -->
        <path d="M-10 30 Q 60 10 130 35 Q 200 55 260 30 Q 320 10 410 25 L 420 -40 L -20 -40 Z" fill="#cfe1f3"/>
        <path d="M40 50 Q 80 42 120 52 Q 160 62 200 50" stroke="#b9d2eb" stroke-width="0.6" fill="none" opacity=".8"/>
        <text x="120" y="22" fill="#7da7d3" font-family="Manrope" font-size="9" letter-spacing="2" font-weight="700">JABI LAKE</text>

        <!-- USUMA tributary (bottom-right) -->
        <path d="M310 470 Q 360 440 410 470 L 410 540 L 300 540 Z" fill="#cfe1f3"/>

        <!-- MILLENNIUM PARK (Maitama green belt) -->
        <path d="M40 320 Q 80 280 130 300 Q 180 320 170 380 Q 150 430 90 420 Q 30 400 40 320 Z" fill="#d9efd6"/>
        <g opacity=".55">
          <circle cx="60" cy="340" r="6" fill="#a9d6a3"/>
          <circle cx="100" cy="320" r="7" fill="#9ccd96"/>
          <circle cx="135" cy="365" r="5" fill="#a9d6a3"/>
          <circle cx="80" cy="395" r="6" fill="#9ccd96"/>
          <circle cx="120" cy="405" r="5" fill="#a9d6a3"/>
        </g>
        <text x="60" y="375" fill="#9bbf99" font-family="Manrope" font-size="8.5" letter-spacing="1.8" font-weight="700">MILLENNIUM PARK</text>

        <!-- ASO ROCK (iconic granite monolith, NE corner) -->
        <g transform="translate(330 240)">
          <ellipse cx="0" cy="22" rx="42" ry="6" fill="rgba(0,0,0,.12)"/>
          <path d="M-38 18 Q -34 -2 -22 -10 Q -10 -22 4 -20 Q 22 -18 30 -4 Q 38 8 36 18 Z" fill="#b89a78"/>
          <path d="M-38 18 Q -34 -2 -22 -10 Q -16 -14 -10 -12 Q -4 -8 -2 0 Q 0 10 -8 18 Z" fill="#a48468"/>
          <path d="M-22 -10 Q -10 -22 4 -20 Q 22 -18 30 -4 Q 24 -10 12 -12 Q -2 -16 -22 -10 Z" fill="#cdb595"/>
          <path d="M-14 -8 Q -8 -14 -2 -12" stroke="#8a6d52" stroke-width=".5" fill="none"/>
          <path d="M6 -16 Q 14 -12 22 -8" stroke="#8a6d52" stroke-width=".5" fill="none"/>
          <text x="0" y="34" text-anchor="middle" fill="#7e5f44" font-family="Manrope" font-size="8" letter-spacing="2" font-weight="700">ASO ROCK</text>
        </g>

        <!-- ISOMETRIC CITY BUILDINGS -->
        <defs>
          <linearGradient id="bldA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbfcff"/><stop offset="1" stop-color="#cdd6e4"/></linearGradient>
          <linearGradient id="bldB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef2fa"/><stop offset="1" stop-color="#b8c1d2"/></linearGradient>
          <linearGradient id="bldC" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7e9d6"/><stop offset="1" stop-color="#d4ba93"/></linearGradient>
          <linearGradient id="bldD" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dfe7f3"/><stop offset="1" stop-color="#9ba6ba"/></linearGradient>
          <linearGradient id="bldSide" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9aa4b6"/><stop offset="1" stop-color="#c5cdda"/></linearGradient>
          <pattern id="winA" width="6" height="7" patternUnits="userSpaceOnUse">
            <rect width="6" height="7" fill="transparent"/>
            <rect x="1" y="1.2" width="3.2" height="3.2" fill="#7eb6f0" opacity=".75"/>
          </pattern>
          <pattern id="winB" width="6" height="7" patternUnits="userSpaceOnUse">
            <rect width="6" height="7" fill="transparent"/>
            <rect x="1" y="1.2" width="3.2" height="3.2" fill="#ffd986" opacity=".75"/>
          </pattern>
          <pattern id="winC" width="5" height="5" patternUnits="userSpaceOnUse">
            <rect width="5" height="5" fill="transparent"/>
            <rect x=".8" y=".8" width="2.6" height="2.6" fill="#9bc6f0" opacity=".7"/>
          </pattern>
          <symbol id="bldgTall" overflow="visible">
            <!-- side face -->
            <path d="M0 0 L 6 -6 L 6 -50 L 0 -44 Z" fill="url(#bldSide)"/>
            <!-- front face -->
            <rect x="-30" y="-44" width="30" height="44" fill="url(#bldA)" stroke="#a8b2c4" stroke-width=".4"/>
            <rect x="-28" y="-42" width="26" height="40" fill="url(#winA)"/>
            <!-- roof -->
            <path d="M-30 -44 L -24 -50 L 6 -50 L 0 -44 Z" fill="#e8edf6" stroke="#a8b2c4" stroke-width=".4"/>
            <!-- AC unit -->
            <rect x="-22" y="-49" width="6" height="3" fill="#aab4c4"/>
            <rect x="-12" y="-50" width="3" height="4" fill="#aab4c4"/>
          </symbol>
          <symbol id="bldgMid" overflow="visible">
            <path d="M0 0 L 5 -5 L 5 -32 L 0 -27 Z" fill="url(#bldSide)"/>
            <rect x="-24" y="-27" width="24" height="27" fill="url(#bldB)" stroke="#a8b2c4" stroke-width=".4"/>
            <rect x="-22" y="-25" width="20" height="23" fill="url(#winB)"/>
            <path d="M-24 -27 L -19 -32 L 5 -32 L 0 -27 Z" fill="#dfe5f0" stroke="#a8b2c4" stroke-width=".4"/>
            <rect x="-16" y="-31" width="3" height="3" fill="#aab4c4"/>
          </symbol>
          <symbol id="bldgShort" overflow="visible">
            <path d="M0 0 L 4 -4 L 4 -20 L 0 -16 Z" fill="url(#bldSide)"/>
            <rect x="-20" y="-16" width="20" height="16" fill="url(#bldC)" stroke="#b09872" stroke-width=".4"/>
            <rect x="-18" y="-14" width="16" height="12" fill="url(#winC)"/>
            <path d="M-20 -16 L -16 -20 L 4 -20 L 0 -16 Z" fill="#e9d4b3" stroke="#b09872" stroke-width=".4"/>
          </symbol>
          <symbol id="bldgGlass" overflow="visible">
            <path d="M0 0 L 6 -6 L 6 -60 L 0 -54 Z" fill="#7d8ba2"/>
            <rect x="-26" y="-54" width="26" height="54" fill="url(#bldD)" stroke="#7d8ba2" stroke-width=".4"/>
            <g stroke="#a8b8d0" stroke-width=".5">
              <line x1="-26" y1="-44" x2="0" y2="-44"/>
              <line x1="-26" y1="-34" x2="0" y2="-34"/>
              <line x1="-26" y1="-24" x2="0" y2="-24"/>
              <line x1="-26" y1="-14" x2="0" y2="-14"/>
              <line x1="-17" y1="-54" x2="-17" y2="0"/>
              <line x1="-9" y1="-54" x2="-9" y2="0"/>
            </g>
            <path d="M-26 -54 L -20 -60 L 6 -60 L 0 -54 Z" fill="#92a0b8" stroke="#7d8ba2" stroke-width=".4"/>
            <rect x="-12" y="-66" width="2" height="6" fill="#5d6878"/>
            <circle cx="-11" cy="-67" r=".8" fill="#ff3b47"/>
          </symbol>
        </defs>

        <g id="city">
          <!-- top strip (between water and lane5 curve) -->
          <use href="#bldgTall"  transform="translate(50 100)"/>
          <use href="#bldgMid"   transform="translate(95 100)"/>
          <use href="#bldgShort" transform="translate(135 100)"/>
          <use href="#bldgGlass" transform="translate(175 100)"/>
          <use href="#bldgTall"  transform="translate(220 100)"/>
          <use href="#bldgMid"   transform="translate(260 100)"/>
          <use href="#bldgShort" transform="translate(300 100)"/>
          <use href="#bldgGlass" transform="translate(355 100)"/>

          <!-- between lane5 (~y=110) and lane1 (~y=210) -->
          <use href="#bldgMid"   transform="translate(35 195)"/>
          <use href="#bldgTall"  transform="translate(75 195)"/>
          <use href="#bldgShort" transform="translate(110 195)"/>
          <!-- gap for lane3 vertical -->
          <use href="#bldgGlass" transform="translate(170 195)"/>
          <use href="#bldgTall"  transform="translate(220 195)"/>
          <!-- gap for lane4 vertical -->
          <use href="#bldgMid"   transform="translate(320 195)"/>
          <use href="#bldgShort" transform="translate(360 195)"/>

          <!-- between lane1 (y=200) and lane2 (y=360) — middle strip, avoid park & route -->
          <use href="#bldgGlass" transform="translate(220 280)"/>
          <!-- glowing EUTOPIA sign above the CBD glass tower -->
          <g transform="translate(207 222)">
            <ellipse cx="14" cy="-1" rx="22" ry="6" fill="#2f6fff" opacity=".4">
              <animate attributeName="opacity" values=".3;.6;.3" dur="2.4s" repeatCount="indefinite"/>
            </ellipse>
            <line x1="2" y1="3" x2="2" y2="8" stroke="#5d6878" stroke-width=".6"/>
            <line x1="26" y1="3" x2="26" y2="8" stroke="#5d6878" stroke-width=".6"/>
            <rect x="-1" y="-5" width="30" height="8" rx="1" fill="#0a1628" stroke="#7fc4ff" stroke-width=".6"
              style="filter:drop-shadow(0 0 3px #7fc4ff);"/>
            <text x="14" y="1.2" text-anchor="middle" font-family="Chakra Petch, sans-serif" font-weight="700"
              font-size="6" letter-spacing="1.6" fill="#7fc4ff"
              style="filter:drop-shadow(0 0 2px #7fc4ff) drop-shadow(0 0 5px #2f6fff);">
              EUTOPIA
              <animate attributeName="opacity" values="0.85;1;0.85" dur="2.4s" repeatCount="indefinite"/>
            </text>
          </g>
          <use href="#bldgTall"  transform="translate(310 280)"/>
          <use href="#bldgMid"   transform="translate(355 280)"/>
          <use href="#bldgShort" transform="translate(220 350)"/>
          <use href="#bldgMid"   transform="translate(310 350)"/>
          <use href="#bldgTall"  transform="translate(360 340)"/>

          <!-- between lane2 (y=360) and lane6 (~y=460) -->
          <use href="#bldgShort" transform="translate(40 445)"/>
          <use href="#bldgMid"   transform="translate(80 445)"/>
          <use href="#bldgTall"  transform="translate(170 445)"/>
          <use href="#bldgGlass" transform="translate(225 445)"/>
          <use href="#bldgMid"   transform="translate(320 445)"/>
          <use href="#bldgShort" transform="translate(360 445)"/>
        </g>

        <!-- road casings (light gray) -->
        <g stroke="#cbd2dc" stroke-width="14" fill="none" stroke-linecap="round">
          <path d="M-10 220 L 410 200"/>
          <path d="M-10 360 L 410 360"/>
          <path d="M120 -10 L 130 540"/>
          <path d="M280 -10 L 270 540"/>
          <path d="M40 100 Q 200 130 380 90"/>
          <path d="M30 460 Q 200 430 380 480"/>
        </g>
        <!-- white roads -->
        <g stroke="#ffffff" stroke-width="9" fill="none" stroke-linecap="round">
          <path id="lane1" d="M-10 220 L 410 200"/>
          <path id="lane2" d="M-10 360 L 410 360"/>
          <path id="lane3" d="M120 -10 L 130 540"/>
          <path id="lane4" d="M280 -10 L 270 540"/>
          <path id="lane5" d="M40 100 Q 200 130 380 90"/>
          <path id="lane6" d="M30 460 Q 200 430 380 480"/>
        </g>
        <!-- lane center dashes -->
        <g stroke="#dbe2ec" stroke-width="0.8" fill="none" stroke-dasharray="6 8">
          <path d="M-10 220 L 410 200"/>
          <path d="M-10 360 L 410 360"/>
          <path d="M120 -10 L 130 540"/>
          <path d="M280 -10 L 270 540"/>
        </g>

        <!-- ABUJA neighbourhood labels -->
        <g font-family="Manrope" font-size="9" letter-spacing="2" font-weight="700" fill="#a8b1bf" text-transform="uppercase">
          <text x="60" y="170" transform="rotate(-2 60 170)">MAITAMA</text>
          <text x="200" y="170" transform="rotate(-1 200 170)">WUSE II</text>
          <text x="40" y="260" transform="rotate(-2 40 260)">WUSE</text>
          <text x="220" y="300" transform="rotate(2 220 300)">CBD</text>
          <text x="60" y="495" transform="rotate(-1 60 495)">GARKI</text>
          <text x="240" y="500" transform="rotate(-1 240 500)">ASOKORO</text>
        </g>

        <!-- ROAD NAMES along key lanes -->
        <g font-family="Manrope" font-size="6.5" letter-spacing="1.2" font-weight="700" fill="#7d8696" text-transform="uppercase">
          <text x="20" y="216" transform="rotate(-1 20 216)">SHEHU SHAGARI WAY</text>
          <text x="20" y="356" transform="rotate(0 20 356)">CONSTITUTION AVE</text>
          <text x="125" y="60" transform="rotate(90 125 60)">AMINU KANO CRES</text>
          <text x="278" y="60" transform="rotate(90 278 60)">NNAMDI AZIKIWE EXP</text>
        </g>

        <!-- ROUTE — runs along actual road lanes (east on lane2, north on lane4) -->
        <path id="route" d="M 195 360 L 268 360 Q 274 360 274 354 L 275 130"
              stroke="#2f6fff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".95"/>
        <path id="routeFlow" d="M 195 360 L 268 360 Q 274 360 274 354 L 275 130"
              stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-dasharray="6 12" opacity=".9"/>

        <!-- DESTINATION marker (hospital, on lane4) -->
        <g class="drop" style="animation-delay:.55s" transform="translate(275 130)">
          <circle r="14" fill="rgba(255,59,71,.18)"/>
          <circle r="10" fill="#fff" filter="url(#ds)"/>
          <circle r="6" fill="#ff3b47"/>
          <text x="0" y="-22" text-anchor="middle" font-family="Manrope" font-size="9" font-weight="800" fill="#ff3b47" letter-spacing="1">NAT'L HOSPITAL</text>
        </g>

        <!-- PICKUP marker (green ring at user, on lane2) -->
        <g class="drop" style="animation-delay:.35s" transform="translate(195 360)">
          <circle r="16" fill="none" stroke="#18c07a" stroke-width="2.5" opacity=".85"/>
        </g>

        <!-- USER DOT with radar pulse + sonar sweep -->
        <g transform="translate(195 360)">
          <circle class="ring"  r="12" fill="rgba(47,111,255,.30)"/>
          <circle class="ring r2" r="12" fill="rgba(47,111,255,.30)"/>
          <circle class="ring r3" r="12" fill="rgba(47,111,255,.30)"/>
          <g class="sonar">
            <path d="M0 0 L 60 0 A 60 60 0 0 0 30 -52 Z" fill="rgba(47,111,255,.18)"/>
          </g>
          <circle r="11" fill="#fff" filter="url(#ds)"/>
          <circle r="7"  fill="#2f6fff"/>
        </g>

        <!-- Reusable 3D isometric ambulance -->
        <defs>
          <linearGradient id="ambBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#ffffff"/>
            <stop offset="1" stop-color="#cfd6e2"/>
          </linearGradient>
          <linearGradient id="ambRoof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#ffffff"/>
            <stop offset="1" stop-color="#e3e8f0"/>
          </linearGradient>
          <linearGradient id="ambSide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#e9edf4"/>
            <stop offset="1" stop-color="#aab3c2"/>
          </linearGradient>
          <radialGradient id="ambGlow" cx=".5" cy=".5" r=".5">
            <stop offset="0" stop-color="rgba(0,0,0,.35)"/>
            <stop offset="1" stop-color="rgba(0,0,0,0)"/>
          </radialGradient>
          <g id="ambSym">
            <!-- ground shadow -->
            <ellipse cx="0" cy="6" rx="14" ry="3" fill="url(#ambGlow)" opacity=".9"/>
            <!-- chassis / under-body -->
            <rect x="-12" y="3" width="24" height="2" rx=".6" fill="#1c2333"/>
            <!-- side panel (depth band) -->
            <path d="M-12 -1 L 12 -1 L 12 3.5 Q 12 4 11.5 4 L -11.5 4 Q -12 4 -12 3.5 Z" fill="url(#ambSide)"/>
            <!-- patient compartment body -->
            <path d="M-12 -5 Q -12 -6 -11 -6 L 4 -6 Q 5 -6 5 -5 L 5 -1 L -12 -1 Z" fill="url(#ambBody)" stroke="#aab4c4" stroke-width=".35"/>
            <!-- cab (front, slightly lower roof) -->
            <path d="M5 -5 Q 5 -6 6 -6 L 11 -6 Q 12 -6 12 -5 L 12 -1 L 5 -1 Z" fill="url(#ambBody)" stroke="#aab4c4" stroke-width=".35"/>
            <!-- roof highlight strip -->
            <rect x="-11" y="-5.7" width="15" height=".7" fill="#ffffff" opacity=".7"/>
            <rect x="6" y="-5.7" width="5.5" height=".7" fill="#ffffff" opacity=".7"/>
            <!-- door seam -->
            <line x1="5" y1="-5.5" x2="5" y2="3.5" stroke="#9aa4b6" stroke-width=".3"/>
            <line x1="-3" y1="-5.5" x2="-3" y2="-1" stroke="#9aa4b6" stroke-width=".3"/>
            <!-- windshield (cab) -->
            <path d="M6.2 -5.4 L 11.6 -5.4 Q 11.9 -5.4 11.9 -5.1 L 11.9 -2.6 L 6.2 -2.6 Z" fill="#9ad3ff" opacity=".95"/>
            <path d="M6.2 -5.4 L 8.4 -5.4 L 8.4 -2.6 L 6.2 -2.6 Z" fill="#cfe9ff" opacity=".55"/>
            <!-- rear / side patient window -->
            <rect x="-10.6" y="-5.2" width="3.2" height="2.6" rx=".3" fill="#9ad3ff" opacity=".9"/>
            <rect x="-6.6" y="-5.2" width="3" height="2.6" rx=".3" fill="#9ad3ff" opacity=".9"/>
            <rect x="-2.6" y="-5.2" width="3" height="2.6" rx=".3" fill="#9ad3ff" opacity=".9"/>
            <!-- frosted highlight on patient windows -->
            <rect x="-10.6" y="-5.2" width="3.2" height=".7" fill="#ffffff" opacity=".55"/>
            <rect x="-6.6" y="-5.2" width="3" height=".7" fill="#ffffff" opacity=".55"/>
            <rect x="-2.6" y="-5.2" width="3" height=".7" fill="#ffffff" opacity=".55"/>
            <!-- side red cross emblem (large, on patient side) -->
            <circle cx="-4.5" cy=".5" r="2.1" fill="#ffffff" stroke="#ff3b47" stroke-width=".4"/>
            <rect x="-5.2" y="-1.1" width="1.4" height="3.2" fill="#ff3b47"/>
            <rect x="-6.1" y="-.2" width="3.2" height="1.4" fill="#ff3b47"/>
            <!-- AMBULANCE side stripe with checker -->
            <rect x="-12" y="1.6" width="24" height="1.6" fill="#ff3b47"/>
            <g fill="#ffffff">
              <rect x="-12" y="1.6" width="1.6" height=".8"/>
              <rect x="-8.8" y="2.4" width="1.6" height=".8"/>
              <rect x="-5.6" y="1.6" width="1.6" height=".8"/>
              <rect x="-2.4" y="2.4" width="1.6" height=".8"/>
              <rect x=".8" y="1.6" width="1.6" height=".8"/>
              <rect x="4" y="2.4" width="1.6" height=".8"/>
              <rect x="7.2" y="1.6" width="1.6" height=".8"/>
              <rect x="10.4" y="2.4" width="1.6" height=".8"/>
            </g>
            <!-- bumper -->
            <rect x="11.6" y="2" width="1" height="2" rx=".3" fill="#3a4255"/>
            <rect x="-12.6" y="2" width="1" height="2" rx=".3" fill="#3a4255"/>
            <!-- side mirror -->
            <rect x="11.4" y="-3.4" width="1.4" height=".8" fill="#aab4c4"/>
            <!-- door handle -->
            <rect x="2" y="-.4" width="2" height=".4" fill="#7d8696"/>
            <rect x="-9" y="-.4" width="2" height=".4" fill="#7d8696"/>
            <!-- wheel wells -->
            <ellipse cx="-7.5" cy="3.6" rx="2.4" ry="1.4" fill="#1a2030"/>
            <ellipse cx="7.5" cy="3.6" rx="2.4" ry="1.4" fill="#1a2030"/>
            <!-- tires -->
            <ellipse cx="-7.5" cy="4.4" rx="2" ry="1.1" fill="#0e1320"/>
            <ellipse cx="7.5" cy="4.4" rx="2" ry="1.1" fill="#0e1320"/>
            <!-- rims -->
            <ellipse cx="-7.5" cy="4.3" rx="1.2" ry=".7" fill="#5d6878"/>
            <ellipse cx="7.5" cy="4.3" rx="1.2" ry=".7" fill="#5d6878"/>
            <circle cx="-7.5" cy="4.25" r=".35" fill="#1a2030"/>
            <circle cx="7.5" cy="4.25" r=".35" fill="#1a2030"/>
            <!-- light bar (roof) -->
            <rect x="-4" y="-7.2" width="8" height="1.4" rx=".5" fill="#1a2030"/>
            <rect x="-4" y="-7.2" width="8" height=".5" fill="#3a4255"/>
            <circle cx="-2.6" cy="-6.4" r=".7" fill="#ff3b47">
              <animate attributeName="opacity" values="1;.15;1" dur=".4s" repeatCount="indefinite"/>
              <animate attributeName="r" values=".7;.95;.7" dur=".4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="0" cy="-6.4" r=".7" fill="#ffffff">
              <animate attributeName="opacity" values=".3;1;.3" dur=".4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="2.6" cy="-6.4" r=".7" fill="#2ad6ff">
              <animate attributeName="opacity" values=".15;1;.15" dur=".4s" repeatCount="indefinite"/>
              <animate attributeName="r" values=".7;.95;.7" dur=".4s" repeatCount="indefinite"/>
            </circle>
            <!-- headlight glow -->
            <ellipse cx="12" cy="2" rx="1.4" ry=".7" fill="#fff7c2" opacity=".95"/>
            <ellipse cx="13.4" cy="2" rx="2.6" ry="1" fill="#fff7c2" opacity=".25"/>
            <!-- antenna -->
            <line x1="3" y1="-7.2" x2="3" y2="-9" stroke="#1a2030" stroke-width=".3"/>
            <circle cx="3" cy="-9" r=".25" fill="#ff3b47"/>
          </g>
          <!-- compact ambulance for tiny lane traffic -->
          <g id="ambMini">
            <ellipse cx="0" cy="3.5" rx="6" ry="1.6" fill="rgba(0,0,0,.25)"/>
            <rect x="-6" y="-3.5" width="12" height="6" rx="1.2" fill="url(#ambBody)" stroke="#aab4c4" stroke-width=".3"/>
            <rect x="-6" y=".5" width="12" height="1.2" fill="#ff3b47"/>
            <rect x="2.4" y="-3.2" width="3.4" height="2" fill="#9ad3ff"/>
            <rect x="-1" y="-2.8" width="2" height="2.6" fill="#ff3b47"/>
            <rect x="-2" y="-1.8" width="4" height="1" fill="#ff3b47"/>
            <ellipse cx="-3.6" cy="2.4" rx="1.2" ry=".6" fill="#0e1320"/>
            <ellipse cx="3.6" cy="2.4" rx="1.2" ry=".6" fill="#0e1320"/>
            <rect x="-1.6" y="-4.4" width="3.2" height=".7" rx=".2" fill="#1a2030"/>
          </g>
        </defs>

        <!-- background lane traffic (mini ambulances) -->
        <g id="ambs">
          <g><use href="#ambMini"/>
            <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
              <mpath href="#lane1"/>
            </animateMotion>
          </g>
          <g><use href="#ambMini"/>
            <animateMotion dur="16s" repeatCount="indefinite" rotate="auto" keyPoints="1;0" keyTimes="0;1" begin="-5s">
              <mpath href="#lane2"/>
            </animateMotion>
          </g>
          <g><use href="#ambMini"/>
            <animateMotion dur="18s" repeatCount="indefinite" rotate="auto" begin="-3s">
              <mpath href="#lane4"/>
            </animateMotion>
          </g>
        </g>

        <!-- HERO 3D ambulance — follows the blue route (always visible) -->
        <g id="hero">
          <use href="#ambSym"/>
          <animateMotion id="heroLoop" dur="9s" repeatCount="indefinite" rotate="auto" keyPoints="1;0" keyTimes="0;1">
            <mpath href="#route"/>
          </animateMotion>
        </g>
      </svg>
    </div>

    <!-- big scanner radar (state B) -->
    <span class="scan"></span>

    <!-- floating address card -->
    <div class="addr">
      <div class="col">
        <div class="row"><span class="dot g"></span><span class="lbl">YOUR LOCATION</span></div>
        <div class="row"><span class="val" style="margin-left:17px;">Plot 247, Aminu Kano Cres, Wuse II</span></div>
      </div>
      <div class="col" style="text-align:right">
        <div class="row" style="justify-content:flex-end"><span class="lbl">DEST · ~15 MIN</span><span class="dot r"></span></div>
        <div class="row" style="justify-content:flex-end"><span class="val">National Hospital, CBD</span></div>
      </div>
      <button class="edit" aria-label="edit">+</button>
    </div>

    <!-- back -->
    <button class="back" id="backBtn" aria-label="back">
      <svg viewBox="0 0 24 24" fill="none" stroke="#0f1623" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
  </div>

  <!-- BOTTOM SHEET -->
  <div class="sheet">
    <div class="grab"></div>

    <!-- STATE A: REQUEST -->
    <div class="state-a" style="display:flex;flex-direction:column;height:100%;">
      <div class="unit selected" data-eta="4" data-name="Basic Life Support">
        <div class="ico" style="background:#fff0f1;">
          <svg viewBox="0 0 32 32"><rect x="3" y="9" rx="3" ry="3" width="26" height="14" fill="#fff" stroke="#ff3b47" stroke-width="1.4"/><rect x="14.5" y="11" width="3" height="10" fill="#ff3b47"/><rect x="9" y="14.5" width="14" height="3" fill="#ff3b47"/></svg>
        </div>
        <div class="meta">
          <div class="ttl">Basic Life Support</div>
          <div class="sub">Nearest unit · 4 min away · Crew of 2</div>
        </div>
        <div class="price">FREE</div>
      </div>

      <div class="unit" data-eta="6" data-name="Advanced Life Support">
        <div class="ico" style="background:#eef3ff;">
          <svg viewBox="0 0 32 32"><rect x="3" y="9" rx="3" ry="3" width="26" height="14" fill="#fff" stroke="#2f6fff" stroke-width="1.4"/><path d="M8 16 H 12 L 14 13 L 17 19 L 19 16 H 24" stroke="#2f6fff" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="meta">
          <div class="ttl">Advanced Life Support <span class="badge">NEW</span></div>
          <div class="sub">6 min · ICU paramedic · Defibrillator</div>
        </div>
        <div class="price">FREE</div>
      </div>

      <div class="unit" data-eta="8" data-name="Wheelchair Transport">
        <div class="ico" style="background:#f3f5f9;">
          <svg viewBox="0 0 32 32" fill="none" stroke="#3a4255" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="22" r="4"/><path d="M13 22 L 16 12 L 22 12"/><circle cx="17" cy="9" r="2.2"/></svg>
        </div>
        <div class="meta">
          <div class="ttl">Wheelchair Transport</div>
          <div class="sub">8 min · Non-emergency transfer</div>
        </div>
        <div class="price">FREE</div>
      </div>

      <div class="toggle">
        <div>
          <div class="t">Share live medical info</div>
          <div class="s">Allergies, conditions, blood type to crew</div>
        </div>
        <div class="switch on" id="swInfo"></div>
      </div>

      <div class="cta-wrap">
        <button class="cta" id="cta">REQUEST AMBULANCE</button>
      </div>
      <div class="footer-mark">EUTOPIA · ID</div>
    </div>

    <!-- STATE B: FINDING -->
    <div class="state-b">
      <div class="finding">
        <div class="title">Finding the nearest ambulance…</div>
        <div class="sub">Pinging nearby EUTOPIA-certified units</div>
        <div class="dots"><span></span><span></span><span></span></div>
      </div>
      <div class="footer-mark">EUTOPIA · ID</div>
    </div>

    <!-- STATE C: DISPATCHED -->
    <div class="state-c">
      <div class="assigned">
        <div class="avatar">DO</div>
        <div style="flex:1;min-width:0;">
          <div class="name">Paramedic D. Okonkwo</div>
          <div class="sub">Unit A-07 · <span class="star">★ 4.9</span> · BLS</div>
        </div>
        <div style="text-align:right;">
          <div style="font-weight:800;font-size:13px;">LAG-712-AM</div>
          <div class="sub">Plate</div>
        </div>
      </div>
      <div class="stats">
        <div class="stat"><div class="v" id="eta">4:00</div><div class="l">ETA</div></div>
        <div class="stat"><div class="v" id="dist">1.8 km</div><div class="l">Distance</div></div>
        <div class="stat"><div class="v">A-07</div><div class="l">Unit</div></div>
      </div>
      <div class="progress"><i id="bar"></i></div>
      <div class="actions">
        <button class="act msg">MESSAGE</button>
        <button class="act call">CALL</button>
        <button class="act cancel" id="cancel">CANCEL</button>
      </div>
      <div class="footer-mark" style="margin-top:12px;">EUTOPIA · ID</div>
    </div>
  </div>

  <!-- ============== PREMIUM DISPATCH SCREEN (state B) ============== -->
  <div class="dispatch" id="dispatch">
    <div class="stars" id="stars"></div>

    <!-- horizon glow -->
    <div class="horizon"></div>

    <!-- spotlight beams -->
    <div class="spot"></div>
    <div class="spot s2"></div>

    <!-- ABUJA skyline (3 parallax layers) -->
    <div class="skyline">
      <!-- distant layer -->
      <svg class="sky-layer sky-back" viewBox="0 0 430 80" preserveAspectRatio="none">
        <path d="M0 80 V 50 H 14 V 30 H 26 V 46 H 40 V 22 H 54 V 40 H 70 V 28 H 84 V 50 H 100 V 18 H 116 V 38 H 132 V 24 H 148 V 44 H 162 V 32 H 178 V 50 H 196 V 26 H 212 V 16 H 228 V 38 H 244 V 28 H 260 V 46 H 278 V 22 H 294 V 40 H 312 V 30 H 328 V 50 H 346 V 18 H 362 V 36 H 378 V 26 H 394 V 44 H 410 V 30 H 430 V 80 Z"
          fill="#0d1f44"/>
      </svg>
      <!-- mid layer with windows -->
      <svg class="sky-layer sky-mid" viewBox="0 0 430 120" preserveAspectRatio="none">
        <defs>
          <pattern id="winDp" width="6" height="8" patternUnits="userSpaceOnUse">
            <rect x="1.5" y="2" width="2" height="2.5" fill="#ffd986" opacity=".55"/>
          </pattern>
        </defs>
        <path d="M0 120 V 80 H 22 V 50 H 36 V 70 H 52 V 38 H 68 V 60 H 86 V 28 H 104 V 56 H 124 V 16 H 138 V 36 H 152 L 158 22 L 164 36 H 178 V 64 H 196 V 22 H 218 V 48 H 236 V 30 H 252 V 8 H 268 V 26 H 284 V 60 H 304 V 34 H 322 V 12 H 340 L 346 0 L 352 12 V 38 H 372 V 24 H 390 V 50 H 410 V 30 H 430 V 120 Z"
          fill="#16264f"/>
        <rect x="22" y="80" width="14" height="40" fill="url(#winDp)"/>
        <rect x="68" y="60" width="18" height="60" fill="url(#winDp)"/>
        <rect x="138" y="36" width="14" height="84" fill="url(#winDp)"/>
        <rect x="218" y="48" width="18" height="72" fill="url(#winDp)"/>
        <rect x="284" y="60" width="20" height="60" fill="url(#winDp)"/>
        <rect x="340" y="12" width="12" height="108" fill="url(#winDp)"/>
        <rect x="390" y="50" width="20" height="70" fill="url(#winDp)"/>
      </svg>
      <!-- foreground detailed layer -->
      <svg class="sky-layer sky-front" viewBox="0 0 430 160" preserveAspectRatio="none">
        <defs>
          <linearGradient id="fGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#1f3a72"/>
            <stop offset="1" stop-color="#0a1628"/>
          </linearGradient>
          <pattern id="winDpF" width="8" height="10" patternUnits="userSpaceOnUse">
            <rect x="2" y="2.5" width="2.6" height="2.6" fill="#ffd986" opacity=".75"/>
          </pattern>
          <pattern id="winDpFB" width="8" height="10" patternUnits="userSpaceOnUse">
            <rect x="2" y="2.5" width="2.6" height="2.6" fill="#7fc4ff" opacity=".75"/>
          </pattern>
        </defs>
        <!-- ground -->
        <rect x="0" y="150" width="430" height="10" fill="#070d1c"/>
        <!-- buildings -->
        <g fill="url(#fGrad)" stroke="#0a1628" stroke-width=".5">
          <path d="M0 160 V 100 H 28 V 70 H 46 V 100 H 72 V 80 H 90 V 50 H 108 V 100 H 130 V 60 H 148 L 156 44 L 164 60 V 100 H 188 V 30 H 210 L 216 18 L 222 30 V 100 H 248 V 70 H 270 V 40 H 288 V 100 H 314 V 84 H 338 V 50 H 354 V 24 H 370 V 50 H 388 V 80 H 408 V 60 H 430 V 160 Z"/>
        </g>
        <!-- windows -->
        <rect x="3" y="100" width="22" height="60" fill="url(#winDpF)"/>
        <rect x="46" y="100" width="24" height="60" fill="url(#winDpFB)"/>
        <rect x="90" y="50" width="16" height="50" fill="url(#winDpF)"/>
        <rect x="130" y="60" width="16" height="40" fill="url(#winDpFB)"/>
        <rect x="148" y="60" width="14" height="40" fill="url(#winDpF)"/>
        <rect x="188" y="30" width="20" height="70" fill="url(#winDpF)"/>
        <rect x="210" y="30" width="12" height="70" fill="url(#winDpFB)"/>
        <rect x="248" y="70" width="20" height="30" fill="url(#winDpF)"/>
        <rect x="270" y="40" width="16" height="60" fill="url(#winDpFB)"/>
        <rect x="288" y="60" width="24" height="40" fill="url(#winDpF)"/>
        <rect x="338" y="50" width="14" height="50" fill="url(#winDpFB)"/>
        <rect x="354" y="24" width="14" height="76" fill="url(#winDpF)"/>
        <rect x="370" y="50" width="16" height="50" fill="url(#winDpFB)"/>
        <rect x="408" y="60" width="20" height="100" fill="url(#winDpF)"/>
        <!-- antennas with red beacons -->
        <g stroke="#1a2030" stroke-width="1">
          <line x1="156" y1="44" x2="156" y2="32"/>
          <line x1="216" y1="18" x2="216" y2="2"/>
          <line x1="354" y1="24" x2="354" y2="10"/>
        </g>
        <circle cx="156" cy="32" r="1.4" fill="#ff3b47"><animate attributeName="opacity" values="1;.2;1" dur="1.6s" repeatCount="indefinite"/></circle>
        <circle cx="216" cy="2" r="1.4" fill="#ff3b47"><animate attributeName="opacity" values=".2;1;.2" dur="1.6s" repeatCount="indefinite"/></circle>
        <circle cx="354" cy="10" r="1.4" fill="#ff3b47"><animate attributeName="opacity" values="1;.2;1" dur="1.4s" repeatCount="indefinite"/></circle>
      </svg>
    </div>

    <!-- concentric ripples emanating from skyline -->
    <div class="ripples"><i></i><i></i><i></i></div>

    <!-- rising particles -->
    <div class="embers" id="embers"></div>

    <!-- glowing wordmark -->
    <div class="wm">EUTOPIA</div>
    <div class="wm-sub">Dispatching · Abuja FCT</div>

    <!-- status pipeline -->
    <div class="steps" id="steps">
      <div class="step" data-i="0"><span class="dt"></span><span>Connecting to network</span></div>
      <div class="step" data-i="1"><span class="dt"></span><span>Locating nearest unit</span></div>
      <div class="step" data-i="2"><span class="dt"></span><span>Dispatching crew</span></div>
    </div>

    <div class="dprog"><i></i></div>

    <!-- SUCCESS PHASE: dispatched confirmation -->
    <div class="successCard">
      <div class="checkWrap">
        <div class="check">
          <svg viewBox="0 0 38 38" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19 L 16 26 L 29 12"/>
          </svg>
        </div>
      </div>
      <div class="succTtl" id="succTtl">Ambulance Dispatched</div>
      <div class="succMeta">Crew is en route to your location</div>
      <div class="succUnit">UNIT <b id="succUnit">A-07</b> · ETA <b>4 MIN</b></div>
    </div>
  </div>
</div>

<script>
/* ============================================================
   EUTOPIA ID — Request Ambulance
   ============================================================ */
const body = document.body;
const ambsG = document.getElementById('ambs');
const route = document.getElementById('route');
const routeFlow = document.getElementById('routeFlow');
const heroG = document.getElementById('hero');

/* nearby ambulances are pure SVG <animateMotion> on lanes — no JS scatter */

/* ------ route stroke draw-in ------ */
(function drawRoute(){
  const len = route.getTotalLength();
  route.style.strokeDasharray = len;
  route.style.strokeDashoffset = len;
  route.style.transition = 'stroke-dashoffset 1.2s ease-out';
  requestAnimationFrame(()=>{ route.style.strokeDashoffset = '0'; });
  // soft flow on the dashed white overlay
  let off = 0;
  function flow(){
    off = (off - .6) % 1000;
    routeFlow.setAttribute('stroke-dashoffset', off);
    requestAnimationFrame(flow);
  }
  flow();
})();

/* ------ unit selection ------ */
const units = document.querySelectorAll('.unit');
units.forEach(u=>{
  u.addEventListener('click', ()=>{
    units.forEach(x=>x.classList.remove('selected'));
    u.classList.add('selected');
  });
});

/* ------ toggle ------ */
document.getElementById('swInfo').addEventListener('click', e=> e.currentTarget.classList.toggle('on'));

/* ------ CTA: ripple + state transitions ------ */
const cta = document.getElementById('cta');
let _ctaLock = 0;
function fireRequest(e){
  const now = Date.now();
  if(now - _ctaLock < 800) return;
  _ctaLock = now;
  if(e && e.cancelable) e.preventDefault();
  // ripple
  const rect = cta.getBoundingClientRect();
  const t = (e && e.touches && e.touches[0]) || (e && e.changedTouches && e.changedTouches[0]) || e;
  const cx = (t && typeof t.clientX === 'number') ? t.clientX : rect.left + rect.width/2;
  const cy = (t && typeof t.clientY === 'number') ? t.clientY : rect.top + rect.height/2;
  const r = document.createElement('span'); r.className='ripple';
  r.style.left = (cx - rect.left - 8) + 'px';
  r.style.top  = (cy - rect.top  - 8) + 'px';
  r.style.width = r.style.height = '16px';
  cta.appendChild(r); setTimeout(()=>r.remove(), 700);

  // state B — premium dispatch screen
  const dispatch = document.getElementById('dispatch');
  dispatch.classList.remove('success');
  body.dataset.state = 'b';
  runDispatchSequence();

  // 3.4s → success confirmation phase
  setTimeout(()=>{ dispatch.classList.add('success'); }, 3400);
  // 5.0s → state C (live tracking)
  setTimeout(()=>{
    body.dataset.state = 'c';
    dispatch.classList.remove('success');
    runETA();
  }, 5000);
}
cta.addEventListener('click', fireRequest);
cta.addEventListener('touchend', fireRequest, {passive:false});

/* ------ premium dispatch sequence: stars + embers + step pipeline ------ */
(function buildAmbience(){
  const stars = document.getElementById('stars');
  const embers = document.getElementById('embers');
  if(!stars || !embers) return;
  // stars
  for(let i=0;i<70;i++){
    const s = document.createElement('i');
    const sz = Math.random()*1.6+.6;
    s.style.width = s.style.height = sz+'px';
    s.style.left = (Math.random()*100)+'%';
    s.style.top  = (Math.random()*60)+'%';
    s.style.animationDelay = (Math.random()*3)+'s';
    s.style.opacity = .3 + Math.random()*.7;
    stars.appendChild(s);
  }
  // rising embers
  for(let i=0;i<24;i++){
    const e = document.createElement('i');
    e.style.left = (Math.random()*100)+'%';
    e.style.animationDelay = (Math.random()*7)+'s';
    e.style.animationDuration = (5 + Math.random()*5)+'s';
    e.style.setProperty('--drift', ((Math.random()*60)-30)+'px');
    const sz = Math.random()*2 + 2;
    e.style.width = e.style.height = sz+'px';
    embers.appendChild(e);
  }
})();

function runDispatchSequence(){
  const steps = document.querySelectorAll('#steps .step');
  steps.forEach(s=>s.classList.remove('active','done'));
  const schedule = [
    { i:0, at:80,  state:'active' },
    { i:0, at:1100, state:'done' },
    { i:1, at:1100, state:'active' },
    { i:1, at:2300, state:'done' },
    { i:2, at:2300, state:'active' },
  ];
  schedule.forEach(s=>{
    setTimeout(()=>{
      const el = steps[s.i]; if(!el) return;
      el.classList.remove('active','done');
      el.classList.add(s.state);
    }, s.at);
  });
}

/* ------ ETA + progress bar ------ */
function runETA(){
  const total = 240; // 4 min
  let s = total;
  const $eta = document.getElementById('eta');
  const $dist = document.getElementById('dist');
  const $bar  = document.getElementById('bar');
  function tick(){
    if(s < 0) return;
    const m = Math.floor(s/60), ss = String(s%60).padStart(2,'0');
    $eta.textContent = m+':'+ss;
    const pct = ((total - s)/total)*100;
    $bar.style.width = Math.max(5, pct).toFixed(1)+'%';
    $dist.textContent = (1.8 * (s/total)).toFixed(1)+' km';
    s -= 1;
    setTimeout(tick, 1000);
  }
  tick();
}

/* ------ subtle map drift (parallax-ish idle) ------ */
(function drift(){
  const tilt = document.querySelector('.map-tilt');
  let t = 0;
  function loop(){
    t += .005;
    const dx = Math.sin(t)*3;
    const dy = Math.cos(t*.7)*2;
    tilt.style.transform = 'perspective(900px) rotateX(8deg) translate('+dx+'px,'+dy+'px)';
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ------ cancel returns to state A ------ */
document.getElementById('cancel').addEventListener('click', ()=>{
  body.dataset.state = 'a';
});

/* ------ back button → notify host (parent) so React can navigate away ------ */
document.getElementById('backBtn').addEventListener('click', ()=>{
  try{ parent.postMessage({type:'eutopia-back'}, '*'); }catch(e){}
});
</script>
</body>
</html>`;
