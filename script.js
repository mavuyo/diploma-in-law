const EXAM_URL = "https://adovh.unisa.ac.za/my/courses.php";
const STORAGE_KEY = "dlh-demo-v1";

const categories = [
  "Foundations of Law", "Core Law Modules", "Employment and Business Law",
  "Public and Regulatory Law", "Civil and Procedural Law", "Additional Legal Studies"
];

// Provisional examples only. Replace these titles/codes with the verified curriculum before launch.
const modules = [
  ["Introduction to Law","Foundations of Law","An introduction to law, legal rules, sources of law and the role of the legal system."],
  ["Legal Skills and Research","Foundations of Law","Practise legal reading, research, writing and referencing skills."],
  ["South African Legal System","Foundations of Law","Explore South Africa's courts, legal institutions and sources of law."],
  ["Constitutional Law","Foundations of Law","Study constitutional supremacy, the Bill of Rights and state power."],
  ["Interpretation of Statutes","Foundations of Law","Learn how courts interpret legislation and apply statutory wording."],
  ["Criminal Law","Core Law Modules","Study criminal liability, elements of offences and legal defences."],
  ["Criminal Procedure","Core Law Modules","Explore arrest, bail, trial procedure and criminal justice processes."],
  ["Law of Contract","Core Law Modules","Learn about agreements, contractual requirements, breach and remedies."],
  ["Law of Delict","Core Law Modules","Study wrongfulness, fault, causation, harm and delictual remedies."],
  ["Family Law","Core Law Modules","Explore legal rules relating to family relationships and responsibilities."],
  ["Labour Law","Employment and Business Law","Study employment rights, workplace disputes and labour legislation."],
  ["Mercantile Law","Employment and Business Law","Explore legal principles affecting trade and commercial transactions."],
  ["Business Law","Employment and Business Law","Understand legal responsibilities in business operations."],
  ["Company Law","Employment and Business Law","Study company formation, governance and directors' duties."],
  ["Law of Property","Employment and Business Law","Explore ownership, possession and property-related rights."],
  ["Administrative Law","Public and Regulatory Law","Study lawful public administration, fairness and review of decisions."],
  ["Environmental Law","Public and Regulatory Law","Explore environmental protection, sustainability and regulatory duties."],
  ["International Law","Public and Regulatory Law","Learn about international legal rules and relations between states."],
  ["Human Rights Law","Public and Regulatory Law","Study fundamental rights, equality and the protection of human dignity."],
  ["Law of Evidence","Public and Regulatory Law","Explore admissibility, relevance, proof and evidentiary principles."],
  ["Civil Procedure","Civil and Procedural Law","Study the rules and steps involved in civil court proceedings."],
  ["Civil Litigation","Civil and Procedural Law","Explore dispute resolution and the practical conduct of civil cases."],
  ["Law of Persons","Civil and Procedural Law","Study legal personality, status, capacity and related concepts."],
  ["Law of Succession","Civil and Procedural Law","Explore wills, intestate succession and estate administration."],
  ["Insolvency Law","Civil and Procedural Law","Study insolvency, sequestration and creditor-related principles."],
  ["Customary Law","Additional Legal Studies","Explore living customary law and its place in South Africa's legal system."],
  ["Legal Ethics","Additional Legal Studies","Study professional conduct, confidentiality and ethical responsibilities."],
  ["Jurisprudence","Additional Legal Studies","Explore theories about law, justice, rights and legal authority."],
  ["Tax Law","Additional Legal Studies","Learn basic legal principles governing taxation and tax administration."],
  ["Legal Practice and Professional Responsibility","Additional Legal Studies","Explore legal services, professional duties and responsible practice."]
].map((m, i) => ({id:i+1, name:m[0], category:m[1], description:m[2], code:"", topics:["Understand the key definitions and principles","Review relevant legislation and prescribed materials","Study important cases and their legal principles","Practise applying the law to a practical scenario"]}));

