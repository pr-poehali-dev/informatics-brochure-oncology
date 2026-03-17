import Icon from "@/components/ui/icon";

type IconName = string;

const IMG_HERO = "https://cdn.poehali.dev/projects/7ece33ad-244e-45e6-8f31-63861c46713a/files/3b0a698e-fc20-44ea-bd7b-b52856433901.jpg";
const IMG_LIFESTYLE = "https://cdn.poehali.dev/projects/7ece33ad-244e-45e6-8f31-63861c46713a/files/00fe9278-67f4-43ad-8d2a-927450cabb6d.jpg";
const IMG_TREATMENT = "https://cdn.poehali.dev/projects/7ece33ad-244e-45e6-8f31-63861c46713a/files/ba56cfa4-807f-4fda-87e5-21e61ecd1095.jpg";

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
  { icon: "Ban", color: "bg-red-100 text-red-600", title: "Откажитесь от курения", desc: "Это снижает риск рака лёгких на 90%. Даже после 10 лет курения — отказ эффективен." },
  { icon: "Apple", color: "bg-green-100 text-green-600", title: "Здоровое питание", desc: "5 порций овощей и фруктов в день. Ограничьте красное мясо до 500 г в неделю." },
  { icon: "Dumbbell", color: "bg-blue-100 text-blue-600", title: "Физическая активность", desc: "150 минут умеренных нагрузок в неделю снижают риск рака на 20–30%." },
  { icon: "Scale", color: "bg-purple-100 text-purple-600", title: "Контроль веса", desc: "Ожирение связано с 13 видами рака. Поддерживайте ИМТ в норме (18,5–24,9)." },
  { icon: "Syringe", color: "bg-teal-100 text-teal-600", title: "Вакцинация", desc: "Прививка от ВПЧ защищает от рака шейки матки. Вакцина от гепатита В — от рака печени." },
  { icon: "CalendarCheck", color: "bg-indigo-100 text-indigo-600", title: "Регулярные обследования", desc: "Онкоскрининг выявляет рак на ранней стадии, когда лечение наиболее эффективно." },
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
  { icon: "Scissors", title: "Хирургическое лечение", desc: "Современная роботизированная хирургия da Vinci позволяет удалять опухоли с минимальными разрезами. Лапароскопические операции сокращают восстановление до 3–5 дней." },
  { icon: "Radio", title: "Лучевая терапия", desc: "Протонная и стереотаксическая радиохирургия (Gamma Knife) точечно уничтожают опухоль, не повреждая здоровые ткани." },
  { icon: "FlaskConical", title: "Химиотерапия", desc: "Таргетная терапия блокирует конкретные молекулы роста опухоли. Меньше побочных эффектов, чем у классической химиотерапии." },
  { icon: "ShieldCheck", title: "Иммунотерапия", desc: "Препараты-ингибиторы контрольных точек (PD-1/PD-L1) «включают» иммунную систему для борьбы с раком. Революция в онкологии XXI века." },
  { icon: "Dna", title: "Генная терапия", desc: "CAR-T клеточная терапия — собственные клетки пациента перепрограммируются для уничтожения раковых клеток. Применяется при лейкемии." },
  { icon: "Microscope", title: "Ранняя диагностика", desc: "Жидкая биопсия позволяет обнаружить рак по анализу крови. МРТ всего тела за 1 час выявляет опухоли размером от 5 мм." },
];

