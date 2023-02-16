const Question = ({ color, tag, header, question1, question2 }) => (
  <div className="question">
    <div className="question-content">
      <span className="tag" style={{ background: color }}>
        {tag}
      </span>
      <p data-testid="header" className="title">
        {header}
      </p>
      <p>{question1}</p>
      <p>~ OR ~</p>
      <p>{question2}</p>
    </div>
  </div>
);

export default Question;
