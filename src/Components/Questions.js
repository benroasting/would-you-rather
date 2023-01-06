const Question = ({ data }) => (
  <div className="question">
    <div className="question-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <p>{data.header}</p>
      <p>{data.question1}</p>
      <p>{data.question2}</p>
    </div>
  </div>
);

export default Question;
