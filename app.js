'use strict';
// ============================================================
// GAME DATA
// ============================================================
const STAGE_NAMES=['Early','Early','Early','Middle','Middle','Middle','Late','Late','Peak','★ Ultimate Perfection'];

const WORLDS=[
  {name:"Mortal Realm",key:"mortal",color:"#60b8ff",levels:[
    {name:"Body Tempering",title:"Iron Body Seeker",desc:"Strengthens muscles, bones, organs. First step beyond ordinary mortals."},
    {name:"Spirit Gathering",title:"Qi Seeker",desc:"Absorbs worldly energy into the body. Can sense qi and spiritual energy."},
    {name:"Meridian Opening",title:"Open Gate Scholar",desc:"Opens energy channels. Improves cultivation speed and combat flow."},
    {name:"Core Condensation",title:"Core Forger",desc:"Forms an inner core or spiritual nucleus. Energy becomes stable."},
    {name:"Nascent Soul",title:"Soul Awakened",desc:"Soul begins separating from mere flesh. Lifespan rises greatly."},
    {name:"Soul Palace",title:"Palace Keeper",desc:"Builds inner spiritual world. Can store will, techniques, soul force."},
    {name:"Heaven Ascension",title:"Heaven Threshold Walker",desc:"Peak of Mortal Realm. Reach Ultimate Perfection to face the Heavenly Tribulation."},
  ]},
  {name:"Upper Realm",key:"upper",color:"#80e0ff",levels:[
    {name:"Earth Spirit",title:"Earth Resonant",desc:"Energy becomes denser and purer. Control over environment begins."},
    {name:"Heaven Spirit",title:"Heaven Spirit Scholar",desc:"Can borrow power of heaven and earth. Stronger laws begin touching you."},
    {name:"Void Walking",title:"Void Strider",desc:"Travel through space in short bursts. Body can endure realm pressure."},
    {name:"Domain Forging",title:"Domain Lord",desc:"Creates a personal domain. Suppresses weaker enemies."},
    {name:"Law Seed",title:"Seeker of Laws",desc:"Comprehends the seed of natural laws: fire, sword, death, time, space..."},
    {name:"Law Embryo",title:"Law Wielder",desc:"Law understanding becomes usable in battle. Attacks contain principles."},
    {name:"True Ascendant",title:"Ascendant",desc:"Peak of Upper Realm. Reach Ultimate Perfection to ascend to Immortal Realm."},
  ]},
  {name:"Immortal Realm",key:"immortal",color:"#e0b0ff",levels:[
    {name:"Loose Immortal",title:"Unbound Immortal",desc:"First immortal body. Long lifespan, no longer bound by mortal decay."},
    {name:"True Immortal",title:"True Immortal",desc:"Body and soul become stable immortal entities. Hard to kill."},
    {name:"Golden Immortal",title:"Golden Radiant",desc:"Immortal essence becomes radiant and indestructible. Great law command."},
    {name:"Profound Immortal",title:"Profound Law Master",desc:"Deepens law mastery. Can create immortal techniques."},
    {name:"Heavenly Immortal",title:"Heaven Resonant",desc:"Resonates with the heavens. Can command vast territories."},
    {name:"Immortal Lord",title:"Immortal Lord",desc:"Rules lesser immortal regions. Can crush lower immortals effortlessly."},
    {name:"Immortal King",title:"Immortal King",desc:"Peak of Immortal Realm. Reach Ultimate Perfection to enter Saint Realm."},
  ]},
  {name:"Saint Realm",key:"saint",color:"#ffe080",levels:[
    {name:"Saint Initiate",title:"Holy Initiate",desc:"Steps into true saintly path. Soul becomes holy and untouchable."},
    {name:"Lesser Saint",title:"Lesser Saint",desc:"Can spread saint aura and suppress worlds below."},
    {name:"True Saint",title:"True Saint",desc:"Law comprehension becomes complete in one path."},
    {name:"Great Saint",title:"Great Saint",desc:"Can influence fate, karma, and destiny to some extent."},
    {name:"Saint Lord",title:"Saint Lord",desc:"Commands saint domains and heavenly orders."},
    {name:"Saint King",title:"Saint King",desc:"Crowned existence among saints. Can destroy immortal dynasties easily."},
    {name:"Saint Sovereign",title:"Saint Sovereign",desc:"Peak Saint Realm. Reach Ultimate Perfection to enter Emperor Realm."},
  ]},
  {name:"Emperor Realm",key:"emperor",color:"#ff8080",levels:[
    {name:"Quasi-Emperor",title:"Half-Emperor",desc:"Half-step into emperor authority. Unmatched under full emperors."},
    {name:"True Emperor",title:"True Emperor",desc:"Possesses imperial might and emperor destiny."},
    {name:"Heaven Emperor",title:"Heaven Emperor",desc:"Can command countless regions and heavenly authority."},
    {name:"Void Emperor",title:"Void Emperor",desc:"Control over space, void, and dimensional suppression."},
    {name:"Law Emperor",title:"Law Emperor",desc:"Laws submit to the cultivator's will."},
    {name:"Great Emperor",title:"Great Emperor",desc:"Can found eternal empires across many worlds."},
    {name:"Emperor Sovereign",title:"Emperor Sovereign",desc:"Peak Emperor Realm. Reach Ultimate Perfection to enter God Realm."},
  ]},
  {name:"God Realm",key:"god",color:"#e080ff",levels:[
    {name:"Demi-God",title:"Demi-God",desc:"First touch of godhood. Mortals kneel in your presence."},
    {name:"True God",title:"True God",desc:"Divine body and divine authority formed."},
    {name:"Ancient God",title:"Ancient God",desc:"Ancient, vast, oppressive divine presence."},
    {name:"God Lord",title:"God Lord",desc:"Rules divine kingdoms or divine races."},
    {name:"God King",title:"God King",desc:"Can kill emperors as mortals kill ants."},
    {name:"Supreme God",title:"Supreme God",desc:"Command over multiple divine laws."},
    {name:"God Sovereign",title:"God Sovereign",desc:"Peak God Realm. Reach Ultimate Perfection to enter Semi-Origin Realm."},
  ]},
  {name:"Semi-Origin Realm",key:"semi",color:"#80ffee",levels:[
    {name:"Origin Spark",title:"Spark of Origin",desc:"First touch of source energy. Reality bends around you."},
    {name:"Origin Vessel",title:"Vessel of Origin",desc:"Body becomes able to carry origin force."},
    {name:"Origin Lord",title:"Origin Lord",desc:"Can use incomplete origin authority."},
    {name:"Half-Origin King",title:"Half-Origin King",desc:"Power surpasses ordinary gods by an enormous gap."},
    {name:"Pseudo-Origin Sovereign",title:"Pseudo Sovereign",desc:"Can create proto-worlds or imperfect realities."},
    {name:"Source Saint",title:"Source Saint",desc:"Soul nears source-level purity."},
    {name:"Half-Origin Ancestor",title:"Half-Origin Ancestor",desc:"Peak of Semi-Origin Realm. Reach Ultimate Perfection to enter Origin Realm."},
  ]},
  {name:"Origin Realm",key:"origin",color:"#ffffa0",levels:[
    {name:"Origin Being",title:"Origin Being",desc:"Truly enters the source path. Source energy flows freely."},
    {name:"Origin Lord",title:"Origin Lord",desc:"Controls origin essence directly."},
    {name:"Origin King",title:"Origin King",desc:"Can shape worlds from source substance."},
    {name:"Origin Emperor",title:"Origin Emperor",desc:"Their will becomes a law of creation."},
    {name:"Origin Sovereign",title:"Origin Sovereign",desc:"Can rewrite lower realities."},
    {name:"Origin Ancestor",title:"Origin Ancestor",desc:"One of the oldest and greatest source existences."},
    {name:"Origin Master",title:"Origin Master",desc:"Peak of Origin Realm. Reach Ultimate Perfection to enter Chaos Realm."},
  ]},
  {name:"Chaos Realm",key:"chaos",color:"#ffffff",levels:[
    {name:"Chaos Seed",title:"Seed of Chaos",desc:"First ability to hold chaotic primal force. Beyond normal existence."},
    {name:"Chaos Body",title:"Chaos Body",desc:"Flesh, soul, and dao become chaos-compatible."},
    {name:"Chaos Lord",title:"Chaos Lord",desc:"Can survive and fight in primal chaos."},
    {name:"Chaos King",title:"Chaos King",desc:"Can create or devour world seas."},
    {name:"Chaos Emperor",title:"Chaos Emperor",desc:"Commands vast chaos authority."},
    {name:"Chaos Sovereign",title:"Chaos Sovereign",desc:"One of the supreme rulers of chaos existence."},
    {name:"Chaos Origin",title:"Eternal Dao Master",desc:"Peak of the entire path. Near-absolute existence. The Eternal Dao is yours."},
  ]},
];

// ── ENEMIES ──────────────────────────────────────────────────
const ENEMIES=[
  {id:'wolf',name:'Iron Wolf',icon:'🐺',rank:'Common',minW:0,maxW:1,hp:60,atk:8,def:3,rewards:{stones:[5,15],items:['wolf_fang'],xp:10},lore:'A wolf with iron-hard fur cultivated from ambient qi.'},
  {id:'bandit',name:'Rogue Cultivator',icon:'🗡',rank:'Common',minW:0,maxW:2,hp:80,atk:12,def:5,rewards:{stones:[10,25],items:['common_herb'],xp:18},lore:'A fallen cultivator who preys on travelers.'},
  {id:'snake',name:'Venom Serpent',icon:'🐍',rank:'Common',minW:0,maxW:2,hp:70,atk:15,def:2,rewards:{stones:[8,20],items:['venom_sac'],xp:15},lore:'A serpent that has cultivated venom qi for centuries.'},
  {id:'golem',name:'Stone Golem',icon:'🪨',rank:'Uncommon',minW:1,maxW:3,hp:150,atk:20,def:15,rewards:{stones:[30,60],items:['stone_core'],xp:40},lore:'An earth-attributed golem created by an ancient sect.'},
  {id:'demon',name:'Lesser Demon',icon:'👹',rank:'Uncommon',minW:1,maxW:4,hp:120,atk:25,def:8,rewards:{stones:[25,50],items:['demon_crystal'],xp:35},lore:'A demon from the outer void who seeks to corrupt this world.'},
  {id:'phoenix',name:'Young Phoenix',icon:'🔥',rank:'Rare',minW:2,maxW:5,hp:200,atk:35,def:20,rewards:{stones:[80,150],items:['phoenix_feather'],xp:80},lore:'A fire-element beast with regenerative capabilities.'},
  {id:'dragon',name:'Sky Dragon',icon:'🐉',rank:'Rare',minW:3,maxW:6,hp:350,atk:55,def:35,rewards:{stones:[200,400],items:['dragon_scale'],xp:180},lore:'A minor dragon that commands wind and lightning.'},
  {id:'warlord',name:'Immortal Warlord',icon:'⚔',rank:'Elite',minW:4,maxW:7,hp:500,atk:80,def:50,rewards:{stones:[500,1000],items:['ancient_talisman'],xp:350},lore:'An ancient cultivator who refused death and became something terrible.'},
  {id:'chaos_beast',name:'Chaos Fiend',icon:'🌀',rank:'Boss',minW:6,maxW:9,hp:1000,atk:150,def:100,rewards:{stones:[2000,5000],items:['chaos_shard'],xp:1000},lore:'A creature born of pure chaos energy. To face one is to face entropy itself.'},
];

