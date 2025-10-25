// assessment.js
// ARISTOTLE - Ethical Readiness Tool for Healthcare AI Systems
// Combines your full UI control, scoring logic, PDF export, and WHO-based recommendation engine

import { recommendations } from "./recommendations.js";

// ------------------------
// INITIAL VARIABLES
// ------------------------
const questions = window.roleQuestions || {};
let currentRole = "";
let currentQuestion = 0;
let userAnswers = [];

// ------------------------
// DOM ELEMENTS
// ------------------------
const roleSelect = document.getElementById("user-role");
const startBtn = document.getElementById("start-assessment");
const questionSection = document.getElementById("question-section");
const questionRole = document.getElementById("question-role");
const questionText = document.getElementById("question-text");
const progressFill = document.getElementById("progress-fill");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const resultSection = document.getElementById("result-section");
const totalScoreDisplay = document.getElementById("total-score");
const percentageDisplay = document.getElementById("percentage-score");
const levelDisplay = document.getElementById("readiness-level");
const recommendationsText = document.getElementById("recommendations-text");
const restartBtn = document.getElementById("restart-btn");
const generatePDF = document.getElementById("generate-pdf");

// ------------------------
// START ASSESSMENT
// ------------------------
startBtn.addEventListener("click", () => {
  currentRole = roleSelect.value;
  if (!currentRole) {
    alert("Please select a role to begin the assessment.");
    return;
  }

  userAnswers = new Array(questions[currentRole].length).fill(null);
  currentQuestion = 0;
  document.querySelector(".role-section").classList.add("hidden");
  questionSection.classList.remove("hidden");
  questionRole.textContent = `${currentRole.toUpperCase()} ASSESSMENT`;
  showQuestion();
});

// ------------------------
// SHOW QUESTION
// ------------------------
function showQuestion() {
  const roleSet = questions[currentRole];
  questionText.textContent = `Q${currentQuestion + 1}: ${roleSet[currentQuestion]}`;

  const radios = document.querySelectorAll("input[name='score']");
  radios.forEach((r) => (r.checked = false));
  if (userAnswers[currentQuestion] !== null) {
    document.querySelector(`input[value='${userAnswers[currentQuestion]}']`).checked = true;
  }

  const progressWidth = ((currentQuestion + 1) / roleSet.length) * 100;
  progressFill.style.width = `${progressWidth}%`;

  prevBtn.disabled = currentQuestion === 0;
  nextBtn.classList.toggle("hidden", currentQuestion === roleSet.length - 1);
  submitBtn.classList.toggle("hidden", currentQuestion !== roleSet.length - 1);
}

function recordAnswer() {
  const selected = document.querySelector("input[name='score']:checked");
  if (selected) userAnswers[currentQuestion] = parseInt(selected.value);
}

// ------------------------
// NAVIGATION
// ------------------------
nextBtn.addEventListener("click", () => {
  recordAnswer();
  if (userAnswers[currentQuestion] === null) {
    alert("Please select an answer before continuing.");
    return;
  }
  currentQuestion++;
  showQuestion();
});

prevBtn.addEventListener("click", () => {
  recordAnswer();
  if (currentQuestion > 0) currentQuestion--;
  showQuestion();
});

// ------------------------
// SUBMIT FINAL ASSESSMENT
// ------------------------
submitBtn.addEventListener("click", () => {
  recordAnswer();
  if (userAnswers.includes(null)) {
    alert("Please answer all questions before submitting.");
    return;
  }
  displayResults();
});

