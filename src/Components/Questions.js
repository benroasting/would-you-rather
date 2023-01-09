const Question = ({ data }) => (
  <div className="question">
    <div className="question-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <p className="title">{data.header}</p>
      <p>{data.question1}</p>
      <p>~ OR ~</p>
      <p>{data.question2}</p>
    </div>
  </div>
);

export default Question;
