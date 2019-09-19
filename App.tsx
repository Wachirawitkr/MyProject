import React, { Component } from 'react'
import { Text,TouchableOpacity, View } from 'react-native'

export default class App extends Component {
  constructor(){ super()
  this.state = { data: ['A','A','A',' ','B','B','B'], count: 0  }
}
click(index) {
  var space = -1
  for(var i in this.state.data)
  if (this.state.data[i] ==' ')space = i
  var distane = space - index
  if(-2 <= distane && distane <= 2) {
  this.state.data[space] = this.state.data[index]
  this.state.data[index] =' '
  this.setState({data:this.state.data,count:this.state.count+1})
 }
}
  
  render() {
    return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}
    ><Text>Moves : {this.state.count}</Text>
    <View style ={{flexDirection:'row'}}>
    {this.state.data.map((v,i) =><TouchableOpacity style={coin}
    onPress={()=> this.click(i)}>
    <Text>{v}</Text></TouchableOpacity>)}
    </View>
    <Text><strong>Rules.</strong></Text>
    <Text><li>The left set of coins can only move right, the right set of coins can only move left.</li></Text>
    <Text><li>Coins can move forword one space, or move two spaces by jumping over another coins.</li></Text>
    </View>
    }
  }
  var coin = {background:'lightblue' ,width:40,height:40,borderRadius:20, paddingTop:11, paddingLeft:16,margin:1}
