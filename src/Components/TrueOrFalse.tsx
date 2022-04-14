import CardToShowQuestion from "./CardToShowQuestion";

function TrueOrFalseQuestion(props: any) {
  return (
    <div>
      <CardToShowQuestion TrueOrFalseQuestion={TrueOrFalseQuestion}>
        {props.questionDetails.question}
        <form>
          {props.questionDetails.option.map((data: []) => (
            <>
              <input
                type="radio"
                id="html"
                name="capital"
                value={data}
                onClick={props.clickHandler}
                checked={data === props.submittedAnswer}
              />
              <label htmlFor="html">{data}</label>
              <br></br>
            </>
          ))}
        </form>
      </CardToShowQuestion>
    </div>
  );
}

export default TrueOrFalseQuestion;
