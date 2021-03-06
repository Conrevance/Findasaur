import { StyleSheet, Text, View } from 'react-native';
import { Dimensions, Image, LayoutAnimation, TouchableHighlight, TouchableOpacity } from 'react-native';


const TimePeriodStyle = StyleSheet.create({
  bodyText: {
    fontSize: 16,
    color: 'white'
  },
  filterText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white'
  },
  linearGradient: {
    flex: 1,
    borderRadius: 0
  },
  reactionBox: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  description: {
    width: 0,
    height: 0,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent'
  },
  profilePicture: {
    width: "100%",
    height: Dimensions.get('window').height*0.66,
    backgroundColor: 'black',
    resizeMode: 'stretch',

  },
  displayName: {
    fontFamily: 'FrederickatheGreat-Regular',
    color: '#00e500',
    marginTop: 22,
    fontSize: 33,
    marginBottom: 5
  },
  eraTitle: {
    color: 'white',
    fontSize: Dimensions.get('window').width < 400 ? 38 : 45,
    position: 'absolute',
    top: '35%',
    textShadowColor: 'black',
    textShadowOffset: {width: -5, height: 5},
    textShadowRadius: 25
  },
  eraDescriptionText: {
    color: 'white',
    fontSize: 20
  },
  dinoSearchButton: {
    width: Dimensions.get('window').width*0.2

  },
  plusButton: {
    width: Dimensions.get('window').width*0.2,
    height: Dimensions.get('window').width*0.2,
    resizeMode: 'stretch',

    position: 'absolute',
    top: -Dimensions.get('window').height*0.11,
    left: Dimensions.get('window').width*0.6,

  },
  plusButtonView: {
    width: Dimensions.get('window').width*0.2,
    height: Dimensions.get('window').width*0.2,

    position: 'absolute',
    top: -Dimensions.get('window').height*0.11,
    left: Dimensions.get('window').width*0.6,

  },
});

export default TimePeriodStyle;