// ── SPIRIT BEASTS ──────────────────────────────────────────
const BEASTS=[
  {id:'spirit_fox',name:'Spirit Fox',icon:'🦊',minW:0,desc:'A cunning beast that boosts your perception. Permanently increases breakthrough chance by 3%.',effect:'bt_bonus',val:0.03,tameCost:200,drops:['fox_crystal','spirit_herb']},
  {id:'azure_crane',name:'Azure Crane',icon:'🦅',minW:1,desc:'A graceful crane that soothes your cultivation. Increases Qi gain per click by 15%.',effect:'qi_bonus',val:0.15,tameCost:500,drops:['crane_feather','sky_herb']},
  {id:'thunder_tiger',name:'Thunder Tiger',icon:'🐯',minW:2,desc:'A ferocious beast that empowers your attacks. +30% combat damage.',effect:'atk_bonus',val:0.30,tameCost:1500,drops:['tiger_claw','lightning_herb']},
  {id:'jade_turtle',name:'Jade Turtle',icon:'🐢',minW:3,desc:'An ancient turtle that fortifies your body. +30% HP and defense.',effect:'def_bonus',val:0.30,tameCost:3000,drops:['jade_shell','earth_herb']},
  {id:'void_serpent',name:'Void Serpent',icon:'🐲',minW:5,desc:'A serpent of void qi. Reduces all injuries by 50% severity.',effect:'inj_resist',val:0.50,tameCost:10000,drops:['void_scale','dark_herb']},
];

// ── ITEMS / INVENTORY ───────────────────────────────────────
const ITEM_DEFS={
  // Herbs
  common_herb:{name:'Spirit Herb',icon:'🌿',rarity:'common',type:'herb',desc:'A basic spirit herb used in alchemy.',useDesc:''},
  wolf_fang:{name:'Wolf Fang',icon:'🦷',rarity:'common',type:'material',desc:'Fang from an Iron Wolf. Used as weapon material.'},
  venom_sac:{name:'Venom Sac',icon:'🫧',rarity:'common',type:'material',desc:'Toxic sac from a Venom Serpent.'},
  stone_core:{name:'Stone Core',icon:'💎',rarity:'uncommon',type:'material',desc:'Dense core from a Stone Golem. Good for armor crafting.'},
  demon_crystal:{name:'Demon Crystal',icon:'💜',rarity:'uncommon',type:'material',desc:'Crystallized demonic qi. Valuable to alchemists.'},
  phoenix_feather:{name:'Phoenix Feather',icon:'🪶',rarity:'rare',type:'material',desc:'A feather imbued with fire regeneration qi.'},
  dragon_scale:{name:'Dragon Scale',icon:'🐉',rarity:'rare',type:'material',desc:'An incredibly hard scale from a Sky Dragon.'},
  ancient_talisman:{name:'Ancient Talisman',icon:'📜',rarity:'epic',type:'talisman',desc:'A talisman written by an ancient immortal.',usable:true,onUse:()=>{floatText('+20% Qi!','var(--qi-color)');st.qiBoostTimer=60;addLog('Ancient Talisman activated! Qi gain boosted for 60s.','success');}},
  chaos_shard:{name:'Chaos Shard',icon:'🌀',rarity:'legendary',type:'material',desc:'A shard of primordial chaos. Unfathomable power within.'},
  fox_crystal:{name:'Fox Crystal',icon:'🔮',rarity:'uncommon',type:'material',desc:'Crystallized spirit from a fox beast.'},
  crane_feather:{name:'Crane Feather',icon:'🪶',rarity:'uncommon',type:'material',desc:'Sky-blue feather with calming spiritual qi.'},
  tiger_claw:{name:'Tiger Claw',icon:'🐾',rarity:'rare',type:'material',desc:'Electric claw from a Thunder Tiger.'},
  jade_shell:{name:'Jade Shell',icon:'🐢',rarity:'rare',type:'material',desc:'Incredibly durable shell fragment.'},
  void_scale:{name:'Void Scale',icon:'🌑',rarity:'epic',type:'material',desc:'Scale that bends light. Has void properties.'},
  sky_herb:{name:'Sky Herb',icon:'🌸',rarity:'uncommon',type:'herb',desc:'Herb that grows only at high altitudes.'},
  spirit_herb:{name:'Spirit Herb',icon:'🌿',rarity:'common',type:'herb',desc:'Basic cultivation herb.'},
  lightning_herb:{name:'Lightning Herb',icon:'⚡',rarity:'rare',type:'herb',desc:'Herb infused with lightning qi.'},
  earth_herb:{name:'Earth Herb',icon:'🌱',rarity:'common',type:'herb',desc:'Stable earth-qi herb.'},
  dark_herb:{name:'Void Herb',icon:'🖤',rarity:'epic',type:'herb',desc:'Herb that grows in void cracks.'},
  // Pills
  healing_pill:{name:'Healing Pill',icon:'💊',rarity:'common',type:'pill',usable:true,desc:'Heals 30% Dao injury and restores 20% HP.',onUse:()=>{let h=Math.min(30,st.daoInjury);st.daoInjury=Math.max(0,st.daoInjury-h);st.hp=Math.min(st.hpMax,st.hp+Math.floor(st.hpMax*0.2));addLog('Healing Pill consumed. Injuries reduced, vitality restored.','success');updateAll();}},
  qi_pill:{name:'Qi Condensing Pill',icon:'🔵',rarity:'uncommon',type:'pill',usable:true,desc:'Restores 30% Qi.',onUse:()=>{st.qi=Math.min(st.qiMax,st.qi+Math.floor(st.qiMax*0.3));addLog('Qi Condensing Pill consumed. Qi surges through your meridians!','qi');updateQiBar();}},
  spirit_pill:{name:'Spirit Restoration Pill',icon:'🟣',rarity:'uncommon',type:'pill',usable:true,desc:'Restores 50% Spirit.',onUse:()=>{st.mp=Math.min(st.mpMax,st.mp+Math.floor(st.mpMax*0.5));addLog('Spirit Restoration Pill consumed. Spirit power surges.','success');updateAll();}},
  power_pill:{name:'Power Condensing Pill',icon:'🟡',rarity:'rare',type:'pill',usable:true,desc:'Grants 50% extra Qi gain for 120 seconds.',onUse:()=>{st.powerPillTimer=120;addLog('Power Condensing Pill active! Qi gain +50% for 120s.','success');}},
  // Weapons
  spirit_sword:{name:'Spirit Sword',icon:'🗡',rarity:'uncommon',type:'weapon',desc:'+15% combat attack.',equipped:false,bonus:{atk:0.15}},
  jade_armor:{name:'Jade Armor',icon:'🛡',rarity:'uncommon',type:'armor',desc:'+20% defense.',equipped:false,bonus:{def:0.20}},
  thunder_ring:{name:'Thunder Ring',icon:'💍',rarity:'rare',type:'accessory',desc:'+10% attack and +10% breakthrough chance.',equipped:false,bonus:{atk:0.10,bt:0.10}},
};

// ── PILL RECIPES ─────────────────────────────────────────────
const PILL_RECIPES=[
  {id:'healing_pill',name:'Healing Pill',icon:'💊',ingredients:{common_herb:2},output:{healing_pill:1},time:10,desc:'2x Spirit Herb → 1 Healing Pill'},
  {id:'qi_pill',name:'Qi Condensing Pill',icon:'🔵',ingredients:{spirit_herb:1,fox_crystal:1},output:{qi_pill:1},time:20,desc:'Spirit Herb + Fox Crystal → Qi Pill'},
  {id:'spirit_pill',name:'Spirit Restoration Pill',icon:'🟣',ingredients:{sky_herb:1,crane_feather:1},output:{spirit_pill:1},time:30,desc:'Sky Herb + Crane Feather → Spirit Pill'},
  {id:'power_pill',name:'Power Condensing Pill',icon:'🟡',ingredients:{lightning_herb:1,tiger_claw:1,demon_crystal:1},output:{power_pill:1},time:60,desc:'Lightning Herb + Tiger Claw + Demon Crystal → Power Pill'},
];

