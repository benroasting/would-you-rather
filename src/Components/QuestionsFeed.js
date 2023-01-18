import Question from "./Questions";

const QuestionsFeed = ({ filteredQuestions }) => {

  return (
    filteredQuestions.length > 0 && (
      <div className="questions-container">
        {filteredQuestions.map((data, i) => (
          <Question data={data} key={i} />
        ))}
      </div>
    )
  );
};

export default QuestionsFeed;
