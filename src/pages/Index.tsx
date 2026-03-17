type IconName = string;

const IMG_HERO = "https://cdn.poehali.dev/projects/7ece33ad-244e-45e6-8f31-63861c46713a/files/3b0a698e-fc20-44ea-bd7b-b52856433901.jpg";
const IMG_LIFESTYLE = "https://cdn.poehali.dev/projects/7ece33ad-244e-45e6-8f31-63861c46713a/files/00fe9278-67f4-43ad-8d2a-927450cabb6d.jpg";
const IMG_TREATMENT = "https://cdn.poehali.dev/projects/7ece33ad-244e-45e6-8f31-63861c46713a/files/ba56cfa4-807f-4fda-87e5-21e61ecd1095.jpg";

const riskFactors = [
  { num: "1", label: "Курение", desc: "Вызывает до 30% всех случаев рака" },
  { num: "2", label: "Алкоголь", desc: "Повышает риск рака печени и ротовой полости" },
  { num: "3", label: "УФ-излучение", desc: "Основная причина рака кожи" },
  { num: "4", label: "Неправильное питание", desc: "Избыток красного мяса и жиров" },
  { num: "5", label: "Малоподвижный образ жизни", desc: "Риск рака кишечника и молочной железы" },
  { num: "6", label: "Воздействие канцерогенов", desc: "Асбест, радон, химические вещества" },
  { num: "7", label: "Наследственность", desc: "Генетические мутации BRCA1/BRCA2" },
  { num: "8", label: "Инфекционные агенты", desc: "ВПЧ, гепатит В и С, Helicobacter pylori" },
];

const prevention = [
  { mark: "✓", title: "Отказ от курения", desc: "Снижает риск рака лёгких на 90%. Эффективен даже после многолетнего стажа." },
  { mark: "✓", title: "Сбалансированное питание", desc: "Не менее 5 порций овощей и фруктов в день. Ограничить красное мясо до 500 г/нед." },
  { mark: "✓", title: "Физическая активность", desc: "Не менее 150 мин. умеренных нагрузок в неделю снижают риск рака на 20–30%." },
  { mark: "✓", title: "Контроль массы тела", desc: "Ожирение связано с 13 видами рака. Норма ИМТ: 18,5–24,9 кг/м²." },
  { mark: "✓", title: "Вакцинация", desc: "Против ВПЧ — защита от рака шейки матки; против гепатита В — от рака печени." },
  { mark: "✓", title: "Регулярные профосмотры", desc: "Онкоскрининг позволяет выявить рак на ранней (излечимой) стадии." },
];

const symptoms = [
  "Необъяснимая потеря массы тела (более 5 кг за 1 мес.)",
  "Длительная немотивированная усталость",
  "Появление новых или изменение имеющихся родинок",
  "Затяжной кашель, охриплость голоса",
  "Уплотнения, шишки в любой части тела",
  "Кровотечения или патологические выделения",
  "Длительные боли без установленной причины",
  "Нарушения глотания, расстройства пищеварения",
  "Незаживающие язвы или раны на коже",
];

const treatments = [
  { num: "1", title: "Хирургическое лечение", desc: "Роботизированные операции (da Vinci), лапароскопия. Реабилитация — 3–5 дней." },
  { num: "2", title: "Лучевая терапия", desc: "Протонная терапия, Gamma Knife. Точечное воздействие без повреждения здоровых тканей." },
  { num: "3", title: "Лекарственная терапия", desc: "Таргетная и химиотерапия. Блокируют молекулы роста опухоли." },
  { num: "4", title: "Иммунотерапия", desc: "Ингибиторы PD-1/PD-L1 активируют иммунитет для борьбы с опухолью." },
  { num: "5", title: "Генная (клеточная) терапия", desc: "CAR-T терапия: перепрограммирование клеток пациента. Применяется при лейкемии." },
  { num: "6", title: "Ранняя диагностика", desc: "Жидкая биопсия (анализ крови), МРТ всего тела — выявление опухоли от 5 мм." },
];

