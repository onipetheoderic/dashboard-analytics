import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fade, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
   secondMenuContainer: {
    display:'flex', 
    justifyContent:'space-between', 
    marginTop:20
   },
   borderedCont: {
    width:'5px', 
    marginLeft:-4,
    height:40, 
    alignItems:'center',
    borderRight:'5px solid white',
    borderTopRightRadius:5,
    borderBottomRightRadius:5,
   },
   textCont: {
    display:'flex', 
    width:'99%', 
    alignItems:'center'
   },
   titleStyle: {
    cursor:'pointer', 
    marginLeft:10, 
    fontSize:12, fontWeight:'bold',
   }
}))

function SecondMenuItem({icon, title}) {
    const [isShown, setIsShown] = useState(false);
    const classes = useStyles();
    
    const hoverColors = () => {
        return isShown===false ? {textColor:'#434249', iconColorBg: "white"} 
        : {textColor:'#5057ac', iconColorBg: "#5057ac",}
    }
    return (
        <div 
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)} 
        className={classes.secondMenuContainer}>       
            <div className={classes.borderedCont} style={{borderColor:hoverColors().iconColorBg}}>
            </div>
            <div className={classes.textCont}>
                <div style={{marginLeft:20}}>
                
                <FontAwesomeIcon icon={icon} style={{color:hoverColors().textColor}}/>
                <span className={classes.titleStyle} style={{color:hoverColors().textColor}}>
                    {title}
                </span>
                </div>
            </div>
        </div>
    )
}

export default SecondMenuItem;
