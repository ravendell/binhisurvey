/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//console.disableYellowBox = true;
 import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  RefreshControl, 
  ListView,
  ScrollView,
  Alert,
} from 'react-native';
import { 
Container, 
Header, 
Title, 
Content, 
Footer, 
FooterTab, 
Button, 
Icon, 
CardItem, 
Tabs, 
Left, 
Body, 
Right, 
Tab,
List,
} from 'native-base';
//import Tabregistration from './src/tabregistration';
//import Tabregistration from './src/migration';
import Tablisting from './src/tablisting';
//import Moment from 'moment';
const Realm = require('realm');
const currentVersion = Realm.schemaVersion(Realm.defaultPath);
alert(currentVersion);
class Survey {}
Survey.schema = {
		name: 'Survey',
		properties:{
			Eatery: "string",
			Ladd: "string",
			Eadd: "string",
			Otime_: "string",
			Ctime_: "string",
			DClose: "string",
			Temp_: "string",
			Shift_: "bool",
			Enoshift_: "string",
			Enoempshift_: "string",
			Enotables_: "string",
			Enochairs_: "string",
			cashreg_: "bool",
			Yofbusiness_: "string",
			Branches_ : "bool",
			Blocation_: "string",
			Etalk_: "string",
			Oname_:"string",
			Smartphone: "string",
			Otherinfo_: "string",
			date_: "date",
			tag_:"bool",
			lending:"bool",
			id_: {type: 'int', default: 0},
		}	
}

let realm = new Realm({schema: [Survey],schemaVersion:3});

let Surveys = realm.objects('Survey'); 
let Surveysort = Surveys.sorted('date_',true);
const array = realm.objects('Survey'); 
const arrayResults = _.values(array);


var surveydata = JSON.stringify(Surveysort);
var arr = JSON.parse(surveydata);

export default class binhisurvey extends Component<{}> {
/*constructor(props) {
        super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            refreshing: false,
			dataSource: ds.cloneWithRows(arr),
        };
    }

fetchData(){
    //... fetching logic
	let realms = new Realm({schema: [Survey],schemaVersion: 3});
	let Surveys = realm.objects('Survey'); 
	
	let Surveysort = Surveys.sorted('date_',true);
	
	var surveydata1 = JSON.stringify(Surveysort);
	var arr1 = JSON.parse(surveydata1);
	
    var items = ['D', 'E', 'F'];
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(arr1)});
 }
 
 _onRefresh() { 
	this.setState({refreshing: true});
	let realms = new Realm({schema: [Survey],schemaVersion: 3});
		
		let Surveys = realm.objects('Survey'); 
		let Surveysort = Surveys.sorted('date_',true);
		
		var surveydata1 = JSON.stringify(Surveysort);
		var arr1 = JSON.parse(surveydata1);
		
		var items = ['D', 'E', 'F'];
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(arr1)});
		this.setState({refreshing: false});
} */
 
