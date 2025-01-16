import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    choresContainer: {
        width: "95%",
        backgroundColor: "#eaeaea",
        margin: 10,
        borderRadius: 16,
    },
    noChoreMessage: {
        fontFamily: "DMMedium",
        fontSize: 26,
        textAlign: 'center',
        width: 'auto',
        marginVertical: 10
    },
    choreMessage: {
        fontFamily: "DMMedium",
        fontSize: 26,
        textAlign: 'center',
        width: 'auto',
        marginVertical: 10
    },
    chore: {
        fontFamily: "DMRegular",
        fontSize: 20,
        textAlign: 'center',
        width: '100%',
        marginBottom: 10,
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
        backgroundColor: "#eaeaea",
        width: "95%",
        borderRadius: 16,
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
        fontFamily: "DMRegular",
        fontSize: 16,
        textAlign: 'center',
    },
    Button: {
        backgroundColor: "#FE7654",
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    Text: {
        fontFamily: "DMBold",
        fontSize: 16,
        color: "#F3F4F8",
    }
});

export default styles;