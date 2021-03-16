import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../assets/theme';

export default StyleSheet.create({
    background: {
        resizeMode: "cover",
        height: SIZES.height,
        width: SIZES.width
    },
    rectangle: {
        resizeMode: "cover",
        height: SIZES.height,
        width: SIZES.width
    },
    trace: {
        resizeMode: "cover",
        height: SIZES.height,
        width: SIZES.width
    },
    button: {
        width:SIZES.width - 80,
        bottom:180,
        alignSelf:'center'
    }
   
})