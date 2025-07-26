import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    networkErrorContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 260,
        marginBottom: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    errorContainer: {
        width: "95%",
        // backgroundColor: "#eaeaea",
        margin: 10,
        borderRadius: 16,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    errorMessage: {
        fontFamily: "DMMedium",
        fontSize: 26,
        textAlign: 'center',
        width: 'auto',
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    error: {
        fontFamily: "DMRegular",
        fontSize: 20,
        textAlign: 'center',
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: 30,
      margin: 20,
    },
    loadingcontainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    welcomeMessage: {
      fontSize: 28,
      fontFamily: "DMBold",
      color: '#312651',
      textAlign: 'center',
      marginTop: 130,
      width: '100%',
      paddingHorizontal: 20,
    },
    selectMessage: {
      fontSize: 22,
      textAlign: 'center',
      marginTop: 180,
      marginBottom: 10,
      width: '100%',
      paddingHorizontal: 20,
      fontFamily: "DMRegular",
    },
    loginButton: {
        backgroundColor: "#FE7654",
        borderRadius: 16,
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    loginText: {
        fontSize: 16,
        color: "#F3F4F8",
        fontFamily: "DMBold",
    },
    signupButton: {
        backgroundColor: "#eaeaea",
        borderRadius: 16,
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    signupText: {
        fontSize: 16,
        color: "#312651",
        fontFamily: "DMBold"
    },
    selectedName: {
      fontFamily: "DMRegular",
      marginTop: 10,
    },
    picker: {
      width: '70%',
      backgroundColor: '#eaeaea',
      marginVertical: 10,
      color: 'black',
      borderRadius: 16,
      elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
  }
  });
  

export default styles;