// ── MISSIONS ─────────────────────────────────────────────────
const MISSION_POOL=[
  {id:'m_herbs',name:'Herb Collection',desc:'Gather 3 Spirit Herbs for the Sect Elders.',rewards:{stones:50,contribution:20,items:{healing_pill:1}},req:{collect:'spirit_herb',amount:3},duration:120,minW:0},
  {id:'m_wolf',name:'Wolf Hunt',desc:'Slay 3 Iron Wolves terrorizing the outer sect.',rewards:{stones:80,contribution:30},req:{kill:'wolf',amount:3},duration:0,minW:0},
  {id:'m_bandit',name:'Bandit Suppression',desc:'Eliminate the rogue cultivator causing trouble at the border.',rewards:{stones:120,contribution:50,items:{qi_pill:1}},req:{kill:'bandit',amount:2},duration:0,minW:0},
  {id:'m_patrol',name:'Sect Patrol',desc:'Patrol the sect perimeter for 2 minutes.',rewards:{stones:60,contribution:25},req:{wait:true},duration:120,minW:0},
  {id:'m_meditate',name:'Deep Meditation',desc:'Complete a session of focused cultivation — absorb 10 Qi clicks.',rewards:{stones:40,contribution:15},req:{meditate:10},duration:0,minW:0},
  {id:'m_demon',name:'Demon Exorcism',desc:'Slay a Lesser Demon threatening the sect boundary.',rewards:{stones:200,contribution:80,items:{spirit_pill:1}},req:{kill:'demon',amount:1},duration:0,minW:1},
  {id:'m_golem',name:'Golem Subjugation',desc:'Defeat the Stone Golem blocking the upper sect path.',rewards:{stones:300,contribution:100,items:{qi_pill:2}},req:{kill:'golem',amount:1},duration:0,minW:1},
  {id:'m_phoenix',name:'Phoenix Materials',desc:'Hunt the Young Phoenix and collect its feathers.',rewards:{stones:600,contribution:200,items:{power_pill:1}},req:{kill:'phoenix',amount:1},duration:0,minW:2},
  {id:'m_dragon',name:'Dragon Subjugation',desc:'Defeat the Sky Dragon threatening the upper realm.',rewards:{stones:1500,contribution:500,items:{power_pill:2}},req:{kill:'dragon',amount:1},duration:0,minW:3},
];

// ── SECT RANKS ───────────────────────────────────────────────
const SECT_RANKS=[
  {name:'Outer Disciple',icon:'🏮',desc:'Entry-level member. Eligible for basic missions.',threshold:0},
  {name:'Inner Disciple',icon:'⭐',desc:'Proven cultivator. Access to inner sect library.',threshold:200},
  {name:'Core Disciple',icon:'💠',desc:'Elite disciple. Direct Elder guidance.',threshold:600},
  {name:'Elder Candidate',icon:'👑',desc:'Preparing for Elder position. High authority.',threshold:1500},
  {name:'Guardian Elder',icon:'🌟',desc:'Full Elder status. Commands disciples.',threshold:3000},
  {name:'Grand Elder',icon:'⚜',desc:'One of the highest authorities in the Sect.',threshold:6000},
];

const ACHIEVEMENTS=[
  {id:'first_qi',icon:'✨',name:'First Spark',tip:'Absorb first Qi',check:()=>st.totalBts>=0&&st.qi>0},
  {id:'first_bt',icon:'⚡',name:'First Breakthrough',tip:'Complete 1 breakthrough',check:()=>st.totalBts>=1},
  {id:'five_bt',icon:'🌟',name:'Five Surges',tip:'5 breakthroughs',check:()=>st.totalBts>=5},
  {id:'first_kill',icon:'⚔',name:'First Blood',tip:'Win first combat',check:()=>st.totalKills>=1},
  {id:'ten_kills',icon:'🗡',name:'Slayer',tip:'10 combat victories',check:()=>st.totalKills>=10},
  {id:'first_beast',icon:'🐉',name:'Beast Tamer',tip:'Tame first beast',check:()=>st.beasts.length>=1},
  {id:'first_mission',icon:'📜',name:'Mission Accepted',tip:'Complete first mission',check:()=>st.totalMissions>=1},
  {id:'inner',icon:'⭐',name:'Inner Disciple',tip:'Reach Inner Disciple rank',check:()=>st.contribution>=200},
  {id:'upper',icon:'☁',name:'Upper Realm',tip:'Enter Upper Realm',check:()=>st.worldIdx>=1},
  {id:'immortal',icon:'🏮',name:'Immortal Path',tip:'Enter Immortal Realm',check:()=>st.worldIdx>=2},
  {id:'saint',icon:'🌸',name:'Sainthood',tip:'Enter Saint Realm',check:()=>st.worldIdx>=3},
  {id:'emperor',icon:'👑',name:'Emperor Path',tip:'Enter Emperor Realm',check:()=>st.worldIdx>=4},
  {id:'survived_trib',icon:'🌩',name:'Thunder Survivor',tip:'Survive Tribulation',check:()=>st.achievs.survived_trib},
  {id:'healed',icon:'💊',name:'Recovery',tip:'Heal dao injury',check:()=>st.achievs.healed},
  {id:'alchemy',icon:'⚗',name:'Alchemist',tip:'Craft first pill',check:()=>st.totalPillsCrafted>=1},
  {id:'chaos',icon:'🌀',name:'Chaos Touched',tip:'Enter Chaos Realm',check:()=>st.worldIdx>=8},
];

// ============================================================
// GAME STATE
// ============================================================
const DEFAULT_STATE=()=>({
  worldIdx:0,levelIdx:0,stageIdx:0,
  qi:0,qiMax:100,hp:100,hpMax:100,mp:50,mpMax:50,
  spiritStones:0,
  meditating:false,medCD:0,
  daoInjury:0,
  totalBts:0,totalFails:0,totalKills:0,totalMissions:0,totalPillsCrafted:0,
  tribActive:false,tribTimer:0,tribHP:100,tribEndures:0,
  achievs:{},
  beasts:[],
  inventory:{},
  equipment:{weapon:null,armor:null,accessory:null},
  contribution:0,
  activeMissions:[],
  availableMissions:[],
  missionProgress:{},
  craftingQueue:[],
  qiBoostTimer:0,powerPillTimer:0,
  startTime:Date.now(),
  lastSave:null,
  // Active combat
  inCombat:false,
  combatEnemy:null,
  combatPlayerHP:100,combatPlayerMP:100,
  combatEnemyHP:100,
  combatRound:0,
});

let st = DEFAULT_STATE();

// ============================================================
// FORMULAS
// ============================================================
function gp(w,l,s){return w*7*10+l*10+s;}
function qiNeeded(w,l,s){const g=gp(w,l,s),base=s===9?2.5:1.0;return Math.floor(80*base*Math.pow(1.18,g));}
function qiGain(w,l,s){const g=gp(w,l,s);return Math.max(0.5,1.2*Math.pow(1.12,g));}
function btChance(w,l,s){const g=gp(w,l,s),base=s===9?0.70:0.96;return Math.max(0.30,base-g*0.0015);}
function combatPower(w,l,s){return Math.floor(Math.pow(10,gp(w,l,s)*0.06));}
function lifespan(w,l,s){const g=w*7+l;if(g<7)return`${100+g*20+s*2} yrs`;if(g<14)return`${(g-6)*500+s*50} yrs`;if(g<21)return`${(g-13)*5000+s*500} yrs`;return'Immortal';}
function isTribPoint(l,s){return l===6&&s===9;}
function isLevelBt(l,s){return s===9&&l<6;}
function fmtN(n){if(n>=1e12)return(n/1e12).toFixed(2)+'T';if(n>=1e9)return(n/1e9).toFixed(2)+'B';if(n>=1e6)return(n/1e6).toFixed(2)+'M';if(n>=1e3)return(n/1e3).toFixed(2)+'K';return Math.floor(n).toString();}

// Beast bonus helpers
function getBeastBonus(effect){return st.beasts.includes(effect)?1:0;}
function getBeastVal(effect){const b=BEASTS.find(x=>x.effect===effect&&st.beasts.includes(x.id));return b?b.val:0;}

// Equipment bonuses
function getEquipBonus(key){
  let val=0;
  ['weapon','armor','accessory'].forEach(slot=>{
    if(st.equipment[slot]){const it=ITEM_DEFS[st.equipment[slot]];if(it&&it.bonus&&it.bonus[key])val+=it.bonus[key];}
  });
  return val;
}

// ============================================================
// SAVE / LOAD (FIXED — using localStorage directly with JSON)
// ============================================================
const SAVE_KEY='eternal_dao_v3';

function saveGame(){
  try{
    const snapshot=JSON.stringify(st);
    localStorage.setItem(SAVE_KEY,snapshot);
    st.lastSave=Date.now();
    return true;
  }catch(e){console.error('Save failed:',e);return false;}
}

function loadGame(){
  try{
    const raw=localStorage.getItem(SAVE_KEY);
    if(!raw)return false;
    const saved=JSON.parse(raw);
    // Merge saved onto default to handle new fields
    const def=DEFAULT_STATE();
    st=Object.assign(def,saved);
    // Recompute qiMax on load
    st.qiMax=qiNeeded(st.worldIdx,st.levelIdx,st.stageIdx);
    return true;
  }catch(e){console.error('Load failed:',e);return false;}
}

function manualSave(){
  const ok=saveGame();
  showSaveToast(ok);
  if(ok){
    const el=document.getElementById('last-save-txt');
    if(el)el.textContent='Last saved: '+new Date().toLocaleTimeString();
    addLog('Progress saved to device storage.','success');
  }
}

function showSaveToast(ok=true){
  const t=document.getElementById('save-toast');
  t.textContent=ok?'✦ Progress Saved ✦':'⚠ Save Failed!';
  t.style.borderColor=ok?'rgba(80,232,160,0.4)':'rgba(255,60,60,0.4)';
  t.style.color=ok?'var(--jade)':'var(--danger)';
  t.style.opacity='1';
  setTimeout(()=>{t.style.opacity='0';},2000);
}

function confirmReset(){
  showModal('⚠ New Game','All progress will be permanently lost. The heavens do not forgive carelessness. Are you certain?',[
    {label:'Confirm Reset',action:()=>{localStorage.removeItem(SAVE_KEY);location.reload();}},
    {label:'Cancel',action:()=>{}}
  ]);
}

// ============================================================
// INIT
// ============================================================
function init(){
  buildStarfield();buildParticles();
  const loaded=loadGame();
  buildAchievements();
  updateAll();updateWorldMap();buildInventoryUI();
  renderMissions();renderBeasts();renderPillRecipes();
  if(loaded){
    addLog('Welcome back! Your cultivation continues where you left off.','success');
    const el=document.getElementById('last-save-txt');
    if(el&&st.lastSave)el.textContent='Last saved: '+new Date(st.lastSave).toLocaleTimeString();
  }else{
    addLog('The Eternal Dao opens before you. Begin your cultivation journey.','info');
    addLog('Click [Meditate] to absorb Qi from heaven and earth.','qi');
    refreshMissions();
  }
  startGameLoop();
  updateRealmColors();
  // Auto-save every 60 seconds
  setInterval(()=>{saveGame();},60000);
}