const libraryData = {
  cases: [
    {type:"Constitutional law",title:"S v Makwanyane",citation:"Constitutional Court · 1995",description:"A landmark judgment that declared the death penalty unconstitutional under the Interim Constitution and discussed dignity, life and cruel punishment."},
    {type:"Constitutional law",title:"Minister of Health v Treatment Action Campaign (No 2)",citation:"Constitutional Court · 2002",description:"Considered the state's constitutional duties concerning access to health care and reasonable measures to address HIV transmission from mothers to children."},
    {type:"Administrative law",title:"President of the Republic of South Africa v SARFU",citation:"Constitutional Court · 1999",description:"Discussed the distinction between public power and private conduct, and principles relevant to reviewing exercises of public power."},
    {type:"Labour law",title:"Sidumo v Rustenburg Platinum Mines Ltd",citation:"Constitutional Court · 2007",description:"A leading labour-law judgment on review of arbitration awards and whether a decision is one a reasonable decision-maker could reach."},
    {type:"Environmental law",title:"Fuel Retailers Association of Southern Africa v Director-General: Environmental Management",citation:"Constitutional Court · 2007",description:"Discussed sustainable development and the need to consider socio-economic factors together with environmental impacts in environmental authorisation decisions."},
    {type:"Contract law",title:"Barkhuizen v Napier",citation:"Constitutional Court · 2007",description:"Considered the constitutional approach to contractual time-bar clauses, public policy and the values of fairness and reasonableness."}
  ],
  legislation: [
    {type:"Foundational law",title:"Constitution of the Republic of South Africa, 1996",citation:"Especially sections 2, 9, 10, 33 and 39",description:"The supreme law of South Africa. Inconsistent law or conduct may be invalid, and public power must be exercised consistently with the Constitution."},
    {type:"Labour law",title:"Labour Relations Act 66 of 1995",citation:"Check the current consolidated text",description:"Regulates important aspects of labour relations, including collective bargaining, unfair dismissal and dispute resolution."},
    {type:"Employment law",title:"Basic Conditions of Employment Act 75 of 1997",citation:"Check the current consolidated text",description:"Sets minimum employment conditions, subject to applicable amendments and exceptions."},
    {type:"Environmental law",title:"National Environmental Management Act 107 of 1998",citation:"Includes environmental management principles in section 2",description:"Provides a framework for environmental management and sustainable development in South Africa."},
    {type:"Equality law",title:"Promotion of Equality and Prevention of Unfair Discrimination Act 4 of 2000",citation:"Check the current consolidated text",description:"Provides measures to address unfair discrimination and promote equality."},
    {type:"Privacy law",title:"Protection of Personal Information Act 4 of 2013",citation:"POPIA",description:"Regulates the processing of personal information by public and private bodies, subject to the Act's provisions."}
  ],
  dictionary: [
    {type:"Legal term",title:"Precedent",citation:"Also called stare decisis",description:"A previous court decision that may bind or guide a court when deciding a later case with relevantly similar legal issues."},
    {type:"Legal term",title:"Jurisdiction",citation:"Court authority",description:"The legal power of a court or other body to hear and decide a matter."},
    {type:"Legal term",title:"Burden of proof",citation:"Depends on the type of case",description:"The obligation to prove a claim or allegation to the standard required by law."},
    {type:"Legal term",title:"Natural justice",citation:"Procedural fairness",description:"Fair decision-making principles that commonly include an opportunity to be heard and an unbiased decision-maker."},
    {type:"Legal term",title:"Sustainable development",citation:"Environmental law",description:"Development that considers environmental protection, social needs and economic wellbeing, including the needs of future generations."},
    {type:"Legal term",title:"Delict",citation:"Civil liability",description:"A wrongful and culpable act or omission that causes legally recognised harm and may give rise to a duty to compensate."}
  ]
};

const quizQuestions = [
  {q:"Which law is the supreme law of South Africa?",options:["A municipal by-law","The Constitution","A company policy","A contract"],answer:1,why:"Section 2 of the Constitution states that the Constitution is the supreme law of the Republic."},
  {q:"What is the main purpose of precedent?",options:["To replace every statute","To guide or bind courts through earlier decisions","To create private contracts","To set tax rates"],answer:1,why:"Precedent helps ensure consistency. Whether a decision is binding depends on the court hierarchy and the legal issue."},
  {q:"Which Act is a key statute governing labour relations in South Africa?",options:["Labour Relations Act 66 of 1995","Companies Act 61 of 1973 only","Road Traffic Act only","Patents Act only"],answer:0,why:"The Labour Relations Act 66 of 1995 is a central statute governing labour relations."},
  {q:"What does procedural fairness generally require?",options:["A decision with no reasons in every case","An opportunity to be heard where fairness requires it","Automatic success for the applicant","A decision made before investigation"],answer:1,why:"Procedural fairness commonly includes giving affected people a fair opportunity to present their side, depending on the context."},
  {q:"What is one aim of sustainable development?",options:["Ignoring environmental effects","Considering environmental, social and economic needs together","Preventing all economic activity","Removing all public participation"],answer:1,why:"Sustainable development seeks to consider environmental protection, economic development and social wellbeing together."}
];

