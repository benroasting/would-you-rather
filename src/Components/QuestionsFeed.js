import questionsData from "../data";
import Question from "./Questions";

const QuestionsFeed = () =>
  questionsData.length > 0 && (
    <div className="questions-container">
      {questionsData.map((data, i) => (
        <Question data={data} key={i} />
      ))}
    </div>
  );

export default QuestionsFeed;
