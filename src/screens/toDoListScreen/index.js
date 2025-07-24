import React, { useState } from 'react';
import {View, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import TodoItem from './TodoItem';
import styles from "./styles";
import Icon from 'react-native-vector-icons/Feather';
import {Metrics} from "../../common/styles";

export default function TodoList() {
    // State Hooks
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Doctor Appointment', completed: true },
        { id: 2, text: 'Meeting at School', completed: false },
    ]);
    const [text, setText] = useState('');
    // Function to Add Task
    function addTask() {
        if (text.length === 0) {
            return;
        }
        const newTask = { id: Date.now(), text, completed: false };
        setTasks([...tasks, newTask]);
        setText('');
    }
    // Function to Delete Task
    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }
    // Function to Toggle Task Completion
    function toggleCompleted(id) {
        setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView style={styles.scrollView}>
                {tasks.map(task => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted}
                    />
                ))}
                <View style={styles.addContainer}>
                    <TextInput
                        value={text}
                        onChangeText={setText}
                        placeholder="New Task"
                        style={styles.textInputView}
                    />
                    <TouchableOpacity style={styles.addBtnView} onPress={addTask}>
                        <Icon name="plus" size={Metrics.VerticalScaleValue(20)} color="#2143B5" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