// ============================================================
// GAME LOOP
// ============================================================
let lastTick=Date.now();
function startGameLoop(){
  setInterval(()=>{
    const now=Date.now();
    const dt=(now-lastTick)/1000;
    lastTick=now;

    // Meditate CD
    if(st.medCD>0){
      st.medCD=Math.max(0,st.medCD-dt);
      if(st.medCD<=0){
        const b=document.getElementById('btn-med');
        if(b){b.disabled=false;b.textContent='🧘 Meditate';}
      }else{
        const b=document.getElementById('btn-med');
        if(b)b.textContent=`🧘 (${st.medCD.toFixed(1)}s)`;
      }
    }

    // Tribulation
    if(st.tribActive){
      st.tribTimer-=dt;
      const dmg=(2+st.worldIdx*1.5)*dt;
      st.tribHP=Math.max(0,st.tribHP-dmg);
      document.getElementById('trib-timer').textContent=Math.max(0,Math.ceil(st.tribTimer));
      document.getElementById('trib-hp-bar').style.width=st.tribHP+'%';
      document.getElementById('trib-hp-txt').textContent=Math.floor(st.tribHP)+'%';
      if(st.tribHP<=0||st.tribTimer<=0)endTrib(st.tribTimer>0&&st.tribHP>0);
    }

    // Timers
    if(st.qiBoostTimer>0)st.qiBoostTimer=Math.max(0,st.qiBoostTimer-dt);
    if(st.powerPillTimer>0)st.powerPillTimer=Math.max(0,st.powerPillTimer-dt);

    // Mission timers
    tickMissions(dt);

    // Crafting queue
    tickCrafting(dt);

    // Active combat auto-enemy attack
    if(st.inCombat&&st.combatEnemy){
      tickCombat(dt);
    }

    // HP regen (small)
    if(st.hp<st.hpMax&&!st.inCombat){
      st.hp=Math.min(st.hpMax,st.hp+st.hpMax*0.002*dt);
    }
    if(st.mp<st.mpMax){
      st.mp=Math.min(st.mpMax,st.mp+st.mpMax*0.01*dt);
    }

    updateHPMPBars();
    updateFooter();
  },200);
}

// ============================================================
// MEDITATE
// ============================================================
function doMeditate(){
  if(st.tribActive||st.medCD>0||st.inCombat)return;

  let qpc=qiGain(st.worldIdx,st.levelIdx,st.stageIdx)*3.5;
  if(st.daoInjury>0)qpc*=(1-st.daoInjury*0.006);
  const beastMult=1+getBeastVal('qi_bonus');
  const pillMult=st.powerPillTimer>0?1.5:1;
  const boostMult=st.qiBoostTimer>0?1.2:1;
  qpc=Math.max(1,qpc*beastMult*pillMult*boostMult);

  const wasAtMax=st.qi>=st.qiMax;
  st.qi=Math.min(st.qiMax,st.qi+qpc);

  // Visual
  const aura=document.getElementById('char-aura');
  if(aura){aura.style.opacity='1';setTimeout(()=>{aura.style.opacity='0';},400);}
  document.querySelectorAll('.med-ring').forEach(r=>{r.style.opacity='1';setTimeout(()=>{r.style.opacity='0';},400);});
  floatText('+'+fmtN(Math.floor(qpc))+' Qi','var(--qi-color)');

  updateQiBar();

  // Mission progress
  tickMeditateProgress();

  if(st.qi>=st.qiMax&&!wasAtMax){
    addLog('Qi fully condensed — breakthrough is possible!','success');
    document.getElementById('btn-bt').classList.add('ready');
  }

  const cdMs=Math.max(120,500-st.worldIdx*20);
  st.medCD=cdMs/1000;
  const b=document.getElementById('btn-med');
  if(b)b.disabled=true;

  checkAchievements();
}

// ============================================================
// BREAKTHROUGH
// ============================================================
function doBreakthrough(){
  if(st.qi<st.qiMax||st.tribActive)return;
  const w=st.worldIdx,l=st.levelIdx,s=st.stageIdx;

  if(isTribPoint(l,s)){startTrib();return;}

  let chance=btChance(w,l,s)+getBeastVal('bt_bonus')+getEquipBonus('bt');

  if(Math.random()<chance){
    doStageUp();
  }else{
    st.totalFails++;
    const injDmg=8+Math.random()*12;
    const injResist=getBeastVal('inj_resist');
    st.daoInjury=Math.min(100,st.daoInjury+injDmg*(1-injResist));
    st.qi=Math.floor(st.qi*0.5);
    addLog(`Breakthrough FAILED! Dao cracked. Injury +${Math.floor(injDmg)}%`,'danger');
    showInjFlash();
    updateAll();checkAchievements();
  }
  document.getElementById('btn-bt').disabled=true;
  document.getElementById('btn-bt').classList.remove('ready');
}

function doStageUp(){
  const w=st.worldIdx,l=st.levelIdx,s=st.stageIdx;
  st.totalBts++;

  if(s<9){
    st.stageIdx++;
    const lvl=WORLDS[w].levels[l];
    addLog(`Stage Up! ${lvl.name} · ${STAGE_NAMES[st.stageIdx]} (Stage ${st.stageIdx+1})`,'success');
    floatText(`+Stage ${st.stageIdx+1}!`,'var(--gold2)');
  }else{
    st.levelIdx++;st.stageIdx=0;
    const lvl=WORLDS[w].levels[st.levelIdx];
    addLog(`Level Breakthrough! Entered ${lvl.name}`,'success');
    floatText(`+${lvl.name}!`,'var(--jade2)');
  }
  // Small stone reward
  const stoneReward=5+st.worldIdx*3;
  st.spiritStones+=stoneReward;
  floatText(`+${stoneReward} Stones`,'var(--gold)');

  st.qiMax=qiNeeded(st.worldIdx,st.levelIdx,st.stageIdx);
  st.qi=0;
  updateAll();updateWorldMap();checkAchievements();
  saveGame();
}

function doWorldUp(){
  st.totalBts++;
  if(st.worldIdx<WORLDS.length-1){
    st.worldIdx++;st.levelIdx=0;st.stageIdx=0;
    const nw=WORLDS[st.worldIdx];
    addLog(`WORLD ASCENSION! Entered the ${nw.name}!`,'ascension');
    showAscFlash(`Ascended to\n${nw.name}`);
    updateRealmColors();
    // Big reward
    const bonus=500+st.worldIdx*200;
    st.spiritStones+=bonus;
    addLog(`Ascension reward: +${bonus} Spirit Stones!`,'success');
    refreshMissions();
  }else{
    addLog('You have reached CHAOS ORIGIN — the apex of all existence. The Eternal Dao is complete.','ascension');
    showModal('🌀 Eternal Dao Achieved','You have transcended all realms and reached Chaos Origin — the pinnacle of existence. Your name shall echo through the cosmos for eternity.',[
      {label:'New Game',action:()=>{localStorage.removeItem(SAVE_KEY);location.reload();}},
      {label:'Continue',action:()=>{}}
    ]);
  }
  st.hpMax=Math.floor(100*Math.pow(1.3,st.worldIdx));
  st.hp=st.hpMax;
  st.mpMax=Math.floor(50*Math.pow(1.2,st.worldIdx));
  st.mp=st.mpMax;
  st.qiMax=qiNeeded(st.worldIdx,st.levelIdx,st.stageIdx);
  st.qi=0;
  updateAll();checkAchievements();updateWorldMap();
  saveGame();
}

// ============================================================
// TRIBULATION
// ============================================================
function startTrib(){
  st.tribActive=true;
  st.tribTimer=15+st.worldIdx*5;
  st.tribHP=100;
  st.tribEndures=0;
  st.meditating=false;
  document.getElementById('trib-title').textContent=`⚡ ${WORLDS[st.worldIdx].name.toUpperCase()} TRIBULATION ⚡`;
  document.getElementById('trib-desc').textContent=`The heavens test your resolve at the peak of ${WORLDS[st.worldIdx].name}. Survive the tribulation lightning!`;
  document.getElementById('trib-overlay').style.display='flex';
  addLog('HEAVENLY TRIBULATION! The skies darken. Lightning gathers!','tribulation');
}

function endureTrib(){
  if(!st.tribActive)return;
  st.tribEndures++;
  st.tribHP=Math.min(100,st.tribHP+(3+st.worldIdx));
  floatText(`+${(3+st.worldIdx).toFixed(0)} Endure!`,'var(--tribulation)');
}

function endTrib(success){
  st.tribActive=false;
  document.getElementById('trib-overlay').style.display='none';
  if(success||st.tribHP>30){
    st.achievs.survived_trib=true;
    addLog('TRIBULATION PASSED! The heavens acknowledge your Dao heart!','ascension');
    showAscFlash('Tribulation\nConquered!');
    doWorldUp();
  }else{
    st.totalFails++;
    addLog('TRIBULATION FAILED! Heavenly lightning shatters your foundation!','danger');
    const injDmg=25+st.worldIdx*5;
    const injResist=getBeastVal('inj_resist');
    st.daoInjury=Math.min(100,st.daoInjury+injDmg*(1-injResist));
    if(st.daoInjury>=80)regressionLevel();
    st.qi=Math.floor(st.qiMax*0.1);
    showInjFlash();
    showModal('💔 Tribulation Failed',`The heavenly lightning shattered your foundation. Dao Injuries inflicted (${Math.floor(injDmg)}%). Heal before attempting again!`,[
      {label:'Continue',action:()=>{}}
    ]);
    updateAll();checkAchievements();
  }
  const b=document.getElementById('btn-med');
  if(b)b.disabled=false;
  saveGame();
}

function regressionLevel(){
  if(st.stageIdx>0){st.stageIdx=Math.max(0,st.stageIdx-3);addLog('Dao regression! Fallen back 3 stages!','danger');}
  else if(st.levelIdx>0){st.levelIdx--;st.stageIdx=6;addLog('Dao regression! Level dropped!','danger');}
  else if(st.worldIdx>0){st.worldIdx--;st.levelIdx=5;st.stageIdx=5;addLog('REALM REGRESSION! Fallen back a world!','danger');updateRealmColors();}
  st.qiMax=qiNeeded(st.worldIdx,st.levelIdx,st.stageIdx);st.qi=0;updateWorldMap();
}

