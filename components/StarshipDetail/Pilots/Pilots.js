import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import Context from '../../../Context';
import pilotsData from '../../../data/pilots';

export default function Pilots({ ship }) {
    const { orientation } = useContext(Context);
    let { pilots } = ship;
    let styles = getStyles(orientation);

    let pilotsList = pilotsData.filter(pilot => pilots.includes(pilot.id));
    
    return (
        <View
          style={styles.container}
        >
          {pilotsList.length === 1 ? (
            <Text style={styles.title}>Pilot</Text>
          ) : (
            <Text style={styles.title}>Pilots</Text>
          )}
            
          {orientation === "PORTRAIT" ? (
            <View style={styles.pilots}>
              {pilotsList.map((pilot) => 
                <View style={styles.card} key={pilot.id}>
                  <Image source={pilot.images[0]} style={styles.image}/> 
                  <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode='tail'>{pilot.name}</Text>
                  <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>{pilot.homeworld}</Text>
                </View>
              )}
            </View>
          ) : (
            <View style={styles.pilots}>
              <ScrollView 
                horizontal={true}
              >
                {pilotsList.map((pilot) => 
                  <View style={styles.card} key={pilot.id}>
                    <Image source={pilot.images[0]} style={styles.image}/> 
                    <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode='tail'>{pilot.name}</Text>
                    <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>{pilot.homeworld}</Text>
                  </View>
                )}
              </ScrollView>
            </View>
          )}
        </View>
    );
};

const getStyles = (orientation) => {
    if (orientation === 'PORTRAIT') {
      return StyleSheet.create({
        container: {
          alignItems: "center",
          flex: 1,
          height: '100%',
          width: '100%',
          paddingTop: 30,
        },
        title: {
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 24,
          fontWeight: '500',
          color: '#ffffff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        card: {
          marginTop: 20,
          backgroundColor: '#333333',
          alignItems: "center",
          margin: 10,
          borderRadius: 10,
          height: 250,
      
          flex: 1,
          minWidth: 200,
          maxWidth: 335,
          maxHeight: 250
        },
        image: {
          width: 335,
          height: 187.5,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        },
        cardTitle: {
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
          alignItems: "flex-start",
          flex: 1,
          height: '100%',
          width: '100%',
          paddingTop: 30,
        },
        title: {
          paddingRight: 20,
          fontSize: 24,
          fontWeight: '500',
          color: '#ffffff',
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        pilots: {
          flex: 1
        },
        card: {
          marginTop: 20,
          backgroundColor: '#333333',
          alignItems: "center",
          borderRadius: 10,
          height: 250,
          marginRight: 20,
      
          flex: 1,
          minWidth: 200,
          maxWidth: 335,
          maxHeight: 250
        },
        image: {
          width: 335,
          height: 187.5,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        },
        cardTitle: {
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
  