const flashcards = [
  ["What is the Constitution?","The supreme law of South Africa."],
  ["What is precedent?","A previous judicial decision that can guide or bind a court in a later case."],
  ["What is jurisdiction?","The legal authority of a court or body to hear and decide a matter."],
  ["What is procedural fairness?","Fair decision-making, often including an opportunity to be heard and an unbiased decision-maker."],
  ["What is sustainable development?","Development that considers environmental, social and economic needs, including the needs of future generations."]
];

let activeModule = null;
let activeTab = "cases";
let flashIndex = 0;
let flashRevealed = false;
let quizIndex = 0;
let quizScore = 0;
let quizAnswers = [];

function loadState(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {started:[],tasks:[]}; }
  catch { return {started:[],tasks:[]}; }
}
let state = loadState();
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

const moduleGrid = document.getElementById("moduleGrid");
const moduleSearch = document.getElementById("moduleSearch");
const categoryFilter = document.getElementById("categoryFilter");
const moduleDialog = document.getElementById("moduleDialog");
const libraryGrid = document.getElementById("libraryGrid");
const librarySearch = document.getElementById("librarySearch");

categories.forEach(c => { const o=document.createElement("option"); o.value=c; o.textContent=c; categoryFilter.append(o); });

function renderModules(){
  const term = moduleSearch.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const filtered = modules.filter(m => (category==="all" || m.category===category) && `${m.name} ${m.description} ${m.category}`.toLowerCase().includes(term));
  moduleGrid.innerHTML = "";
  if(!filtered.length){ moduleGrid.innerHTML='<p class="muted">No modules match your search.</p>'; return; }
  filtered.forEach(m => {
    const started = state.started.includes(m.id);
    const card = document.createElement("article");
    card.className = "module-card";
    card.innerHTML = `<div class="module-card-top"><span class="module-number">MODULE ${String(m.id).padStart(2,"0")}</span><span class="module-category">${escapeHtml(m.category)}</span></div><h3>${escapeHtml(m.name)}</h3><p>${escapeHtml(m.description)}</p><div class="module-card-bottom"><div class="mini-progress"><span style="width:${started?25:0}%"></span></div><small>${started?"Started":"Not started"}</small><button class="module-open" data-module="${m.id}">Open →</button></div>`;
    moduleGrid.append(card);
  });
}
function updateProgress(){
  const count = state.started.length;
  document.getElementById("completedCount").textContent = count;
  document.getElementById("overallProgress").style.width = `${count/30*100}%`;
}
function openModule(id){
  activeModule = modules.find(m=>m.id===id);
  if(!activeModule) return;
  document.getElementById("modalCategory").textContent = activeModule.category.toUpperCase();
  document.getElementById("modalTitle").textContent = activeModule.name;
  document.getElementById("modalDescription").textContent = activeModule.description;
  const topics = document.getElementById("modalTopics"); topics.innerHTML="";
  activeModule.topics.forEach(t=>{const li=document.createElement("li");li.textContent=t;topics.append(li);});
  document.getElementById("moduleStarted").checked = state.started.includes(id);
  moduleDialog.showModal();
}
moduleGrid.addEventListener("click",e=>{const b=e.target.closest("[data-module]");if(b)openModule(Number(b.dataset.module));});
moduleSearch.addEventListener("input",renderModules);
categoryFilter.addEventListener("change",renderModules);
document.getElementById("modalDone").addEventListener("click",()=>{
  if(!activeModule)return;
  const checked=document.getElementById("moduleStarted").checked;
  state.started=state.started.filter(id=>id!==activeModule.id);
  if(checked)state.started.push(activeModule.id);
  saveState();renderModules();updateProgress();moduleDialog.close();
});
document.getElementById("resetProgress").addEventListener("click",()=>{
  if(confirm("Reset all demo module progress and study tasks saved in this browser?")){
    state={started:[],tasks:[]};saveState();renderModules();updateProgress();renderTasks();
  }
});

function renderLibrary(){
  const term=librarySearch.value.trim().toLowerCase();
  const entries=libraryData[activeTab].filter(x=>`${x.title} ${x.type} ${x.citation} ${x.description}`.toLowerCase().includes(term));
  libraryGrid.innerHTML="";
  if(!entries.length){libraryGrid.innerHTML='<p class="muted">No results found.</p>';return;}
  entries.forEach(item=>{
    const card=document.createElement("article");card.className="library-card";
    card.innerHTML=`<span class="library-type">${escapeHtml(item.type)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p><span class="citation">${escapeHtml(item.citation)}</span>`;
    libraryGrid.append(card);
  });
}
document.querySelectorAll(".tab-button").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".tab-button").forEach(b=>{b.classList.toggle("active",b===btn);b.setAttribute("aria-selected",b===btn?"true":"false");});
  activeTab=btn.dataset.tab;renderLibrary();
}));
librarySearch.addEventListener("input",renderLibrary);

