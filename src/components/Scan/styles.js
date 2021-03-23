import {
  StyleSheet
} from 'react-native';
import { SIZES } from '../../assets/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  header: {
    backgroundColor: '#1F4F4F',
    width: SIZES.width,
    height: SIZES.height - 550,
    paddingHorizontal: 20
  },
  menu: {
    width: 30,
    height: 30,
    tintColor: 'white'
  },
  text: {
    color: 'white',
    textAlign: 'center'
  },
  textCorrect: {
    padding: wp('5%')
  },
  scan: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('8%')
  },
  img: {
    width: 40,
    height: 40,
    alignSelf: 'center'
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  },
  other: {
    //   flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  correct: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: '#215D5D'
  },
  ContainerCorrect: {
    width: wp('80%'),
    height: hp('60%'),
    margin: hp('5%'),
    borderColor: 'grey',
    borderWidth: 2,
    backgroundColor: '#1F4F4F',
    alignItems: 'center'
  },
  iconValidate: {
    width: wp('30%'),
    height: hp('15%'),
    backgroundColor: 'white',
    borderRadius: wp('50%'),
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingEnd: wp('50%'),
    backgroundColor: '#127171',
    borderRadius: 30,
    height: 50,
  },
  textRenvoyer: {
    color:'white',
    left:wp('25%')
  }
})