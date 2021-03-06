/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
console.disableYellowBox = true;
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
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
CardItem,
Tabs,
Left,
Body,
Right,
List,
ListItem,
InputGroup,
Input,
Radio,
Icon,
Picker,
Form,
Item,
} from 'native-base';
import Moment from 'moment';
//const moment = require('moment');
//import {moment} from 'moment/src/moment'
const Items = Picker.Item;
const Realm = require('realm');
import DatePicker from 'react-native-datepicker';

class Surveys {}
Surveys.schema = {
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
			Oname_:"string",
			lending:"bool",
			lendname_:"string",
			date_: "date",
			tag_:"bool",
			Contacts_: "string",
			Aveamt_: "int",
			id_: {type: 'int', default: 0},
		}
}

let realm = new Realm({schema: [Surveys],schemaVersion:8});



//import Tablisting from '../src/tablisting';
/*let dogs = [ realm.objects('Dog') ];*/
//let Surveys = [ realm.objects('Survey')];
Moment.locale('en');
var dt = new Date();
txtdates_=Moment(dt).format('L');
timeformat_=Moment(dt).format('HH:MM');

class tabregistration extends Component {

  /*constructor(props) {
    super(props);
    this.state = {
      selected2: '',
	  //isSelectyes: false,
	  //isSelectno: false,
	  //isDisabledShift:true,
	  selected3: 'No Response',
    };
  }*/

   constructor(props) {
    super(props);
    this.state = {
			 isSelectyes: false,
			 isSelectno: false,
			 isDisabledShift:true,
			 selected2:'None',
			 isCashregno:false,
			 isCashregyes:false,
			 isDisabledCashreg:true,
			 isBranchSelectyes:false,
			 isBranchSelectno:false,
			 isDisabledbranch:true,
			 Txteatery_:'',
			 Txtlocation_:'',
			 Txtelocation_:'',
			 Shifts:false,
			 TxtEnoshift:'',
			 Txtempnoshift:'',
			 Txtempnotables:'',
			 Txtempnochairs:'',
			 Cashregs:false,
			 Txtyofbusiness:'',
			 branches:false,
			 Txtbranchlocation: '',
			 selected3:'No-Response',
			 TxtOtime:'',
			 TxtCtime:'',
			 TxtDayclose:'',
			 TxtOname_:'',
			 Txttotalemp:'',
			 Txtotherinfo:'',
			 Eateryfocus:true,
			 txtdates_: '',
			 txtcontact_:'',
			 txtlending_:false,
			 txtavemt_:0,
			 isDisabledlending:true,
			 Txtlendingcompany:'',
    };
  }

	_onPressHandle = () => {
			this.setState({isSelectno: false})
			this.setState({isSelectyes: !this.state.isSelectyes})
			//this.setSate({isDisabledShift:false})
	}

	_onPressHandle1 = () => {
			this.setState({isSelectyes: false})
			this.setState({isSelectno: !this.state.isSelectno})
			//this.setSate({isDisabledShift:true})
  }


    onValueChange2(value: string) {
    this.setState({
      selected2: value
    });

}

    onValueChange3(value: string) {
    this.setState({
      selected3: value
    });
 }