  render() {
	//Moment.locale('en');
	//var dt = new Date(); 
	
	var x=0;
	
	let Surveys = realm.objects('Survey'); 
	let surveytag_= Surveys.filtered('tag_=false');
	//alert(surveytag_);
	arr2 =JSON.stringify(Surveys);
	//alert(arr2);
	//alert(surveytag_.length);
	while(x < surveytag_.length){

		Txteatery_	   	   = surveytag_[x].Eatery;
		Txtlocation_   	   = surveytag_[x].Ladd;
		Txtelocation_  	   = surveytag_[x].Eadd;	
		TxtOtime 	   	   = surveytag_[x].Otime_;
		TxtCtime 	   	   = surveytag_[x].Ctime_;
		TxtDayclose        = surveytag_[x].DClose;
		Txttotalemp    	   = surveytag_[x].Temp_;
		Shifts 		   	   = surveytag_[x].Shift_;
		TxtEnoshift    	   = surveytag_[x].Enoshift_;
		Txtempnoshift  	   = surveytag_[x].Enoempshift_;
		Txtempnotables 	   = surveytag_[x].Enotables_;
		Txtempnochairs 	   = surveytag_[x].Enochairs_;
		Cashregs  	       = surveytag_[x].cashreg_;
		Txtyofbusiness 	   = surveytag_[x].Yofbusiness_;
		branches  	   	   = surveytag_[x].Branches_;
		Txtbranchlocation  = surveytag_[x].Blocation_;
		selected2  		   = surveytag_[x].Etalk_;
		selected3  		   = surveytag_[x].Smartphone;
		Txtotherinfo 	   = surveytag_[x].Otherinfo_;
		txtdate_		   = surveytag_[x].date_;
		txttime_		   = Moment(txtdate_).format("hh:mm a");	
		txttag_			   = surveytag_[x].tag_;	

		Txteatery_			=> this.setState({Txteatery_});
		Txtlocation_ 		=> this.setState({Txtlocation_});
		Txtelocation_ 		=> this.setState({Txtelocation_});
		TxtOtime 			=> this.setState({TxtOtime});
		TxtCtime 			=> this.setState({TxtCtime});
		TxtDayclose 		=> this.setState({TxtDayclose});
		Txttotalemp 		=> this.setState({Txttotalemp});
		Shifts				=> this.setState({Shifts});	 
		TxtEnoshift 		=> this.setState({TxtEnoshift});   	  
		Txtempnoshift 		=> this.setState({Txtempnoshift}); 	  
		Txtempnotables 		=> this.setState({Txtempnotables});	   
		Txtempnochairs 		=> this.setState({Txtempnochairs});	   
		Cashregs  	   		=> this.setState({Cashregs});    
		Txtyofbusiness 		=> this.setState({Txtyofbusiness});   
		branches  	 		=> this.setState({branches});  	   
		Txtbranchlocation  	=> this.setState({Txtbranchlocation});
		selected2  			=> this.setState({selected2});	   
		selected3  			=> this.setState({selected3});	   
		Txtotherinfo		=> this.setState({Txtotherinfo});
		txtdate_			=> this.setState({txtdate_});
		txttime_			=> this.setState({txttime_});
		txttag_				=> this.setState({txttag_});	

		//fetch('http://192.168.1.58:8080/payroll/insertinfo.php', {
		fetch('http://192.168.1.9:8080/payroll/insertinfo.php', {	
			  method: 'POST',
			  headers: {
				'Accept': 'application/json',
					'Content-Type': 'application/json',
			  },
					body: JSON.stringify({
					Eatery: Txteatery_,
					Ladd: Txtlocation_,
					Eadd: Txtelocation_,
					Otime_:TxtOtime,
					Ctime_:TxtCtime,
					DClose:TxtDayclose,
					Temp_: Txttotalemp,
					Shift_: Shifts,
					Enoshift_:TxtEnoshift,
					Enoempshift_:Txtempnoshift,
					Enotables_:Txtempnotables,
					Enochairs_:Txtempnochairs,
					cashreg_: Cashregs,
					Yofbusiness_:Txtyofbusiness,
					Branches_:branches,
					Blocation_:Txtbranchlocation,
					Etalk_:selected2,
					Smartphone:selected3,
					Otherinfo_:Txtotherinfo,
					date_: txtdate_,
					time_:txttime_,
					tag_: txttag_,
				})
 
			})
			
			x++;
	}	
	

	//fetch('http://192.168.1.4:8080/payroll/dbconfig.php',{
	fetch('http://192.168.1.9:8080/payroll/dbconfig.php',{
        method: 'GET',
        headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
        },
		/*realm.write(() => {
			Surveys.forEach(Survey=>{
			  Survey.tag_=true;
			});
		});*/	
    }).then((response) => {
		//response.json();
		if (response.headers.get('content-type').match(/application\/json/)) {
			return response.json();
		  }
		  return response;
	   })
	  .then((responseJson) => {
			//Alert.alert('test');
				realm.write(() => {
				Surveys.forEach(Survey=>{
				  Survey.tag_=true;
				});
			});				 
		}).catch((error)=>{
			console.log(error);
			alert(error);
		});					  
    return (

			<Container> 
                <Header style={{backgroundColor: '#ecf0f1'}}>
					<Left>
						<Button transparent>
							<Image source={require('./image/binhilogo.png')} /> 
						 </Button>
					 </Left>
					<Body> 
						<Title></Title>
					</Body>
					 <Right>
							<Text>{Moment(dt).format('LL')}{'\n  '}{Moment(dt).format("hh:mm a")}</Text>
					 </Right>
                </Header>
				<Content 
						refreshControl={
						<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this._onRefresh.bind(this)}
						/>
						}	
				>
					 <Tabs>
						<Tab heading="SURVEY FORM" tabStyle={{backgroundColor: '#f1c40f'}} 
								textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: '#f1c40f'}} 
								activeTextStyle={{color: 'black', fontWeight: 'normal'}}												
						>
					
							<Tabregistration/>
							
						</Tab>
						
						<Tab heading="HISTORY" tabStyle={{backgroundColor: '#f1c40f'}} 
							textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: '#f1c40f'}} 
							activeTextStyle={{color: 'black', fontWeight: 'normal'}}
						>
										<ScrollView>
											<ListView contentContainerStyle={styles.list}
												refreshControl={
												<RefreshControl
												refreshing={this.state.refreshing}
												onRefresh={this._onRefresh.bind(this)}
												/>
												}		
												dataSource={this.state.dataSource}
												renderRow={(rowData) => 
												<View>
													<Text style={styles.item}>
														{rowData.Eatery}              
													</Text>
													<Right><Text style={styles.dateitem}>{Moment(rowData.date_).format('L')}</Text></Right>
												</View>}
												
											/>	
										</ScrollView>
							
						</Tab>
						
					</Tabs>
					
				</Content>
            </Container>
     /* <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('binhisurvey', () => binhisurvey);