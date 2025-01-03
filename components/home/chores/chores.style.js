import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        margin: 20,
        borderWidth: 2,  // Debug border
        borderColor: 'blue',
    },
    noChoreMessage: {
        fontSize: 26,
        color: "red",
        textAlign: 'center',
        width: 'auto',
        borderWidth: 2,  // Debug border
        borderColor: 'green',
        flexShrink: 1,
        height: 170
    },
    choreMessage: {
        fontSize: 26,
        color: "red",
        textAlign: 'center',
        width: 'auto',
        borderWidth: 2,  // Debug border
        borderColor: 'green',
        flexShrink: 1,
    },
    chore: {
        fontSize: 22,
        color: "blue",
        textAlign: 'center',
        width: '100%',
        borderWidth: 2,  // Debug border
        borderColor: 'green',
    },
    dropdownMenu: {
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 20,
        borderWidth: 2,  // Debug border
        borderColor: 'green',
        maxHeight: 100
    },
    times: {
        textAlign: 'center',
        fontSize: 20,
        borderWidth: 2,  // Debug border
        borderColor: 'green',
        backgroundColor: "grey"
    },
    messages: {
        fontSize: 16,
        textAlign: 'center',
    },
    Button: {
        marginTop: 15,
        marginBottom: 15,
        padding: 5,
        borderWidth: 2,  // Debug border
        borderColor: 'yellow',
    },
    Text: {
        textAlign: 'center',
        fontSize: 24
    }
});

export default styles;