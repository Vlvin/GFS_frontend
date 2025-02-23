

export default function Answer({ type = 0, questionTitle = "", model = { text: "" } }) {

  const answerType = ["edit", "radio", "checkbox"][type];
  return (
    <div className="form-check">
      <input className="form-check-input" type={answerType} name={questionTitle} value={model.text} id={model.text} />
      <label className="form-check-label" htmlFor={model.text}>{model.text}</label>
    </div>
  );
}