// ============================================================
// HEAL
// ============================================================
function healInjury(){
  // Use a healing pill from inventory
  const invPills=(st.inventory.healing_pill||0);
  if(invPills<1){addLog('No Healing Pills in your bag! Craft them in the Sect tab.','danger');return;}
  removeItem('healing_pill',1);
  const heal=20+Math.random()*20;
  st.daoInjury=Math.max(0,st.daoInjury-heal);
  st.hp=Math.min(st.hpMax,st.hp+Math.floor(st.hpMax*0.2));
  st.achievs.healed=true;
  addLog(`Healing Pill consumed. Dao injury reduced by ${Math.floor(heal)}%.`,'success');
  floatText(`-${Math.floor(heal)}% Injury`,'var(--jade)');
  updateAll();checkAchievements();
}

// ============================================================
// COMBAT SYSTEM
// ============================================================
function getAvailableEnemies(){
  return ENEMIES.filter(e=>st.worldIdx>=e.minW&&st.worldIdx<=e.maxW);
}

function startCombat(enemyId){
  const enemy=ENEMIES.find(e=>e.id===enemyId);
  if(!enemy)return;
  if(st.inCombat){addLog('Already in combat!','danger');return;}

  const scaledHP=Math.floor(enemy.hp*Math.pow(1.5,Math.max(0,st.worldIdx-enemy.minW)));
  const scaledAtk=Math.floor(enemy.atk*Math.pow(1.3,Math.max(0,st.worldIdx-enemy.minW)));
  const scaledDef=Math.floor(enemy.def*Math.pow(1.3,Math.max(0,st.worldIdx-enemy.minW)));

  st.inCombat=true;
  st.combatEnemy={...enemy,maxHP:scaledHP,currentHP:scaledHP,atk:scaledAtk,def:scaledDef};
  st.combatPlayerHP=st.hp;
  st.combatPlayerMP=st.mp;
  st.combatEnemyHP=scaledHP;
  st.combatRound=0;
  st.combatLastEnemyAtk=Date.now();

  switchTab('combat');
  document.getElementById('enemy-select').style.display='none';
  document.getElementById('combat-active').style.display='block';

  document.getElementById('c-player-name').textContent='You ('+WORLDS[st.worldIdx].levels[st.levelIdx].name+')';
  document.getElementById('c-enemy-name').textContent=enemy.name;
  document.getElementById('c-enemy-icon').textContent=enemy.icon;

  const logEl=document.getElementById('combat-log');
  logEl.innerHTML='';
  addCombatLine(`⚔ Battle begins! ${enemy.name} appears!`,'');
  addCombatLine(enemy.lore,'');
  updateCombatUI();
  addLog(`Entered combat with ${enemy.name}!`,'combat');
}

let combatEnemyAtkAccum=0;
function tickCombat(dt){
  if(!st.inCombat||!st.combatEnemy)return;
  combatEnemyAtkAccum+=dt;
  const atkInterval=2.5-st.worldIdx*0.1; // faster at higher realms
  if(combatEnemyAtkAccum>=Math.max(1.5,atkInterval)){
    combatEnemyAtkAccum=0;
    enemyAttack();
  }
}

function getPlayerAtk(){
  const cp=combatPower(st.worldIdx,st.levelIdx,st.stageIdx);
  const beastBonus=1+getBeastVal('atk_bonus');
  const equipBonus=1+getEquipBonus('atk');
  return Math.max(1,Math.floor(cp*0.1*beastBonus*equipBonus));
}

function getPlayerDef(){
  const beastBonus=1+getBeastVal('def_bonus');
  const equipBonus=1+getEquipBonus('def');
  return Math.floor(combatPower(st.worldIdx,st.levelIdx,st.stageIdx)*0.05*beastBonus*equipBonus);
}

function playerAttack(){
  if(!st.inCombat||!st.combatEnemy)return;
  st.combatRound++;
  const atk=getPlayerAtk();
  const enemyDef=Math.max(0,st.combatEnemy.def-getPlayerDef()*0.3);
  const dmg=Math.max(1,Math.floor(atk-enemyDef/2+(Math.random()-0.5)*atk*0.3));
  const isCrit=Math.random()<0.15;
  const finalDmg=isCrit?Math.floor(dmg*1.8):dmg;

  st.combatEnemyHP=Math.max(0,st.combatEnemyHP-finalDmg);
  if(isCrit)addCombatLine(`💥 CRITICAL! You strike for ${fmtN(finalDmg)} damage!`,'crit');
  else addCombatLine(`🗡 You attack for ${fmtN(finalDmg)} damage.`,'hit');

  updateCombatUI();
  if(st.combatEnemyHP<=0){endCombat(true);return;}

  // Mission kill tracking
  if(st.combatEnemy&&st.combatEnemyHP<=0)trackKill(st.combatEnemy.id);
}

function useSkill(){
  if(!st.inCombat||!st.combatEnemy)return;
  const mpCost=Math.floor(st.mpMax*0.25);
  if(st.combatPlayerMP<mpCost){addCombatLine('⚠ Insufficient Spirit to use technique!','');return;}
  st.combatPlayerMP=Math.max(0,st.combatPlayerMP-mpCost);

  const atk=getPlayerAtk()*3;
  const dmg=Math.floor(atk*(0.8+Math.random()*0.4));
  st.combatEnemyHP=Math.max(0,st.combatEnemyHP-dmg);
  addCombatLine(`🔮 Technique unleashed! ${fmtN(dmg)} spirit damage!`,'crit');
  updateCombatUI();
  if(st.combatEnemyHP<=0){endCombat(true);}
}

function enemyAttack(){
  if(!st.inCombat||!st.combatEnemy)return;
  const def=getPlayerDef();
  const dmg=Math.max(1,Math.floor(st.combatEnemy.atk-def+(Math.random()-0.5)*st.combatEnemy.atk*0.3));
  st.combatPlayerHP=Math.max(0,st.combatPlayerHP-dmg);
  st.hp=Math.max(1,st.hp-dmg); // also drain real HP
  addCombatLine(`💢 ${st.combatEnemy.name} attacks you for ${fmtN(dmg)} damage!`,'');
  updateCombatUI();
  if(st.combatPlayerHP<=0){endCombat(false);}
}

function usePillInCombat(){
  if(!st.inCombat)return;
  if((st.inventory.healing_pill||0)>0){
    removeItem('healing_pill',1);
    const heal=Math.floor(st.combatPlayerHP*0.4+st.hpMax*0.2);
    st.combatPlayerHP=Math.min(st.hpMax,st.combatPlayerHP+heal);
    st.hp=Math.min(st.hpMax,st.hp+heal);
    addCombatLine(`💊 Healing Pill consumed! +${fmtN(heal)} HP.`,'heal');
    updateCombatUI();
  }else if((st.inventory.qi_pill||0)>0){
    removeItem('qi_pill',1);
    st.combatPlayerMP=Math.min(st.mpMax,st.combatPlayerMP+Math.floor(st.mpMax*0.5));
    addCombatLine('🔵 Qi Pill consumed! Spirit restored.','heal');
    updateCombatUI();
  }else{
    addCombatLine('⚠ No usable pills in bag!','');
  }
}

function fleeFromCombat(){
  if(!st.inCombat)return;
  st.inCombat=false;st.combatEnemy=null;combatEnemyAtkAccum=0;
  document.getElementById('enemy-select').style.display='block';
  document.getElementById('combat-active').style.display='none';
  addLog('You fled from combat.','info');
  addCombatLine('🏃 You fled!','');
}

function endCombat(victory){
  combatEnemyAtkAccum=0;
  if(victory){
    const enemy=st.combatEnemy;
    st.totalKills++;
    trackKill(enemy.id);
    addCombatLine(`🏆 VICTORY! ${enemy.name} defeated!`,'win');

    // Loot
    const stonesMin=enemy.rewards.stones[0]+st.worldIdx*10;
    const stonesMax=enemy.rewards.stones[1]+st.worldIdx*20;
    const stones=stonesMin+Math.floor(Math.random()*(stonesMax-stonesMin));
    st.spiritStones+=stones;
    addCombatLine(`💎 Gained ${stones} Spirit Stones.`,'win');

    // Item drop
    if(Math.random()<0.6&&enemy.rewards.items.length>0){
      const item=enemy.rewards.items[Math.floor(Math.random()*enemy.rewards.items.length)];
      addItem(item,1);
      const def=ITEM_DEFS[item];
      addCombatLine(`📦 Dropped: ${def?def.icon:'📦'} ${def?def.name:item}`,'win');
      buildInventoryUI();
    }

    // Rare weapon/armor drop
    if(Math.random()<0.1){
      const gearPool=['spirit_sword','jade_armor','thunder_ring'];
      const gear=gearPool[Math.floor(Math.random()*gearPool.length)];
      addItem(gear,1);
      const def=ITEM_DEFS[gear];
      addCombatLine(`⚔ RARE DROP: ${def.icon} ${def.name}!`,'win');
      buildInventoryUI();
    }

    addLog(`Victory over ${enemy.name}! +${stones} Stones.`,'combat');
    checkAchievements();
    st.hp=st.combatPlayerHP; // sync HP back
    st.mp=st.combatPlayerMP;
  }else{
    addCombatLine('💀 You were defeated!','loss');
    const injDmg=8+Math.random()*8;
    const injResist=getBeastVal('inj_resist');
    st.daoInjury=Math.min(100,st.daoInjury+injDmg*(1-injResist));
    st.hp=Math.max(1,Math.floor(st.hpMax*0.15));
    addLog(`Defeated by ${st.combatEnemy.name}! HP critically low. Dao injured.`,'danger');
    showInjFlash();
  }

  st.inCombat=false;st.combatEnemy=null;
  setTimeout(()=>{
    document.getElementById('enemy-select').style.display='block';
    document.getElementById('combat-active').style.display='none';
    renderEnemies();
  },1500);
  updateAll();saveGame();
}

function addCombatLine(txt,cls){
  const el=document.getElementById('combat-log');
  const d=document.createElement('div');
  d.className='combat-line'+(cls?' '+cls:'');
  d.textContent=txt;
  el.appendChild(d);
  while(el.children.length>50)el.removeChild(el.firstChild);
  el.scrollTop=el.scrollHeight;
}

