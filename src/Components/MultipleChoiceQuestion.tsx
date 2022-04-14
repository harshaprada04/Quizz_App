import CardToShowQuestion from "./CardToShowQuestion";
import classes from "./CardToShowQuestion.module.css";

function MultipleChoiceQuestion(props: any) {
  return (
    <div>
      <CardToShowQuestion MultipleChoiceQuestion={MultipleChoiceQuestion}>
        <div>{props.questionDetails.question}</div>
        <form className={classes.from}>
          {props.questionDetails.option.map((data: []) => {
            return (
              <>
                <input
                  type="radio"
                  id="html"
                  name="capital"
                  value={data}
                  checked={data === props.submittedAnswer}
                  onClick={() => props.clickHandler(data)}
                />
                <label htmlFor="html">{data}</label>
                <br></br>
              </>
            );
          })}
        </form>
      </CardToShowQuestion>
    </div>
  );
}

export default MultipleChoiceQuestion;
