const EXAM_DURATION_SECONDS = 2 * 60 * 60;
const STORAGE_KEY = "germ1001-final-exam-state-v1";

const examPapers = {
  paperA: {
    code: "Practice Paper A · Past-paper pattern",
    title: "Past-paper pattern",
    description: "Closest to the retained final: personal information, family or housing, restaurant or doctor, and a family cloze.",
    badges: ["Family", "Housing", "Restaurant", "Health"],
    q1: ["Vorname", "Familienname", "Alter", "Familienstand", "Adresse", "Telefonnummer"],
    q2: {
      family: {
        title: "In meiner Familie",
        prompts: ["How many people are in your family?", "Do you have siblings?", "What are their names and ages?", "What do you do together?"],
        model: "In meiner Familie sind fünf Personen: meine Eltern, mein Bruder, meine Schwester und ich. Mein Bruder heißt Daniel und ist sechzehn Jahre alt. Meine Schwester heißt Mia und ist zwölf. Wir wohnen zusammen in Kingston. Am Wochenende essen wir gern zusammen und besuchen manchmal unsere Großeltern. Ich liebe meine Familie, weil sie freundlich und hilfsbereit ist."
      },
      home: {
        title: "In meinem Traumhaus",
        prompts: ["How many bedrooms does it have?", "What other rooms are there?", "Does it have a garden or balcony?", "How large is it and where is it?"],
        model: "Mein Traumhaus ist groß, hell und ruhig. Es hat vier Schlafzimmer, zwei Badezimmer, eine moderne Küche und ein gemütliches Wohnzimmer. Hinter dem Haus gibt es einen großen Garten mit vielen Blumen. Mein Zimmer hat einen Balkon. Das Haus liegt in der Nähe vom Meer, weil ich gern schwimme. Dort möchte ich mit meiner Familie wohnen."
      }
    },
    q3: {
      restaurant: {
        title: "Situation A · Im Restaurant",
        description: "Order a meal and a drink, then ask for the bill.",
        lines: [
          "Kellner: Guten [[r1|Abend]]. Was [[r2|möchten]] Sie [[r3|bestellen]]?",
          "Gast: Ich [[r4|hätte]] gern eine Suppe und das [[r5|Hähnchen]].",
          "Kellner: Möchten Sie [[r6|etwas]] zu trinken?",
          "Gast: Ein [[r7|Glas]] Mineralwasser, [[r8|bitte]].",
          "Kellner: Sonst noch [[r9|etwas]]?",
          "Gast: Nein, [[r10|danke]]. Später möchte ich die [[r11|Rechnung]].",
          "Kellner: Natürlich. Möchten Sie bar oder mit [[r12|Karte]] bezahlen?"
        ]
      },
      doctor: {
        title: "Situation B · Beim Arzt",
        description: "You have had a sore throat and fever for two days.",
        lines: [
          "Arzt: Guten [[d1|Morgen]]. Was [[d2|fehlt]] Ihnen?",
          "Patient: Mein [[d3|Hals]] tut weh und ich habe [[d4|Fieber]].",
          "Arzt: Seit [[d5|wann]] haben Sie diese Beschwerden?",
          "Patient: Seit [[d6|zwei]] Tagen.",
          "Arzt: Haben Sie viel Wasser [[d7|getrunken]]?",
          "Patient: Ja, aber ich habe nicht gut [[d8|geschlafen]].",
          "Arzt: Sie sollen im [[d9|Bett]] bleiben und diese [[d10|Tabletten]] nehmen.",
          "Patient: Wie [[d11|oft]] soll ich sie nehmen?",
          "Arzt: Zweimal pro [[d12|Tag]]."
        ]
      }
    },
    q4: {
      title: "Die Familie Berger",
      text: "Hier ist die Familie Berger. Die [[f1|Eltern]] heißen Lena und Markus. Sie haben drei [[f2|Kinder]]. Der [[f3|Sohn]] heißt Leon und ist sechzehn [[f4|Jahre]] alt. Die beiden [[f5|Töchter]] heißen Mia und Klara. Mias [[f6|Schwester]] ist zwölf Jahre alt. Die Großeltern [[f7|wohnen]] nicht in Kingston. Der [[f8|Großvater]] heißt Otto und die [[f9|Großmutter]] heißt Anna. Die Familie [[f10|besucht]] sie oft, und alle [[f11|essen]] gern zusammen."
    }
  },
  paperB: {
    code: "Practice Paper B · Full-course rotation",
    title: "Full-course rotation",
    description: "Targets the later outline outcomes: Perfekt, health, directions, movement, clothing, shopping, and gifts.",
    badges: ["Perfekt", "Health", "Directions", "Shopping"],
    q1: ["Vorname", "Familienname", "Geburtsdatum", "Nationalität", "Beruf", "Wohnort"],
    q2: {
      weekend: {
        title: "Mein Wochenende",
        prompts: ["When did you get up?", "Where did you go?", "What did you do?", "How was the weekend?"],
        model: "Am Samstag bin ich um acht Uhr aufgestanden und habe mit meiner Familie gefrühstückt. Danach bin ich in die Stadt gefahren. Ich habe eine Jacke gekauft und meine Freunde getroffen. Am Abend haben wir im Restaurant gegessen. Am Sonntag bin ich zu Hause geblieben, habe Deutsch gelernt und mein Zimmer aufgeräumt. Das Wochenende war schön."
      },
      health: {
        title: "Wenn ich krank bin",
        prompts: ["What symptoms did you have?", "How long did you have them?", "What did you do?", "What advice did the doctor give?"],
        model: "Wenn ich krank bin, bleibe ich zu Hause und schlafe viel. Letzte Woche hatte ich Kopfschmerzen, Fieber und Husten. Ich habe viel Wasser und Tee getrunken und eine Tablette genommen. Der Arzt hat gesagt, ich soll mich ausruhen. Nach zwei Tagen ging es mir besser. Bei starken Schmerzen gehe ich immer zum Arzt."
      }
    },
    q3: {
      directions: {
        title: "Situation A · Der Weg zum Bahnhof",
        description: "Ask a passer-by for directions to the railway station.",
        lines: [
          "Tourist: [[w1|Entschuldigen]] Sie, wie komme ich zum [[w2|Bahnhof]]?",
          "Passantin: Gehen Sie zuerst [[w3|geradeaus]] bis zur [[w4|Ampel]].",
          "Tourist: Muss ich dort [[w5|links]] oder [[w6|rechts]] gehen?",
          "Passantin: Biegen Sie rechts ab und gehen Sie über die [[w7|Brücke]].",
          "Tourist: Liegt der Bahnhof [[w8|gegenüber]] dem Hotel?",
          "Passantin: Ja, genau. Er ist [[w9|neben]] der Bank.",
          "Tourist: Wie [[w10|lange]] dauert das zu [[w11|Fuß]]?",
          "Passantin: Ungefähr zehn [[w12|Minuten]]."
        ]
      },
      clothing: {
        title: "Situation B · Im Kleidungsgeschäft",
        description: "You need a black jacket in size M.",
        lines: [
          "Verkäuferin: Guten [[k1|Tag]]. Kann ich Ihnen [[k2|helfen]]?",
          "Kunde: Ja, ich [[k3|suche]] eine schwarze [[k4|Jacke]] in Größe M.",
          "Verkäuferin: Wie gefällt Ihnen diese hier?",
          "Kunde: Sehr gut. Kann ich sie [[k5|anprobieren]]?",
          "Verkäuferin: Ja. Die [[k6|Umkleidekabine]] ist dort links.",
          "Kunde: Sie ist zu [[k7|groß]]. Haben Sie eine [[k8|kleinere]] Jacke?",
          "Verkäuferin: Ja, hier. Sie [[k9|kostet]] fünfzig Euro.",
          "Kunde: Sie [[k10|passt]] gut. Ich [[k11|nehme]] sie. Kann ich mit [[k12|Karte]] bezahlen?"
        ]
      }
    },
    q4: {
      title: "Mein Wochenende im Perfekt",
      text: "Am Samstag [[p1|bin]] ich um acht Uhr aufgestanden. Danach habe ich mit meiner Familie [[p2|gefrühstückt]]. Um zehn Uhr bin ich in die Stadt [[p3|gefahren]]. Dort habe ich eine Jacke [[p4|gekauft]] und meine Freunde [[p5|getroffen]]. Am Abend [[p6|haben]] wir im Restaurant gegessen. Am Sonntag bin ich zu Hause [[p7|geblieben]]. Ich habe Deutsch [[p8|gelernt]], mein Zimmer [[p9|aufgeräumt]] und Musik [[p10|gehört]]. Das Wochenende [[p11|war]] sehr schön."
    }
  }
};