function updateCombatUI(){
  const e=st.combatEnemy;if(!e)return;
  const playerPct=Math.max(0,st.combatPlayerHP/st.hpMax*100);
  const enemyPct=Math.max(0,st.combatEnemyHP/e.maxHP*100);
  const mpPct=Math.max(0,st.combatPlayerMP/st.mpMax*100);
  document.getElementById('c-player-hp').textContent=`HP: ${Math.floor(playerPct)}%`;
  document.getElementById('c-player-bar').style.width=playerPct+'%';
  document.getElementById('c-player-mp').textContent=`Spirit: ${Math.floor(mpPct)}%`;
  document.getElementById('c-enemy-hp').textContent=`HP: ${Math.floor(enemyPct)}%`;
  document.getElementById('c-enemy-bar').style.width=enemyPct+'%';
}

function renderEnemies(){
  const el=document.getElementById('enemy-list');
  if(!el)return;
  el.innerHTML='';
  const avail=getAvailableEnemies();
  if(avail.length===0){el.innerHTML='<div class="info-tip" style="text-align:center;">No enemies available in this realm yet.</div>';return;}
  avail.forEach(enemy=>{
    const rankColors={Common:'#8aaccc',Uncommon:'#60b8ff',Rare:'#c070ff',Elite:'#f0c060',Boss:'#ff3050'};
    const col=rankColors[enemy.rank]||'#8aaccc';
    const div=document.createElement('div');
    div.className='beast-card';
    div.style.borderColor=col+'55';
    div.innerHTML=`<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;"><span style="font-size:1.4rem;">${enemy.icon}</span><div><div class="beast-name" style="color:${col};">${enemy.name} <span class="enemy-rank" style="background:${col}22;color:${col};">${enemy.rank}</span></div></div></div><div class="beast-desc">${enemy.lore}</div><div class="beast-drops" style="margin-top:4px;">Drops: Spirit Stones + potential materials</div><button class="btn btn-combat" style="margin-top:6px;" onclick="startCombat('${enemy.id}')">⚔ Attack</button>`;
    el.appendChild(div);
  });
}

// ============================================================
// SPIRIT BEASTS
// ============================================================
function renderBeasts(){
  const el=document.getElementById('beast-list');
  if(!el)return;
  el.innerHTML='';
  BEASTS.forEach(beast=>{
    if(st.worldIdx<beast.minW&&!st.beasts.includes(beast.id))return;
    const owned=st.beasts.includes(beast.id);
    const div=document.createElement('div');
    div.className='beast-card';
    if(owned)div.style.borderColor='rgba(80,232,160,0.5)';
    div.innerHTML=`<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;"><span style="font-size:1.6rem;">${beast.icon}</span><div><div class="beast-name">${beast.name} ${owned?'<span style="color:var(--jade);font-size:0.6rem;">✓ TAMED</span>':''}</div></div></div><div class="beast-desc">${beast.desc}</div>${owned?'':'<button class="btn btn-purple" style="margin-top:6px;" onclick="tameBeast(\''+beast.id+'\')">🔮 Tame ('+beast.tameCost+' Stones)</button>'}`;
    el.appendChild(div);
  });
  if(el.children.length===0)el.innerHTML='<div class="info-tip" style="text-align:center;">No Spirit Beasts discovered yet. Explore higher realms!</div>';
}

function tameBeast(id){
  const beast=BEASTS.find(b=>b.id===id);
  if(!beast)return;
  if(st.beasts.includes(id)){addLog('Already tamed this beast.','info');return;}
  if(st.spiritStones<beast.tameCost){addLog(`Insufficient Spirit Stones to tame ${beast.name}. Need ${beast.tameCost}.`,'danger');return;}
  st.spiritStones-=beast.tameCost;
  st.beasts.push(id);
  addLog(`${beast.name} tamed! Bonus: ${beast.desc}`,'success');
  floatText(`${beast.icon} Tamed!`,'var(--jade)');
  renderBeasts();checkAchievements();updateAll();saveGame();
}

// ============================================================
// INVENTORY
// ============================================================
function addItem(id,qty=1){
  st.inventory[id]=(st.inventory[id]||0)+qty;
}
function removeItem(id,qty=1){
  st.inventory[id]=Math.max(0,(st.inventory[id]||0)-qty);
  if(st.inventory[id]===0)delete st.inventory[id];
}
function totalPills(){
  return (st.inventory.healing_pill||0)+(st.inventory.qi_pill||0)+(st.inventory.spirit_pill||0)+(st.inventory.power_pill||0);
}

function buildInventoryUI(){
  const grid=document.getElementById('inv-grid');
  if(!grid)return;
  grid.innerHTML='';
  const slots=20;
  const occupied=Object.entries(st.inventory).filter(([k,v])=>v>0&&ITEM_DEFS[k]);
  for(let i=0;i<slots;i++){
    const slot=document.createElement('div');
    slot.className='inv-slot';
    if(i<occupied.length){
      const [itemId,qty]=occupied[i];
      const def=ITEM_DEFS[itemId];
      slot.className='inv-slot occupied '+def.rarity;
      slot.innerHTML=`<div class="inv-icon">${def.icon}</div><div class="inv-name">${def.name}</div><div class="inv-qty">x${qty}</div>`;
      slot.onclick=()=>onItemClick(itemId);
    }
    grid.appendChild(slot);
  }
  // Equipment display
  const ew=document.getElementById('eq-weapon');
  const ea=document.getElementById('eq-armor');
  const eacc=document.getElementById('eq-acc');
  if(ew){const it=st.equipment.weapon?ITEM_DEFS[st.equipment.weapon]:null;ew.textContent=it?`${it.icon} ${it.name}`:'None';}
  if(ea){const it=st.equipment.armor?ITEM_DEFS[st.equipment.armor]:null;ea.textContent=it?`${it.icon} ${it.name}`:'None';}
  if(eacc){const it=st.equipment.accessory?ITEM_DEFS[st.equipment.accessory]:null;eacc.textContent=it?`${it.icon} ${it.name}`:'None';}
  document.getElementById('inv-stones').textContent=fmtN(st.spiritStones);
}

function onItemClick(itemId){
  const def=ITEM_DEFS[itemId];
  if(!def)return;
  const qty=st.inventory[itemId]||0;

  const btns=[];
  if(def.usable){btns.push({label:`Use ${def.icon}`,action:()=>{def.onUse();removeItem(itemId,1);buildInventoryUI();checkAchievements();}});}
  if(def.type==='weapon'){btns.push({label:'Equip',action:()=>{st.equipment.weapon=itemId;buildInventoryUI();addLog(`Equipped ${def.name}.`,'success');}});}
  if(def.type==='armor'){btns.push({label:'Equip',action:()=>{st.equipment.armor=itemId;buildInventoryUI();addLog(`Equipped ${def.name}.`,'success');}});}
  if(def.type==='accessory'){btns.push({label:'Equip',action:()=>{st.equipment.accessory=itemId;buildInventoryUI();addLog(`Equipped ${def.name}.`,'success');}});}
  btns.push({label:'Close',action:()=>{}});

  showModal(`${def.icon} ${def.name}`,`${def.desc}\n\nQuantity: ${qty}`,btns);
}

// ============================================================
// MISSIONS
// ============================================================
function refreshMissions(){
  // Pick 3-4 missions available for this world
  const avail=MISSION_POOL.filter(m=>m.minW<=st.worldIdx);
  // Shuffle and pick up to 4, excluding already active
  const activeIds=st.activeMissions.map(m=>m.id);
  const pool=avail.filter(m=>!activeIds.includes(m.id)).sort(()=>Math.random()-0.5).slice(0,4);
  st.availableMissions=pool;
  renderMissions();
}

function renderMissions(){
  const el=document.getElementById('mission-list');
  if(!el)return;
  el.innerHTML='';
  if(st.availableMissions.length===0){el.innerHTML='<div class="info-tip" style="text-align:center;">No missions available. Try refreshing.</div>';return;}
  st.availableMissions.forEach(mission=>{
    const div=document.createElement('div');
    div.className='mission-card available';
    const rewardStr=[];
    if(mission.rewards.stones)rewardStr.push(`💎 ${mission.rewards.stones} Stones`);
    if(mission.rewards.contribution)rewardStr.push(`⭐ ${mission.rewards.contribution} Contribution`);
    if(mission.rewards.items){Object.entries(mission.rewards.items).forEach(([it,qty])=>{const d=ITEM_DEFS[it];if(d)rewardStr.push(`${d.icon} x${qty} ${d.name}`);});}
    div.innerHTML=`<div class="mission-name">${mission.name}</div><div class="mission-desc">${mission.desc}</div><div class="mission-rewards">${rewardStr.map(r=>`<div class="reward-tag">${r}</div>`).join('')}</div>${mission.duration?`<div class="mission-timer">⏱ ${mission.duration}s duration</div>`:'<div class="mission-timer">⚡ Combat/Action required</div>'}<button class="btn btn-green" style="margin-top:6px;" onclick="acceptMission('${mission.id}')">Accept Mission</button>`;
    el.appendChild(div);
  });

  // Active missions
  const ael=document.getElementById('active-mission-list');
  if(ael){
    ael.innerHTML='';
    if(st.activeMissions.length===0){ael.innerHTML='<div class="info-tip" style="text-align:center;">No active missions.</div>';return;}
    st.activeMissions.forEach(am=>{
      const def=MISSION_POOL.find(m=>m.id===am.id);
      if(!def)return;
      const prog=st.missionProgress[am.id]||{};
      const div=document.createElement('div');
      div.className='mission-card active';
      let progTxt='';
      if(def.req.kill)progTxt=`Kills: ${prog.kills||0}/${def.req.amount}`;
      else if(def.req.meditate)progTxt=`Meditations: ${prog.med||0}/${def.req.amount}`;
      else if(def.req.wait){const rem=Math.max(0,am.endTime-Date.now()/1000);progTxt=`Time remaining: ${Math.ceil(rem)}s`;}
      const done=isMissionDone(am.id,def);
      div.innerHTML=`<div class="mission-name">${def.name} ${done?'<span style="color:var(--jade);">✓ COMPLETE</span>':''}</div><div class="mission-desc">${progTxt}</div>${done?`<button class="btn btn-green" style="margin-top:6px;" onclick="claimMission('${am.id}')">Claim Rewards</button>`:''}`;
      ael.appendChild(div);
    });
  }
}

