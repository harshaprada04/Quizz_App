import classes from "./MatchTheFollowingQuestion.module.css";
import CardToShowQuestion from "./CardToShowQuestion";

function MatchTheFollowingQuestion(props: any) {
  const tableDescriptionRow1 = props.questionDetails.question1.map(
    (data: { id: number }) => {
      return (
        <tr key={data.id}>
          <td key={data.id}>{data}</td>
        </tr>
      );
    }
  );
  const tableDescriptionRow2 = props.questionDetails.question2.map(
    (data: { id: number }) => {
      return (
        <tr key={data.id}>
          <td key={data.id}>{data}</td>
        </tr>
      );
    }
  );

  return (
    <div>
      <CardToShowQuestion MatchTheFollowingQuestion={MatchTheFollowingQuestion}>
        <table>
          <thead>
            <th>
              <tr>Match The following Answer</tr>
            </th>
          </thead>
          <tbody className={classes.table_div}>
            <tr> {tableDescriptionRow1}</tr>
            <tr> {tableDescriptionRow2}</tr>
          </tbody>
        </table>
        <form>
          {props.questionDetails.option.map((data: []) => {
            return (
              <div>
                <input
                  type="radio"
                  id="html"
                  name="capital"
                  value={data}
                  checked={data === props.submittedAnswer}
                  onClick={() => props.changeHandler(data)}
                />
                <label htmlFor="html">{data}</label>
              </div>
            );
          })}
        </form>
      </CardToShowQuestion>
    </div>
  );
}

export default MatchTheFollowingQuestion;
