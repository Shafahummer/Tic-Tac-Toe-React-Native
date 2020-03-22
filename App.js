
import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import {Button, Icon} from 'native-base';
//import {Entypo} from '@expo/vector-icons';

var itemArray=new Array(9).fill('empty')
 export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      isCross:false,
      winMessage:""
    }
  }

  drawItem=(itemNumber)=>{
    if(itemArray[itemNumber]==='empty'){
      itemArray[itemNumber]=this.state.isCross;
      this.setState({isCross:!itemArray[itemNumber]})
    }
    this.winGame(); 
  }
  chooseItemIcon=itemNumber=>{
    if(itemArray[itemNumber]!=='empty'){
      return itemArray[itemNumber]? "navigate" : "cart"
    }
    else{
      return "refresh";
    }
  }
  chooseItemColor=itemNumber=>{    //if(itemArray[itemNumber]!=='empty'){
     // return itemArray[itemNumber]? "red" : "green"
   // }
    //else{
     // return "black";
    //}
  }
  resetGame=()=>{
    itemArray.fill("empty")
    this.setState({winMessage :""})
    this.forceUpdate()
  }
  winGame=()=>{
    if((itemArray[0]!=="empty")&&(itemArray[0]==itemArray[1])
    &&(itemArray[1]==itemArray[2])){
      this.setState({winMessage:(itemArray[0] ? 'navigate' : 'cart').concat(' wins')})
    }
    else if((itemArray[3]!=="empty")&&(itemArray[3]==itemArray[4])
    &&(itemArray[4]==itemArray[5])){
      this.setState({winMessage:(itemArray[3] ? 'navigate' : 'cart').concat(' wins')})
    }
    else if((itemArray[6]!=="empty")&&(itemArray[6]==itemArray[7])
    &&(itemArray[7]==itemArray[8])){
      this.setState({winMessage:(itemArray[6] ? 'navigate' : 'cart').concat(' wins')})
    }
    else if((itemArray[0]!=="empty")&&(itemArray[0]==itemArray[3])
    &&(itemArray[3]==itemArray[6])){
      this.setState({winMessage:(itemArray[0] ? 'navigate' : 'cart').concat(' wins')})
    }
    else if((itemArray[1]!=="empty")&&(itemArray[1]==itemArray[4])
    &&(itemArray[4]==itemArray[7])){
      this.setState({winMessage:(itemArray[1] ? 'navigate' : 'cart').concat(' wins')})
    }
    else if((itemArray[2]!=="empty")&&(itemArray[2]==itemArray[5])
    &&(itemArray[5]==itemArray[8])){
      this.setState({winMessage:(itemArray[2] ? 'navigate' : 'cart').concat(' wins')})
    }
    else if((itemArray[0]!=="empty")&&(itemArray[0]==itemArray[4])
    &&(itemArray[4]==itemArray[8])){
      this.setState({winMessage:(itemArray[0] ? 'navigate' : 'cart').concat(' wins')})
    }
    else if((itemArray[2]!=="empty")&&(itemArray[2]==itemArray[4])
    &&(itemArray[4]==itemArray[6])){
      this.setState({winMessage:(itemArray[2] ? 'navigate' : 'cart').concat(' wins')})
    }
  }
    render(){
    return (
      <View style={styles.container}>
        <View style={styles.grid}>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>this.drawItem(0)}
              >
              
                <Icon
                name={this.chooseItemIcon(0)}
                color={this.chooseItemColor(0)}
                style={{fontSize:100,borderWidth:3,padding:10,height:100,width:100}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>this.drawItem(1)}
              >
               
                <Icon
                size={50}

                name={this.chooseItemIcon(1)}
                color={this.chooseItemColor(1)}
                style={{fontSize:100,borderWidth:3,padding:10,height:100,width:100}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>this.drawItem(2)}
              >
               
                <Icon
                size={50}
                name={this.chooseItemIcon(2)}
                color={this.chooseItemColor(2)}
                style={{fontSize:100,borderWidth:3,padding:10,height:100,width:100}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>this.drawItem(3)}
              >
               
                <Icon
                size={50}
                name={this.chooseItemIcon(3)}
                color={this.chooseItemColor(3)}
                style={{fontSize:100,borderWidth:3,padding:10,height:100,width:100}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>this.drawItem(4)}
              >
               
                <Icon
                size={50}
                name={this.chooseItemIcon(4)}
                color={this.chooseItemColor(4)}
                style={{fontSize:100,borderWidth:3,padding:10,height:100,width:100}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>this.drawItem(5)}
              >
               
                <Icon
                size={50}
                name={this.chooseItemIcon(5)}
                color={this.chooseItemColor(5)}
                style={{fontSize:100,borderWidth:3,padding:10,height:100,width:100}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>this.drawItem(6)}
              >
               
                <Icon
                size={50}
                name={this.chooseItemIcon(6)}
                color={this.chooseItemColor(6)}
                style={{fontSize:100,borderWidth:3,padding:10,height:100,width:100}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>this.drawItem(7)}
              >
               
                <Icon
                size={50}
                name={this.chooseItemIcon(7)}
                color={this.chooseItemColor(7)}
                style={{fontSize:100,borderWidth:3,padding:10,height:100,width:100}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={()=>this.drawItem(8)}
              >
               
                <Icon
                name={this.chooseItemIcon(8)}
                color={this.chooseItemColor(8)}
                size={50}
                style={{fontSize:100,borderWidth:3,padding:10,height:100,width:100}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.winMessage}>{this.state.winMessage}</Text>
        <Button full rounded primary style={styles.button} onPress={this.resetGame}>
          <Text>Reset</Text>
        </Button>
      </View>
    )
    }
  }
  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center"
    },
    grid:{

    },
    row:{
      flexDirection:"row",

    },
    itemNumber:{
      borderWidth:3,
      borderColor:"#000",
      padding:30
    },
    winMessage:{
      padding:20,
      fontSize:25,
      fontWeight:"bold"
    },
    button:{
      margin:20,
      padding:10
    }
  })