const setupView = document.getElementById("setupView");
const examView = document.getElementById("examView");
const reviewView = document.getElementById("reviewView");
const paperChoices = document.getElementById("paperChoices");
const honourCheck = document.getElementById("honourCheck");
const startExamBtn = document.getElementById("startExamBtn");
const resumeExamBtn = document.getElementById("resumeExamBtn");
const examForm = document.getElementById("examForm");
const timerBox = document.getElementById("timer");
const timerValue = document.getElementById("timerValue");
const autosaveText = document.getElementById("autosaveText");
const submitModal = document.getElementById("submitModal");
const submissionWarnings = document.getElementById("submissionWarnings");
const printBtn = document.getElementById("printBtn");

let selectedPaperId = "paperA";
let state = loadState();
let timerInterval = null;
let autosaveTimer = null;

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeAnswer(value) {
  return String(value ?? "").trim().toLocaleLowerCase("de-DE").replace(/\s+/g, " ");
}

function countWords(value) {
  const trimmed = String(value ?? "").trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

function extractBlanks(textOrLines) {
  const text = Array.isArray(textOrLines) ? textOrLines.join("\n") : textOrLines;
  return [...text.matchAll(/\[\[([^|\]]+)\|([^\]]+)\]\]/g)].map((match) => ({ id: match[1], answer: match[2] }));
}

