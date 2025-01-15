import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        marginHorizontal: 20,
        marginBottom: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    noChoreMessage: {
        fontSize: 26,
        textAlign: 'center',
        width: 'auto',
        marginVertical: 10
    },
    choreMessage: {
        fontSize: 26,
        textAlign: 'center',
        width: 'auto',
        marginTop: 10
    },
    chore: {
        fontSize: 20,
        textAlign: 'center',
        width: '100%',
        marginBottom: 3,
        paddingHorizontal: 10,
    },
    dropdownMenu: {
        textAlign: 'center',
        borderWidth: 2,  // Debug border
        borderColor: 'grey',
        borderRadius: 10,
        backgroundColor: "darkgrey",
        width: 100,
    },
    remindersContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    times: {
        textAlign: 'center',
        fontSize: 18,
        borderWidth: 1,  // Debug border
        borderColor: 'grey',
        borderRadius: 1,
        backgroundColor: "lightgrey",
    },
    messages: {
        fontSize: 16,
        textAlign: 'center',
    },
    Button: {
        padding: 5,
        backgroundColor: '',
        borderRadius: 10,
    },
    Text: {
        fontSize: 24,
        color: '#007AFF',
    }
});

export default styles;