import CardToShowQuestion from "./CardToShowQuestion";

function FiilInTheBlankQuestion(props: any) {
  return (
    <div>
      <CardToShowQuestion FiilInTheBlankQuestion={FiilInTheBlankQuestion}>
        <label>{props.questionDetails.question}</label>
        <input
          type="text"
          id="html"
          name="fill in the blanks"
          value={props.submittedAnswer}
          onChange={props.changeHandler}
        />
      </CardToShowQuestion>
    </div>
  );
}

export default FiilInTheBlankQuestion;
