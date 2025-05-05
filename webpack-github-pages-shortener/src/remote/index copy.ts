
import FingerprintJS from '@fingerprintjs/fingerprintjs';

// import { botd } from '@fpjs-incubator/botd';
// import { load } from '@fpjs-incubator/botd';
import { load } from '@fingerprintjs/botd'

(async () => {
  function getGpuName() {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (gl) {
      // @ts-ignore
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        // @ts-ignore
        return gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      } else {
        console.log("WEBGL_debug_renderer_info not supported");
      }
    }
    return null;
  }

  function getGpuInfo() {
    const gpuName = getGpuName();
    const info = {
      gpuName,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      location: window.location.href,
    };
    return info;
  }

  const info = getGpuInfo();

  const response = await fetch('/gpu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(info),
  });

  // fingerprintjs

  const fp = await FingerprintJS.load();
  const result = await fp.get();

  const visitorId = result.visitorId;
  const confidence = result.confidence;
  
  const fingerprintInfo = {
    // fonts: result.components.fonts,
    // domBlockers: result.components.domBlockers,
    // fontPreferences: result.components.fontPreferences,
    // audio: result.components.audio,
    // screenFrame: result.components.screenFrame,
    // canvas: result.components.canvas,
    osCpu: result.components.osCpu,
    languages: result.components.languages,
    // colorDepth: result.components.colorDepth,
    // deviceMemory: result.components.deviceMemory,
    screenResolution: result.components.screenResolution,
    // hardwareConcurrency: result.components.hardwareConcurrency,
    timezone: result.components.timezone,
    sessionStorage: result.components.sessionStorage,
    localStorage: result.components.localStorage,
    indexedDB: result.components.indexedDB,
    // openDatabase: result.components.openDatabase,
    // cpuClass: result.components.cpuClass,
    platform: result.components.platform,
    // plugins: result.components.plugins,
    touchSupport: result.components.touchSupport,
    vendor: result.components.vendor,
    vendorFlavors: result.components.vendorFlavors,
    cookiesEnabled: result.components.cookiesEnabled,
    // colorGamut: result.components.colorGamut,
    // invertedColors: result.components.invertedColors,
    // forcedColors: result.components.forcedColors,
    // monochrome: result.components.monochrome,
    // contrast: result.components.contrast,
    // reducedMotion: result.components.reducedMotion,
    // reducedTransparency: result.components.reducedTransparency,
    // hdr: result.components.hdr,
    // math: result.components.math,
    pdfViewerEnabled: result.components.pdfViewerEnabled,
    // architecture: result.components.architecture,
    applePay: result.components.applePay,
    // privateClickMeasurement: result.components.privateClickMeasurement,
    // audioBaseLatency: result.components.audioBaseLatency,
    dateTimeLocale: result.components.dateTimeLocale,
    // webGlBasics: result.components.webGlBasics,
    // webGlExtensions: result.components.webGlExtensions,
  };

  const response2 = await fetch('/gpu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      visitorId,
      // confidence,
      fingerprintInfo,
    }),
  });


  // Initialize an agent at application startup, once per page/app.
  const botdPromise = load()

  // Use the agent to detect bots.
  const botdResult = await botdPromise;

  // Check if the user is a bot.
  const botDetectionResult = botdResult.detect();

  const response3 = await fetch('/gpu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      botDetectionResult,
    }),
  });

  // const text = await response.text();
  // console.log('GPU info sent to server');

  // <script type="application/json" id="fp">${JSON.stringify({ newDestinationUrl })}</script>
  // get the new destination URL from the html
  // debugger;
  const json = document.getElementById('fp')?.textContent;
  const newDestinationUrl = json ? JSON.parse(json).newDestinationUrl : null;

  if (newDestinationUrl) {
    window.location.href = newDestinationUrl;
  }

})();

