// kp-sublord-engine.js

// Simplified KP Sub Lord system — base Nakshatra + Sub Lord table

const nakshatraTable = [
  { name: "Ashwini", lord: "Ketu", startDeg: 0 },
  { name: "Bharani", lord: "Venus", startDeg: 13.333 },
  { name: "Krittika", lord: "Sun", startDeg: 26.666 },
  // ... Add rest up to Revati
  { name: "Revati", lord: "Mercury", startDeg: 346.66 }
];

const subLordPattern = [
  "Ketu", "Venus", "Sun", "Moon", "Mars",
  "Rahu", "Jupiter", "Saturn", "Mercury"
];

function getNakshatra(deg) {
  const nakDeg = deg % 360;
  for (let i = nakshatraTable.length - 1; i >= 0; i--) {
    if (nakDeg >= nakshatraTable[i].startDeg) {
      return nakshatraTable[i];
    }
  }
  return nakshatraTable[0];
}

function getSubLord(deg) {
  const offsetInNakshatra = (deg % 13.333);
  const segment = Math.floor((offsetInNakshatra / 13.333) * 9);
  return subLordPattern[segment];
}

export function analyzeMoonPosition(deg) {
  const nak = getNakshatra(deg);
  const sub = getSubLord(deg);

  return {
    nakshatra: nak.name,
    starLord: nak.lord,
    subLord: sub
  };
}

// Example:
// const result = analyzeMoonPosition(125.5);
// console.log(result);
