import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: "#eaeaea",
        borderRadius: 30,
    },
    welcomeMessage: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#312651',
        textAlign: 'center',
        marginTop: 80,
        width: '100%',
        paddingHorizontal: 20,
    },
    tabsContainer: {
        width: "100%",
        marginTop: 20,
        paddingVertical: 10,
        backgroundColor: "#dcdcdc",
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
        textAlign: 'center',
        fontSize: 16
    }
});

export default styles;