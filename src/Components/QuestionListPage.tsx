import React, { useContext, useEffect, useState, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router";
import Context from "../Contexts/contexts";
import FiilInTheBlankQuestion from "./FillInTheBlank";
import MatchTheFollowingQuestion from "./MatchTheFolloingQuestion";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import MultiSelectQuestion from "./MultiSelectQuestion";
import TrueOrFalseQuestion from "./TrueOrFalse";
import classes from "./QuestionListPage.module.css";

const QuestionListPage = () => {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const [isLastQuestion, setIsLastQuestion] = useState<boolean>(false);
  const [questionDetails, setQuestionDetails] = useState<any>({});
  const [submittedAnswer, setSubmittedAnswer] = useState("");
  const contexts = useContext(Context);
  const qId = questionId ? parseInt(questionId) : 0;

  useEffect(() => {
    const details: any = contexts.getQuestionById(qId);
    setQuestionDetails(details);
    setSubmittedAnswer(details.selectedAnswer);
    const position =
      contexts.questionList.findIndex(
        (question: any) => details.id === question.id
      ) + 1;
    setIsLastQuestion(position === contexts.questionList.length);
    return () => {
      setSubmittedAnswer("");
    };
  }, [questionId]);

  const navigateToPrevious = () => {
    const id: any = contexts.getPreviousElement(qId);
    contexts.changeHandler(qId, submittedAnswer);
    if (id) {
      navigate(`/question/${id}`);
    }
  };

  const navigateToNext = () => {
    const id = contexts.getNextElement(qId);
    contexts.changeHandler(qId, submittedAnswer);
    if (isLastQuestion) {
      navigate(`/result`);
    } else {
      navigate(`/question/${id}`);
    }
  };

  const getQuestionDetailsBasedOnType = () => {
    switch (questionDetails.questionType) {
      case "multiple choice":
        return (
          <MultipleChoiceQuestion
            questionDetails={questionDetails}
            clickHandler={setSubmittedAnswer}
            submittedAnswer={submittedAnswer}
          />
        );
      case "True or False":
        return (
          <TrueOrFalseQuestion
            questionDetails={questionDetails}
            clickHandler={(e: ChangeEvent<HTMLInputElement>) =>
              setSubmittedAnswer(e.target.value)
            }
            submittedAnswer={submittedAnswer}
          />
        );
      case "Fill in The Blank":
        return (
          <FiilInTheBlankQuestion
            questionDetails={questionDetails}
            changeHandler={(e: ChangeEvent<HTMLInputElement>) =>
              setSubmittedAnswer(e.target.value)
            }
            submittedAnswer={submittedAnswer}
          />
        );
      case "match the following":
        return (
          <MatchTheFollowingQuestion
            questionDetails={questionDetails}
            changeHandler={setSubmittedAnswer}
            submittedAnswer={submittedAnswer}
          />
        );
      case "multi select":
        return (
          <MultiSelectQuestion
            questionDetails={questionDetails}
            changeHandler={(data: any) =>
              setSubmittedAnswer((prev: any) => {
                if (prev && prev.length) {
                  const index = prev.findIndex((elem: any) => elem === data);
                  if (index < 0) {
                    return [...prev, data];
                  } else {
                    prev.splice(index, 1);
                    return prev;
                  }
                } else {
                  return [data];
                }
              })
            }
            submittedAnswer={submittedAnswer}
          />
        );
      default:
        break;
    }
  };

  return (
    <div>
      <div>{getQuestionDetailsBasedOnType()}</div>
      <div className={classes.button_div}>
        <button className={classes.button} onClick={navigateToPrevious}>
          Previous
        </button>
        <button className={classes.button} onClick={navigateToNext}>
          {isLastQuestion ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default QuestionListPage;
