import Question from "./Questions";

const QuestionsFeed = ({ filteredQuestions }) => {
  return (
    filteredQuestions.length > 0 && (
      <div className="questions-container">
        {filteredQuestions.map((data, i) => (
          <Question
            color={data.category.color}
            tag={data.category.tag}
            header={data.header}
            question1={data.question1}
            question2={data.question2}
            key={i}
          />
        ))}
      </div>
    )
  );
};

export default QuestionsFeed;
