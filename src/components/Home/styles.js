import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../assets/theme';

export default StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.padding,
    },
    photo: {
        width: '100%',
        height: '100%',
        borderRadius: 40
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    notification:{
        width:30,
        height:30
    }

})