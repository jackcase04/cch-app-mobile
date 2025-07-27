import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
    },
    inputContainer: {
        width: '50%',
        marginVertical: 8,
    },
    inputLabel: {
        fontSize: 16,
        fontFamily: "DMBold",
        color: '#312651',
        alignSelf: 'center',
        marginBottom: 8,
        marginLeft: 4,
    },
    textInput: {
        height: 50,
        backgroundColor: '#F8F9FA',
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        fontFamily: "DMRegular",
        color: '#312651',
        borderWidth: 1,
        borderColor: '#E1E5E9',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    textInputFocused: {
        borderColor: '#FE7654',
        borderWidth: 2,
    },
    errorContainer: {
        backgroundColor: '#ffebee',
        borderColor: '#f44336',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        width: '70%',
        alignItems: 'center',
    },
    errorMessage: {
        color: '#d32f2f',
        fontFamily: "DMMedium",
        fontSize: 14,
        textAlign: 'center',
    }
  });
  

export default styles;
