import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import Context from '../../../Context';

export default function Stats({ ship }) {
    const { orientation } = useContext(Context);
    let { 
      length, 
      cost_in_credits, 
      crew, passengers, 
      hyperdrive_rating, 
      MGLT, 
      cargo_capacity, 
      max_atmosphering_speed,
      consumables,
      consumables_unit 
    } = ship;
    let styles = getStyles(orientation);
    
    return (
        <View
          style={styles.container}
        >
            <Text style={styles.title}>Stats</Text>
            <ScrollView 
              style={styles.statsContainer} 
              contentContainerStyle={styles.contentContainer}
              horizontal={true} >
                <View style={styles.statsItem}>
                    <Text style={styles.statsItemTitle}>Length</Text>
                    <Text style={styles.statsItemNumber}>{length}</Text>
                    <Text style={styles.unit}>Meters</Text>
                </View>

                <View style={styles.statsItem}>
                    <Text style={styles.statsItemTitle}>Cost</Text>
                    <Text style={styles.statsItemNumber}>{cost_in_credits}</Text>
                    <Text style={styles.unit}>Credits</Text>
                </View>

                <View style={styles.statsItem}>
                    <Text style={styles.statsItemTitle}>Crew</Text>
                    <Text style={styles.statsItemNumber}>{crew}</Text>
                </View>

                <View style={styles.statsItem}>
                    <Text style={styles.statsItemTitle}>Passengers</Text>
                    <Text style={styles.statsItemNumber}>{passengers}</Text>
                </View>

                <View style={styles.statsItem}>
                    <Text style={styles.statsItemTitle}>Hyperdrive Rating</Text>
                    <Text style={styles.statsItemNumber}>{hyperdrive_rating}</Text>
                </View>

                <View style={styles.statsItem}>
                    <Text style={styles.statsItemTitle}>MGLT</Text>
                    <Text style={styles.statsItemNumber}>{MGLT}</Text>
                </View>

                <View style={styles.statsItem}>
                    <Text style={styles.statsItemTitle}>Cargo Capacity</Text>
                    <Text style={styles.statsItemNumber}>{cargo_capacity}</Text>
                    <Text style={styles.unit}>Kilograms</Text>
                </View>

                <View style={styles.statsItem}>
                    <Text style={styles.statsItemTitle}>Max. Atmosphere Speed</Text>
                    <Text style={styles.statsItemNumber}>{max_atmosphering_speed}</Text>
                    <Text style={styles.unit}>Miles Per Hour</Text>
                </View>

                <View style={styles.statsItem}>
                    <Text style={styles.statsItemTitle}>Consumables</Text>
                    <Text style={styles.statsItemNumber}>{consumables}</Text>
                    <Text style={styles.unit}>{consumables_unit}</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const getStyles = (orientation) => {
    if (orientation === 'PORTRAIT') {
      return StyleSheet.create({
        container: {
          flex: 1,
          height: '100%',
          width: '100%'
        },
        contentContainer: {
          flexGrow: 1,
          justifyContent: 'space-between',
        },
        title: {
          paddingTop: 30,
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 24,
          fontWeight: '500',
          color: '#ffffff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        subtitle: {
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 18,
          color: '#fff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
          maxHeight: 30,
        },
        statsContainer: {
            flex: 1,
            flexGrow: 1,
            flexDirection: "row",
            paddingTop: 20,
            paddingLeft: 20,
        },
        statsItem: {
            flex: 1,
            marginRight: 50,
            alignItems: "center",
        },
        statsItemTitle: {
            fontSize: 18,
            color: '#fff',
            textTransform: "uppercase",
            fontFamily: "Helvetica Neue",
        },
        statsItemNumber: {
          paddingTop: 10,
          fontSize: 48,
          color: '#fff',
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        unit: {
            paddingTop: 10,
            fontSize: 12,
            color: '#fff',
            textTransform: "uppercase",
            fontFamily: "Helvetica Neue",
        },
      });
    } else {
      return StyleSheet.create({
        container: {
          flex: 1,
          height: '100%',
          width: '100%'
        },
        contentContainer: {
          flexGrow: 1,
          justifyContent: 'space-between',
        },
        title: {
          paddingTop: 30,
          paddingRight: 20,
          fontSize: 24,
          fontWeight: '500',
          color: '#ffffff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        subtitle: {
          paddingRight: 20,
          fontSize: 18,
          color: '#fff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
          maxHeight: 30,
        },
        statsContainer: {
            flex: 1,
            flexGrow: 1,
            flexDirection: "row",
            paddingTop: 20,
        },
        statsItem: {
            flex: 1,
            marginRight: 50,
            alignItems: "center",
        },
        statsItemTitle: {
            fontSize: 18,
            color: '#fff',
            textTransform: "uppercase",
            fontFamily: "Helvetica Neue",
        },
        statsItemNumber: {
          paddingTop: 10,
          fontSize: 48,
          color: '#fff',
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        unit: {
            paddingTop: 10,
            fontSize: 12,
            color: '#fff',
            textTransform: "uppercase",
            fontFamily: "Helvetica Neue",
        },
      });
    }
  } 
  