import Answer from "./Answer";



export default function Question({ model = { type: 2, header: "", description: "", answers: [] } }) {
  return (
    <div className="container p-1 border border-dark">
      <div className="form-group">
        <h5>{model.header}</h5>
        <h5>{model.description}</h5>
        {model.answers.map((a, key) => (<Answer type={model.type} questionTitle={model.header} model={a} key={key} />))}
      </div>
    </div>
  );
}
