import { useId, useRef, useState } from "react";
import categories from "./faqContent.json";
import "./TabbedFaq.css";

function Answer({ lines }) {
  const blocks = [];
  lines.forEach((line) => {
    if (line.startsWith("•")) {
      if (blocks.at(-1)?.type !== "list") blocks.push({ type: "list", items: [] });
      blocks.at(-1).items.push(line.replace(/^•\s*/, ""));
    } else blocks.push({ type: "paragraph", text: line });
  });
  return blocks.map((block, index) => block.type === "list"
    ? <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
    : <p key={index}>{block.text}</p>);
}

export default function TabbedFaq() {
  const id = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(null);
  const tabRefs = useRef([]);
  const active = categories[activeIndex];
  const selectTab = (index) => {
    setActiveIndex(index);
    setOpenQuestion(null);
  };
  const navigateTabs = (event, index) => {
    let next;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % categories.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + categories.length) % categories.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = categories.length - 1;
    else return;
    event.preventDefault();
    selectTab(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="grg-tabbed-faq" aria-labelledby={`${id}-heading`}>
      <div className="grg-tabbed-faq-container">
        <header className="grg-tabbed-faq-header">
          <h2 id={`${id}-heading`}>BEFORE YOU JOIN</h2>
          <p>Clear answers. No guesswork. - FAQs</p>
        </header>
        <div className="grg-tabbed-faq-layout">
          <div className="grg-tabbed-faq-tabs" role="tablist" aria-label="FAQ categories" aria-orientation="vertical">
            {categories.map((category, index) => (
              <button
                key={category.id}
                ref={(element) => { tabRefs.current[index] = element; }}
                type="button"
                role="tab"
                id={`${id}-tab-${category.id}`}
                aria-selected={activeIndex === index}
                aria-controls={`${id}-panel`}
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => selectTab(index)}
                onKeyDown={(event) => navigateTabs(event, index)}
              >
                <span>{category.title}</span><span aria-hidden="true">→</span>
              </button>
            ))}
          </div>
          <div className="grg-tabbed-faq-panel" role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${active.id}`}>
            {active.questions.map((question) => {
              const open = openQuestion === question.id;
              return (
                <div className="grg-tabbed-faq-item" key={question.id}>
                  <h3>
                    <button type="button" aria-expanded={open} aria-controls={`${id}-answer-${question.id}`} id={`${id}-question-${question.id}`} onClick={() => setOpenQuestion(open ? null : question.id)}>
                      <span>{question.id} {question.question}</span>
                      <span className="grg-tabbed-faq-toggle" aria-hidden="true">{open ? "−" : "+"}</span>
                    </button>
                  </h3>
                  <div className="grg-tabbed-faq-answer" id={`${id}-answer-${question.id}`} aria-labelledby={`${id}-question-${question.id}`} hidden={!open}>
                    <Answer lines={question.answer} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
