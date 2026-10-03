import "./PromiseSection.css";

const promises = [
  {
    number: "01",
    title: "Understand the why.",
    description: "When you understand why a drug produces an effect, many indications, adverse effects and contraindications become logical rather than isolated facts.",
  },
  {
    number: "02",
    title: "Remember intelligently.",
    description: "Use comparisons, tables, mnemonics, visual associations and repeated reinforcement where they genuinely make learning easier.",
  },
  {
    number: "03",
    title: "Apply with confidence.",
    description: "Connect concepts to clinical questions, PYQs, newer drugs and common examination traps.",
  },
];

export default function PromiseSection() {
  return (
    <section className="promise-section" aria-labelledby="promise-heading">
      <div className="promise-container">
        <div className="promise-intro">
          <p className="promise-eyebrow">THE GRG PROMISE</p>
          <h2 id="promise-heading">Pharmacology that <span>finally makes sense.</span></h2>
        </div>
        <div className="promise-summary">
          <p className="promise-description">
            Dr. GRG’s aim is not to make Pharmacology superficial in the name of
            exam preparation. It is to build a strong conceptual base and then
            make that knowledge easier to remember, revise and apply.
          </p>
        </div>
        <ol className="promise-list">
          {promises.map((promise) => (
            <li className="promise-item" key={promise.number}>
              <span className="promise-number" aria-hidden="true">{promise.number}</span>
              <div>
                <h3>{promise.title}</h3>
                <p>{promise.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
