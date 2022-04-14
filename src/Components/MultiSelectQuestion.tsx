import CardToShowQuestion from "./CardToShowQuestion";

function MultiSelectQuestion(props: any) {
  return (
    <div>
      <CardToShowQuestion MultiSelectQuestion={MultiSelectQuestion}>
        {props.questionDetails.question}
        <form>
          {props.questionDetails.option.map((data: []) => {
            return (
              <>
                <input
                  type="checkbox"
                  id="html"
                  name="capital"
                  value={data}
                  onChange={() => props.changeHandler(data)}
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

export default MultiSelectQuestion;
