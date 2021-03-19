import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../assets/theme';

export default StyleSheet.create({
    background: {
        resizeMode: "cover",
        height: SIZES.height,
        width: SIZES.width,
        paddingHorizontal:20
    },
    photo:{
        width: '100%',
        height: '100%',
        borderRadius: 50
    },
    img:{
        width:40,
        height:40,
        alignSelf:'center'
    },
    menu:{
        width:30,
        height:30
    },
    name:{
        color:'white', 
        textAlign:'center',
        top:30
    }
    
    
   
})