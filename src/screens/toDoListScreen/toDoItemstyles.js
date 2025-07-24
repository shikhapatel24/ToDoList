import {StyleSheet} from 'react-native';
import {Metrics} from "../../common/styles";

export default StyleSheet.create({
    checkBoxView: {
        height: Metrics.ModerateScale(20),
        width: Metrics.ModerateScale(20),
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: Metrics.ModerateScale(5),
        marginRight: Metrics.ScaleValue(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    doneCheckBox: {
        borderColor: '#888',
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Metrics.VerticalScaleValue(8),
        padding: Metrics.ModerateScale(8),
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: Metrics.ModerateScale(4),
    },
    todoItemText: {
        flex: 1,
        marginRight: Metrics.ScaleValue(8),
        color: '#333',
    },
    completed: {
        textDecoration: 'line-through',
        color: '#888',
    },
    deleteButton: {
        backgroundColor: '#ff6347',
        color: '#fff',
        padding: Metrics.ModerateScale(4),
        borderRadius: Metrics.ModerateScale(4),
    },
});
