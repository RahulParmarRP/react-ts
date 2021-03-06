import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Data from "../../interfaces/product";
import CardMedia from "@material-ui/core/CardMedia";
import AddProductButton from "../../../components/icons/add-button";
import RemoveProductButton from "../../../components/icons/remove-button";

const useStyles = makeStyles({
  card: {
    maxWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
});

export default function ProductCard(props: {
  product: Data;
  addProductToCart: (addedProduct: Data) => void;
}) {
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;

  // function addToCart(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  //   props.addProductToCart(props.product);
  // }

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="/assets/images/live-from-space.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.product.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.product.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.product.price}
        </Typography>
        <Typography variant="body2" component="p">
          {props.product.description + " description"}
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <RemoveProductButton /> */}
        <Button
          size="large"
          color="primary"
          onClick={() => props.addProductToCart(props.product)}
        >
          Add To Cart
        </Button>
        {/* <AddProductButton /> */}
      </CardActions>
    </Card>
  );
}
