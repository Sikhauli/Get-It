import React from 'react';
import { View, Text, FlatList, Button, SafeAreaView, StyleSheet,
    TouchableOpacity, processColor } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from 'react-native-vector-icons';
import { Data } from '../DataAsset/data';
import img1 from '../assets/break.jpg'
import img2 from '../assets/maize.jpg'
import img3 from '../assets/rice.jpg'
import img4 from '../assets/cooking oil.jpg'




const products = [
  { _id: 1, name: 'Item 1', price: 50, quantity: 0 },
  { _id: 2, name: 'Item 2', price: 29, quantity: 0 },
  { _id: 3, name: 'Item 3', price: 200, quantity: 0 },
];

class ListItem extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', marginTop:-8, marginLeft:15}}>
          <Text style={styles.footer}>{item.name} - </Text>
          <Text style={styles.footer}>{item.price}</Text>
        </View>


        <View style={{ flexDirection: 'row', flex: 2, alignItems: 'center', marginBottom:15,  marginTop:15 }}>
        <View style={styles.inputNumber3}>
                    <AntDesign name="pluscircleo" size={15} color="#50E683" marginLeft={10} onPress={this.props.onAdd}/>
                    <Text style={{ color: '#50E683', fontSize: '1em', marginLeft: 10, marginRight: 10 }}>
                    <Text >{item.quantity}</Text>
                    </Text>
                    <AntDesign name="minuscircleo" size={15} color="#50E683" onPress={this.props.onSubtract} />
                </View>
          {/* <Button title="Subtract" onPress={this.props.onSubtract} />
          <Text >{item.quantity}</Text>
          <Button title="Add" onPress={this.props.onAdd} /> */}
        </View>
      </View>
      </>
    )
  }
}

class ListModiakgotla extends React.Component {
  state = {
    products,
  };

  onSubtract = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity -= 1;
    this.setState({ products });
  }

  onAdd = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity += 1;
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    let totalQuantity = 0;
     let totalPrice = 0;
    products.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    })

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={this.state.products}
          renderItem={({ item, index }) => (
            <ListItem
              item={item}
              onSubtract={() => this.onSubtract(item, index)}
              onAdd={() => this.onAdd(item, index)}
            />
          )}
          keyExtractor={item => item._id}
        />
       
       <View style ={{flexDirection: 'colom', justifyContent: 'space-between', alignItems: 'left',
    marginTop:-8, marginLeft:15}}>
        <Text style={styles.footer}>Total Quantity: {totalQuantity}</Text>
         <Text style={styles.footer}>Total Price: R {totalPrice}</Text> 
         <Text style={styles.footer}>Budget: R</Text>
         </View>
         

         <View style={styles.btnHistory}>
                <TouchableOpacity style={styles.historyBtn}>Check</TouchableOpacity>
            </View>
      </SafeAreaView>

      
    );
  }
}



export default ListModiakgotla;

const styles = StyleSheet.create({

    historyBtn:{
        borderWidth: 2,
        borderColor:'transparent',
        backgroundColor:'#20DC49',
        width:'40%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 15,
        marginTop:100,
        marginLeft:'30%',
    },
    searchTxt:{
        fontSize:15,
        color:'#20DC49',
        fontWeight:'bold',
        marginTop:120,
      },
      footer:{
        fontSize:15,
        color:'#20DC49',
        marginLeft:-2,
        marginTop:5,
      },
      inputNumber3: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // width: 85,
        // height: 30,
        // borderRadius: 12,
        backgroundColor: '#33517B',
        // display: 'flex', flexDirection: 'row',
        // alignItems: 'center',
        // // alignContent: 'center',
        // justifyContent: 'space-evenly',
        // padding: '4px',
    },
})    