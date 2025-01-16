import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        width: 40,
        marginLeft: 'auto',
        marginRight: 10,
        marginTop: 10,
    },
    menu: {
        width: 30,
        height: 30,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalContent: {
        height: "100%",
        position: 'absolute',
        paddingVertical: 80,
        width: 250,
        right: 0,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 5,  // for Android shadow
        shadowColor: '#000',  // for iOS shadow
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    menuHeader: {
        flexDirection: "row",
        backgroundColor: "#FE7654",
        width: '95%',
        height: 120,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        marginBottom: 20,
    },
    appTitle: {
        fontFamily: "DMBold",
        fontSize: 30,
        marginLeft: 10,
        marginTop: 30,
    },
    logoutButton: {
        flexDirection: "row",
        color: 'black',
    },
    logoutText: {
        paddingLeft: 20,
        fontFamily: "DMMedium",
        fontSize: 20,
        paddingRight: 10
    },
    menuIcon: {
        width: 25,
        height: 25,
    },
    ccf_logo_container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        width: 70,
        height: 70,
        marginLeft: 10,
        backgroundColor: 'white',
        borderRadius: 12,
    },
    ccf_logo: {
        width: 50,
        height: 50,
    }
});

export default styles;