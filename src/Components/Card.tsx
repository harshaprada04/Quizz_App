import classes from "../Components/card.module.css";

function Card(props: any) {
  return <div className={classes.header}>{props.children}</div>;
}

export default Card;
