/* Original practice for learners working from Band 7 towards Band 8. */
const advancedReading = [
  {
    title: "When shade is not enough",
    passage: [
      "A. City authorities often count newly planted trees as evidence of progress towards cooler streets. This measure is easy to publish, but it says little about how much shade pedestrians actually receive. A row of young trees may eventually cool a pavement while leaving it exposed through several summers.",
      "B. A recent field study compared streets with mature trees to streets with fabric canopies. Both interventions reduced midday surface temperatures. After sunset, however, the differences largely disappeared. The team stressed that surface readings could not establish how comfortable pedestrians felt, since comfort also depends on wind and humidity.",
      "C. The authors recommended mapping routes people already walk rather than distributing shade evenly. In their view, a short shaded stretch linking a bus stop to a clinic may benefit more pedestrians than a larger shaded area with little foot traffic. They did not estimate the cost of either strategy."
    ],
    qs: [
      ["Which paragraph challenges a convenient indicator of success? Write A, B or C.", "A", "Tree counts are easy to publish, but they do not show actual shade."],
      ["Which paragraph questions whether a measurement captures a human experience? Write A, B or C.", "B", "Surface temperature alone cannot establish pedestrian comfort."],
      ["The cooling differences were still substantial after sunset. TRUE / FALSE / NOT GIVEN", "False", "Paragraph B says the differences largely disappeared after sunset."],
      ["The suggested route-based strategy was cheaper than even distribution. TRUE / FALSE / NOT GIVEN", "Not Given", "Paragraph C explicitly says the costs were not estimated."],
      ["Besides wind, what factor can affect pedestrian comfort? ONE WORD.", "humidity", "Paragraph B names wind and humidity."]
    ]
  },
  {
    title: "Repairing the record",
    passage: [
      "A. Museums once treated gaps in a collection’s catalogue mainly as administrative problems. A missing date could be estimated, and a damaged label replaced. More recently, some curators have argued that uncertainty should remain visible, particularly when the history of an object depends on accounts recorded long after it was acquired.",
      "B. One museum tested this approach with a set of textiles. Visitors saw either a conventional label giving a single place of origin or a revised label outlining two plausible origins. The revised labels prompted more questions at guided tours. However, because the tours took place at different times, the museum could not isolate the effect of the labels from differences between visitor groups.",
      "C. The project also exposed a practical difficulty. The catalogue software allowed several notes about an object but required one place name in its searchable origin field. The museum therefore kept a provisional location in the field and marked competing accounts in the public display. This compromise improved transparency without requiring an immediate rebuild of the catalogue."
    ],
    qs: [
      ["Why were the tour results inconclusive? A. The labels were unreadable. B. Visitor groups may have differed. C. Neither label gave an origin.", "B", "Tour times differed, so the effect of the labels could not be isolated."],
      ["Which paragraph describes a technical constraint? Write A, B or C.", "C", "The searchable field accepted only one place name."],
      ["The revised labels generated more questions during guided tours. TRUE / FALSE / NOT GIVEN", "True", "Paragraph B directly reports more questions."],
      ["The museum completely replaced its catalogue software. TRUE / FALSE / NOT GIVEN", "False", "Paragraph C says it used a compromise without an immediate rebuild."],
      ["What kind of location did the museum retain in the searchable field? ONE WORD.", "provisional", "Paragraph C describes the location as provisional."]
    ]
  },
  {
    title: "The limits of citizen science",
    passage: [
      "A. A volunteer bird survey recorded more sightings after its reporting app began sending reminders. At first, the increase appeared to suggest that local bird populations had recovered. Yet app records showed that participants were simply submitting reports more often. A rise in reports can therefore reflect an increase in observer effort even when the underlying population has not changed.",
      "B. To reduce this ambiguity, researchers introduced fixed observation periods and asked participants to submit a checklist even when they saw no birds. Recording those unsuccessful visits gave the team information about where and when people had looked. The new procedure produced fewer records overall, but it made comparisons between weeks more useful.",
      "C. The authors argue that volunteer surveys and professional surveys can complement each other. Professional surveys can provide a consistent benchmark, while volunteers can cover a much wider area. Combining the two approaches may be especially valuable in regions where formal surveys are infrequent."
    ],
    qs: [
      ["What best describes paragraph A? A. An apparent trend with a competing explanation. B. A failed conservation programme. C. A comparison between species.", "A", "More reports could reflect more observation rather than a recovery."],
      ["Which paragraph explains why zero observations matter? Write A, B or C.", "B", "Unsuccessful visits show where and when people actually looked."],
      ["After the procedure changed, the total number of records rose. TRUE / FALSE / NOT GIVEN", "False", "Paragraph B reports fewer records overall."],
      ["According to the authors, volunteers can survey a larger area. YES / NO / NOT GIVEN", "Yes", "Paragraph C attributes wider geographic coverage to volunteers."],
      ["Participants submitted a ___ even when no birds were seen. ONE WORD.", "checklist", "This was required even after an unsuccessful visit."]
    ]
  },
  {
    title: "Paying to prevent food waste",
    passage: [
      "A. Some towns charge households for rubbish according to the weight they put out for collection. Advocates say the charge makes waste visible in household budgets, encouraging residents to plan purchases and use leftovers. A fall in measured rubbish, however, cannot by itself establish that residents bought less food or threw away fewer edible items.",
      "B. In one trial, paid collections fell, but deliveries to community composting sites rose. An independent audit found that the fall in edible food waste was smaller than the fall in total rubbish. The evidence suggests that some material moved from one disposal route to another. This transfer can still have environmental benefits, but it makes the reduction in food waste harder to calculate.",
      "C. The evaluators proposed collecting data from several disposal routes before expanding the scheme. They also recommended monitoring outcomes over a full year, since household purchasing patterns change during holidays. The report did not say whether the scheme would raise enough revenue to pay for itself."
    ],
    qs: [
      ["Which paragraph distinguishes waste prevention from a change in how waste is handled? Write A, B or C.", "B", "It contrasts a smaller fall in edible waste with a shift to composting."],
      ["Which paragraph explains why a short monitoring period could mislead? Write A, B or C.", "C", "Holiday purchasing patterns may make a short period unrepresentative."],
      ["Paid collections and deliveries to composting sites both fell. TRUE / FALSE / NOT GIVEN", "False", "Composting-site deliveries rose."],
      ["The evaluators predicted the scheme would cover its own costs. TRUE / FALSE / NOT GIVEN", "Not Given", "The report did not address whether revenue would cover costs."],
      ["What type of independent review examined the change in edible waste? ONE WORD.", "audit", "Paragraph B attributes that finding to an independent audit."]
    ]
  }
];

