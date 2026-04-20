const questions = [
  {
    id: 1,
    text: "周末你更想怎么度过？",
    axis: ["E", "I"],
    options: ["和很多朋友聚会", "安静地独处或和少数熟人相处"],
  },
  {
    id: 2,
    text: "在团队讨论中你通常会？",
    axis: ["E", "I"],
    options: ["主动发言，边说边想", "先观察思考，再选择发言"],
  },
  {
    id: 3,
    text: "认识新朋友时你更倾向于？",
    axis: ["E", "I"],
    options: ["快速打开话题并互动", "慢慢熟悉后再深入交流"],
  },
  {
    id: 4,
    text: "你获取信息时更信任？",
    axis: ["S", "N"],
    options: ["具体事实与现实经验", "整体趋势与未来可能性"],
  },
  {
    id: 5,
    text: "做项目时你更关注？",
    axis: ["S", "N"],
    options: ["步骤细节是否落实", "想法框架是否有创新"],
  },
  {
    id: 6,
    text: "你更喜欢哪类表达方式？",
    axis: ["S", "N"],
    options: ["清晰、具体、可执行", "抽象、概念化、启发性"],
  },
  {
    id: 7,
    text: "做决策时你优先考虑？",
    axis: ["T", "F"],
    options: ["逻辑与公平标准", "关系与他人感受"],
  },
  {
    id: 8,
    text: "当朋友遇到困难时你会先？",
    axis: ["T", "F"],
    options: ["分析问题并给建议", "倾听情绪并表达共情"],
  },
  {
    id: 9,
    text: "你更看重一件事的？",
    axis: ["T", "F"],
    options: ["是否合理、有效", "是否有温度、合人心"],
  },
  {
    id: 10,
    text: "旅行前你通常会？",
    axis: ["J", "P"],
    options: ["提前做好详细计划", "只定大方向，随性调整"],
  },
  {
    id: 11,
    text: "面对截止日期你更常见状态是？",
    axis: ["J", "P"],
    options: ["提前分配任务稳步推进", "临近截止时高效冲刺"],
  },
  {
    id: 12,
    text: "你的桌面/文件通常？",
    axis: ["J", "P"],
    options: ["分类清晰，井然有序", "灵活摆放，自己找得到"],
  },
  {
    id: 13,
    text: "进入陌生场合时你更可能？",
    axis: ["E", "I"],
    options: ["主动和人打招呼", "先熟悉环境再行动"],
  },
  {
    id: 14,
    text: "学习新知识时你更喜欢？",
    axis: ["S", "N"],
    options: ["先掌握具体案例", "先理解整体原理"],
  },
  {
    id: 15,
    text: "面对争论你更倾向？",
    axis: ["T", "F"],
    options: ["坚持观点并辩证", "寻找双方都能接受的平衡"],
  },
  {
    id: 16,
    text: "工作节奏上你偏向？",
    axis: ["J", "P"],
    options: ["按计划一步步完成", "根据状态灵活切换"],
  },
];

const typeDescriptions = {
  INTJ: "战略型思考者，独立、理性，擅长长期规划与系统化改进。",
  INTP: "逻辑型探索者，喜欢分析复杂问题，注重原理与可能性。",
  ENTJ: "天生组织者，目标明确、执行力强，善于推动团队前进。",
  ENTP: "创意辩论家，点子多、反应快，擅长在变化中发现机会。",
  INFJ: "洞察型理想主义者，重视意义与价值，关注个人成长与关系质量。",
  INFP: "共情型创作者，重视内心价值与真实表达，富有想象力。",
  ENFJ: "鼓舞型引导者，善于理解他人并凝聚团队，关注共同成长。",
  ENFP: "热情型激励者，开放好奇、富有感染力，喜欢新鲜体验。",
  ISTJ: "务实型执行者，认真可靠，擅长把计划落地并保证质量。",
  ISFJ: "温和型守护者，细致体贴，重视责任与稳定的人际关系。",
  ESTJ: "管理型推动者，重视规则与效率，善于组织资源完成目标。",
  ESFJ: "协作型支持者，关注团队氛围与成员需求，乐于提供帮助。",
  ISTP: "冷静型实践者，擅长动手解决问题，临场应变能力强。",
  ISFP: "体验型艺术家，审美敏锐、随和真诚，重视当下感受。",
  ESTP: "行动型挑战者，果断直接，喜欢快速试错和现实反馈。",
  ESFP: "活力型表演者，外向乐观，善于让环境变得轻松有趣。",
};

const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

function renderQuiz() {
  quizEl.innerHTML = questions
    .map(
      (q) => `
        <article class="question-card">
          <h3 class="question-title">${q.id}. ${q.text}</h3>
          <div class="options">
            <label class="option">
              <input type="radio" name="q-${q.id}" value="0" />
              <span>${q.options[0]}</span>
            </label>
            <label class="option">
              <input type="radio" name="q-${q.id}" value="1" />
              <span>${q.options[1]}</span>
            </label>
          </div>
        </article>
      `
    )
    .join("");
}

function calculateType() {
  const score = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  for (const q of questions) {
    const selected = document.querySelector(`input[name="q-${q.id}"]:checked`);
    if (!selected) {
      return { error: `请先完成第 ${q.id} 题。` };
    }

    const optionIndex = Number(selected.value);
    const chosenType = q.axis[optionIndex];
    score[chosenType] += 1;
  }

  const resultType = [
    score.E >= score.I ? "E" : "I",
    score.S >= score.N ? "S" : "N",
    score.T >= score.F ? "T" : "F",
    score.J >= score.P ? "J" : "P",
  ].join("");

  return { resultType, score };
}

function showResult() {
  const { error, resultType, score } = calculateType();
  if (error) {
    resultEl.classList.remove("hidden");
    resultEl.innerHTML = `<h2>作答未完成</h2><p>${error}</p>`;
    return;
  }

  resultEl.classList.remove("hidden");
  resultEl.innerHTML = `
    <h2>你的 MBTI 类型是：${resultType}</h2>
    <p>${typeDescriptions[resultType]}</p>
    <p><strong>维度得分：</strong> E(${score.E}) / I(${score.I})，S(${score.S}) / N(${score.N})，T(${score.T}) / F(${score.F})，J(${score.J}) / P(${score.P})</p>
    <p>提示：该测试仅供娱乐和自我探索参考，不作为专业心理评估依据。</p>
  `;
}

function resetQuiz() {
  const selectedRadios = document.querySelectorAll('input[type="radio"]:checked');
  selectedRadios.forEach((radio) => {
    radio.checked = false;
  });
  resultEl.classList.add("hidden");
  resultEl.innerHTML = "";
}

submitBtn.addEventListener("click", showResult);
resetBtn.addEventListener("click", resetQuiz);

renderQuiz();
