import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: "black"
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
    },
    pickerWrapper: {
        alignItems: 'center',
    },
    pickerLabel: {
        fontSize: 16,
        marginBottom: 5,
        color: "black"
    },
    picker: {
        width: 100,
        backgroundColor: '#f0f0f0',
        height: 100,
    },
    pickerItem: {
        color: 'black',
        fontSize: 10,
        height: 100,
    },
    timeDisplay: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        color: "black"
    }
});

export default styles;