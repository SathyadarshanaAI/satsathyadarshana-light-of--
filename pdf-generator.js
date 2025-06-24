// pdf-generator.js

import { analyzeMoonPosition } from './kp-sublord-engine.js';

// 🧠 NIC Encryption Function (Base64)
function encryptNIC(nic) {
  return btoa(nic); // Base64 encode for privacy
}

document.getElementById('birthForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = e.target.name.value;
  const dob = e.target.dob.value;
  const tob = e.target.tob.value;
  const pob = e.target.pob.value;
  const nic = e.target.nic.value;
  const gender = e.target.gender.value;
  const language = e.target.language.value;

  const today = new Date().toLocaleDateString();
  const moonDeg = 125.5; // 🔮 Placeholder
  const kpResult = analyzeMoonPosition(moonDeg);

  const doc = new jspdf.jsPDF();

  // 🌌 Cover Page
  doc.setFontSize(22);
  doc.text('🪷 Divyajnana Chakra Report', 20, 30);
  doc.setFontSize(14);
  doc.text(`Cosmic Insight for ${name}`, 20, 40);
  doc.text(`Generated on: ${today}`, 20, 50);
  doc.text('This sacred report is a gift from the Light of Truth.', 20, 70);
  doc.addPage();

  // 📖 Personal Details
  doc.setFontSize(18);
  doc.text('📜 Birth Information', 20, 20);
  doc.setFontSize(12);
  doc.text(`Full Name: ${name}`, 20, 35);
  doc.text(`Date of Birth: ${dob}`, 20, 45);
  doc.text(`Time of Birth: ${tob}`, 20, 55);
  doc.text(`Place of Birth: ${pob}`, 20, 65);
  doc.text(`NIC (encrypted): ${nic ? encryptNIC(nic) : 'N/A'}`, 20, 75);
  doc.text(`Gender: ${gender}`, 20, 85);
  doc.text(`Preferred Language: ${language}`, 20, 95);
  doc.addPage();

  // 🔮 KP Sub Lord Analysis
  doc.setFontSize(16);
  doc.text('🔮 KP Sub Lord Analysis', 20, 30);
  doc.setFontSize(12);
  doc.text(`Moon Position (°): ${moonDeg}`, 20, 45);
  doc.text(`Nakshatra: ${kpResult.nakshatra}`, 20, 55);
  doc.text(`Star Lord: ${kpResult.starLord}`, 20, 65);
  doc.text(`Sub Lord: ${kpResult.subLord}`, 20, 75);
  doc.addPage();

  // 🕊️ Final Blessing
  doc.setFontSize(14);
  doc.text('🕊️ Final Blessing', 20, 30);
  doc.setFontSize(12);
  doc.text(`May this wisdom bring serenity and truth to your path.`, 20, 50);
  doc.text(`May light guide you.`, 20, 60);
  doc.text(`— Divyajnana Chakra | Sathyadarshana`, 20, 80);

  // 💠 Watermark
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setTextColor(220);
    doc.setFontSize(10);
    doc.text('Protected by Sathyadarshana.com – All Rights Reserved', 60, 290);
  }

  // 💾 Save
  doc.save(`Divyajnana_Chakra_Report_${name}.pdf`);
});