// ------------------------
// RESULTS & RECOMMENDATIONS
// ------------------------
function displayResults() {
  questionSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  const total = userAnswers.reduce((a, b) => a + b, 0);
  const max = questions[currentRole].length * 2;
  const percentage = Math.round((total / max) * 100);

  let level = "";
  if (percentage < 50) level = "Low Readiness";
  else if (percentage < 80) level = "Moderate Readiness";
  else level = "High Readiness";

  totalScoreDisplay.textContent = `${total} / ${max}`;
  percentageDisplay.textContent = percentage;
  levelDisplay.textContent = level;

  // Generate full WHO recommendations per principle for this role
  const principles = Object.keys(recommendations[currentRole]);
  let output = "";
  principles.forEach((p) => {
    const rec = getRecommendation(currentRole, p, percentage);
    output += `
      <div class="principle-block">
        <h4>${p.toUpperCase()}</h4>
        <p><strong>Assessment Summary:</strong> ${rec.summary}</p>
        <p><strong>Recommended Actions:</strong></p>
        <ul>${rec.actions.map(a => `<li>${a}</li>`).join("")}</ul>
        <p><strong>Expected Impact:</strong> ${rec.impact}</p>
      </div>
    `;
  });
  recommendationsText.innerHTML = output.trim();
}

// ------------------------
// HELPER FUNCTION
// ------------------------
function getRecommendation(role, principle, score) {
  const level = score < 50 ? "low" : score < 80 ? "medium" : "high";
  return recommendations[role][principle][level];
}