function renderFlashcard(){
  const card=flashcards[flashIndex];
  document.getElementById("flashcardCount").textContent=`Card ${flashIndex+1} of ${flashcards.length}`;
  document.getElementById("flashQuestion").textContent=card[0];
  const answer=document.getElementById("flashAnswer");
  answer.textContent=card[1];answer.hidden=!flashRevealed;
  document.querySelector("#flashcard .eyebrow").textContent=flashRevealed?"ANSWER":"TAP TO REVEAL";
  document.getElementById("flipCard").textContent=flashRevealed?"Hide answer":"Reveal answer";
}
function flipFlashcard(){flashRevealed=!flashRevealed;renderFlashcard();}
document.getElementById("flashcard").addEventListener("click",flipFlashcard);
document.getElementById("flashcard").addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();flipFlashcard();}});
document.getElementById("flipCard").addEventListener("click",flipFlashcard);
document.getElementById("nextCard").addEventListener("click",()=>{flashIndex=(flashIndex+1)%flashcards.length;flashRevealed=false;renderFlashcard();});

function renderQuizQuestion(){
  const area=document.getElementById("quizArea");
  if(quizIndex>=quizQuestions.length){
    area.innerHTML=`<div class="status-chip">Quiz completed</div><h3 style="margin-top:15px;font-size:24px">${quizScore} / ${quizQuestions.length}</h3><p>You answered ${quizScore} of ${quizQuestions.length} questions correctly. Review the explanations and try again to practise more.</p><button class="button button-primary" id="restartQuiz">Try again ↻</button>`;
    document.getElementById("restartQuiz").addEventListener("click",startQuiz);return;
  }
  const q=quizQuestions[quizIndex];
  area.innerHTML=`<div class="eyebrow">QUESTION ${quizIndex+1} OF ${quizQuestions.length}</div><p class="quiz-question">${escapeHtml(q.q)}</p><div class="quiz-options">${q.options.map((o,i)=>`<button class="quiz-option" data-answer="${i}">${escapeHtml(o)}</button>`).join("")}</div><div id="quizFeedback"></div><button class="button button-primary" id="quizNext" disabled>${quizIndex===quizQuestions.length-1?"See results":"Next question →"}</button>`;
  let selected=null;
  area.querySelectorAll("[data-answer]").forEach(btn=>btn.addEventListener("click",()=>{
    if(selected!==null)return;
    selected=Number(btn.dataset.answer);
    area.querySelectorAll("[data-answer]").forEach(b=>{b.disabled=true;if(Number(b.dataset.answer)===q.answer)b.classList.add("selected");});
    if(selected===q.answer)quizScore++;
    document.getElementById("quizFeedback").innerHTML=`<p class="quiz-feedback">${selected===q.answer?"Correct! ":"Not quite. "}${escapeHtml(q.why)}</p>`;
    document.getElementById("quizNext").disabled=false;
  }));
  document.getElementById("quizNext").addEventListener("click",()=>{quizIndex++;renderQuizQuestion();});
}
function startQuiz(){quizIndex=0;quizScore=0;renderQuizQuestion();}
document.getElementById("startQuiz").addEventListener("click",startQuiz);

const taskForm=document.getElementById("taskForm");
function renderTasks(){
  const list=document.getElementById("taskList");list.innerHTML="";
  document.getElementById("taskCount").textContent=`${state.tasks.length} task${state.tasks.length===1?"":"s"}`;
  document.getElementById("emptyTasks").hidden=state.tasks.length>0;
  state.tasks.forEach(task=>{
    const li=document.createElement("li");li.className=`task-item ${task.done?"done":""}`;
    li.innerHTML=`<input type="checkbox" aria-label="Mark task complete" ${task.done?"checked":""}><div class="task-content"><strong>${escapeHtml(task.title)}</strong><small>${task.date?`Target: ${escapeHtml(task.date)}`:"No target date"}</small></div><button class="delete-task" aria-label="Delete task">×</button>`;
    li.querySelector("input").addEventListener("change",()=>{task.done=li.querySelector("input").checked;saveState();renderTasks();});
    li.querySelector(".delete-task").addEventListener("click",()=>{state.tasks=state.tasks.filter(t=>t.id!==task.id);saveState();renderTasks();});
    list.append(li);
  });
}
taskForm.addEventListener("submit",e=>{
  e.preventDefault();
  const title=document.getElementById("taskTitle").value.trim();
  if(!title)return;
  state.tasks.push({id:Date.now(),title,date:document.getElementById("taskDate").value,done:false});
  saveState();renderTasks();taskForm.reset();
});

