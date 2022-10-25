import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ActivityIndicator } from 'react-native'
import ListItemSwipeable from 'react-native-elements/dist/list/ListItemSwipeable';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import LottieView from 'lottie-react-native';
import { Icon, withBadge } from 'react-native-elements'


const SearchedLoading = () => {
  const animation = useRef(null);
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View>
      <View style={styles.nav}>
        <Icon name="home"
          size={30}
          color="#20DC49"
          style={{ marginLeft: 20, marginTop: 20 }}
        />

        <Text style={styles.searchTxt}>Searched Results</Text>
        <View style={{ marginTop: 20, marginRight: 20 }}>
          <BadgeIcon name="list-alt"
            size={30}
            color="#20DC49"
          />
        </View>

      </View>
      <View style={{ marginTop: -10 }}>
        <View style={styles.leftLine}></View>
        <View style={styles.rightLine}></View>
      </View>

      <View style={styles.search}>
        <TextInput type="text" placeholder='Results' style={styles.searchResults}
          onChangeText={(e) => setResult(e)} />
        <Icon
          name="search"
          size={25}
          color="black"
          style={{ marginLeft: 80 }}
        />
      </View>
      <View style={{ marginTop: 70 }}>
        <ActivityIndicator size="Large" color="#20DC49" />
      </View>
      <View style={{ alignItems: 'center', marginTop: 100 }}>
        <Text style={{ fontSize: 15, color: '#fff' }}>
          Please wait while we find the best products for you.</Text>
      </View>
      <View style={styles.bottomLn}></View>
      <View style={styles.copyright}>
        <Icon
          name="copyright"
          size={10}
          color='#20DC49'
        />
        <Text style={styles.copyrightTxt}>Copyright GetEatCheap 2022 Terms & Conditions/ Privacy Policy/ Sitemap</Text>
      </View>
    </View>
  )
}

export default SearchedLoading;

const styles = StyleSheet.create({
  container: {
    //backgroundColor:"#1D2D44",
    flex: 1,
    //justifyContent: "center",
    height: '100%',
    width: '100%',
  },
  nav: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -100
  },
  searchTxt: {
    fontSize: 15,
    color: '#20DC49',
    fontWeight: 'bold',
    marginTop: 140,
  },
  leftLine: {
    borderTopWidth: 1,
    borderTopColor: '#fff',
    width: 140
  },
  rightLine: {
    borderTopWidth: 1,
    borderTopColor: '#fff',
    width: 140,
    alignSelf: 'flex-end'
  },
  search: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '70%',
    height: 50,
    marginTop: '20%',
    marginBottom: '8%',
    marginLeft: '15%',
    borderColor: '#20DC49',
    borderWidth: 2,
    borderRadius: 15,
  },
  bottomLn: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginTop: 40,
  },
  copyright:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    marginTop:40,
  },
  copyrightTxt:{
    fontSize:10,
    color:'#20DC49'
  }
})
