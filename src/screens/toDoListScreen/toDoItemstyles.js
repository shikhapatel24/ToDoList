import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    checkBoxView: {
        height: 20,
        width: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    doneCheckBox: {
        borderColor: '#888',
    },
    todoItem: {
        // display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
    },
    todoItemText: {
        flex: 1,
        marginRight: 8,
        color: '#333',
    },
    completed: {
        textDecoration: 'line-through',
        color: '#888',
    },
    deleteButton: {
        backgroundColor: '#ff6347',
        color: '#fff',
        padding: 4,
        borderRadius: 4,
    },
});
