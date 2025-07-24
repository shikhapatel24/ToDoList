import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './toDoItemstyles';
import Icon from 'react-native-vector-icons/Feather';

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
    return (
        <View style={styles.todoItem}>
            <TouchableOpacity
                style={[styles.checkBoxView, task.completed && styles.doneCheckBox]}
                onPress={() => toggleCompleted(task.id)}>
                {
                    task.completed && <Icon name="check" size={15} color="#888" />
                }
            </TouchableOpacity>
            <Text style={[styles.todoItemText, task.completed && styles.completed]}>
                {task.text}
            </Text>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteTask(task.id)}
            >
                <Text style={{ color: '#fff' }}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
}
