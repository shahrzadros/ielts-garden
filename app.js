const el = id => document.getElementById(id);
const fa = value => Number(value).toLocaleString("fa-IR");
const storageKey = "ielts-garden-v1";
let saved;
try { saved = JSON.parse(localStorage.getItem(storageKey)) || {}; } catch { saved = {}; }
const state = { week:0, day:0, blooms:{}, drafts:{}, journal:{}, ...saved };
let active = null;
let timer;
function save(){try{localStorage.setItem(storageKey,JSON.stringify(state));}catch{}}
const key = (day, skill) => [state.week,day,skill].join("-");
const dayTotal = day => skills.filter((_,skill)=>state.blooms[key(day,skill)]).length;
function renderPlan(){
  el("weeks").innerHTML = themes.map((_,i)=>'<button data-week="'+i+'" aria-pressed="'+(state.week===i)+'">'+fa(i+1)+'</button>').join("");
  el("days").innerHTML = Array.from({length:7},(_,i)=>'<button data-day="'+i+'" aria-pressed="'+(state.day===i)+'">روز '+fa(i+1)+'</button>').join("");
  el("goal").textContent=themes[state.week][0];
  el("duration").textContent=state.day===6?"روز سبک · حدود ۲ ساعت":"برنامه‌ی امروز · حدود ۴ ساعت";
  el("tasks").innerHTML=skills.map((skill,i)=>{
    const planted=!!state.blooms[key(state.day,i)];
    return '<div class="task"><div><button data-skill="'+i+'"><strong class="en">'+skill+'</strong>'+focus[i][state.day]+'</button> <span class="small">'+fa(state.day===6?30:minutes[i])+' دقیقه</span></div><button class="plant" data-plant="'+i+'" aria-pressed="'+planted+'" aria-label="'+(planted?'بازگرداندن به جوانه':'کامل کردن تمرین')+' '+skill+'">'+gardenIcon(planted?'bloom':'sprout')+'</button></div>';
  }).join("");
  const total=Object.values(state.blooms).filter(Boolean).length;
  el("progress").textContent=fa(total)+" از "+fa(280)+" تمرین کامل شده";
  document.querySelector(".bar").setAttribute("aria-valuenow",total);
  document.querySelector(".bar i").style.width=(total/280*100)+"%";
  el("weekProgress").textContent="هفته‌ی "+fa(state.week+1)+" · "+fa(Array.from({length:7},(_,i)=>dayTotal(i)).reduce((a,b)=>a+b,0))+" از "+fa(28)+" تمرین";
  el("plot").innerHTML=Array.from({length:7},(_,i)=>'<span title="روز '+fa(i+1)+'">'+(dayTotal(i)===4?gardenIcon('bloom'):dayTotal(i)?gardenIcon('sprout'):'·')+'</span>').join("");
  const happy=dayTotal(state.day)===4;
  el("cheer").innerHTML=gardenIcon("cat")+(happy?"گربه از خوشحالی می‌پرد! تمرین‌های امروزت کامل شد.":""+fa(dayTotal(state.day))+" از ۴ تمرین امروز شکوفه داده.");
  el("art").classList.toggle("happy",happy);
  el("routine").textContent=state.day===6?"برای هر مهارت ۳۰ دقیقه: ۱۰ دقیقه تلاش، ۱۰ دقیقه بررسی پاسخ و ۱۰ دقیقه مرور خطاهای هفته.":"Reading: ۲۰ دقیقه حل و ۴۵ دقیقه پیدا کردن شاهد و مرور. Listening: ۱۵ دقیقه شنیدن و ۴۰ دقیقه بررسی متن، املا و تکرار. Writing: ۲۰ یا ۴۰ دقیقه نوشتن و باقی زمان برای تحلیل نمونه و بازنویسی. Speaking: سه بار پاسخ بده و هر بار روی یک ضعف کار کن.";
  el("journal").value=state.journal[state.week]??"";
  draw(happy);
}
function choose(field,value){state[field]=value;save();renderPlan();if(active!==null)openExercise(active,false);}
function toggle(skill){const id=key(state.day,skill);state.blooms[id]=!state.blooms[id];save();renderPlan();const button=document.querySelector('[data-plant="'+skill+'"]');button.classList.add("done");button.focus();}
el("weeks").onclick=e=>{const b=e.target.closest("[data-week]");if(b){choose("week",Number(b.dataset.week));document.querySelector('[data-week="'+state.week+'"]').focus();}};
el("days").onclick=e=>{const b=e.target.closest("[data-day]");if(b){choose("day",Number(b.dataset.day));document.querySelector('[data-day="'+state.day+'"]').focus();}};
el("tasks").onclick=e=>{const b=e.target.closest("button");if(!b)return;if(b.dataset.plant!==undefined)toggle(Number(b.dataset.plant));else openExercise(Number(b.dataset.skill));};
el("journal").oninput=()=>{state.journal[state.week]=el("journal").value;save();};
el("start").onclick=()=>el("plan").scrollIntoView({behavior:"smooth"});
function fields(qs){return qs.map(([prompt],i)=>'<label class="q">'+(i+1)+'. '+prompt+'<br><input type="text" data-answer="'+i+'" autocomplete="off"></label>').join("");}
function answers(qs){return '<ol>'+qs.map(([,answer,why])=>'<li><b>'+answer+'</b> — '+why+'</li>').join("")+'</ol>';}
function reading(t,d){
  const pools=[
    [["How many sites or organisations took part?",t[3],"The first sentence gives the sample size."],["How long did the study last?",t[4],"Look for the time expression in the first sentence."],["What outcome did the researchers record?",t[6],"The final sentence specifies the measured outcome."]],
    [["The project lasted exactly one week. (True / False / Not Given)","False","The duration was "+t[4]+"."],["The study reports the researchers’ ages. (True / False / Not Given)","Not Given","The passage gives no ages."],["The researchers recorded "+t[6]+". (True / False / Not Given)","True","The last sentence confirms the outcome."]],
    [["Complete the sentence: Data were collected over ___.",t[4],"Use the duration from the opening sentence."],["How many sites or organisations were involved?",t[3],"The first sentence gives the sample size."],["The researchers collected data on ___.",t[6],"Use the noun phrase for the measured outcome."]]
  ];
  const headings=[
    ["A","Comparing results and defining what was measured","The text compares groups and describes the outcome measured."],
    ["B","A survey of participants’ personal opinions","The passage does not report personal opinions."],
    ["C","A proposal to change national policy","No national proposal is described."]
  ];
  const qs=d===3?[["Choose the best heading. A. "+headings[0][1]+" / B. "+headings[1][1]+" / C. "+headings[2][1],"A",headings[0][2]],pools[0][2]]:pools[d%pools.length];
  return {qs,body:'<h3>'+t[1]+'</h3><div class="passage">'+t[2]+'</div><p>Use the passage as evidence. For short answers, use words from the text or its title.</p>'+fields(qs),model:answers(qs)};
}
function listening(t,d){
  const [oldDay,newDay,oldN,newN,oldDoor,newDoor]=listeningDetails[d];
  const venue=venues[(d+state.week)%venues.length];
  const script="Hello. Here is an update on the workshop at "+venue+". We originally planned to meet on "+oldDay+", but the session has moved to "+newDay+". The website used to say "+oldN+" pounds. The new fee is "+newN+" pounds, including materials. Please avoid the "+oldDoor+" and use the "+newDoor+" instead. We look forward to seeing you.";
  const qs=[["Which day is the workshop now?",newDay,"The speaker corrects the original day, "+oldDay+"."],["What is the new fee in pounds?",newN,"The updated amount includes materials."],["Which entrance should visitors use?",newDoor,"The speaker gives the final direction after ‘avoid’." ]];
  return {qs,script,body:'<h3>Workshop update · '+venue+'</h3><p>Listen once and note the final details. The earlier details are distractors.</p><button id="play">▶ Play audio</button> <button id="stop">Stop</button><p id="audioStatus" role="status"></p>'+fields(qs),model:answers(qs)+'<p class="passage">'+script+'</p>'};
}
function writing(t,d){
  if(d===4||d===5){
    const position=["Support funding when neighbourhoods can maintain the space.","Keep printed collections alongside digital access.","Require parts for a reasonable period, with safety exceptions.","Use both policies where local needs justify them.","Offer free general entry with paid special exhibitions.","Prioritise cycling on suitable routes and retain other options.","Give pupils portion choices and measure the leftovers.","Permit limited visits where paths and rules protect habitats."][state.week];
    return {body:'<h3>Writing Task 2</h3><p>'+t[8]+'</p><p>Spend 40 minutes. Write at least 250 words. Give a clear position and develop it with specific examples.</p>',model:'<h3>Model plan</h3><p><b>Position</b> '+position+'</p><p><b>Body 1</b> Explain who would benefit and how. Give a concrete example related to '+t[7]+'.</p><p><b>Body 2</b> Identify a practical cost or limitation and explain how the policy could address it.</p><p><b>Final check</b> Underline your position and the sentence that explains each example. Check that both address the question.</p>'};
  }
  const offset=state.week*3+d*2, year=2010+state.week;
  const topic=topics[(d+state.week)%topics.length];
  const values=datasets.map(r=>r.map(n=>n+offset));
  const [north,central,south]=values;
  const table='<table><thead><tr><th>District</th><th>'+year+'</th><th>'+(year+5)+'</th><th>'+(year+10)+'</th></tr></thead><tbody>'+rows.map((row,i)=>'<tr><th>'+row+'</th>'+values[i].map(v=>'<td>'+v+'</td>').join("")+'</tr>').join("")+'</tbody></table>';
  const examples=[
    'The figure for the North rose from '+north[0]+',000 to '+north[2]+',000 over the period.',
    'While the North saw a rise of 38,000, the figure for the Central district fell by 15,000.',
    'By '+(year+10)+', the North had overtaken the Central district, while the South remained at '+south[2]+',000.'
  ];
  const report='The table compares '+topic.toLowerCase()+' in the North, Central and South districts over a ten-year period, with figures reported in thousands. Overall, the North recorded a substantial increase and finished as the leading district. The Central district moved in the opposite direction, while the figure for the South changed very little. In '+year+', the Central district recorded '+central[0]+',000, compared with '+north[0]+',000 in the North. Five years later, the two districts were level at '+north[1]+',000. By '+(year+10)+', the North had reached '+north[2]+',000, whereas the Central district had fallen to '+central[2]+',000. The initial gap of 26,000 in favour of the Central district had therefore become a lead of 27,000 for the North. In the South, the figure edged up from '+south[0]+',000 to '+south[1]+',000 at the midpoint and then returned to its starting level. The South had the lowest figure at all three points, and its temporary rise of 1,000 was considerably smaller than the shifts in the other districts.';
  return {body:'<h3>Writing Task 1 · '+topic+'</h3><p>Figures are in thousands.</p>'+table+'<p>'+(d===0?'Write one sentence describing the North.':d===1?'Write a two-sentence overview.':d===2?'Group the districts and write one body paragraph.':'Spend 20 minutes. Write at least 150 words, summarise the main features and make comparisons.')+'</p>',model:'<h3>What to change and why</h3><p>Use <b>from X to Y</b> for endpoints and <b>by X</b> for the size of a change. Use the past simple for these completed periods. Put the main contrasts in the overview and use exact figures as evidence in the body.</p><h3>Three example sentences</h3><ol>'+examples.map(x=>'<li>'+x+'</li>').join("")+'</ol><h3>Model report</h3><p>'+report+'</p>'};
}
function speaking(t,d){
  const questions=[t[9],"How has "+t[7]+" changed in your area?","Why might people disagree about funding "+t[7]+"?","How could local authorities encourage interest in "+t[7]+"?"];
  return {body:'<h3>Speaking · '+(d<4?'Part 2':'Part 3')+'</h3><p>'+questions[d<4?0:(d-3)]+'</p><p>'+(d<4?'Prepare for one minute. Explain what it is, give a specific detail and say why it matters to you. Speak for up to two minutes.':'Give a direct answer, explain your reasoning and add a specific example.')+'</p><button id="timer">Start 2-minute timer</button> <output id="clock" aria-live="off">02:00</output>',model:d<4?'<p>I’d like to talk about '+t[10]+'. To give you a bit of background, '+t[11]+'. What stands out for me is that '+t[12]+'. That’s why it is something I would happily talk about again.</p><p>Build on this opening with one concrete memory and explain what made it significant.</p>':'<p>I think the answer depends on how widely the benefits are shared. For example, if a project related to '+t[7]+' is easy to access, people who would otherwise miss out can take part. However, the cost matters too, especially if the council has several urgent priorities. I would start with a small trial and review how many people actually use it.</p><p>Check that the example addresses the question directly and that you explain the link in your own words.</p>'};
}
function openExercise(skill,scroll=true){
  clearInterval(timer);
  if("speechSynthesis" in window)window.speechSynthesis.cancel();
  active=skill;
  const data=[reading,listening,writing,speaking][skill](themes[state.week],state.day);
  const id=key(state.day,skill);
  const panel=el("exercise");
  panel.hidden=false;
  panel.innerHTML='<h2 tabindex="-1" id="exerciseTitle">'+skills[skill]+' · هفته '+fa(state.week+1)+'، روز '+fa(state.day+1)+'</h2><div class="english" lang="en">'+data.body+(data.qs?'<button id="check">Check answers</button><p id="score" role="status"></p>':'<label>Your '+(skill===2?'draft':'notes or transcript')+'<textarea id="draft" placeholder="Write here…"></textarea></label><p id="words" class="small"></p>')+'<details><summary>'+ (data.qs?'Answer key and explanations':'Model answer and self-review')+'</summary>'+data.model+'</details></div><div class="actions"><button id="finish" class="primary">'+gardenIcon('bloom')+' کامل شد</button><button id="next">تمرین بعدی</button></div>';
  const stored=state.drafts[id];
  if(data.qs){
    const inputs=[...panel.querySelectorAll("[data-answer]")];
    inputs.forEach((input,i)=>input.value=stored?.[i]??"");
    panel.oninput=()=>{state.drafts[id]=inputs.map(input=>input.value);save();};
    const normalize=s=>s.trim().toLowerCase().replace(/[.!?]+$/,"").replace(/\s+/g," ");
    el("check").onclick=()=>{
      let correct=0;
      inputs.forEach((input,i)=>{
        const expected=normalize(data.qs[i][1]);
        const actual=normalize(input.value);
        const equivalent={six:"6",three:"3",eight:"8",four:"4",five:"5",seven:"7",nine:"9"};
        const ok=actual===expected||actual===equivalent[expected];
        if(ok)correct++;
        input.style.borderColor=ok?"#337855":"#a95036";
        input.setAttribute("aria-invalid",String(!ok));
      });
      el("score").textContent=correct+" / "+inputs.length+" correct";
      panel.querySelector("details").open=true;
    };
  } else {
    const draft=el("draft");
    draft.value=typeof stored==="string"?stored:"";
    function count(){el("words").textContent=(draft.value.trim().match(/\S+/g)||[]).length+" words";}
    count();
    panel.oninput=()=>{state.drafts[id]=draft.value;save();count();};
  }
  if(data.script){
    el("play").onclick=()=>{
      if(!("speechSynthesis" in window)){el("audioStatus").textContent="Audio playback is unavailable in this browser. The transcript is in the answer key.";return;}
      window.speechSynthesis.cancel();
      const utterance=new SpeechSynthesisUtterance(data.script);
      utterance.lang="en-GB";utterance.rate=.91;
      const status=el("audioStatus");
      utterance.onstart=()=>status.textContent="Playing";
      utterance.onend=()=>status.textContent="Playback finished";
      utterance.onerror=()=>status.textContent="Playback stopped or unavailable. The transcript is in the answer key.";
      window.speechSynthesis.speak(utterance);
    };
    el("stop").onclick=()=>{if("speechSynthesis" in window)window.speechSynthesis.cancel();el("audioStatus").textContent="Playback stopped";};
  }
  if(skill===3)el("timer").onclick=()=>{
    clearInterval(timer);
    const end=Date.now()+120000;
    el("clock").textContent="02:00";
    timer=setInterval(()=>{
      const left=Math.max(0,Math.ceil((end-Date.now())/1000));
      el("clock").textContent=String(Math.floor(left/60)).padStart(2,"0")+":"+String(left%60).padStart(2,"0");
      if(!left)clearInterval(timer);
    },250);
  };
  el("finish").onclick=()=>{if(!state.blooms[id])toggle(skill);el("finish").innerHTML=gardenIcon("bloom")+" ثبت شد";el("finish").focus();};
  el("next").disabled=skill===3&&state.week===7&&state.day===6;
  el("next").onclick=()=>{
    if(skill<3){openExercise(skill+1);return;}
    if(state.day<6)state.day++;else if(state.week<7){state.week++;state.day=0;}else return;
    save();renderPlan();openExercise(0);
  };
  if(scroll){el("exerciseTitle").focus({preventScroll:true});panel.scrollIntoView({behavior:"smooth",block:"start"});}
}
renderPlan();
