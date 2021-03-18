import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../../assets/theme';

export default StyleSheet.create({
    container: {
        marginTop: 30,
        height: SIZES.height / 1.8,
        borderRadius: 20,
        backgroundColor: '#127171',
        alignItems: 'center',
        borderRadius: 20,
    },
    card: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        height: 150,
        margin:5,
        alignSelf:'center',
        justifyContent:'center',
        paddingHorizontal:20,
        borderRadius:20,
        backgroundColor:'#087076'
    },
    
    cardOne:{
        flexDirection:'row', 
        paddingHorizontal:20, 
        marginTop:30
    },
    cardTwo:{
        flexDirection:'row', 
        paddingHorizontal:20,
        marginTop:15
    },
    text:{
        color:'white',
        marginTop:10
    }

})