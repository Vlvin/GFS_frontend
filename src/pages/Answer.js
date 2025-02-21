

export default function Answer({ type = 0, questionTitle = "", model = { text: "" } }) {
  const answerType = type === 1 ? "checkbox"
    : type === 2 ? "radio"
      : "edit";
  const token = localStorage.getItem("token");
  return (
    <div className="form-check">
      <input className="form-check-input" type={answerType} name={questionTitle} value={model.text} id={model.text} />
      <label className="form-check-label" htmlFor={model.text}>{model.text}</label>
    </div>
  );
}
