import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import img1 from '../assets/break.jpg'
import img2 from '../assets/maize.jpg'
import img3 from '../assets/rice.jpg'
import img4 from '../assets/cooking oil.jpg'
import img5 from '../assets/shoprite.png'

const Results = () => {
    return (

        <View style={styles.container}>
        <View style={{marginTop:100,marginBottom:20}}>
            <View style={styles.nav}>
                <Icon name="home"
                    size={25}
                    color="#BB0202"
                    style={{ marginTop: -150, marginLeft: 10 }}
                />
            </View>

            <View style={styles.navigator}>
                <Image style={{ justifyContent: "center", width: 150, height: 75, borderRadius: 5,marginTop:20 }} source={img5} />
            </View>

            <View style={styles.nav2}>
                <Icon name="search"
                    size={25}
                    color="#BB0202"
                    style={{ marginBottom: 30, marginLeft: 370, marginTop:10 }}
                />
            </View>
        </View>
            <View style={styles.listView}>
                <Image style={styles.img} source={img1} />
                <View style={styles.inputNumber}>
                    <Text style={{ color: '#BB0202', fontSize: '1em', marginLeft: 10, marginRight: 10 }}>2</Text>
                </View>
                <View style={styles.details}>
                    <Text style={{ color: '#BB0202' }}>R 17.00</Text>
                </View>
                <View>
                    <Icon name="trash"
                        size={25}
                        color="#BB0202"
                        style={{ marginBottom: 10, marginLeft: 15 }}
                    />
                </View>
            </View>

            <View style={styles.listView2}>
                <Image style={styles.img2} source={img2} />
                <View style={styles.inputNumber2}>
                    <Text style={{ color: '#BB0202', fontSize: '1em', marginLeft: 10, marginRight: 10 }}>1</Text>
                </View>
                <View style={styles.details2}>
                    <Text style={{ color: '#BB0202' }}>R69.99</Text>
                </View>
                <View>
                    <Icon name="trash"
                        size={25}
                        color="#BB0202"
                        style={{ marginBottom: 10, marginLeft: 15 }}
                    />
                </View>
            </View>

            <View style={styles.listView3}>
                <Image style={styles.img3} source={img3} />
                <View style={styles.inputNumber3}>
                    <Text style={{ color: '#BB0202', fontSize: '1em', marginLeft: 10, marginRight: 10 }}>2</Text>
                </View>
                <View style={styles.details3}>
                    <Text style={{ color: '#BB0202' }}>R24.99</Text>
                </View>
                <View>
                    <Icon name="trash"
                        size={25}
                        color="#BB0202"
                        style={{ marginBottom: 10, marginLeft: 15 }}
                    />
                </View>
            </View>

            <View style={styles.listView4}>
                <Image style={styles.img4} source={img4} />
                <View style={styles.inputNumber4}>
                    <Text style={{ color: '#BB0202', fontSize: '1em', marginLeft: 10, marginRight: 10 }}>1</Text>
                </View>
                <View style={styles.details4}>
                    <Text style={{ color: '#BB0202' }}>R90.00</Text>
                </View>
                <View>
                    <Icon name="trash"
                        size={25}
                        color="#BB0202"
                        style={{ marginBottom: 10, marginLeft: 15 }}
                    />
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Text style={{ color: '#BB0202', fontSize: 18, marginLeft: 20, marginTop: 25 }}>Budget:R1500</Text>
                    <Text style={{ color: '#BB0202', fontSize: 18, marginLeft: 20, marginTop: 25 }}>Budget:R1500</Text>
                    <Text style={{ color: '#BB0202', fontSize: 18, marginLeft: 20, marginTop: 25 }}>Budget:R1500</Text>
                </View>
                <View style={{}}>
                    <TouchableOpacity style={styles.saveBtn}>Save</TouchableOpacity>
                </View>
            </View>
            <View style={styles.btnDownload}>
                <TouchableOpacity style={styles.downloadBtn}>Download List</TouchableOpacity>
            </View>
        </View>
    )
}

export default Results;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",

    },
    nav: {
        width: '100%',
        height: '10%',
        marginTop: -40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nav2: {
        width: '100%',
        height: '10%',
        marginTop: -130,
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
        borderBottomColor: '#BB0202',
        borderBottomWidth: '1px',
        padding: 5,
        marginbottom: -20,
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
        //backgroundColor: '#BB0202',
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
        borderBottomColor: '#BB0202',
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
        //backgroundColor: '#33517B',
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
        borderBottomColor: '#BB0202',
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
        //backgroundColor: '#33517B',
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
        borderBottomColor: '#BB0202',
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
        //backgroundColor: '#33517B',
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
    downloadBtn: {
        borderWidth: 2,
        borderColor: 'transparent',
        backgroundColor: '#BB0202',
        width: '40%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: "bold",
        borderRadius: 15,
        marginTop: 80,
        marginLeft: '30%',
    },
    saveBtn: {
        borderWidth: 2,
        borderColor: 'transparent',
        backgroundColor: '#BB0202',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: "bold",
        borderRadius: 15,
        marginTop: 65,
        marginLeft: '60%',
    }


});