function validatePapers() {
  Object.entries(examPapers).forEach(([paperId, paper]) => {
    Object.entries(paper.q3).forEach(([optionId, option]) => {
      const count = extractBlanks(option.lines).length;
      if (count !== 12) throw new Error(`${paperId}/${optionId} has ${count} dialogue blanks; expected 12.`);
    });
    const q4Count = extractBlanks(paper.q4.text).length;
    if (q4Count !== 11) throw new Error(`${paperId} has ${q4Count} paragraph blanks; expected 11.`);
    if (paper.q1.length !== 6) throw new Error(`${paperId} must have six personal-information fields.`);
  });
}

function blankAnswersFor(paper) {
  const q3 = {};
  Object.keys(paper.q3).forEach((optionId) => { q3[optionId] = {}; });
  return {
    q1: Object.fromEntries(paper.q1.map((field) => [field, ""])),
    q2: { selected: "", texts: Object.fromEntries(Object.keys(paper.q2).map((id) => [id, ""])) },
    q3: { selected: "", fields: q3 },
    q4: {}
  };
}

function freshState(paperId) {
  return {
    version: 1,
    phase: "active",
    paperId,
    startedAt: Date.now(),
    durationSeconds: EXAM_DURATION_SECONDS,
    answers: blankAnswersFor(examPapers[paperId]),
    rubric: { content: 0, grammar: 0, vocabulary: 0, organization: 0 },
    submittedAt: null,
    timedOut: false
  };
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return parsed?.version === 1 && examPapers[parsed.paperId] ? parsed : null;
  } catch (_error) {
    return null;
  }
}

function saveState(message = "Saved on this device") {
  if (!state) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (autosaveText) {
    autosaveText.textContent = message;
    clearTimeout(autosaveTimer);
    autosaveTimer = setTimeout(() => { autosaveText.textContent = "Saved on this device"; }, 1100);
  }
}

function clearSavedState() {
  localStorage.removeItem(STORAGE_KEY);
  state = null;
}