(async () => {
  // show random fun fact about psychology or sociology, based on the user's language, show in English or Japanese
  const funFacts_ja = [
    "ホーソン効果 - 人々は自分が観察されていると知ると、行動が変わる現象。",
    "ピグマリオン効果 - 他人の期待がその人の成績に影響を与えること。",
    "ソーシャル・キャピタル - 人々のネットワークや関係が、個人や社会の福祉にどれほど影響を与えるか。",
    "社会的役割 - 人は状況や環境に応じて異なる役割を演じ、これが社会的期待に基づいています。",
    "文化的相対主義 - 他文化をその文化の基準で評価すべきだという考え方。",
    "役割葛藤 - 異なる社会的役割が競合し、矛盾する期待を生むこと。",
    "都市化 - 都市の拡大が社会構造や生活様式に与える影響。",
    "集団思考 - 集団内での意見一致を重視し、反対意見が抑制される現象。",
    "貧困の文化 - 貧困層には貧困特有の文化や価値観が形成されるという理論。",
    "無視の社会学 - 他者を無視する行動が社会の中でどのように機能するかを研究する分野。",
    "メディアの功罪 - メディアは社会の意識を形成する力があり、特に政治や文化の変化に大きな影響を与える。",
    "集団極性化 - 集団での議論や意見交換が、元々の意見を過激にさせる現象。",
    "社会的障壁 - 社会的な階層や文化的背景が、教育や経済的機会へのアクセスを制限すること。",
    "ミラーニューロン - 他人の行動を観察することで、自分も同じ行動をすることがある神経細胞。共感に関わる。",
    "アノミー - 社会規範が崩壊した状態で、人々が目的を見失う現象。エミール・デュルケームによる理論。",
    "社会的構築主義 - 現実や真実は人々の社会的な合意によって構築されるという考え方。",
    "サンクション（制裁） - 社会的規範を守るための報酬や罰。規範に従うことを促進する。",
    "エスニック・アイデンティティ - 人々が自分の民族的背景に基づいてどのようにアイデンティティを形成するか。",
    "サバティカル効果 - 高度なストレスにさらされる社会集団が、集団内での協力や連帯感を強めることがある現象。",
    "ストリート・エコノミー - 路上での経済活動や非公式な仕事が都市の経済に与える影響。"
  ];
  const funFacts_en = [
    "Hawthorne Effect - People change their behavior when they know they are being observed.",
    "Pygmalion Effect - The expectations of others influence a person's performance.",
    "Social Capital - The networks and relationships people have influence individual and societal well-being.",
    "Social Roles - People play different roles depending on the situation and environment, shaped by societal expectations.",
    "Cultural Relativism - The belief that we should evaluate other cultures based on their own standards.",
    "Role Conflict - When different social roles compete and create conflicting expectations.",
    "Urbanization - The expansion of cities and its effects on social structures and lifestyles.",
    "Groupthink - The tendency in groups to prioritize consensus over critical thinking, suppressing dissenting opinions.",
    "Culture of Poverty - The theory that poverty creates a distinct culture with its own values and behaviors.",
    "Sociology of Ignorance - The study of how ignoring others' actions functions within society.",
    "Media's Role - Media shapes societal consciousness, especially in politics and cultural change.",
    "Group Polarization - The phenomenon where group discussions intensify members' original opinions.",
    "Social Barriers - Social and cultural backgrounds that limit access to education and economic opportunities.",
    "Mirror Neurons - Brain cells that cause us to mimic others' actions, playing a role in empathy.",
    "Anomie - A state where social norms break down, and individuals lose a sense of purpose. A concept by Emile Durkheim.",
    "Social Constructionism - The idea that reality and truth are created through social agreements.",
    "Sanctions - Rewards or punishments used to enforce social norms and encourage compliance.",
    "Ethnic Identity - The formation of identity based on one's ethnic background.",
    "Sabbatical Effect - In high-stress social groups, cooperation and solidarity are often strengthened.",
    "Street Economy - The impact of informal and street-based economic activities on urban economies."
  ];
  // @ts-ignore
  const lang = navigator.language || navigator.userLanguage;
  const funFacts = lang === 'ja' ? funFacts_ja : funFacts_en;
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  const funFact = funFacts[randomIndex];
  // @ts-ignore
  document.getElementById('app').innerHTML = `<h1>${funFact}</h1>`;
})();