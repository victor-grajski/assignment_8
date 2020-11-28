import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Context from '../../Context';

import DetailHeartButton from '../DetailHeartButton/DetailHeartButton';

export default function StarshipDetail({ route, navigation }) {
    const { orientation } = useContext(Context);
    let ship = route.params.ship;
    let { name, manufacturer, images } = ship;
    let image = Image.resolveAssetSource(images[0]);
    let styles = getStyles(orientation);

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <DetailHeartButton ship={ship} />
        ),
      });
    }, [navigation]);
    
    return (
        <View
            style={styles.container}
        >
            <Image source={image} style={styles.image}/> 
            <Text style={styles.title}>{ship.name}</Text>
            <Text style={styles.title}>{ship.manufacturer}</Text>
            <Text style={styles.title}>{ship.starship_class}</Text>
        </View>
    );
};

const getStyles = (orientation) => {
    if (orientation === 'PORTRAIT') {
      return StyleSheet.create({
        container: {
          backgroundColor: '#333333',
          alignItems: "center",
          flex: 1,
          height: '100%',
          width: '100%'
        },
        image: {
          width: '100%',
          height: 300
        },
        title: {
          paddingTop: 10,
          paddingLeft: 10,
          fontSize: 18,
          color: '#ffffff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
          maxHeight: 40,
          width: 315
        },
        subtitle: {
          paddingTop: 3,
          paddingLeft: 10,
          fontSize: 14,
          color: '#1BBCEA',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
          maxHeight: 30,
          width: 315
        },
      });
    } else {
      return StyleSheet.create({
        container: {
          backgroundColor: '#333333',
          alignItems: "center",
          flex: 1,
          height: '100%',
          width: '100%'
        },
        image: {
          width: '100%',
          height: 300
        },
        title: {
          paddingTop: 10,
          paddingLeft: 10,
          fontSize: 18,
          color: '#ffffff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
          maxHeight: 40,
          width: 315
        },
        subtitle: {
          paddingTop: 3,
          paddingLeft: 10,
          fontSize: 14,
          color: '#1BBCEA',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
          maxHeight: 30,
          width: 315
        },
      });
    }
  } 
  