const contacts = [
  { label: "Горячая линия онкологической помощи", value: "8-800-200-2-200", sub: "Звонок бесплатный, круглосуточно" },
  { label: "НМИЦ онкологии им. Н.Н. Блохина", value: "+7 (499) 324-18-01", sub: "Москва, Каширское ш., 24 · nmicr.ru" },
  { label: "Онкологический регистр России", value: "oncologyregistry.ru", sub: "Статистика и исследования" },
  { label: "Благотворительный фонд «Подари жизнь»", value: "podari-zhizn.ru", sub: "Помощь детям с онкологическими заболеваниями" },
  { label: "Российское общество онкологов", value: "rosoncoweb.ru", sub: "Клинические рекомендации, стандарты лечения" },
];

export default function Index() {
  return (
    <div style={{ background: "#e8e8e8", minHeight: "100vh", fontFamily: "'Times New Roman', Times, serif", padding: "32px 16px" }}>

      {/* Лист бумаги */}
      <div style={{ maxWidth: 820, margin: "0 auto", background: "#ffffff", boxShadow: "0 4px 24px rgba(0,0,0,0.18)", borderRadius: 2 }}>

        {/* ШАП КА */}
        <div style={{ borderBottom: "3px solid #1a3a6b", padding: "28px 40px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
            <div style={{ flex: 1 }}>
              {/* Гриф */}
              <p style={{ fontSize: 10, color: "#555", marginBottom: 18, lineHeight: 1.5 }}>
                МИНИСТЕРСТВО ЗДРАВООХРАНЕНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ<br />
                Информационный буклет для студентов · 2026 г.
              </p>
              <h1 style={{ fontSize: 22, fontWeight: "bold", color: "#1a3a6b", lineHeight: 1.3, margin: "0 0 8px" }}>
                ПРОФИЛАКТИКА<br />ОНКОЛОГИЧЕСКИХ<br />ЗАБОЛЕВАНИЙ
              </h1>
              <p style={{ fontSize: 12, color: "#333", marginTop: 10, lineHeight: 1.6 }}>
                По данным Всемирной организации здравоохранения,<br />
                <strong>40% случаев рака можно предотвратить</strong> при соблюдении<br />
                принципов здорового образа жизни.
              </p>
              {/* Статистика */}
              <div style={{ display: "flex", gap: 24, marginTop: 16, paddingTop: 14, borderTop: "1px solid #ccc" }}>
                {[["18,1 млн", "новых случаев/год"], ["9,6 млн", "смертей ежегодно"], ["40%", "можно предотвратить"]].map(([n, l]) => (
                  <div key={n} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 18, fontWeight: "bold", color: "#1a3a6b" }}>{n}</div>
                    <div style={{ fontSize: 9, color: "#666", marginTop: 2, maxWidth: 80 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flexShrink: 0 }}>
              <img src={IMG_HERO} alt="" style={{ width: 180, height: 150, objectFit: "cover", border: "1px solid #aaa" }} />
              <p style={{ fontSize: 9, color: "#888", textAlign: "center", marginTop: 3 }}>Рис. 1. Профилактика онкологии</p>
            </div>
          </div>
        </div>

        {/* ОСНОВНОЕ СОДЕРЖАНИЕ */}
        <div style={{ padding: "24px 40px" }}>

          {/* 1. ЧТО ТАКОЕ РАК */}
          <section style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 14, fontWeight: "bold", color: "#1a3a6b", borderBottom: "1px solid #1a3a6b", paddingBottom: 4, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              1. Определение и основные факты
            </h2>
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 12, lineHeight: 1.7, color: "#222", marginBottom: 10, textIndent: "1.5em" }}>
                  <strong>Онкологические заболевания</strong> — группа болезней, при которых клетки организма начинают неконтролируемо делиться и образуют злокачественные опухоли. В мире насчитывается более <strong>200 видов</strong> онкологических заболеваний.
                </p>
                <p style={{ fontSize: 12, lineHeight: 1.7, color: "#222", textIndent: "1.5em" }}>
                  Злокачественные клетки способны прорастать в соседние органы и распространяться через кровь и лимфатическую систему — процесс, именуемый <strong>метастазированием</strong>.
                </p>
              </div>
              {/* Мини-таблица статистики */}
              <div style={{ flexShrink: 0, width: 220 }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10 }}>
                  <thead>
                    <tr style={{ background: "#1a3a6b" }}>
                      <th style={{ color: "#fff", padding: "4px 8px", textAlign: "left", fontWeight: "bold" }}>Показатель</th>
                      <th style={{ color: "#fff", padding: "4px 8px", textAlign: "center", fontWeight: "bold" }}>Значение</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Место среди причин смерти", "2-е"],
                      ["Живут с онкологией", "53,5 млн"],
                      ["Успех лечения (I–II ст.)", "85–90%"],
                      ["Срок развития опухоли", "~10 лет"],
                    ].map(([k, v], i) => (
                      <tr key={k} style={{ background: i % 2 === 0 ? "#f0f4fb" : "#fff" }}>
                        <td style={{ padding: "4px 8px", color: "#333", borderBottom: "1px solid #ddd" }}>{k}</td>
                        <td style={{ padding: "4px 8px", color: "#1a3a6b", fontWeight: "bold", textAlign: "center", borderBottom: "1px solid #ddd" }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Распространённые виды */}
            <div style={{ marginTop: 14, padding: "10px 14px", background: "#f0f4fb", border: "1px solid #b8c8e8", borderRadius: 2 }}>
              <p style={{ fontSize: 11, fontWeight: "bold", color: "#1a3a6b", marginBottom: 8 }}>Наиболее распространённые виды рака (доля от общего числа случаев):</p>
              {[
                ["Рак лёгкого", 12.4],
                ["Рак молочной железы", 11.7],
                ["Рак толстого кишечника", 10.2],
                ["Рак предстательной железы", 7.3],
                ["Рак желудка", 5.6],
              ].map(([name, pct]) => (
                <div key={name as string} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                  <span style={{ fontSize: 10, width: 200, color: "#333" }}>{name}</span>
                  <div style={{ flex: 1, height: 10, background: "#dde6f5", borderRadius: 1, overflow: "hidden" }}>
                    <div style={{ height: "100%", background: "#1a3a6b", width: `${(pct as number) * 7}%` }}></div>
                  </div>
                  <span style={{ fontSize: 10, width: 36, textAlign: "right", color: "#1a3a6b", fontWeight: "bold" }}>{pct}%</span>
                </div>
              ))}
            </div>
          </section>

          {/* 2. ФАКТОРЫ РИСКА */}
          <section style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 14, fontWeight: "bold", color: "#1a3a6b", borderBottom: "1px solid #1a3a6b", paddingBottom: 4, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              2. Факторы риска развития онкологических заболеваний
            </h2>
            <p style={{ fontSize: 12, lineHeight: 1.7, color: "#222", marginBottom: 12, textIndent: "1.5em" }}>
              Большинство факторов риска являются <strong>модифицируемыми</strong> (управляемыми). Изменение образа жизни позволяет существенно снизить вероятность развития онкологических заболеваний.
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
              <thead>
                <tr style={{ background: "#1a3a6b" }}>
                  <th style={{ color: "#fff", padding: "5px 10px", textAlign: "center", width: 30 }}>№</th>
                  <th style={{ color: "#fff", padding: "5px 10px", textAlign: "left", width: 200 }}>Фактор риска</th>
                  <th style={{ color: "#fff", padding: "5px 10px", textAlign: "left" }}>Характеристика</th>
                </tr>
              </thead>
              <tbody>
                {riskFactors.map(({ num, label, desc }, i) => (
                  <tr key={num} style={{ background: i % 2 === 0 ? "#f0f4fb" : "#fff" }}>
                    <td style={{ padding: "5px 10px", textAlign: "center", color: "#1a3a6b", fontWeight: "bold", borderBottom: "1px solid #ddd" }}>{num}</td>
                    <td style={{ padding: "5px 10px", fontWeight: "bold", color: "#222", borderBottom: "1px solid #ddd" }}>{label}</td>
                    <td style={{ padding: "5px 10px", color: "#444", borderBottom: "1px solid #ddd" }}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* 3. ПРОФИЛАКТИКА */}
          <section style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 14, fontWeight: "bold", color: "#1a3a6b", borderBottom: "1px solid #1a3a6b", paddingBottom: 4, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              3. Методы первичной профилактики и здоровый образ жизни
            </h2>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                {prevention.map(({ mark, title, desc }) => (
                  <div key={title} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#1a7a3a", fontWeight: "bold", fontSize: 14, flexShrink: 0, marginTop: 1 }}>{mark}</span>
                    <div>
                      <span style={{ fontSize: 12, fontWeight: "bold", color: "#222" }}>{title}. </span>
                      <span style={{ fontSize: 12, color: "#444", lineHeight: 1.6 }}>{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ flexShrink: 0 }}>
                <img src={IMG_LIFESTYLE} alt="" style={{ width: 170, height: 130, objectFit: "cover", border: "1px solid #aaa" }} />
                <p style={{ fontSize: 9, color: "#888", textAlign: "center", marginTop: 3 }}>Рис. 2. Здоровый образ жизни</p>
              </div>
            </div>
          </section>

          {/* 4. ТРЕВОЖНЫЕ СИМПТОМЫ */}
          <section style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 14, fontWeight: "bold", color: "#1a3a6b", borderBottom: "1px solid #1a3a6b", paddingBottom: 4, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              4. Тревожные сигналы и симптомы для обращения к врачу
            </h2>
            {/* Рамка-предупреждение */}
            <div style={{ border: "2px solid #c0392b", padding: "10px 14px", marginBottom: 14, background: "#fff8f8" }}>
              <p style={{ fontSize: 12, color: "#c0392b", fontWeight: "bold", margin: 0 }}>
                ⚠ ВНИМАНИЕ! При появлении любого из перечисленных симптомов необходимо незамедлительно обратиться к врачу-онкологу или терапевту.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 20px" }}>
              {symptoms.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 6, alignItems: "flex-start", padding: "4px 0", borderBottom: "1px dotted #ccc" }}>
                  <span style={{ color: "#c0392b", fontWeight: "bold", fontSize: 12, flexShrink: 0 }}>•</span>
                  <span style={{ fontSize: 11, color: "#333", lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12, padding: "8px 12px", background: "#f0f4fb", border: "1px solid #b8c8e8", fontSize: 11, color: "#333", lineHeight: 1.6 }}>
              <strong>Примечание:</strong> перечисленные симптомы не являются специфичными и могут наблюдаться при других заболеваниях. Однако на I–II стадии онкологические заболевания поддаются лечению в <strong>85–90% случаев</strong>.
            </div>
          </section>

          {/* 5. МЕТОДЫ ЛЕЧЕНИЯ */}
          <section style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 14, fontWeight: "bold", color: "#1a3a6b", borderBottom: "1px solid #1a3a6b", paddingBottom: 4, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              5. Современные методы лечения онкологических заболеваний
            </h2>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 14 }}>
              <div style={{ flex: 1 }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                  <thead>
                    <tr style={{ background: "#1a3a6b" }}>
                      <th style={{ color: "#fff", padding: "5px 8px", textAlign: "center", width: 28 }}>№</th>
                      <th style={{ color: "#fff", padding: "5px 8px", textAlign: "left", width: 170 }}>Метод</th>
                      <th style={{ color: "#fff", padding: "5px 8px", textAlign: "left" }}>Описание</th>
                    </tr>
                  </thead>
                  <tbody>
                    {treatments.map(({ num, title, desc }, i) => (
                      <tr key={num} style={{ background: i % 2 === 0 ? "#f0f4fb" : "#fff" }}>
                        <td style={{ padding: "5px 8px", textAlign: "center", color: "#1a3a6b", fontWeight: "bold", borderBottom: "1px solid #ddd" }}>{num}</td>
                        <td style={{ padding: "5px 8px", fontWeight: "bold", color: "#222", borderBottom: "1px solid #ddd" }}>{title}</td>
                        <td style={{ padding: "5px 8px", color: "#444", borderBottom: "1px solid #ddd" }}>{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ flexShrink: 0 }}>
                <img src={IMG_TREATMENT} alt="" style={{ width: 160, height: 130, objectFit: "cover", border: "1px solid #aaa" }} />
                <p style={{ fontSize: 9, color: "#888", textAlign: "center", marginTop: 3 }}>Рис. 3. Современная онкология</p>
              </div>
            </div>
            {/* Статистика выживаемости */}
            <div style={{ background: "#f0f4fb", border: "1px solid #b8c8e8", padding: "10px 14px" }}>
              <p style={{ fontSize: 11, fontWeight: "bold", color: "#1a3a6b", marginBottom: 8 }}>Статистика выживаемости (5-летний период):</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
                {[["63%", "общая 5-летняя выживаемость"], ["98%", "рак кожи, I стадия"], ["+33%", "рост выживаемости за 30 лет"], ["2 млн", "новых выживших/год"]].map(([n, l]) => (
                  <div key={n} style={{ textAlign: "center", padding: "8px 4px", background: "#fff", border: "1px solid #ccd8ee" }}>
                    <div style={{ fontSize: 18, fontWeight: "bold", color: "#1a3a6b" }}>{n}</div>
                    <div style={{ fontSize: 9, color: "#555", marginTop: 3 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. КОНТАКТЫ */}
          <section style={{ marginBottom: 10 }}>
            <h2 style={{ fontSize: 14, fontWeight: "bold", color: "#1a3a6b", borderBottom: "1px solid #1a3a6b", paddingBottom: 4, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              6. Контакты медицинских организаций и справочная информация
            </h2>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
              <thead>
                <tr style={{ background: "#1a3a6b" }}>
                  <th style={{ color: "#fff", padding: "5px 10px", textAlign: "left" }}>Организация</th>
                  <th style={{ color: "#fff", padding: "5px 10px", textAlign: "left", width: 200 }}>Контакт</th>
                  <th style={{ color: "#fff", padding: "5px 10px", textAlign: "left" }}>Примечание</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map(({ label, value, sub }, i) => (
                  <tr key={label} style={{ background: i % 2 === 0 ? "#f0f4fb" : "#fff" }}>
                    <td style={{ padding: "5px 10px", color: "#222", borderBottom: "1px solid #ddd", fontWeight: "bold" }}>{label}</td>
                    <td style={{ padding: "5px 10px", color: "#1a3a6b", borderBottom: "1px solid #ddd", fontWeight: "bold" }}>{value}</td>
                    <td style={{ padding: "5px 10px", color: "#555", borderBottom: "1px solid #ddd" }}>{sub}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        {/* ПОДВАЛ */}
        <div style={{ borderTop: "3px solid #1a3a6b", padding: "12px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 9, color: "#666", margin: 0 }}>
            Источники: Всемирная организация здравоохранения (ВОЗ), Минздрав РФ, НМИЦ онкологии им. Н.Н. Блохина · 2026 г.
          </p>
          <p style={{ fontSize: 9, color: "#666", margin: 0 }}>Стр. 1 из 1</p>
        </div>
      </div>
    </div>
  );
}