const advancedListening = [
  {
    title: "Part 3 · Revising a field study",
    script: "Maya: I thought we were comparing the two parks by counting everyone who entered. Ben: That was the plan. Our supervisor said those numbers would tell us very little unless we knew why people were there. Maya: So we are still counting visitors, but the main comparison will be the proportion who stop and use the seating. Ben: Right. The morning slot was my first choice, because it would leave the afternoon free. But that would miss people taking their lunch break. Let us observe from noon to two at both sites. Maya: What about the questionnaire? We had planned to ask how long people stayed. Ben: Keep that, but remove the question about home addresses. We only need the postcode. Maya: And for the pilot, should we invite a whole class? Ben: No, five volunteers are enough to find wording problems. We can recruit a bigger group when the questions are ready.",
    qs: [
      ["What is the main comparison? A. Total entries. B. The share of visitors using seating. C. Length of visits.", "B", "Maya explicitly distinguishes total counts from the main comparison."],
      ["When will observations begin? ONE WORD.", "noon", "The final slot starts at noon, after they reject the morning."],
      ["What location detail will the questionnaire retain? ONE WORD.", "postcode", "They remove home addresses and retain the postcode."],
      ["How many volunteers will take part in the pilot? ONE NUMBER.", "5", "Ben says five volunteers are sufficient."],
      ["What is the pilot designed to detect? NO MORE THAN TWO WORDS.", "wording problems", "The small pilot tests how questions are phrased."]
    ]
  },
  {
    title: "Part 4 · Heat and building design",
    script: "Lecturer: The assumption that a bright roof will always make a building cooler is appealing, but the effect depends on the construction beneath it. In our first trial, the surface of a white roof was much cooler than the dark one at midday. Inside, however, the temperature changed very little, because both buildings had thick insulation. We therefore added a second measurement: electricity consumption. We expected the most noticeable change in the afternoon, but it was actually in the early evening, when the cooling equipment had usually been working hardest. The next phase involves schools rather than offices. We chose schools because occupancy is comparatively predictable. Another important change is that the team will measure comfort directly. A questionnaire will ask pupils about perceived warmth, while a sensor will still record the air temperature. Those two readings are related, but they are not interchangeable.",
    qs: [
      ["What limited the difference in indoor temperature? NO MORE THAN TWO WORDS.", "thick insulation", "Both buildings had thick insulation despite different surface readings."],
      ["What additional measure did the team introduce? NO MORE THAN TWO WORDS.", "electricity consumption", "The speaker names this as the second measurement."],
      ["When was the most noticeable change? A. Midday. B. Afternoon. C. Early evening.", "C", "Afternoon was the expectation; early evening was the observed result."],
      ["Why were schools selected? A. Predictable occupancy. B. New equipment. C. Lower costs.", "A", "The lecturer says school occupancy is relatively predictable."],
      ["How will perceived warmth be recorded? ONE WORD.", "questionnaire", "Pupils report perceived warmth through a questionnaire."]
    ]
  },
  {
    title: "Part 3 · Interpreting a survey",
    script: "Amir: Our figures seem to show residents prefer the online consultation. Ella: Only if you treat the people who replied as representative. We put the invitation on the council website, so we may have reached people who already use online services. Amir: Good point. We were going to send another link, but that would repeat the same problem. What if we hand out paper forms at the market? Ella: That would help, although the library would be better. It stays open late twice a week, so we could reach people who work during the day. Amir: We should keep the survey short. The tutor suggested removing age, but I think it is important for our comparison. Ella: Agreed. We could remove occupation instead. And in the presentation we should describe the two groups separately before pooling the results. Amir: Let us show the response rate for each method too, so the audience can judge how much weight to give the findings.",
    qs: [
      ["What concerns Ella about the original responses? A. The sample may be biased. B. Some questions were skipped. C. Answers were collected too late.", "A", "Inviting people via the website may favour existing online users."],
      ["Where will they distribute paper forms? ONE WORD.", "library", "The market is proposed, but they choose the library."],
      ["Which personal detail will they remove? ONE WORD.", "occupation", "They retain age and agree to remove occupation."],
      ["How will they present the two groups first? ONE WORD.", "separately", "Ella wants separate descriptions before pooling."],
      ["What will they report for each method? NO MORE THAN TWO WORDS.", "response rate", "Amir adds this so listeners can interpret the findings."]
    ]
  },
  {
    title: "Part 4 · Restoring a wetland",
    script: "Lecturer: An early proposal called for digging a deep channel through the reserve. That option was abandoned after hydrologists showed it would drain the shallow pools used by breeding birds. Instead, staff installed adjustable gates on two existing channels. During the first winter, the water level rose as intended. In spring, however, the rise continued for longer than planned because the outlet was partly obstructed by reeds. The team originally intended to clear the reeds entirely. It ultimately cut a narrow strip, leaving enough cover for wildlife. The success of the scheme will be judged through two indicators. The first is the length of time the pools hold water, and the second is the number of breeding pairs. Visitor counts are also recorded, but only to plan the maintenance of paths. In the next season the team will add an automatic gauge to detect changes overnight, when manual readings are impractical.",
    qs: [
      ["What replaced the plan for a deep channel? NO MORE THAN TWO WORDS.", "adjustable gates", "The gates regulate two existing channels."],
      ["What partly blocked the outlet? ONE WORD.", "reeds", "Reeds prolonged the rise in spring water levels."],
      ["How much vegetation was cut? A. All reeds. B. A narrow strip. C. Two entire channels.", "B", "Complete removal was the original idea; a strip was the final decision."],
      ["Which is a success indicator? A. Visitor counts. B. Number of paths. C. Number of breeding pairs.", "C", "Visitor counts guide maintenance; breeding pairs assess the scheme."],
      ["What will detect overnight changes? NO MORE THAN TWO WORDS.", "automatic gauge", "The gauge replaces impractical manual overnight readings."]
    ]
  }
];

