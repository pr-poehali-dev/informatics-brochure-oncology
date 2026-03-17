import Icon from "@/components/ui/icon";

type IconName = string;

const IMG_HERO = "https://cdn.poehali.dev/projects/7ece33ad-244e-45e6-8f31-63861c46713a/files/3b0a698e-fc20-44ea-bd7b-b52856433901.jpg";
const IMG_LIFESTYLE = "https://cdn.poehali.dev/projects/7ece33ad-244e-45e6-8f31-63861c46713a/files/00fe9278-67f4-43ad-8d2a-927450cabb6d.jpg";
const IMG_TREATMENT = "https://cdn.poehali.dev/projects/7ece33ad-244e-45e6-8f31-63861c46713a/files/ba56cfa4-807f-4fda-87e5-21e61ecd1095.jpg";

const C = {
  bg: "#0d1117",
  surface: "#161b22",
  card: "#1c2333",
  border: "#30363d",
  cyan: "#39d0c8",
  blue: "#58a6ff",
  green: "#3fb950",
  red: "#ff7b72",
  orange: "#e3b341",
  text: "#e6edf3",
  muted: "#8b949e",
  dim: "#21262d",
};

const riskFactors = [
  { icon: "Cigarette", label: "Курение", desc: "Вызывает до 30% всех случаев рака" },
  { icon: "Wine", label: "Алкоголь", desc: "Повышает риск рака печени и ротовой полости" },
  { icon: "Sun", label: "УФ-излучение", desc: "Основная причина рака кожи" },
  { icon: "Utensils", label: "Неправильное питание", desc: "Избыток красного мяса и жиров" },
  { icon: "Activity", label: "Малоподвижность", desc: "Риск рака кишечника и груди" },
  { icon: "Factory", label: "Канцерогены", desc: "Асбест, радон, химические вещества" },
  { icon: "Dna", label: "Наследственность", desc: "Генетические мутации BRCA1/BRCA2" },
  { icon: "Shield", label: "Инфекции", desc: "ВПЧ, гепатит В и С, H.pylori" },
];

const prevention = [
  { icon: "Ban", accent: C.red, title: "Отказ от курения", desc: "Снижает риск рака лёгких на 90%. Эффективно даже после 10 лет курения." },
  { icon: "Apple", accent: C.green, title: "Здоровое питание", desc: "5 порций овощей и фруктов в день. Красное мясо — не более 500 г в неделю." },
  { icon: "Dumbbell", accent: C.blue, title: "Физическая активность", desc: "150 минут умеренных нагрузок в неделю снижают риск рака на 20–30%." },
  { icon: "Scale", accent: "#a371f7", title: "Контроль веса", desc: "Ожирение связано с 13 видами рака. Норма ИМТ — 18,5–24,9." },
  { icon: "Syringe", accent: C.cyan, title: "Вакцинация", desc: "ВПЧ-прививка защищает от рака шейки матки. Гепатит В — от рака печени." },
  { icon: "CalendarCheck", accent: C.orange, title: "Регулярные осмотры", desc: "Онкоскрининг выявляет рак на ранней стадии, когда лечение наиболее эффективно." },
];

const symptoms = [
  "Необъяснимая потеря веса (более 5 кг за месяц)",
  "Длительная усталость без видимых причин",
  "Появление новых родинок или изменение старых",
  "Длительный кашель или охриплость голоса",
  "Уплотнения или шишки в любой части тела",
  "Кровотечения или выделения без причины",
  "Длительная боль без видимой причины",
  "Нарушения глотания или пищеварения",
  "Незаживающие язвы или раны на коже",
];

const treatments = [
  { icon: "Scissors", title: "Хирургия", desc: "Роботизированная хирургия da Vinci — минимальные разрезы, восстановление 3–5 дней." },
  { icon: "Radio", title: "Лучевая терапия", desc: "Протонная терапия и Gamma Knife точечно уничтожают опухоль без вреда для здоровых тканей." },
  { icon: "FlaskConical", title: "Химиотерапия", desc: "Таргетная терапия блокирует молекулы роста опухоли с минимальными побочными эффектами." },
  { icon: "ShieldCheck", title: "Иммунотерапия", desc: "PD-1/PD-L1 ингибиторы «включают» иммунную систему — революция онкологии XXI века." },
  { icon: "Dna", title: "Генная терапия", desc: "CAR-T терапия: клетки пациента перепрограммируются для уничтожения рака. Применяется при лейкемии." },
  { icon: "Microscope", title: "Ранняя диагностика", desc: "Жидкая биопсия — анализ крови на рак. МРТ всего тела выявляет опухоли от 5 мм за 1 час." },
];