function renderPaperChoices() {
  paperChoices.innerHTML = Object.entries(examPapers).map(([id, paper]) => `
    <label class="paper-option">
      <input type="radio" name="paperChoice" value="${id}" ${id === selectedPaperId ? "checked" : ""} />
      <span>
        <strong>${escapeHTML(paper.title)}</strong>
        <small>${escapeHTML(paper.description)}</small>
        <span class="paper-badges">${paper.badges.map((badge) => `<span>${escapeHTML(badge)}</span>`).join("")}</span>
      </span>
    </label>
  `).join("");
}

function showSetup() {
  stopTimer();
  setupView.hidden = false;
  examView.hidden = true;
  reviewView.hidden = true;
  printBtn.hidden = true;
  renderPaperChoices();
  const resumable = state?.phase === "active";
  resumeExamBtn.hidden = !resumable;
  if (resumable) {
    resumeExamBtn.textContent = `Resume ${examPapers[state.paperId].title}`;
  }
  honourCheck.checked = false;
  startExamBtn.disabled = true;
}

function startExam(paperId) {
  state = freshState(paperId);
  saveState();
  renderExam();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function renderQuestionHeader(number, title, points) {
  return `<div class="question-heading"><div><p>Question ${number}</p><h2>${escapeHTML(title)}</h2></div><span class="points-badge">${points} points</span></div>`;
}

function renderClozeText(text, section, optionId = "") {
  let blankNumber = 0;
  const fragments = [];
  let cursor = 0;
  const regex = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    fragments.push(escapeHTML(text.slice(cursor, match.index)));
    blankNumber += 1;
    const id = match[1];
    const saved = section === "q3" ? state.answers.q3.fields[optionId]?.[id] ?? "" : state.answers.q4[id] ?? "";
    const widthClass = match[2].length <= 5 ? "narrow" : "";
    fragments.push(`<label><span class="sr-only">Blank ${blankNumber}</span><input class="cloze-input ${widthClass}" type="text" autocomplete="off" spellcheck="false" aria-label="Blank ${blankNumber}" data-section="${section}" data-option="${optionId}" data-blank="${escapeHTML(id)}" value="${escapeHTML(saved)}" /></label>`);
    cursor = regex.lastIndex;
  }
  fragments.push(escapeHTML(text.slice(cursor)));
  return fragments.join("");
}

