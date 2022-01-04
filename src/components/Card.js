import './Card.css';

function Card(){
    const classes = 'card ' + props.className;
    return (
        <div className={classes}></div>
    );
}

export default Card;
