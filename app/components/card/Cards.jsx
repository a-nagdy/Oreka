import Card from "@mui/material/Card";
const Cards = (props) => {
  return <Card className={props.className}>{props.children}</Card>;
};

export default Cards;
