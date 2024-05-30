import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem({ text, onDelete, id }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
      <Pressable android_ripple={{color: 'green'}}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={() => onDelete(id)}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  },
  goalText: {
    fontSize: 18,
  },
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