function renderExam() {
  if (!state) return showSetup();
  const paper = examPapers[state.paperId];
  setupView.hidden = true;
  reviewView.hidden = true;
  examView.hidden = false;
  printBtn.hidden = true;
  document.getElementById("activePaperName").textContent = paper.title;
  document.getElementById("paperCode").textContent = paper.code;

  const q1Html = `
    <section id="question1" class="question-section">
      ${renderQuestionHeader(1, "Personal-information form", 6)}
      <p class="question-instructions">Complete every field. The information does not have to be true, but each answer must match the requested type.</p>
      <div class="form-grid">
        ${paper.q1.map((field) => `<label class="field-label">${escapeHTML(field)}<input type="text" autocomplete="off" data-section="q1" data-field="${escapeHTML(field)}" value="${escapeHTML(state.answers.q1[field] ?? "")}" /></label>`).join("")}
      </div>
    </section>`;

  const q2Html = `
    <section id="question2" class="question-section">
      ${renderQuestionHeader(2, "Connected German paragraph", 20)}
      <p class="question-instructions">Choose ONE topic. Answer all four prompts in a connected paragraph of at least 45 relevant German words.</p>
      <div class="option-stack">
        ${Object.entries(paper.q2).map(([optionId, option]) => {
          const selected = state.answers.q2.selected === optionId;
          const value = state.answers.q2.texts[optionId] ?? "";
          const words = countWords(value);
          return `<article class="option-card ${selected ? "selected" : ""}" data-option-card="q2-${optionId}">
            <label class="option-select"><input type="radio" name="q2Option" value="${optionId}" data-section="q2-select" ${selected ? "checked" : ""} /><span><strong>${escapeHTML(option.title)}</strong><small>Select this writing topic</small></span></label>
            <div class="option-body">
              <ul class="prompt-list">${option.prompts.map((prompt) => `<li>${escapeHTML(prompt)}</li>`).join("")}</ul>
              <textarea data-section="q2-text" data-option="${optionId}" aria-label="Response for ${escapeHTML(option.title)}" placeholder="Write your German paragraph here...">${escapeHTML(value)}</textarea>
              <div class="writing-meta"><span>Aim for 55-65 words.</span><span class="word-count ${words >= 45 ? "met" : words ? "short" : ""}" data-word-count="${optionId}">${words} words${words >= 45 ? " · minimum met" : ""}</span></div>
            </div>
          </article>`;
        }).join("")}
      </div>
    </section>`;

  const q3Html = `
    <section id="question3" class="question-section">
      ${renderQuestionHeader(3, "Functional dialogue cloze", 12)}
      <p class="question-instructions">Choose ONE situation and complete all 12 blanks. Use the context, grammar, and given sentence structure.</p>
      <div class="option-stack">
        ${Object.entries(paper.q3).map(([optionId, option]) => {
          const selected = state.answers.q3.selected === optionId;
          return `<article class="option-card ${selected ? "selected" : ""}" data-option-card="q3-${optionId}">
            <label class="option-select"><input type="radio" name="q3Option" value="${optionId}" data-section="q3-select" ${selected ? "checked" : ""} /><span><strong>${escapeHTML(option.title)}</strong><small>${escapeHTML(option.description)}</small></span></label>
            <div class="option-body dialogue">${option.lines.map((line) => {
              const colon = line.indexOf(":");
              const speaker = colon >= 0 ? line.slice(0, colon + 1) : "";
              const content = colon >= 0 ? line.slice(colon + 1) : line;
              return `<p class="dialogue-line">${speaker ? `<strong>${escapeHTML(speaker)}</strong>` : ""}${renderClozeText(content, "q3", optionId)}</p>`;
            }).join("")}</div>
          </article>`;
        }).join("")}
      </div>
    </section>`;

  const q4Html = `
    <section id="question4" class="question-section">
      ${renderQuestionHeader(4, "Contextual paragraph cloze", 11)}
      <p class="question-instructions">Complete all 11 blanks. Check subject-verb agreement, capitalization, tense, and spelling.</p>
      <h3>${escapeHTML(paper.q4.title)}</h3>
      <p class="cloze-paragraph">${renderClozeText(paper.q4.text, "q4")}</p>
    </section>`;

  examForm.innerHTML = q1Html + q2Html + q3Html + q4Html;
  updateProgress();
  startTimer();
}

function handleExamInput(event) {
  const target = event.target;
  const section = target.dataset.section;
  if (!section || !state || state.phase !== "active") return;

  if (section === "q1") state.answers.q1[target.dataset.field] = target.value;
  if (section === "q2-select") state.answers.q2.selected = target.value;
  if (section === "q2-text") state.answers.q2.texts[target.dataset.option] = target.value;
  if (section === "q3-select") state.answers.q3.selected = target.value;
  if (section === "q3") {
    const option = target.dataset.option;
    state.answers.q3.fields[option] ??= {};
    state.answers.q3.fields[option][target.dataset.blank] = target.value;
  }
  if (section === "q4") state.answers.q4[target.dataset.blank] = target.value;

  updateOptionCards();
  updateWordCounters();
  updateProgress();
  saveState("Saving...");
}

function updateOptionCards() {
  document.querySelectorAll("[data-option-card^='q2-']").forEach((card) => card.classList.toggle("selected", card.dataset.optionCard === `q2-${state.answers.q2.selected}`));
  document.querySelectorAll("[data-option-card^='q3-']").forEach((card) => card.classList.toggle("selected", card.dataset.optionCard === `q3-${state.answers.q3.selected}`));
}

function updateWordCounters() {
  document.querySelectorAll("[data-word-count]").forEach((element) => {
    const words = countWords(state.answers.q2.texts[element.dataset.wordCount] ?? "");
    element.textContent = `${words} words${words >= 45 ? " · minimum met" : ""}`;
    element.classList.toggle("met", words >= 45);
    element.classList.toggle("short", words > 0 && words < 45);
  });
}