function acceptMission(id){
  const def=MISSION_POOL.find(m=>m.id===id);
  if(!def)return;
  if(st.activeMissions.length>=3){addLog('Max 3 active missions at once.','danger');return;}
  st.activeMissions.push({id,startTime:Date.now()/1000,endTime:def.duration?Date.now()/1000+def.duration:null});
  st.missionProgress[id]={kills:0,med:0};
  st.availableMissions=st.availableMissions.filter(m=>m.id!==id);
  addLog(`Mission accepted: ${def.name}`,'success');
  renderMissions();
  // Update notif badge
  document.getElementById('tab-missions').dataset.n=st.activeMissions.length||'';
}

function isMissionDone(id,def){
  const prog=st.missionProgress[id]||{};
  const am=st.activeMissions.find(m=>m.id===id);
  if(!am)return false;
  if(def.req.kill)return(prog.kills||0)>=(def.req.amount||1);
  if(def.req.meditate)return(prog.med||0)>=(def.req.amount||1);
  if(def.req.wait)return am.endTime&&Date.now()/1000>=am.endTime;
  return false;
}

function claimMission(id){
  const def=MISSION_POOL.find(m=>m.id===id);
  if(!def||!isMissionDone(id,def))return;
  st.spiritStones+=def.rewards.stones||0;
  st.contribution+=def.rewards.contribution||0;
  if(def.rewards.items){Object.entries(def.rewards.items).forEach(([it,qty])=>{addItem(it,qty);});}
  st.totalMissions++;
  st.activeMissions=st.activeMissions.filter(m=>m.id!==id);
  delete st.missionProgress[id];
  addLog(`Mission "${def.name}" completed! Rewards claimed.`,'success');
  floatText('+'+def.rewards.stones+' Stones','var(--gold)');
  checkAchievements();updateAll();buildInventoryUI();renderMissions();
  document.getElementById('tab-missions').dataset.n=st.activeMissions.length||'';
  saveGame();
}

function tickMissions(dt){
  // Nothing needed, time-based check is instant on UI render
}

function trackKill(enemyId){
  st.activeMissions.forEach(am=>{
    const def=MISSION_POOL.find(m=>m.id===am.id);
    if(!def||!def.req.kill)return;
    if(def.req.kill===enemyId){
      if(!st.missionProgress[am.id])st.missionProgress[am.id]={};
      st.missionProgress[am.id].kills=(st.missionProgress[am.id].kills||0)+1;
      if(isMissionDone(am.id,def))addLog(`Mission "${def.name}" complete! Claim rewards.`,'success');
    }
  });
  renderMissions();
}

function tickMeditateProgress(){
  st.activeMissions.forEach(am=>{
    const def=MISSION_POOL.find(m=>m.id===am.id);
    if(!def||!def.req.meditate)return;
    if(!st.missionProgress[am.id])st.missionProgress[am.id]={};
    st.missionProgress[am.id].med=(st.missionProgress[am.id].med||0)+1;
  });
}

// ============================================================
// PILL ALCHEMY
// ============================================================
function renderPillRecipes(){
  const el=document.getElementById('pill-recipes');
  if(!el)return;
  el.innerHTML='';
  PILL_RECIPES.forEach(recipe=>{
    const canCraft=Object.entries(recipe.ingredients).every(([id,qty])=>(st.inventory[id]||0)>=qty);
    const div=document.createElement('div');
    div.className='beast-card';
    div.style.borderColor=canCraft?'rgba(80,232,160,0.4)':'rgba(255,255,255,0.1)';
    const ingList=Object.entries(recipe.ingredients).map(([id,qty])=>{const d=ITEM_DEFS[id];return `${d?d.icon:'📦'}x${qty} ${d?d.name:id}`;}).join(', ');
    div.innerHTML=`<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;"><span style="font-size:1.4rem;">${recipe.icon}</span><span class="beast-name">${recipe.name}</span></div><div class="beast-desc">${recipe.desc}</div><div style="font-size:0.55rem;color:var(--text2);margin:4px 0;">Ingredients: ${ingList}</div><button class="btn btn-pill" style="margin-top:6px;" ${canCraft?'':'disabled'} onclick="craftPill('${recipe.id}')">⚗ Craft</button>`;
    el.appendChild(div);
  });
}

function craftPill(recipeId){
  const recipe=PILL_RECIPES.find(r=>r.id===recipeId);
  if(!recipe)return;
  const canCraft=Object.entries(recipe.ingredients).every(([id,qty])=>(st.inventory[id]||0)>=qty);
  if(!canCraft){addLog('Insufficient materials for this recipe.','danger');return;}
  Object.entries(recipe.ingredients).forEach(([id,qty])=>removeItem(id,qty));
  Object.entries(recipe.output).forEach(([id,qty])=>addItem(id,qty));
  st.totalPillsCrafted++;
  addLog(`Crafted: ${recipe.icon} ${recipe.name}!`,'success');
  floatText(`⚗ ${recipe.name}!`,'var(--jade2)');
  buildInventoryUI();renderPillRecipes();checkAchievements();saveGame();
}

// ============================================================
// SECT RANK
// ============================================================
function getSectRank(){
  for(let i=SECT_RANKS.length-1;i>=0;i--){if(st.contribution>=SECT_RANKS[i].threshold)return SECT_RANKS[i];}
  return SECT_RANKS[0];
}
function getNextSectRank(){
  for(let i=0;i<SECT_RANKS.length;i++){if(st.contribution<SECT_RANKS[i].threshold)return SECT_RANKS[i];}
  return null;
}
function updateSectUI(){
  const rank=getSectRank();
  const next=getNextSectRank();
  const sri=document.getElementById('sect-rank-icon');
  const srn=document.getElementById('sect-rank-name');
  const srd=document.getElementById('sect-rank-desc');
  const cbt=document.getElementById('contrib-txt');
  const cbar=document.getElementById('contrib-bar');
  const ssect=document.getElementById('s-sect');
  if(sri)sri.textContent=rank.icon;
  if(srn)srn.textContent=rank.name;
  if(srd)srd.textContent=rank.desc;
  if(ssect)ssect.textContent=rank.name;
  const nextThresh=next?next.threshold:SECT_RANKS[SECT_RANKS.length-1].threshold;
  const prevThresh=rank.threshold;
  const pct=next?Math.min(100,(st.contribution-prevThresh)/(nextThresh-prevThresh)*100):100;
  if(cbt)cbt.textContent=`${st.contribution}/${next?nextThresh:'MAX'}`;
  if(cbar)cbar.style.width=pct+'%';
}

// ============================================================
// UI UPDATES
// ============================================================
function updateAll(){
  const w=st.worldIdx,l=st.levelIdx,s=st.stageIdx;
  const world=WORLDS[w],level=world.levels[l];
  st.qiMax=qiNeeded(w,l,s);

  // Char
  document.getElementById('char-level-text').textContent=`${level.name} · ${STAGE_NAMES[s]}`;
  document.getElementById('char-realm-badge').textContent=world.name.toUpperCase();
  document.getElementById('char-title').textContent=level.title;
  document.getElementById('level-desc').textContent=level.desc;

  // Qi bar
  updateQiBar();

  // HP/MP max
  if(st.hp>st.hpMax)st.hp=st.hpMax;
  if(st.mp>st.mpMax)st.mp=st.mpMax;

  // Stats
  let gain=qiGain(w,l,s)*3.5*(1-st.daoInjury*0.006)*(1+getBeastVal('qi_bonus'))*(st.powerPillTimer>0?1.5:1);
  document.getElementById('s-gain').textContent=fmtN(Math.floor(Math.max(1,gain)))+'/click';
  document.getElementById('s-bt').textContent=Math.floor((btChance(w,l,s)+getBeastVal('bt_bonus')+getEquipBonus('bt'))*100)+'%';
  const cp=combatPower(w,l,s);
  document.getElementById('s-power').textContent=fmtN(cp);
  document.getElementById('s-life').textContent=lifespan(w,l,s);
  document.getElementById('s-stones').textContent=fmtN(st.spiritStones);
  document.getElementById('s-bts').textContent=st.totalBts;

  // BT button label
  const btBtn=document.getElementById('btn-bt');
  if(isTribPoint(l,s))btBtn.innerHTML='⚡ Face Tribulation';
  else if(s===8)btBtn.innerHTML='★ Ultimate Perfection';
  else btBtn.innerHTML=`⚡ Breakthrough → Stage ${s+2}`;

  // BT info
  document.getElementById('bt-info').textContent=st.qi>=st.qiMax?'Ready for Breakthrough!':'Fill Qi to 100% to unlock breakthrough';
  document.getElementById('qi-click-info').textContent=`Each click: +${fmtN(Math.floor(Math.max(1,gain)))} Qi`;

  // Injury
  const injPanel=document.getElementById('injury-panel');
  if(injPanel){
    injPanel.style.display=st.daoInjury>0?'block':'none';
    if(st.daoInjury>0){
      document.getElementById('inj-bar').style.width=st.daoInjury+'%';
      document.getElementById('inj-txt').textContent=Math.floor(st.daoInjury)+'%';
      document.getElementById('inj-desc').textContent=st.daoInjury>=70?'Critical: Cultivation heavily suppressed. Heal immediately!':st.daoInjury>=40?'Severe: Qi absorption greatly reduced.':'Mild: Minor Dao cracks.';
    }
  }

  // Stage dots
  buildStageDots();

  // World banner
  const wb=document.getElementById('world-banner');
  if(wb)wb.style.borderColor=world.color+'44';
  const wt=document.getElementById('world-title');
  if(wt){wt.textContent=world.name;wt.style.color=world.color;}
  document.getElementById('stage-label').textContent=s===9?`★ Ultimate Perfection — Breakthrough ready!`:`${STAGE_NAMES[s]} · Stage ${s+1} of 10`;

  // Heal btn
  const healBtn=document.getElementById('btn-heal');
  if(healBtn)healBtn.disabled=(st.inventory.healing_pill||0)<1;

  // Sect
  updateSectUI();

  // Pills count
  document.getElementById('hdr-pills').textContent=totalPills();
  document.getElementById('hdr-stones').textContent=fmtN(st.spiritStones);
}

function buildStageDots(){
  const el=document.getElementById('stage-dots');
  if(!el)return;
  el.innerHTML='';
  for(let i=0;i<10;i++){
    const d=document.createElement('div');
    d.className='sdot'+(i===9?' ultimate':'');
    if(i<st.stageIdx)d.classList.add('done');
    else if(i===st.stageIdx)d.classList.add('current');
    el.appendChild(d);
  }
}

