import { Component } from "react";
import styles from './Wrapper.module.css'
import Card from './Card';
import Form from './FormComponent';
class Wrapper extends Component{

    constructor(){
        super();
        this.state={
            data : [
                {
                    iconUrl : 'https://cdn-icons-png.flaticon.com/128/16307/16307921.png',
                    heading : "Presentation Design"
                },
                {
                    iconUrl : 'https://cdn-icons-png.flaticon.com/128/16307/16307921.png',
                    heading : "AudioVisual Production"
                },
                {
                    iconUrl : 'https://cdn-icons-png.flaticon.com/128/16307/16307921.png',
                    heading : "Translation Services"
                },
                {
                    iconUrl : 'https://cdn-icons-png.flaticon.com/128/16307/16307921.png',
                    heading : "Graphic Design"
                },
                {
                    iconUrl : 'https://cdn-icons-png.flaticon.com/128/16307/16307921.png',
                    heading : "Reasearch & Analytics"
                },
                {
                    iconUrl : 'https://cdn-icons-png.flaticon.com/128/16307/16307921.png',
                    heading : "Data Processing"
                }
                
            ]
        }
    }

  render(){
    const {data}=this.state;
    return(
        <div className={styles.wrapper}>
            <div className={styles.aboutOrg}>
               <h1>  EZ Works</h1>
               <h2>Suite of Business Support Service</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis ipsum vitae risus laoreet pellentesque. 
                Etiam fermentum dolor ut pharetra suscipit. Vivamus at euismod purus. Maecenas accumsan blandit massa ac ullamcorper. 
                Curabitur vestibulum posuere urna, in bibendum justo posuere ac.</p>
               {/* <form>
               <input  type="text" placeholder="Email Address"/> <button>Contact Me</button>
               </form> */}
               <Form />
            </div>
            <div className={styles.cardContainer}>
                {data.map((value,index)=>(
                    <Card  iconUrl={value.iconUrl} heading={value.heading} key={index}/>
                ))}

            </div>
        </div>
    )
  }
}
export default Wrapper;