function readiness() {
  if (!state) return { q1: false, q2: false, q3: false, q4: false };
  const paper = examPapers[state.paperId];
  const q1 = paper.q1.every((field) => String(state.answers.q1[field] ?? "").trim());
  const q2 = Boolean(state.answers.q2.selected) && countWords(state.answers.q2.texts[state.answers.q2.selected] ?? "") >= 45;
  const selectedQ3 = state.answers.q3.selected;
  const q3Blanks = selectedQ3 ? extractBlanks(paper.q3[selectedQ3].lines) : [];
  const q3 = Boolean(selectedQ3) && q3Blanks.every(({ id }) => String(state.answers.q3.fields[selectedQ3]?.[id] ?? "").trim());
  const q4 = extractBlanks(paper.q4.text).every(({ id }) => String(state.answers.q4[id] ?? "").trim());
  return { q1, q2, q3, q4 };
}

function updateProgress() {
  const ready = readiness();
  const count = Object.values(ready).filter(Boolean).length;
  document.getElementById("progressText").textContent = `${count} of 4 sections ready`;
  document.getElementById("examProgressBar").style.width = `${count * 25}%`;
  Object.entries(ready).forEach(([question, complete]) => {
    document.querySelector(`[data-question='${question}']`)?.classList.toggle("complete", complete);
  });
}

function remainingSeconds() {
  if (!state) return EXAM_DURATION_SECONDS;
  return Math.max(0, state.durationSeconds - Math.floor((Date.now() - state.startedAt) / 1000));
}

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return [hours, minutes, secs].map((part) => String(part).padStart(2, "0")).join(":");
}

function startTimer() {
  stopTimer();
  const tick = () => {
    const remaining = remainingSeconds();
    timerValue.textContent = formatTime(remaining);
    timerBox.classList.toggle("warning", remaining <= 15 * 60 && remaining > 5 * 60);
    timerBox.classList.toggle("urgent", remaining <= 5 * 60);
    if (remaining === 0) {
      state.timedOut = true;
      finalizeSubmission();
    }
  };
  tick();
  if (state?.phase === "active") timerInterval = setInterval(tick, 1000);
}

function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
}

function submissionIssues() {
  const paper = examPapers[state.paperId];
  const ready = readiness();
  const issues = [];
  if (!ready.q1) issues.push("Question 1 has incomplete personal-information fields.");
  if (!state.answers.q2.selected) issues.push("Question 2 has no selected writing topic.");
  else if (!ready.q2) issues.push(`Question 2 has ${countWords(state.answers.q2.texts[state.answers.q2.selected])} words; the minimum is 45.`);
  if (!state.answers.q3.selected) issues.push("Question 3 has no selected dialogue.");
  else if (!ready.q3) {
    const blanks = extractBlanks(paper.q3[state.answers.q3.selected].lines);
    const filled = blanks.filter(({ id }) => String(state.answers.q3.fields[state.answers.q3.selected]?.[id] ?? "").trim()).length;
    issues.push(`Question 3 has ${filled} of 12 blanks completed.`);
  }
  if (!ready.q4) {
    const blanks = extractBlanks(paper.q4.text);
    const filled = blanks.filter(({ id }) => String(state.answers.q4[id] ?? "").trim()).length;
    issues.push(`Question 4 has ${filled} of 11 blanks completed.`);
  }
  return issues;
}

function openSubmitModal() {
  const issues = submissionIssues();
  submissionWarnings.innerHTML = issues.length
    ? `<p>The following items need attention:</p><ul>${issues.map((issue) => `<li>${escapeHTML(issue)}</li>`).join("")}</ul>`
    : "<p>All four sections are complete. You can submit when ready.</p>";
  submitModal.hidden = false;
  document.getElementById("returnToExamBtn").focus();
}

function closeSubmitModal() {
  submitModal.hidden = true;
  document.getElementById("finishExamBtn").focus();
}

