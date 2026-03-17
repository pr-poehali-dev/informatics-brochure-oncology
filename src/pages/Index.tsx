const IMG_HERO = "https://cdn.poehali.dev/projects/7ece33ad-244e-45e6-8f31-63861c46713a/files/3b0a698e-fc20-44ea-bd7b-b52856433901.jpg";
const IMG_LIFESTYLE = "https://cdn.poehali.dev/projects/7ece33ad-244e-45e6-8f31-63861c46713a/files/00fe9278-67f4-43ad-8d2a-927450cabb6d.jpg";
const IMG_TREATMENT = "https://cdn.poehali.dev/projects/7ece33ad-244e-45e6-8f31-63861c46713a/files/ba56cfa4-807f-4fda-87e5-21e61ecd1095.jpg";

const BLUE = "#1a3a8a";
const LBLUE = "#dbeafe";
const GREEN = "#166534";
const LGREEN = "#dcfce7";
const RED = "#9f1239";
const LRED = "#fff1f2";

const fold: React.CSSProperties = {
  borderLeft: "2px dashed #b0bec5",
};

export default function Index() {
  return (
    <div style={{ background: "#c9cdd4", minHeight: "100vh", padding: "32px 12px", display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "'Arial', 'Calibri', sans-serif" }}>

      {/* Подпись сверху */}
      <p style={{ fontSize: 11, color: "#555", marginBottom: 10, letterSpacing: "0.03em" }}>
        📄 Складной буклет — лицевая сторона
      </p>

      {/* ===== ЛИЦЕВАЯ СТОРОНА (3 панели) ===== */}
      <div style={{ display: "flex", width: "100%", maxWidth: 960, background: "#fff", boxShadow: "0 6px 32px rgba(0,0,0,0.22)", borderRadius: 3 }}>

        {/* ПАНЕЛЬ 1 — ОБЛОЖКА (правая при сложении) */}
        <div style={{ flex: 1, background: `linear-gradient(170deg, ${BLUE} 0%, #1e40af 60%, #0369a1 100%)`, padding: "28px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
          {/* Декор-круги */}
          <div style={{ position: "absolute", top: -40, right: -40, width: 130, height: 130, borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />
          <div style={{ position: "absolute", bottom: -30, left: -30, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

          <div style={{ textAlign: "center", position: "relative" }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>🎗️</div>
            <div style={{ width: 40, height: 3, background: "#93c5fd", margin: "0 auto 14px", borderRadius: 2 }} />
            <h1 style={{ fontSize: 17, fontWeight: "bold", color: "#fff", lineHeight: 1.3, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Профилактика<br />онкологических<br />заболеваний
            </h1>
            <div style={{ width: 40, height: 3, background: "#93c5fd", margin: "12px auto", borderRadius: 2 }} />
            <p style={{ fontSize: 10, color: "#bfdbfe", lineHeight: 1.5 }}>
              Информационный буклет<br />для студентов · 2026 г.
            </p>
          </div>

          <img src={IMG_HERO} alt="" style={{ width: "100%", height: 110, objectFit: "cover", borderRadius: 3, border: "2px solid rgba(255,255,255,0.25)", margin: "16px 0" }} />

          <div style={{ width: "100%", position: "relative" }}>
            {[["18,1 млн", "новых случаев/год"], ["40%", "можно предотвратить"], ["90%", "излечимость на I ст."]].map(([n, l]) => (
              <div key={n} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 0", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                <span style={{ fontSize: 14, fontWeight: "bold", color: "#93c5fd" }}>{n}</span>
                <span style={{ fontSize: 9, color: "#bfdbfe", textAlign: "right", maxWidth: 100 }}>{l}</span>
              </div>
            ))}
            <p style={{ fontSize: 8, color: "rgba(255,255,255,0.5)", marginTop: 10, textAlign: "center" }}>
              Данные ВОЗ · Минздрав РФ
            </p>
          </div>
        </div>

        {/* ЛИНИЯ СГИБА */}
        <div style={{ width: 1, ...fold }} />

        {/* ПАНЕЛЬ 2 — КОНТАКТЫ (средняя при сложении — видна сзади) */}
        <div style={{ flex: 1, padding: "22px 18px", display: "flex", flexDirection: "column", background: "#f8faff" }}>
          <div style={{ background: BLUE, borderRadius: 3, padding: "7px 12px", marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 14 }}>📞</span>
            <span style={{ fontSize: 12, fontWeight: "bold", color: "#fff" }}>Контакты и помощь</span>
          </div>

          {[
            { e: "☎️", label: "Горячая линия", val: "8-800-200-2-200", sub: "бесплатно · круглосуточно" },
            { e: "🏥", label: "НМИЦ им. Блохина", val: "+7 (499) 324-18-01", sub: "Москва, Каширское ш., 24" },
            { e: "🌐", label: "Онкорегистр России", val: "oncologyregistry.ru", sub: "статистика и данные" },
            { e: "❤️", label: "Фонд «Подари жизнь»", val: "podari-zhizn.ru", sub: "помощь детям" },
            { e: "📚", label: "Общество онкологов", val: "rosoncoweb.ru", sub: "клинические рекомендации" },
          ].map(({ e, label, val, sub }) => (
            <div key={label} style={{ marginBottom: 10, padding: "8px 10px", background: "#fff", border: `1px solid ${LBLUE}`, borderRadius: 3, borderLeft: `3px solid ${BLUE}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
                <span style={{ fontSize: 13 }}>{e}</span>
                <span style={{ fontSize: 10, color: "#555", fontWeight: "bold" }}>{label}</span>
              </div>
              <div style={{ fontSize: 11, fontWeight: "bold", color: BLUE }}>{val}</div>
              <div style={{ fontSize: 9, color: "#888" }}>{sub}</div>
            </div>
          ))}

          <div style={{ marginTop: "auto", padding: "10px", background: `linear-gradient(135deg, ${BLUE}, #0369a1)`, borderRadius: 3, textAlign: "center" }}>
            <div style={{ fontSize: 16, marginBottom: 4 }}>🎗️</div>
            <p style={{ fontSize: 10, color: "#fff", margin: 0, lineHeight: 1.5 }}>
              <strong>Ваше здоровье —<br />в ваших руках!</strong>
            </p>
            <p style={{ fontSize: 9, color: "#bfdbfe", margin: "4px 0 0" }}>
              Ранняя диагностика спасает жизни
            </p>
          </div>
        </div>

        {/* ЛИНИЯ СГИБА */}
        <div style={{ width: 1, ...fold }} />

        {/* ПАНЕЛЬ 3 — МЕТОДЫ ЛЕЧЕНИЯ */}
        <div style={{ flex: 1, padding: "22px 18px", display: "flex", flexDirection: "column" }}>
          <div style={{ background: "#4c1d95", borderRadius: 3, padding: "7px 12px", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 14 }}>💊</span>
            <span style={{ fontSize: 12, fontWeight: "bold", color: "#fff" }}>Современные методы лечения</span>
          </div>

          <img src={IMG_TREATMENT} alt="" style={{ width: "100%", height: 80, objectFit: "cover", borderRadius: 3, marginBottom: 10 }} />

          {[
            { e: "🤖", t: "Хирургия (da Vinci)", d: "роботизированные операции, восстановление 3–5 дней" },
            { e: "⚡", t: "Лучевая терапия", d: "протонная терапия, Gamma Knife — точечное воздействие" },
            { e: "🧪", t: "Таргетная терапия", d: "блокирует молекулы роста опухоли" },
            { e: "🛡️", t: "Иммунотерапия", d: "PD-1/PD-L1 ингибиторы — революция XXI века" },
            { e: "🧬", t: "CAR-T терапия", d: "клетки пациента против рака (лейкемия)" },
            { e: "🔍", t: "Жидкая биопсия", d: "диагностика рака по анализу крови" },
          ].map(({ e, t, d }) => (
            <div key={t} style={{ display: "flex", gap: 7, marginBottom: 7, alignItems: "flex-start" }}>
              <span style={{ fontSize: 14, flexShrink: 0 }}>{e}</span>
              <div>
                <div style={{ fontSize: 10, fontWeight: "bold", color: "#4c1d95" }}>{t}</div>
                <div style={{ fontSize: 9, color: "#555", lineHeight: 1.4 }}>{d}</div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
            {[["63%", "5-лет. выживаемость"], ["+33%", "рост за 30 лет"], ["98%", "рак кожи, I ст."], ["2 млн", "выживших/год"]].map(([n, l]) => (
              <div key={n} style={{ textAlign: "center", padding: "5px 4px", background: "#f5f3ff", border: "1px solid #ddd8fe", borderRadius: 3 }}>
                <div style={{ fontSize: 13, fontWeight: "bold", color: "#4c1d95" }}>{n}</div>
                <div style={{ fontSize: 8, color: "#666" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== РАЗДЕЛИТЕЛЬ ===== */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0", width: "100%", maxWidth: 960 }}>
        <div style={{ flex: 1, height: 1, background: "#999", opacity: 0.4 }} />
        <span style={{ fontSize: 11, color: "#666", whiteSpace: "nowrap" }}>✂ — линия сгиба — оборотная сторона —</span>
        <div style={{ flex: 1, height: 1, background: "#999", opacity: 0.4 }} />
      </div>

      {/* Подпись снизу */}
      <p style={{ fontSize: 11, color: "#555", marginBottom: 10, letterSpacing: "0.03em" }}>
        📄 Оборотная сторона
      </p>

      {/* ===== ОБОРОТНАЯ СТОРОНА (3 панели) ===== */}
      <div style={{ display: "flex", width: "100%", maxWidth: 960, background: "#fff", boxShadow: "0 6px 32px rgba(0,0,0,0.22)", borderRadius: 3 }}>

        {/* ПАНЕЛЬ 4 — СИМПТОМЫ */}
        <div style={{ flex: 1, padding: "22px 18px", display: "flex", flexDirection: "column", background: LRED }}>
          <div style={{ background: RED, borderRadius: 3, padding: "7px 12px", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 14 }}>🚨</span>
            <div>
              <div style={{ fontSize: 12, fontWeight: "bold", color: "#fff" }}>Тревожные симптомы</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.8)" }}>Немедленно к врачу!</div>
            </div>
          </div>

          <div style={{ padding: "7px 10px", background: "#fff", border: `1px solid ${RED}`, borderRadius: 3, marginBottom: 10 }}>
            <p style={{ fontSize: 10, color: RED, margin: 0, fontWeight: "bold", lineHeight: 1.5 }}>
              ⚠ При появлении любого из симптомов обратитесь к врачу-онкологу или терапевту!
            </p>
          </div>

          {[
            "Необъяснимая потеря веса (&gt;5 кг/мес.)",
            "Длительная усталость без причин",
            "Новые родинки / изменение старых",
            "Затяжной кашель, охриплость",
            "Уплотнения в любой части тела",
            "Кровотечения без видимой причины",
            "Длительные боли неясного генеза",
            "Нарушения глотания, пищеварения",
            "Незаживающие язвы на коже",
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 7, alignItems: "flex-start", padding: "4px 0", borderBottom: "1px dotted #fca5a5" }}>
              <span style={{ color: RED, fontWeight: "bold", flexShrink: 0, fontSize: 11 }}>•</span>
              <span style={{ fontSize: 10, color: "#333", lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: s }} />
            </div>
          ))}

          <div style={{ marginTop: 10, padding: "7px 10px", background: "#fff", border: `1px solid #fca5a5`, borderRadius: 3 }}>
            <p style={{ fontSize: 9, color: "#555", margin: 0, lineHeight: 1.5 }}>
              <strong>Важно:</strong> на I–II стадии рак излечим в <strong style={{ color: RED }}>85–90% случаев</strong>. Не откладывайте!
            </p>
          </div>
        </div>

        {/* ЛИНИЯ СГИБА */}
        <div style={{ width: 1, ...fold }} />

        {/* ПАНЕЛЬ 5 — ПРОФИЛАКТИКА */}
        <div style={{ flex: 1, padding: "22px 18px", display: "flex", flexDirection: "column", background: LGREEN }}>
          <div style={{ background: GREEN, borderRadius: 3, padding: "7px 12px", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 14 }}>✅</span>
            <span style={{ fontSize: 12, fontWeight: "bold", color: "#fff" }}>Первичная профилактика</span>
          </div>

          <img src={IMG_LIFESTYLE} alt="" style={{ width: "100%", height: 75, objectFit: "cover", borderRadius: 3, marginBottom: 10 }} />

          {[
            { e: "🚭", t: "Отказ от курения", d: "снижает риск рака лёгких на 90%" },
            { e: "🥦", t: "Здоровое питание", d: "5 порций овощей/фруктов в день" },
            { e: "🏃", t: "Физическая активность", d: "150 мин/нед. снижают риск на 20–30%" },
            { e: "⚖️", t: "Контроль веса", d: "ожирение → 13 видов рака; ИМТ 18,5–24,9" },
            { e: "💉", t: "Вакцинация", d: "от ВПЧ и гепатита В" },
            { e: "🩺", t: "Проф. осмотры", d: "онкоскрининг — выявление на ранней стадии" },
          ].map(({ e, t, d }) => (
            <div key={t} style={{ display: "flex", gap: 7, marginBottom: 8, padding: "6px 8px", background: "#fff", borderRadius: 3, border: `1px solid ${LGREEN}`, alignItems: "flex-start" }}>
              <span style={{ fontSize: 15, flexShrink: 0 }}>{e}</span>
              <div>
                <div style={{ fontSize: 10, fontWeight: "bold", color: GREEN }}>{t}</div>
                <div style={{ fontSize: 9, color: "#444", lineHeight: 1.4 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ЛИНИЯ СГИБА */}
        <div style={{ width: 1, ...fold }} />

        {/* ПАНЕЛЬ 6 — ФАКТОРЫ РИСКА + ЧТО ТАКОЕ РАК */}
        <div style={{ flex: 1, padding: "22px 18px", display: "flex", flexDirection: "column" }}>
          {/* Определение */}
          <div style={{ background: BLUE, borderRadius: 3, padding: "7px 12px", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 14 }}>🔬</span>
            <span style={{ fontSize: 12, fontWeight: "bold", color: "#fff" }}>Что такое рак?</span>
          </div>
          <p style={{ fontSize: 10, color: "#333", lineHeight: 1.6, marginBottom: 12, padding: "0 2px" }}>
            <strong>Онкологические заболевания</strong> — болезни с неконтролируемым делением клеток (более <strong>200 видов</strong>). Злокачественные клетки распространяются через кровь и лимфу — <strong>метастазирование</strong>.
          </p>

          {/* Факторы риска */}
          <div style={{ background: "#92400e", borderRadius: 3, padding: "7px 12px", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 14 }}>⚠️</span>
            <span style={{ fontSize: 12, fontWeight: "bold", color: "#fff" }}>Факторы риска</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, marginBottom: 10 }}>
            {[
              { e: "🚬", t: "Курение", d: "30% случаев" },
              { e: "🍷", t: "Алкоголь", d: "рак печени" },
              { e: "☀️", t: "УФ-излучение", d: "рак кожи" },
              { e: "🍔", t: "Питание", d: "красное мясо" },
              { e: "🧬", t: "Наследственность", d: "BRCA1/BRCA2" },
              { e: "🏭", t: "Канцерогены", d: "асбест, радон" },
            ].map(({ e, t, d }) => (
              <div key={t} style={{ padding: "5px 6px", background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 3 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 1 }}>
                  <span style={{ fontSize: 11 }}>{e}</span>
                  <span style={{ fontSize: 9, fontWeight: "bold", color: "#92400e" }}>{t}</span>
                </div>
                <div style={{ fontSize: 8, color: "#666" }}>{d}</div>
              </div>
            ))}
          </div>

          {/* Мини-статистика по видам рака */}
          <div style={{ background: LBLUE, border: `1px solid #93c5fd`, borderRadius: 3, padding: "8px 10px" }}>
            <div style={{ fontSize: 9, fontWeight: "bold", color: BLUE, marginBottom: 6 }}>Распространённость:</div>
            {[
              ["Рак лёгкого", 87],
              ["Рак груди", 82],
              ["Рак кишечника", 71],
              ["Рак желудка", 39],
            ].map(([name, w]) => (
              <div key={name as string} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <span style={{ fontSize: 8, color: "#444", width: 90, flexShrink: 0 }}>{name}</span>
                <div style={{ flex: 1, height: 7, background: "#dbeafe", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ height: "100%", background: BLUE, width: `${w}%`, borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p style={{ fontSize: 10, color: "#777", marginTop: 14, textAlign: "center" }}>
        Распечатайте на листе A4, сложите втрое — буклет готов!
      </p>
    </div>
  );
}
