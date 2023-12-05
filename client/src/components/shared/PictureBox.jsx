import "./PictureBox.css";

export default function PictureBox(props) {
  const classes = "picture-box " + props.className;
  return (
    <div className={classes} style={{ aspectRatio: props.aspectRatio }}>
      <img className="picture-box__img" src={props.img} alt={props.alt} />
    </div>
  );
}
