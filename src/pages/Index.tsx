import { useState } from "react";

const IMG_HERO = "https://cdn.poehali.dev/projects/7ece33ad-244e-45e6-8f31-63861c46713a/files/3b0a698e-fc20-44ea-bd7b-b52856433901.jpg";
const IMG_LIFESTYLE = "https://cdn.poehali.dev/projects/7ece33ad-244e-45e6-8f31-63861c46713a/files/00fe9278-67f4-43ad-8d2a-927450cabb6d.jpg";
const IMG_TREATMENT = "https://cdn.poehali.dev/projects/7ece33ad-244e-45e6-8f31-63861c46713a/files/ba56cfa4-807f-4fda-87e5-21e61ecd1095.jpg";

const SLIDES = [
  // 1 — Титульный
  {
    id: 1,
    type: "title",
    bg: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 40%, #0369a1 100%)",
    accent: "#93c5fd",
    content: null,
  },
  // 2 — Определение
  {
    id: 2,
    type: "content",
    bg: "linear-gradient(160deg, #eff6ff 0%, #dbeafe 100%)",
    topbar: "#1e3a8a",
    accent: "#1e40af",
    title: "Что такое онкологические заболевания?",
    icon: "🔬",
    bullets: [
      "Онкологические заболевания — группа болезней с неконтролируемым делением клеток",
      "В мире насчитывается более 200 видов рака",
      "Злокачественные клетки распространяются через кровь и лимфу (метастазирование)",
      "2-е место среди причин смертности в мире",
      "На I–II стадии рак излечим в 85–90% случаев",
    ],
    stat: { num: "53,5 млн", label: "человек в мире\nживут с онкологией" },
  },
  // 3 — Факторы риска
  {
    id: 3,
    type: "grid",
    bg: "linear-gradient(160deg, #fefce8 0%, #fef9c3 100%)",
    topbar: "#92400e",
    accent: "#b45309",
    title: "Факторы риска",
    icon: "⚠️",
    subtitle: "Большинство факторов — управляемые",
    items: [
      { emoji: "🚬", label: "Курение", desc: "до 30% всех случаев рака" },
      { emoji: "🍷", label: "Алкоголь", desc: "рак печени, ротовой полости" },
      { emoji: "☀️", label: "УФ-излучение", desc: "основная причина рака кожи" },
      { emoji: "🍔", label: "Неправильное питание", desc: "избыток красного мяса, жиров" },
      { emoji: "🛋️", label: "Малоподвижность", desc: "рак кишечника и груди" },
      { emoji: "🧬", label: "Наследственность", desc: "мутации BRCA1/BRCA2" },
    ],
  },
  // 4 — Профилактика
  {
    id: 4,
    type: "content",
    bg: "linear-gradient(160deg, #f0fdf4 0%, #dcfce7 100%)",
    topbar: "#14532d",
    accent: "#15803d",
    title: "Методы первичной профилактики",
    icon: "✅",
    image: IMG_LIFESTYLE,
    bullets: [
      "Отказ от курения — снижает риск рака лёгких на 90%",
      "Здоровое питание — 5 порций овощей и фруктов в день",
      "Физическая активность — 150 мин. в неделю снижают риск на 20–30%",
      "Контроль веса — норма ИМТ 18,5–24,9 кг/м²",
      "Вакцинация от ВПЧ и гепатита В",
      "Регулярные профилактические осмотры",
    ],
  },
  // 5 — Симптомы
  {
    id: 5,
    type: "warning",
    bg: "linear-gradient(160deg, #fff1f2 0%, #ffe4e6 100%)",
    topbar: "#9f1239",
    accent: "#be123c",
    title: "Тревожные сигналы",
    icon: "🚨",
    subtitle: "Немедленно обратитесь к врачу!",
    bullets: [
      "Необъяснимая потеря веса (более 5 кг за месяц)",
      "Длительная усталость без видимых причин",
      "Новые родинки или изменение старых",
      "Длительный кашель, охриплость голоса",
      "Уплотнения или шишки в любой части тела",
      "Кровотечения или патологические выделения",
      "Незаживающие язвы или раны на коже",
      "Нарушения глотания, расстройства пищеварения",
    ],
  },
  // 6 — Методы лечения
  {
    id: 6,
    type: "grid",
    bg: "linear-gradient(160deg, #f5f3ff 0%, #ede9fe 100%)",
    topbar: "#4c1d95",
    accent: "#6d28d9",
    title: "Современные методы лечения",
    icon: "💊",
    subtitle: "Медицина XXI века",
    image: IMG_TREATMENT,
    items: [
      { emoji: "🤖", label: "Хирургия (da Vinci)", desc: "роботизированные операции" },
      { emoji: "⚡", label: "Лучевая терапия", desc: "протоны, Gamma Knife" },
      { emoji: "🧪", label: "Таргетная терапия", desc: "блокировка роста опухоли" },
      { emoji: "🛡️", label: "Иммунотерапия", desc: "PD-1/PD-L1 ингибиторы" },
      { emoji: "🧬", label: "CAR-T терапия", desc: "генная клеточная терапия" },
      { emoji: "🔍", label: "Жидкая биопсия", desc: "диагностика по анализу крови" },
    ],
  },
  // 7 — Контакты
  {
    id: 7,
    type: "contacts",
    bg: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 60%, #0369a1 100%)",
    topbar: "#93c5fd",
    accent: "#93c5fd",
    title: "Контакты и помощь",
    icon: "📞",
    items: [
      { emoji: "☎️", label: "Горячая линия", value: "8-800-200-2-200", sub: "бесплатно · круглосуточно" },
      { emoji: "🏥", label: "НМИЦ им. Блохина", value: "+7 (499) 324-18-01", sub: "nmicr.ru" },
      { emoji: "❤️", label: "Фонд «Подари жизнь»", value: "podari-zhizn.ru", sub: "помощь детям" },
      { emoji: "📚", label: "Общество онкологов", value: "rosoncoweb.ru", sub: "клинические рекомендации" },
    ],
  },
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const slide = SLIDES[current];
  const total = SLIDES.length;

  const prev = () => setCurrent(i => Math.max(0, i - 1));
  const next = () => setCurrent(i => Math.min(total - 1, i + 1));

  return (
    <div style={{ background: "#1a1a2e", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px 16px", fontFamily: "'Calibri', 'Arial', sans-serif" }}>

      {/* Слайд */}
      <div style={{ width: "100%", maxWidth: 900, aspectRatio: "16/9", background: slide.bg, borderRadius: 4, boxShadow: "0 20px 60px rgba(0,0,0,0.6)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>

        {/* Декоративные круги (как в PPT-темах) */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -40, left: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

        {/* ——— ТИТУЛЬНЫЙ ——— */}
        {slide.type === "title" && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 60px", textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>🎗️</div>
            <div style={{ width: 60, height: 4, background: "#93c5fd", borderRadius: 2, marginBottom: 24 }} />
            <h1 style={{ fontSize: "clamp(22px, 4vw, 38px)", fontWeight: "bold", color: "#fff", lineHeight: 1.2, marginBottom: 16, textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
              ПРОФИЛАКТИКА ОНКОЛОГИЧЕСКИХ ЗАБОЛЕВАНИЙ
            </h1>
            <div style={{ width: 60, height: 4, background: "#93c5fd", borderRadius: 2, marginBottom: 24 }} />
            <p style={{ fontSize: "clamp(13px, 2vw, 17px)", color: "#bfdbfe", marginBottom: 32, maxWidth: 500 }}>
              Информационный буклет для студентов
            </p>
            <img src={IMG_HERO} alt="" style={{ width: 220, height: 140, objectFit: "cover", borderRadius: 4, border: "3px solid rgba(255,255,255,0.3)", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }} />
            <div style={{ display: "flex", gap: 32, marginTop: 28 }}>
              {[["18,1 млн", "новых случаев/год"], ["40%", "можно предотвратить"], ["90%", "излечимость на I стадии"]].map(([n, l]) => (
                <div key={n} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(16px, 2.5vw, 22px)", fontWeight: "bold", color: "#93c5fd" }}>{n}</div>
                  <div style={{ fontSize: 10, color: "#bfdbfe", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
            <p style={{ position: "absolute", bottom: 14, fontSize: 10, color: "#bfdbfe" }}>
              Данные ВОЗ · Минздрав РФ · 2026
            </p>
          </div>
        )}

        {/* ——— КОНТЕНТ С БУЛЛЕТАМИ ——— */}
        {slide.type === "content" && (
          <>
            {/* Топ-бар */}
            <div style={{ background: (slide as any).topbar, padding: "14px 32px", display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 22 }}>{(slide as any).icon}</span>
              <h2 style={{ fontSize: "clamp(14px, 2.2vw, 20px)", fontWeight: "bold", color: "#fff", margin: 0 }}>{(slide as any).title}</h2>
            </div>
            <div style={{ flex: 1, display: "flex", gap: 24, padding: "20px 32px", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                {((slide as any).bullets as string[]).map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: (slide as any).accent, flexShrink: 0, marginTop: 5 }} />
                    <span style={{ fontSize: "clamp(11px, 1.6vw, 15px)", color: "#1e293b", lineHeight: 1.5 }}>{b}</span>
                  </div>
                ))}
                {(slide as any).stat && (
                  <div style={{ marginTop: 16, background: (slide as any).accent, borderRadius: 4, padding: "12px 20px", display: "inline-block" }}>
                    <div style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: "bold", color: "#fff" }}>{(slide as any).stat.num}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.85)", whiteSpace: "pre-line" }}>{(slide as any).stat.label}</div>
                  </div>
                )}
              </div>
              {(slide as any).image && (
                <div style={{ flexShrink: 0 }}>
                  <img src={(slide as any).image} alt="" style={{ width: 200, height: 150, objectFit: "cover", borderRadius: 4, border: "2px solid rgba(0,0,0,0.15)", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }} />
                </div>
              )}
            </div>
            {/* Полоска внизу */}
            <div style={{ height: 6, background: (slide as any).topbar }} />
          </>
        )}

        {/* ——— ПРЕДУПРЕЖДЕНИЕ (симптомы) ——— */}
        {slide.type === "warning" && (
          <>
            <div style={{ background: (slide as any).topbar, padding: "14px 32px", display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 22 }}>{(slide as any).icon}</span>
              <div>
                <h2 style={{ fontSize: "clamp(14px, 2.2vw, 20px)", fontWeight: "bold", color: "#fff", margin: 0 }}>{(slide as any).title}</h2>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", margin: 0 }}>{(slide as any).subtitle}</p>
              </div>
            </div>
            <div style={{ flex: 1, padding: "16px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px", alignContent: "start" }}>
              {((slide as any).bullets as string[]).map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "6px 10px", background: "rgba(255,255,255,0.6)", borderRadius: 4, border: "1px solid rgba(190,18,60,0.2)" }}>
                  <span style={{ color: (slide as any).accent, fontWeight: "bold", flexShrink: 0, fontSize: 14 }}>!</span>
                  <span style={{ fontSize: "clamp(10px, 1.4vw, 13px)", color: "#1e293b", lineHeight: 1.4 }}>{b}</span>
                </div>
              ))}
            </div>
            <div style={{ margin: "0 32px 16px", padding: "8px 14px", background: (slide as any).topbar, borderRadius: 4 }}>
              <p style={{ fontSize: 11, color: "#fff", margin: 0 }}>
                💡 На I–II стадии рак излечим в <strong>85–90% случаев</strong> — не откладывайте визит к врачу!
              </p>
            </div>
            <div style={{ height: 6, background: (slide as any).topbar }} />
          </>
        )}

        {/* ——— СЕТКА КАРТОЧЕК ——— */}
        {slide.type === "grid" && (
          <>
            <div style={{ background: (slide as any).topbar, padding: "14px 32px", display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 22 }}>{(slide as any).icon}</span>
              <div>
                <h2 style={{ fontSize: "clamp(14px, 2.2vw, 20px)", fontWeight: "bold", color: "#fff", margin: 0 }}>{(slide as any).title}</h2>
                {(slide as any).subtitle && <p style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", margin: 0 }}>{(slide as any).subtitle}</p>}
              </div>
              {(slide as any).image && (
                <img src={(slide as any).image} alt="" style={{ marginLeft: "auto", width: 120, height: 70, objectFit: "cover", borderRadius: 4, border: "2px solid rgba(255,255,255,0.3)" }} />
              )}
            </div>
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, padding: "16px 32px" }}>
              {((slide as any).items as { emoji: string; label: string; desc: string }[]).map((item, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.75)", borderRadius: 4, padding: "12px 14px", border: `2px solid ${(slide as any).accent}30`, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontSize: 22 }}>{item.emoji}</span>
                  <div style={{ fontSize: "clamp(11px, 1.5vw, 13px)", fontWeight: "bold", color: (slide as any).accent }}>{item.label}</div>
                  <div style={{ fontSize: "clamp(9px, 1.2vw, 11px)", color: "#475569" }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ height: 6, background: (slide as any).topbar }} />
          </>
        )}

        {/* ——— КОНТАКТЫ ——— */}
        {slide.type === "contacts" && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "28px 40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, paddingBottom: 14, borderBottom: "2px solid rgba(255,255,255,0.3)" }}>
              <span style={{ fontSize: 28 }}>{(slide as any).icon}</span>
              <h2 style={{ fontSize: "clamp(16px, 2.8vw, 26px)", fontWeight: "bold", color: "#fff", margin: 0 }}>{(slide as any).title}</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, flex: 1 }}>
              {((slide as any).items as { emoji: string; label: string; value: string; sub: string }[]).map((item, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.12)", borderRadius: 4, padding: "14px 18px", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 20 }}>{item.emoji}</span>
                    <span style={{ fontSize: "clamp(11px, 1.5vw, 13px)", color: "rgba(255,255,255,0.8)", fontWeight: "bold" }}>{item.label}</span>
                  </div>
                  <div style={{ fontSize: "clamp(13px, 1.8vw, 16px)", fontWeight: "bold", color: "#93c5fd" }}>{item.value}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>{item.sub}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, textAlign: "center" }}>
              <p style={{ fontSize: "clamp(12px, 1.8vw, 15px)", color: "rgba(255,255,255,0.9)", fontStyle: "italic" }}>
                🎗️ Ваше здоровье — в ваших руках. Ранняя диагностика спасает жизни!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ——— ПАНЕЛЬ УПРАВЛЕНИЯ ——— */}
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 20 }}>
        <button onClick={prev} disabled={current === 0} style={{ width: 44, height: 44, borderRadius: "50%", border: "none", background: current === 0 ? "#334155" : "#3b82f6", color: "#fff", fontSize: 20, cursor: current === 0 ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}>
          ‹
        </button>

        {/* Точки-слайды */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {SLIDES.map((s, i) => (
            <button key={s.id} onClick={() => setCurrent(i)} style={{ width: i === current ? 28 : 10, height: 10, borderRadius: 5, border: "none", background: i === current ? "#3b82f6" : "#475569", cursor: "pointer", transition: "all 0.2s", padding: 0 }} />
          ))}
        </div>

        <button onClick={next} disabled={current === total - 1} style={{ width: 44, height: 44, borderRadius: "50%", border: "none", background: current === total - 1 ? "#334155" : "#3b82f6", color: "#fff", fontSize: 20, cursor: current === total - 1 ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}>
          ›
        </button>
      </div>

      <p style={{ color: "#64748b", fontSize: 12, marginTop: 10 }}>
        Слайд {current + 1} из {total}
      </p>
    </div>
  );
}