const contacts = [
  { icon: "Phone", label: "Горячая линия онкологической помощи", value: "8-800-200-2-200", sub: "Бесплатно по всей России, круглосуточно" },
  { icon: "MapPin", label: "НМИЦ онкологии им. Блохина", value: "Москва, Каширское ш., 24", sub: "nmicr.ru · +7 (499) 324-18-01" },
  { icon: "Globe", label: "Онкологический регистр России", value: "oncologyregistry.ru", sub: "Статистика, данные, исследования" },
  { icon: "Heart", label: "Фонд «Подари жизнь»", value: "podari-zhizn.ru", sub: "Помощь детям с онкологическими заболеваниями" },
  { icon: "BookOpen", label: "Российское общество онкологов", value: "rosoncoweb.ru", sub: "Клинические рекомендации и стандарты лечения" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "Montserrat, sans-serif" }}>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f3460 0%, #16537e 40%, #1a936f 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, #4fc3f7 0%, transparent 70%)", transform: "translate(-30%, -30%)" }}></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full" style={{ background: "radial-gradient(circle, #26a69a 0%, transparent 70%)", transform: "translate(30%, 30%)" }}></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <Icon name="BookOpen" size={16} />
              Информационный буклет · 2026
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Профилактика<br />
              <span style={{ color: "#7dd3c8" }}>онкологических</span><br />
              заболеваний
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-lg">
              Каждый третий случай онкологического заболевания можно предотвратить. Знание — первый шаг к здоровью.
            </p>
            <div className="flex flex-wrap gap-8">
              {[["18,1 млн", "новых случаев рака в год"], ["9,6 млн", "смертей ежегодно"], ["40%", "случаев можно предотвратить"]].map(([num, label]) => (
                <div key={num} className="text-center">
                  <div className="text-2xl font-extrabold" style={{ color: "#7dd3c8" }}>{num}</div>
                  <div className="text-xs text-blue-200 mt-1 max-w-[110px]">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 w-full lg:w-96">
            <img src={IMG_HERO} alt="Профилактика онкологии" className="rounded-2xl shadow-2xl w-full h-64 lg:h-80 object-cover" style={{ border: "4px solid rgba(255,255,255,0.2)" }} />
          </div>
        </div>
      </section>

      {/* ЧТО ТАКОЕ РАК */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(to bottom, #0f3460, #1a936f)" }}></div>
          <h2 className="text-2xl font-bold text-gray-800">Что такое онкологические заболевания?</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="text-base">
              <strong className="text-gray-800">Онкологические заболевания</strong> — это группа болезней, при которых клетки организма начинают неконтролируемо делиться, образуя злокачественные опухоли. В мире насчитывается более <strong className="text-blue-700">200 видов рака</strong>.
            </p>
            <p className="text-base">
              Злокачественные клетки способны прорастать в соседние ткани и распространяться через кровь и лимфу — этот процесс называется <strong className="text-blue-700">метастазирование</strong>.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { icon: "TrendingUp", val: "2-е место", label: "среди причин смертности в мире" },
                { icon: "Users", val: "53,5 млн", label: "человек живут с онкологией" },
                { icon: "Target", val: "90%", label: "успех лечения на 1–2 стадии" },
                { icon: "Clock", val: "10 лет", label: "средний срок развития опухоли" },
              ].map(({ icon, val, label }) => (
                <div key={val} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <Icon name={icon as IconName} size={20} className="text-blue-600 mb-2" />
                  <div className="text-xl font-bold text-blue-800">{val}</div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 border border-teal-100">
            <h3 className="font-bold text-gray-800 mb-4 text-lg">Наиболее распространённые виды рака</h3>
            {[
              { name: "Рак лёгкого", pct: 12.4, color: "#0f3460" },
              { name: "Рак молочной железы", pct: 11.7, color: "#16537e" },
              { name: "Рак толстого кишечника", pct: 10.2, color: "#1a936f" },
              { name: "Рак простаты", pct: 7.3, color: "#26a69a" },
              { name: "Рак желудка", pct: 5.6, color: "#4fc3f7" },
            ].map(({ name, pct, color }) => (
              <div key={name} className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 font-medium">{name}</span>
                  <span className="text-gray-500">{pct}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${pct * 7}%`, background: color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФАКТОРЫ РИСКА */}
      <section style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e0f7fa 100%)" }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(to bottom, #0f3460, #1a936f)" }}></div>
            <h2 className="text-2xl font-bold text-gray-800">Факторы риска развития рака</h2>
          </div>
          <p className="text-gray-600 mb-8 ml-5">Большинство факторов риска — <strong>управляемые</strong>. Изменив образ жизни, вы можете значительно снизить вероятность заболевания.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {riskFactors.map(({ icon, label, desc }) => (
              <div key={label} className="bg-white rounded-xl p-5 shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: "linear-gradient(135deg, #0f3460, #1a936f)" }}>
                  <Icon name={icon as IconName} size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{label}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПЕРВИЧНАЯ ПРОФИЛАКТИКА */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(to bottom, #0f3460, #1a936f)" }}></div>
          <h2 className="text-2xl font-bold text-gray-800">Методы первичной профилактики</h2>
        </div>
        <p className="text-gray-500 mb-10 ml-5">Здоровый образ жизни — самый эффективный способ защиты от рака</p>
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <img src={IMG_LIFESTYLE} alt="Здоровый образ жизни" className="rounded-2xl w-full h-56 object-cover shadow-lg" />
          <div className="grid sm:grid-cols-2 gap-4">
            {prevention.slice(0, 4).map(({ icon, color, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 ${color}`}>
                  <Icon name={icon as IconName} size={18} />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {prevention.slice(4).map(({ icon, color, title, desc }) => (
            <div key={title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
              <div className={`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center ${color}`}>
                <Icon name={icon as IconName} size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ТРЕВОЖНЫЕ СИГНАЛЫ */}
      <section style={{ background: "linear-gradient(135deg, #fff3e0 0%, #fce4ec 100%)" }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 rounded-full bg-red-400"></div>
            <h2 className="text-2xl font-bold text-gray-800">Тревожные симптомы</h2>
          </div>
          <p className="text-gray-600 mb-8 ml-5">При появлении любого из этих симптомов <strong className="text-red-600">немедленно обратитесь к врачу</strong></p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {symptoms.map((symptom, i) => (
              <div key={i} className="bg-white rounded-xl p-4 flex items-start gap-3 shadow-sm border border-red-50 hover:border-red-200 transition-colors">
                <div className="w-6 h-6 rounded-full bg-red-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                  <Icon name="AlertTriangle" size={12} className="text-red-500" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{symptom}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6 flex gap-4">
            <Icon name="Info" size={24} className="text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-red-700 mb-1">Важно помнить!</h3>
              <p className="text-sm text-red-600 leading-relaxed">
                Наличие этих симптомов не обязательно означает онкологию — они могут быть признаком других заболеваний. Однако своевременная диагностика критически важна: на I–II стадии рак излечим в <strong>85–90% случаев</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* СОВРЕМЕННЫЕ МЕТОДЫ ЛЕЧЕНИЯ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(to bottom, #0f3460, #1a936f)" }}></div>
          <h2 className="text-2xl font-bold text-gray-800">Современные методы лечения</h2>
        </div>
        <p className="text-gray-500 mb-10 ml-5">Наука не стоит на месте — ежегодно появляются новые эффективные методы борьбы с онкологией</p>
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <div className="grid sm:grid-cols-2 gap-4">
            {treatments.map(({ icon, title, desc }) => (
              <div key={title} className="rounded-xl p-5 border border-blue-100 bg-white hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: "linear-gradient(135deg, #0f3460, #1a936f)" }}>
                  <Icon name={icon as IconName} size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-2">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <img src={IMG_TREATMENT} alt="Современные методы лечения" className="rounded-2xl w-full h-56 object-cover shadow-lg" />
            <div className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, #0f3460, #1a936f)" }}>
              <h3 className="font-bold text-white mb-3 text-lg">Успехи современной онкологии</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["63%", "5-летняя выживаемость при всех видах рака"],
                  ["98%", "выживаемость при раке кожи (1 стадия)"],
                  ["+33%", "рост выживаемости за последние 30 лет"],
                  ["2 млн", "новых выживших пациентов ежегодно"],
                ].map(([num, label]) => (
                  <div key={num} className="bg-white/10 rounded-xl p-3">
                    <div className="text-xl font-extrabold text-white">{num}</div>
                    <div className="text-xs text-blue-200 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section style={{ background: "linear-gradient(135deg, #0f3460 0%, #16537e 60%, #1a936f 100%)" }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 rounded-full bg-teal-300"></div>
            <h2 className="text-2xl font-bold text-white">Контакты и справочная информация</h2>
          </div>
          <p className="text-blue-200 mb-8 ml-5">Организации, куда можно обратиться за помощью и информацией</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {contacts.map(({ icon, label, value, sub }) => (
              <div key={label} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-colors">
                <Icon name={icon as IconName} size={20} className="text-teal-300 mb-3" />
                <h3 className="text-white font-semibold text-sm mb-1">{label}</h3>
                <p className="font-bold mb-1" style={{ color: "#7dd3c8" }}>{value}</p>
                <p className="text-blue-200 text-xs">{sub}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
            <Icon name="Heart" size={28} className="text-teal-300 mx-auto mb-3" />
            <p className="text-white font-semibold mb-2 text-lg">Ваше здоровье — в ваших руках</p>
            <p className="text-blue-200 text-sm max-w-2xl mx-auto leading-relaxed">
              Регулярно проходите профилактические осмотры, ведите здоровый образ жизни и не откладывайте визит к врачу при тревожных симптомах. Ранняя диагностика спасает жизни.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 py-6 text-center">
        <p className="text-gray-400 text-sm">
          Информационный буклет по дисциплине «Информатика» · 2026 · Данные ВОЗ и Минздрава РФ
        </p>
      </footer>
    </div>
  );
}