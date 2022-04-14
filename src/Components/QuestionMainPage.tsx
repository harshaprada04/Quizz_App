import { useContext, useEffect } from "react";
import Context from "../Contexts/contexts";
import { FetchQuestionList } from "../actions/questions";
import { Route, Routes, useNavigate } from "react-router";
import QuestionListPage from "./QuestionListPage";
import classes from "./QuestionMainPage.module.css";

function QuestionMainPage() {
  const contexts = useContext(Context);
  const navigate = useNavigate();
  const fetechQuestions = async () => {
    const questions: any = await FetchQuestionList(contexts.selectedLanguage);
    contexts.setQuestionList(questions);
    navigate(`/question/${questions[0].id}`);
  };
  useEffect(() => {
    fetechQuestions();
  }, []);

  return (
    <div className={classes.main_heading}>
      <div className={classes.heading}>
        {contexts.questionList.map((question: any, index) => (
          <div
            className={classes.question_number}
            style={{
              background: question.isAnswered ? "red" : "#ccc",
            }}
            key={question.id}
            onClick={() => navigate(`/question/${question.id}`)}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <Routes>
        <Route path=":questionId" element={<QuestionListPage />}></Route>
      </Routes>
    </div>
  );
}

export default QuestionMainPage;