const authDialog=document.getElementById("authDialog");
function openAuth(mode){
  document.getElementById("authTitle").textContent=mode==="login"?"Sign in (demo)":"Create your account (demo)";
  document.getElementById("authName").hidden=mode==="login";
  document.querySelector('label[for="authName"]').hidden=mode==="login";
  document.getElementById("authPassword").autocomplete=mode==="login"?"current-password":"new-password";
  document.getElementById("authMessage").textContent="";
  authDialog.showModal();
}
document.getElementById("openRegister").addEventListener("click",()=>openAuth("register"));
document.getElementById("openLogin").addEventListener("click",()=>openAuth("login"));
document.getElementById("openLoginBottom").addEventListener("click",()=>openAuth("login"));
document.getElementById("authForm").addEventListener("submit",e=>{
  e.preventDefault();
  document.getElementById("authMessage").textContent="Demo only: no account was created and no information was sent or saved. Connect a secure authentication backend before publishing.";
});

function showInfo(type){
  const content=document.getElementById("infoContent");
  if(type==="privacy"){
    content.innerHTML=`<span class="eyebrow">WEBSITE INFORMATION</span><h2>Privacy Policy</h2><p><strong>Last updated:</strong> 16 October 2026</p><p>This is a starter policy for the Diploma in Law Learning Hub demo. The published policy must be reviewed and updated to match the operator's actual practices and applicable law.</p><h3>Information handled by this demo</h3><p>This demo stores module progress and study tasks in your browser's local storage. The sample registration form does not create an account or transmit information to a server. Do not enter real passwords or sensitive personal information into demo forms.</p><h3>External UNISA link</h3><p>The exam practice button opens <a href="${EXAM_URL}" target="_blank" rel="noopener noreferrer">the UNISA examination practice platform</a> in a new tab. That external site has its own terms and privacy practices. This website does not request or collect UNISA passwords.</p><h3>Future student accounts</h3><p>Before adding real accounts, the operator must document the information collected, purposes, lawful basis where required, service providers, retention periods, security controls, user rights, contact details and complaint process. The policy should be reviewed against South Africa's Protection of Personal Information Act 4 of 2013 (POPIA), where applicable.</p><h3>Cookies and local storage</h3><p>This demo uses browser local storage to remember study progress and planner tasks on this device. Clearing browser data may remove this information. It does not currently use an analytics service.</p><h3>Contact</h3><p>Website operator: [Insert operator name]<br>Email: [Insert privacy contact email]<br>Address, if applicable: [Insert address]</p>`;
  } else {
    content.innerHTML=`<span class="eyebrow">WEBSITE INFORMATION</span><h2>Terms of Use</h2><p>By using this website, you agree to use it lawfully and respectfully.</p><h3>Educational information only</h3><p>This platform provides general educational support, not legal advice. Legal summaries may be incomplete or become outdated. Verify legislation, judgments and legal requirements against authoritative sources and your prescribed course materials.</p><h3>Independent platform</h3><p>This website is not an official UNISA website and does not guarantee examination results or access to UNISA systems. External websites are governed by their own terms.</p><h3>Copyright and content</h3><p>Only upload, publish or share materials you own or are authorised to use. Respect copyright and applicable academic integrity rules. Practice questions on this demo are learning examples, not official examination papers.</p><h3>Availability and changes</h3><p>The website is provided for educational use and may be changed or unavailable from time to time. The operator should add accurate business/contact details and obtain appropriate legal review before public launch.</p><h3>Contact</h3><p>Website operator: [Insert operator name]<br>Email: [Insert contact email]</p>`;
  }
  document.getElementById("infoDialog").showModal();
}
document.querySelectorAll('a[href="#privacy"]').forEach(a=>a.addEventListener("click",e=>{e.preventDefault();showInfo("privacy");}));
document.querySelectorAll('a[href="#terms"]').forEach(a=>a.addEventListener("click",e=>{e.preventDefault();showInfo("terms");}));
document.querySelectorAll('a[href="#contact"]').forEach(a=>a.addEventListener("click",e=>{e.preventDefault();showInfo("privacy");}));

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
const menuToggle=document.getElementById("menuToggle");
const mainNav=document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>{const open=mainNav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});
mainNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mainNav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();

renderModules();updateProgress();renderLibrary();renderFlashcard();renderTasks();