function updateQiBar(){
  const pct=st.qiMax>0?(st.qi/st.qiMax)*100:0;
  document.getElementById('qi-bar').style.width=pct+'%';
  document.getElementById('qi-txt').textContent=fmtN(Math.floor(st.qi))+'/'+fmtN(st.qiMax);
  const btBtn=document.getElementById('btn-bt');
  if(st.qi>=st.qiMax){btBtn.disabled=false;btBtn.classList.add('ready');}
  else{btBtn.disabled=true;btBtn.classList.remove('ready');}
}

function updateHPMPBars(){
  const hp=document.getElementById('hp-bar'),hpt=document.getElementById('hp-txt');
  const mp=document.getElementById('mp-bar'),mpt=document.getElementById('mp-txt');
  if(hp){hp.style.width=(st.hp/st.hpMax*100)+'%';}
  if(hpt)hpt.textContent=fmtN(Math.floor(st.hp))+'/'+fmtN(st.hpMax);
  if(mp){mp.style.width=(st.mp/st.mpMax*100)+'%';}
  if(mpt)mpt.textContent=fmtN(Math.floor(st.mp))+'/'+fmtN(st.mpMax);
}

function updateFooter(){
  const w=st.worldIdx,l=st.levelIdx,s=st.stageIdx;
  document.getElementById('hdr-realm').textContent=WORLDS[w].name;
  document.getElementById('hdr-stage').textContent=`${WORLDS[w].levels[l].name}·${s+1}`;
  document.getElementById('hdr-power').textContent=fmtN(combatPower(w,l,s));
  document.getElementById('hdr-stones').textContent=fmtN(st.spiritStones);
  document.getElementById('hdr-pills').textContent=totalPills();
}

function updateWorldMap(){
  const el=document.getElementById('world-map-list');
  if(!el)return;
  el.innerHTML='';
  WORLDS.forEach((world,wi)=>{
    const isCur=wi===st.worldIdx,isDone=wi<st.worldIdx,isLock=wi>st.worldIdx;
    const div=document.createElement('div');
    div.style.cssText=`display:flex;align-items:center;gap:8px;padding:4px 6px;border-radius:4px;margin-bottom:4px;opacity:${isLock?0.3:1};background:${isCur?world.color+'12':'transparent'};border:1px solid ${isCur?world.color+'44':'rgba(255,255,255,0.05)'};`;
    div.innerHTML=`<div style="width:7px;height:7px;border-radius:50%;background:${isDone?'#50e8a0':isCur?world.color:'rgba(255,255,255,0.2)'};flex-shrink:0;"></div><div style="font-size:0.6rem;color:${isCur?world.color:isDone?'rgba(255,255,255,0.5)':'rgba(255,255,255,0.25)'};flex:1;">${world.name}</div><div style="font-size:0.5rem;color:rgba(255,255,255,0.4);">${isDone?'✓ DONE':isCur?`${STAGE_NAMES[st.stageIdx]}`:''}</div>`;
    el.appendChild(div);
  });
}

// ============================================================
// REALM COLORS
// ============================================================
const REALM_COLORS=['#60b8ff','#80e0ff','#e0b0ff','#ffe080','#ff8080','#e080ff','#80ffee','#ffffa0','#ffffff'];
const REALM_GLOWS=['rgba(80,180,255,0.4)','rgba(100,220,255,0.4)','rgba(200,120,255,0.5)','rgba(255,200,80,0.5)','rgba(255,80,80,0.5)','rgba(220,80,255,0.5)','rgba(80,255,220,0.5)','rgba(255,255,80,0.5)','rgba(255,255,255,0.6)'];
function updateRealmColors(){
  const c=REALM_COLORS[st.worldIdx]||'#60b8ff';
  const g=REALM_GLOWS[st.worldIdx]||'rgba(80,180,255,0.4)';
  document.documentElement.style.setProperty('--qi-color',c);
  document.documentElement.style.setProperty('--qi-glow',g);
  const aura=document.getElementById('char-aura');
  if(aura)aura.style.background=`radial-gradient(circle,${g},transparent)`;
}

// ============================================================
// ACHIEVEMENTS
// ============================================================
function buildAchievements(){
  const grid=document.getElementById('achieve-grid');
  if(!grid)return;
  ACHIEVEMENTS.forEach(a=>{
    const item=document.createElement('div');
    item.className='achieve-item locked';
    item.id=`ach-${a.id}`;
    item.textContent=a.icon;
    item.title=a.tip;
    grid.appendChild(item);
  });
}

function checkAchievements(){
  ACHIEVEMENTS.forEach(a=>{
    if(!st.achievs[a.id]&&a.check()){
      st.achievs[a.id]=true;
      const el=document.getElementById(`ach-${a.id}`);
      if(el){el.classList.remove('locked');el.classList.add('unlocked');}
      addLog(`🏆 Dao Mark Earned: "${a.name}"`,'ascension');
      floatText(`🏆 ${a.name}`,'var(--gold)');
    }
    const el=document.getElementById(`ach-${a.id}`);
    if(el&&st.achievs[a.id]){el.classList.remove('locked');el.classList.add('unlocked');}
  });
}

// ============================================================
// LOG
// ============================================================
function addLog(msg,type='info'){
  const el=document.getElementById('log-entries');
  if(!el)return;
  const entry=document.createElement('div');
  entry.className=`log-entry ${type}`;
  const now=new Date();
  entry.textContent=`[${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}] ${msg}`;
  el.appendChild(entry);
  while(el.children.length>100)el.removeChild(el.firstChild);
  el.scrollTop=el.scrollHeight;
}

// ============================================================
// VISUAL EFFECTS
// ============================================================
function showAscFlash(text){
  const el=document.getElementById('ascension-flash');
  document.getElementById('asc-txt').textContent=text;
  el.style.display='flex';
  setTimeout(()=>{el.style.display='none';},3000);
}

function showInjFlash(){
  const el=document.getElementById('injury-flash');
  el.style.display='block';
  el.style.animation='none';
  el.offsetHeight;
  el.style.animation='injFlash 0.6s ease forwards';
  setTimeout(()=>{el.style.display='none';},700);
}

function floatText(text,color){
  const el=document.createElement('div');
  el.className='float-text';
  el.textContent=text;el.style.color=color;
  el.style.left=(20+Math.random()*60)+'%';
  el.style.top=(30+Math.random()*30)+'%';
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),2000);
}

// ============================================================
// MODAL
// ============================================================
function showModal(title,body,buttons){
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-body').textContent=body;
  const btns=document.getElementById('modal-btns');
  btns.innerHTML='';
  buttons.forEach(b=>{
    const btn=document.createElement('button');
    btn.className='btn btn-bt';btn.style.flex='1';
    btn.textContent=b.label;
    btn.onclick=()=>{document.getElementById('modal-overlay').classList.remove('open');b.action();};
    btns.appendChild(btn);
  });
  document.getElementById('modal-overlay').classList.add('open');
}

// ============================================================
// TABS
// ============================================================
function switchTab(name){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('tab-'+name).classList.add('active');
  document.getElementById('panel-'+name).classList.add('active');
  if(name==='combat'){renderEnemies();renderBeasts();}
  if(name==='missions'){renderMissions();renderPillRecipes();}
  if(name==='inventory'){buildInventoryUI();}
  if(name==='records'){updateWorldMap();checkAchievements();}
}

// ============================================================
// CRAFTING TICK (simplified — instant for now)
// ============================================================
function tickCrafting(dt){}

// ============================================================
// BACKGROUND FX
// ============================================================
function buildStarfield(){
  const sf=document.getElementById('starfield');
  for(let i=0;i<80;i++){
    const s=document.createElement('div');s.className='star';
    const sz=Math.random()<0.1?3:Math.random()<0.3?2:1;
    s.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;background:rgba(255,255,255,${0.3+Math.random()*0.7});--d:${2+Math.random()*4}s;--delay:${Math.random()*4}s;`;
    sf.appendChild(s);
  }
}
function buildParticles(){
  const el=document.getElementById('particles');
  for(let i=0;i<15;i++){
    const p=document.createElement('div');p.className='particle';
    const sz=2+Math.random()*3;
    p.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;background:var(--qi-color);box-shadow:0 0 6px var(--qi-color);--d:${8+Math.random()*10}s;--delay:${Math.random()*8}s;--drift:${(-30+Math.random()*60)}px;`;
    el.appendChild(p);
  }
}

// ============================================================
// PWA INSTALL PROMPT
// ============================================================
let deferredPrompt=null;
window.addEventListener('beforeinstallprompt',(e)=>{
  e.preventDefault();
  deferredPrompt=e;
  // Show small install hint after a delay
  const installBtn=document.getElementById('installBtn');
  if(installBtn){
    installBtn.style.display='inline-flex';
    installBtn.classList.add('show');
  }
  setTimeout(()=>{
    if(deferredPrompt){
      addLog('📱 Install is ready. Tap the INSTALL button at the top, or use browser menu → Add to Home Screen.','info');
    }
  },1500);
});



// ============================================================
// PWA REGISTRATION + INSTALL BUTTON
// ============================================================
async function registerSW(){
  if (!('serviceWorker' in navigator)) return;
  try {
    await navigator.serviceWorker.register('./sw.js');
  } catch (err) {
    console.warn('Service worker registration failed:', err);
  }
}

function setupInstallButton(){
  const installBtn = document.getElementById('installBtn');
  if(!installBtn) return;

  installBtn.addEventListener('click', async ()=>{
    try{
      if(deferredPrompt){
        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        deferredPrompt = null;
        installBtn.classList.remove('show');
        installBtn.style.display='none';
      } else {
        addLog('📱 Open this site in Chrome on mobile and use Add to Home Screen if install is not shown.','info');
      }
    }catch(err){
      console.warn('Install prompt failed:', err);
      addLog('Install prompt was unavailable. Try browser menu → Add to Home Screen.','danger');
    }
  });

  window.addEventListener('appinstalled', ()=>{
    installBtn.classList.remove('show');
    installBtn.style.display='none';
    addLog('📲 Eternal Dao was installed successfully.','success');
  });
}

// ============================================================
// START
// ============================================================
window.addEventListener('DOMContentLoaded',()=>{ init(); setupInstallButton(); registerSW(); });