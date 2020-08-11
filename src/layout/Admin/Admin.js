import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCode, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import IconHoverWithBottomText from '../../components/IconHoverWithBottomText';
import SecondMenu from '../../components/SecondMenu';
import BounceRate from '../../components/BounceRate';
import Table from '../../components/Table';
import SearchField from '../../components/SearchField';
import DayWeekMonth from '../../components/DayWeekMonth';
import BarChart from '../../components/BarChart';
import PieChart from '../../components/PieChart';


const useStyles = makeStyles((theme) => ({
  parentAdminLayout: {
      width:'100%',
      display:'flex',
      flexDirection:'row',
      [theme.breakpoints.down('sm')]: {
        flexDirection:'column',
      }, 
  },
  menuIconsPortion: {
    flex: 1,
    backgroundColor:'#353d9f',
    marginRight:30,
    marginBottom:30,
    marginLeft:30,
    borderRadius:20,
    marginTop:30,
    [theme.breakpoints.down('sm')]: {
        margin:0,
        display:'none'
      }, 
  },
  secondMenuPortion: {
      flex: 2.5,
      borderRadius:20,
      marginTop:30,
      marginBottom:30,
      marginRight: 30,     
      height:'100vh',
      [theme.breakpoints.down('sm')]: {
        margin:0
      }, 
  },
  mainMenuPortion: {
      flex: 14,
      borderRadius:20,
      marginTop:30,
      marginBottom:30,
      marginRight:30,
      [theme.breakpoints.down('sm')]: {
        width:'100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        display:'flex'
      }, 
     
  },
  seachPortion: {
      width:'100%',
      alignSelf:'center',
      borderRadius:20,
      height:65,
      [theme.breakpoints.down('sm')]: {
        width:'95%',
        alignSelf:'center'
      }, 
  },
  graphAndBounceRatePortion: {
      display:'flex',
      marginTop:30,
      justifyContent:'space-between',
      height:400,
      [theme.breakpoints.down('sm')]: {
        width:'95%',
        flexDirection:'column',
       
        height:900,
      }, 
  },
  graphPortion: {
    flex: 5,
    marginRight:20,
    borderRadius:20,
    border: '1px solid #f2f5f6',
    height:'100%',
    [theme.breakpoints.down('sm')]: {
        flex:2,
        height:450,
        margin:0,
        marginBottom:20
      }, 

  },
  bouncePortion: {
    flex: 2,
    height:'100%',
    borderRadius:20,
    border:'1px solid #f2f5f6',
    [theme.breakpoints.down('sm')]: {
        flex:2,
        margin:0,
        marginBottom:20
      }, 
  },
  visitorAndTrafficPortion: {
    display: 'flex',
    marginTop: 30,
    height: 300,
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
        width:'95%',
        flexDirection:'column',
       
        height:600,
        marginBottom:100
      }, 
  },
  visitorOnsite: {
    flex: 2,
    height:'350px',
    marginRight:20,
    borderRadius:20,
    border:'1px solid #f2f5f6',
    [theme.breakpoints.down('sm')]: {
        marginRight:0,
        marginBottom:20
      }, 
  },
  trafficSources: {
    flex: 2,
    height:'350px',
    borderRadius:20,
    border:'1px solid #f2f5f6'
  },
  iconsContainer: {
      width: '100%',
      marginTop: 40,
      [theme.breakpoints.down('sm')]: {
        flexDirection:'row',
      }, 
  },
  iconWithText: {
      color:'white',
      fontSize:23
  },
  menuTextContainerAdmin: {
    marginTop:30,
    marginLeft:30
  },
  menuTextAdmin: {
    color:'#8f8f9c', 
    fontSize:16,
    fontWeight:'bold',
    [theme.breakpoints.down('sm')]: {
        fontSize:14,
      }, 
  },
  trafficTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'#5057ac',
    [theme.breakpoints.down('sm')]: {
        fontSize:13,
      }, 
  },
  trafficDescription: {
      fontSize: 11,
      color:'#8f8f9c', 
      [theme.breakpoints.down('sm')]: {
        fontSize:10,
      }, 
  },
  trafficHeaderTexts: {
      marginTop:30,
      marginLeft:30
  },
  graphHeaderTexts: {
    marginTop:30,
    marginLeft:30,
    display: 'flex',
    justifyContent:'space-between'
},

  tableContainer: {
      marginTop:20,
      marginRight:20,
      [theme.breakpoints.down('sm')]: {
        marginTop:15,
        marginRight:5,
      }, 
  },

  visitorHeaderTexts: {
    marginTop:30,
    marginLeft:30
  }
  
}))