// ------------------------
// GENERATE PDF (IMPROVED VERSION)
// ------------------------
generatePDF.addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const marginX = 15;
  const marginY = 15;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const usableWidth = pageWidth - (marginX * 2);
  let y = marginY;

  const total = userAnswers.reduce((a, b) => a + b, 0);
  const max = questions[currentRole].length * 2;
  const percentage = Math.round((total / max) * 100);
  const date = new Date().toLocaleString();
  const level = levelDisplay.textContent;

  // Helper function to check if we need a new page
  function checkPageBreak(neededSpace) {
    if (y + neededSpace > pageHeight - marginY) {
      doc.addPage();
      y = marginY;
      return true;
    }
    return false;
  }

  // ---------- HEADER WITH BRANDING ----------
  // Add decorative header bar
  doc.setFillColor(0, 188, 212);
  doc.rect(0, 0, pageWidth, 8, 'F');
  
  // ---------- HEADER WITH ARISTOTLE LOGO ----------
  try {
    const logo = new Image();
    logo.src = "Headings.png"; 

    // Draw a rounded border box same as CSS: width 35 mm, height 15 mm, 4 mm radius
    doc.setDrawColor(210, 210, 210);        // subtle grey border
    doc.setLineWidth(0.5);
    doc.roundedRect(marginX, y - 2, 36, 15, 4, 4, "S");

    // Add underlying light color (like HTML banner background)
    doc.setFillColor(240, 250, 255);
    doc.roundedRect(marginX, y - 2, 36, 15, 4, 4, "F");

    // Insert logo image inside the rounded box keeping same margins
    // (2 mm inner padding to mirror CSS border‑radius look)
    doc.addImage(logo, "JPEG", marginX + 2, y, 32, 11);

  } catch (err) {
    console.error("Logo failed to load:", err);
  }

  // Move title next to logo in same vertical alignment
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(0, 120, 180);
  doc.text("Ethical Readiness Assessment Report", marginX + 45, y + 8);
  y += 18;


  // Add line separator
  doc.setDrawColor(0, 188, 212);
  doc.setLineWidth(0.5);
  doc.line(marginX, y, pageWidth - marginX, y);
  y += 8;

  // Basic Information
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(40, 40, 40);
  
  doc.setFont("helvetica", "bold");
  doc.text("Role: ", marginX, y);
  doc.setFont("helvetica", "normal");
  doc.text(currentRole.toUpperCase(), marginX + 15, y);
  y += 6;

  doc.setFont("helvetica", "bold");
  doc.text("Date: ", marginX, y);
  doc.setFont("helvetica", "normal");
  doc.text(date, marginX + 15, y);
  y += 6;

  doc.setFont("helvetica", "bold");
  doc.text("Total Score: ", marginX, y);
  doc.setFont("helvetica", "normal");
  doc.text(`${total} / ${max}`, marginX + 30, y);
  y += 6;

  doc.setFont("helvetica", "bold");
  doc.text("Readiness Percentage: ", marginX, y);
  doc.setFont("helvetica", "normal");
  doc.text(`${percentage}%`, marginX + 50, y);
  y += 6;

  doc.setFont("helvetica", "bold");
  doc.text("Readiness Level: ", marginX, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 180, 120);
  doc.text(level, marginX + 40, y);
  doc.setTextColor(40, 40, 40);
  y += 10;

  // Separator line
  doc.setDrawColor(180, 180, 180);
  doc.setLineWidth(0.3);
  doc.line(marginX, y, pageWidth - marginX, y);
  y += 8;

  // ---------- RECOMMENDATIONS SECTION ----------
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(0, 120, 180);
  doc.text("Detailed WHO-Based Recommendations", marginX, y);
  y += 10;

  // Get principle blocks
  const recBlocks = document.querySelectorAll("#recommendations-text .principle-block");
  
  recBlocks.forEach((block, index) => {
    const title = block.querySelector("h4").innerText.trim();
    const summaryPara = block.querySelector("p");
    const summary = summaryPara ? summaryPara.innerText.replace("Assessment Summary:", "").trim() : "";
    const actionItems = [...block.querySelectorAll("ul li")].map((li) => li.innerText.trim());
    const allParas = block.querySelectorAll("p");
    const impact = allParas.length > 1 ? 
      allParas[allParas.length - 1].innerText.replace("Expected Impact:", "").trim() : "";

    // Check if we need a new page for this principle
    checkPageBreak(40);

    // PRINCIPLE TITLE
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(0, 150, 200);
    doc.text(title, marginX, y);
    y += 7;

    // ASSESSMENT SUMMARY
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(40, 40, 40);
    doc.text("Assessment Summary:", marginX, y);
    y += 5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const wrappedSummary = doc.splitTextToSize(summary, usableWidth - 5);
    doc.text(wrappedSummary, marginX + 3, y);
    y += wrappedSummary.length * 5 + 3;

    // Check page break
    checkPageBreak(30);

    // RECOMMENDED ACTIONS
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Recommended Actions:", marginX, y);
    y += 5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    actionItems.forEach((action) => {
      checkPageBreak(15);
      const bulletPoint = String.fromCharCode(8226); // Bullet character
      const wrappedAction = doc.splitTextToSize(action, usableWidth - 10);
      doc.text(bulletPoint, marginX + 3, y);
      doc.text(wrappedAction, marginX + 8, y);
      y += wrappedAction.length * 4.5 + 2;
    });
    y += 2;

    // Check page break
    checkPageBreak(20);

    // EXPECTED IMPACT
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Expected Impact:", marginX, y);
    y += 5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const wrappedImpact = doc.splitTextToSize(impact, usableWidth - 5);
    doc.text(wrappedImpact, marginX + 3, y);
    y += wrappedImpact.length * 5 + 8;

    // Add separator between principles
    if (index < recBlocks.length - 1) {
      checkPageBreak(10);
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.2);
      doc.line(marginX, y, pageWidth - marginX, y);
      y += 6;
    }
  });

  // ---------- FOOTER ON EACH PAGE ----------
  const totalPages = doc.internal.getNumberOfPages();
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);

  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    const footerY = pageHeight - 10;
    doc.text(
      `© 2025 ARISTOTLE Initiative | WHO AI Ethics Framework Reference`,
      pageWidth / 2,
      footerY,
      { align: "center" }
    );
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - marginX, footerY, { align: "right" });
  }

  // Save the PDF
  doc.save(`ARISTOTLE_${currentRole}_Report.pdf`);
});

// ------------------------
// RESTART TOOL
// ------------------------
restartBtn.addEventListener("click", () => {
  window.location.reload();
});