const contacts = [
  { icon: "Phone", label: "Горячая линия онкологической помощи", value: "8-800-200-2-200", sub: "Бесплатно · круглосуточно" },
  { icon: "MapPin", label: "НМИЦ онкологии им. Блохина", value: "Москва, Каширское ш., 24", sub: "nmicr.ru · +7 (499) 324-18-01" },
  { icon: "Globe", label: "Онкологический регистр России", value: "oncologyregistry.ru", sub: "Статистика, данные, исследования" },
  { icon: "Heart", label: "Фонд «Подари жизнь»", value: "podari-zhizn.ru", sub: "Помощь детям с онкологией" },
  { icon: "BookOpen", label: "Российское общество онкологов", value: "rosoncoweb.ru", sub: "Клинические рекомендации" },
];

const SectionTitle = ({ children, accent = C.cyan }: { children: React.ReactNode; accent?: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-1 h-7 rounded-full" style={{ background: accent }}></div>
    <h2 className="text-xl font-bold" style={{ color: C.text, fontFamily: "Montserrat, sans-serif" }}>{children}</h2>
  </div>
);

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: C.bg, fontFamily: "Montserrat, sans-serif", color: C.text }}>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, #0d1117 0%, #0f2040 50%, #0d2a1a 100%)` }}>
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(57,208,200,0.07) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(88,166,255,0.07) 0%, transparent 50%)" }}></div>
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(57,208,200,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(57,208,200,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

        <div className="relative max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-mono" style={{ background: "rgba(57,208,200,0.1)", border: `1px solid rgba(57,208,200,0.3)`, color: C.cyan }}>
              <Icon name="BookOpen" size={13} />
              // информационный_буклет.tsx · 2026
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4" style={{ color: C.text }}>
              Профилактика<br />
              <span style={{ color: C.cyan }}>онкологических</span><br />
              заболеваний
            </h1>
            <p className="text-base mb-8 leading-relaxed max-w-lg" style={{ color: C.muted }}>
              Каждый третий случай онкологического заболевания можно предотвратить. Знание — первый шаг к здоровью.
            </p>
            <div className="flex flex-wrap gap-8">
              {[["18,1 млн", "новых случаев в год", C.red], ["9,6 млн", "смертей ежегодно", C.orange], ["40%", "можно предотвратить", C.green]].map(([num, label, color]) => (
                <div key={num as string}>
                  <div className="text-2xl font-extrabold font-mono" style={{ color: color as string }}>{num}</div>
                  <div className="text-xs mt-1 max-w-[110px]" style={{ color: C.muted }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 w-full lg:w-96">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl" style={{ background: `linear-gradient(135deg, ${C.cyan}, ${C.blue})`, opacity: 0.4 }}></div>
              <img src={IMG_HERO} alt="Профилактика онкологии" className="relative rounded-2xl w-full h-64 lg:h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ЧТО ТАКОЕ РАК */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <SectionTitle>Что такое онкологические заболевания?</SectionTitle>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 leading-relaxed">
            <p className="text-sm" style={{ color: C.muted }}>
              <strong style={{ color: C.text }}>Онкологические заболевания</strong> — группа болезней, при которых клетки организма начинают неконтролируемо делиться, образуя злокачественные опухоли. В мире насчитывается более <strong style={{ color: C.cyan }}>200 видов рака</strong>.
            </p>
            <p className="text-sm" style={{ color: C.muted }}>
              Злокачественные клетки способны распространяться через кровь и лимфу — этот процесс называется <strong style={{ color: C.cyan }}>метастазирование</strong>.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { icon: "TrendingUp", val: "2-е место", label: "среди причин смертности", color: C.red },
                { icon: "Users", val: "53,5 млн", label: "человек живут с онкологией", color: C.blue },
                { icon: "Target", val: "90%", label: "успех лечения на 1–2 стадии", color: C.green },
                { icon: "Clock", val: "10 лет", label: "средний срок развития опухоли", color: C.orange },
              ].map(({ icon, val, label, color }) => (
                <div key={val} className="rounded-xl p-4" style={{ background: C.card, border: `1px solid ${C.border}` }}>
                  <Icon name={icon as IconName} size={18} style={{ color }} className="mb-2" />
                  <div className="text-lg font-bold font-mono" style={{ color }}>{val}</div>
                  <div className="text-xs mt-0.5" style={{ color: C.muted }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-5" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
            <h3 className="font-bold mb-4 text-sm" style={{ color: C.text }}>// Распространённые виды рака</h3>
            {[
              { name: "Рак лёгкого", pct: 12.4, color: C.red },
              { name: "Рак молочной железы", pct: 11.7, color: "#f78166" },
              { name: "Рак толстого кишечника", pct: 10.2, color: C.orange },
              { name: "Рак простаты", pct: 7.3, color: C.blue },
              { name: "Рак желудка", pct: 5.6, color: C.cyan },
            ].map(({ name, pct, color }) => (
              <div key={name} className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span style={{ color: C.muted }}>{name}</span>
                  <span className="font-mono" style={{ color }}>{pct}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: C.dim }}>
                  <div className="h-full rounded-full" style={{ width: `${pct * 7}%`, background: color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФАКТОРЫ РИСКА */}
      <section className="py-14" style={{ background: C.surface }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle accent={C.red}>Факторы риска развития рака</SectionTitle>
          <p className="text-sm mb-8 ml-4" style={{ color: C.muted }}>Большинство факторов — <strong style={{ color: C.text }}>управляемые</strong>. Изменив образ жизни, можно значительно снизить вероятность заболевания.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {riskFactors.map(({ icon, label, desc }) => (
              <div key={label} className="rounded-xl p-4 hover:border-cyan-500 transition-colors" style={{ background: C.card, border: `1px solid ${C.border}` }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: "rgba(57,208,200,0.1)", border: `1px solid rgba(57,208,200,0.3)` }}>
                  <Icon name={icon as IconName} size={17} style={{ color: C.cyan }} />
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ color: C.text }}>{label}</h3>
                <p className="text-xs leading-relaxed" style={{ color: C.muted }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПРОФИЛАКТИКА */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <SectionTitle accent={C.green}>Методы первичной профилактики</SectionTitle>
        <p className="text-sm mb-8 ml-4" style={{ color: C.muted }}>Здоровый образ жизни — самый эффективный способ защиты от рака</p>
        <div className="grid lg:grid-cols-2 gap-8 mb-6">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.bg} 0%, transparent 50%)` }}></div>
            <img src={IMG_LIFESTYLE} alt="Здоровый образ жизни" className="w-full h-56 object-cover" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {prevention.slice(0, 4).map(({ icon, accent, title, desc }) => (
              <div key={title} className="rounded-xl p-4 hover:border-opacity-60 transition-colors" style={{ background: C.card, border: `1px solid ${C.border}` }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2" style={{ background: `${accent}18`, border: `1px solid ${accent}40` }}>
                  <Icon name={icon as IconName} size={16} style={{ color: accent }} />
                </div>
                <h3 className="font-bold text-xs mb-1" style={{ color: C.text }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: C.muted }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {prevention.slice(4).map(({ icon, accent, title, desc }) => (
            <div key={title} className="rounded-xl p-5 flex gap-4" style={{ background: C.card, border: `1px solid ${C.border}` }}>
              <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: `${accent}18`, border: `1px solid ${accent}40` }}>
                <Icon name={icon as IconName} size={19} style={{ color: accent }} />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1" style={{ color: C.text }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: C.muted }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ТРЕВОЖНЫЕ СИМПТОМЫ */}
      <section className="py-14" style={{ background: C.surface }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle accent={C.red}>Тревожные симптомы</SectionTitle>
          <p className="text-sm mb-8 ml-4" style={{ color: C.muted }}>При появлении любого из этих симптомов <strong style={{ color: C.red }}>немедленно обратитесь к врачу</strong></p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {symptoms.map((symptom, i) => (
              <div key={i} className="rounded-xl p-4 flex items-start gap-3" style={{ background: C.card, border: `1px solid ${C.border}` }}>
                <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: "rgba(255,123,114,0.15)", border: "1px solid rgba(255,123,114,0.4)" }}>
                  <Icon name="AlertTriangle" size={11} style={{ color: C.red }} />
                </div>
                <p className="text-xs leading-relaxed" style={{ color: C.muted }}>{symptom}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl p-5 flex gap-4" style={{ background: "rgba(255,123,114,0.07)", border: `1px solid rgba(255,123,114,0.3)` }}>
            <Icon name="Info" size={20} style={{ color: C.red }} className="flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm mb-1" style={{ color: C.red }}>Важно помнить</h3>
              <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
                Симптомы могут указывать и на другие заболевания. Но своевременная диагностика критически важна: на I–II стадии рак излечим в <strong style={{ color: C.text }}>85–90% случаев</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* МЕТОДЫ ЛЕЧЕНИЯ */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <SectionTitle accent={C.blue}>Современные методы лечения</SectionTitle>
        <p className="text-sm mb-8 ml-4" style={{ color: C.muted }}>Наука не стоит на месте — ежегодно появляются новые методы борьбы с онкологией</p>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="grid sm:grid-cols-2 gap-3">
            {treatments.map(({ icon, title, desc }) => (
              <div key={title} className="rounded-xl p-4 hover:border-blue-500 transition-colors" style={{ background: C.card, border: `1px solid ${C.border}` }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: "rgba(88,166,255,0.1)", border: "1px solid rgba(88,166,255,0.3)" }}>
                  <Icon name={icon as IconName} size={17} style={{ color: C.blue }} />
                </div>
                <h3 className="font-bold text-xs mb-1.5" style={{ color: C.text }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: C.muted }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.bg} 0%, transparent 60%)` }}></div>
              <img src={IMG_TREATMENT} alt="Методы лечения" className="w-full h-52 object-cover" />
            </div>
            <div className="rounded-2xl p-5" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
              <p className="text-xs font-mono mb-4" style={{ color: C.cyan }}>// Успехи современной онкологии</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["63%", "5-летняя выживаемость (все виды)", C.green],
                  ["98%", "выживаемость, рак кожи (1 ст.)", C.cyan],
                  ["+33%", "рост выживаемости за 30 лет", C.blue],
                  ["2 млн", "новых выживших ежегодно", C.orange],
                ].map(([num, label, color]) => (
                  <div key={num as string} className="rounded-xl p-3" style={{ background: C.card, border: `1px solid ${C.border}` }}>
                    <div className="text-xl font-extrabold font-mono" style={{ color: color as string }}>{num}</div>
                    <div className="text-xs mt-1" style={{ color: C.muted }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section className="py-14" style={{ background: C.surface }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle accent={C.cyan}>Контакты и справочная информация</SectionTitle>
          <p className="text-sm mb-8 ml-4" style={{ color: C.muted }}>Организации, куда можно обратиться за помощью</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {contacts.map(({ icon, label, value, sub }) => (
              <div key={label} className="rounded-xl p-5 hover:border-cyan-500 transition-colors" style={{ background: C.card, border: `1px solid ${C.border}` }}>
                <Icon name={icon as IconName} size={18} style={{ color: C.cyan }} className="mb-3" />
                <h3 className="font-semibold text-xs mb-1" style={{ color: C.text }}>{label}</h3>
                <p className="font-bold font-mono text-sm mb-1" style={{ color: C.cyan }}>{value}</p>
                <p className="text-xs" style={{ color: C.muted }}>{sub}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-6 text-center" style={{ background: "rgba(57,208,200,0.05)", border: `1px solid rgba(57,208,200,0.2)` }}>
            <Icon name="Heart" size={26} style={{ color: C.cyan }} className="mx-auto mb-3" />
            <p className="font-bold mb-2" style={{ color: C.text }}>Ваше здоровье — в ваших руках</p>
            <p className="text-xs max-w-2xl mx-auto leading-relaxed" style={{ color: C.muted }}>
              Регулярно проходите профилактические осмотры, ведите здоровый образ жизни и не откладывайте визит к врачу при тревожных симптомах. Ранняя диагностика спасает жизни.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-5 text-center" style={{ background: C.bg, borderTop: `1px solid ${C.border}` }}>
        <p className="text-xs font-mono" style={{ color: C.muted }}>
          // буклет_по_информатике · 2026 · данные ВОЗ и Минздрава РФ
        </p>
      </footer>
    </div>
  );
}