function Admin() {
    const classes = useStyles();
    const analytics = <FontAwesomeIcon icon={faChartBar} className={classes.iconWithText} />
    const analyticsBlue = <FontAwesomeIcon icon={faChartBar} style={{fontSize: 12, color:'blue'}}/>
    return (
        <div className={classes.parentAdminLayout}>

            <div className={classes.menuIconsPortion}>
                <div className={classes.iconsContainer}>
                <IconHoverWithBottomText icon={analytics} title="analytics"/>
                <IconHoverWithBottomText icon={analytics} title="Job search"/>
                <IconHoverWithBottomText icon={analytics} title="File Manager"/>
                <IconHoverWithBottomText icon={analytics} title="CRM"/>
                <IconHoverWithBottomText icon={analytics} title="Education"/>
                <IconHoverWithBottomText icon={analytics} title="crypto"/>
                <IconHoverWithBottomText icon={analytics} title="Social"/>
                <IconHoverWithBottomText icon={analytics} title="Pages"/>
                <IconHoverWithBottomText icon={analytics} title="Map"/>
                </div>
          
            </div>

            <div className={classes.secondMenuPortion}>
                <div className={classes.menuTextContainerAdmin}>
                    <p className={classes.menuTextAdmin}>MENU</p>
                   
                </div>
                <SecondMenu title="Dashboard" icon="border-all"/>
                <SecondMenu title="Customers" icon="users"/>
                <SecondMenu title="Reports" icon="calendar"/>
                <SecondMenu title="Inbox" icon="envelope"/>
                <SecondMenu title="Time Management" icon="clock" />
                <SecondMenu title="Settings" icon="cog" />
            </div>

            <div className={classes.mainMenuPortion}>
                <div className={classes.seachPortion}>
                    <SearchField />
                </div>
                <div className={classes.graphAndBounceRatePortion}>
                    <div className={classes.graphPortion}>
                        <div className={classes.graphHeaderTexts}>
                            <div>
                                <p className={classes.trafficTitle}>Website Audience Overview</p>
                                <p className={classes.trafficDescription}>There are Plenty of Free website proxies that you can use</p>
                            </div>
                            <DayWeekMonth />
                           
                            </div>   
                            <BarChart />
                        </div>
                    <div className={classes.bouncePortion}>
                        <BounceRate bracketText="-23" statusText = "increased" dotColor="#ff9ad5"/>
                        <BounceRate bracketText="32" statusText = "increased" dotColor="#50b5ff"/>
                        <BounceRate bracketText="32" statusText = "decreased" dotColor=""/>
                        <BounceRate bottomBorderPresent = {false} bracketText="-32" statusText = "increased" dotColor=""/>
                    </div>
                </div>
                <div className={classes.visitorAndTrafficPortion}>
                    <div className={classes.visitorOnsite}>
                            <div className={classes.visitorHeaderTexts}>
                                <p className={classes.trafficTitle}>Visitors on our Site</p>
                                <p className={classes.trafficDescription}>Visitors on our site by Local Domestics and International</p>
                            </div>
                            <PieChart />
                    </div>
                    <div className={classes.trafficSources}>
                        <div className={classes.trafficHeaderTexts}>
                            <p className={classes.trafficTitle}>Traffic Sources</p>
                            <p className={classes.trafficDescription}>Where can you find unique mySpace Layout nowadays</p>
                            <div className={classes.tableContainer}>
                                <Table />
                            </div>
                        </div>                       
                    </div>
                </div>              
            </div>
        </div>
    )
}

export default Admin;
