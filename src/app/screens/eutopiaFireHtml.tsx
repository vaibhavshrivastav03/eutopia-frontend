// EUTOPIA ID — Request Fire Service. Reuses the ambulance template,
// re-themed for a fire-engine red truck + fire-station dispatch.
import { eutopiaAmbulance3DHtml } from "./eutopiaAmbulance3DHtml";

export const eutopiaFireHtml = eutopiaAmbulance3DHtml
  // titles & CTAs
  .replace(/Request Ambulance/g, "Request Fire Service")
  .replace(/REQUEST AMBULANCE/g, "REQUEST FIRE TRUCK")

  // destination + address card
  .replace(/National Hospital, CBD/g, "Asokoro Fire Station")
  .replace(/NAT'L HOSPITAL/g, "FIRE STATION")

  // unit cards
  .replace(/Basic Life Support/g, "Fire Engine")
  .replace(/Advanced Life Support/g, "Ladder Truck")
  .replace(/Wheelchair Transport/g, "HazMat Unit")
  .replace(
    /Nearest unit · 4 min away · Crew of 2/g,
    "Nearest unit · 4 min · Crew of 4",
  )
  .replace(
    /6 min · ICU paramedic · Defibrillator/g,
    "6 min · 30m aerial ladder",
  )
  .replace(
    /8 min · Non-emergency transfer/g,
    "8 min · Chemical containment",
  )

  // finding + dispatch state
  .replace(
    /Finding the nearest ambulance/g,
    "Finding the nearest fire truck",
  )
  .replace(
    /Pinging nearby EUTOPIA-certified units/g,
    "Pinging nearby fire stations",
  )
  .replace(/Paramedic D\. Okonkwo/g, "Capt. A. Bello")
  .replace(/Unit A-07 · /g, "Engine F-12 · ")
  .replace(/ · BLS</g, " · FIRE<")
  .replace(/LAG-712-AM/g, "FCT-204-FT")
  .replace(/>A-07</g, ">F-12<")

  // toggle copy
  .replace(/Share live medical info/g, "Share location with crew")
  .replace(
    /Allergies, conditions, blood type to crew/g,
    "Live address & access details to dispatch",
  )

  // recolor truck body gradient → fire-engine red
  .replace(
    /(id="ambBody"[^>]*>\s*<stop offset="0" stop-color=")#ffffff("\/>\s*<stop offset="1" stop-color=")#cfd6e2/,
    "$1#e8312a$2#9a121a",
  )
  .replace(
    /(id="ambRoof"[^>]*>\s*<stop offset="0" stop-color=")#ffffff("\/>\s*<stop offset="1" stop-color=")#e3e8f0/,
    "$1#ef3a31$2#b1191c",
  )

  // side checker stripe → yellow (high-vis on red body)
  .replace(
    /<rect x="-12" y="1\.6" width="24" height="1\.6" fill="#ff3b47"\/>/,
    '<rect x="-12" y="1.6" width="24" height="1.6" fill="#ffd23f"/>',
  )

  // CTA red gradient → fire orange
  .replace(
    /linear-gradient\(180deg,#ff5d63,#e0212c\)/g,
    "linear-gradient(180deg,#ff8a3d,#e84a16)",
  )
  // CTA pulse ring
  .replace(
    /border:2px solid rgba\(255,59,71,\.45\)/g,
    "border:2px solid rgba(232,74,22,.55)",
  )

  // dispatch screen — fire palette (amber on deep ember)
  .replace(/--dispCenter,#1a3a78/g, "--dispCenter,#5a1a14")
  .replace(/--dispMid,#0a1838/g, "--dispMid,#240808")
  .replace(/--dispEdge,#020611/g, "--dispEdge,#0a0202")
  .replace(/--dispGlow,#7fc4ff/g, "--dispGlow,#ffb14a")
  .replace(
    /--dispGlowSoft,rgba\(47,111,255,\.6\)/g,
    "--dispGlowSoft,rgba(255,128,40,.65)",
  )
  .replace(
    /--dispGlowSoft,rgba\(47,111,255,\.35\)/g,
    "--dispGlowSoft,rgba(255,128,40,.4)",
  )
  .replace(
    /--dispGlowSoft,rgba\(47,111,255,\.85\)/g,
    "--dispGlowSoft,rgba(255,128,40,.85)",
  )
  .replace(
    /--dispGlowSoft,rgba\(47,111,255,\.5\)/g,
    "--dispGlowSoft,rgba(255,128,40,.55)",
  )
  .replace(
    /--dispGlowSoft,rgba\(127,196,255,\.25\)/g,
    "--dispGlowSoft,rgba(255,177,74,.28)",
  )
  .replace(
    /--dispBeam,rgba\(127,196,255,\.22\)/g,
    "--dispBeam,rgba(255,177,74,.28)",
  )
  .replace(
    /--dispGlow,rgba\(127,196,255,\.6\)/g,
    "--dispGlow,rgba(255,177,74,.7)",
  )
  .replace(
    /--dispHorizon,rgba\(47,111,255,\.18\)/g,
    "--dispHorizon,rgba(255,90,30,.25)",
  )
  .replace(
    /--dispHorizon2,rgba\(127,196,255,\.28\)/g,
    "--dispHorizon2,rgba(255,160,60,.45)",
  )
  // skyline tints
  .replace(/fill="#0d1f44"/g, 'fill="#2a0e0c"')
  .replace(/fill="#16264f"/g, 'fill="#3d130e"')
  .replace(/stop-color="#1f3a72"/g, 'stop-color="#5a1a14"')
  .replace(/stop-color="#0a1628"/g, 'stop-color="#180605"')
  // dispatch subtitle wording
  .replace(/Dispatching · Abuja FCT/g, "Mobilizing Fire Crew · Abuja FCT")
  // success card
  .replace(/Ambulance Dispatched/g, "Fire Crew Dispatched")
  .replace(/Crew is en route to your location/g, "Fire truck is en route to your location")
  .replace(/UNIT <b id="succUnit">A-07<\/b>/g, 'UNIT <b id="succUnit">F-12</b>');
