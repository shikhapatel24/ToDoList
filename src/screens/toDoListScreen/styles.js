import {StyleSheet} from 'react-native';
import {Metrics} from "../../common/styles";

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: Metrics.VerticalScaleValue(70),
        marginBottom: Metrics.VerticalScaleValue(30),
        marginHorizontal: Metrics.ScaleValue(25),
    },
    scrollView: {
        flex: 1,
    },
    addContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Metrics.VerticalScaleValue(40),
    },
    textInputView: {
        flex: 1,
        height: Metrics.VerticalScaleValue(40),
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: Metrics.ModerateScale(5),
        padding: Metrics.ModerateScale(8),
    },
    addBtnView: {
        height: Metrics.VerticalScaleValue(40),
        width: Metrics.VerticalScaleValue(40),
        backgroundColor: '#C0C2CC',
        marginLeft: Metrics.ScaleValue(10),
        borderRadius: Metrics.VerticalScaleValue(20),
        alignItems: 'center',
        justifyContent: 'center',
    },
});
