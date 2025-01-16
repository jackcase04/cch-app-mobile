import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 30,
    },
    welcomeMessage: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: "DMBold",
        color: '#312651',
        textAlign: 'left',
        marginTop: 30,
        width: '100%',
        paddingHorizontal: 20,
    },
    tabsContainer: {
        width: "100%",
        marginTop: 20,
        paddingVertical: 10,
        backgroundColor: "#eaeaea",
    },
    tab: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginHorizontal: 4,
        borderRadius: 8,
        borderWidth: 1,
        width: 100
    },
    tabText: {
        fontFamily: "DMRegular",
        textAlign: 'center',
        fontSize: 16
    }
});

export default styles;