function gradeObjective() {
  const paper = examPapers[state.paperId];
  const q1 = paper.q1.filter((field) => String(state.answers.q1[field] ?? "").trim()).length;
  const selectedQ3 = state.answers.q3.selected;
  const q3 = selectedQ3 ? extractBlanks(paper.q3[selectedQ3].lines).filter(({ id, answer }) => normalizeAnswer(state.answers.q3.fields[selectedQ3]?.[id]) === normalizeAnswer(answer)).length : 0;
  const q4 = extractBlanks(paper.q4.text).filter(({ id, answer }) => normalizeAnswer(state.answers.q4[id]) === normalizeAnswer(answer)).length;
  return { q1, q3, q4, total: q1 + q3 + q4 };
}

function rubricScore() {
  return Object.values(state.rubric).reduce((sum, value) => sum + Number(value || 0), 0);
}

function finalizeSubmission() {
  if (!state || state.phase !== "active") return;
  stopTimer();
  state.phase = "review";
  state.submittedAt = Date.now();
  saveState();
  submitModal.hidden = true;
  renderReview();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function performanceLabel(percent) {
  if (percent >= 80) return "Strong exam readiness";
  if (percent >= 65) return "Developing exam readiness";
  return "Targeted repair needed";
}

function renderAnswerRows(blanks, values) {
  return blanks.map(({ id, answer }, index) => {
    const user = values?.[id] ?? "";
    const correct = normalizeAnswer(user) === normalizeAnswer(answer);
    return `<div class="answer-row ${correct ? "correct" : "incorrect"}"><strong>${index + 1}</strong><span>Your answer: ${escapeHTML(user || "—")}</span><span>Correct: ${escapeHTML(answer)}</span></div>`;
  }).join("");
}

function renderReview() {
  if (!state) return showSetup();
  stopTimer();
  setupView.hidden = true;
  examView.hidden = true;
  reviewView.hidden = false;
  printBtn.hidden = false;
  const paper = examPapers[state.paperId];
  const objective = gradeObjective();
  const written = rubricScore();
  const total = objective.total + written;
  const percent = Math.round((total / 49) * 100);
  const q2Id = state.answers.q2.selected;
  const q2Option = q2Id ? paper.q2[q2Id] : null;
  const q2Text = q2Id ? state.answers.q2.texts[q2Id] ?? "" : "";
  const q3Id = state.answers.q3.selected;

  reviewView.innerHTML = `<div class="review-shell">
    <section class="review-hero">
      <div><p class="kicker">Examination review</p><h1 id="performanceTitle">${escapeHTML(performanceLabel(percent))}</h1><p>${state.timedOut ? "Time expired and the paper was submitted automatically." : "Your objective sections are graded. Use the rubric below to add the 20-point written-expression score."}</p></div>
      <div class="score-orbit"><div><strong id="totalScore">${total}/49</strong><span id="percentScore">${percent}%</span></div></div>
    </section>
    <div class="score-grid">
      <div class="score-card"><span>Question 1</span><strong>${objective.q1}/6</strong></div>
      <div class="score-card"><span>Question 2</span><strong id="writtenScore">${written}/20</strong></div>
      <div class="score-card"><span>Question 3</span><strong>${objective.q3}/12</strong></div>
      <div class="score-card"><span>Question 4</span><strong>${objective.q4}/11</strong></div>
    </div>

    <section class="review-section">
      <h2>Question 2 · Guided self-marking</h2>
      <p>Automated tools cannot reliably judge beginner German writing. Compare your response with the prompt and model, then award each category honestly.</p>
      <div class="rubric-grid">
        <label>Content & relevance (0-8)<input type="number" min="0" max="8" step="1" data-rubric="content" value="${Number(state.rubric.content || 0)}" /></label>
        <label>Grammar & control (0-6)<input type="number" min="0" max="6" step="1" data-rubric="grammar" value="${Number(state.rubric.grammar || 0)}" /></label>
        <label>Vocabulary & spelling (0-3)<input type="number" min="0" max="3" step="1" data-rubric="vocabulary" value="${Number(state.rubric.vocabulary || 0)}" /></label>
        <label>Organization (0-3)<input type="number" min="0" max="3" step="1" data-rubric="organization" value="${Number(state.rubric.organization || 0)}" /></label>
      </div>
      <p><strong>Selected topic:</strong> ${q2Option ? escapeHTML(q2Option.title) : "No option selected"} · <strong>${countWords(q2Text)} words</strong></p>
      <div class="response-box">${escapeHTML(q2Text || "No written response submitted.")}</div>
      ${q2Option ? `<div class="model-box"><strong>Model response</strong><br />${escapeHTML(q2Option.model)}</div>` : ""}
    </section>

    <section class="review-section">
      <h2>Question 3 · Dialogue answers</h2>
      <p>${q3Id ? escapeHTML(paper.q3[q3Id].title) : "No dialogue selected."}</p>
      <div class="answer-review">${q3Id ? renderAnswerRows(extractBlanks(paper.q3[q3Id].lines), state.answers.q3.fields[q3Id]) : ""}</div>
    </section>

    <section class="review-section">
      <h2>Question 4 · Paragraph answers</h2>
      <p>${escapeHTML(paper.q4.title)}</p>
      <div class="answer-review">${renderAnswerRows(extractBlanks(paper.q4.text), state.answers.q4)}</div>
    </section>

    <section class="review-section">
      <h2>Repair plan</h2>
      <p>Rewrite every missed dialogue or cloze word in a new sentence. Retake this paper only after a 24-hour gap, or choose the other paper for fresh retrieval.</p>
      <div class="review-actions"><button id="retakeSameBtn" class="danger-button" type="button">Retake this paper</button><button id="choosePaperBtn" class="secondary-button" type="button">Choose another paper</button><button id="reviewPrintBtn" class="secondary-button" type="button">Print this review</button></div>
    </section>
  </div>`;
}

function updateReviewScore(event) {
  const input = event.target.closest("[data-rubric]");
  if (!input || !state) return;
  const max = Number(input.max);
  const value = Math.min(max, Math.max(0, Math.round(Number(input.value) || 0)));
  input.value = value;
  state.rubric[input.dataset.rubric] = value;
  saveState();
  const objective = gradeObjective();
  const written = rubricScore();
  const total = objective.total + written;
  document.getElementById("writtenScore").textContent = `${written}/20`;
  document.getElementById("totalScore").textContent = `${total}/49`;
  const percent = Math.round((total / 49) * 100);
  document.getElementById("percentScore").textContent = `${percent}%`;
  document.getElementById("performanceTitle").textContent = performanceLabel(percent);
}

paperChoices.addEventListener("change", (event) => { selectedPaperId = event.target.value; renderPaperChoices(); });
honourCheck.addEventListener("change", () => { startExamBtn.disabled = !honourCheck.checked; });
startExamBtn.addEventListener("click", () => startExam(selectedPaperId));
resumeExamBtn.addEventListener("click", () => { if (state?.phase === "active") renderExam(); });
examForm.addEventListener("input", handleExamInput);
examForm.addEventListener("change", handleExamInput);
document.getElementById("finishExamBtn").addEventListener("click", openSubmitModal);
document.getElementById("returnToExamBtn").addEventListener("click", closeSubmitModal);
document.getElementById("confirmSubmitBtn").addEventListener("click", finalizeSubmission);
submitModal.addEventListener("click", (event) => { if (event.target === submitModal) closeSubmitModal(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !submitModal.hidden) closeSubmitModal(); });
reviewView.addEventListener("input", updateReviewScore);
reviewView.addEventListener("click", (event) => {
  if (event.target.closest("#retakeSameBtn")) startExam(state.paperId);
  if (event.target.closest("#choosePaperBtn")) { clearSavedState(); showSetup(); window.scrollTo({ top: 0, behavior: "instant" }); }
  if (event.target.closest("#reviewPrintBtn")) window.print();
});
printBtn.addEventListener("click", () => window.print());

validatePapers();
if (state?.phase === "review") renderReview();
else showSetup();
