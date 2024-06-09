import { Component } from "react";
import styles from './Card.module.css';
class Card extends Component{
    render(){
        const {iconUrl,heading}=this.props;
        return(
            <div className={styles.cardContainer}>
                <div>
                <img src={iconUrl} alt='image1'></img> <span>{heading}</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis ipsum vitae risus laoreet pellentesque.</p>
            </div>
        )
    }
}
export default Card;