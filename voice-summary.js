// voice-summary.js

export function generateSummaryText(data, kpResult) {
  return `
This is the astrological summary for ${data.name}, born on ${data.dob} at ${data.tob} in ${data.pob}.
The moon was at ${data.moonDeg} degrees.
Nakshatra: ${kpResult.nakshatra}, Star Lord: ${kpResult.starLord}, Sub Lord: ${kpResult.subLord}.
May this wisdom guide your life. — Sathyadarshana.
`;
}

export function speakSummary(text, lang = 'en-US') {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = lang;
  msg.rate = 1;
  msg.pitch = 1;
  speechSynthesis.speak(msg);
}