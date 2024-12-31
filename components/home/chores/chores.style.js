import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginHorizontal: 20,
        marginBottom: 20,
        borderWidth: 2,  // Debug border
        borderColor: 'blue',
    },
    choreMessage: {
        fontSize: 26,
        color: "red",
        textAlign: 'center',
        width: '100%',
        borderWidth: 2,  // Debug border
        borderColor: 'green',
    },
    chore: {
        fontSize: 22,
        color: "blue",
        textAlign: 'left',
        width: '100%',
        borderWidth: 2,  // Debug border
        borderColor: 'green',
    },
});

export default styles;