 InsertData = () => {

		var dateObj = new Date();
		var month = dateObj.getUTCMonth() + 1; //months from 1-12
		var day = dateObj.getUTCDate();
		var year = dateObj.getUTCFullYear();

		formatdates = year + "-" + month + "-" + day;

		const{ Txteatery_ }        = this.state;
		const{ Txtlocation_ }      = this.state;
		const{ Txtelocation_ }     = this.state;
		const{ TxtOtime } 	       = this.state;
		const{ TxtCtime } 	       = this.state;
		const{ TxtDayclose }       = this.state;
		const{ Txttotalemp }       = this.state;
		const{ Shifts } 	       = this.state;
		const{ TxtEnoshift }       = this.state;
		const{ Txtempnoshift }     = this.state;
		const{ Txtempnotables }    = this.state;
		const{ Txtempnochairs }    = this.state;
		const{ Cashregs } 		   = this.state;
		const{ Txtyofbusiness }    = this.state;
		const{ branches } 		   = this.state;
		const{ Txtbranchlocation } = this.state;
		const{ selected2 } 		   = this.state;
		const{ selected3 } 		   = this.state;
		const{ Txtotherinfo } 	   = this.state;
		const{ txtdates_ } 		   = this.state;
		const{ txttag_ } 		   = this.state;
		const{ TxtOname_ } 		   = this.state;
		const{ txtcontact_ } 	   = this.state;
		const{ txtlending_ } 	   = this.state;
		const{ txtavemt_ } 		   = this.state;
		const{Txtlendingcompany} = this.state;

		Realm.open({schema:[Surveys.schema],schemaVersion:8})
			.then(realm => {
			try{
				realm.write(() => {
					realm.create('Survey',{
						Eatery: Txteatery_,
						Ladd: Txtlocation_,
						Eadd: Txtelocation_,
						Otime_: TxtOtime,
						Ctime_: TxtCtime,
						DClose: TxtDayclose,
						Temp_: Txttotalemp,
						Shift_: Shifts,
						Enoshift_: TxtEnoshift,
						Enoempshift_: Txtempnoshift,
						Enotables_: Txtempnotables,
						Enochairs_: Txtempnochairs,
						cashreg_: Cashregs,
						Yofbusiness_: Txtyofbusiness,
						Branches_ : branches,
						Blocation_: Txtbranchlocation,
						Etalk_: selected2,
						Smartphone: selected3,
						date_: new Date(),
						tag_:false,
						lending:txtlending_,
						Oname_:TxtOname_,
						Otherinfo_: Txtotherinfo,
						Contacts_: txtcontact_,
						Aveamt_: parseInt(txtavemt_),
            lendname_: Txtlendingcompany,
					});
				});
			} catch(e){
				console.log("error on creation");
				Alert.alert(e.message);
			}
				this.setState({ realm });
			});

			const query_= this.state.realm

			Alert.alert("Record has been saved");

    this._textInputEatery.setNativeProps({text: ''});
	this._textInputLocation.setNativeProps({text: ''});
	this._textInputeLocation.setNativeProps({text: ''});
	//this._textInputOpening.setNativeProps({text: ''});
	//this._textInputClosing.setNativeProps({text: ''});
	this._textInputDclosed.setNativeProps({text: ''});
	this._textInputNoEmp.setNativeProps({text: ''});
	this._textInputEmpshift.setNativeProps({text: ''});
	this._textInputNoEmpshift.setNativeProps({text: ''});
	this._textInputNoTable.setNativeProps({text: ''});
	this._textInputYrofbusiness.setNativeProps({text: ''});
	this._textInputBranchlocation.setNativeProps({text: ''});
	this._textInputOwnerName.setNativeProps({text: ''});
	this._textInputOtherInfo.setNativeProps({text: ''});
	this._textInputNoChairs.setNativeProps({text: ''});
	this._textInputcontact.setNativeProps({text: ''});
	this._textInputaverage.setNativeProps({text:''});
  this._textInputlendingcompany.setNativeProps({text:''});
	this.setState({isSelectno: false,
				   isSelectyes: false,
				   isCashregyes: false,
				   isCashregno: false,
				   Cashregs: false,
				   Shifts: false,
				   isBranchSelectyes: false,
				   isBranchSelectno: false,
				   Eateryfocus: true,
				   isLendingSelectedyes:false,
				   isLendingSelectedno: false,
				   isDisabledlending:true,
	});


	this.setState({Txteatery_:''});
	this.setState({Txtlocation_:''});
	{/*this.setState({isSelectyes: false});*/}
	{/*this.setState({isSelectno: false});*/}
	this.setState({isDisabledShift:true,});
	{/*this.setState({isCashregno:false});*/}
	{/*this.setState({isCashregyes:false});*/}
	this.setState({isDisabledCashreg:true});
	{/*this.setState({isBranchSelectyes:false});*/}
	{/*this.setState({isBranchSelectno:false});*/}
	this.setState({isDisabledbranch:true});
	this.setState({Txtelocation_:''});
	{/*this.setState({Shifts:false});*/}
	this.setState({TxtEnoshift:''});
	this.setState({Txtempnoshift:''});
	this.setState({Txtempnotables:''});
	this.setState({Txtempnochairs:''});
	{/*this.setState({Cashregs:false});*/}
	this.setState({Txtyofbusiness:''});
	this.setState({branches:false});
	this.setState({Txtbranchlocation:''});
	this.setState({TxtOtime:''});
	this.setState({TxtCtime:''});
	this.setState({TxtDayclose:''});
	this.setState({TxtOname_:''});
	this.setState({Txttotalemp:''});
	this.setState({Txtotherinfo:''});
	this.setState({Eateryfocus:true});
	this.setState({txtdates_: ''});
	this.setState({txttag_:false});
	this.setState({selected2:'None'});
	this.setState({selected3:'No-Response'});
	this.setState({txtcontact_:''});
	this.setState({txtlending_:false});
	this.setState({txtavemt_:0});
  this.setState({Txtlendingcompany:''});
  //this._textInputlendingcompany._root.focus();
	this._textInputEatery._root.focus();

	//this.setState({Txtlocation_: ''});


}

