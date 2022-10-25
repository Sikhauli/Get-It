import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from 'react-native-vector-icons';
import { Data } from '../DataAsset/data';
import img1 from '../assets/break.jpg'
import img2 from '../assets/maize.jpg'
import img3 from '../assets/rice.jpg'
import img4 from '../assets/cooking oil.jpg'

const List = () => {
    return (

        <View style={styles.container}>
            <View style={styles.nav}>
                <Icon name="home"
                    size={25}
                    color="#20DC49"
                    style={{ marginBottom: 60, marginLeft: 10 }}
                />
            </View>

            <View style={styles.navigator}>
                <Text style={styles.TextList}>List</Text>
                <View style={styles.line1}></View>
                <View style={styles.line2}></View>
            </View>

            <View style={styles.listView}>
                <Image style={styles.img} source={img1} />
                <View style={styles.inputNumber}>
                    <AntDesign name="pluscircleo" size={16} color="#50E683" marginLeft={10} />
                    <Text style={{ color: '#50E683', fontSize: '1em', marginLeft: 10, marginRight: 10 }}>
                        0
                    </Text>
                    <AntDesign name="minuscircleo" size={16} color="#50E683" />
                </View>
                <View style={styles.details}>
                    <Text style={{ color: '#50E683' }}>Sunbake</Text>
                    <Text style={{ color: '#50E683' }}>700g bread</Text>
                    <Text style={{ color: '#50E683' }}>R 17.00</Text>
                </View>
            </View>

            <View style={styles.listView2}>
                <Image style={styles.img2} source={img2} />
                <View style={styles.inputNumber2}>
                    <AntDesign name="pluscircleo" size={16} color="#50E683" marginLeft={10} />
                    <Text style={{ color: '#50E683', fontSize: '1em', marginLeft: 10, marginRight: 10 }}>
                        0
                    </Text>
                    <AntDesign name="minuscircleo" size={16} color="#50E683" />
                </View>
                <View style={styles.details2}>
                    <Text style={{ color: '#50E683' }}>Iwisa maize</Text>
                    <Text style={{ color: '#50E683' }}>meal</Text>
                    <Text style={{ color: '#50E683' }}>10kg </Text>
                    <Text style={{ color: '#50E683' }}>R69.99</Text>
                </View>
            </View>

            <View style={styles.listView3}>
                <Image style={styles.img3} source={img3} />
                <View style={styles.inputNumber3}>
                    <AntDesign name="pluscircleo" size={16} color="#50E683" marginLeft={10} />
                    <Text style={{ color: '#50E683', fontSize: '1em', marginLeft: 10, marginRight: 10 }}>
                        0
                    </Text>
                    <AntDesign name="minuscircleo" size={16} color="#50E683" />
                </View>
                <View style={styles.details3}>
                    <Text style={{ color: '#50E683' }}>Tastic </Text>
                    <Text style={{ color: '#50E683' }}>Rice </Text>
                    <Text style={{ color: '#50E683' }}>2kg</Text>
                    <Text style={{ color: '#50E683' }}>R24.99</Text>
                </View>
            </View>

            <View style={styles.listView4}>
                <Image style={styles.img4} source={img4} />
                <View style={styles.inputNumber4}>
                    <AntDesign name="pluscircleo" size={16} color="#50E683" marginLeft={10} />
                    <Text style={{ color: '#50E683', fontSize: '1em', marginLeft: 10, marginRight: 10 }}>
                        0
                    </Text>
                    <AntDesign name="minuscircleo" size={16} color="#50E683" />
                </View>
                <View style={styles.details4}>
                    <Text style={{ color: '#50E683' }}>Sunfoil </Text>
                    <Text style={{ color: '#50E683' }}>Sunflower Oil </Text>
                    <Text style={{ color: '#50E683' }}>2lt</Text>
                    <Text style={{ color: '#50E683' }}>R90.00</Text>
                </View>
            </View>

            <Text style={{ color: '#50E683', fontWeight: "bold", fontSize: 32, marginLeft: 20, marginTop: 55 }}>Budget:R1500</Text>

            <View style={styles.btnHistory}>
                <TouchableOpacity style={styles.historyBtn}>Check</TouchableOpacity>
            </View>
            
        </View>
    )
}

export default List;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",

    },
    nav: {
        width: '100%',
        height: '10%',
        marginTop: -150,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navigator: {
        marginTop: -90,
        marginBottom: 60,
        alignItems: 'center'
    },

    TextList: {
        color: '#20DC49',
        fontSize: 25,
        marginTop: 30,
        fontStyle: 'italic',
    },
    line1: {
        width: '40%',
        borderTopWidth: 2,
        borderTopColor: '#fff',
        marginEnd: '75%',
    },
    line2: {
        width: '40%',
        borderTopWidth: 2,
        borderTopColor: '#fff',
        marginStart: '75%',
    },
    listView: {
        //display: 'flex', flexDirection: 'row', alignItems: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderBottomColor: '#50E683',
        borderBottomWidth: '1px',
        padding: 5,
        marginbottom: -1,
    },
    img: {
        width: 85,
        height: 75,
        borderRadius: 5,
    },
    inputNumber: {
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
    details: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },

    listView2: {
        //display: 'flex', flexDirection: 'row', alignItems: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderBottomColor: '#50E683',
        borderBottomWidth: '1px',
        padding: 20,
        margin: -1,
    },
    img2: {
        width: 85,
        height: 75,
        borderRadius: 5,
    },
    inputNumber2: {
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
    details2: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },

    listView3: {
        //display: 'flex', flexDirection: 'row', alignItems: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderBottomColor: '#50E683',
        borderBottomWidth: '1px',
        padding: 20,
        margin: -1,
    },
    img3: {
        width: 85,
        height: 75,
        borderRadius: 5,
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
    details3: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },

    listView4: {
        //display: 'flex', flexDirection: 'row', alignItems: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderBottomColor: '#50E683',
        borderBottomWidth: '1px',
        padding: 20,
        margin: -1,
    },
    img4: {
        width: 85,
        height: 75,
        borderRadius: 5,
    },
    inputNumber4: {
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
    details4: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    historyBtn: {
        borderWidth: 2,
        borderColor: 'transparent',
        backgroundColor: '#20DC49',
        width: '40%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: "bold",
        borderRadius: 15,
        marginTop: 15,
        marginLeft: '30%',
    }


});