import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../../assets/theme';

export default StyleSheet.create({
    container: {
        marginTop: 20,
        bottom:10,
        top:-10,
    },
    card: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    cardOne: {
        backgroundColor: '#1F4F4F',
        width: 130,
        height: 100,
        borderTopLeftRadius:20
    },
    cardTwo: {
        backgroundColor: '#1F4F4F',
        width: 130,
        height: 100,
        borderTopRightRadius:20
    },
    bar:{
        borderBottomWidth:1,
        borderBottomColor:'white',
    },
    text:{
        textAlign:'center',
        top:-5,
        color:'white'
    },
    containerText:{
        marginTop:10,
        paddingHorizontal:20
    },
    containerSujet:{
        marginTop:10,
        paddingHorizontal:10
    },
    containerLorem:{
        paddingHorizontal:10
    }
})