 _onRefresh() {
	this.setState({refreshing: true});
	let realms = new Realm({schema: [Surveys],schemaVersion: 8});
		let Survey = realm.objects('Survey');

		var surveydata1 = JSON.stringify(Survey);
		var arr1 = JSON.parse(surveydata1);

		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(arr1)});
		this.setState({refreshing: false});
}


  render() {
    return (

			<Container style={{flex:1, height:2700,}}>
				<List style={{marginLeft:10,marginRight:10,}}>

				{/*description of the eatery*/}
					<ListItem>
							<InputGroup>
								<Text style={{marginLeft:20,}}>Name of the eatery</Text>
							</InputGroup>
					</ListItem>

					<ListItem>
						<Item regular>
							<InputGroup >
								<Input autoFocus={this.state.Eateryfocus}
									  onChangeText={ Txteatery_ => this.setState({Txteatery_})}
									  ref={component => this._textInputEatery = component}
									  returnKeyType="next"
									  onSubmitEditing={(event) => {this._textInputLocation._root.focus();}}

								/>
							</InputGroup>
						</Item>
					</ListItem>

					{/*description of the area location*/}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Area location</Text>
						</InputGroup>
					</ListItem>

					<ListItem>
						<Item regular>
							<InputGroup>
								<Input onChangeText={ Txtlocation_ => this.setState({Txtlocation_})}
									  ref={(component) => this._textInputLocation = component}
									  returnKeyType="next"
									    value = {this.state.onValueChangelocation}
									  onSubmitEditing={(event) => {this._textInputeLocation._root.focus();}}
								/>
							</InputGroup>
						</Item>
					</ListItem>

					{/*description of the Exact address location*/}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Exact address with landmark </Text>
						</InputGroup>
					</ListItem>

					<ListItem>
						<Item regular>
							<InputGroup>
								<Input onChangeText={ Txtelocation_ => this.setState({Txtelocation_})}
									ref={component => this._textInputeLocation = component}
									returnKeyType="next"

								/>
							</InputGroup>
						</Item>
					</ListItem>

					{/*description of the opening and closing time*/}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Opening time </Text>
							<Text style={{marginLeft:60,}}>Closing time </Text>
						</InputGroup>
					</ListItem>

					<ListItem>
						<Item regular>
							<InputGroup>
								<DatePicker
										  style={{width: 150,marginLeft:-5}}
										  date={this.state.TxtOtime}
										  mode="time"
										  format="hh:mm a"
										  confirmBtnText="Confirm"
										  cancelBtnText="Cancel"
										  minuteInterval={10}
										  onDateChange={(TxtOtime) => {this.setState({TxtOtime});}}
								/>
							<DatePicker
										  style={{width: 150,}}
										  date={this.state.TxtCtime}
										  mode="time"
										  format="hh:mm a"
										  confirmBtnText="Confirm"
										  cancelBtnText="Cancel"
										  minuteInterval={10}
										  onDateChange={(TxtCtime) => {this.setState({TxtCtime});}}
								/>
							</InputGroup>
						</Item>
					</ListItem>

					{/*Stores closing day*/}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>What days are they closed? </Text>
						</InputGroup>
					</ListItem>

					<ListItem>
						<Item regular>
							<InputGroup>
								<Input  onChangeText={ TxtDayclose => this.setState({TxtDayclose})}
										ref={component => this._textInputDclosed= component}
										returnKeyType="next"
										onSubmitEditing={(event) => {this._textInputNoEmp._root.focus();}}
								/>
							</InputGroup>
						</Item>
					</ListItem>

					{/*total number of employees*/}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>What is the total number of employees? </Text>
						</InputGroup>
					</ListItem>

					<ListItem>
						<Item regular>
							<InputGroup>
								<Input onChangeText={ Txttotalemp => this.setState({Txttotalemp})}
									ref={component => this._textInputNoEmp= component}
									keyboardType = 'numeric'
								/>
							</InputGroup>
						</Item>
					</ListItem>

					{/*shift option */}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Do they have shifts? </Text>
						</InputGroup>
					</ListItem>

					<ListItem>
						<InputGroup>
								<Radio style={{margin:20,}} selected={this.state.isSelectyes} onPress={() => this.setState({isSelectyes: true, isSelectno:false,isDisabledShift:false,Shifts:true})} />
							 <Text>YES</Text>
								<Radio style={{margin:20,}}  selected={this.state.isSelectno} onPress={() => this.setState({isSelectyes: false, isSelectno:true,isDisabledShift:true,Shifts:false})} />
							 <Text>NO</Text>

						</InputGroup>
					</ListItem>

					{/*no. of shifts */}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>If yes, how many shifts? </Text>
						</InputGroup>
					</ListItem>

					<ListItem>
						<Item regular>
							<InputGroup>

								<Input onChangeText={ TxtEnoshift => this.setState({TxtEnoshift})}
									  disabled={this.state.isDisabledShift}
									  ref={component => this._textInputEmpshift= component}
									  keyboardType = 'numeric'
									  returnKeyType="next"
									  onSubmitEditing={(event) => {this._textInputNoEmpshift._root.focus();}}
								/>

							</InputGroup>
						</Item>
					</ListItem>

					{/*No. of employees per shift*/}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>How many employees per shift? </Text>
						</InputGroup>
					</ListItem>

					<ListItem>
						<Item regular>
							<InputGroup>
								<Input onChangeText={ Txtempnoshift => this.setState({Txtempnoshift})}
									   disabled={this.state.isDisabledShift}
									   ref={component => this._textInputNoEmpshift= component}
									   returnKeyType="next"
									   keyboardType = 'numeric'
									   onSubmitEditing={(event) => {this._textInputNoTable._root.focus();}}
								/>
							</InputGroup>
						</Item>

					</ListItem>

					{/* No. of tables */}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>How many tables are there? </Text>
						</InputGroup>
					</ListItem>

					<ListItem>
						<Item regular>
							<InputGroup>

								<Input  onChangeText={ Txtempnotables => this.setState({Txtempnotables})}
										ref={component => this._textInputNoTable = component}
										onSubmitEditing={(event) => {this._textInputNoChairs._root.focus();}}
										returnKeyType="next"
										keyboardType = 'numeric'
								/>

							</InputGroup>
						</Item>
					</ListItem>

					{/* No. of chairs */}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>How many chairs are there? </Text>
						</InputGroup>
					</ListItem>

					<ListItem>
						<Item regular>
							<InputGroup>
								<Input
										onChangeText={ Txtempnochairs => this.setState({Txtempnochairs})}
										ref={component => this._textInputNoChairs = component}
										keyboardType = 'numeric'

							/>
							</InputGroup>
						</Item>
					</ListItem>

					{/*Cash Register Option*/}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Do they have cash register? </Text>
						</InputGroup>
					</ListItem>


					<ListItem>

						<InputGroup>
								<Radio style={{margin:20,}} selected={this.state.isCashregyes} onPress={() => this.setState({isCashregyes: true, isCashregno:false, isDisabledCashreg:false, Cashregs:true})} />
							 <Text>YES</Text>
								<Radio style={{margin:20,}} selected={this.state.isCashregno} onPress={() => this.setState({isCashregyes: false, isCashregno:true, isDisabledCashreg:true, Cashregs:false})} />
							 <Text>NO</Text>
						</InputGroup>

					</ListItem>

					{/*years of busines*/}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>How many years have they been in business? </Text>
						</InputGroup>
					</ListItem>

					<ListItem>
						<Item regular>
							<InputGroup>
								<Input 	onChangeText={ Txtyofbusiness => this.setState({Txtyofbusiness})}
										ref={component => this._textInputYrofbusiness = component}
										keyboardType = 'numeric'
								/>
							</InputGroup>
						</Item>
					</ListItem>

					{/*other branches */}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Do they have other branches? </Text>
						</InputGroup>
					</ListItem>

					<ListItem>

						<InputGroup>
								<Radio style={{margin:20,}} selected={this.state.isBranchSelectyes} onPress={() => this.setState({isBranchSelectyes: true, isBranchSelectno:false,isDisabledbranch:false,branches:true})} />
							 <Text>YES</Text>
								<Radio style={{margin:20,}} selected={this.state.isBranchSelectno} onPress={() => this.setState({isBranchSelectyes: false, isBranchSelectno:true,isDisabledbranch:true,branches:false})} />
							 <Text>NO</Text>

						</InputGroup>

					</ListItem>

					{/* branch location */}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Where are the branches located? </Text>
						</InputGroup>
					</ListItem>

					<ListItem>
						<Item regular>
							<InputGroup>
								<Input  onChangeText={ Txtbranchlocation => this.setState({Txtbranchlocation})}
										disabled={this.state.isDisabledbranch}
										ref={component => this._textInputBranchlocation = component}
								/>
							</InputGroup>
						</Item>
					</ListItem>

					{/* who did you talk */}
					<Form style={{marginLeft:20,}}>
						<Text style={{marginLeft:15,}}>Who did you Talk To?</Text>
						<Picker
							  mode="dropdown"
							  placeholder="Select One"
							  selectedValue={this.state.selected2}
							  onValueChange={this.onValueChange2.bind(this)}
								>
							 <Items label="None" value="No" />
							 <Items label="Manager/Supervisor" value="Manager/Supervisor" />
							 <Items label="Employee" value="Employee" />
							 <Items label="Owner" value="Owner" />
						</Picker>
					</Form>

					<ListItem>
						{/* Name of the Owner */}
						<InputGroup>
							<Text style={{marginLeft:20,}}>What is the name of the owner? </Text>
						</InputGroup>
					</ListItem>

					<ListItem>
						<Item regular>
							<InputGroup>
								<Input	onChangeText={ TxtOname_ => this.setState({TxtOname_})}
										ref={component => this._textInputOwnerName = component}
										onSubmitEditing={(event) => {this._textInputcontact._root.focus();}}
										returnKeyType="next"
								/>
							</InputGroup>
						</Item>
					</ListItem>

					{/*contact number */}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Owner's contact Number </Text>
						</InputGroup>
					</ListItem>

					<ListItem>
						<Item regular>
							<InputGroup>
								<Input	onChangeText={ txtcontact_ => this.setState({txtcontact_})}
										ref={component => this._textInputcontact = component}
										keyboardType = 'numeric'
								/>
							</InputGroup>
						</Item>
					</ListItem>

					{/* smart phon option */}
					<Form style={{marginLeft:20,}}>
						<Text style={{marginLeft:15,}}>Does the owners owns a smartphone or tablet? </Text>
						<Picker
							  mode="dropdown"
							  placeholder="Select One"
							  selectedValue={this.state.selected3}
							  //selectedValue={(this.state && this.state.selected3) || 'a'}
							  //onValueChange={(value) => {
							  //this.setState({selected3: value});}}
							  onValueChange={this.onValueChange3.bind(this)}
								>



							 <Items label="No Response" value="No Response" />
							 <Items label="Yes-Smartphone" value="Yes-Smartphone" />
							 <Items label="Yes-Tablet" value="Yes-Tablet" />
							 <Items label="Yes-Both" value="Yes-Both" />
						</Picker>

					</Form>

					{/*lending option*/}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Lending partners</Text>
						</InputGroup>
					</ListItem>

					<ListItem>

						<InputGroup>
								<Radio style={{margin:20,}} selected={this.state.isLendingSelectedyes} onPress={() => this.setState({isLendingSelectedyes: true,isDisabledlending:false, isLendingSelectedno:false,txtlending_:true})} />
							 <Text>YES</Text>
								<Radio style={{margin:20,}} selected={this.state.isLendingSelectedno} onPress={() => this.setState({isLendingSelectedyes: false,isDisabledlending:true, isLendingSelectedno:true,txtlending_:false})} />
							 <Text>NO</Text>

						</InputGroup>

					</ListItem>

					{/*lending company name */}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Lending company </Text>
						</InputGroup>
					</ListItem>

					<ListItem>
						<Item regular>
							<InputGroup>
								<Input  onChangeText={ Txtlendingcompany => this.setState({Txtlendingcompany})}
										disabled={this.state.isDisabledlending}
										ref={component => this._textInputlendingcompany = component}
                    onSubmitEditing={(event) => {this._textInputaverage._root.focus();}}
								/>
							</InputGroup>
						</Item>
					</ListItem>

					{/*Average daily sales */}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Average Daily Sales </Text>
						</InputGroup>
					</ListItem>

					<ListItem>
						<Item regular>
							<InputGroup>
								<Input	onChangeText={ txtavemt_ => this.setState({txtavemt_})}
										ref={component => this._textInputaverage = component}
										value={this.setState.txtavemt_}
										keyboardType = 'numeric'
								/>
							</InputGroup>
						</Item>
					</ListItem>

          {/*other informatiom*/}
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Other Information? </Text>
						</InputGroup>
					</ListItem>
          <ListItem>
            <Item regular>
              <InputGroup style={{height:100,width:355}}>
                 <Input  onChangeText={ Txtotherinfo => this.setState({Txtotherinfo})}
                   style={{height:150,width:300}}  ref={component => this._textInputOtherInfo = component} multiline={true}
                   numberOfLines = {4} editable = {true}	type="text"	value={this.state.Txtotherinfo}
                 />
              </InputGroup>
            </Item>
          </ListItem>

						{/* save button */}
						<Button block success
								  style={{ padding:20,margin:20, backgroundColor:'#f1c40f'}}
								  onPress={this.InsertData} color='#2196F3'
								  onSubmitEditing={(event) => this.refs.Txteatery_.focus()}
						  >
							<Text style={{fontSize:16,}}>Save</Text>
						  </Button>

						  {/*exit button*/}
						  <Button block success style={{padding:20,margin:20,backgroundColor:'#f1c40f',}}
						  >
							<Text>Exit</Text>
						  </Button>



				</List>
			</Container>
    );
  }
}