const weekSkills = [
  ["Find evidence and identify paraphrases.", "Separate suggestions from final decisions."],
  ["Distinguish claims from what the text establishes.", "Track corrections and rejected alternatives."],
  ["Match information by paragraph purpose.", "Listen for contrasts and reasons."],
  ["Check qualifying words and limits of evidence.", "Track the speaker’s sequence and final outcome."],
  ["Review your evidence before checking the key.", "Explain why each distractor is wrong."],
  ["Use a 10-minute limit and record errors.", "Play once and check spelling after listening."],
  ["Finish before opening the answer key.", "Review the transcript only after submitting."],
  ["Record the error type and redo missed questions.", "Repeat missed sections and identify the cue phrase."]
];

function advancedSet(sets, day) {
  return sets[(state.week + day) % sets.length];
}

reading = function (_, day) {
  const set = advancedSet(advancedReading, day);
  const passage = set.passage.map(paragraph => "<p>"+paragraph+"</p>").join("");
  return {
    qs: set.qs,
    body: '<h3>'+set.title+'</h3><p><strong>Band 7 → 8 · Advanced Reading</strong> · Suggested time: 10 minutes.</p><p>'+weekSkills[state.week][0]+'</p><div class="passage">'+passage+'</div>'+fields(set.qs),
    model: answers(set.qs)
  };
};

listening = function (_, day) {
  const set = advancedSet(advancedListening, day);
  return {
    qs: set.qs,
    script: set.script,
    body: '<h3>'+set.title+'</h3><p><strong>Band 7 → 8 · Advanced Listening</strong></p><p>'+weekSkills[state.week][1]+' Read the questions before playing.</p><button id="play">▶ Play audio</button> <button id="stop">Stop</button><p id="audioStatus" role="status"></p>'+fields(set.qs),
    model: answers(set.qs)+'<h4>Transcript</h4><p class="passage">'+set.script+'</p>'
  };
};

// Move legacy objective answers out of the active inputs while retaining progress.
if (!state.advancedBand7) {
  for (const [id, draft] of Object.entries(state.drafts)) {
    if (/^[0-7]-[0-6]-[01]$/.test(id)) {
      state.drafts["foundation-"+id] = draft;
      delete state.drafts[id];
    }
  }
  state.advancedBand7 = true;
  save();
}

const levelNote = document.createElement("p");
levelNote.className = "small";
levelNote.textContent = "Reading و Listening · سطح فعلی Band 7، هدف Band 8. چهار مجموعهٔ پیشرفته برای هر مهارت در طول هفته‌ها با تمرکزهای مختلف مرور می‌شوند.";
el("tasks").before(levelNote);
