import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import home from '../../assets/icons/home.png';

const MyTabBar = ({ state, descriptors, navigation,  }) =>{
    console.log('state',state)
//   const focusedOptions = descriptors[state.routes[state.index].key].options;

//   if (focusedOptions.tabBarVisible === false) {
//     return null;
//   }

  return (
<View style={styles.wrapper}>
    <View style={styles.container}>
      {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const logo = route.params
          console.log('logo',logo)
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
        
        if(index === 2){
            return (
                <TouchableOpacity
                  key={route.key}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={styles.touchableOpacity}
                >
                    <View style={styles.homeBack}>
                        <Image source={home} style={styles.image}/> 
                    </View>
                </TouchableOpacity>
              );
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.touchableOpacityTwo}
          >
              {logo && <Image source={logo.icon} style={{width:20,height:20}}/>}
            <Text style={{ color: isFocused ? 'blue' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
    </View>
  );
}

export default MyTabBar;