const styles=StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#f1c40f',

	},
	subtitle:{
		fontSize:24,
		fontWeight:'200',
		color: 'white',
	},
	buttoncontainer:{
		padding:20,
	},
	buttonlogin:{
		backgroundColor: '#2980b9',
		height: 80,
		marginBottom:20,
		marginLeft:10,
		marginRight:10,
	},
	buttonregister:{
		backgroundColor: '#2980b9',
		height: 80,
		marginBottom:20,
		marginLeft:10,
		marginRight:10,
	},
	buttonregisterinfo:{
		backgroundColor: '#2980b9',
		height: 80,
		marginLeft:10,
		marginRight:10,
	},
	buttontext:{
		fontSize:25,
		fontWeight: 'bold',
		textAlign: 'center',
		justifyContent: 'center',
		color: 'white',
		padding: 10,
		marginTop:10,
	},
	imagecontainer:{
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1,
	},
	imagecontainerregister:{
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo:{
		width: 150,
		height: 150,
	},
	logoregister:{
		width: 150,
		height: 150,
	},
	input:{
		height: 50,
		backgroundColor: '#ecf0f1',
		marginBottom: 10,
		fontSize:25,
		marginLeft: 30,
		marginRight: 30,
	},
	icon: {
		width: 26,
		height: 26,
	  },
});

export default tabregistration;
